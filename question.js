class Question{

    constructor(){

        this.title = createElement("h2")
        this.question = createElement("h2")
        this.a = createElement("h3")
        this.b = createElement("h3")
        this.c = createElement("h3")
        this.d = createElement("h3")
        this.input = createInput("Name")
        this.input2 = createInput("Put option here")
        this.button = createButton("Submit")

    }

    hide(){

        this.input.hide()
        this.title.hide()
        this.question.hide()
        this.a.hide()
        this.b.hide()
        this.c.hide()
        this.d.hide()
        this.input2.hide()
        this.button.hide()
        this.waiting.hide()

    }

    display(){

        this.title.html("My Quiz")
        this.title.position(width/2,50);

        this.question.html("Question : " + questionC)
        this.question.position(100,100)

        this.a.html("A : " + answerAState)
        this.a.position(100,150)

        this.b.html("B : " + answerBState)
        this.b.position(100,200)

        this.c.html("C : " + answerCState)
        this.c.position(100,250);

        this.d.html("C : " + answerDState)
        this.d.position(100,300);

        this.input.position(100,350);

        this.input2.position(300,350);

    }

}