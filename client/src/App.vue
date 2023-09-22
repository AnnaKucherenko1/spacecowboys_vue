<template>
  <NavbarComponent />
  <SpacecowboyComponent />
  <FactsComponent />
  <TeamComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavbarComponent from "./components/NavbarComponent.vue";
import SpacecowboyComponent from "./components/SpacecowboyComponent.vue";
import FactsComponent from "./components/FactsComponent.vue";
import TeamComponent from "./components/TeamComponent.vue";

@Options({
  components: {
    NavbarComponent,
    SpacecowboyComponent,
    FactsComponent,
    TeamComponent,
  },
})
export default class App extends Vue {}
</script>
