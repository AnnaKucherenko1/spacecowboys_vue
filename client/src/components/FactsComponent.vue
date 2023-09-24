<template>
  <div class="page-container">
    <div class="page-title">A FEW FACTS ABOUT US</div>
    <div class="page-content">
      <p>
        Before you do business with us,
        <br />
        you might want to know a little bit more about our company
      </p>
    </div>
    <div class="container-row">
      <!-- Container 1 -->
      <div class="container">
        <div class="container-title">Container 1</div>
        <div class="container-text">Some text inside the first container.</div>
      </div>
      <!-- Container 2 -->
      <div class="container">
        <div class="container-title">Container 2</div>
        <div class="container-text">Some text inside the second container.</div>
      </div>
      <!-- Container 3 -->
      <div class="container">
        <div class="container-title">Container 3</div>
        <div class="container-text">Some text inside the third container.</div>
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
  height: 85vh;
  width: 100vw;
  background-color: #afafaf;
}

.page-title {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 38px;
  margin: 5% 0% 1%;
}

.page-content {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  /* font-size: 24px; */
  font-size: 16px;
  margin-bottom: 20px;
  /* background-color: yellow; */
}

.container-row {
  display: flex;
  /* justify-content: space-between; */
  /* background-color: red; */
  gap: 20px;
  height: 80%;
  justify-content: center;
  margin-top: 7%;
}

.container {
  width: 20%;
  height: 50%;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  /* background-color: blue; */
}

.container-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.container-text {
  font-size: 14px;
}
</style>
