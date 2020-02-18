var event, ok, countOfCorr = 0
function make_questions(q, a1, a2, a3, a4, correct, numOfAns){
    this.q = q;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
    this.correct = correct;
    this.numOfAns = numOfAns;
    }

function ask_question(question, answer1, answer2, answer3, answer4, numberOfAnwers, corr){
    do {
        ok = false;
        event = +prompt(question + answer1 + answer2 + answer3 + answer4 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(numberOfAnwers, event);
        }
    } while (!ok);
    if (event == corr){
       countOfCorr +=1;
       alert("Верно!");
    } else{
        alert("К сожалению, Вы не угадали.");
    }
}

var question1 = new make_questions("Столица Франции\n","1 - Мельбурн\n","2 - Стокгольм\n","3 - Париж\n","4 - Берлин\n", 3, 4);
var question2 = new make_questions("Автор романа \"Три мушкетёра\"\n","1 - Жюль Верн\n","2 - Александр Дюма\n","3 - Вольтер\n","4 - Эмиль Золя\n", 2, 4);
var question3 = new make_questions("Кто создал теорию относительности\n","1 - Дмитрий Менделеев\n","2 - Томас Эддисон\n","3 - Никола Тесла\n","4 - Альберт Эйнштейн\n", 4, 4);

ask_question(question1.q, question1.a1, question1.a2, question1.a3, question1.a4, question1.numOfAns, question1.correct);
ask_question(question2.q, question2.a1, question2.a2, question2.a3, question2.a4, question2.numOfAns, question2.correct);
ask_question(question3.q, question3.a1, question3.a2, question3.a3, question3.a4, question3.numOfAns, question3.correct);
alert("Вы угадали "+countOfCorr+" раз! Спасибо за игру.")


function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
    
}


