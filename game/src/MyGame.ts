// MyGame - Example implementation of Game interface

import { Game, GameFramework } from "./index.js";

// start using objects
class MyGame extends Game {
    private vx: number = 100;
    private vy: number = 100;
    private x: number = 0;
    private y: number = 0;
    
    private vx2: number = 400;
    private vy2: number = 300;
    private x2: number = 100;
    private y2: number = 0;
    init(): void {

    }
    

    update(deltaTime: number): void {
        this.x += this.vx * deltaTime;
        this.y += this.vy * deltaTime;

        if (this.x <= 0 || this.x + 50 >= 800) this.vx = -this.vx;
        if (this.y <= 0 || this.y + 50 >= 600) this.vy = -this.vy;

        this.x2 += this.vx2 * deltaTime;
        this.y2 += this.vy2 * deltaTime;

        if (this.x2 <= 0 || this.x2 + 50 >= 800) this.vx2 = -this.vx2;
        if (this.y2 <= 0 || this.y2 + 50 >= 600) this.vy2 = -this.vy2;

        if (Math.abs(this.x - this.x2) < 50 && Math.abs(this.y - this.y2) < 50) {
            [this.vx, this.vx2] = [this.vx2, this.vx];
            [this.vy, this.vy2] = [this.vy2, this.vy];
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
       // ctx.clearRect(0, 0, 800, 600); // Clear the canvas
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, 50, 50); // Draw a rectangle at the current position

        ctx.fillStyle = "blue";
        ctx.fillRect(this.x2, this.y2, 50, 50); // Draw a rectangle at the current position
    }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600, "canvas");
framework.start();
console.log("test");
