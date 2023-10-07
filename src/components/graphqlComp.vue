<template>
    <div>
        <div v-if="loading">
            Chargement...
        </div>
        <div v-else-if="error">
            Une erreur est survenue : {{ error.message }}
        </div>
        <div v-else-if="data && data.getRequestResponse">
            Réponse : {{ data.getRequestResponse }}
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
    props: {
        location: String,
        personality: String,
    },
    setup(props) {
        const { result, loading, error } = useQuery(
            gql`
          query Query($location: String!, $personality: String!) {
            getRequestResponse(location: $location, personality: $personality)
          }
        `,
            {
                location: props.location,
                personality: props.personality,
            }
        );

        const data = ref(null);
        if (result.value) {
            data.value = result.value.data;
        }

        return { data, loading, error };
    },
};
</script>
  