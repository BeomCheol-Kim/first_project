function resizeApply(){
    var windowHeight;

    if (windowHeight > 300){
        document.getElementById("container").style.height = window.innerHeight - 50 + "px";    
    }
    else{
        document.getElementById("container").style.height = 250 + "px";    
    }
}

window.onload = function(){
    document.getElementById("container").style.height = window.innerHeight - 50 + "px";
    window.addEventListener('resize', function(){
        resizeApply();
    });
}
// width = 300px
