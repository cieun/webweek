const week1 = document.getElementById("week1");
const week2 = document.getElementById("week2");
const week3 = document.getElementById("week3");
const week4 = document.getElementById("week4");

function slidingw1(){
    week1.style.display = 'block';
    week2.style.display = 'none';
    week3.style.display = 'none';
    week4.style.display = 'none';
}

function slidingw2(){
    week2.style.display = 'block';
    week1.style.display = 'none';
    week3.style.display = 'none';
    week4.style.display = 'none';
}

function slidingw3(){
    week3.style.display = 'block';
    week2.style.display = 'none';
    week1.style.display = 'none';
    week4.style.display = 'none';
}

function slidingw4(){
    week4.style.display = 'block';
    week2.style.display = 'none';
    week3.style.display = 'none';
    week1.style.display = 'none';
}

//
function changeIframeSrc(newSrc) {
    document.getElementById('myIframe').src = newSrc;
}