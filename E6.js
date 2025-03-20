function toggleCategorie(id) {
    let element = document.getElementById(id);

    // Affiche ou masque l'élément sélectionné sans affecter les autres catégories
    element.style.display = (element.style.display === "block") ? "none" : "block";

    // Si l'élément est affiché, on fait défiler la page vers lui avec un scroll doux
    if (element.style.display === "block") {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function fermerToutesCategories() {
    document.querySelectorAll('.contenu').forEach(cat => {
        cat.style.display = "none";
    });
}
