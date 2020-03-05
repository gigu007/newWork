const modal=document.getElementById('modal');
const modalBtn=document.getElementById('modalBtn');
const closeBtn=document.querySelector('.closeBtn');
const odalBtn=document.getElementById('odalBtn');
const lockBtn=document.querySelector('.lockBtn');
const odal=document.getElementById('odal');



function openModal(){
    modal.style.display='block';
}
function closeModal(){
    modal.style.display='none';
}
function open(){
    odal.style.display='block';
}
function close(){
    odal.style.display='none';
}


function eventListener(){
    modalBtn.addEventListener('click',openModal);
    closeBtn.addEventListener('click',closeModal);
    odalBtn.addEventListener('click',open);
    lockBtn.addEventListener('click',close);

}
eventListener();
