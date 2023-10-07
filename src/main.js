import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DefaultApolloClient } from '@vue/apollo-composable';

// Créez une instance du client Apollo
const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000', // Remplacez par l'URL de votre serveur GraphQL
    cache: new InMemoryCache(),
});

// Créez l'application Vue
const app = createApp(App);

// Fournissez le client Apollo à l'application
app.provide(DefaultApolloClient, apolloClient);

// Utilisez Quasar et montez l'application
app.use(Quasar, quasarUserOptions).mount('#app');
