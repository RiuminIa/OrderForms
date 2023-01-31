
class Animal{
    breed ;
    hair;
    color;
    type;
    constructor(breed=0,hair=0,color=0,type=0){
        this.breed=breed;
        this.hair=hair;
        this.color=color;
        this.type=type;
    }
   
}
class Feature{
    called;
    parametr;
    constructor(called,parametr){
        this.called=called;
        this.parametr=parametr;
    }
}


let persian=new Animal("Persian",new Map([[new Feature("short",new Map([['white',3.1],['black',3.5]])),1.8],
                                          [new Feature("middle",new Map([['white',3.1],['black',3.5]])),1.3],
                                          [new Feature("long",new Map([['white',3.1],['black',3.5],['mix',1.5]])),1.5]]),
                                 
                                          new Map([[new Feature("white",new Map([['short',1.8],['middle',1.3],['long',1.5]])),3.1],
                                          [new Feature("black",new Map([['short',1.8],['middle',1.3],['long',1.5]])),3.5],
                                          [new Feature("mix",new Map([['long',1.5]])),1.5]]),"cat");
                                          
let british=new Animal("British",new Map([[new Feature("short",new Map([['white',4.2],['black',4.5],["grey",4.1]])),2.8],
                                        [new Feature("middle",new Map([['white',4.2],['black',4.5]])),2.3]]),
                                    

                                new Map([[new Feature("white",new Map([['short',2.8],['middle',2.3]])),4.2],
                                    [new Feature("black",new Map([['short',2.8],['middle',2.3]])),4.5],
                                    [new Feature("grey",new Map([['short',2.8]])),4.1]]),"cat");


let maine=new Animal("Main Coon",new Map([[new Feature("short",new Map([['white',5.1],['black',5.4]])),2.1],
                                    [new Feature("middle",new Map([['white',5.1],['black',5.4]])),2.3],
                                    [new Feature("long",new Map([['white',5.1],['black',5.4]])),2.5]]),

                                    new Map([[new Feature("white",new Map([['short',2.1],['middle',2.3],['long',2.5]])),5.1],
                                    [new Feature("black",new Map([['short',2.1],['middle',2.3],['long',2.5]])),5.4]]),"cat");

let american=new Animal("American",new Map([[new Feature("short",new Map([['white',3.2],['black',3.5],["yellow",4.3]])),3.8],
                                    [new Feature("middle",new Map([['white',3.2],['black',3.5],["yellow",4.3]])),3.8],     
                                    [new Feature("long",new Map([['white',3.2],['black',3.5],["yellow",4.3]])),3.5]]),
                                   
                                    new Map([[new Feature("white",new Map([['short',3.8],['middle',3.8],['long',3.5]])),3.2],
                                    [new Feature("black",new Map([['short',3.8],['middle',3.8],['long',3.5]])),3.5],
                                    [new Feature("yellow",new Map([['short',3.8],['middle',3.8],['long',3.5]])),4.3]]),"cat");

let labrador=new Animal("Labrador",new Map([[new Feature("short",new Map([['white',1.2],['black',1.5]])),1.8],
                                    [new Feature("middle",new Map([['white',1.2],['black',1.5]])),1.3],
                                    [new Feature("long",new Map([['white',1.2],['black',1.5]])),1.5]]),
                                    new Map([[new Feature("white",new Map([['short',1.2],['middle',1.5],['long',1.5]])),1.8],
                                    [new Feature("black",new Map([['short',1.2],['middle',1.5],['long',1.5]])),1.3]]),"dog");
let husky=new Animal("Husky",new Map([[new Feature("short",new Map([['white',1.2],['black',1.5]])),1.8],
                                    [new Feature("middle",new Map([['white',1.2],['black',1.5]])),1.3],
                                    [new Feature("long",new Map([['white',1.2],['black',1.5]])),1.5]]),
                                    new Map([[new Feature("white",new Map([['short',1.2],['middle',1.5],['long',1.5]])),1.8],
                                    [new Feature("black",new Map([['short',1.2],['middle',1.5],['long',1.5]])),1.3]]),"dog");
let shiba=new Animal("shiba",new Map([[new Feature("short",new Map([['white',1.2],['black',1.5]])),1.8],
                                    [new Feature("middle",new Map([['white',1.2],['black',1.5]])),1.3],
                                    [new Feature("long",new Map([['white',1.2],['black',1.5]])),1.5]]),
                                    new Map([[new Feature("white",new Map([['short',1.2],['middle',1.5],['long',1.5]])),1.8],
                                    [new Feature("black",new Map([['short',1.2],['middle',1.5],['long',1.5]])),1.3]]),"dog");
let yorkshireTerrier=new Animal("Yorkshire Terrier",new Map([[new Feature("short",new Map([['white',1.2],['black',1.5]])),1.8],
                                    [new Feature("middle",new Map([['white',1.2],['black',1.5]])),1.3],
                                    [new Feature("long",new Map([['white',1.2],['black',1.5]])),1.5]]),
                                    new Map([[new Feature("white",new Map([['short',1.2],['middle',1.5],['long',1.5]])),1.8],
                                    [new Feature("black",new Map([['short',1.2],['middle',1.5],['long',1.5]])),1.3]]),"dog");

