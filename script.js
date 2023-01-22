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
let taches = new Map()
//La seule chose qu’on ne pourra pas faire c’est modifier le texte de la tâche puisque c’est la clé. 



// Boutons
const buttonDel = "<button class='supprimer'>Supprimer</button>"
const buttonsComplete = "${buttonDel}<button class='demarquer'>Démarquer</button>"
const buttonsNoComplete = "${buttonDel}<button class='marquer'>Marquer</button>"

// Ajoute une ligne de tableau
const creerLine = (text, complete) => {
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