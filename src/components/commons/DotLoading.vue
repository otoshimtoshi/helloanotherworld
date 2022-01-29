<template>
  <div class="loading">
    <span class="horizontal-line" />
    <span class="vertical-line" />
    <div class="box">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  setup() {}
})
</script>
<style lang="scss" scoped>
.loading {
  position: fixed;
  width: calc(100% - 40px);
  height: calc(100% - 42px);
  margin: 20px;
  box-sizing: border-box;
  background-color: $light0;
  z-index: 200;
}
.horizontal-line {
  z-index: 16;
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 0;
    width: 0;
    transform: translateX(100%);
    border-bottom: 2px solid $light-font-color;
    animation: horizontal_anim 1s linear forwards;
  }
  &::after {
    content: '';
    position: absolute;
    left: 100%;
    bottom: -2px;
    width: 0;
    transform: translateX(-100%);
    border-bottom: 2px solid $light-font-color;
    animation: horizontal_anim 1s linear forwards;
  }
}
.vertical-line {
  z-index: 16;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    transform: translateY(0);
    border-left: 2px solid $light-font-color;
    animation: vertical_anim 1s linear forwards;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 0;
    transform: translateY(0);
    border-left: 2px solid $light-font-color;
    animation: vertical_anim 1s linear forwards;
  }
}
.box {
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -14px 0 0 -42px;
  padding: 10px;
}
.loading-dot {
  float: left;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  background: $light-font-color;
  border-radius: 50%;
  opacity: 0;
  animation: loadingfade 1s infinite;
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
}
@keyframes horizontal_anim {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes vertical_anim {
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
}
@keyframes loadingfade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.yellow-mode {
  .layout-default {
    .horizontal-line {
      &::before {
        border-bottom: 2px solid $yellow-font-color;
      }
      &::after {
        border-bottom: 2px solid $yellow-font-color;
      }
    }
    .vertical-line {
      &::before {
        border-left: 2px solid $yellow-font-color;
      }
      &::after {
        border-left: 2px solid $yellow-font-color;
      }
    }
    .loading-dot {
      background: $yellow-font-color;
    }
  }
}
.red-mode {
  .layout-default {
    .horizontal-line {
      &::before {
        border-bottom: 2px solid $red-font-color;
      }
      &::after {
        border-bottom: 2px solid $red-font-color;
      }
    }
    .vertical-line {
      &::before {
        border-left: 2px solid $red-font-color;
      }
      &::after {
        border-left: 2px solid $red-font-color;
      }
    }
    .loading-dot {
      background: $red-font-color;
    }
  }
}
.blue-mode {
  .layout-default {
    .horizontal-line {
      &::before {
        border-bottom: 2px solid $blue-font-color;
      }
      &::after {
        border-bottom: 2px solid $blue-font-color;
      }
    }
    .vertical-line {
      &::before {
        border-left: 2px solid $blue-font-color;
      }
      &::after {
        border-left: 2px solid $blue-font-color;
      }
    }
    .loading-dot {
      background: $blue-font-color;
    }
  }
}
.green-mode {
  .layout-default {
    .horizontal-line {
      &::before {
        border-bottom: 2px solid $green-font-color;
      }
      &::after {
        border-bottom: 2px solid $green-font-color;
      }
    }
    .vertical-line {
      &::before {
        border-left: 2px solid $green-font-color;
      }
      &::after {
        border-left: 2px solid $green-font-color;
      }
    }
    .loading-dot {
      background: $green-font-color;
    }
  }
}
</style>
