const lesson1 = {
  name: 'First steps',
  code: 'turtle.forward(100)'
}

const lesson2 = {
  name: 'Turning the tide',
  code: `
turtle.forward(100)
turtle.turn(90)
turtle.forward(100)`.trim()
}

export {lesson1, lesson2}
export default [lesson1, lesson2]
