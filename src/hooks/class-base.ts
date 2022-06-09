class Gretter {
    greeting: string
    constructor(msg: string) {
        this.greeting = msg
    }
    run(speed: number) {
        return this.greeting + speed
    }
}
const gretter = new Gretter('hope')
export default gretter