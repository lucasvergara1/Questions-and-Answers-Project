//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    //console.log(question);
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function() {

        questions.forEach(function (questionitem) {
            if (questionitem !== question) {
                questionitem.classList.remove("show-text");
            };
        });
        question.classList.toggle('show-text');
    });

});



// below I use - traversing the dom 
//const btns = document.querySelectorAll('.question-btn');

//btns.forEach(function(btn){
    //btn.addEventListener('click', function(e){
        //>parentElement usado para ver o elemento pai anterior, depois uso novamente para ver um nivel acima
       // const question = e.currentTarget.parentElement.parentElement;
        //question.classList.toggle("show-text");
    //});
//});


