<script setup>
import { inject,ref,  watch } from 'vue';
import PagePagnation from './pagePagnation.vue';
const allRepos= inject('allRepos');
const filteredRepos = inject('filteredRepos');  
const showElement = inject('showElement');
const data = ref([])

console.log(data)

watch([showElement, allRepos, filteredRepos], ([newShowElement, newAllRepos, newFilteredRepos]) => {
    data.value = newShowElement ? newFilteredRepos : newAllRepos;
}, { immediate: true });


</script>


<template>
    <div class="repo-pg">
      <div class="repos" >
            <div v-for="(repo, i ) in data" :key="i" className="repo1">
                <router-link :to="'/repo-info/' + repo.name "> <h1>{{repo.name}}</h1> </router-link>
               
                <p>Fork Count: {{repo.forks_count}}</p>
                <p>Visibility: {{repo.visibility}}</p>
                <p>Language: {{repo.language}}</p>
                <p>Disabled: {{repo.disabled}}</p>
            
            </div>
    
        </div>

        <PagePagnation />
    </div>
</template>