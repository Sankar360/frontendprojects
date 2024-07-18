
    var a =document.getElementById("input");

    function  display(val){
        a.value+=val;
    }

    function calculate(){
        try{
            a.value=eval(a.value);
        }catch(error){
            alert("invalid")
        }
    }

    function Clear(){
        a.value="";
    }

    function remove(){
        a.value=a.value.slice(0,-1);
    }