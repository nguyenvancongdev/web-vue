<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="$router.push('/')">Back Home</a-button>
    </template>
  </a-result>
</template>
 
 <script>
 import { defineComponent } from 'vue';
 export default defineComponent({
   name: 'NotFound',
   methods:{
    goToAboutPage() {
      this.$router.push('/');
      console.log('44444')
    }
   }
 });
 </script>
 