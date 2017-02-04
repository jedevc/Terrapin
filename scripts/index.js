import Turtle from './turtle'

import CodeEditor from './editor'
import lessons from './lessons'

window.randomNumber = function (lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower))
}

window.randomColor = function (saturation = 70, lightness = 60) {
  return `hsl(${window.randomNumber(0, 360)}, ${saturation}%, ${lightness}%)`
}

window.turtle = null

let currentLesson = 0

window.onload = () => {
  let editor = new CodeEditor('codeEditor', 'errorView')
  editor.onupdate(() => {
    window.turtle.reset()
  })

  document.getElementById('lessonName').innerHTML = lessons[currentLesson].name
  editor.contents = lessons[currentLesson].code

  document.getElementById('lessonChangeButton').addEventListener('click', () => {
    currentLesson++
    if (currentLesson < lessons.length) {
      document.getElementById('lessonName').innerHTML = lessons[currentLesson].name
      editor.contents = lessons[currentLesson].code
    }
  })

  let canvas = document.getElementById('canvasView')
  canvas.addEventListener('click', () => {
    editor.update()
  })

  let ctx = canvas.getContext('2d')
  window.turtle = new Turtle(canvas, ctx)
}
