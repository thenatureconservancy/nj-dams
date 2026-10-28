<template>
  <div class="map-view">
    <!-- Side Panel -->
    <div id="side-panel" class="shadow-3 bg-grey-3">
      <q-scroll-area style="flex: 1; height: 100%">
        <div class="q-ma-md">
          <div class="text-center text-h6 q-my-md">Explore New Jersey Dams</div>
          <hr />
          <div>
            Use the map tools and filters to explore New Jersey dams. Click on a
            map point to see dam details.
          </div>
          <br />
          <div>
            Number of Dams:
            <span class="text-bold"> {{ ms.numberOfDams }}</span>
          </div>
          <br />
          <div>Location & Geography</div>
          <q-select
            multiple
            class="q-my-sm"
            dense
            outlined
            clearable
            label="County"
            :options="countyOptions"
            v-model="ms.selectedCounty"
            :disable="
              Array.isArray(ms.selectedCongressionalDistrict) &&
              ms.selectedCongressionalDistrict.length > 0
            "
          ></q-select>
          <q-select
            multiple
            class="q-my-sm"
            dense
            outlined
            clearable
            label="Congressional District"
            :options="congressionalOptions"
            v-model="ms.selectedCongressionalDistrict"
            :disable="
              Array.isArray(ms.selectedCounty) && ms.selectedCounty.length > 0
            "
          ></q-select>
          <br />
          <div>Dam Infrastructure</div>
          <q-select
            multiple
            class="q-my-sm"
            dense
            outlined
            clearable
            label="Owner"
            :options="ownerOptions"
            v-model="ms.selectedOwner"
          ></q-select>
          <q-select
            multiple
            class="q-my-sm"
            dense
            outlined
            clearable
            label="Hazard Classification"
            :options="hazardOptions"
            v-model="ms.selectedHazardClassification"
          ></q-select>
          <q-select
            multiple
            class="q-my-sm"
            dense
            outlined
            clearable
            label="Condition"
            :options="conditionOptions"
            v-model="ms.selectedCondition"
          ></q-select>
          <br />
          <div style="display: flex">
            <div>Community</div>
            <span
              class="material-icons-outlined q-ml-sm"
              style="line-height: 1.4; font-size: 16px"
            >
              info
              <q-tooltip
                class="bg-white text-black text-body1"
                style="width: 350px; border: 1px solid black"
                anchor="center right"
                self="center start"
              >
                Under the New Jersey Environmental Justice Law, “Overburdened
                Community” means any census block group, as determined in
                accordance with the most recent United States Census, in which:
                (1) at least 35 percent of the households qualify as low-income
                households; (2) at least 40 percent of the residents identify as
                a minority or as members of a State recognized tribal community;
                or (3) at least 40 percent of the households have limited
                English proficiency.</q-tooltip
              >
            </span>
          </div>
          <!-- <div class="q-mx-sm">
            Under the New Jersey Environmental Justice Law, “Overburdened
            Community” means any census block group, as determined in accordance
            with the most recent United States Census, in which: (1) at least 35
            percent of the households qualify as low-income households; (2) at
            least 40 percent of the residents identify as a minority or as
            members of a State recognized tribal community; or (3) at least 40
            percent of the households have limited English proficiency.
          </div> -->
          <q-checkbox
            label="Overburdened Communities Tract"
            v-model="ms.envJusticeTract"
          ></q-checkbox>
          <q-checkbox
            label="Overburdened Communities - Tribal"
            v-model="ms.envJusticeTribe"
          ></q-checkbox>
        </div>
      </q-scroll-area>
    </div>

    <!-- Map -->
    <arcgis-map
      id="map"
      class="shadow-2"
      item-id="758e1b9445b44ca8a8cd6e411305ae7f"
      @arcgisViewReadyChange="onReady"
    >
      <arcgis-home position="top-right"></arcgis-home>
      <arcgis-zoom position="top-right"></arcgis-zoom>
      <arcgis-scale-bar position="bottom-right" unit="dual"></arcgis-scale-bar>
      <!-- <arcgis-expand
        close-on-esc
        position="bottom-left"
        mode="floating"
        collapse-tooltip="Hide Legend"
        expand-tooltip="Legend"
      >
        <arcgis-legend legend-style="classic"></arcgis-legend>
      </arcgis-expand> -->
      <arcgis-expand close-on-esc position="top-right" mode="floating">
        <arcgis-basemap-gallery
          position="top-right"
          :source="source"
        ></arcgis-basemap-gallery>
      </arcgis-expand>
      <arcgis-expand close-on-esc position="top-right" mode="floating">
        <arcgis-layer-list
          position="top-right"
          view="map"
          selection-mode="multiple"
        ></arcgis-layer-list>
      </arcgis-expand>
      <!-- Waterbodies Alert -->
      <!-- <q-dialog v-model="ms.waterbodiesAlert" position="top">
        <q-card style="display: flex">
          <q-card-actions align="right">
            <q-btn flat icon="close" color="primary" v-close-popup />
          </q-card-actions>
          <q-card-section>
            <div>Zoom in to view the Waterbodies layer</div>
          </q-card-section>
        </q-card>
      </q-dialog> -->
    </arcgis-map>

    <!-- Dashboard Button -->
    <div
      class="esri-widget--button shadow-1"
      style="
        position: absolute;
        display: block;
        width: 32px;
        height: 32px;
        cursor: pointer;
        background-color: white;
        left: 440px;
        top: 80px;
        z-index: 40;
      "
      @click="router.push({ name: 'dashboard' })"
    >
      <q-tooltip
        class="bg-white text-black"
        anchor="bottom right"
        self="top right"
        style="
          border-radius: 0px;
          border: 1px solid black;
          font-size: 12px;
          padding: 4px !important;
        "
      >
        Dashboard
      </q-tooltip>
      <span
        class="material-icons-outlined"
        style="font-size: 20px; margin-top: 5px"
      >
        query_stats
      </span>
    </div>

    <!-- Legend -->
    <div
      class="esri-widget--button shadow-1"
      style="
        position: absolute;
        display: block;
        width: 32px;
        height: 32px;
        cursor: pointer;
        background-color: white;
        left: 440px;
        bottom: 45px;
      "
      @click="ms.displayLegend = !ms.displayLegend"
    >
      <span
        class="material-icons-outlined"
        style="font-size: 20px; margin-top: 5px"
      >
        layers
      </span>
    </div>
    <div
      v-if="ms.displayLegend"
      style="position: absolute; display: block; bottom: 45px; left: 480px"
    >
      <Legend />
    </div>

    <!-- Waterbodies Alert -->
    <div
      v-if="ms.waterbodiesAlert"
      class="bg-orange text-white"
      style="
        position: absolute;
        top: 80px;
        left: 50%;
        display: flex;
        border-radius: 8px;
        padding: 8px;
      "
    >
      <q-btn
        round
        unelevated
        size="sm"
        icon="close"
        color="orange"
        @click="ms.waterbodiesAlert = false"
      ></q-btn>
      <div class="text-bold" style="line-height: 2">
        Zoom in to view the Waterbodies layer
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import Portal from '@arcgis/core/portal/Portal';
import PortalBasemapsSource from '@arcgis/core/widgets/BasemapGallery/support/PortalBasemapsSource';
import CSVLayer from '@arcgis/core/layers/CSVLayer.js';
import { watch as reactiveWatch } from '@arcgis/core/core/reactiveUtils.js';
import { useMapStore } from '../store/index';
import { useRouter } from 'vue-router';
import Legend from '../components/TheLegend.vue';

