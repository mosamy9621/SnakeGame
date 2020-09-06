import {input} from './input.js';
export const maxRowNo =22;
export const maxColNo =22;

export const gameBoard =document.querySelector('#game-board');
export class Snake{
   
    private snakeSpeed:number = 1;
    private snakeHeadPos : number[] = [11,11];
    private snakeBody : [{x:number,y:number}] ;
    private expantionRate:number=1;
    public setExpantionRate(num :number){
        this.expantionRate=num;
    }
    public getExpantionRate(){
        return this.expantionRate;
    }
    private snakeElement : HTMLDivElement  = document.createElement('div');
    constructor(){
        this.snakeBody=[{x:this.getSnakeHeadPosX(),y:this.getSnakeHeadPosY()}];
  

    }
    public addBody(){
        this.snakeBody.push(this.snakeBody[this.snakeBody.length-1]);
    }
    public setSnakeSpeed(Speed:number){
        this.snakeSpeed=Speed;
    }

    public getSnakeSpeed(){
       return  this.snakeSpeed;
    }
     public getSnakeHeadPosX(){
         return this.snakeHeadPos[0];
     }
     public getSnakeHeadPosY(){
        return this.snakeHeadPos[1];
    }
    public setSnakeHeadPosX(pos :number){
        if(pos<0 || pos > maxColNo)
            throw new Error("Invalid Position X");
            
         this.snakeHeadPos[0]=pos;
    }
    public setSnakeHeadPosY(pos :number){
        if(pos<0 || pos > maxRowNo)
            throw new Error("Invalid Position Y");
            
         this.snakeHeadPos[1]=pos;
   }
   public getSnakeBody(){
       return this.snakeBody;
   }
   public drawSnake(){
       gameBoard!.innerHTML='';
       if(this.snakeElement==null){
           throw new Error("Snake Doesn't exist");
           
       }
       this.snakeBody.forEach((obj)=> {
        if(obj==null){
            throw new Error("object Doesn't exist");
            
        }
            this.snakeElement = document.createElement('div');
            this.snakeElement.style.gridRowStart = obj.y.toString();
            this.snakeElement.style.gridColumnStart = obj.x.toString();
            this.snakeElement.classList.add('snake');
            gameBoard?.appendChild(this.snakeElement);
       });

   }
   public updateSnake(){
       

      for(let i=this.snakeBody.length-1;i>0;i--){
          this.snakeBody[i]={...this.snakeBody[i-1]};
      }
      let inp =  input.get_instance();
      let obj= inp.getInput();
      
      this.snakeBody[0].y+=obj.y;
      this.snakeBody[0].x+=obj.x;
      if(this.snakeBody[0].x<=0)
        this.snakeBody[0].x+=maxColNo;
      if(this.snakeBody[0].y<=0)
        this.snakeBody[0].y+=maxColNo;
        
    if(this.snakeBody[0].x>maxColNo)
        this.snakeBody[0].x=1;
    if(this.snakeBody[0].y>maxColNo)
        this.snakeBody[0].y=1;
     this.snakeHeadPos[0]=this.snakeBody[0].x;
     this.snakeHeadPos[1]=this.snakeBody[0].y;
   
   }
   public snakeDeath(){
       var flag =false;
       for(let i=1;i<this.snakeBody.length;i++){
           let flag1=this.snakeBody[i].x==this.snakeBody[0].x;
           let flag2= this.snakeBody[i].y==this.snakeBody[0].y;
       
           flag = flag1 && flag2;
           if(flag)
            break;
       }
       return flag;
   }
    
}