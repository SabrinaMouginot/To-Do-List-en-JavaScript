alert("chargement du nouveau contenu");
// document.open();
document.write("<h1>Ma liste de tâches</h1>");
// document.write("<ol><li class=li> Xyz </li><li> Xzzeffrzfrf </li></ol>");


document.write("<input type=text name=champ placeholder= Nouvelle&nbsp;tâche>&nbsp;<input type=button value=valider>");


document.write("<br>&nbsp;</br>");
document.write("Laver la voiture");
document.write("<input type=button value=modifier>&nbsp;<input type=button value=supprimer>");

document.write("<br>&nbsp;</br>");
document.write("<del>sortir les poubelles</del>");
document.write("<input type=button value=modifier>&nbsp;<input type=button value=supprimer>");

// document.close();

//tableau des tâches
var taches = []

// Classe des tâches  >>>>>>>>>>>> Une classe pour instancier des tâches et un tableau pour les stocker.
// class taches {
//   constructor(text) {
//     this.text = text
//     this.isComplete = false
//   }
// } 

// Dictionnaire des tâches  >>>>>>>>>>>>>> Un dictionnaire est une collection de clés et valeurs qui peuvent être de n’importe quel type ce qui nous convient très bien.
let taches = new Map()
//La seule chose qu’on ne pourra pas faire c’est modifier le texte de la tâche puisque c’est la clé. On pourrait supprimer cette entrée et en créer une autre mais alors elle se retrouverait à la fin de la liste ce qui ne serait pas très judicieux.
