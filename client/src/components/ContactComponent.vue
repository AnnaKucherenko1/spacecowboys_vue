<template>
  <div class="contact-form">
    <h2>SAY HELLO</h2>
    <p>Some text here...</p>
    <form @submit.prevent="submitForm" id="form">
      <div class="wrapper">
        <div class="columns">
          <div class="form-group" :class="{ success: firstNameValid }">
            <input
              v-model="firstName"
              type="text"
              placeholder="First Name"
              @input="checkName('firstName')"
              required
            />
            <div class="form-group" :class="{ success: lastNameValid }">
              <input
                v-model="lastName"
                type="text"
                placeholder="Last Name"
                @input="checkName('lastName')"
                required
              />
            </div>
            <div
              class="form-group"
              :class="{ error: !emailValid, success: emailValid }"
            >
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                @input="checkEmail"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <textarea v-model="message" placeholder="Message" required></textarea>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      emailValid: false,
      firstNameValid: false,
      lastNameValid: false,
    };
  },
  methods: {
    checkEmail() {
      this.emailValid = this.validateEmail(this.email);
    },
    checkName(name) {
      const value = this[name];
      this[`${name}Valid`] = value.trim().length > 0;
    },
    submitForm() {
      // Perform form submission logic here
      // You can check if emailValid, firstNameValid, and lastNameValid are true before submission
      if (!this.emailValid || !this.firstNameValid || !this.lastNameValid) {
        return;
      }

      // Reset form fields if needed
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.message = "";
      this.emailValid = false;
      this.firstNameValid = false;
      this.lastNameValid = false;
    },
    validateEmail(email) {
      // Simple email validation
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      return emailRegex.test(email);
    },
  },
};
</script>

<style scoped>
.contact-form {
  background-color: rgb(148, 148, 148);
  height: 85vh;
  width: 100vw;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: red;
}
#form {
  width: 60%;
}
.columns {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-group {
  margin-bottom: 20px;
}

input[type="text"],
input[type="email"],
textarea {
  /* width: 100%; */
  padding: 10px;
  border: 1px solid #ccc;
  transition: border-color 0.3s;
}

.error {
  border-color: red !important;
}

.success {
  border-color: green !important;
}

input[type="text"].success:focus,
input[type="email"].success:focus {
  border-color: green !important;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
