export default [
  {
    name: 'The road ahead',
    code: `
// Welcome to terrapin!
//
// What is terrapin, you might ask?
// Well, it's a entry-level tutorial to learn programming that I built out of
// frustration with existing tutorials. One of the best ways to learn is
// through actually doing and seeing the results of that as quickly as possible
// and that's what I've tried to make here.
//
// In this tutorial, we're going to be learning some basic javascript by
// programming a turtle to move and draw things. By the end, we'll have learnt
// loops, conditionals, functions, plus some basic problem solving skills which
// get skipped over sometimes. Don't worry if you don't know what any of that
// means - we'll get to it soon enough.
//
// You should definitely play around with the code in this editor. You can
// change it to say anything you like. It's through reading and editing the
// code that you'll learn better.
//
// When you're ready to start, click the next button in the top right corner
// to get going.
`.trimLeft()
  },
  {
    name: 'First steps',
    code: `
// This bit makes the turtle go forward and draw a line behind it.
// Try changing the number to something else.
turtle.forward(100)

// And this bit draws the turtle.
// Try adding '//' at the beginning of the line to make it into a comment (which
// means that the computer will ignore it).
turtle.triangle(10)
// Poof! Turtle gone.

// When you feel like you're done, click the next button again.
`.trimLeft()
  },
  {
    name: 'Turning the tide',
    code: `
// turtle.turn(angle) lets you rotate the turtle around. It uses degrees, so
// you can use any value between 0 and 360. The default is to turn right, but
// you can use a negative number instead to turn left.

// To get an idea of how it works, change the number below and see how the
// turtle rotates.
turtle.turn(45)

// Now that you've got that, try and change the code below to make the turtle
// draw a square. Remember that you can modify existing lines as well as adding
// new ones.
turtle.forward(100)
turtle.turn(90)
turtle.forward(100)

turtle.triangle(10)

// When you've finished drawing the square, move onto the next lesson.
`.trimLeft()
  },
  {
    name: 'Getting loopy',
    code: `
// Let's see the square example again.
// If you solved the last problem, you probably got something that looked a bit
// like this:
//   turtle.forward(100)
//   turtle.turn(90)
//   turtle.forward(100)
//   turtle.turn(90)
//   turtle.forward(100)
//   turtle.turn(90)
//   turtle.forward(100)
// However, there are some problems with this.
// You can see that there are A LOT of repetitions of the same two lines.
// Wouldn't it be nice if there was some way to repeat them without typing them
// out over and over?
//   turtle.forward(100) <---|
//                           | After turning, go forward again.
//   turtle.turn(90) >-------|
// We can do exactly this with a javascript for loop. Let's have a look - again,
// you don't need to fully understand eveything, we'll come back and look at
// it later.

// Repeat 4 times
for (var i = 0; i < 4; i++) {
  // Draw one side of the square
  turtle.forward(100)
  turtle.turn(90)
}

// Your task is to modify the above example to draw a hexagon instead of a
// square. Remember that a hexagon has 6 sides instead of 4 and it's external
// angle is 60 instead of 90. When you're done, click the next button.
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

// There were quite a few things that this tutorial glossed over a bit, sorry
// about that. However, if you're interested in learning more javascript, then
// you can check out all sorts of tutorials online for free. They're not too
// hard too find, just search around a bit and find something you like.

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
