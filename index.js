class Person {
    constructor(name) {
        this.name = name
    }
}


class Student extends Person {
    say() {
        console.log('>>> my name is', this.name)
    }
}

const Tom = new Student('tom')
Tom.say()

// console.log('hello world')