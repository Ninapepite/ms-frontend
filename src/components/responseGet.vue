<template>
    <div>
        <CitySelect v-model="location" />
        <PersonnalitySelect v-model="personality" />
        <graphqlComp :location="location" :personality="personality" />
    </div>
</template>
  
<script>
import citySelect from './citySelect.vue';
import personnalitySelect from './personnalitySelect.vue';
import graphqlComp from './graphqlComp.vue';
import CitySelect from './citySelect.vue';
import PersonnalitySelect from './personnalitySelect.vue';

export default {
    components: {
        citySelect,
        personnalitySelect,
        graphqlComp,
        CitySelect,
        PersonnalitySelect
    },
    data() {
        return {
            location: '',
            personality: '',
        };
    },
};
</script>
  