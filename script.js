window.addEventListener("load", init);


function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}

var kepek = [
    {
        hely: "kepek/1.jpg",
        cim: "kecske"
    },
    {
        hely: "kepek/2.jpg",
        cim: "fa"
    },
    {
        hely: "kepek/3.jpg",
        cim: "rét"
    },
    {
        hely: "kepek/4.jpg",
        cim: "táj"
    },
    {
        hely: "kepek/5.jpg",
        cim: "virágok"
    }
]

var kepindex = 0;
function galeria(){
    var txt = "";
    for (let index = 0; index < kepek.length; index++) {
        txt += `<div class="kep"><img id="${index}" src="${kepek[index].hely}" alt="${kepek[index].cim}" ></div>`;
    }
    ID("inp").innerHTML=txt;
    for (let index = 0; index < kepek.length; index++) {
        ID(index).addEventListener("click", kepkivalsztas)
        /* CLASS("kep")[index].style.border="2px solid #fec5bb;";
        CLASS("kep")[index].className += "kepformazas"; */
        $("#inp img ")[index].style.borderRadius = "50px";
    }
    document.querySelector(".kepek img").style.borderRadius="50px";
}

function kepkivalsztas(){
    console.log(event.target.id);
    kepindex= event.target.id;
    feldob();
}

function init(){
    feldob();
    galeria();
    ID("bal").addEventListener("click", balra);
    ID("jobb").addEventListener("click", jobbra);
}

function feldob(){
    ID("kivalasztott").src = kepek[kepindex].hely;
    ID("kivalasztott").alt = kepek[kepindex].cim;
}

function balra(){
    if(kepindex <=0){
        kepindex = kepek.length-1;
    }
    else{
        kepindex -= 1;
    }
    console.log(kepindex);
    feldob(kepindex);
}

function jobbra(){
    if(kepindex >= kepek.length-1){
        kepindex = 0;
    }
    else{
        kepindex ++;
    }
    console.log(kepindex);
    feldob(kepindex)
}