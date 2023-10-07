<template>
    <div>
        <input v-model="currentInput" @input="onInput" placeholder="Entrez le nom de la ville" />
        <div v-if="suggestions.length">
            <div v-for="suggestion in suggestions" :key="suggestion.place_id" @click="selectCity(suggestion)">
                {{ suggestion.description }}
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            currentInput: '',
            suggestions: [],
            apiKey: process.env.VUE_APP_GOOGLE_PLACES_API_KEY // supposant que vous avez défini cette variable d'environnement
        };
    },
    methods: {
        async onInput() {
            if (this.currentInput.length >= 3) {
                try {
                    const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
                        params: {
                            input: this.currentInput,
                            key: this.apiKey
                        }
                    });
                    this.suggestions = response.data.predictions;
                } catch (error) {
                    console.error("Erreur lors de la récupération des suggestions:", error);
                }
            } else {
                this.suggestions = [];
            }
        },
        selectCity(suggestion) {
            this.currentInput = suggestion.description;
            this.suggestions = [];
            this.$emit('city-selected', suggestion.description);
        }
    }
};
</script>
  
<style scoped>
/* Ajoutez vos styles pour l'apparence de l'auto-complétion ici */
</style>
  