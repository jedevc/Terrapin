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

window.onload = () => {
  // Setup editor
  let editor = new CodeEditor('codeEditor', 'errorView')
  editor.onupdate(() => {
    window.turtle.reset()
  })

  // Setup lesson navigation
  document.getElementById('lessonName').innerHTML = lessons[0].name
  editor.contents = lessons[0].code

  let currentLesson = 0
  document.getElementById('lessonChangeButton').addEventListener('click', () => {
    currentLesson++
    if (currentLesson < lessons.length) {
      document.getElementById('lessonName').innerHTML = lessons[currentLesson].name
      editor.contents = lessons[currentLesson].code
    }
  })

  // Setup turtle
  let canvas = document.getElementById('canvasView')
  canvas.addEventListener('click', () => {
    editor.update()
  })

  let ctx = canvas.getContext('2d')
  window.turtle = new Turtle(canvas, ctx)
}
