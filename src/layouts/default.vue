<template>
  <div id="wrapper" class="wrapper">
    <TheHeader />
    <nuxt />
    <TheFooter />
    <ThePointer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ThePointer from '@/components/base/ThePointer.vue';
import TheHeader from '@/components/base/TheHeader.vue';
import TheFooter from '@/components/base/TheFooter.vue';

@Component({
  components: {
    ThePointer,
    TheHeader,
    TheFooter,
  },
})
export default class extends Vue {}
</script>
