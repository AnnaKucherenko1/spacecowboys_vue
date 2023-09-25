<template>
  <div id="contact" class="contact-page">
    <div class="page-title">SAY HELLO</div>
    <div>
      <div class="page-text">
        Got some questions about us? <br class="mobile-break" />Wanna do
        business with us?
      </div>
      <div class="page-text">
        Or do you just want to send us your latest
        <br class="mobile-break" />cat-content - there you go:
      </div>
    </div>
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
      <button type="submit" class="btn">
        <bold> SEND THAT MAIL </bold>
      </button>
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
  font-weight: 700;
  font-size: 38px;
  margin: 5% 0% 1%;
}

.page-text {
  text-align: center;
  font-weight: 350;
  font-size: 18px;
}

.contact-page {
  width: 100vw;
  height: 90vh;
  background-color: grey;
  display: flex;
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
  margin-top: 5%;
}

.form-content {
  display: flex;
  flex-direction: row;
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
  height: 25%;
}

.input-wrapper {
  width: 45%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 10px;
  height: 100%;
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
  box-sizing: border-box;
  text-align: start;
  height: 100%;
  color: rgb(114, 212, 49) !important;
  font-size: medium;
  border-radius: 5px;
  border: 0;
}

.message {
  width: 45%;
  padding: 10px;
  box-sizing: border-box;
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
  height: 17%;
  width: 40%;
  font-size: 18px;
  cursor: pointer;
}
.btn:hover {
  background-color: #dd9804;
}

@media screen and (min-width: 768px) {
  .mobile-break {
    display: none;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 25px;
  }

  .page-text {
    font-size: 15px;
  }

  .input-wrapper {
    width: 100%;
    height: 80%;
  }

  .form-contact {
    width: 100%;
    height: 80%;
    justify-content: space-around;
    align-content: center;
    gap: 1%;
  }
  .form-content {
    flex-direction: column;
    align-items: center;
    height: 80%;
  }
  .message {
    width: 80%;
    height: 50%;
  }
  .input-wrapper {
    width: 80%;
  }

  .btn {
    height: 8%;
    width: 50%;
    margin-bottom: 5%;
  }
}
</style>
