//Variables et constantes globale

const conteneur = document.querySelector(".conteneur");
const taille_trait = document.querySelector(".taille-trait");
const couleur = document.querySelector(".couleur-picker");
const reset_btn = document.querySelector(".btn-reset");

//Valeur de la taille du trait de crayon
let taille_pixel = taille_trait.value;
console.log(taille_pixel);
//Bool dessiner
let dessiner = false;

//Creer la grille avec la variable css --size
function creer_grille(size) {
    conteneur.style.setProperty("--size", size);
    //Pour chaque pixel on genere un <div> et on joute la classe .pixel
    for(let i = 0; i < size * size; i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");

        //Quand la souris passe sur la grille
        pixel.addEventListener("mouseover", () => {
            if(!dessiner) return;
            //La couleur du pixel = couleur du picker
            pixel.style.backgroundColor = couleur.value;
        });

        pixel.addEventListener("mousedown", () => {
            pixel.style.backgroundColor = couleur.value;
        });

        //Ajout de chaque pixel au parent
        conteneur.appendChild(pixel)
    }
}

//le bool dessiner devient true quand la souris entre dans le conteneur
window.addEventListener("mousedown", () => {
    dessiner = true;
});

//Quand la souris sort du conteneur on ne peut plus dessiner
window.addEventListener("mouseup", () => {
    dessiner = false;
});

//Vider la grille et effacer le dessin
function reset_grille(){
    conteneur.innerHTML = "";
    creer_grille(taille_pixel)
}

reset_btn.addEventListener("click", reset_grille)

taille_trait.addEventListener("keyup", () => {
    taille_pixel = taille_trait.value
    reset_grille()
})

//Appel de la fonction creer la grille
creer_grille(taille_pixel)

