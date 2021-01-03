<template>
  <a :class="customclass" href="mailto:info@helloanotherworld.com">
    <svg width="24" height="18" viewBox="0 0 100 75">
      <path d="M100 62.5c0 2.2-.6 4.2-1.6 6L66.8 33.2 98.1 5.9c1.2 1.9 1.9 4.2 1.9 6.6v50zM50 39.6l43.5-38c-1.8-1-3.8-1.6-6-1.6h-75c-2.2 0-4.2.6-6 1.6l43.5 38zm12.1-2.3L52 46.1c-.6.5-1.3.8-2.1.8-.7 0-1.5-.3-2.1-.8l-10.1-8.8-32 35.8c1.9 1.2 4.2 1.9 6.6 1.9h75c2.4 0 4.7-.7 6.6-1.9L62.1 37.3zM1.9 5.9C.7 7.8 0 10.1 0 12.5v50c0 2.2.6 4.2 1.6 6l31.6-35.3L1.9 5.9z" />
    </svg>
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  props: {
    customclass: {
      type: String,
      default:''
    },
  },
});
</script>
