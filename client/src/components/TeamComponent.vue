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
          class="team-card desktop-only"
          v-for="(member, index) in teamMembers"
          :key="index"
          @click="toggleCard(member)"
          :class="{ flipped: member.flipped }"
        >
          <div class="card-inner">
            <div class="front" :class="{ flipped: member.flipped }">
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
            <div class="back" :class="{ flipped: member.flipped }">
              <div class="quote-content">
                {{ member.name.split(" ")[0] }}'S FAMOUS QUOTE:
                <div class="quote-text">"{{ member.quote }}"</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="team-card mobile-only"
          v-for="(member, index) in teamMembers"
          :key="index"
          @click="toggleCard(member)"
          :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
        >
          <div class="card-inner">
            <div class="front" :class="{ flipped: member.flipped }">
              <img
                class="member-photo"
                :src="member.photo"
                alt="Team Member Photo"
              />
              <div class="member-details">
                <div class="member-name">
                  {{ member.name.split(" ")[0] }}<br />{{
                    member.name.split(" ")[1]
                  }}
                </div>
                <div class="member-position">{{ member.position }}</div>
                <div class="member-age">age: {{ member.age }}</div>
                <div>missions: {{ member.missions }}</div>
              </div>
            </div>
            <div class="back" :class="{ flipped: member.flipped }">
              <div class="quote-content">
                {{ member.name.split(" ")[0] }}'S FAMOUS QUOTE:
                <div class="quote-text">"{{ member.quote }}"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-buttons">
      <div class="card-buttons">
        <button class="btn" @click="prevCard">
          <i class="fa fa-chevron-circle-left circle" aria-hidden="true"></i>
        </button>
        <div class="dots">
          <span
            v-for="(member, index) in teamMembers"
            :key="index"
            @click="goToCard(index)"
            :class="{ active: index === currentIndex }"
          ></span>
        </div>
        <button class="btn" @click="nextCard">
          <i class="fa fa-chevron-circle-right circle" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { teamMembersData } from "../teamMembersData";
export default {
  name: "TeamComponent",
  data() {
    return {
      teamMembers: teamMembersData,
      currentIndex: 0,
      cardWidth: 360,
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

/* visibility: hidden; is a hack because  because i dont seem to get
backface visibility to work */
.front.flipped {
  visibility: hidden;
  transition: transform 0.8s;
}

.team-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  width: 70%;
}

.team-card {
  width: 300px;
  height: 200px;
  color: white;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.5s;
  flex-shrink: 0;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  /* transition: transform 0.8s; */
  /* transform-style: preserve-3d; */
}

.front {
  position: absolute;
  background-color: rgb(59, 59, 59);
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: 100;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: rotateY(0deg);
}

/* cant get backface visibility to work properly, hides both sides :-( */
.back {
  transform: rotateY(180deg);
  background: linear-gradient(to right, #333, #000);
  width: 100%;
  height: 100%;
  border-radius: 5px;
  /* backface-visibility: hidden;
  -webkit-backface-visibility: hidden; */
}
.card-buttons {
  display: none;
}
.team-card.quote {
  flex-direction: column;
}
.quote-content {
  padding: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.384);
}
.quote-text {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 18px;
  padding: 10% 2% 10% 0%;
  color: rgb(255, 255, 255);
}

.member-photo {
  width: 50%;
  height: 100%;
  border-radius: 5px;
}

.member-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
  width: 50%;
  height: 100%;
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

@media screen and (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .team-cards-container {
    width: 100vw;
    height: 225px;
    padding: 0;
  }

  .member-details {
    z-index: 100;
  }
  .team-cards {
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: hidden;
    flex-shrink: 0;
  }

  .card-inner {
    width: 100%;
  }
  .team-card {
    width: 350px;
    flex-shrink: 0;
  }
  .back {
    transform: rotate(0deg);
  }
  .card-buttons {
    display: flex;
    justify-content: space-between;
    width: 350px;
    margin-top: 10px;
  }
  .btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: white;
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
