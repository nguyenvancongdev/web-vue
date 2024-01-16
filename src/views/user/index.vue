<template>
     <a-layout>
      <a-layout-header class="headerStyle">Header</a-layout-header>
        <a-layout>
          <a-layout-sider>Sider</a-layout-sider>
          <a-layout-content>Content</a-layout-content>
        </a-layout>
      <a-layout-footer class="footerStyle">
        <div>Sản phẩm được tạo bởi: cocode.pro, liên hệ khi có sự cố: 0988755277</div>
      </a-layout-footer>
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
  background: linear-gradient(315deg,#5c33c8,#9238d4);
}
.footerStyle {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  /* color: white; */
  text-align: center;
}
</style>
 