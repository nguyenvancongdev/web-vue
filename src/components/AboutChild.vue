<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ number }}</p>
    <button @click="emitGreeting">Emit Greeting</button>
    <button @click="emitNotification">Emit Notification</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define props to receive data from the parent
const props = defineProps({
  message: String,
  number: Number
});

// Define the events that can be emitted
const emit = defineEmits(['greet', 'notify']);

// Function to emit the 'greet' event
const emitGreeting = () => {
  emit('greet', 'Hello from Child!');
};

// Function to emit the 'notify' event
const emitNotification = () => {
  emit('notify', 'Notification from Child!');
};
</script>