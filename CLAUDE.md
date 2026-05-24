# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`pfc.py` is a single-file, command-line Rock-Paper-Scissors game (Pierre-Feuille-Ciseaux). It is interactive, in French, and depends only on the Python standard library (`random`).

## Running

```bash
python3 pfc.py
```

The game loops on `input()`, reading `pierre`/`feuille`/`ciseaux` and tracking a running score until the user enters `q`.

There is no build step, dependency manifest, or test suite.

## Architecture

The win logic is data-driven rather than branching: `BAT` maps each choice to the choice it beats, so `gagnant()` decides the round with a single dict lookup (`BAT[joueur] == ordi`) instead of enumerating cases. Adding a new move means extending `CHOIX` and `BAT` together.

`gagnant()` returns a `(key, message)` tuple where `key` is one of the `score` dict keys (`"joueur"`, `"ordi"`, `"egalite"`), letting `main()` increment the score with `score[resultat] += 1` without a separate mapping. Keep these key strings in sync across `gagnant()`, the `score` dict, and `afficher_score()`.

User-facing strings are French.