const router = useRouter();
const ms = useMapStore();

// plain variable avoids Vue proxy conflicting with ArcGIS __accessor__
let damsLayer = null;

const applyFilters = async () => {
  if (!damsLayer) return;
  const conditions = [];

  // Helper function to create OR conditions for multiple selections
  const createOrCondition = (fieldName, values, extractField = 'label') => {
    if (!Array.isArray(values) || values.length === 0) return null;
    const conditions = values.map(
      (item) => `${fieldName} = '${item[extractField]}'`,
    );
    return conditions.length === 1
      ? conditions[0]
      : `(${conditions.join(' OR ')})`;
  };

  if (Array.isArray(ms.selectedCounty) && ms.selectedCounty.length) {
    const countyCond = createOrCondition('County', ms.selectedCounty, 'label');
    if (countyCond) conditions.push(countyCond);
  }
  if (
    Array.isArray(ms.selectedCongressionalDistrict) &&
    ms.selectedCongressionalDistrict.length
  ) {
    const districtCond = createOrCondition(
      'CongressionalDistrict',
      ms.selectedCongressionalDistrict,
      'label',
    );
    if (districtCond) conditions.push(districtCond);
  }
  if (Array.isArray(ms.selectedOwner) && ms.selectedOwner.length) {
    const ownerCond = createOrCondition(
      'BarrierOwnerType',
      ms.selectedOwner,
      'value',
    );
    if (ownerCond) conditions.push(ownerCond);
  }
  if (
    Array.isArray(ms.selectedHazardClassification) &&
    ms.selectedHazardClassification.length
  ) {
    const hazardCond = createOrCondition(
      'Hazard',
      ms.selectedHazardClassification,
      'value',
    );
    if (hazardCond) conditions.push(hazardCond);
  }
  if (Array.isArray(ms.selectedCondition) && ms.selectedCondition.length) {
    const conditionCond = createOrCondition(
      'Condition',
      ms.selectedCondition,
      'value',
    );
    if (conditionCond) conditions.push(conditionCond);
  }
  if (ms.envJusticeTract) {
    conditions.push("EJTract = 'yes'");
  }
  if (ms.envJusticeTribe) {
    conditions.push("EJTribal = 'yes'");
  }
  const where = conditions.length ? conditions.join(' AND ') : '1=1';
  damsLayer.definitionExpression = conditions.length ? where : null;

  // Query the layer to count visible features
  try {
    const query = damsLayer.createQuery();
    query.where = where;
    const result = await damsLayer.queryFeatureCount(query);
    ms.numberOfDams = result;
  } catch (error) {
    console.error('Error querying feature count:', error);
  }
};

