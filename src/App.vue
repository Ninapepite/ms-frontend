<template>
  <div>
    <!-- Navbar -->
    <nav style="background-color: green; padding: 10px;">
      <span style="float: right; color: white; font-size: 24px;">RapidoRelax</span>
    </nav>

    <!-- Contenu principal -->
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
      <!-- Sélection de la ville -->
      <CitySelect v-model="location" />

      <!-- Sélection de la personnalité -->
      <PersonnalitySelect v-model="personality" />

      <!-- Bouton de recherche et requête GraphQL -->
      <graphqlComp :location="location" :personality="personality" />

      <!-- Barre de progression (je suppose qu'elle est intégrée dans le composant graphqlComp) -->
      <!-- Si ce n'est pas le cas, vous pouvez l'ajouter ici. -->
    </div>

    <!-- Résultat de la recherche (je suppose également qu'il est intégré dans graphqlComp) -->
  </div>
</template>

<script>
// Importation des composants
import CitySelect from './components/citySelect.vue';
import PersonnalitySelect from './components/personnalitySelect.vue';
import graphqlComp from './components/graphqlComp.vue';

export default {
  components: {
    CitySelect,
    PersonnalitySelect,
    graphqlComp,
  },
  data() {
    return {
      location: '',       // Ville sélectionnée
      personality: '',   // Personnalité sélectionnée
    };
  },
};
</script>

<style scoped>
/* Ici, vous pouvez ajouter des styles spécifiques à ce composant. */
</style>
