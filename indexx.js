t=setTimeout(function(){
    var quotes=["“A platypus has a body like an otter, a bill and webbed feet like a duck, and a tail like a beaver.”","“Platypuses live in Australia.”","“Platypuses are nocturnal. They sleep during the day and are active at night.”","“Platypuses spend up to 12 hours each day hunting for food.”","“Platypuses cover their eyes, nose and ears while swimming.”"];
    var quote=quotes[Math.floor(Math.random()*quotes.length)].bold();
    var textquote=document.createElement("div");
    textquote.innerHTML=quote;
    textquote.style.fontSize="xx-large";
    var number=Math.floor(Math.random()*2);
    if (number===0){
        textquote.style.color="rgb(0, 0, 0)";
        textquote.style.backgroundColor="white";
    }
    else if (number===1){
        textquote.style.color="rgb(0, 0, 0)";
        textquote.style.backgroundColor="white";
    }
    textquote.classList.add("quote");
    document.getElementById("citat").appendChild(textquote);
},2000);

