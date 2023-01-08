'use strict';

{
    const open=  document.getElementById('open');
    const active =document.getElementById('active'); 

    open.addEventListener('click',() =>{
        open.classList.toggle('show');
        active.classList.toggle('active');
        });
    active.addEventListener('click',() =>{
        active.classList.remove('active');
        open.classList.remove('show');
        });

    
}