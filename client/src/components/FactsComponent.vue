<template>
  <div class="page-container">
    <div class="page-title">A FEW FACTS ABOUT US</div>
    <p class="page-content">
      Before you do business with us,
      <br />
      you might want to know a little bit more about our company
    </p>
    <div class="container-row">
      <div class="container">
        <div class="svg">
          <img src="@/assets/svg/cowboy.svg" alt="cowboy hat" />
        </div>
        <div class="container-title">WE ARE COWBOYS</div>
        <div class="container-text">
          You might have guessed that from our company name, but the fact is:
          Yes, we are inded cowboys. Cowboys who'd like to go to space.
          <br />Deal with it.
        </div>
      </div>
      <div class="container">
        <div class="svg">
          <img src="@/assets/svg/tools.svg" alt="tools" />
        </div>
        <div class="container-title">WE LIKE TO TINKER</div>
        <div class="container-text">
          There are a lot of things lying around on a typical Cowboy Ranch. So
          we started putting them together, and got really good at rocket
          building.
        </div>
      </div>
      <div class="container">
        <div class="svg">
          <img src="@/assets/svg/space.svg" alt="space" />
        </div>
        <div class="container-title">WE EXPLORE SPACE</div>
        <div class="container-text">
          Once we got our first proper rocket, everything went quite fast. And
          now we are the #1 independent space agency in the world.
          <br />
          Who would have guessed?
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YourComponent",
};
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 20px;
  height: 90vh;
  width: 100vw;
  background-color: #afafaf;
}

.page-title {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 38px;
  margin: 3% 0% 1%;
}

.page-content {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 20px;
}

.container-row {
  display: flex;
  gap: 20px;
  height: 80%;
  justify-content: center;
  margin-top: 7%;
}
.svg {
  position: relative;
  top: calc(0% - 50px);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  margin-bottom: -30px;
}
.container {
  width: 20%;
  height: 50%;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  /* background-color: blue; */
}

.container:hover {
  transform: scale(1.05);
}

.container-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 20px;
}

.container-text {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  /* font-size: 24px; */
  font-size: 16px;
  padding: 20px;
}

@media (max-width: 768px) {
  .container-row {
    flex-direction: column;
  }
  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
