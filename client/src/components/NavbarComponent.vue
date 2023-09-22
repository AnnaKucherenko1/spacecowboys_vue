<template>
  <nav id="nav" :class="{ sticky: active }">
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
      active: false,
      isMobileMenuOpen: false,
      isSmallScreen: false,
    };
  },
  mounted() {
    window.document.onscroll = () => {
      let navBar = document.getElementById("nav");
      if (window.scrollY > navBar.offsetTop) {
        this.active = true;
      } else {
        this.active = false;
      }
    };
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    toggleNavClass() {
      if (this.active == false) {
        return "nav";
      } else {
        return "sticky-nav";
      }
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
#nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  height: 4%;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
}
#nav.sticky {
  transition: 150ms;
  background-color: #333333;
  height: 4%;
}
.icon {
  width: 40%;
  height: 25px;
  display: flex;
  justify-content: center;
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
  height: 100vh;
}

.mobile-button {
  display: none;
}

.mobile-menu {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 101;
  display: flex;
  height: 100vh;
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

a:hover {
  color: yellow;
  cursor: pointer;
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
