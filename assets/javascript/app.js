var panel = $("#quiz-area");

// Question set
var questions = [{
    question: "Originally manufactured in Flint, Michigan as well as St. Louis, Missouri, the Corvette has been manufactured where since 1981?",
    answers: ["In Bowling Green, Kentucky", "In Houston Texas", "In Detroit Michigan"],
    correctAnswer: "In Bowling Green Kentucky"
}, {
    question: "The Corvette has since become widely known as what?",
    answers: ["American's Sports Car", "The Foreign Fast Car", "The Flamingo"],
    correctAnswer: "American's Sports Car"
}, {
    question: "When was the first generation of Corvette introduced?",
    answers: ["Late in the 1953 model year.", "Early 1960 model year.", "Late in the 1965 model year."],
    correctAnswer: "Late in the 1953 model year."
}, {
    question: "With the new V8, the 0–60 mph time improved by how much?",
    answers: ["2.3 seconds", "1.7 seconds", "2.7 seconds", "1.5 seconds"],
    correctAnswer: "1.5 seconds"
}, {
    question: "What is a Corvette?",
    answers: ["Built Ford Tough...", "Known also as a front engine, rear drive, two-door, two-passenger sports car manufactured and marketed by Chevrolet.", "Life Too Short to drive boring cars."],
    correctAnswer: "MGM Grand"
}, {

}];

// Variable that will hold the setInterval
var timer;

var game = {

    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            panel.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                panel.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }

        panel.append("<button id='done'>Done</button>");
    },

    done: function () {

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });


        this.result();

    },

    result: function () {

        clearInterval(timer);

        $("#sub-wrapper h2").remove();

        panel.html("<h2>All Done!</h2>");
        panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};

// CLICK EVENTS

$(document).on("click", "#start", function () {
    game.start();
});


$(document).on("click", "#done", function () {
    game.done();
});
