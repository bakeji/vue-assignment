<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.go(-1);
  console.log('go back');
}

</script>
<template>
     <div className="bck-btn">
            <button @click="goBack" ><img src="/arrow-left2.png" alt="back arrow" />Back</button>
        </div>
</template>