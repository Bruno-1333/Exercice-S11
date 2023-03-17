function Personne(nom = "AAAA", prenom = "AA", age = 0, courriel = "aaaa@gmail.com",
                  adresse = "AAaaaaa", ville = "AAaaa" ) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.courriel = courriel;
    this.adresse = adresse;
    this.ville = ville;
}

function stockage(){
    //Aller chercher les données
    const nom = $('#nom').val();
    const prenom = $('#prenom').val();
    const age = $('#age').val();
    const courriel = $('#courriel').val();
    const adresse = $('#adresse').val();
    const ville = $('#ville').val();
    //Créer un objet
    const personne = new Personne(nom, prenom, age, courriel, adresse, ville);
    //Stocker l'objet dans le stockage local
    localStorage.setItem('personne', JSON.stringify(personne));
    return true;
}