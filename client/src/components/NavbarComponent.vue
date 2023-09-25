<template>
  <nav id="nav" :class="{ sticky: isStickyActive }">
    <div class="icon">
      <svg>
        <image href="/rocket_launch.svg" />
      </svg>
    </div>
    <div class="desktop-nav">
      <a
        @click="scrollToSection('facts')"
        :class="{ active: activeSection === 'facts' }"
        >ABOUT US</a
      >
      <a
        @click="scrollToSection('team')"
        :class="{ active: activeSection === 'team' }"
        >THE TEAM</a
      >
      <a
        @click="scrollToSection('photos')"
        :class="{ active: activeSection === 'photos' }"
        >IMPRESSIONS</a
      >
      <a
        @click="scrollToSection('contact')"
        :class="{ active: activeSection === 'contact' }"
        >CONTACT</a
      >
    </div>

    <div class="mobile-nav">
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <a
          @click="scrollToSection('facts')"
          :class="{ active: activeSection === 'facts' }"
          >ABOUT US</a
        >
        <a
          @click="scrollToSection('team')"
          :class="{ active: activeSection === 'team' }"
          >THE TEAM</a
        >
        <a
          @click="scrollToSection('photos')"
          :class="{ active: activeSection === 'photos' }"
          >IMPRESSIONS</a
        >
        <a
          @click="scrollToSection('contact')"
          :class="{ active: activeSection === 'contact' }"
          >CONTACT</a
        >
      </div>
      <button @click="toggleMobileMenu" class="mobile-button">
        {{ isMobileMenuOpen ? "x close" : "Menu" }}
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
      activeSection: null,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 768;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      let navbar = window.innerHeight * 0.1;
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - navbar;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },
    updateActiveSection() {
      const scrollY = window.scrollY;
      const sections = ["spacecowboy", "facts", "team", "photos", "contact"];
      const sectionPositions = sections.map((section) => ({
        id: section,
        offsetTop:
          document.getElementById(section).offsetTop -
          (10 * window.innerHeight) / 100,
      }));
      let activeSection = "";
      for (const { id, offsetTop } of sectionPositions) {
        if (scrollY >= offsetTop) {
          activeSection = id;
        }
      }
      this.activeSection = activeSection;
    },
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
    window.addEventListener("scroll", this.updateActiveSection);
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkScreenSize);
    window.removeEventListener("scroll", this.updateActiveSection);
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
  z-index: 199;
}

.desktop-nav {
  display: flex;
  width: 60%;
  justify-content: center;
  color: white;
  gap: 20px;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
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
  color: #ffd700;
  cursor: pointer;
}
.desktop-nav a.active {
  color: #ffd700;
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
    width: 90vw;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-button {
    width: 60px;
    height: 30px;
    margin-right: 20px;
    border: 1px solid white;
    border-radius: 3px;
    color: white;
    background: none;
    background-color: transparent;
    z-index: 199;
  }

  .mobile-nav {
    display: flex;
    z-index: 99;
  }
}
</style>
