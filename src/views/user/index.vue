<template>
     <a-layout class="container">
      <a-layout-header class="headerStyle">
        <div class="routing">trang chu</div>
        <router-link :to="{ name: 'login' }">Dang nhap</router-link>
        <router-link :to="{ name: 'post' }">Bai viet</router-link>
        <router-link :to="{ name: 'sanpham' }">Bảng sản phẩm</router-link>
        <router-link :to="{ name: 'thuchi' }">Thu chi</router-link>

      </a-layout-header>
      <a-layout class="main">
          <a-layout-sider class="siderStyle">Sider</a-layout-sider>
          <a-layout-content>
            <router-view></router-view>
          </a-layout-content>
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
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  gap: 20px;
}
.siderStyle {
  background: linear-gradient(315deg,#564949b3,#65b014); 
}
.footerStyle {
 
  width: 100%;
  /* color: white; */
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
}
.container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.main {
  flex-grow: 1;
  flex-shrink: 1;
  height: 1000px;
}
</style>
 