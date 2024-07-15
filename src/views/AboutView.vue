<template>
  <div class="about">
    <h1>This is an about page test ffff</h1>
    <div>

      <p>Count: {{ counterStore.count }}</p>
      <!-- <p>Double Count: {{ doubleCount }}</p> -->
    </div>
    <div>
     <button @click="increment">updat cout</button>
    </div>
       <p>Count: {{ countss }}</p>
      <button @click="increments">Increment</button>
     <AboutChild
      :message="parentMessage"
      :number="parentNumber"
      @greet="handleGreeting"
      @notify="handleNotification"
    />
    <p>Greeeeeting: {{ greetingMessage }}</p>
    <p>Notifieeecation: {{ notificationMessage }}</p>

     <v-btn color="primary">Primary Button</v-btn>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, computed, watchEffect   } from 'vue'

import AboutChild from '@/components/AboutChild.vue';

const counterStore = useCounterStore()

const increment = () => {counterStore.increment()}

//
const countss = ref(0)
const doubleCountw = computed(() => countss.value * 2)
const increments = () => {
  // countss.value++
}
function decrements() {
  countss.value--
}
watchEffect(() => {
  console.log(`Count is now: ${countss.value}`)
})


//

const greetingMessage = ref('');
const notificationMessage = ref('');
const parentMessage = ref('Hello from Parent!');
const parentNumber = ref(42);
const handleGreeting = (message) => {
  greetingMessage.value = message;
};
const handleNotification = (message) => {
  notificationMessage.value = message;
};


</script>
