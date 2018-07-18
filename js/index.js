import Turtle from './turtle'

import CodeEditor from './editor'
import Router from './router'
import pages from './pages'

window.randomNumber = function (lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower))
}

window.randomColor = function (saturation = 70, lightness = 60) {
  return `hsl(${window.randomNumber(0, 360)}, ${saturation}%, ${lightness}%)`
}

window.turtle = null

window.onload = () => {
  // setup editor
  let editor = new CodeEditor('codeEditor', 'errorView')
  editor.onupdate(() => {
    window.turtle.reset()
  })

  // setup page navigation
  let router = new Router('page', pages, {name: 'Not Found', code: '// Page not found'})
  router.onupdate((content) => {
    document.getElementById('pageName').innerHTML = content.name
    editor.contents = content.code
    document.getElementById('pageLink').href = router.nextLink
  })

  // setup turtle
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
