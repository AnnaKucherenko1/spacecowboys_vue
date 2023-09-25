<template>
  <div class="team-page">
    <div class="page-title">THE TEAM</div>
    <p class="page-content">
      Yep, that's us. Six fine fellows, eager to get on the next adventure.
      <br />Click on the picture to get some more information!
    </p>
    <div class="team-cards-container">
      <div class="team-cards">
        <div
          class="team-card"
          v-for="(member, index) in teamMembers"
          :key="index"
          @click="toggleCard(member)"
          :class="{ flipped: member.flipped }"
        >
          <div
            class="card-inner"
            :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
          >
            <div class="front">
              <img
                class="member-photo"
                :src="member.photo"
                alt="Team Member Photo"
              />
              <div class="member-details">
                <div class="member-name">{{ member.name }}</div>
                <div class="member-position">{{ member.position }}</div>
                <div class="member-age">age: {{ member.age }}</div>
                <div>missions: {{ member.missions }}</div>
              </div>
            </div>
            <!-- <div class="back">
              <div class="quote-content">
                <p>{{ member.name.split(" ")[0] }}'S FAMOUS QUOTE:</p>
                <div class="quote-text">"{{ member.quote }}"</div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="card-buttons">
      <div class="card-buttons">
        <button @click="prevCard">Previous</button>
        <div class="dots">
          <span
            v-for="(member, index) in teamMembers"
            :key="index"
            @click="goToCard(index)"
            :class="{ active: index === currentIndex }"
          ></span>
        </div>
        <button @click="nextCard">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamComponent",
  data() {
    return {
      teamMembers: [
        {
          name: "Dick Kucherenko",
          position: "IMPORTANT PERSON",
          age: 40,
          missions: 1,
          photo: require("@/assets/images/cosmonauts/cosmonaut.jpg"),
          quote: `This is a small step for me, but a big step for, like, a small kid`,
        },
        {
          name: "RICHIE FARHEM",
          position: "ENGINEER",
          age: 48,
          missions: 13,
          photo: require("@/assets/images/cosmonauts/cosmonaut.jpg"),
          quote: `I may be just one person, but I'm one person who can eat a whole pizza.`,
        },
        {
          name: "JOHN SIRACHA",
          position: "GUNSLINGER",
          age: 47,
          missions: 13,
          photo: require("@/assets/images/cosmonauts/cosmonaut (2).jpg"),
          quote: `I want my children to have all the things I couldn't afford. Then I want to move in with them.`,
        },
        {
          name: "BEAT McNAMERA",
          position: "CAPTAIN",
          age: 71,
          missions: 13,
          photo: require("@/assets/images/cosmonauts/cosmonaut (3).jpg"),
          quote: `There is no sunrise so beautiful that it is worth waking me up to see it.`,
        },
        {
          name: "AL SVERINGE",
          position: "CEO",
          age: 76,
          missions: 13,
          photo: require("@/assets/images/cosmonauts/cosmonaut (4).jpg"),
          quote: `Common sense is like deodorant. The people who need it most never use it.`,
        },
      ],
      currentIndex: 0,
      cardWidth: 300,
    };
  },
  methods: {
    toggleCard(member) {
      member.flipped = !member.flipped;
      console.log(member.flipped);
    },
    prevCard() {
      this.currentIndex =
        (this.currentIndex - 1 + this.teamMembers.length) %
        this.teamMembers.length;
    },
    nextCard() {
      this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
    },
    goToCard(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style scoped>
.team-page {
  text-align: center;
  padding: 20px;
  height: 90vh;
  width: 100%;
  top: 0;
  background-image: url("@/assets/images/space/space (11).jpeg");
  background-size: cover;
  color: white;
  box-sizing: border-box;
}

.page-title {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 38px;
  padding: 3% 0% 1%;
}

.page-content {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 20px;
}

.team-cards-container {
  text-align: center;
  display: flex;
  justify-content: center;
}

.team-card.flipped {
  transform: rotateY(180deg);
}

.back {
  transform: rotateY(180deg);
  background: linear-gradient(to right, #333, #000);
  width: 100%;
  height: 150px;
  border-radius: 5px;
}

.team-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  width: 70%;
}

.team-card {
  width: 30%;
  height: 45%;
  color: white;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  perspective: 1000;
  cursor: pointer;
  /* position: relative; */
  /* perspective: 1000px;
  transition: transform 0.5s; */
}
.front {
  background-color: rgba(255, 255, 255, 0.288);
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150px;
  border-radius: 5px;
}
.card-buttons {
  display: none;
}
.team-card.quote {
  background: linear-gradient(to right, #333, #000);
  flex-direction: column;
}

.quote-text {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 18px;
}

.member-photo {
  width: 50%;
  border-radius: 5px;
}

.member-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 50%;
  padding: 5px;
}

.member-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.member-position {
  font-size: 16px;
  margin-bottom: 10px;
}

/* Media query for small screens (phones) */
@media (max-width: 768px) {
  .team-cards-container {
    width: auto;
    height: auto;
    padding: 0;
  }
  .team-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    /* gap: 10px; */
  }
  .front {
    width: 300px;
    height: 200px;
  }
  .card-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .dots {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .dots span {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }

  .dots span.active {
    background-color: #333;
  }

  .card-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .team-page {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
  }
}
</style>
