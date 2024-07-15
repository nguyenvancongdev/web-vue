<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>

      <p>Count: {{ count }}</p>
      <!-- <p>Double Count: {{ doubleCount }}</p> -->
    </div>
    <div>
     <button @click="increment">updat cout</button>
    </div>
       <p>Count: {{ countss }}</p>
      <button @click="increments">Increment</button>
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

const counterStore = useCounterStore()

const count = counterStore.count
// const doubleCount = counterStore.doubleCount
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

</script>
