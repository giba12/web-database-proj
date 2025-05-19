//Made by Gina Bain
//onboarding view for new employee
<template>
    <div class="onboarding">
      <h1>Welcome to the Onboarding Page</h1>
    </div>
    <div class="OnboardForm">
      <form @submit.prevent="onboardEmployee">
            <input v-model="name" placeholder="Name" required />
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="phone" placeholder="Phone#" required />
            <input v-model="department" placeholder="Department" required />
            <input v-model="jobTitle" placeholder="jobTitle" required />
            <input v-model="role" placeholder="role" required />
            <button type="submit">Onboard</button>
            <p v-if="error" style="color:red">{{ error }}</p>
            <p v-if="success" style="color:green">{{ success }}</p>
        </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'

  const router = useRouter()

  const name = ref('')
  const email = ref('')
  const phone = ref('')
  const department = ref('')
  const jobTitle = ref('')
  const role = ref('')

  const error = ref('')
  const success = ref('')

  const onboardEmployee  = async () => {
    console.log('submitted')
    try {
      const res = await axios.post('http://localhost:5000/api/onboard', {
        name: name.value,
        email: email.value,
        phone: phone.value,
        department: department.value,
        jobTitle: jobTitle.value,
        role: role.value
      })
      success.value = 'Employee onboarded successfully!'
      error.value = ''
      console.log(res.data)
    } catch (err) {
      error.value = 'Failed to onboard employee.'
      success.value = ''
      console.error(err)
    }
  }
  </script>
  
  <style scoped>
  .onboarding {
    padding: 2rem;
    display: flex;
    height: 100vh;
  }
  .OnboardForm{
    input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}
  }
  </style>
