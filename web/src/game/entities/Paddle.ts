export type PaddleOwner = 'player' | 'ai'

export class Paddle {
    x: number
    y: number
    radius: number
    owner: PaddleOwner

    prevX: number
    prevY: number

    constructor (x: number, y: number, radius: number, owmer: PaddleOwner) {
        this.x = x
        this.y = y
        this.prevX = x
        this.prevY = y
        this.radius = radius   
        this.owner = owmer
    }

    moveTO(x: number, y: number) {
        this.prevX = this.x
        this.prevY = this.y
        this.x = x
        this.y = y
    }

    get velocityX() { return this.x - this.prevX }
    get velocityY() { return this.y - this.prevY }
}