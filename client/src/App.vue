<template>
  <NavbarComponent />
  <SpacecowboyComponent />
  <FactsComponent />
  <AsyncComponentTeam />
  <AsyncComponentPhotos />
  <ContactComponent />
  <FooterComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineAsyncComponent } from "vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import SpacecowboyComponent from "./components/SpacecowboyComponent.vue";
import FactsComponent from "./components/FactsComponent.vue";
const AsyncComponentTeam = defineAsyncComponent(
  () => import("./components/TeamComponent.vue")
);
const AsyncComponentPhotos = defineAsyncComponent(
  () => import("./components/PhotosComponent.vue")
);
import ContactComponent from "./components/ContactComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

@Options({
  components: {
    NavbarComponent,
    SpacecowboyComponent,
    FactsComponent,
    AsyncComponentTeam,
    ContactComponent,
    AsyncComponentPhotos,
    FooterComponent,
  },
})
export default class App extends Vue {}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

#app {
  overflow-x: hidden;
}
</style>
