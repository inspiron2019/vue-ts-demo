// ? "noImplicitAny": false,
// ? "noImplicitThis": false,
function Greeter(greeting: string) {
    this.greeting = greeting
}
Greeter.prototype.run = function(speed: number) {
    return this.greeting + '' + speed
}
const greeter = new Greeter('Hope')

export default greeter