import type { CanvasClassType } from "../canvas/canvas";
import { CONSTANT } from "../constant";
import { randomCoord } from "./helpers";

type KeyboardDirectionType = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";

class Subject {
  private dimensions: [number, number];
  private speed: number;

  private coords: [number, number];

  private color: string;
  private canvas: InstanceType<CanvasClassType>;
  constructor(canvas: InstanceType<CanvasClassType>) {
    this.canvas = canvas;
    this.dimensions = [CONSTANT.default.subject.width, CONSTANT.default.subject.height];
    this.speed = CONSTANT.default.subject.speed;
    this.color = CONSTANT.default.subject.color;
    const [x, y] = randomCoord([canvas.getDimensions()[0], canvas.getDimensions()[1]]);
    this.coords = [x, y];
    this.canvas.drawRect(this.coords, this.dimensions, this.color);
    this.navigation();
  }

  private navigation() {
    document.addEventListener("keydown", (e) => {
      this.canvas.clearRect(this.coords, this.dimensions);
      this.move(e.key as KeyboardDirectionType);
      this.canvas.drawRect(this.coords, this.dimensions, this.color);
    });
  }

  private move(direction: KeyboardDirectionType) {
    switch (direction) {
      case "ArrowUp":
        this.changeCoords([null, -this.speed]);
        break;
      case "ArrowDown":
        this.changeCoords([null, this.speed]);
        break;
      case "ArrowLeft":
        this.changeCoords([-this.speed, null]);
        break;
      case "ArrowRight":
        this.changeCoords([this.speed, null]);
        break;
    }
  }

  private changeCoords([dx, dy]: [number | null, number | null]) {
    if (dx) this.coords[0] += dx;
    if (dy) this.coords[1] += dy;
  }

  public changeSpeed(speed: number) {
    this.speed = speed;
  }

  public changeColor(color: string) {
    this.color = color;
  }

  public getSpeed() {
    return this.speed;
  }
}

export type SubjectClassType = typeof Subject;
export default Subject;
