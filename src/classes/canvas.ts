class Canvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  public getContext(): CanvasRenderingContext2D {
    return this.ctx;
  }

  public clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private setDimensions(width: number, height: number): void {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  public setup(): void {
    this.setDimensions(window.innerWidth, window.innerHeight);
    this.ctx.fillStyle = "black";
  }
}

export default Canvas;
