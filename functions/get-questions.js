import { loadData } from "../database-service/loadData";

export async function getQuestions() {
    const questions = await loadData();

    let currentId = questions.length;

    while (currentId != 0) {
        let randomIndex = Math.floor(Math.random() * currentId);
        currentId--;

        [questions[currentId], questions[randomIndex]] = [questions[randomIndex], questions[currentId]];
    }

    questions.forEach((question) => {
        question.answers = question.answers.split('/').map((answer) => answer.trim());
        question.correct_answer = parseInt(question.correct_answer);
    });
    console.log(questions);

    return questions.slice(0, 10);
}