var i = 0;
function startUp(){
var t =document.getElementsByClassName("top");
var m = document.getElementsByClassName("middle");
var b = document.getElementsByClassName("bottom");
var l = document.getElementsByClassName("logo");
var lc = document.getElementsByClassName("logoClass");
var n = document.getElementsByClassName("name");
var p = document.getElementsByClassName("portriat");
var wia = document.getElementsByClassName("whoIAm");
var e1 = document.getElementsByClassName("education1");
var e2 = document.getElementsByClassName("education2");
var e3 = document.getElementsByClassName("education3");
var e4 = document.getElementsByClassName("education4");
var e5 = document.getElementsByClassName("education5");
var e6 = document.getElementsByClassName("education6");
var e7 = document.getElementsByClassName("education7");
var pdt = document.getElementsByClassName("PDT");
var doe = document.getElementsByClassName("DoE");
var ll = document.getElementsByClassName("liveLightly");



if(i==0) {
    m[0].style.display="inline-flex";
    b[0].style.display="inline-flex";
    t[0].style.display="inline-flex";
    l[0].style.border="none";
    lc[0].style.height="10%";
    lc[0].style.width="10%";
    lc[0].style.marginTop="0%";
    n[0].innerHTML="<img src='kayla.png' height='70px' width='200px'></img>";
n[0].style.position="fixed";
n[0].style.top="22%";
n[0].style.left="44%";


    p[0].innerHTML="<img src='selfie3.png' height='300px' width='300px'></img>";
    p[0].style.width="400px";
    p[0].style.height="400px";
    p[0].style.align="center";
    p[0].style.border="solid";
    p[0].style.borderColor="red";


    wia[0].innerHTML="Who I am:";
    wia[0].style.border="solid";
    wia[0].style.borderColor="#CFB53B";
    wia[0].style.color="#CFB53B";
    wia[0].style.fontFamily="Novecentoslab-Medium";

    e1[0].innerHTML="Education";
    e1[0].style.color="#CFB53B";
    e1[0].style.borderColor="#CFB53B";
    e1[0].style.border="solid";


    e2[0].innerHTML="Chemeketa Community College";
    e2[0].style.color="#CFB53B";
    

    e3[0].innerHTML="Associates of Arts Oregon Tran                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     sfer";
    e3[0].style.color="#CFB53B";
    

    e4[0].innerHTML="University of Oregon";
    e4[0].style.color="#CFB53B";  
    

    e5[0].innerHTML="Bachelors of Art: Digital Art Focus";
    e5[0].style.color="#CFB53B";
    


    e6[0].innerHTML="University of Oregon";
    e6[0].style.color="#CFB53B";
    


    e7[0].innerHTML="Certificate UX/UI Design";
    e7[0].style.color="#CFB53B"; 

    pdt[0].innerHTML="PDT";
    pdt[0].style.color="#CFB53B";
    pdt[0].style.borderColor="#CFB53B";
    pdt[0].style.border="solid";  


    doe[0].innerHTML="DoE";
    doe[0].style.color="#CFB53B";
    doe[0].style.borderColor="#CFB53B";
    doe[0].style.border="solid";  


    ll[0].innerHTML="Live Lightly";
    ll[0].style.color="#CFB53B";
    ll[0].style.borderColor="#CFB53B";  
    ll[0].style.border="solid";
    11[0].style.fontFamily="h2";




    i += 1;
} else if (i ==1) {
m[0].style.display="none";
b[0].style.display="none";
    t[0].style.display="block";

        l[0].style.border="solid";

        lc[0].style.height="352px";
        lc[0].style.width="210px";
        lc[0].style.marginTop="-6px";

        n[0].style.dsplay="none";
        n[0].innerHTML="";

        p[0].innerHTML=null;
        p[0].style.border="none";
        wia[0].innerHTML=null;
        wia[0].style.border="none";
        e1[0].innerHTML=null;
        e1[0].style.border="none";
        e2[0].innerHTML=null;
        e3[0].innerHTML=null;
        e4[0].innerHTML=null;
        e5[0].innerHTML=null;
        e6[0].innerHTML=null;
        e7[0].innerHTML=null;
        pdt[0].innerHTML=null;
        pdt[0].style.border="none";
        doe[0].innerHTML=null;
        doe[0].style.border="none";
        ll[0].innerHTML=null;
        ll[0].style.display="none";





        i = i - 1;
    }
};