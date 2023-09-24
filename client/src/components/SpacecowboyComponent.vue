<template>
  <div class="wrapper">
    <div class="content-container">
      <div class="text">
        <div class="centered-text">
          HEY THERE,
          <br class="mobile-break" />
          WE ARE
          <br class="mobile-break" />
          SPACECOWBOY
        </div>
        <div class="centred-small">- AN INDEPENDENT SPACE AGENCY -</div>
      </div>
      <button class="learn-more-button">Learn More</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0;
  background-image: url("@/assets/images/hero.jpg");
  backdrop-filter: rgba(0, 0, 0, 0.384);
  background-size: cover;
  width: 100vw;
  height: 100vh;
}

.content-container {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.397);
  display: flex;
  flex-direction: column;
  gap: 20%;
  justify-content: center;
  align-items: center;
}
.text {
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  width: 40%;
}

.centered-text {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: white;
}

.centred-small {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: white;
}

.learn-more-button {
  background-color: #ffd700;
  color: black;
  border: none;
  border-radius: 5px;
  height: 6%;
  width: 15%;
  font-size: 18px;
  cursor: pointer;
}

.learn-more-button:hover {
  background-color: #dd9804;
}

@media screen and (min-width: 768px) {
  .mobile-break {
    display: none;
  }
}

@media (max-width: 768px) {
  .text {
    width: 90%;
  }
  .centered-text {
    font-size: 30px;
  }

  .centred-small {
    font-size: 15px;
  }
  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .learn-more-button {
    width: 50%;
  }
}
</style>
