import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/monokai.css'

import Turtle from './turtle'

function randomNumber(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower))
}

function randomColor(saturation = 70, lightness = 60) {
  return `hsl(${randomNumber(0, 360)}, ${saturation}%, ${lightness}%)`
}

window.onload = () => {
  CodeMirror.fromTextArea(document.getElementById('code'), {
    lineNumbers: true,
    mode: 'javascript',
    lineWrapping: true,
    theme: 'monokai',
    scrollbarStyle: null
  })

  let c = document.getElementById('turtle')
  let turtle = new Turtle(c)

  turtle.background('black')
  turtle.penSize(5)
  for (let i = 0; i < 60; i++) {
    turtle.color(randomColor())
    turtle.forward(i)
    turtle.turn(20)
  }
}
