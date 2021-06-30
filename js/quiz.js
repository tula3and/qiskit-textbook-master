let buttons = document.getElementsByTagName("button");
let answers = document.getElementsByClassName("answer");

// the number of checked answers
let cnt = 0;

// the number of correct answers
let correct = 0;

function scrollDown() {
    const vheight = $(".question_container").height();
    $("html, body").animate({
        scrollTop: ((cnt + 1) * vheight)
    }, 300);
    cnt++;
}

function move_next() {
    let inputs = answers[cnt].getElementsByTagName("input");
    let isChecked = false;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            isChecked = true;
            if (inputs[i].className === "correct") correct++;
        }
    }
    if (isChecked) scrollDown();
    else alert("Not checked!");
}

for (let i = 0; i < buttons.length; i++) {
    if (i == buttons.length - 1) {
        buttons[i].addEventListener("click", function () {
            let inputs = answers[cnt].getElementsByTagName("input");
            let isChecked = false;
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].checked) {
                    isChecked = true;
                    if (inputs[i].className === "correct") correct++;
                }
            }
            if (!isChecked) {
                alert("Not checked!");
            }
            else {
                let addr = "quiz1_end.html?index=" + correct;
                window.location.href = addr;
            }
        });
        continue;
    }
    buttons[i].addEventListener("click", move_next);
}

// refresh
$(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
});
