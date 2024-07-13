import { CONSTANT } from "../constant";

class Canvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  constructor(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvas.width = CONSTANT.default.canvas.dimensions[0];
    this.canvas.height = CONSTANT.default.canvas.dimensions[1];
  }

  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  public getContext(): CanvasRenderingContext2D {
    return this.ctx;
  }

  public clearRect(coords: [number, number], dimensions: [number, number]): void {
    this.ctx.clearRect(coords[0], coords[1], dimensions[0], dimensions[1]);
  }

  public resetCanvas = (): void => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  public getDimensions(): [number, number] {
    return [this.canvas.width, this.canvas.height];
  }

  public drawRect(coords: [number, number], dimensions: [number, number], color?: string): void {
    if (color) this.ctx.fillStyle = color;
    this.ctx.fillRect(coords[0], coords[1], dimensions[0], dimensions[1]);
  }

  public setFillColor(color: string = "white"): void {
    this.ctx.fillStyle = color;
  }
}
export type CanvasClassType = typeof Canvas;

export default Canvas;
