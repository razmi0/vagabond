import { CanvasClassType } from "../canvas/canvas";

const pieceSize = 40;
const pieceColor = "white";
const exitColor = "#e3d5ca";

const maxRoomWidth = 7 * pieceSize;
const minRoomWidth = 3 * pieceSize;
const maxRoomHeight = 5 * pieceSize;
const minRoomHeight = 3 * pieceSize;

const maxExists = 4;

class Room {
  private width: number;
  private height: number;
  private coord: [number, number];
  private nExits: number;
  private canvas: InstanceType<CanvasClassType>;

  constructor(canvas: InstanceType<CanvasClassType>) {
    this.canvas = canvas;
    [this.width, this.height] = this.setRandomRoomDimensions();
    this.coord = this.setRandomCoord() as [number, number];
    this.nExits = Math.floor(Math.random() * maxExists) + 1;
    this.draw();
  }

  private setRandomRoomDimensions() {
    const width = Math.floor(Math.random() * (maxRoomWidth - minRoomWidth + 1)) + minRoomWidth;
    const height = Math.floor(Math.random() * (maxRoomHeight - minRoomHeight + 1)) + minRoomHeight;
    return [width, height];
  }

  private setRandomCoord() {
    const x = Math.floor(Math.random() * (this.canvas.getDimensions()[0] - this.width));
    const y = Math.floor(Math.random() * (this.canvas.getDimensions()[1] - this.height));
    return [x, y];
  }

  public draw() {
    this.canvas.drawRect(this.coord, [this.width, this.height], pieceColor);
    this.drawExits();
  }

  private drawExits() {
    let exitPosition = ["top", "bot", "right", "left"];
    for (let i = 0; i < this.nExits; i++) {
      const exit = exitPosition[Math.floor(Math.random() * exitPosition.length)];
      exitPosition = exitPosition.filter((pos) => pos !== exit);
      console.log("exit : ", exit);
      switch (exit) {
        case "top":
          this.canvas.drawRect(
            [this.coord[0] + this.width / 2 - pieceSize / 2, this.coord[1] - pieceSize],
            [pieceSize, pieceSize],
            exitColor
          );
          break;
        case "bot":
          this.canvas.drawRect(
            [this.coord[0] + this.width / 2 - pieceSize / 2, this.coord[1] + this.height],
            [pieceSize, pieceSize],
            exitColor
          );
          break;
        case "right":
          this.canvas.drawRect(
            [this.coord[0] + this.width, this.coord[1] + this.height / 2 - pieceSize / 2],
            [pieceSize, pieceSize],
            exitColor
          );
          break;
        case "left":
          this.canvas.drawRect(
            [this.coord[0] - pieceSize, this.coord[1] + this.height / 2 - pieceSize / 2],
            [pieceSize, pieceSize],
            exitColor
          );
          break;
      }
    }
  }

  //   private getRandomExit() {
  //     const top;
  //   }
}

export type RoomClassType = typeof Room;

export default Room;
