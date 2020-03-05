const codal=document.getElementById('codal');
const X=document.querySelector('.X');
const Edit=document.getElementById('Edit');
const broda=document.getElementById('broda');
const Delete=document.getElementById('Delete');
const expel=document.querySelector('.expel');
const blockBtn=document.querySelector('.blockBtn');
const ordal=document.getElementById('ordal');
const dotB=document.getElementById('dotB');
const dotC=document.getElementById('dotC');
const dotD=document.getElementById('dotD');
const dotE=document.getElementById('dotE');
const dotF=document.getElementById('dotF');
const al=document.getElementById('al');
const orl=document.getElementById('orl');
const dal=document.getElementById('dal');
const oral=document.getElementById('oral');
const blckBtn=document.querySelector('.blckBtn');
const bockBtn=document.querySelector('.bockBtn');
const clockBtn=document.querySelector('.clockBtn');
const flockBtn=document.querySelector('.flockBtn');

function ba(){
    al.style.display='block';

}
function fuo(){
    al.style.display='none';

}
function inside(){
    dal.style.display='block';

}
function out(){
    dal.style.display='none';

}
function ime(){
    oral.style.display='block';

}
function eshi(){
    oral.style.display='none';

}
function iba(){
    orl.style.display='block';

}
function ifuo(){
    orl.style.display='none';

}



function wole(){
    ordal.style.display='block';
}
function ita(){
    ordal.style.display='none';
}
function access(){
    broda.style.display='block';

}
function deny(){
    broda.style.display='none';
}
function openModal(){
    codal.style.display='block';

}
function closeModal(){
   codal.style.display='none';
}

function eventListener(){
    Edit.addEventListener('click',openModal);
    X.addEventListener('click',closeModal);
    Delete.addEventListener('click',access);
    expel.addEventListener('click',deny);
    dotB.addEventListener('click',wole);
    blockBtn.addEventListener('click',ita);
    dotC.addEventListener('click',ba);
    blckBtn.addEventListener('click',fuo);
    dotD.addEventListener('click',inside);
    bockBtn.addEventListener('click',out);
    dotE.addEventListener('click',ime);
    clockBtn.addEventListener('click',eshi);
    dotF.addEventListener('click',iba);
    flockBtn.addEventListener('click',ifuo);
}
eventListener();

