<template>
  <div class="spacecowboy-container">
    <NavbarComponent />
    <SpacecowboyComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavbarComponent from "./components/NavbarComponent.vue";
import SpacecowboyComponent from "./components/SpacecowboyComponent.vue";

@Options({
  components: {
    NavbarComponent,
    SpacecowboyComponent,
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
</style>
