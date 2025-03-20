function toggleCategorie(id) {
    let element = document.getElementById(id);

    // Cache toutes les autres catégories
    document.querySelectorAll('.contenu').forEach(cat => {
        if (cat.id !== id) {
            cat.style.display = "none";

            // Réinitialisation des lecteurs PDF (par exemple, recharger le contenu)
            let iframe = cat.querySelector('iframe');
            if (iframe) {
                iframe.src = iframe.src;  // Recharge l'iframe
            }
        }
    });

    // Affiche ou masque l'élément sélectionné
    element.style.display = (element.style.display === "block") ? "none" : "block";

    // Si l'élément est affiché, on fait défiler la page vers lui avec un scroll doux
    if (element.style.display === "block") {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        // Réinitialisation du lecteur PDF dans la catégorie cliquée (par exemple, recharger l'iframe)
        let iframe = element.querySelector('iframe');
        if (iframe) {
            iframe.src = iframe.src;  // Recharge l'iframe
        }
    }
}

function fermerToutesCategories() {
    document.querySelectorAll('.contenu').forEach(cat => {
        cat.style.display = "none";

        // Réinitialise les lecteurs PDF (ferme les PDF ouverts)
        let iframe = cat.querySelector('iframe');
        if (iframe) {
            iframe.src = iframe.src;  // Recharge l'iframe
        }
    });
}
