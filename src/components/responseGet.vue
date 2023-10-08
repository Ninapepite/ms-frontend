<template>
    <div>
        <!-- Composant pour sélectionner une ville; il utilise v-model, donc il est bidirectionnel -->
        <CitySelect v-model="location" />
        <!-- Composant pour sélectionner une personnalité; encore une fois, v-model le rend bidirectionnel -->
        <PersonnalitySelect v-model="personality" />
        <!-- Composant qui prendra probablement la ville et la personnalité pour exécuter une requête GraphQL -->
        <graphqlComp :location="location" :personality="personality" />
    </div>
</template>
  
<script>
// Importation des composants
// Note : citySelect et CitySelect sont identiques, donc l'un d'entre eux est redondant
import citySelect from './citySelect.vue';
import personnalitySelect from './personnalitySelect.vue';
import graphqlComp from './graphqlComp.vue';

export default {
    components: {
        // Déclaration des composants importés pour les utiliser dans le template
        citySelect,
        personnalitySelect,
        graphqlComp,
    },
    data() {
        // État local pour stocker la ville et la personnalité sélectionnées
        return {
            location: '',
            personality: '',
        };
    },
};
</script>
