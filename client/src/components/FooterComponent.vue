<template>
  <footer class="footer">
    <div class="copyright">Copyright © 2023</div>
    <div class="cowboy">
      SPACE
      <div class="icon">
        <img src="@/assets/svg/rocket.svg" alt="rocket" />
      </div>
      COWBOY
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  height: 100px;
  bottom: 0;
  background-color: #333;
  color: rgb(100, 100, 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  left: 0;
}

.copyright {
  font-weight: 700;
  font-size: 14px;
  padding: 20px;
}

.cowboy {
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-weight: 700;
  font-size: 18px;
}
.icon {
  width: 30px;
  height: 30px;
}
</style>
