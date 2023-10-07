<template>
    <div>
        <q-select filled v-model="selectedPersonality" :options="personalities" label="Sélectionnez une personnalité"
            @input="emitPersonality"></q-select>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            personalities: [
                "culturel",
                "historique",
                "sportif",
                "detente",
                "fetard",
                "aquatique",
                "famille",
                "naturel",
                "divertissement"
            ],
            selectedPersonality: null,
        };
    },
    methods: {
        emitPersonality() {
            this.$emit('update:personality', this.selectedPersonality);
        },
    },
};
</script>
  