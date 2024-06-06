<script setup>
import homePage from './pages/homePage.vue'
import repositoryInfo from './pages/repositoryInfo.vue'
import {onMounted, provide, ref, watch} from 'vue'

const allRepos = ref(null)
const currentPage = ref(1)
const totalPages = ref(1)
const fetched = ref(false)

provide('allRepos', allRepos)
provide('currentPage', currentPage);
provide('totalPages', totalPages);
provide('fetched', fetched)


async function fetchData(){
    const apiKey= import.meta.env.VITE_API_KEY;
    try{
      const response = await fetch(`https://api.github.com/users/bakeji/repos?per_page=9&page=${currentPage.value }`,{
        method: "GET",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `token ${apiKey}`
        },
         })
    if(!response.ok){
      throw new Error("Something went wrong")
    }

    const repositories = await response.json();

    // get link info for pagination
    const link = response.headers.get("link");
   
    let ttlPages = 0
    
      const pages = link?.split(",");
      pages?.forEach(link =>   {
        const match = link.includes('rel="last"') && link.match(/&page=(\d+)/);
        
        if (match) {
          const pageNumber = parseInt(match[1]);
          ttlPages = pageNumber;
          console.log(pageNumber)
          
          
        }

      })
     
      // pass the response to the ref
    
    
    totalPages.value = ttlPages; 
    allRepos.value =repositories;
    fetched.value = true

  } catch (error){
    console.log(error);
  }
}



onMounted(()=>{
    fetchData()
});

watch(currentPage, (newVal, oldVal)=>{
    if(newVal !== oldVal){
        fetchData()
    }
})


console.log(currentPage.value)

</script>


<template>
    <router-view></router-view>
</template>


