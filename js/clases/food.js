import { maxRowNo, maxColNo, gameBoard } from './snake.js';
export class Food {
    constructor(snake) {
        this.foodPos = [0, 0];
        this.foodElement = document.createElement('div');
        this.Snake = snake;
    }
    randomizePosition() {
        let pos = [];
        let i = 0;
        do {
            pos = [];
            pos.push(Math.floor(Math.random() * maxColNo) + 1);
            pos.push(Math.floor(Math.random() * maxRowNo) + 1);
            i++;
        } while (this.onSnake(pos));
        this.foodPos = pos;
    }
    drawFood() {
        this.foodElement.classList.add('food');
        this.foodElement.style.gridRowStart = this.foodPos[1].toString();
        this.foodElement.style.gridColumnStart = this.foodPos[0].toString();
        gameBoard === null || gameBoard === void 0 ? void 0 : gameBoard.appendChild(this.foodElement);
    }
    onSnake(Pos) {
        return this.Snake.getSnakeBody().some(segment => {
            return segment.x == Pos[0] && segment.y == Pos[1];
        });
    }
    updateFood() {
        let head = [this.Snake.getSnakeHeadPosX(), this.Snake.getSnakeHeadPosY()];
        if (this.onSnake(this.foodPos)) {
            this.randomizePosition();
            for (let i = 0; i < this.Snake.getExpantionRate(); i++) {
                this.Snake.addBody();
            }
        }
    }
}
