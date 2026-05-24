# Jeu Pierre-Feuille-Ciseaux en ligne de commande.
#
# Sections du fichier :
# - CHOIX / BAT      : les coups possibles et la table « qui bat quoi »
# - gagnant()        : détermine l'issue d'une manche
# - afficher_score() : affiche le score courant
# - main()           : boucle de jeu et gestion de la sortie (q, Ctrl+C, Ctrl+D)

# Module standard pour le choix aléatoire de l'ordinateur.
import random

# Les trois coups possibles, et la table « qui bat quoi » :
# BAT[x] est le coup que x bat (ex. la pierre bat les ciseaux).
CHOIX = ["pierre", "feuille", "ciseaux"]
BAT = {"pierre": "ciseaux", "feuille": "pierre", "ciseaux": "feuille"}


# Détermine l'issue d'une manche à partir des coups du joueur et de l'ordi.
# Renvoie (clef_de_score, message) où clef_de_score est une clef du dict score.
def gagnant(joueur, ordi):
    if joueur == ordi:
        return "egalite", "Égalité !"
    if BAT[joueur] == ordi:
        return "joueur", "Tu gagnes ! 🎉"
    return "ordi", "L'ordinateur gagne. 🤖"


# Affiche le score courant (victoires du joueur, de l'ordi, et égalités).
def afficher_score(score):
    print(
        f"Score — Toi : {score['joueur']} | "
        f"Ordi : {score['ordi']} | "
        f"Égalités : {score['egalite']}"
    )


# Boucle de jeu principale : lit le coup du joueur, tire celui de l'ordi,
# met à jour le score. Sortie propre via 'q', Ctrl+C ou Ctrl+D : on affiche
# alors le score final puis « À bientôt ! » sans traceback.
def main():
    print("Pierre-Feuille-Ciseaux (tape 'q' pour quitter)")
    score = {"joueur": 0, "ordi": 0, "egalite": 0}
    try:
        while True:
            joueur = input("\nTon choix (pierre/feuille/ciseaux) : ").strip().lower()
            if joueur == "q":
                break
            if joueur not in CHOIX:
                print("Choix invalide, réessaie.")
                continue
            ordi = random.choice(CHOIX)
            print(f"L'ordinateur a choisi : {ordi}")
            resultat, message = gagnant(joueur, ordi)
            score[resultat] += 1
            print(message)
            afficher_score(score)
    except (KeyboardInterrupt, EOFError):
        # Ctrl+C / Ctrl+D : on passe à la ligne après le « ^C » du terminal.
        print()
    print("\nScore final :")
    afficher_score(score)
    print("À bientôt !")


if __name__ == "__main__":
    main()
