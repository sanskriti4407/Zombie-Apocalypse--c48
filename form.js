class Form {

  constructor() {
    this.input = createInput("name");
    this.button = createButton('Play');
    
    this.greeting = createElement('h2');
    
 
  }
  hide(){
    this.question.hide();
    this.option.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.result.hide();
    this.greeting.hide(); 
  }

  display(){
    image(bg,0,0,displayWidth, displayHeight);
    this.input.position(displayWidth/2-45,displayHeight/2-80);
    this.button.position(displayWidth/2,displayHeight/2-15);
    var name=this.input;
   
    this.button.mousePressed(()=>{
     background(rgb(0,55,128));
     this.button.hide();
     this.input.hide();
     
      gameState=1;
    if(gameState===1){
      this.question=createElement('h2');
    this.option=createButton("  hay ");
    this.option2=createButton("Brains");
    this.option3=createButton(" Pizza");
    this.option4=createButton("Burger");
    this.result=createElement("h2");
      this.greeting.html("Welcome")
      this.greeting.position(400,100);
      this.question.html("What is zombie's faviorite food ?" )
      this.question.position(400,200);
      this.option.position(500,300);
      this.option2.position(500,350);
      this.option3.position(500,400);
      this.option4.position(500,450);
      
      this.option2.mousePressed(()=>{
        this.result.html("CORRECT");
        this.result.position(displayWidth/2 -300, displayHeight/4 +300  );
        gameState=2;
      })
        this.option.mousePressed(()=>{
          this.result.html("WRONG");
          this.result.position(displayWidth/2 -300, displayHeight/4 +300  );
        })
        this.option3.mousePressed(()=>{
          this.result.html("WRONG");
          this.result.position(displayWidth/2 -300, displayHeight/4 +300  );
        } )
        this.option4.mousePressed(()=>{
          this.result.html("WRONG");
          this.result.position(displayWidth/2 -300, displayHeight/4 +300  );
        } )
      }
  
      }
      )
     
 
}
}
