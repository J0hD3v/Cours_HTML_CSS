function activate_animation() {
    let carre = document.getElementById("carre_anime");
    if(carre.className == "animation") {
        carre.className = "animation_playing";
    }
    else {
        carre.className = "animation";
    }
}