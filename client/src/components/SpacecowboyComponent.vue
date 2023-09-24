<template>
  <div class="wrapper">
    <div class="content-container">
      <div class="text">
        <div class="centered-text">HEY THERE, WE ARE SPACECOWBOY.</div>
        <div class="centred-small">- AN INDEPENDENT SPACE AGENCY -</div>
      </div>
      <button class="learn-more-button">Learn More</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%;
  width: 100%; */
  background-image: url("@/assets/images/hero.jpg");
  background-size: cover;
  /* background-repeat: no-repeat; */
  /* background-attachment: fixed; */
  background-color: rgba(0, 0, 0, 0.384);
  width: 100vw;
  height: 100vh;
}

.content-container {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.397);
  display: flex;
  flex-direction: column;
  right: 0;
  left: 0;
  gap: 20%;
  justify-content: center;
  align-items: center;
}
.text {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 40%;
  /* background-color: red; */
}

.centered-content {
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
</style>
