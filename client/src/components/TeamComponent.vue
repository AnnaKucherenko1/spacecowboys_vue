<template>
  <div class="team-page">
    <div class="page-title">Our Team</div>
    <div class="page-content">
      <p>Meet our awesome team members below:</p>
    </div>
    <div class="team-cards-container">
      <div class="team-cards">
        <!-- Team Member Cards -->
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
          photo: require("@/assets/images/rocket.png"),
        },
        {
          name: "Jane Smith",
          position: "Designer",
          age: 1,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          photo: require("@/assets/images/rocket.png"),
        },
        {
          name: "Jane Smith",
          position: "Designer",
          age: 1,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          photo: require("@/assets/images/rocket.png"),
        },
        {
          name: "Jane Smith",
          position: "Designer",
          age: 1,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          photo: require("@/assets/images/rocket.png"),
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
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.page-content {
  font-size: 16px;
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
  justify-content: space-between;
}

.team-card {
  width: calc(50% - 10px); /* 50% width with 10px gap */
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: left;
  margin-bottom: 20px;
}

.member-photo {
  width: 100%;
  border-radius: 5px;
}

.member-details {
  width: 100%;
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
