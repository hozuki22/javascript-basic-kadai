const outputbtn = document.getElementById('btn');
const text = document.getElementById('text');

outputbtn.addEventListener('click',() =>{

setTimeout(() => {
    text.textContent ="ボタンをクリックしました"
},2000);

});




