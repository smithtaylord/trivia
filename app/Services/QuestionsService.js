import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";
import { opentdb } from "./AxiosService.js";

class QuestionsService {
    checkAnswer(answer) {
        console.log(appState.questions[appState.questionNumber].correct_answer)
        if (answer == appState.questions[appState.questionNumber].correct_answer) {
            appState.correctAnswers++

            Pop.toast('That is Correct! Great Job', 'success', 'center', 2500, true)
        } else {
            Pop.toast('That is Wrong!', 'warning', 'center', 2500, true)
        }
    }
    async getQuestions(category) {
        // if (category == 'music') {
        const res = await opentdb.get(`api.php?amount=10&category=${category}&difficulty=easy&type=multiple`)
        const questions = res.data.results.map(q => new Question(q))
        appState.questions = questions
        // } else if (category == 'general') {
        //     const res = await opentdb.get('api.php?amount=10&category=9&difficulty=easy&type=multiple')
        //     console.log('here is the raw data', res.data.results);
        //     const questions = res.data.results.map(q => new Question(q))
        //     appState.questions = questions
        // }
    }

}

export const questionsService = new QuestionsService();