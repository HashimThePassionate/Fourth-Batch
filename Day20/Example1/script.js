let button = document.getElementById('button');
button.addEventListener('click',function(){
    let light = document.getElementsByClassName('light');
    for(i=0;i<=light.length;i++)
        {
            light[i].style.color = 'blue';
        }
})