<template>
  <NavbarComponent />
  <SpacecowboyComponent />
  <!-- <FactsComponent /> -->
  <!-- <TeamComponent /> -->
  <ContactComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavbarComponent from "./components/NavbarComponent.vue";
import SpacecowboyComponent from "./components/SpacecowboyComponent.vue";
import FactsComponent from "./components/FactsComponent.vue";
import TeamComponent from "./components/TeamComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";

@Options({
  components: {
    NavbarComponent,
    SpacecowboyComponent,
    FactsComponent,
    TeamComponent,
    ContactComponent,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  overflow: hidden;
}
</style>
