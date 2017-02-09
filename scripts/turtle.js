function toRadians (degrees) {
  return degrees * (Math.PI / 180)
}

export default class Turtle {
  constructor (canvas, ctx) {
    this.canvas = canvas
    this.ctx = ctx

    this.x = 0
    this.y = 0
    this.angle = -90
    this.penIsDown = true

    this.reset(false)
  }

  reset (clear = true) {
    this.center()
    this.angle = -90
    this.penIsDown = true

    this.ctx.fillStyle = this.ctx.strokeStyle = 'black'
    this.ctx.lineWidth = 1

    if (clear) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }

  _goto (x, y) {
    if (this.penIsDown) {
      this.ctx.lineTo(x, y)
      this.ctx.stroke()
    } else {
      this.ctx.moveTo(x, y)
    }

    this.x = x
    this.y = y
  }

  goto (x, y) {
    if (this.penIsDown) {
      this.ctx.beginPath()
      this.ctx.moveTo(this.x, this.y)
      this.ctx.lineTo(x, y)
      this.ctx.closePath()
      this.ctx.stroke()
    } else {
      this.ctx.moveTo(x, y)
    }

    this.x = x
    this.y = y
  }

  center () {
    this.x = this.canvas.width / 2
    this.y = this.canvas.height / 2
    this.ctx.moveTo(this.x, this.y)
  }

  _forward (amount) {
    let dx = amount * Math.cos(toRadians(this.angle))
    let dy = amount * Math.sin(toRadians(this.angle))
    this._goto(this.x + dx, this.y + dy)
  }

  forward (amount) {
    let dx = amount * Math.cos(toRadians(this.angle))
    let dy = amount * Math.sin(toRadians(this.angle))
    this.goto(this.x + dx, this.y + dy)
  }

  _backward (amount) {
    this._forward(-amount)
  }

  backward (amount) {
    this.forward(-amount)
  }

  triangle (size, fill = false) {
    if (this.penIsDown) {
      this.ctx.beginPath()
      this.ctx.moveTo(this.x, this.y)
      this.turn(90)
      this._forward(size / 2)
      this.turn(-120)
      this._forward(size)
      this.turn(-120)
      this._forward(size)
      this.turn(-120)
      this._forward(size / 2)
      this.turn(-90)
      this.ctx.closePath()
      if (fill) {
        this.ctx.fill()
      } else {
        this.ctx.stroke()
      }
    }
  }

  circle (radius, fill = false) {
    if (this.penIsDown) {
      this.ctx.beginPath()
      this.ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI)
      this.ctx.closePath()
      if (fill) {
        this.ctx.fill()
      } else {
        this.ctx.stroke()
      }
    }
  }

  face (angle) {
    this.angle = angle
  }

  turn (angle) {
    this.angle += angle
  }

  background (color) {
    let old = this.ctx.fillStyle
    this.ctx.fillStyle = color
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = old
  }

  penToggle () {
    this.penIsDown = !this.penIsDown
  }

  penUp () {
    this.penIsDown = false
  }

  penDown () {
    this.penIsDown = true
  }

  penSize (size) {
    this.ctx.lineWidth = size
  }

  penColor (color) {
    this.ctx.strokeStyle = color
  }

  fillColor (color) {
    this.ctx.fillStyle = color
  }

  color (color) {
    this.ctx.strokeStyle = color
    this.ctx.fillStyle = color
  }
}
