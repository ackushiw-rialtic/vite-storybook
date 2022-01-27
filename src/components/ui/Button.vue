<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  label: string;
  primary: boolean;
  size: "large" | "small" | "medium";
}>();

const count = ref(0);
</script>

<template>
  <button
    class="
      inline-flex
      items-center
      justify-center
      border border-transparent
      shadow
      font-medium
      rounded-md
    "
    :class="{
      'text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500':
        primary,
      'text-base font-medium text-indigo-600 bg-white hover:bg-indigo-50':
        !primary,
      'px-5 py-3 text-lg': size === 'large',
      'px-4 py-2 text-base': !size || size === 'medium',
      'px-2 py-1 text-xs': size === 'small',
    }"
    @click="count++"
  >
    {{ label }} {{ count }}
  </button>
</template>
