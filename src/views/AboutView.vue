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
   <div class="tw-relative tw-overflow-x-auto">
    <table class="tw-w-full tw-text-sm tw-text-left rtl:text-right tw-text-gray-500 dark:text-gray-400">
        <thead class="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="tw-px-6 tw-py-3">
                    Product name
                </th>
                <th scope="col" class="tw-px-6 tw-py-3">
                    Color
                </th>
                <th scope="col" class="tw-px-6 tw-py-3">
                    Category
                </th>
                <th scope="col" class="tw-px-6 tw-py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="tw-bg-white tw-border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="tw-px-6 tw-py-4">
                    Silver
                </td>
                <td class="tw-px-6 tw-py-4">
                    Laptop
                </td>
                <td class="tw-px-6 tw-py-4">
                    $2999
                </td>
            </tr>
            <tr class="tw-bg-white tw-border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="tw-px-6 tw-py-4">
                    White
                </td>
                <td class="tw-px-6 tw-py-4">
                    Laptop PC
                </td>
                <td class="tw-px-6 tw-py-4">
                    $1999
                </td>
            </tr>
            <tr class="tw-bg-white dark:bg-gray-800">
                <th scope="row" class="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="tw-px-6 tw-py-4">
                    Black
                </td>
                <td class="tw-px-6 tw-py-4">
                    Accessories
                </td>
                <td class="tw-px-6 tw-py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>
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
