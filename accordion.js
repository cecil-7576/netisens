const question = document.querySelectorAll(".question");
let i;

for (i=0; i < question.length; i++) {
    question[i].addEventListener('click', function (){
        const answer = this.nextElementSibling;
        const icon = this.querySelector('.icon');
        if (answer.style.display ===  "block") {
            answer.style.display = "none";
            icon.textContent = '+';

        } else {
            answer.style.display = "block";
            icon.textContent = '-';
        }
    })
}

