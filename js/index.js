import Turtle from './turtle'

import CodeEditor from './editor'
import Router from './router'
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
  let router = new Router('lesson', lessons, {name: 'Not Found', code: '// Lesson not found'})

  let originalTitle = document.title
  router.onupdate((content) => {
    document.title = `${originalTitle} - lesson ${router.current}`
    document.getElementById('lessonName').innerHTML = content.name
    editor.contents = content.code
    document.getElementById('lessonLink').href = router.nextLink
  }, true)

  // Setup turtle
  let canvas = document.getElementById('canvasView')
  canvas.addEventListener('click', () => {
    editor.update()
  })

  let resize = () => {
    let size = window.getComputedStyle(canvas).height
    size = parseInt(size)
    canvas.width = size
    canvas.height = size

    editor.update()
  }
  setTimeout(resize, 0)
  window.addEventListener('resize', resize)

  let ctx = canvas.getContext('2d')
  window.turtle = new Turtle(canvas, ctx)
}
