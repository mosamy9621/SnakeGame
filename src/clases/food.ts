import {maxRowNo , maxColNo , gameBoard, Snake  } from './snake.js';


export class Food{

    private foodPos : number[] = [0,0];
    private foodElement = document.createElement('div');
    private Snake:Snake;
    public constructor(snake:Snake){
        this.Snake=snake;
    }
    public randomizePosition(){
        let pos:number[]=[];
        let i=0;
        do{
                pos=[];
                pos.push(Math.floor(Math.random()*maxColNo)+1)
                pos.push(Math.floor(Math.random()*maxRowNo)+1)
                i++;
        }while( this.onSnake(pos) )
        this.foodPos=pos;
    }
    public drawFood(){
        this.foodElement.classList.add('food');
        this.foodElement.style.gridRowStart = this.foodPos[1].toString();
        this.foodElement.style.gridColumnStart = this.foodPos[0].toString();
        gameBoard?.appendChild(this.foodElement);
    }
    public onSnake(Pos:number[]){
       return this.Snake.getSnakeBody().some( segment=>{
            return segment.x==Pos[0] && segment.y==Pos[1];
        });

    }
    public updateFood(){
        let head = [this.Snake.getSnakeHeadPosX(),this.Snake.getSnakeHeadPosY()]
        if(this.onSnake(this.foodPos)){
            this.randomizePosition();
            for(let i=0;i<this.Snake.getExpantionRate();i++){
                this.Snake.addBody();
            }
        }
        
  
    }

}