let breeds=new Array;
breeds.push(persian,british,maine,american,labrador,husky,shiba,yorkshireTerrier);
var catordogDoc=document.getElementById("catordog");
var breedDoc=document.getElementById("breeds");
var hairDoc=document.getElementById("hair");
var colorDoc=document.getElementById("color");
var weightDoc=document.getElementById("vol");
var orderSumDoc=document.getElementById("orderSum")
var actualAnimal=new Animal;
var weightFur=0;
actualAnimal.complete=false;
var prototypeAnimal;
var orderSum;
var strongValid=document.getElementById("orderValid");
weightDoc.disabled=true;
catordogDoc.addEventListener("change",function(){
    actualAnimal.breed=0;
    actualAnimal.hair=0;
    actualAnimal.color=0;
    weightFur=0;
    actualAnimal.complete=false;
    weightDoc.disabled=true;
    actualAnimal.type=this.value;
    strongValid.setAttribute("style","visibility:hidden");
    orderSumDoc.setAttribute("style","visibility: hidden");
    breedDoc.options.length=1;
    hairDoc.options.length=1;
    colorDoc.options.length=1;
    let temp= breeds.filter(ani => ani.type == this.value);
    temp.forEach(function(item){ breedDoc.options[breedDoc.options.length]= new Option(item.breed)});     
})
breedDoc.onchange=function(){
    hairDoc.options.length=1;
    colorDoc.options.length=1;
    weightFur=0;
    let temp=new Array;
    anim=breeds.find(ani => ani.breed == breedDoc.value);
    prototypeAnimal=anim;
    actualAnimal.color=0;
    actualAnimal.hair=0;
    actualAnimal.complete=false;
    weightDoc.disabled=true;
    weightDoc.value=1;
    orderSumDoc.setAttribute("style","visibility: hidden");
    actualAnimal.breed=anim.breed;
    strongValid.setAttribute("style","visibility:hidden");

    anim.hair.forEach((value,key)=> {
         temp.push(key)
        });
    // pars(hairDoc,temp)    
    temp.forEach(function(item){ hairDoc.options[hairDoc.options.length]= new Option(item.called)});
    temp.length=0;      
    anim.color.forEach((value,key)=> {
        temp.push(key)

    });   
    temp.forEach(function(item){ colorDoc.options[colorDoc.options.length]= new Option(item.called)});     
}

hairDoc.onchange=function(){
    pars(hairDoc,colorDoc,0);
}
colorDoc.onchange=function(){
    pars(colorDoc,hairDoc,1);
}

function pars(ds1,ds2,ds3,){
    strongValid.setAttribute("style","visibility:hidden");
    if(prototypeAnimal instanceof Animal){
        ds2.options.length=1;
        let temp;
        if(ds3==0)
        {
            prototypeAnimal.hair.forEach((value,key)=>{
                if(key.called==ds1.value){
                    temp=key;
                    actualAnimal.hair=0;
                    actualAnimal.hair=new Map();
                    actualAnimal.hair.set(key.called,value);
                }
            });
        }
        else{
            prototypeAnimal.color.forEach((value,key)=>{
                if(key.called==ds1.value){
                    temp=key;
                    actualAnimal.color=0;
                    actualAnimal.color=new Map();
                    actualAnimal.color.set(key.called,value);
                }
            });
        }
        let x=new Array;
        temp.parametr.forEach((value,key)=> {
            x.push(key)
        });  
        x.forEach(function(item){ ds2.options[ds2.options.length]= new Option(item)});  
        if (ds3==1 && actualAnimal.hair!=0){
            actualAnimal.hair.forEach((value,key)=>{
            ds2.value=key;    
        });
        }
        else if(ds3==0 && actualAnimal.color!=0){
            actualAnimal.color.forEach((value,key)=>{
            ds2.value=key;  
        });
    
    }
    if(actualAnimal.color!=0 && actualAnimal.hair!=0){
        weightDoc.disabled=false;
        actualAnimal.complete=true;
        orderSum=actualAnimal.color.get(colorDoc.value)*actualAnimal.hair.get(hairDoc.value)*weightDoc.value;
        weightFur=weightDoc.value;
        orderSumDoc.setAttribute("style","visibility: visible");
        orderSumDoc.lastChild.innerHTML= orderSum.toFixed(2)+" eur";
    }
}

}
weightDoc.onchange=function(){
    strongValid.setAttribute("style","visibility:hidden");
    if (this.value>10 || this.value < 0.5 || (this.value % 0.5)>0){
        this.setAttribute("style","border: double 2px red;");
        actualAnimal.complete=false;
        weightFur=0;
    }
    else{
        this.setAttribute("style","border:-1px");
        actualAnimal.complete=true;
        orderSum=actualAnimal.color.get(colorDoc.value)*actualAnimal.hair.get(hairDoc.value)*weightDoc.value;
        weightFur=weightDoc.value;
        orderSumDoc.setAttribute("style","visibility: visible");
        orderSumDoc.lastChild.innerHTML= orderSum.toFixed(2)+" eur";

    }

}





