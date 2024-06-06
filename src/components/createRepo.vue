<script setup>
import { Octokit } from "@octokit/rest";
import{ref, inject} from 'vue'
const showModal= inject('showModal')
const repoName = ref('')
const newRepo = ref('')
// const loading = ref(false)


        // api authentication
    const apiKey = import.meta.env.VITE_API_KEY;
    const octokit = new Octokit({
        auth: apiKey
        })

        // create a new repo function
async function createRepo(){
    try {
        const response = await octokit.repos.createForAuthenticatedUser({
          name: repoName.value,
          description: "This is a new repository created using Octokit",
          private: false,
        });
  
        console.log("Repository created:", response.data);
        newRepo.value = response.data.clone_url
      } catch (error) {
        console.error("Error creating repository:", error);
        alert(error.message)
        
      }
    
   
      
    
}

function createRepoBtn(){
    createRepo()
    console.log(repoName)
 if(repoName.value !== '' && newRepo.value ===''){
        loading.value = true
    }

}





</script>




<template>
    <div class="crtmdl">
        <div class="head-se">
            <h1> Create Repository</h1>
            <button @click ="showModal =false"><img src="/close-btn.svg" /></button>
        </div>

        <div class="mdl-body">
           <label for="creat-mdl" >Repository Name</label>
            <input   v-model="repoName" id="creat-mdl" type="text">
        </div>
        <a :href="newRepo" class="np" v-if="repoName!=='' && newRepo !==''">New Repo link</a>
        <div class="clx-btn">
            <button @click ="showModal = false" class="mdl-rd">Cancel</button>
            <button @click="createRepoBtn"  class="mdl-btn">Create</button>
        </div>
    </div>
</template>