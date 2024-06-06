<script setup lang="ts">
import PageHeader from '../components/pageHeader.vue';
</script>

<template>
    <div className="nf">
         <PageHeader/>
             <div class="div">

            <img className="nf-img" src="/404-error.png" alt="" />
           <Router-link :to="'/'"> <button className="btn-nf">Homepage</button> </Router-link>
            </div>

    </div>
</template>