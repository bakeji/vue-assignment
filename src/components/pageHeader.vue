<script setup>
import createRepo from './createRepo.vue'
import {ref, provide} from 'vue'
const showModal = ref(false)
function showElement(){
    showModal.value = !showModal.value
}
provide('showModal', showModal)
</script>

<template>
    <header>
        <div class="header">
            <div className="logo">
                    <img src="/github.png" alt="github logo" />
                    <p>Github</p>
            </div>

            <div class="mdl">
                <button class="crt-btn" @click="showElement">Create Repository</button>
                <createRepo v-show="showModal" />
            </div>

            <div class="mdl">
                <Router-link :to="'/pg404'"><button class="crt-btn pg-btn">404</button></Router-link>
            </div>

            <div class="mdl">
                <Router-link :to="'/error'"><button class="crt-btn pg-btn">Error</button></Router-link>
            </div>


        </div>
    </header>
</template>