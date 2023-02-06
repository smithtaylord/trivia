import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawQuestions() {
    let template = ''
    template = appState.questions[appState.questionNumber].QuestionTemplate
    setHTML('questions', template)
    setText('correctanswers', `Correct Answers ${appState.correctAnswers}`)

}
export class QuestionsController {
    constructor() {
        console.log('Questions Controller is working!');
        appState.on('questions', _drawQuestions)

    }

    async getQuestions(category) {
        try {
            await questionsService.getQuestions(category)
        } catch (error) {
            Pop.error(error)
        }
    }

    nextQuestion() {
        appState.questionNumber++
        _drawQuestions()
        console.log('button');
    }

    checkAnswer(answer) {
        console.log('you chose this answer', answer);
        questionsService.checkAnswer(answer)
        this.nextQuestion()
    }

}