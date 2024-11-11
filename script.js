const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

let guess;
let attempts = 0;
let running = true;

while (running) {
    guess = window.prompt(`Enter a number between ${minNum}-${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("You have entered an invalid number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("You have entered an invalid number");
    } else {
        attempts++;
        if(guess < answer ) {
            window.alert("Too low, try again");
        } else if (guess > answer) {
            window.alert("too high, try again");
        } else {
            window.alert(`Your guess ${guess} is correct. \n You got it in ${attempts} attempts`);
            running = false;
            document.getElementById("remark").textContent = `ANSWER: ${answer}`;
        }
    }
}