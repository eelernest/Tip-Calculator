let res1 = document.getElementById("total");
let res2 = document.getElementById("amount");

let reset = document.getElementById("reset");
//Buttons
var btn5 = document.getElementById("bt1");
var btn10 = document.getElementById("bt2");
var btn15 = document.getElementById("bt3");
var btn25 = document.getElementById("bt4");
var btn50 = document.getElementById("bt5");
let custom = document.getElementById("custom");
//Inputs
let bill = document.getElementById("bill");
let person = document.getElementById("person");
//Eror #People
let err = document.getElementById("err");
//Call-ButtonActions with Events
btn5.addEventListener("click",resolve5,true);
btn10.addEventListener("click",resolve10,true);
btn15.addEventListener("click",resolve15,true);
btn25.addEventListener("click",resolve25,true);
btn50.addEventListener("click",resolve50,true);
custom.addEventListener("input",customP,true);
var btnM;
//Resolve
function resolve(){
    bl = Number.parseFloat(bill.value);
    let r1 = (bl*btnM)/100;
    let r2 = r1/person.value;
    let r3 = (r2 + bl)/person.value;
    if(person.value==""){
        wrong();
    }else{
        res1.innerHTML=r2.toFixed(2);
        res2.innerHTML=r3.toFixed(2);
        good();
    }
}
//If (there a problem with persons number)
function wrong(){
    res1.innerHTML="$0.00";
    res2.innerHTML="$0.00";
    person.classList.add("border-2","border-danger");
    err.innerHTML="Can't be zero";
}
//If (validates data)
const good = ()=>{
    person.classList.add("border-success","shadow-sm");
    person.classList.remove("border-danger");
    err.innerHTML="";
}
//Button-RESET
reset.addEventListener("click",erase,true);
//(5%)Button//
function resolve5(){
    btnM =5;
    resolve();
}
//(10%)Button//
function resolve10(){
    btnM =10;
    resolve();
}
//(15%)Button//
function resolve15(){
    btnM =15;
    resolve();
}
//(25%)Button//
function resolve25(){
    btnM =25;
    resolve();
}
//(50%)Button//
function resolve50(){
    btnM =50;
    resolve();
}
//(CustomP)Button//
function customP(){
    btnM =custom.value;
    resolve();
}
//Erase-Data
function erase() {
    res1.innerHTML="$0.00";
    res2.innerHTML="$0.00";
    person.classList.remove("border-danger","border-success","shadow-sm");
    person.classList.remove();
    person.placeholder="0";
    bill.value="";
    custom.value=""
    person.value="";
    err.innerHTML="";
}