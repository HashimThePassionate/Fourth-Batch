let change = document.getElementById('change');
let reverse = document.getElementById('reverse');
change.addEventListener('click',function(){
    let select = document.querySelectorAll('.light');
    for (let i = 0; i < select.length; i++) {
        select[i].style.color='blue';
        
    }
})
reverse.addEventListener('click',function(){
    let select = document.querySelectorAll('.light');
    for (let i = 0; i < select.length; i++) {
        // select[i].classList.remove('light');
        select[i].classList.toggle('highlight');
        
    }
    
});