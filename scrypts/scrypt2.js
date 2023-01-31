
var personality=new Array;

var namef=document.getElementById("name");
namef.addEventListener("input",function(){
    nfValid(namef,document.getElementById("validName"));
});
        
var lastNamef=document.getElementById("lastname");
    
lastNamef.addEventListener("input",function(){
    nfValid(lastNamef,document.getElementById("validlast"));
});
function nfValid(ds,strong){
    let val=false;    
    val|=emptyValid(ds,strong);
        if(ds.value!=""){
            val|=valid(ds,strong);
        }
        return val;
}

ageDoc=document.getElementById("age");
dateDoc=document.getElementById("date");
ageDoc.addEventListener("input",function(){
    daValid(ageDoc,document.getElementById("validage"));
});

function daValid(ds,strong){
    let val=false;
    personality[ds["name"]]=0;
    val|=emptyValid(ds,strong);
    if(this.value!=""){
        val|=valAge(strong);
        val|=validAge(ds)
    }
    return val;
}

dateDoc.addEventListener("input",function(){
    adValid(dateDoc,document.getElementById("validdate"));
});

function adValid(ds,strong){
    let val=false;
        personality[ds["name"]]=0;
        val|=emptyValid(ds,strong);
        if(ds.value!=""){
            val|=valDate(strong);
            val|=validAge(ds);
        }
        return val;
}

emailDoc=document.getElementById("email");

emailDoc.addEventListener("input",function(){
    mValid(emailDoc,document.getElementById("validmail"));
});

function mValid(ds,strong){
    let val=false;
    personality[ds["name"]]=0;
    val|=emptyValid(ds,strong);
    if(ds.value!=""){
        if(/^([\w.-_]{3,15})[@]{1}[\w]{2,10}[.]{1}[\w]{2,4}$/.test(ds.value)){
            personality[ds["name"]]=ds.value;
            ds.setAttribute("style","1px solid #897b7b");
            strong.setAttribute("style","visibility:hidden");
        }
        else{
            ds.setAttribute("style","border: solid 3px red");
            strong.innerHTML="invalid input format";
            strong.setAttribute("style","visibility:visible");
            val=true;
        }
    }
    return val;
}



var codsDoc=document.getElementById("cods");
var telDoc=document.getElementById("phone")
telDoc.disabled=true;

codsDoc.onchange=function(){
        telDoc.disabled=false;
        personality[codsDoc["name"]]=codsDoc.options[codsDoc.selectedIndex].value;
}
telDoc.addEventListener("input",function(){
    let strong=document.getElementById("validphone");
    personality[telDoc["name"]]=0;
    if(!(/^(\d{3}\s){2}\d{4}$/.test(this.value))){
        strong.innerHTML="invalid input format";
        strong.setAttribute("style","visibility:visible");
    }
    else{
        strong.setAttribute("style","visibility:hidden");
        personality[telDoc["name"]]=telDoc.value;
    }
});

function emptyValid(ds,strong){
    if(ds.value==""){
        ds.setAttribute("style","border: solid 3px red");
        strong.innerHTML=ds["name"]+" is requerd"
        strong.setAttribute("style","visibility:visible");
        return true;
    }
    else{
        ds.setAttribute("style","border:1px solid #897b7b");
        strong.setAttribute("style","visibility:hidden");
        return false;
    }
}

