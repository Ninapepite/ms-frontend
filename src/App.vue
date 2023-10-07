<template>
  <q-layout view="lHh Lpr lFf">

    <!-- Header vert -->
    <q-header elevated class="bg-green-4 glossy">
      <q-toolbar>

        <!-- Bouton menu -->
        <q-btn flat dense round @click="toggleDrawer" aria-label="Menu" icon="menu" />

        <!-- Titre central -->
        <q-toolbar-title class="text-white">
          Ma Recherche
        </q-toolbar-title>

        <!-- Sélection de la ville -->
        <q-input outlined v-model="location" placeholder="Choisissez une ville" class="q-mr-md" />

        <!-- Sélection de la personnalité -->
        <q-select outlined v-model="personality" :options="personalityOptions" label="Personnalité" class="q-mr-md" />

        <!-- Bouton de recherche -->
        <q-btn @click="executeSearch" label="Rechercher" color="white" class="bg-green-7" />

      </q-toolbar>
    </q-header>

    <!-- Le reste de votre layout... -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <!-- ... (vos éléments du drawer) ... -->
    </q-drawer>

    <!-- Conteneur de la page principale -->
    <q-page-container>

      <!-- Affichage du résultat de la recherche -->
      <ResponseGet :location="location" :personality="personality" />

    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

// Importation des composants nécessaires
import ResponseGet from './components/responseGet.vue';

export default {
  name: 'LayoutDefault',

  components: {
    ResponseGet
  },

  setup() {
    // État pour le tiroir (drawer) gauche
    const leftDrawerOpen = ref(false);

    // État pour la ville et la personnalité sélectionnées
    const location = ref('');
    const personality = ref('');
    const personalityOptions = ref(['Joyeux', 'Triste', 'Énergique', 'Calme']); // Ajustez selon vos besoins

    // Fonction pour ouvrir/fermer le drawer
    const toggleDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    // Fonction exécutée lorsque l'utilisateur clique sur "Rechercher"
    const executeSearch = () => {
      // Ici, la logique de recherche est simplement une sortie console.
      // Adaptez cela à vos besoins.
      console.log(`Recherche pour ${location.value} avec personnalité ${personality.value}`);
    };

    return {
      leftDrawerOpen,
      location,
      personality,
      personalityOptions,
      toggleDrawer,
      executeSearch
    }
  }
}
</script>

<style scoped></style>
