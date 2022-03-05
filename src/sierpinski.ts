import { Triangle, Vector } from "./types";


let triangle = new Triangle(null, null, null);

const createSierpinskiTriangle = (ctx: CanvasRenderingContext2D, pos: Vector, depth: number) => {
    const size = pos.size / 2;
    triangle.A = { x: pos.x, y: pos.y, size, };
    triangle.B = { x: pos.x + size, y: pos.y, size, };
    triangle.C = { x: pos.x + size / 2, y: pos.y - Math.sin(Math.PI / 3) * size, size };

    if (depth === 0) {
        triangle.draw(ctx);
        return;
    }

    for (const item of [triangle.A, triangle.B, triangle.C]) {
        createSierpinskiTriangle(ctx, item, depth - 1);
    }
}

export default createSierpinskiTriangle;
