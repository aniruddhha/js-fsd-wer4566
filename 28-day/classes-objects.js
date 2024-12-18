class Car {

    constructor() {
        this.speed = 0
        this.make = ''
        this.model = ''
    }

    speedUp() {
        this.speed += 5
    }

    getDetails() {
        return `Make ${this.make}, Model ${this.model}`
    }
}

const cr = new Car()
cr.speed = 100
cr.make = 'abc'
cr.model = 'pqr'

cr.speedUp()
console.log(`Speed is ${cr.speed}`)
console.log(cr.getDetails())