function valid(ds,strong){    
    if(ds.value.length>20 || !(/^([a-zA-Z]){1,20}(\s)?([a-zA-Z]){1,20}$/.test(ds.value))){
        ds.setAttribute("style","border: solid 3px red");
        strong.innerHTML="invalid input format";
        strong.setAttribute("style","visibility:visible");
        return true;
    }
    else{
        ds.setAttribute("style","1px solid #897b7b");
        strong.setAttribute("style","visibility:hidden");
        personality[ds["name"]]=[ds.value];

        return false;
    }
}
function validAge(ds){
    let strong1=document.getElementById("validage");
    let strong2=document.getElementById("validdate");
    if(dateDoc.value!="" && ageDoc.value!="" && ageDoc.value>1){
        let bday=new Date();
        bday.setFullYear(bday.getFullYear()-ageDoc.value);
        let realbday=new Date(dateDoc.value);
        if(bday.getFullYear()==realbday.getFullYear()){
            if(bday>=realbday){
                ageDoc.setAttribute("style","1px solid #897b7b");
                dateDoc.setAttribute("style","1px solid #897b7b");
                strong1.setAttribute("style","visibility:hidden");
                strong2.setAttribute("style","visibility:hidden");
                personality[ageDoc["name"]]=[ageDoc.value];
                personality[dateDoc["name"]]=[dateDoc.value];
                return false;
            }
        }
        else if(bday.getFullYear()-realbday.getFullYear()==1){
            bday.setFullYear(realbday.getFullYear());
            if(bday<realbday){
                ageDoc.setAttribute("style","1px solid #897b7b");
                dateDoc.setAttribute("style","1px solid #897b7b");
                strong1.setAttribute("style","visibility:hidden");
                strong2.setAttribute("style","visibility:hidden");
                personality[ageDoc["name"]]=[ageDoc.value];
                personality[dateDoc["name"]]=[dateDoc.value];
                return false;
            }
        }
            ageDoc.setAttribute("style","border: solid 3px red");
            dateDoc.setAttribute("style","border: solid 3px red");
            strong1.innerHTML="wrong age or date";
            strong1.setAttribute("style","visibility:visible");
            strong2.innerHTML="wrong age or date";
            strong2.setAttribute("style","visibility:visible");
            return true;
    }
    return false;
}
function valAge(strong){
    if(ageDoc.value>150 || ageDoc.value<=1 || !(parseInt(ageDoc.value)-ageDoc.value==0)){
        ageDoc.setAttribute("style","border: solid 3px red");
        strong.innerHTML="invalid input format";
        strong.setAttribute("style","visibility:visible");
        return true;
    }
    else{
        ageDoc.setAttribute("style","border:1px solid #897b7b");
        strong.setAttribute("style","visibility:hidden");
        return false;
    }
}
function valDate(strong){
    let bd=new Date(dateDoc.value);
    let a=new Date();
    let z=new Date();
    z.setFullYear(1872);
    if(a<=bd || (bd.getFullYear()<z.getFullYear()) || (a.getFullYear()-bd.getFullYear())<2){
        dateDoc.setAttribute("style","border: solid 3px red;");
        strong.innerHTML="invalid input format";
        strong.setAttribute("style","visibility:visible");
        return true;
    }
    else{
        dateDoc.setAttribute("style","1px solid #897b7b;");
        strong.setAttribute("style","visibility:hidden");
        return false;
    }
}
checkDoc=document.getElementById("checkbtn")
var other=document.createElement("textarea");
other.setAttribute("id","othertext");
other.setAttribute("name","Text area Other");
other.setAttribute("maxlength","50");
personality[other["name"]]=0;
other.addEventListener("input",function(){
    personality[other["name"]]=other.value;
});

var textarea1=document.getElementById("textbtm");
textarea1.addEventListener("input",function(){
    personality[this["name"]]=this.value;
});


var cbs = document.querySelectorAll('[type="checkbox"]');
[].forEach.call(cbs, function (cb) {
    cb.addEventListener("click", function(){
        if(this.checked){
            if(cb.value=="other"){
                checkDoc.appendChild(other);
            }
            personality[cb["name"]]=cb.value
        }
        else{
            personality[cb["name"]]=0
            if (cb.value=="other"){
                checkDoc.removeChild(other);
                
            }
        }
    });
});
var buttonHidDoc=document.getElementById("checkme");


buttonHidDoc.addEventListener("click",function(){
    let bhid=document.getElementById("hid");
    bhid.setAttribute("style","visibility:visible");
});

