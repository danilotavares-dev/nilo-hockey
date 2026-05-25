export class Puck {
  x: number
  y: number
  vx: number
  vy: number
  radius: number

  constructor(x: number, y: number, radius: number) {
    this.x = x
    this.y = y
    this.vx = 0
    this.vy = 0
    this.radius = radius
  }

  update() {
    this.x += this.vx
    this.vy += this.vy
  }

  reset(centerX: number, centerY: number) {
    this.x = centerX
    this.y = centerY
    this.vx = 0
    this.vx = 0
  }
}
