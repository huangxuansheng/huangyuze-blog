<template>
  <div class="demo-container">
    <div>
    </div>
      <!-- <iframe
        class="iframe_tt"
        src="https://blog.numb.run/#/welcome"
        frameborder="0"
      ></iframe> -->
  </div>
</template>

<script setup lang="ts">
import { useInfo } from "./demo";

const { name } = useInfo();
</script>

<style la>
.demo-container {
  width: 100%;
}
.iframe_tt {
  width: 100%;
  height: 900px;
}
</style>
