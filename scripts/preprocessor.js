const traps = {
  for: /for.*\)\s*{/,
  while: /while.*\)\s*{/,
  if: /if.*\)\s*{/,
  function: /function.*\)\s*{/,
  class: /class.*{/
}

const allTraps = new RegExp('(' + Object
  .values(traps)
  .map(v => v.source)
  .join('|') + ')')

export class TrapProccessor {
  constructor (snippets) {
    this.snippets = snippets
  }

  evaluate (str) {
    return str.replace(allTraps, (match) => {
      for (let name of Object.keys(traps)) {
        if (match.startsWith(name)) {
          return match + this.snippets[name]
        }
      }
      return str
    })
  }
}
