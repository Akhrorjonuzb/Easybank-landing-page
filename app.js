const menuIcon=document.querySelector('.menu-icon');
const centerDiv=document.querySelector('.center-div');
const closeIcon=document.querySelector('.close-icon');

menuIcon.addEventListener('click', function(){
    centerDiv.style.display='block';
    menuIcon.style.display='none';
closeIcon.style.display='block'

})

closeIcon.addEventListener('click', function(){
    centerDiv.style.display='none';
    closeIcon.style.display='none';
    menuIcon.style.display='block';
})