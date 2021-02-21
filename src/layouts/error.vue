<template>
  <div id="wrapper" class="wrapper">
    <TheHeader />
    <div class="wrapper-page">
      <h1>
        <span>{{ message.main }}</span>
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';

interface ErrorProp {
  message: string;
  statusCode: number;
}

export default defineComponent({
  props: {
    error: {
      type: Object as PropType<ErrorProp>,
      required: true
    }
  },
  setup: (props) => {
    const message = computed(() => {
      switch (props.error.statusCode) {
        case 404:
          return {
            main: 'Page Can Not Be Found!'
          };
        default:
          return {
            main: 'An Error Has Occurred!'
          };
      }
    });

    return {
      message
    };
  }
});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  &__image {
    margin-bottom: 20px;
  }
  &__title {
    font-size: 2.4rem;
    margin-bottom: 16px;
  }
  &__text {
    margin-bottom: 24px;
  }
}
</style>
