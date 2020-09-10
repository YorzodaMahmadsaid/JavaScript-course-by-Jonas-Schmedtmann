/*
let john = {
    name: 'Said',
    yearOfBirth: 1990,
    job: 'teacher'
};

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2020 - this.yearOfBirth, this.name, this.job);
    }
}

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

let john = new Person('John', 1990, 'teacher');
// john.calculateAge();
//
let jane = new Person('Jane', 1996, 'designer');
// jane.calculateAge();
//
let mark = new Person('Mark', 1998, 'retired');
// mark.calculateAge();

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
let personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
}

let john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

let jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1990},
        job: {value: 'designer'}
    });
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*let a = 22;
let b = a;
a = 45;
console.log(a);
console.log(b);

let obj1 = {
    name: 'John',
    age: 20
}

let obj2 = obj1;

obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

let age = 28;

let obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
}

change(age, obj);

console.log(age);
console.log(obj.city);*/

//////////////////////////////////////////////////////////////////////////////////////////////////

// let years = [1990, 1877, 1976, 1943, 1944];
//
// function arrayCalc(arr, fn) {
//     let arrRes = [];
//     for(let i = 0; i < years.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
//
// function calculateAge(el) {
//     return 2020 - el;
// }
//
// function isFullAge(el) {
//     return el >= 18;
// }
//
// function maxHeartRate(el) {
//     if(el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }
//
// let ages = arrayCalc(years, calculateAge);
// let fullAges = arrayCalc(ages, isFullAge);
// let rate = arrayCalc(ages, maxHeartRate);
//
// console.log(ages);
// console.log(rate);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('designer')('Mahmadsaid');

let designerQuestion = interviewQuestion('designer');
designerQuestion('John');

let teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Said');

let someQuestion = interviewQuestion('none');
someQuestion('Jake');*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function retirement(retirementAge) {
    let a = ' years left until retirement.';
    return function(yearOfBirth) {
        let age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
retirement(66)(1990);

let retirementUS = retirement(66);
let retirementGermany = retirement(63);
let retirementTajikistan = retirement(61);


retirementUS(1990);
retirementGermany(1990);
retirementTajikistan(1990);

function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if(job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('designer')('Said');*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

/*let said = {
    name: 'Said',
    age: 30,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if(style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m a ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

let navruz = {
    name: 'Navruz',
    age: 29,
    job: 'doctor'
};

said.presentation('formal', 'morning');
said.presentation.call(navruz, 'friendly', 'afternoon');

let saidFriendly = said.presentation.bind(said, 'friendly');

saidFriendly('morning');
saidFriendly('night');

let navruzFormal = said.presentation.bind(navruz, 'formal');
navruzFormal('afternoon');*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function (){
        console.log(this.question);

        for(let i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if(ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer.Try again :)');
        }
    }

    let q1 = new Question('Is JavaScrip the coolest programming language in the world?', ['Yes', 'No'], 0);
    let q2 = new Question('What is the name of this course is teacher?', ['John', 'Said', 'Navruz'], 1);
    let q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    let questions = [q1, q2, q3];

    let n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    let answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function (){
        console.log(this.question);

        for(let i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        let sc;
        if(ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer.Try again :)');
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------------------');
    }

    let q1 = new Question('Is JavaScrip the coolest programming language in the world?', ['Yes', 'No'], 0);
    let q2 = new Question('What is the name of this course is teacher?', ['John', 'Said', 'Navruz'], 1);
    let q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    let questions = [q1, q2, q3];

    function score() {
        let sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }

    let keepScore = score();

    function nextQuestion() {

        let n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        let answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();

////////////////////////////////////////////////////////////////////////////////////////////////






































