<script setup>
import { ref } from "vue";

const show = ref(false);
</script>

<template>
  <!-- this should probably eventually be refactored into a new file? -->
  <div class="maintenanceMsg" draggable="true">
    <h1 @mouseover="show = true">
      <slot name="heading"></slot>
      <!-- //the maintenance message should be dropped in here somehow  -->
      <slot></slot>
    </h1>
  </div>
  <div class="bounceIn">
    <Transition name="bounce">
      <p v-if="show">In the meantime you can contact me at @devushkabeam</p>
    </Transition>
  </div>
</template>

<style scoped>
.maintenanceMsg {
  height: 90vh;
  vertical-align: middle;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.bounceIn {
  z-index: 1;
  display: flex;
  background-color: yellow;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-family: Codystar;
  font-size: 26px;
  font-weight: 800;
  color: blue;
  position: absolute;
}

h1:hover {
  cursor: cell;
  background-color: yellow;
  width: fit-content;
}

p {
  font-family: Assistant;
  background-color: yellow;
  font-size: 16px;
  font-weight: 100;
  color: blue;
  position: absolute;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
