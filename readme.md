# Session Du 18/02/2023
#### ADACI HTML CSS JS BOOSTSTRAP
---
Présentation : Site **ADA SHopping**

| -----------|----------------------------------------|
|   Outils   |          Description                   |
| -----------|----------------------------------------|
| HTML       |  Utilisation de Bootsrap               |
| JS         | APPEL API SUR FAKESTORE                |
             | INJECTION DOM ET LOCALSTRORAGE         |
| CSS        | MODIFICATION DU CODE CSS ET RESPONSIVE |
| BOOSTSTRAP | Utilisation du CDN                     |
| -----------|----------------------------------------|

## TRAVAIL A FAIRE
- La page index.html doit être modifier 
    > Utilisation de overplay ou code dans le commentaire pour le carousel
    > Ajuster les cadres pour la consommation des API pour les listes de produits
    > Ajouter un footer

- La page register.html, register.js doit être modifier 
    > Utilisation du code https://github.com/LordWinNgoran/PratiqueHtmlCssJs
    > Gestion du mot de passe , champ vide, et enregistrment dans le localstorage
    > Rediriger sur la page de connexion

- La page login.html doit être modifier  et creer un js pour le login
    > Utilisation du code https://github.com/LordWinNgoran/PratiqueHtmlCssJs
    > Gestion du mot de passe , champ vide, et verification du mot de passe et email
    > Si email et mot de passse sont corrects Afficher dans un alert "Vous êtes connecté"

### RAPPEL CODE APPEL API JS
`fetch('https://fakestoreapi.com/products', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response =>
        appendData(response));
`
appendData est une fonction qui permet d'inserer dans le **DOM** les cadres de consommation de l'API Fakestore.

## MERCI ATOS MERCI A VOUS ENSEMBLE NOUS IRONS LOIN

![alt text]('./assets/img/carousel-1.JPG')