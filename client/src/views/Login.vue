
<template>
    <div class="login">
      <h1>Welcome to the Login Page</h1>
    </div>
    <div class="LoginForm">
        <form @submit.prevent="handleLogin">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p v-if="error">{{ error }}</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
//import router from './router/index.js';
//import axios from 'axios'

const email = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()

//WILL DELETE AND NTEGRATE PROPER AUTH
//DEMO PURPOSES ONLY
const dummyUser = {
  email: 'user@email.com',
  password: 'password123'
}

const handleLogin = async() => {
    try {
        if (email.value === dummyUser.email && password.value === dummyUser.password) {
        router.push('/Home')
    }else{error.value = 'Login Failed. Inval Cred'}
    }catch(err){
        error.value = 'Unexpected err'
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
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}
  }
</style>
  