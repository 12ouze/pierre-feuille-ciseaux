# 📚 LEXIQUE — Le jargon du code expliqué simplement

Ce lexique rassemble les termes techniques que tu as croisés en créant ton jeu
Pierre-Feuille-Ciseaux (versions `pfc.py` et web). L'idée : une définition courte en
français simple, souvent une image du quotidien, et quand c'est utile un mini-exemple
**tiré de ton propre code**. Garde ce fichier sous la main et reviens-y dès qu'un mot
te bloque.

## Sommaire

1. [Terminal et système](#1-terminal-et-système)
2. [Claude Code](#2-claude-code)
3. [Outils et environnement](#3-outils-et-environnement)
4. [Programmation générale](#4-programmation-générale)
5. [Python](#5-python)
6. [Web — HTML](#6-web--html)
7. [Web — CSS](#7-web--css)
8. [Web — JavaScript](#8-web--javascript)
9. [Qualité de code](#9-qualité-de-code)
10. [Git & GitHub](#10-git--github)
11. [Pour aller plus loin](#11-pour-aller-plus-loin)

---

## 1. Terminal et système

**Terminal**
Une fenêtre où tu tapes des commandes au clavier au lieu de cliquer.
*Métaphore : le guichet « sans menu » d'une administration — tu dois connaître la phrase exacte à dire.*

**Shell**
Le programme qui, dans le terminal, comprend tes commandes et les exécute. Le terminal est la fenêtre, le shell est l'employé derrière le guichet.

**zsh**
Le shell installé par défaut sur les Mac récents (« Z shell »). C'est lui qui lit ce que tu tapes.

**Commande**
Un ordre que tu donnes au shell, souvent un mot suivi d'options.
```bash
python3 pfc.py
```

**`cd`** (*change directory*)
Se déplacer dans un autre dossier.
```bash
cd Desktop/claude-test
```

**`mkdir`** (*make directory*)
Créer un nouveau dossier.
```bash
mkdir mon-projet
```

**`pwd`** (*print working directory*)
Affiche le dossier où tu te trouves actuellement. Pratique quand tu es perdu.

**Chemin** (*path*)
L'adresse d'un fichier ou dossier, comme une adresse postale.
*Exemple : `/Users/douze/Desktop/claude-test/pfc.py`.*

**`~`** (tilde)
Raccourci pour ton dossier personnel (`/Users/douze`). `~/Desktop` = ton bureau.

**`python3`**
La commande qui lance l'interpréteur Python pour exécuter un fichier `.py`.

---

## 2. Claude Code

**Prompt**
Le message que tu écris à Claude pour lui demander quelque chose. Plus il est clair et précis, meilleur est le résultat.

**Slash command**
Une commande spéciale qui commence par `/` (ex. `/init`, `/clear`). Un raccourci vers une action prédéfinie de Claude Code.

**Mode plan**
Un mode où Claude réfléchit et te propose un plan **sans rien modifier**, le temps que tu valides. C'est ce qui a précédé la création de ce fichier.

**Diff** (*difference*)
L'aperçu des changements proposés : les lignes ajoutées (souvent en vert) et supprimées (en rouge), avant de les accepter.

**Permission**
La demande d'autorisation que Claude affiche avant une action sensible (modifier un fichier, lancer une commande). Tu acceptes ou refuses.

**« Yes, auto-accept »**
Une option qui dit à Claude d'enchaîner les actions sans te redemander à chaque fois. Pratique, mais à utiliser quand tu as confiance dans ce qui va se passer.

**`/clear`**
Efface la conversation en cours pour repartir sur une base propre, sans le contexte précédent.

**`/init`**
Analyse ton projet et génère un fichier `CLAUDE.md` qui résume comment il fonctionne.

**`/usage`**
Affiche ta consommation (combien tu as utilisé Claude Code par rapport à tes limites).

**CLAUDE.md**
Un fichier de notes que Claude lit automatiquement à chaque session : il y trouve les règles et le contexte de ton projet.

**Agent d'exploration**
Un assistant lancé par Claude pour fouiller ton code et faire un résumé, sans que tu aies à tout lire toi-même.

---

## 3. Outils et environnement

**Node.js**
Un programme qui permet d'exécuter du JavaScript **hors du navigateur** (par exemple sur ton ordinateur). Beaucoup d'outils de développement web en ont besoin.

**npm** (*Node Package Manager*)
Le « magasin d'applications » de Node.js : il installe et gère des bibliothèques de code écrites par d'autres.
```bash
npm install
```

**Homebrew**
Le gestionnaire qui installe des logiciels sur Mac en une commande (`brew install ...`).
*Métaphore : un App Store en ligne de commande.*

**VS Code** (*Visual Studio Code*)
L'éditeur de code gratuit de Microsoft, très répandu. C'est là que tu écris et lis tes fichiers.

**Extension**
Un module qu'on ajoute à VS Code pour lui donner des super-pouvoirs (coloration d'un langage, aperçu Markdown, intégration de Claude…).

**Workspace** (espace de travail)
L'ensemble des fichiers et dossiers de ton projet ouverts ensemble dans VS Code.

**Terminal intégré**
Le terminal directement inclus dans VS Code, pour taper tes commandes sans changer de fenêtre.

---

## 4. Programmation générale

**Variable**
Une boîte étiquetée qui contient une valeur **qui peut changer**.
```js
let score = 0;
```

**Constante**
Une boîte dont le contenu **ne change pas** une fois fixé.
```js
const COUPS = ["pierre", "feuille", "ciseaux"];
```

**Fonction**
Un bloc de code réutilisable qui fait une tâche précise et qu'on « appelle » par son nom.
*Dans ton jeu : `gagnant(joueur, ordi)` décide qui gagne la manche.*

**Condition (`if`/`else`)**
Exécuter du code seulement si quelque chose est vrai, sinon autre chose.
```python
if joueur == ordi:
    ...
else:
    ...
```

**Boucle**
Répéter un bloc de code plusieurs fois sans le réécrire.
*Dans `script.js`, `.forEach()` parcourt chaque bouton du jeu.*

**Tableau / liste**
Une suite ordonnée de valeurs rangées dans une seule variable.
```python
CHOIX = ["pierre", "feuille", "ciseaux"]
```

**Objet / dictionnaire**
Une collection de paires **clé → valeur**, comme un dictionnaire où chaque mot a sa définition.
```python
BAT = {"pierre": "ciseaux", "feuille": "pierre", "ciseaux": "feuille"}
```

**`return`**
Le mot-clé par lequel une fonction renvoie un résultat à qui l'a appelée.
```python
return resultat, message
```

**Commentaire**
Du texte ignoré par la machine, écrit pour les humains qui lisent le code.
```python
# Le dictionnaire BAT dit quel coup bat quel autre
```

**Import**
Charger du code venu d'ailleurs (une bibliothèque, un autre fichier) pour l'utiliser.
```python
import random
```

**Refactor (refactoring)**
Réécrire du code pour le rendre plus clair ou plus simple **sans changer ce qu'il fait**.
*Métaphore : ranger une pièce sans jeter ni ajouter de meubles.*

---

## 5. Python

**`try` / `except`**
Tenter un bloc de code et prévoir quoi faire **s'il plante**, au lieu de laisser l'erreur tout arrêter.
```python
try:
    joueur = input("Ton choix ? ")
except KeyboardInterrupt:
    print("À bientôt !")
```

**KeyboardInterrupt**
L'erreur déclenchée quand l'utilisateur appuie sur `Ctrl+C` pour interrompre le programme. Ton jeu l'attrape pour quitter proprement.

**EOFError** (*End Of File*)
L'erreur déclenchée quand il n'y a plus rien à lire en entrée (`Ctrl+D`). Attrapée elle aussi pour une fermeture en douceur.

**Tuple**
Une petite liste **figée** (non modifiable), souvent pour renvoyer plusieurs valeurs d'un coup.
```python
resultat, message = gagnant(joueur, ordi)  # on « déballe » le tuple
```

**Dictionnaire** (Python)
La version Python de l'objet : des paires clé → valeur. Tu t'en sers pour le score.
```python
score = {"joueur": 0, "ordi": 0, "egalite": 0}
```

**f-string**
Une chaîne de texte avec un `f` devant, dans laquelle on insère des variables entre `{ }`.
```python
print(f"Score — Toi : {score['joueur']}")
```

---

## 6. Web — HTML

> HTML décrit le **contenu et la structure** d'une page : les titres, boutons, textes…

**Balise** (*tag*)
Le « bloc de construction » du HTML, écrit entre chevrons et généralement par paires.
```html
<button>Pierre</button>
```

**Attribut**
Une information ajoutée à une balise pour la préciser, sous la forme `nom="valeur"`.
```html
<button data-coup="pierre">
```

**id**
Un identifiant **unique** dans la page, pour cibler un élément précis.
*Exemple : `id="message-resultat"` dans ton `index.html`.*

**class**
Une étiquette **partageable** entre plusieurs éléments, surtout pour leur appliquer le même style.
*Exemple : tous tes boutons portent `class="bouton-coup"`.*

**Élément**
Une balise et tout ce qu'elle contient, une fois vu comme un objet de la page.

**DOM** (*Document Object Model*)
La représentation de ta page sous forme d'arbre, que le JavaScript peut lire et modifier en direct.
*Métaphore : l'organigramme vivant de la page.*

**`div`**
Une boîte générique sans signification particulière, pour regrouper et structurer.
*Exemple : `<div class="boutons-coups">` regroupe tes trois boutons.*

**`span`**
Comme `div`, mais pour un petit morceau **dans une ligne** de texte (un mot, un emoji).
*Exemple : `<span class="emoji">✊</span>`.*

**`button`**
Un bouton cliquable. Tes trois coups et le bouton « rejouer » en sont.

**`section`**
Une balise qui regroupe une partie logique de la page (ton bloc score, ton bloc résultat).

---

## 7. Web — CSS

> CSS décrit l'**apparence** : couleurs, tailles, positions, animations.

**Sélecteur**
La partie d'une règle CSS qui désigne **quels** éléments styliser.
```css
.bouton-coup { /* vise tous les éléments de classe bouton-coup */ }
```

**Propriété / valeur**
À l'intérieur d'une règle : *ce que* tu changes (propriété) et *comment* (valeur).
```css
color: white;  /* propriété : color, valeur : white */
```

**Variable CSS (`:root` / `var()`)**
Définir une valeur réutilisable (souvent une couleur) une seule fois, puis la rappeler partout.
```css
:root { --accent: #4f8cff; }
button { background: var(--accent); }
```

**Flexbox**
Un mode de disposition pour aligner des éléments **en ligne ou en colonne** facilement.
*Dans ton jeu : centrer la carte au milieu de l'écran.*

**Grid**
Un mode de disposition en **grille** (lignes + colonnes).
*Exemple : `grid-template-columns: repeat(3, 1fr)` met tes trois boutons sur une même rangée.*

**`:hover`**
Un état déclenché quand la souris **survole** un élément, pour réagir au passage du curseur.
```css
.bouton-coup:hover { transform: translateY(-3px); }
```

**Transition**
Une animation douce entre deux états (au lieu d'un changement brusque).
```css
transition: transform 0.08s ease;
```

**Responsive / media query**
Adapter la mise en page à la taille de l'écran (téléphone vs ordinateur).
```css
@media (max-width: 400px) { .boutons-coups { grid-template-columns: 1fr; } }
```

**Hexadécimal**
Un code couleur en base 16 commençant par `#` : deux chiffres pour le rouge, le vert, le bleu.
*Exemple : `#4f8cff` est un bleu. `#000000` = noir, `#ffffff` = blanc.*

---

## 8. Web — JavaScript

> JavaScript apporte le **comportement** : ce qui se passe quand on clique, ce qui change à l'écran.

**`const` / `let`**
Deux façons de créer une variable : `const` pour ce qui ne change pas, `let` pour ce qui change.
```js
const BAT = { pierre: "ciseaux" };  // fixe
let score = { joueur: 0 };          // évoluera
```

**`querySelector` / `querySelectorAll`**
Trouver des éléments de la page via un sélecteur CSS : `querySelector` le premier, `querySelectorAll` tous.
```js
document.querySelectorAll(".bouton-coup");
```

**`getElementById`**
Trouver l'élément qui porte un `id` donné.
```js
document.getElementById("message-resultat");
```

**`addEventListener`**
Dire à un élément « quand tel événement arrive, exécute ce code ».
```js
bouton.addEventListener("click", jouer);
```

**Event / clic**
Un événement est une action détectable (clic, survol, frappe au clavier). Le **clic** est le plus courant dans ton jeu.

**`textContent`**
Lire ou changer le **texte** affiché dans un élément.
```js
document.getElementById("score-joueur").textContent = score.joueur;
```

**`classList`**
Ajouter, retirer ou basculer des classes CSS sur un élément, pour changer son style en direct.
```js
message.classList.add("gagne");
```

**`Math.random`**
Tire un nombre au hasard entre 0 et 1. Combiné à `Math.floor`, il choisit le coup de l'ordinateur.
```js
const i = Math.floor(Math.random() * 3);
```

**Callback**
Une fonction que tu passes à une autre pour qu'elle soit appelée **plus tard**, au bon moment.
*Exemple : la fonction donnée à `addEventListener` est un callback déclenché au clic.*

---

## 9. Qualité de code

**Refactoring**
Améliorer la structure du code sans changer son résultat (voir aussi section 4). On le fait pour rester lisible à mesure que le projet grandit.

**DRY** (*Don't Repeat Yourself*)
« Ne te répète pas » : éviter de copier-coller la même logique. On l'écrit une fois et on la réutilise.
*Dans ton jeu, le dictionnaire `BAT` évite d'écrire un `if` pour chaque combinaison.*

**Séparation des responsabilités**
Chaque partie fait **une seule chose** : HTML = structure, CSS = style, JavaScript = comportement. C'est pour ça que tu as trois fichiers distincts.

**Tests**
Du code qui vérifie automatiquement que ton programme fait bien ce qu'il doit. Ton projet n'en a pas encore, mais c'est la prochaine étape naturelle.

**JS « vanilla »**
Du JavaScript pur, **sans aucune bibliothèque** ajoutée (pas de React, etc.).
*Métaphore : une glace nature, sans supplément — c'est exactement ce que fait ton `script.js`.*

---

## 10. Git & GitHub

> Git suit l'historique de ton code sur ta machine ; GitHub héberge ce code en ligne pour le sauvegarder et le partager.

### Concepts de base

**Git**
Le logiciel qui enregistre l'historique de ton projet : chaque version est sauvegardée, et tu peux revenir en arrière à tout moment.
*Métaphore : une machine à remonter le temps pour ton code.*

**GitHub**
Un site web qui héberge tes projets Git dans le cloud, pour les sauvegarder, les partager et travailler à plusieurs. Git est l'outil, GitHub est l'hébergeur.
*Métaphore : Git = ton carnet de brouillons ; GitHub = le coffre-fort en ligne où tu le ranges.*

**Repository / repo**
Le dossier de ton projet suivi par Git, avec tout son historique. Ton repo s'appelle `pierre-feuille-ciseaux`.

**Commit**
Une photo de ton projet à un instant donné, enregistrée dans l'historique. Tu en as déjà fait 3 sur ce projet.
*Métaphore : une sauvegarde de jeu vidéo à laquelle tu pourras revenir.*

**Hash**
L'identifiant unique d'un commit, une suite de lettres et de chiffres. On utilise souvent ses 7 premiers caractères.
*Exemple : `97490a9` désigne ton tout premier commit.*

**Message de commit**
La phrase qui décrit ce que contient un commit, pour t'y retrouver plus tard.
*Exemple : « Premier commit : jeu PFC en Python + version web + lexique ».*

**Staging area / index**
La zone d'attente où tu places les fichiers à inclure dans le prochain commit. Rien n'est enregistré tant que tu n'as pas « commité ».
*Métaphore : le tapis de caisse où tu poses tes articles avant de payer.*

**Branch / branche**
Une ligne de développement parallèle, pour expérimenter sans toucher à la version principale.
*Métaphore : un brouillon séparé que tu pourras fusionner plus tard… ou jeter.*

**main** (anciennement *master*)
La branche principale, celle de référence. C'est sur `main` que vit ton projet.

**HEAD**
Un pointeur qui indique où tu te trouves dans l'historique, c'est-à-dire le commit sur lequel tu travailles actuellement.
*Métaphore : le « Vous êtes ici » sur le plan de l'historique.*

### Commandes essentielles

**`git init`**
Transforme un dossier ordinaire en repo Git (crée un historique vide).
```bash
git init
```

**`git status`**
Montre l'état actuel : fichiers modifiés, en attente, ou non suivis.
```bash
git status
```

**`git add`**
Place un ou plusieurs fichiers dans la staging area, prêts à être commités.
```bash
git add pfc.py        # un seul fichier
git add .             # tout le dossier
```

**`git commit -m`**
Enregistre les fichiers de la staging area dans un nouveau commit, avec un message (`-m`).
```bash
git commit -m "Ajoute README.md pour GitHub"
```

**`git log`**
Affiche l'historique des commits, du plus récent au plus ancien.
```bash
git log --oneline     # une ligne par commit
```

**`git diff`**
Montre précisément ce qui a changé dans tes fichiers (lignes ajoutées/supprimées), avant de commiter.
```bash
git diff
```

**`git restore`**
Annule les modifications non enregistrées d'un fichier pour revenir à sa dernière version commitée.
```bash
git restore pfc.py
```

**`git push`**
Envoie tes commits locaux vers GitHub.
```bash
git push
```

**`git pull`**
Récupère sur ta machine les changements présents sur GitHub (l'inverse de `push`). Utile dès qu'on travaille à plusieurs ou sur deux ordinateurs.
```bash
git pull
```

### Remote & GitHub

**Remote** (dépôt distant)
La copie de ton repo hébergée ailleurs (sur GitHub), avec laquelle tu synchronises ton travail.

**Origin**
Le nom par défaut donné à ton remote principal. Pour toi, `origin` pointe vers `https://github.com/12ouze/pierre-feuille-ciseaux.git`.
*Métaphore : « origin » est un surnom enregistré, comme « Maison » dans ton GPS.*

**Clone**
Copier un repo distant sur ta machine pour travailler dessus.
```bash
git clone https://github.com/12ouze/pierre-feuille-ciseaux.git
```

**README.md**
Le fichier d'accueil d'un repo : GitHub l'affiche automatiquement sur la page du projet. Il explique à quoi sert le projet et comment l'utiliser.

**.gitignore**
Un fichier qui liste ce que Git doit **ignorer** (fichiers temporaires, secrets…). On s'en servira plus tard.

**Untracked / Modified / Staged** (les 3 états)
Les trois états d'un fichier vu par Git : **untracked** (jamais suivi), **modified** (suivi mais changé depuis le dernier commit), **staged** (ajouté et prêt à être commité).

**Working tree clean**
Le message de `git status` quand tout est commité : aucune modification en attente. C'est l'état actuel de ton repo.
*Métaphore : un bureau rangé, rien ne traîne.*

### Outils

**GitHub CLI / `gh`**
L'outil en ligne de commande de GitHub : il permet de piloter GitHub depuis le terminal (créer un repo, s'authentifier…) sans passer par le site web.

**`gh auth login`**
Connecte ton terminal à ton compte GitHub, une fois pour toutes.
```bash
gh auth login
```

**`gh repo create`**
Crée un nouveau repo sur GitHub directement depuis le terminal. C'est ainsi que `pierre-feuille-ciseaux` est apparu en ligne.
```bash
gh repo create pierre-feuille-ciseaux --public --source=. --push
```

### Glossaire sécurité & connexion

**Token** (jeton)
Un mot de passe temporaire et révocable que GitHub utilise pour t'authentifier à la place de ton vrai mot de passe.
*Métaphore : un badge d'accès, plus sûr que de confier la clé de la maison.*

**HTTPS vs SSH**
Deux façons de relier ton repo à GitHub : HTTPS (par lien web, le plus simple pour débuter) ou SSH (par clé, sans ressaisir d'identifiants).

**2FA** (*authentification à deux facteurs*)
Une double vérification à la connexion (mot de passe + code sur ton téléphone), pour protéger ton compte même si le mot de passe fuite.

> 💡 **Cycle quotidien Git** — les 4 commandes à enchaîner :
> 1. **Modifier** tes fichiers (écrire du code).
> 2. `git add .` — ranger les changements dans la staging area.
> 3. `git commit -m "message clair"` — enregistrer une photo.
> 4. `git push` — envoyer sur GitHub.

---

## 11. Pour aller plus loin

Des ressources **gratuites et en français** pour approfondir :

- **MDN Web Docs** — <https://developer.mozilla.org/fr/> : la référence officielle pour HTML, CSS et JavaScript. Idéale pour vérifier comment marche une balise ou une fonction.
- **OpenClassrooms** — <https://openclassrooms.com/fr/> : des cours structurés et progressifs pour débutants (web, Python, etc.).
- **Documentation Python en français** — <https://docs.python.org/fr/3/tutorial/> : le tutoriel officiel, parfait pour consolider Python après `pfc.py`.
- **Documentation Claude Code** — <https://docs.claude.com/> : pour aller plus loin sur l'outil que tu viens d'apprendre.

---

*Bon courage — chaque terme de cette liste deviendra évident à force de l'utiliser. 🚀*
