const question = document.querySelectorAll(".question");
let i;

//  for (i=0; i < question; i++){
//     question[i].addEventListener()
// }
for (let q of question) {
    q.addEventListener('click', function (e){
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

