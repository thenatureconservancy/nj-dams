<template>
  <div :class="{ 'app-root--map': !shouldApplyMargin }" class="app-root">
    <TheHeader></TheHeader>
    <div
      :class="{
        'q-mx-xl q-my-lg': isHomeRoute,
        'q-my-lg': shouldApplyMargin && !isHomeRoute,
        'app-content--map': !shouldApplyMargin,
      }"
      :style="
        shouldApplyMargin && !isHomeRoute
          ? 'margin-left: 300px; margin-right: 300px;'
          : ''
      "
      class="app-content"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';
import { useMapStore } from './store/index';
import '@arcgis/map-components/components/arcgis-map';
import '@arcgis/map-components/components/arcgis-legend';
import '@arcgis/map-components/components/arcgis-scale-bar';
import '@arcgis/map-components/components/arcgis-zoom';
import '@arcgis/map-components/components/arcgis-expand';
import '@arcgis/map-components/components/arcgis-basemap-toggle';
import '@arcgis/map-components/components/arcgis-basemap-gallery';
import '@arcgis/map-components/components/arcgis-home';
import '@arcgis/map-components/components/arcgis-layer-list';
import TheHeader from './components/TheHeader.vue';
import TheMap from './components/TheMap.vue';
import TheLeftPanel from './components/TheLeftPanel.vue';
import Panel from './components/UI/Panel.vue';

const ms = useMapStore();
const $q = useQuasar();
const route = useRoute();
let smallScreen = computed(() => $q.screen.lt.sm);
const shouldApplyMargin = computed(() => route.name !== 'map');
const isHomeRoute = computed(() => route.name === 'home');
</script>

<style scoped>
.app-root {
  display: flex;
  flex-direction: column;
}

.app-root--map {
  height: 100vh;
  overflow: hidden;
}

.app-content {
  flex: 1;
  min-height: 0;
}

.app-content--map {
  overflow: hidden;
}

@media screen and (max-width: 700px) {
  .esri-view-width-xsmall .esri-expand--auto .esri-expand__mask--expanded {
    display: none;
  }
  .esri-view-width-xsmall .esri-expand--auto .esri-expand__container--expanded {
    top: 100px;
  }
  .esri-view-width-xsmall
    .esri-expand--auto
    .esri-expand__container--expanded
    .esri-expand__panel {
    padding: 2px;
  }
}

/* Slide transition */
/* .slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
} */
/* .map-panel-wrapper {
  display: grid;
  height: 100%;
  width: 100%;
  position: relative;
}
.map-panel-wrapper > * {
  height: 100%;
}
.map-panel-wrapper > TheMap {
  flex: 1;
} */
</style>
