//Made by Gina Bain
<template>
    <div class="home">
      <h1>Welcome to the Home Page</h1>
    </div>
    <div class="GoToOnboard">
      <form @submit.prevent="handleNewOnboard">
            <button type="submit">New Onboard</button>
            <p v-if="error">{{ error }}</p>
        </form>
    </div>
  </template>
  
  <script setup>
  //import React, {useState, useEffect} from 'react';
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'

  const router = useRouter()

  const handleNewOnboard = async() => {
    console.log('submitted')
    try {
      router.push('/Onboarding')
    } catch (err) {
      error.value = 'Failed to go to onboard employee.'
      success.value = ''
      console.error(err)
    }
}

  </script>
  
  <style scoped>
  .home {
    padding: 2rem;
    display: flex;
    height: 100vh;
  }
  </style>
  
