export class Question {
    constructor(data) {
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.answers = data.incorrect_answers
        this.thing = this.answers.push(this.correct_answer)
        this.shuffAnswers = this.answers.sort((a, b) => 0.5 - Math.random())
    }

    get QuestionTemplate() {
        return `
<div>
    <h1>${this.question}</h1>
    <div class="row">
        <div class="col-6 my-2">
            <button class="btn btn-info wide-btn fs-1" onclick="app.questionsController.checkAnswer('${this.shuffAnswers[0]}')">${this.shuffAnswers[0]}</button>
        </div>
        <div class="col-6 my-2">
            <button class="btn btn-info wide-btn fs-1" onclick="app.questionsController.checkAnswer('${this.shuffAnswers[1]}')"> ${this.shuffAnswers[1]}</button>
        </div>
    </div>
    <div class="row">
        <div class="col-6 my-2">
            <button class="btn btn-info wide-btn fs-1" onclick="app.questionsController.checkAnswer('${this.shuffAnswers[2]}')">${this.shuffAnswers[2]}</button>
        </div>
        <div class="col-6 my-2">
            <button class="btn btn-info wide-btn fs-1" onclick="app.questionsController.checkAnswer('${this.shuffAnswers[3]}')">${this.shuffAnswers[3]}</button>
        </div>
    </div>
</div>
`

    }
}