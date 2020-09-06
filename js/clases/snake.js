import { input } from './input.js';
export const maxRowNo = 22;
export const maxColNo = 22;
export const gameBoard = document.querySelector('#game-board');
export class Snake {
    constructor() {
        this.snakeSpeed = 1;
        this.snakeHeadPos = [11, 11];
        this.expantionRate = 1;
        this.snakeElement = document.createElement('div');
        this.snakeBody = [{ x: this.getSnakeHeadPosX(), y: this.getSnakeHeadPosY() }];
    }
    setExpantionRate(num) {
        this.expantionRate = num;
    }
    getExpantionRate() {
        return this.expantionRate;
    }
    addBody() {
        this.snakeBody.push(this.snakeBody[this.snakeBody.length - 1]);
    }
    setSnakeSpeed(Speed) {
        this.snakeSpeed = Speed;
    }
    getSnakeSpeed() {
        return this.snakeSpeed;
    }
    getSnakeHeadPosX() {
        return this.snakeHeadPos[0];
    }
    getSnakeHeadPosY() {
        return this.snakeHeadPos[1];
    }
    setSnakeHeadPosX(pos) {
        if (pos < 0 || pos > maxColNo)
            throw new Error("Invalid Position X");
        this.snakeHeadPos[0] = pos;
    }
    setSnakeHeadPosY(pos) {
        if (pos < 0 || pos > maxRowNo)
            throw new Error("Invalid Position Y");
        this.snakeHeadPos[1] = pos;
    }
    getSnakeBody() {
        return this.snakeBody;
    }
    drawSnake() {
        gameBoard.innerHTML = '';
        if (this.snakeElement == null) {
            throw new Error("Snake Doesn't exist");
        }
        this.snakeBody.forEach((obj) => {
            if (obj == null) {
                throw new Error("object Doesn't exist");
            }
            this.snakeElement = document.createElement('div');
            this.snakeElement.style.gridRowStart = obj.y.toString();
            this.snakeElement.style.gridColumnStart = obj.x.toString();
            this.snakeElement.classList.add('snake');
            gameBoard === null || gameBoard === void 0 ? void 0 : gameBoard.appendChild(this.snakeElement);
        });
    }
    updateSnake() {
        for (let i = this.snakeBody.length - 1; i > 0; i--) {
            this.snakeBody[i] = Object.assign({}, this.snakeBody[i - 1]);
        }
        let inp = input.get_instance();
        let obj = inp.getInput();
        this.snakeBody[0].y += obj.y;
        this.snakeBody[0].x += obj.x;
        if (this.snakeBody[0].x <= 0)
            this.snakeBody[0].x += maxColNo;
        if (this.snakeBody[0].y <= 0)
            this.snakeBody[0].y += maxColNo;
        if (this.snakeBody[0].x > maxColNo)
            this.snakeBody[0].x = 1;
        if (this.snakeBody[0].y > maxColNo)
            this.snakeBody[0].y = 1;
        this.snakeHeadPos[0] = this.snakeBody[0].x;
        this.snakeHeadPos[1] = this.snakeBody[0].y;
    }
    snakeDeath() {
        var flag = false;
        for (let i = 1; i < this.snakeBody.length; i++) {
            let flag1 = this.snakeBody[i].x == this.snakeBody[0].x;
            let flag2 = this.snakeBody[i].y == this.snakeBody[0].y;
            flag = flag1 && flag2;
            if (flag)
                break;
        }
        return flag;
    }
}
