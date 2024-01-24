<template>
   <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
  <div @click="backtoHome">
    backtoHome
  </div>
 </template>
 <!-- https://antdv.com/components/form -->
 <script>
 import { defineComponent } from 'vue';
 
 export default defineComponent({
   name: 'LoginAdmin',
   data(){
    return {
      username: '',
      password: '',
      formState: {},
    }
   },
   methods: {
    backtoHome(){
        this.$router.push("/")
    },
    backtologin(){
        this.$router.push({name: 'home'})
    },

   }
 });
 </script>
 