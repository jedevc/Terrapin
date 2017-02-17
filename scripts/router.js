export default class Router {
  constructor (prefix, choices, error=null) {
    this.prefix = prefix

    this.choices = choices
    this.error = error

    this.current = 1
    this.update()

    this.callbacks = []
    window.addEventListener('hashchange', () => {
      if (this.update()) {
        this.callbacks.forEach(callback => { callback(this.content) })
      }
    })
  }

  get content () {
    if (this.current >= 1 && this.current <= this.choices.length) {
      return this.choices[this.current - 1]
    } else {
      return this.error
    }
  }

  get nextLink () {
    if (this.current >= this.choices.length) {
      return `#${this.prefix}${this.choices.length}`
    } else {
      return `#${this.prefix}${this.current + 1}`
    }
  }

  goto (location) {
    window.location = location
  }

  update () {
    if (window.location.hash.length > 0) {
      let match = window.location.hash.match(`#${this.prefix}(\\d+)`)
      if (match) {
        this.current = parseInt(match[1])
        return true
      }
      return false
    } else {
      this.current = 1
      return true
    }
  }

  onupdate (callback, fire = false) {
    this.callbacks.push(callback)
    if (fire) {
      callback(this.content)
    }
  }
}
