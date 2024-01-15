<template>
     <a-layout>
      <a-layout-header :style="headerStyle">Header</a-layout-header>
      <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
      <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
    </a-layout>
 </template>
 
 <script>
 import { defineComponent } from 'vue';
//  import MenuUser from '@/components/user/MenuUser';
 
 export default defineComponent({
   name: 'UserHello',
   components: {
    //  MenuUser,
   },
 });
 </script>
<style scoped>
.headerStyle {
  
}
</style>
 