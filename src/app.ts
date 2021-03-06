import {Snake} from './clases/snake.js'
import {Food} from './clases/food.js';
let lastRenderTime=0;
let snake = new Snake;
let food = new Food(snake);
let gameOver:boolean = false;
snake.setSnakeSpeed(8);
food.randomizePosition();
snake.setExpantionRate(1);

function main(time:number ){

    
    let timeInSeconds=(time - lastRenderTime)/1000;
    if(gameOver){
        return;
    }
    window.requestAnimationFrame(main);
    if(timeInSeconds < 1/ snake.getSnakeSpeed()) return;
    lastRenderTime=time;
           
    snake.drawSnake();
    snake.updateSnake();
    if(snake.snakeDeath()){
        setTimeout(()=>{alert('Game Over');location.reload();},0) ; 
        gameOver=true;
    }
        food.drawFood();   
        food.updateFood();
        
        
    }
    window.requestAnimationFrame(main);