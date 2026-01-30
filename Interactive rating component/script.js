const rates=document.querySelectorAll('#rates-btn');
const submit_btn = document.getElementById('submit-btn');
let choosen_rate =document.getElementById('choosen-rate');
const startState=document.querySelector('.state-start-container');
const thxstate=document.querySelector('.thx-section');

let selectedRate="";
rates.forEach(btn => {
    btn.addEventListener("click",() =>{
        rates.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedRate=` ${btn.innerText} `;
    });
});

submit_btn.addEventListener('click',()=>{
    choosen_rate.innerText=selectedRate;
    startState.classList.add("hidden");
    thxstate.classList.remove("hidden");
});
