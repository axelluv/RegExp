class Validate {
    constructor() { }
  
    validateUsername(str) {
      return /^\w\[a-z]\[-_]\[0-9]\w$/.test(str)
    }
  }
  
  const nickname = new Validate()
  
  console.log(nickname.validateUsername('Axelluv'))