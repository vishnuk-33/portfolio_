
// Toggle Manu bar //

let manulist = document.getElementById("manulist")
manulist.style.height = "0px";

function togglemanu(){
    if(manulist.style.height == "0px")
        {
        manulist.style.height = "300px";
        }
        else{
            manulist.style.height = "0px";
        }
}


// End Toggle Manu bar //

// contact pop up message //

function myfunction(){
    var txt;
    if (confirm("You Are Submit In Contact")){
        txt = "you pressed ok";
    }
    else{
        txt = "you pressed cancel";
    }
    document.getElementById("popup").innerHTML=txt;
}

// End contact pop up message //