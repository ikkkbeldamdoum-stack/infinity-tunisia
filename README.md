# Infinity Tunisia — Frontend (Vue 3)

Frontend du site **Infinity** (agence de Production & Marketing, Tunis), construit avec **Vue 3 + Vite + Vue Router**.

## Pages incluses

| Route                 | Page              |
|------------------------|-------------------|
| `/`                    | Accueil           |
| `/qui-sommes-nous`     | Qui sommes-nous ? |
| `/nos-services`        | Nos Services      |

## Structure

```
src/
  assets/         logo
  components/     NavBar, AppFooter, ApertureMotif (motif animé du logo)
  views/          Accueil.vue, QuiSommesNous.vue, NosServices.vue
  router/         configuration Vue Router
  style.css       design tokens (couleurs, typographie)
```

## Installation et lancement

```bash
npm install
npm run dev
```

Le site est accessible sur **http://localhost:5173**.

## Build de production

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`, prêt à être déployé sur n'importe quel hébergeur statique.

## Personnalisation rapide

- **Couleurs / typographie** : tout est centralisé dans `src/style.css` (variables CSS en haut du fichier : `--gold`, `--pine`, `--ink`, `--paper`...).
- **Logo** : remplacez `src/assets/logo.jpg` par votre fichier (gardez le même nom, ou mettez à jour les imports dans `NavBar.vue` et `QuiSommesNous.vue`).
- **Coordonnées de contact** : à modifier dans `src/components/AppFooter.vue`.
- **Textes des services / valeurs / FAQ** : chaque page (`src/views/*.vue`) contient ses données dans le `<script setup>`, sous forme de tableaux simples à éditer.
"# infinity-tunisia" 
