<template>
    <Form>
    <Form.Item label="Username">
      <Input v-model="username" />
    </Form.Item>
    <Form.Item label="Password">
      <Input type="password" v-model="password" />
    </Form.Item>
    <Form.Item>
      <Button type="primary" @click="login">Login</Button>
    </Form.Item>
  </Form>
  <div></div>
 </template>
 
 <script>
 import { defineComponent } from 'vue';
 
 export default defineComponent({
   name: 'LoginAdmin',
   data(){
    return {
      username: '',
      password: ''
    }
   },
   methods: {
    backtoHome(){
        this.$router.push({name: 'home'})
    },
    backtologin(){
        this.$router.push({name: 'home'})
    },

   }
 });
 </script>
 