watch(() => ms.selectedCounty, applyFilters, { deep: true });
watch(() => ms.selectedCongressionalDistrict, applyFilters, { deep: true });
watch(() => ms.selectedOwner, applyFilters, { deep: true });
watch(() => ms.selectedHazardClassification, applyFilters, { deep: true });
watch(() => ms.selectedCondition, applyFilters, { deep: true });
watch(() => ms.envJusticeTract, applyFilters);
watch(() => ms.envJusticeTribe, applyFilters);

// basemap gallery
const allowedBasemapTitles = [
  'Imagery Hybrid',
  // 'TNC Light with Hillshade',
  // 'TNC Dark Gray Map',
  'Ocean Basemap',
];
const portal = new Portal();
const source = new PortalBasemapsSource({
  portal,
  query: {
    id: 'defa1b2287604d069c70af515331e30f',
  },
  filterFunction: (basemap) =>
    allowedBasemapTitles.indexOf(basemap.portalItem.title) > -1,
});

const countyOptions = [
  { label: 'Atlantic', value: 'atlantic' },
  { label: 'Bergen', value: 'bergen' },
  { label: 'Burlington', value: 'burlington' },
  { label: 'Camden', value: 'camden' },
  { label: 'Cape May', value: 'cape_may' },
  { label: 'Cumberland', value: 'cumberland' },
  { label: 'Essex', value: 'essex' },
  { label: 'Gloucester', value: 'gloucester' },
  { label: 'Hudson', value: 'hudson' },
  { label: 'Hunterdon', value: 'hunterdon' },
  { label: 'Mercer', value: 'mercer' },
  { label: 'Middlesex', value: 'middlesex' },
  { label: 'Monmouth', value: 'monmouth' },
  { label: 'Morris', value: 'morris' },
  { label: 'Ocean', value: 'ocean' },
  { label: 'Passaic', value: 'passaic' },
  { label: 'Salem', value: 'salem' },
  { label: 'Somerset', value: 'somerset' },
  { label: 'Sussex', value: 'sussex' },
  { label: 'Union', value: 'union' },
  { label: 'Warren', value: 'warren' },
];

const ownerOptions = [
  { label: 'Federal', value: 'Federal' },
  {
    label: 'Local Government',
    value: 'Local government',
  },
  { label: 'Private', value: 'Private' },
  {
    label: 'Public Utility',
    value: 'Public utility',
  },
  { label: 'State', value: 'State' },
  { label: 'Unknown', value: 'Unknown' },
];

const hazardOptions = [
  { label: 'High', value: 'High' },
  { label: 'Low', value: 'Low' },
  { label: 'Significant', value: 'Significant' },
  { label: 'Unknown', value: 'Unknown' },
];

const conditionOptions = [
  { label: 'Dam breached', value: 'Dam breached' },
  { label: 'Fair', value: 'Fair' },
  { label: 'Poor', value: 'Poor' },
  { label: 'Satisfactory', value: 'Satisfactory' },
  { label: 'Unknown', value: 'Unknown' },
  { label: 'Unsatisfactory', value: 'Unsatisfactory' },
];

const congressionalOptions = [
  { label: 'NJ01', value: 'nj01' },
  { label: 'NJ02', value: 'nj02' },
  { label: 'NJ03', value: 'nj03' },
  { label: 'NJ04', value: 'nj04' },
  { label: 'NJ05', value: 'nj05' },
  { label: 'NJ06', value: 'nj06' },
  { label: 'NJ07', value: 'nj07' },
  { label: 'NJ08', value: 'nj08' },
  { label: 'NJ09', value: 'nj09' },
  { label: 'NJ10', value: 'nj10' },
  { label: 'NJ11', value: 'nj11' },
  { label: 'NJ12', value: 'nj12' },
];

