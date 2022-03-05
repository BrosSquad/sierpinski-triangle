export type Vector = {
    x: number,
    y: number,
    size: number,
}

export class Triangle {
    public constructor(
        private a: Vector | null,
        private b: Vector | null,
        private c: Vector| null,
    ) {
    }

    public draw(ctx: CanvasRenderingContext2D) {
        if (this.a === null || this.b === null || this.c === null) {
            throw new Error('A, B and C vectors must not be null');
        }

        for (const item of [this.a, this.b, this.c]) {
            ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
            ctx.lineWidth = 10;

            ctx.beginPath();
            ctx.moveTo(item.x, item.y); // go to left vertex
            // note that (0,0) in canvas is the top left, so 'up' on the vertical component would use substraction.
            ctx.lineTo(item.x + item.size / 2, item.y - item.size * Math.sin(Math.PI / 3)); // draw line from left vertex to top vertex
            ctx.lineTo(item.x + item.size, item.y); // draw line from top vertex to right vertex
            ctx.lineTo(item.x, item.y); // draw line from right vertex back to left vertex
            ctx.closePath();
            ctx.stroke();
        }
    }

    public get A() {
        return this.a!;
    }

    public get B() {
        return this.b!;
    }

    public get C() {
        return this.c!;
    }

    public set A(value: Vector) {
        this.a = value;
    }

    public set B(value: Vector) {
        this.b = value;
    }

    public set C(value: Vector) {
        this.c = value;
    }
}
