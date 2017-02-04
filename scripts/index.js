import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/monokai.css'

import Turtle from './turtle'

import lessons from './lessons'

window.randomNumber = function(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower))
}

window.randomColor = function(saturation = 70, lightness = 60) {
  return `hsl(${randomNumber(0, 360)}, ${saturation}%, ${lightness}%)`
}

window.turtle = null

let currentLesson = 0

window.onload = () => {
  let exec = () => {
    let code = editor.getValue()
    turtle.reset()

    let err = null
    try {
      window.eval(code)
    } catch (e) {
      err = e
    } finally {
      let errors = document.getElementById('errorView')
      if (err) {
        errors.classList.remove('success')
        errors.classList.add('error')
        errors.innerHTML = err
      } else {
        errors.classList.remove('error')
        errors.classList.add('success')
        errors.innerHTML = 'No errors!'
      }
    }
  }

  let editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
    mode: 'javascript',
    theme: 'monokai',
    lineNumbers: true,
    lineWrapping: true,
    scrollbarStyle: null
  })

  let timeout = null
  editor.on('change', (() => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      exec()
    }, 200)
  }))

  document.getElementById('lessonName').innerHTML = lessons[currentLesson].name
  editor.setValue(lessons[currentLesson].code)

  document.getElementById('lessonChangeButton').addEventListener('click', () => {
    currentLesson++
    if (currentLesson < lessons.length) {
      document.getElementById('lessonName').innerHTML = lessons[currentLesson].name
      editor.setValue(lessons[currentLesson].code)
    }
  })

  let canvas = document.getElementById('canvasView')
  canvas.addEventListener('click', () => {
    exec()
  })

  let ctx = canvas.getContext('2d')
  turtle = new Turtle(canvas, ctx)
}
