<template>
  <nav id="nav" :class="{ sticky: isStickyActive }">
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
      <!-- <div v-if="isMobileMenuOpen" class="mobile-menu">
        <a>ABOUT US</a>
        <a>THE TEAM</a>
        <a>IMPRESSIONS</a>
        <a>CONTACT</a>
      </div> -->
      <button @click="toggleMobileMenu" class="mobile-button">
        {{ isMobileMenuOpen ? "close" : "Menu" }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isStickyActive: false,
      isMobileMenuOpen: false,
      isSmallScreen: false,
    };
  },
  mounted() {
    window.document.onscroll = () => {
      let navBar = document.getElementById("nav");
      if (window.scrollY > navBar.offsetTop) {
        this.isStickyActive = true;
      } else {
        this.isStickyActive = false;
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
  width: 100%;
  z-index: 100;
}
.sticky {
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

.mobile-menu {
  position: relative;
  left: calc(0%, -50px);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 101;
  display: flex;
  height: 100vh;
  width: 100vw;
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

@media screen and (min-width: 768px) {
  .mobile-nav {
    /* display: flex; */
    /* justify-content: flex-end; */
    /* align-items: center; */
    /* padding: 10px;
    box-sizing: border-box; */
    /* background-color: red;
    height: 100vh;
    width: 60%;
    z-index: 500; */
  }
  .mobile-nav {
    display: none;
  }

  .mobile-button {
    display: none;
  }
}

@media (max-width: 768px) {
  #nav {
    justify-content: space-between;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-button {
    width: 30%;
    height: 4%;
    padding: 0;
    border: 1px solid white;
    border-radius: 3px;
    color: white;
    background: none;
    background-color: transparent;
  }

  .mobile-nav {
    display: flex;
    z-index: 99;
  }
}
</style>
