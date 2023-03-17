function afficherPersonne(nom,prenom,age,courriel,adresse,ville){

    $('#reception').append(
        `<p>Nom: ${nom}</p>
        <p>Prenom: ${prenom}</p>
    <p>Age: ${age}</p>
    <p>Courriel: ${courriel}</p>
    <p>Adresse: ${adresse}</p>
    <p>Ville: ${ville}</p>`
    );
}
const personne = JSON.parse(localStorage.getItem('personne'));
//afficherPersonne(personne.nom, personne.prenom, personne.age, personne.courriel, personne.adresse, personne.ville);

const  liste = JSON.parse(localStorage.getItem('list')) || [] ; // Récupérer la liste sauvegardée
liste.push(personne); // Ajouter la nouvelle personne dans la liste
localStorage.setItem('list', JSON.stringify(liste)); // Sauvegarder la liste
for(p of liste){
    afficherPersonne(p.nom, p.prenom, p.age, p.courriel, p.adresse, p.ville); // Afficher la liste
}