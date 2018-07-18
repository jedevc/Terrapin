export default [
  {
    name: 'Introduction',
    code: `
// Welcome to terrapin!

// Terrapin is a simple programming environment in which you can control a
// programmable turtle and draw lines with it. This kind of functionality
// can be found in many languages, including python, however, javascript does
// not and so I decided to make one.

// All of the code in here can be edited and run. As soon as you make changes,
// you should see those changes instantly reflected in the canvas on the right.

// When you're ready to start, click the next button in the top right corner
// to get going.

turtle.triangle(10)
`.trimLeft()
  },
  {
    name: 'Functionality',
    code: `
// The following should demonstrate all of the features of terrapin.

// Draw a collection of random shapes
turtle.forward(100)     // Move forward 100 pixels
turtle.turn(45)         // Turn 45 degrees (to the right)
turtle.backward(50)     // Move backward 50 pixels
turtle.penSize(5)       // Set the pen size to 5
turtle.penColor('red')  // Set the pen color to red
turtle.circle(75)       // Draw a circle with radius 75
turtle.triangle(10)     // Draw a triangle at the location of the turtle

// Move to another position without leaving a line
turtle.penUp()       // Raise the pen
turtle.center()      // Move to the center of the canvas
turtle.face(90)      // Turn to face down
turtle.forward(100)  // Move forward 100 pixels
turtle.penDown()     // Put the pen down again

// Draw a concentric circle
turtle.fillColor('blue')  // Set the fill color to blue
turtle.circle(20, true)   // Draw a filled circle with radius 20
turtle.fillColor('red')   // Set the fill color to red
turtle.circle(10, true)   // Draw a filled circle with radius 10
`.trimLeft()
  },
  {
    name: 'Circles',
    code: `
// The following code uses randomColor() to generate a set of circles.

for (let i = 200; i > 0; i -= 10) {
  turtle.color(randomColor())
  turtle.circle(i, true)
}

// Try clicking on the canvas to generate a new set.
`.trimLeft()
  },
  {
    name: 'Under construction',
    code: `
// Under construction...
`.trimLeft()
  },
  {
    name: 'The End',
    code: `
// Thanks for looking through my collection of random squiggles!

// Hopefully you had some fun along the way, and played with some of the
// numbers and code to make some cool things yourself. If not, why not do that
// here? No rush :)

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
