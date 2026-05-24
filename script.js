/*
  ============================================================================
  script.js — La LOGIQUE du jeu (ce qui se passe quand on clique)
  ============================================================================
  Ce fichier reprend exactement les règles du jeu en ligne de commande
  (pfc.py). Le JavaScript écoute les clics sur les boutons, fait jouer
  l'ordinateur, décide qui gagne, puis met à jour ce qui est affiché.

  💡 Astuce de lecture : le code se lit du HAUT vers le BAS, mais il
     "démarre" tout en bas, là où on branche les boutons (section 6).
*/

/* ---------------------------------------------------------------------------
   1) LES DONNÉES DU JEU (identiques à pfc.py)
--------------------------------------------------------------------------- */

// Les trois coups possibles.
const COUPS = ["pierre", "feuille", "ciseaux"];

// La table « qui bat quoi » : BAT[x] est le coup que x bat.
// Exemple : BAT["pierre"] vaut "ciseaux"  →  la pierre bat les ciseaux.
const BAT = {
  pierre: "ciseaux",
  feuille: "pierre",
  ciseaux: "feuille",
};

// Un emoji pour chaque coup, juste pour un affichage plus joli.
const EMOJIS = {
  pierre: "🪨",
  feuille: "📄",
  ciseaux: "✂️",
};

// Le score : 3 compteurs, comme le dictionnaire "score" de pfc.py.
// "let" (et non "const") car ces nombres vont changer pendant la partie.
let score = {
  joueur: 0,
  ordi: 0,
  egalite: 0,
};

/* ---------------------------------------------------------------------------
   2) ON RÉCUPÈRE LES ÉLÉMENTS DE LA PAGE
   document.getElementById("...") va chercher dans index.html l'élément
   qui porte cet id. On les range dans des variables pour les réutiliser.
--------------------------------------------------------------------------- */
const elementChoixJoueur = document.getElementById("choix-joueur");
const elementChoixOrdi   = document.getElementById("choix-ordi");
const elementMessage     = document.getElementById("message-resultat");

const elementScoreJoueur  = document.getElementById("score-joueur");
const elementScoreOrdi    = document.getElementById("score-ordi");
const elementScoreEgalite = document.getElementById("score-egalite");

/* ---------------------------------------------------------------------------
   3) L'ORDINATEUR CHOISIT UN COUP AU HASARD
   Équivalent de random.choice(CHOIX) en Python.
   - Math.random() donne un nombre entre 0 et (presque) 1.
   - On le multiplie par 3 puis Math.floor() arrondit vers le bas,
     ce qui donne 0, 1 ou 2 : les positions des coups dans COUPS.
--------------------------------------------------------------------------- */
function choixOrdi() {
  const position = Math.floor(Math.random() * COUPS.length);
  return COUPS[position];
}

/* ---------------------------------------------------------------------------
   4) QUI GAGNE LA MANCHE ?
   Même logique que la fonction gagnant() de pfc.py.
   On renvoie un objet avec :
     - cle     : "joueur", "ordi" ou "egalite" (sert à compter le score)
     - message : la phrase à afficher
--------------------------------------------------------------------------- */
function gagnant(coupJoueur, coupOrdi) {
  // Cas 1 : les deux coups sont identiques → égalité.
  if (coupJoueur === coupOrdi) {
    return { cle: "egalite", message: "Égalité !" };
  }

  // Cas 2 : le coup du joueur bat celui de l'ordi → le joueur gagne.
  if (BAT[coupJoueur] === coupOrdi) {
    return { cle: "joueur", message: "Tu gagnes ! 🎉" };
  }

  // Cas 3 : sinon, c'est l'ordinateur qui gagne.
  return { cle: "ordi", message: "L'ordinateur gagne. 🤖" };
}

/* ---------------------------------------------------------------------------
   5) JOUER UNE MANCHE (appelée à chaque clic sur un bouton de coup)
--------------------------------------------------------------------------- */
function jouer(coupJoueur) {
  // L'ordinateur tire son coup.
  const coupOrdi = choixOrdi();

  // On affiche les deux coups (emoji + mot), en temps réel.
  elementChoixJoueur.textContent = EMOJIS[coupJoueur] + " " + coupJoueur;
  elementChoixOrdi.textContent   = EMOJIS[coupOrdi] + " " + coupOrdi;

  // On calcule le résultat.
  const resultat = gagnant(coupJoueur, coupOrdi);

  // On affiche le message de résultat.
  elementMessage.textContent = resultat.message;

  // On colore le message selon l'issue, via une classe CSS.
  // D'abord on enlève les anciennes couleurs, puis on met la bonne.
  elementMessage.classList.remove("gagne", "perdu", "egalite");
  if (resultat.cle === "joueur") {
    elementMessage.classList.add("gagne");
  } else if (resultat.cle === "ordi") {
    elementMessage.classList.add("perdu");
  } else {
    elementMessage.classList.add("egalite");
  }

  // On ajoute 1 au bon compteur de score, puis on rafraîchit l'affichage.
  score[resultat.cle] = score[resultat.cle] + 1;
  afficherScore();
}

/* ---------------------------------------------------------------------------
   6) AFFICHER LE SCORE (recopie les 3 compteurs dans la page)
--------------------------------------------------------------------------- */
function afficherScore() {
  elementScoreJoueur.textContent  = score.joueur;
  elementScoreOrdi.textContent    = score.ordi;
  elementScoreEgalite.textContent = score.egalite;
}

/* ---------------------------------------------------------------------------
   7) RÉINITIALISER LE SCORE (bouton "Réinitialiser le score")
--------------------------------------------------------------------------- */
function reinitialiser() {
  // On remet les 3 compteurs à zéro.
  score = { joueur: 0, ordi: 0, egalite: 0 };
  afficherScore();

  // On nettoie aussi la zone de résultat.
  elementChoixJoueur.textContent = "—";
  elementChoixOrdi.textContent   = "—";
  elementMessage.textContent = "Clique sur un coup pour commencer !";
  elementMessage.classList.remove("gagne", "perdu", "egalite");
}

/* ---------------------------------------------------------------------------
   8) ON BRANCHE LES BOUTONS (c'est ici que tout démarre)
--------------------------------------------------------------------------- */

// On récupère les 3 boutons de coups (ils partagent la classe .bouton-coup).
const boutonsCoups = document.querySelectorAll(".bouton-coup");

// Pour CHAQUE bouton, on dit : "quand on te clique, lance jouer() avec ton coup".
// Le coup est lu dans l'attribut data-coup écrit dans index.html.
boutonsCoups.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    const coup = bouton.dataset.coup;   // ex. "pierre"
    jouer(coup);
  });
});

// On branche enfin le bouton de réinitialisation.
const boutonReset = document.getElementById("bouton-reset");
boutonReset.addEventListener("click", reinitialiser);
