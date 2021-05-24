function resizeApply(){
    var windowHeight;
    windowHeight = window.innerHeight;

    if (windowHeight > 300){
        document.getElementById("container").style.height = (windowHeight - 50) + "px";    
    }
    else{
        document.getElementById("container").style.height = 250 + "px";    
    }
}

function nameTouchOn(objs, n){
    var j;
    for (j = 0; j < objs.length; j++){
        if (j != n){
            objs[j].style.opacity = 50 + "%";
        }
    }
}

function nameTouchOff(objs, n){
    var j;
    for (j = 0; j < objs.length; j++){
        if (j != n){
            objs[j].style.opacity = 100 + "%";
        }
    }
}

window.onload = function(){
    document.getElementById("container").style.height = (window.innerHeight - 50)  + "px";
    window.addEventListener('resize', function(){
        resizeApply();
    });
};


var i;
var k;
var temp;
var names = document.querySelectorAll("#Name");
for (i = 0; i < names.length; i++){
    temp = i;
    names[i].addEventListener("mouseover", function(){
        for (k = 0; k < names.length; k++){
            if (names[k] == this){
                nameTouchOn(names, k);
            }
        }
    });
    names[i].addEventListener("mouseout", function(){
        for (k = 0; k < names.length; k++){
            if (names[k] == this){
                nameTouchOff(names, k);
            }
        }
    });
}