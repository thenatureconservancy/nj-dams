<template>
  <div class="row">
    <div class="col-4">
      <div class="shadow-2" id="map">
        <TheMap />
      </div>
    </div>
    <div class="col-8" style="display: flex; flex-wrap: wrap">
      <div class="row">
        <div class="shadow-2 col-4" id="num-dams"></div>
        <div class="shadow-2 col-4" id="num-miles"></div>
        <div class="shadow-2 col-4" id="countdown"></div>
      </div>
      <div class="row">
        <div class="shadow-2 col-4" id="num-dams"></div>
        <div class="shadow-2 col-4" id="num-miles"></div>
        <div class="shadow-2 col-4" id="countdown"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import TheMap from './TheMap.vue';

onMounted(() => {
  // Initialization code for the dashboard can go here
  let sidePanel = document.getElementById('side-panel');
  sidePanel.style.display = 'none';
});
</script>
<style scoped>
#map {
  width: 100%;
  height: calc(100vh - 32px);
}
#num-dams,
#num-miles,
#countdown {
  margin-top: 16px;
  padding: 16px;
  background-color: #f5f5f5;
  height: 300px;
  width: 300px;
}
</style>
