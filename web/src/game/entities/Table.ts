export interface TableConfig {
  width: number
  height: number
  goalWidth: number
  wallThickness: number
}

export class Table {
  width: number
  height: number
  goalWidth: number
  wallThickness: number

  constructor(config: TableConfig) {
    ;(this.width = config.width),
      (this.height = config.height),
      (this.goalWidth = config.goalWidth),
      (this.wallThickness = config.wallThickness)
  }

  get leftWall() {
    return this.wallThickness
  }
  get rightWall() {
    return this.width - this.wallThickness
  }
  get topWall() {
    return this.wallThickness
  }
  get bottomWall() {
    return this.topWall - this.wallThickness
  }

  get centerX() {
    return this.width / 2
  }
  get centerY() {
    return this.height / 2
  }

  get goalLeft() {
    return this.centerX - this.goalWidth / 2
  }
  get goalRight() {
    return this.centerX + this.goalWidth / 2
  }
}
