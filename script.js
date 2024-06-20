let randnum = Math.floor(Math.random() * 100) + 1;
let num = 0;
function checkGuess() {
    let guess = document.getElementById('guess').value;
    let message = document.getElementById('message');
    let tryText = document.getElementById("try");
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = '1부터 100 사이의 숫자를 입력하세요.';
    } else {
        if (guess == randnum) {
            message.textContent = `와우! 숫자 ${randnum}를 맞췄어요!.`;
            message.style.color = 'green';
            tryText.style.color='blue';
        } else {
            message.textContent = guess < randnum ? '너무낮다~' : '너무높다~';
            message.style.color = 'red';
            num++;
            tryText.textContent=`시도횟수: ${num}`;
        }
    }
}

