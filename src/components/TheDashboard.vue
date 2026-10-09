<template>
  <div class="dashboard">
    <div class="dashboard__map shadow-2">
      <arcgis-map
        id="map"
        item-id="2c0d5552f5d64efc9fe849366723d3af"
        @arcgisViewReadyChange="onReady"
      >
        <arcgis-home position="top-right"></arcgis-home>
        <arcgis-zoom position="top-right"></arcgis-zoom>
        <arcgis-scale-bar
          position="bottom-right"
          unit="dual"
        ></arcgis-scale-bar>
        <arcgis-expand close-on-esc position="top-right" mode="floating">
          <arcgis-basemap-gallery position="top-right"></arcgis-basemap-gallery>
        </arcgis-expand>
        <!-- <arcgis-expand close-on-esc position="top-right" mode="floating">
          <arcgis-layer-list
            position="top-right"
            view="map"
            selection-mode="multiple"
          ></arcgis-layer-list>
        </arcgis-expand> -->
      </arcgis-map>
    </div>
    <div class="dashboard__panels">
      <div class="shadow-2 panel" id="num-dams"></div>
      <div class="shadow-2 panel" id="num-miles"></div>
      <div class="shadow-2 panel" id="countdown"></div>
      <div class="shadow-2 panel" id="chart-1"></div>
      <div class="shadow-2 panel" id="chart-2"></div>
      <div class="shadow-2 panel" id="chart-3"></div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 12px;
  height: 100%;
  box-sizing: border-box;
}

.dashboard__map {
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
}

.dashboard__panels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
  height: 100%;
}

.panel {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 16px;
}
</style>
