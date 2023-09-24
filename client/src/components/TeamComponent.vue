<template>
  <div class="team-page">
    <div class="page-title">THE TEAM</div>
    <p class="page-content">
      Yep, that's us. Six fine fellows, eager to get on the next adventure.
      <br />Click on the picture to get some more information!
    </p>
    <div class="team-cards-container">
      <div class="team-cards">
        <div class="team-card quote">
          <p>DICK'S FAMOUS QUOTE:</p>
          <div class="quote-text">
            "This is a small step for me,
            <br />
            but a big step for, like,
            <br />a small kid"
          </div>
        </div>
        <div
          class="team-card"
          v-for="(member, index) in teamMembers"
          :key="index"
        >
          <img
            class="member-photo"
            :src="member.photo"
            alt="Team Member Photo"
          />
          <div class="member-details">
            <div class="member-name">{{ member.name }}</div>
            <div class="member-position">{{ member.position }}</div>
            <div class="member-bio">{{ member.bio }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamPage",
  data() {
    return {
      teamMembers: [
        {
          name: "John Doe",
          position: "CEO",
          age: 1,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          photo: require("@/assets/images/cosmonauts/cosmonaut.jpg"),
        },
        {
          name: "Jane Smith",
          position: "Designer",
          age: 1,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          photo: require("@/assets/images/cosmonauts/cosmonaut (2).jpg"),
        },
        {
          name: "Jane Smith",
          position: "Designer",
          age: 1,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          photo: require("@/assets/images/cosmonauts/cosmonaut (3).jpg"),
        },
        {
          name: "Jane Smith",
          position: "Designer",
          age: 1,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          photo: require("@/assets/images/cosmonauts/cosmonaut (4).jpg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.team-page {
  text-align: center;
  padding: 20px;
  height: 90vh;
  width: 100%;
  background-image: url("@/assets/images/space/space (11).jpeg");
  background-size: cover;
  color: white;
}

.page-title {
  text-align: center;
  font-weight: 700;
  font-size: 38px;
  margin: 3% 0% 1%;
}

.page-content {
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 20px;
}

.team-cards-container {
  text-align: center;
  display: flex;
  justify-content: center;
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
  background-color: rgba(255, 255, 255, 0.288);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  color: white;
}
.team-card.quote {
  background: linear-gradient(to right, #333, #000);
  flex-direction: column;
}
.quote-text {
  font-weight: 500;
  font-style: italic;
  font-size: 18px;
}

.member-photo {
  width: 50%;
  border-radius: 5px;
}

.member-details {
  width: 50%;
}

.member-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.member-position {
  font-size: 16px;
  font-style: italic;
  margin-bottom: 10px;
}

.member-bio {
  font-size: 14px;
}

/* Media query for small screens (phones) */
@media (max-width: 768px) {
  .team-card {
    width: 100%; /* 100% width on small screens */
  }
}
</style>
