//Made by Gina Bain
<template>
    <div class="login">
      <h1>Welcome to the Login Page</h1>
    </div>
    <div class="LoginForm">
        <form @submit.prevent="tempLogin">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p v-if="error">{{ error }}</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import React, { useState, useEffect} from 'react';


const email = useState('')
const password = useState('')
const error = useState(null)
const router = useRouter()

//WILL DELETE AND NTEGRATE PROPER AUTH
//DEMO PURPOSES ONLY

const tempLogin  = async () => {
    console.log('submitted')
    try {
      //I need a function that will take the login data and make it usable for the back end!!
      //place it here
      const res = await axios.post('http://localhost:5000/api/authRoutes', {
        email: email, //or whatever variables 
        password: password
      });
      router.push('/Home')
      success.value = 'Login successfull!'
      error.value = ''
    } catch (err) {
      error.value = 'Failed to login.'
      success.value = ''
      console.error(err)
    }
  }

</script>
  
<style scoped>
  .login {
    display: flex;
    height: 100vh;
    text-align: left;
  }
  .LoginForm{
    input[type=text] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    
}
  }
</style>
