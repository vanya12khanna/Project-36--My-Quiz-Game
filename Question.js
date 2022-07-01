class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(250, 0);
    this.title.style('color','white')
    
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(180, 90);
    this.question.style('color','white')
    this.option1.html("1: Everyone " );
    this.option1.position(190, 130);
    this.option1.style('color','white')
    this.option2.html("2: Envelope" );
    this.option2.position(190, 150);
    this.option2.style('color','white')
    this.option3.html("3: Estimate " );
    this.option3.position(190, 170);
    this.option3.style('color','white')
    this.option4.html("4: Example" );
    this.option4.position(190, 190);
    this.option4.style('color','White')

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(100, 385);
      this.message.style('color','White')

    });
  }
}
