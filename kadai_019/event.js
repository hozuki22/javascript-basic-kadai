const outputbtn = document.getElementById('btn');
const text = document.getElementById('text');

outputbtn.addEventListener('click',() => {
    text.textContent = "ボタンをクリックしました";
});