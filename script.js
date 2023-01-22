alert("chargement du nouveau contenu");
// document.open();
document.write("<h1>Ma liste de tâches</h1>");
// document.write("<ol><li class=li> Xyz </li><li> Xzzeffrzfrf </li></ol>");


document.write("<input type=text name=champ placeholder= Nouvelle&nbsp;tâche>&nbsp;<input type=button value=valider>");


document.write("<br>&nbsp;</br>");
document.write("Laver la voiture");
document.write("<input class='modifier' type=button value=modifier>&nbsp;<input class='supprimer' type=button value=supprimer>");

document.write("<br>&nbsp;</br>");
document.write("<del>sortir les poubelles</del>");
document.write("<input class='modifier' type=button value=modifier>&nbsp;<input class='supprimer' type=button value=supprimer>");

// document.close();

// *************************************************************LES DONNEES*******************************************************

//tableau des tâches
// let taches = []

// Classe des tâches  >>>>>>>>>>>> Une classe pour instancier des tâches et un tableau pour les stocker.
// class taches {
//   constructor(text) {
//     this.text = text
//     this.isComplete = false
//   }
// } 



// Dictionnaire des tâches  >>>>>>>>>>>>>> Un dictionnaire est une collection de clés et valeurs qui peuvent être de n’importe quel type ce qui nous convient très bien.
let tasks = new Map()
//La seule chose qu’on ne pourra pas faire c’est modifier le texte de la tâche puisque c’est la clé. 

// **********************************************************AJOUTER UNE TACHE *************************************************

// Boutons
const buttonDel = '<button class="btn-small btn-danger">Supprimer</button>'
const buttonsComplete = `
  ${buttonDel}
  <button class="btn-small demarquer">Démarquer</button>    
` 
const buttonsNoComplete = `
  ${buttonDel}
  <button class="btn-small marquer">Marquer</button> 
`
// Ajoute une ligne de tableau
const createLine = (text, complete) => {  
  // Création TR
  const tr = document.createElement('tr')  
  // Création premier TD avec le texte 
  let td = document.createElement('td')
  td.innerHTML = complete ? `<del>${text}</del>` : text
  tr.appendChild(td)
  // Création second TD avec les boutons
  td = document.createElement('td')
  td.innerHTML = complete ? buttonsComplete : buttonsNoComplete
  tr.appendChild(td) 
  // Retour du TR
  return tr
}

//On manipule le DOM pour créer une ligne dans le tableau pour la tâche. Les nœuds sont créés avec createElement puis ajoutés avec appendChild. 
//On tient compte de la valeur de complete qui nous informe si une tâche est marquée ou pas. La fonction retourne la nouvelle ligne. 
//Pour les boutons j’ai créé quelques variables pour que le code soit plus lisible.


// Sauvegarde en local storage
const setStorage = () => localStorage.setItem('TASKS', JSON.stringify(Array.from(tasks)))

//Quand on va entrer le texte de la tâche dans la zone de texte et appuyer sur la touche Entrée. Mise en place l’écoute de l’événement 

// Ajout d'une tâche
document.querySelector('input').addEventListener('keydown', e => {
  if(e.key === 'Enter')  {
    // On ajoute la tâche dans le dictionnaire
    tasks.set(e.target.value, false)  
    // On ajoute la ligne dans le tableau
    document.querySelector('tbody').appendChild(createLine(e.target.value, false))
    // Actualisation du local storage
    setStorage() 
  }
})

// **********************************************************SUPPRIMER UNE TACHE *************************************************

// Click dans la liste des tâches
// On sait créer une tâche. On doit pouvoir aussi en supprimer une. On doit écouter les clics sur les boutons. Mais ça serait laborieux d’équiper tous les boutons d’un événement. On va plutôt écouter les clics de façon globale sur le tableau et ensuite vérifier plus précisément où a eu lieu le clic.
document.querySelector('table').addEventListener('click', e => {
    // On a cliqué sur un bouton
    if(e.target.matches('button')) {
      // Suppression d'une tâche
      if(e.target.matches('.btn-danger')) {
        // Suppression dans le dictionnaire
        tasks.delete(e.target.parentNode.previousSibling.textContent)
        // Suppression dans le DOM

      // Marquage d'une tâche
      } else {
        //toggleTask(e.target.matches('.marquer'), e.target)
      }
      // Actualisation du local storage

    }
})