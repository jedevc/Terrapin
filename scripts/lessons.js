export default [
  {
    name: 'The road ahead',
    code: `
// Welcome to terrapin!
// We're going to learn some basic javascript by programming a turtle in the
// canvas on the right hand side.

// By the end, we'll have learnt loops, conditionals, functions, plus some basic
// problem solving skills which get skipped over sometimes.
// You are encouraged to play around with the code in this editor. After all,
// the best way to learn is by doing.

// When you're ready to start, click the next button in the top right corner
// to get going.
`.trimLeft()
  },
  {
    name: 'First steps',
    code: `
// This makes the turtle go forward.
// Try changing the number to something else.
turtle.forward(100)

// And this draws the turtle.
// Try adding '//' at the beginning of the line to comment it out.
turtle.triangle(10)
// Poof! Turtle gone.
`.trimLeft()
  },
  {
    name: 'Turning the tide',
    code: `
// New stuff:
// turtle.turn(angle) makes the turtle spin around.
// To turn left, use a negative number instead of a positive one.

// Try to make the turtle draw a square!
turtle.forward(100)
turtle.turn(90)
turtle.forward(100)

turtle.triangle(10)
`.trimLeft()
  },
  {
    name: 'Getting loopy',
    code: `
// Let's see the square example again.
// Repeat 4 times
for (var i = 0; i < 4; i++) {
  // Draw one side of the square
  turtle.forward(100)
  turtle.turn(90)
}
// Try to modify the above example to draw a hexagon. The external angle you
// need to turn is 60 degrees.
`.trimLeft()
  },
  {
    name: 'Under construction',
    code: `
// Under construction...
`.trimLeft()
  },
  {
    name: 'That\'s all folks!',
    code: `
// That's all of the lessons done!
// So, hopefully you have a better understanding of programming than you did
// before. I'm happy to have helped you out!

// If you're interested in learning more javascript, then you can check out all
// sorts of tutorials online for free. They're not too hard too find, just
// search around a bit and find something you like.

// For now, though, feel free to play around below and make whatever you want!

turtle.background('black')
turtle.penSize(3)

for (var i = 10; i < 160; i += 10) {
  turtle.penUp()
  turtle.goto(turtle.x - 12, turtle.y + 5)
  turtle.penDown()
  turtle.penColor(randomColor())
  for (var j = 0; j < 8; j++) {
    turtle.forward(i)
    turtle.turn(45)
  }
}
`.trimLeft()
  }
]
