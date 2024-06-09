let starsone=document.getElementsByClassName("Starsone")[0];
let moontwo=document.getElementsByClassName("moontwo")[0];
let mountain3=document.getElementsByClassName("mountain3")[0];
let adminname=document.getElementsByClassName("adminname")[0];
let mountain4 =document.getElementsByClassName("mountain4")[0];
let riverfive=document.getElementsByClassName("riverfive")[0];
let boat6 =document.getElementsByClassName("boat6")[0];
let mountain7=document.getElementsByClassName("mountain7")[0];
window.onscroll = function(){
    let value=scrollY;
    starsone.style.left= value +'px';
moontwo.style.top=value *3+'px';
mountain3.style.top=value*1.5+'px';
riverfive.style.top=value*1.5+'px';
boat6.style.left= value*3 +'px';
adminname.style.fontSize= value +'px'
if(scrollY>=127.33333587646484){
    adminname.style.fontSize=127 +'px'
}
if(scrollY >=136){
    document.querySelector(".images").style.background= "linear-gradient(#376281,#10001f)";
}else{
    document.querySelector(".images").style.background= "linear-gradient(#200016,transparent)";
}

   

}