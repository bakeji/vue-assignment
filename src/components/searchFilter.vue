<script setup>

import { inject } from 'vue';

const search = inject('search')
const filter = inject('filter')
const searchFilter = inject('searchFilter')




</script>


<template>
    
        <div className="search-filter">

            <div className="search">
                <input
                v-model="search"
                @keyup="searchFilter"
                 type="text" 
                 placeholder="search for a repository...." />
                <button><img src="/search.png" alt="search icon" /></button>
            </div>

            <div className="filter">
                <select  v-model="filter"
                @change="searchFilter"
                id="Filter">
                    <option value="">Filter by language</option>
                    <option value="react">react</option>
                    <option value="html">html</option>
                    <option value="javascript">javascript</option>
                    <option value="css">Css</option>
                    <option value="python">python</option>
                    <option value="dart">Dart</option>
                </select>
            </div>
        </div>    
</template>