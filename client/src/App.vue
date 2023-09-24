<template>
  <NavbarComponent />
  <SpacecowboyComponent />
  <FactsComponent />
  <TeamComponent />
  <PhotosComponent />
  <ContactComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavbarComponent from "./components/NavbarComponent.vue";
import SpacecowboyComponent from "./components/SpacecowboyComponent.vue";
import FactsComponent from "./components/FactsComponent.vue";
import TeamComponent from "./components/TeamComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import PhotosComponent from "./components/PhotosComponent.vue";

@Options({
  components: {
    NavbarComponent,
    SpacecowboyComponent,
    FactsComponent,
    TeamComponent,
    ContactComponent,
    PhotosComponent,
  },
})
export default class App extends Vue {}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  font-family: "Montserrat", sans-serif;
}

#app {
  overflow-x: hidden;
}
</style>
