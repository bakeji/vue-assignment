<script setup>
import pageHeader from '../components/pageHeader.vue'
import allRepositories from '../components/allRepositories.vue'
import searchFilter from '../components/searchFilter.vue'
import loading from "../components/loading.vue"
import { inject, provide, ref } from 'vue';


const search = ref('')
const filter = ref('');
const showElement = ref(false)
const filteredRepos = ref(null)
const fetched = inject('fetched')
const allRepos = inject('allRepos')


provide('filteredRepos', filteredRepos)
provide ('showElement', showElement)
provide('search', search)
provide('filter', filter)
provide ('searchFilter', handleSearchAndFilter)  


function handleSearchAndFilter(){
    if(search.value!=="" || filter.value!==""){
        showElement.value = true
        console.log(showElement.value)

        filteredRepos.value = allRepos.value.filter((repos)=>{
            return repos?.name.toLowerCase().includes(search.value.toLowerCase()) 
            && repos?.language.toLowerCase().includes(filter.value.toLowerCase()) 
            
        })

        console.log(allRepos)
        console.log(filteredRepos)
    }
    else{
        showElement.value = false}
}




</script>


<template>
    <pageHeader />
    <searchFilter />
    <div v-if="fetched">
        <allRepositories/>
    </div>

    <div v-else="fetched=== false">
        <loading/>
    </div>
  

    
</template>