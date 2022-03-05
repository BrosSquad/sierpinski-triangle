import draw from "./sierpinski";
import { Vector } from "./types";

document.addEventListener('DOMContentLoaded', () => {
  main();
});

const DEFAULT_DEPTH = 2;
const CANVAS_WIDTH = 3000;
const CANVAS_HEIGHT = 3000;

function main() {
  const canvas = document.querySelector<HTMLCanvasElement>('#sierpinski-triangle');
  const depthInputElement = document.querySelector<HTMLInputElement>('input[type=number]');

  if (canvas === null) {
    console.error('Canvas is not found');
    return;
  }

  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  const height = canvas.height;
  const ctx = canvas.getContext('2d');

  const startingPosition = { x: 0, y: height, size: height };

  if (ctx === null) {
    console.error('Cannot obtain Canvas 2D Context -> Check you BROWSER Version');
    return;
  }

  let depth = DEFAULT_DEPTH | 0;

  if (depthInputElement !== null) {
    depthInputElement.value = DEFAULT_DEPTH.toString();

    depthInputElement.addEventListener('input', ({ target }) => {
      depth = parseInt((target as HTMLInputElement).value, 10) | 0;
      drawSierpinskiTriange(ctx, startingPosition, depth);
    });
  }

  drawSierpinskiTriange(ctx, startingPosition, depth);
}

function clearCanvas(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawSierpinskiTriange(ctx: CanvasRenderingContext2D, startingPosition: Vector, depth: number) {
  clearCanvas(ctx);

  draw(ctx, startingPosition, depth);
}
