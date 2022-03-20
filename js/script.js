let buttons = document.querySelectorAll(".btn")
let resultScreen = document.getElementById("result-screen")
let equal = document.querySelector(".btn-equal")
let clear = document.querySelector(".btn-clear")


buttons.forEach((element) => {
    element.addEventListener("click", function (e) {
        let value = e.target.dataset.num;
        console.log(value)
        resultScreen.value += value
    })
})

equal.addEventListener('click', function (e) {
    if (resultScreen.value === "") {
        resultScreen.value = "Please enter a number";

        setTimeout(() => {
            resultScreen.value = ""
        }, 2000);
    } else {
        let answer = eval(resultScreen.value);
        resultScreen.value = answer;
    }
})

clear.addEventListener('click', function (e) {
    resultScreen.value = "";
})