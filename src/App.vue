<template>
  <body class="bg-gray-950 flex items-center justify-center w-screen h-screen text-light bg-gradient-to-br from-gradient1 via-gradient2 to-gradient3 animate-gradient flex-col p-10">
    <header class="flex items-center justify-center w-11/12 md:w-3/5 lg:w-1/3">
      <input type="text" v-model="username" @keyup.enter="getData()" placeholder="GitHub username" autofocus class="bg-dark h-2/12 w-full rounded-xl p-4">
      <button @click="getData()" class="w-1/12 aspect-square text-5xl flex items-center justify-center m-4">🔍︎</button>
    </header>
    <main v-if="userData" class=" w-11/12 md:w-3/4 lg:w-1/2 bg-dark flex flex-col p-5 rounded-2xl">
      <div class="flex flex-col md:flex-row">
        <img :src="userData.avatar_url" class="rounded-full w-1/4 aspect-square mr-5 mb-5  "/>
        <div class="flex flex-col gap-2.5">
          <h1 class="font-bold text-3xl text-color"> {{ userData.name }} </h1>
          <p> {{ userData.bio }} </p>
          <div class="flex flex-col md:flex-row md:gap-2">
            <p><span class="text-color font-bold"> {{ userData.followers }} </span> followers <span class="invisible md:visible">|</span></p>
            <p><span class="text-color font-bold"> {{ userData.following }} </span> following <span class="invisible md:visible">|</span></p>
            <p><span class="text-color font-bold"> {{ userData.public_repos }} </span> repositories  <span class="invisible md:visible">|</span></p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-5 mt-5">
        <div v-for="repo in reposData && reposData.slice(0, 5)" class="bg-color p-2 rounded-lg"><a :href="repo.html_url"> {{ repo.name }} </a></div>
      </div>
    </main>
  </body>
</template>

<script setup>
  import { ref } from 'vue';

  const APIURL = 'https://api.github.com/users/' // GitHub API
  let username = "", userData = ref(), reposData = ref();

  // Function to fetch user data and their repositories
  const getData = async () => {
     // Fetching user data
    const response1 = await fetch(APIURL + username); userData.value =  await response1.json();
    // Fetching user repositories
    const response2 = await fetch(APIURL + username + '/repos?sort=created'); reposData.value = await response2.json();
  }
</script>