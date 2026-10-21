import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMapStore = defineStore('mapStore', () => {
  // MODELS
  const splitterModel = ref(25);
  const mobileSplitterModel = ref(35);
  const leftPanelInfo = ref(false);
  const rightPanelVis = ref(true);
  const leftDrawer = ref(true);
  const envJusticeTract = ref(false);
  const envJusticeTribe = ref(false);
  const selectedCounty = ref('');
  const selectedCongressionalDistrict = ref('');
  const selectedOwner = ref('');
  const selectedHazardClassification = ref('');
  const selectedCondition = ref('');
  const mapDashboardOption = ref('map');
  const openContact = ref(false);
  const openDamFactsheet = ref(false);

  // FUNCTIONS
  function getLayersInfo() {
    // get and assign layers
    const webMap = document.querySelector('arcgis-map').view.map;
    console.log(webMap);
  }

  return {
    splitterModel,
    mobileSplitterModel,
    leftPanelInfo,
    rightPanelVis,
    leftDrawer,
    envJusticeTract,
    envJusticeTribe,
    selectedCounty,
    selectedCongressionalDistrict,
    selectedOwner,
    selectedHazardClassification,
    selectedCondition,
    mapDashboardOption,
    openContact,
    openDamFactsheet,
    getLayersInfo,
  };
});