var divforAdress=document.createElement("div");
divforAdress.setAttribute("id","createdDiv");
var adressDoc=document.getElementById("forFormAdress");
var existDiv=false;
// <select id="cods" name="Cods">
// <option value="1" class="none">code</option>
var comeAdress=document.createElement("select");
comeAdress.setAttribute("id","adresSelect");
comeAdress.name="Shope adress";
var otChild=document.createElement("option")
otChild.setAttribute("class","none");
otChild.setAttribute("value","1");
otChild.innerHTML="Выберите магазин";
comeAdress.appendChild(otChild);
let Adress=new Array();
Adress=["Ilkovičova 2961, 841 04 Karlova Ves","Nevädzová 6, 821 01 Ružinov","Bernoláková 22A, 900 27 Bernolákovo"]
Adress.forEach(function(item){ comeAdress.options[comeAdress.options.length]= new Option(item)});
comeAdress.selectedIndex=1;
var strongRb=document.getElementById("validWhere");
var btn=document.getElementById("btn");
var divForAdress2=document.createElement("div");
divForAdress2.setAttribute("id","createdDiv2");
var myAdress=document.createElement("input");
var myAdress2=document.createElement("input");
myAdress.setAttribute("type","text");
myAdress.setAttribute("id","adrText");
myAdress.setAttribute("tabidex","1");
myAdress.setAttribute("name","Clien Adress");
myAdress.setAttribute("placeholder","Your city");
stronger1=document.createElement("Strong");
stronger1.setAttribute("id","validadrc");
stronger1.setAttribute("class","validation")
myAdress.addEventListener("input",function(){
    nfValid(myAdress,stronger1);
});


stronger2=document.createElement("Strong");
myAdress2.setAttribute("type","text");
myAdress2.setAttribute("id","adrText");
myAdress2.setAttribute("tabidex","2");
myAdress2.setAttribute("placeholder","street home number")
myAdress.setAttribute("name","Clien Adress1");
myAdress2.setAttribute("name","Clien Adress2");
stronger2.setAttribute("id","validadrc");
stronger2.setAttribute("class","validation");
divForAdress2.appendChild(myAdress);
divForAdress2.appendChild(stronger1);
divForAdress2.appendChild(myAdress2);
divForAdress2.appendChild(stronger2);
myAdress2.addEventListener("input",function(){
    adr2Valid(myAdress2,stronger2);
});

comeAdress.onchange=function(){
    personality[this["name"]]=this.options[this.selectedIndex].value;
    personality[myAdress["name"]]=0;
    personality[myAdress2["name"]]=0;
}

function adr2Valid(ds,strong){
    let val=false;
    personality[ds["name"]]=0;
    val|=emptyValid(ds,strong);
    if(ds.value!=""){
        if(/^([a-zA-Z]){4,20}\s{1}([0-9]){1,5}$/.test(ds.value)){
            personality[ds["name"]]=ds.value;
            ds.setAttribute("style","border: 1px solid #897b7b;");
            strong.setAttribute("style","visibility:hidden");
        }
        else{
            ds.setAttribute("style","border: solid 3px red;");
            stronger2.setAttribute("style","visibility:visible");
            stronger2.innerHTML="invalid input format";
            val=true;
        }
    }
    return val;
}


const adrtipes = document.querySelectorAll('input[name="Wheres"]');
[].forEach.call(adrtipes, function (cb) {
    cb.addEventListener("change", function(){
        btn.style.border="none";
        strongRb.style.visibility="hidden";
    for (const f of adrtipes) {
        if (f.checked) {
            if(existDiv){
                if(f.value=="home"){
                divforAdress.removeChild(comeAdress);
                adressDoc.removeChild(divforAdress);
                personality[comeAdress["name"]]=0;
                }
                else{
                    adressDoc.removeChild(divForAdress2); 
                }
            }
          if (f.value=="shop"){
            divforAdress.appendChild(comeAdress);
            adressDoc.appendChild(divforAdress);
            personality[comeAdress["name"]]=comeAdress.options[comeAdress.selectedIndex].value;
            personality[myAdress["name"]]=0;
            personality[myAdress2["name"]]=0;
          }
          else{
            adressDoc.appendChild(divForAdress2)
            personality[comeAdress["name"]]=0;
            personality[myAdress["name"]]=0;
            personality[myAdress2["name"]]=0;
          }
        }
}
existDiv=true;

})});

