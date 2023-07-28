// Set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const countBtn = e.currentTarget.classList;
        if (countBtn.contains('decrease')){
            count--;
        } else if (countBtn.contains('increase')){
            count++;
        } else {
            count = 0;
        }

        if (count > 0){
            value.style.color = 'lawngreen';
        } else if (count < 0){
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }

        value.textContent = count;
    });
});