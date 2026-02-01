const showFaq=document.querySelectorAll('.show-description');

showFaq.forEach(toggle => {
    toggle.addEventListener('click',()=>{
        const answer=toggle.closest('.element').querySelector('.answer');

        if(answer.classList.contains('inactive')){
            answer.classList.remove('inactive');
            answer.classList.add('active');
            toggle.src=`./assets/images/icon-minus.svg`;

        }else{
            answer.classList.remove('active');
            answer.classList.add('inactive');
            toggle.src=`./assets/images/icon-plus.svg`
        }
    });
});
