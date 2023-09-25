<template>
  <div id="facts" class="page-container">
    <div class="page-title">A FEW FACTS ABOUT US</div>
    <div class="page-content">
      Before you do business with us,
      <br />
      you might want to know a little bit more
      <br class="mobile-break" />
      about our company
    </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  box-sizing: border-box;
  height: 90vh;
  width: 100vw;
  background-color: #afafaf;
}

.page-title {
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 38px;
}

.page-content {
  text-align: center;
  font-weight: 300;
  font-size: 18px;
}

.container-row {
  display: flex;
  gap: 20px;
  height: auto;
  justify-content: center;
  align-items: center;
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
  background-color: #ffd700;
}
.container {
  width: 20%;
  height: 400px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.container:hover {
  transform: scale(1.05);
}

.container-title {
  height: 25%;
  font-weight: 700;
  font-size: 24px;
}

.container-text {
  height: 50%;
  font-weight: 300;
  font-size: 16px;
  padding: 20px;
}

@media screen and (min-width: 768px) {
  .mobile-break {
    display: none;
  }
}

@media (max-width: 768px) {
  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 170vh;
    gap: 20px;
  }

  .container-row {
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-block: 5%;
  }

  .page-title {
    font-size: 25px;
  }

  .page-content {
    font-size: 15px;
  }

  .container {
    width: 90%;
    height: 30%;
  }

  .svg {
    top: calc(10% - 80px);
  }
}
</style>
