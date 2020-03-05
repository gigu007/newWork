const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.querySelector('.closeBtn');
const odal=document.getElementById('odal');
const joinBtn=document.getElementById('joinBtn');
const lockBtn=document.querySelector('.lockBtn');


function openModal() {
  modal.style.display = 'block';
}

function open(){
  odal.style.display='block';
}
function close(){
  odal.style.display='none';
}

function closeModal() {
  modal.style.display = 'none';
}
function istener() {
  modalBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  joinBtn.addEventListener('click',open);
  lockBtn.addEventListener('click',close);
}

istener();


