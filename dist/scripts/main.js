var icon = document.getElementsByClassName("page__nav-hamburger")[0];
var nav = document.getElementsByClassName("page__nav-ul")[0];

icon.addEventListener("click", function(){
    if(window.matchMedia("(max-width: 786px)").matches){
        console.log("changed");
        if(nav.style.display === 'none'){
            nav.style.display = 'block';
        }else{
            nav.style.display = 'none';
        }
        console.log(nav.style.display);
    }
});


