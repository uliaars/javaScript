var event, ok, answers = [];
function question(question, answer1, answer2, numberOfAnwers){
    do {
        ok = false;
        event = +prompt(question + answer1 + answer2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(numberOfAnwers, event);
        }
    } while (!ok);
    answers.push(event);
}

question(works.a00, works.a1, works.a2, works.a0);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
            question(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                question(works.d00, works.d1, works.d2, works.d0);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                question(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        question(works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1: // Второе действие
                question(works.c00, works.c1, works.c2, works.c0);
                break;
            case 2: // Второе действие
                question(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

var cheсkResult = prompt("Введите номер шага, чтобы узнать ответ.");
if (cheсkResult == 1){
    alert("В этом шаге вы ответили "+answers[0]);
} else if (cheсkResult == 2){
    alert("В этом шаге вы ответили "+answers[1]);
} else if (cheсkResult == 3){
    alert("В этом шаге вы ответили "+answers[2]);
} else {
    alert("Некорректный шаг")
}

//------------------------------------------
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

