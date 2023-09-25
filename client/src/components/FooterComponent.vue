<template>
  <footer class="footer">
    <div class="copyright">COPYRIGHT</div>
    <div class="cowboy">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <!-- Your rocket SVG content here -->
      </svg>
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
  height: 10vh;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.copyright {
  font-weight: bold;
}

.cowboy {
  display: flex;
  align-items: center;
}

/* Add your custom styles for the rocket SVG here */
</style>
