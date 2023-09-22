<template>
  <div class="spacecowboy-container">
    <NavbarComponent />
    <div class="spacecowboy-component"><SpacecowboyComponent /></div>
  </div>
  <FactsComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavbarComponent from "./components/NavbarComponent.vue";
import SpacecowboyComponent from "./components/SpacecowboyComponent.vue";
import FactsComponent from "./components/FactsComponent.vue";

@Options({
  components: {
    NavbarComponent,
    SpacecowboyComponent,
    FactsComponent,
  },
})
export default class App extends Vue {}
</script>

<style>
.spacecowboy-container {
  background-image: url("@/assets/images/rocket.png");
  background-size: cover;
  /* background-repeat: no-repeat; */
  /* background-attachment: fixed; */

  width: 100%;
  height: 100vh;
}
.spacecowboy-component {
  height: 95%;
}
</style>
