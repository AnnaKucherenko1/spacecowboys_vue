<template>
  <div class="contact-page">
    <div class="page-title">SAY HELLO</div>
    <form class="form-contact" @submit.prevent="submitForm">
      <div class="form-content">
        <div class="input-wrapper">
          <div class="input-icons">
            <i
              class="fa fa-check-circle-o icon"
              aria-hidden="true"
              v-if="isFirstNameValid"
            ></i>
            <input
              class="input-field"
              type="text"
              placeholder="First Name"
              v-model="firstName"
            />
          </div>
          <div class="input-icons">
            <i
              class="fa fa-check-circle-o icon"
              aria-hidden="true"
              v-if="isLastNameValid"
            ></i>
            <input
              class="input-field"
              type="text"
              placeholder="Last Name"
              v-model="lastName"
            />
          </div>
          <div class="input-icons">
            <i
              class="fa fa-check-circle-o icon"
              aria-hidden="true"
              v-if="isEmailValid"
            ></i>
            <input
              class="input-field"
              type="text"
              placeholder="E-Mail"
              v-model="email"
            />
          </div>
        </div>
        <textarea
          class="message"
          type="text"
          placeholder="Your Message"
          v-model="message"
        >
        </textarea>
      </div>
      <button type="submit" class="btn">SEND THAT MAIL</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  computed: {
    isFirstNameValid() {
      return this.firstName.trim() !== "";
    },
    isLastNameValid() {
      return this.lastName.trim() !== "";
    },
    isEmailValid() {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(this.email);
    },
  },
  methods: {
    submitForm() {
      if (this.isFirstNameValid && this.isLastNameValid) {
        alert("Form submitted successfully!");
      } else {
        alert("Please enter both a first name and a last name.");
      }
    },
  },
};
</script>
<style scoped>
.page-title {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 38px;
  margin: 5% 0% 1%;
}

.contact-page {
  width: 100vw;
  height: 90vh;
  background-color: grey;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
}
.form-contact {
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.form-content {
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  gap: 10%;
  width: 100%;
  height: 50%;
}
.input-icons i {
  position: absolute;
  right: 0;
}
.input-icons {
  position: relative;
  width: 100%;
  height: 15%;
  /* margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column; */
}

.input-wrapper {
  /* position: relative; */
  width: 45%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 10px;
  height: 100%;
  /* background-color: green; */
}

.icon {
  padding: 10px;
  width: 50px;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: end;
  color: rgb(114, 212, 49);
}

.input-field {
  width: 100%;
  padding: 10px;
  text-align: start;
  height: 100%;
  color: rgb(114, 212, 49) !important;
  font-size: medium;
  border-radius: 5px;
  border: 0;
  /* display: flex; */
}
.message {
  width: 45%;
  padding: 10px;
  font-size: medium;
  border-radius: 5px;
  border: 0;
  text-align: left;
  height: 100%;
}
.btn {
  background-color: #ffd700;
  color: black;
  border: none;
  border-radius: 5px;
  height: 12%;
  width: 50%;
  font-size: 18px;
  cursor: pointer;
}
.btn:hover {
  background-color: #dd9804;
}
@media (max-width: 768px) {
  .form-contact {
    width: 100%;
    height: 70%;
    justify-content: space-around;
    gap: 1%;
  }
  .form-content {
    flex-direction: column;
    gap: 10px;
  }
  .message {
    width: 80%;
  }
  .input-wrapper {
    width: 80%;
  }
}
</style>
