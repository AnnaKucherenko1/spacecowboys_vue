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
  height: 100%;
}

.content-container {
  width: 40%;
  height: 100%;
  /* background-color: #ffd700; */
  display: flex;
  flex-direction: column;
  gap: 20%;
  justify-content: center;
  align-items: center;
}
.text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background-color: red; */
}

.centered-content {
}
.centered-text {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 38px;
  color: white;
}

.centred-small {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: white;
}

.learn-more-button {
  background-color: rgb(255, 238, 0);
  color: black;
  border: none;
  border-radius: 5px;
  height: 6%;
  width: 40%;
  font-size: 18px;
  cursor: pointer;
}

.learn-more-button:hover {
  background-color: #ffd700;
}
</style>
