import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/monokai.css'

import Turtle from './turtle'

window.randomNumber = function(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower))
}

window.randomColor = function(saturation = 70, lightness = 60) {
  return `hsl(${randomNumber(0, 360)}, ${saturation}%, ${lightness}%)`
}

window.turtle = null

let sample = `
turtle.background('black')
turtle.penSize(5)
for (let i = 0; i < 60; i++) {
  turtle.color(randomColor())
  turtle.forward(i)
  turtle.turn(20)
}`.trim()

window.onload = () => {
  let exec = () => {
    turtle.reset()
    let code = editor.getValue()
    window.eval(code)
  }

  let editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: 'javascript',
    theme: 'monokai',
    lineNumbers: true,
    lineWrapping: true,
    scrollbarStyle: null
  })
  editor.setValue(sample)

  let timeout = null
  editor.on('change', (() => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      exec()
    }, 200)
  }))

  let canvas = document.getElementById('canvas')
  canvas.addEventListener('click', () => {
    exec()
  })

  let ctx = canvas.getContext('2d')
  turtle = new Turtle(canvas, ctx)

  exec()
}
