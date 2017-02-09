export default class Router {
  constructor (prefix, arr) {
    this.prefix = prefix

    this.choice = arr

    this.current = 1
    this.update()

    this.callbacks = []
    window.addEventListener('hashchange', () => {
      if (this.update()) {
        this.callbacks.forEach(callback => {callback(this.content)})
      }
    })
  }

  get content () {
    if (this.current <= this.choice.length) {
      return this.choice[this.current - 1]
    }
  }

  get nextLink () {
    return `#${this.prefix}${this.current + 1}`
  }

  goto (location) {
    window.location = location
  }

  update () {
    if (window.location.hash.length > 0) {
      let match = window.location.hash.match(`#${this.prefix}(\\d+)`)
      if (match) {
        let next = parseInt(match[1])
        if (next >= 1 && next <= this.choice.length) {
          this.current = next
          return true
        }
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