var cls=document.createElement("span");
var mybtn=document.getElementById("myBtn");
var text=document.createElement("p");
var finishButton=document.createElement("button");
finishButton.id="finishButton";
finishButton.value="confirm";
finishButton.innerHTML="confirm";
finishButton.addEventListener("click",function(){
    let subm=document.getElementById("subm");
    addorderlist();
    subm.click();
})
function crel(namer,valued){
    let x=document.createElement("input");
    x.type="text";
    x.display="none";
    x.name=namer;
    x.value=valued;
    return x;
}

function addorderlist(){
   let y=document.getElementById("forma");
   let tomail=document.getElementById("toMail");
   tomail.value=personality["Email"];
   if(personality[comeAdress["name"]]!=0){
        y.appendChild(crel(comeAdress["name"],personality[comeAdress["name"]]));
   }
   else{
    y.appendChild(crel(myAdress["name"],personality[myAdress["name"]]));    
    y.appendChild(crel(myAdress2["name"],personality[myAdress2["name"]]));    
   }
   if (personality[other["name"]]!=0){
        y.appendChild(crel(other["name"],personality[other["name"]]));
   }
   y.appendChild(crel("pet",actualAnimal.type));
   y.appendChild(crel("breed",actualAnimal.breed));
   y.appendChild(crel("length",hairs)); 
   y.appendChild(crel("color",colors));
   y.appendChild(crel("weight",weightFur+" kg")); 
   y.appendChild(crel("cost",orderSum.toFixed(2)+" eur")); 
}




mybtn.addEventListener("click",function(){
    modalWindow();
})
var bigDiv=document.getElementById("myModal");
var colors;
var hairs;
function modalWindow(){
    if (validateForm()){
        actualAnimal.hair.forEach((value,key)=>{hairs=key});
        actualAnimal.color.forEach((value,key)=>{colors=key});
        text.innerHTML="Fur:"+"<br>pet: "+actualAnimal.type+
                            "<br>breed: "+actualAnimal.breed+
                            "<br>length: "+hairs+
                            "<br>color: "+colors+
                            "<br>weight: "+weightFur+" kg";
    try {
        bigDiv.lastChild.lastChild.tagName=="STRONG"
      } 
    catch (error) {
    let modDiv=document.createElement("div");
    modDiv.classList.add("modal-content");
    cls.classList.add("close");
    cls.innerHTML="&times";
    modDiv.appendChild(cls);
    let text2=document.createElement("strong");
    text2.innerHTML="Amount "+orderSum.toFixed(2)+" eur";                         
    modDiv.appendChild(text);
    modDiv.appendChild(text2);
    bigDiv.appendChild(modDiv);
    bigDiv.appendChild(finishButton);
    }
    bigDiv.style.display="block"
    }
    cls.addEventListener("click",function(){
        bigDiv.style.display="none"
       
    });
}







function testValid(){
    let nm = document.forms["basicForm"]["Name"];
    let ln = document.forms["basicForm"]["Last name"];
    let test=false;
    test|=nfValid(nm,document.getElementById("validName"));
    test|=nfValid(ln,document.getElementById("validlast"))
    test|=daValid(document.forms["basicForm"]["Age"],document.getElementById("validage"))
    test|=adValid(document.forms["basicForm"]["Date of birthday"],document.getElementById("validdate"))
    test|=mValid(document.forms["basicForm"]["Email"],document.getElementById("validmail"))
    let strong=document.getElementById("orderValid");
    if(adrtipes[0].checked==false && adrtipes[1].checked==false){
        btn.style.border="solid 3px red";
        strongRb.innerHTML="choose options";
        strongRb.style.visibility="visible";
        test=true;
    }
    else if(adrtipes[1].checked==true){
        test|=nfValid(myAdress,stronger1)
        test|=adr2Valid(myAdress2,stronger2)
    }
    if(actualAnimal.complete==false){
        strong.setAttribute("style","visibility:visible");
        strong.innerHTML="You have not completed your selection";
        test=true;
    }
    else{
        strong.setAttribute("style","visibility:hidden");
    }
    return test;
}

function validateForm() {
    let strong=document.getElementById("validFinal");
    if (testValid()){
        strong.innerHTML="Input Error";
        strong.setAttribute("style","visibility:visible");
        return false;
    }
    else{
        strong.setAttribute("style","visibility:hidden");
        return true;
    }
}
