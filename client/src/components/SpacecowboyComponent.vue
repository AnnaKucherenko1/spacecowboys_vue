<template>
  <div class="wrapper">
    <IoRocket />
    <nav class="navbar"></nav>
    <div class="background-image"></div>
    <div class="content-container">
      <div class="centered-text">
        HEY THERE, WE ARE SPACECOWBOY.
        <br />AN INDEPENDENT SPACE AGENCY
      </div>
      <button class="learn-more-button">Learn More</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  /* position: relative; */
  height: 95vh;
  width: 100vw;
}

.background-image {
  /* background-image: url("@/assets/images/rocket.png");
  background-size: cover;
  background-position: center; */
  /* width: 100vw;
  height: 100vh; */
  /* position: absolute;
  top: 0;
  left: 0;
  z-index: -1; */
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.centered-text {
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  color: white;
}

.learn-more-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: yellow;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

.learn-more-button:hover {
  background-color: #ffd700;
}
</style>