// arcgisViewReadyChange
const onReady = (event) => {
  const webMap = document.querySelector('arcgis-map').view.map;
  const mapView = document.querySelector('arcgis-map').view;

  mapView.popup.dockEnabled = true;
  mapView.popup.docked = true;
  mapView.popup.includeDefaultActions = false;

  mapView.popup.dockOptions = {
    position: 'top-right',
    breakpoint: false,
    buttonEnabled: false,
    buttonAlignment: 'top-right',
  };

  mapView.popup.visibleElements = {
    featureNavigation: false,
    actionBar: false,
  };

  const dams_csv = new CSVLayer({
    url: '/dams.csv',
    copyright: 'National Aquatic Connectivity Collaborative',

    renderer: {
      type: 'class-breaks',
      field: 'State_PNCWC_tier',

      classBreakInfos: [
        {
          minValue: 1,
          maxValue: 4,
          label: 'Highest',
          symbol: {
            type: 'simple-marker',
            color: '#c46a54',
            size: 12,
            outline: { color: 'black', width: 0.75 },
          },
        },
        {
          minValue: 5,
          maxValue: 8,
          label: 'Very High',
          symbol: {
            type: 'simple-marker',
            color: '#f0c419',
            size: 10,
            outline: { color: 'black', width: 0.75 },
          },
        },
        {
          minValue: 9,
          maxValue: 12,
          label: 'High',
          symbol: {
            type: 'simple-marker',
            color: '#9be53f',
            size: 8,
            outline: { color: 'black', width: 0.75 },
          },
        },
        {
          minValue: 13,
          maxValue: 16,
          label: 'Medium',
          symbol: {
            type: 'simple-marker',
            color: '#73c9a5',
            size: 6,
            outline: { color: 'black', width: 0.75 },
          },
        },
        {
          minValue: 17,
          maxValue: 20,
          label: 'Low',
          symbol: {
            type: 'simple-marker',
            color: '#142a78',
            size: 5,
            outline: { color: 'black', width: 0.75 },
          },
        },
      ],
    },

    popupTemplate: {
      title: '{Name}',
      actions: [],
      content: `
      <b>Report:</b> <a href="{URL}" target="_blank">{URL}</a><br/>
      <b>County:</b> {County} County<br/>
      <b>Congressional District:</b> {CongressionalDistrict}<br/><br/>
      <b>Owner:</b> {BarrierOwnerType}<br/>
      <b>Hazard Classification:</b> {Hazard}<br/>
      <b>Condition:</b> {Condition}<br/>
      <b>River:</b> {River}<br/>
      <b>River Miles Reconnected:</b> {GainMiles}<br/><br/>
      <b>Overburdened Communities Tract:</b> {EJTract}<br/>
      <b>Overburdened Communities - Tribal:</b> {EJTribal}<br/>
    `,
    },
  });

  damsLayer = dams_csv;
  mapView.map.add(dams_csv);

  mapView.on('click', async (event) => {
    const response = await mapView.hitTest(event);
    const results = response.results.filter(
      (r) => r.graphic.layer === damsLayer,
    );
    if (results.length) {
      const feature = results[0].graphic;
      mapView.goTo({
        target: feature.geometry,
        zoom: 12,
      });
    }
  });

  webMap.allLayers.forEach((layer) => {
    console.log(layer.title);
    layer.listMode = 'show';
  });

  // Watch for visibility changes of Overburdened Communities layer
  const overburdenedLayer = webMap.allLayers.find(
    (layer) => layer.title === 'Overburdened Communities',
  );

  if (overburdenedLayer) {
    reactiveWatch(
      () => overburdenedLayer.visible,
      (visible) => {
        ms.overburdenedVis = visible;
      },
    );

    // Initial state
    ms.overburdenedVis = overburdenedLayer.visible;
  }

  // Watch for visibility changes of Waterbodies layer
  const waterbodiesLayer = webMap.allLayers.find(
    (layer) => layer.title === 'Waterbodies',
  );

  if (waterbodiesLayer) {
    reactiveWatch(
      () => waterbodiesLayer.visible,
      (visible) => {
        ms.waterbodiesAlert = visible;
        ms.waterbodiesVis = visible;
      },
    );

    // Initial state
    ms.waterbodiesAlert = waterbodiesLayer.visible;
  }

  reactiveWatch(
    () => mapView.popup.visible,
    (visible) => {
      if (visible) {
        mapView.popup.docked = true;
      }
    },
  );
};
</script>

<style>
.map-view {
  display: flex;
  gap: 12px;
  padding: 12px;
  height: 100%;
  box-sizing: border-box;
}

#side-panel {
  width: 400px;
  max-width: calc(100vw - 30px);
  flex-shrink: 0;
  background-color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

#map {
  flex: 1;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}

@media screen and (max-width: 700px) {
  .map-view {
    flex-direction: column;
  }
  #side-panel {
    width: 100%;
    min-height: 20vh;
  }
  .esri-view-width-xsmall .esri-expand--auto .esri-expand__container--expanded {
    height: fit-content;
  }
}

.esri-basemap-gallery {
  margin-bottom: 0px !important;
}
</style>
