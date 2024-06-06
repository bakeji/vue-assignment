<script setup>
import {inject, ref} from 'vue'

const totalPages = inject('totalPages')
const currentPage=inject('currentPage')



function nextBtn(){
        if(currentPage.value <totalPages.value){
            currentPage.value++;          
}
console.log(currentPage)
console.log(totalPages)

        
    }

    function prevBtn(){
        if(currentPage.value>1){
            currentPage.value--
        }
        console.log("prev")
    }



</script>


<template>
     <div class="pag">
            <button  @click="prevBtn" class="prev-btn">Prev</button>
            
            <button @click="nextBtn" class="nxt-btn">Next</button>
        </div>
</template>

