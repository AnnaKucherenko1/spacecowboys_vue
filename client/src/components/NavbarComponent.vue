<template>
  <nav class="{ 'sticky': isSticky, 'mobile-open': isMobileMenuOpen }">
    <div class="icon">
      <svg>
        <image href="/rocket_launch.svg" />
      </svg>
    </div>
    <div class="desktop-nav">
      <a>ABOUT US</a>
      <a>THE TEAM</a>
      <a>IMPRESSIONS</a>
      <a>CONTACT</a>
    </div>

    <div class="mobile-nav">
      <button @click="toggleMobileMenu" class="mobile-button">
        {{ isMobileMenuOpen ? "close" : "open" }}
      </button>
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <a>ABOUT US</a>
        <a>THE TEAM</a>
        <a>IMPRESSIONS</a>
        <a>CONTACT</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      isMobileMenuOpen: false,
      isSmallScreen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      this.isSticky = scrollY > 100;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 768;
    },
  },
};
</script>

<style scoped>
nav {
  position: relative;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: row;
  padding: 30px;
  height: 5%;
}
.icon {
  width: 40%;
  height: 25px;
  display: flex;
  justify-content: center;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: gray;
  z-index: 100;
}
.desktop-nav {
  display: flex;
  width: 60%;
  justify-content: center;
  color: white;
  gap: 20px;
}

.desktop-nav a {
}

.mobile-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.mobile-button {
  display: none;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mobile-menu a {
  color: white;
  font-size: 24px;
  margin: 10px 0;
  text-decoration: none;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-button {
    display: block;
    z-index: 1;
  }

  .mobile-nav {
    display: flex;
    z-index: 99;
  }
}
</style>
