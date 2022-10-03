window.onload=function(){

    var form=document.getElementById("myform");
    form.onsubmit=function(event){
        event.preventDefault();
        submitere();
    }

    function submitere() {
        var vclient = document.getElementById("client").value;
        var vemail = document.getElementById("email").value;
        var vtel = document.getElementById("tel").value;
        var inputs=document.querySelectorAll("input");
        var arr=[];
        arr.push(vemail);
        arr.push(vtel);
        if (inputs[3].checked)
            arr.push("daily");
        else
            arr.push("weekly");

        localStorage.setItem(vclient,arr);
        console.log(localStorage);

        var regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var flag=true;

        if (regex.test(vemail)===false){
            alert("Wrong e-mail format!");
            flag=false;}

        if (vclient===""){
            alert("Name cannot be empty!");
            flag=false;}

        if (vtel===""){
            alert("Phone number cannot be empty!");
            flag=false;
        }
        if (flag===true){
            alert("You were successfully subscribed!");
        }
    }
}