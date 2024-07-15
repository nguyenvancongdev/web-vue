<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ number }}</p>
    <button @click="emitGreeting">Emit Greeting</button>
    <button @click="emitNotification">Emit Notification</button>
    <a-button>Add</a-button>
    <button type="button" class="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-me-2 tw-mb-2 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 focus:tw-outline-none dark:focus:tw-ring-blue-800">Default</button>
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