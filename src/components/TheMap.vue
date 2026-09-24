<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-drawer show-if-above v-model="ms.leftDrawer" side="left" bordered>
      <div>Test content here</div>
    </q-drawer> -->

    <q-page-container>
      <arcgis-map
        id="map"
        item-id="758e1b9445b44ca8a8cd6e411305ae7f"
        @arcgisViewReadyChange="onReady"
      >
        <arcgis-home position="top-right"></arcgis-home>
        <arcgis-zoom position="top-right"></arcgis-zoom>
        <arcgis-scale-bar
          position="bottom-right"
          unit="dual"
        ></arcgis-scale-bar>
        <arcgis-expand
          close-on-esc
          position="bottom-right"
          mode="floating"
          collapse-tooltip="Hide Legend"
          expand-tooltip="Legend"
        >
          <arcgis-legend legend-style="classic"></arcgis-legend>
        </arcgis-expand>
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
      </arcgis-map>
    </q-page-container>

    <div
      class="shadow-3"
      style="
        position: absolute;
        top: 15px;
        left: 15px;
        height: calc(100vh - 95px);
        width: 400px;
        max-width: calc(100vw - 30px);
        background-color: white;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      "
    >
      <q-scroll-area style="flex: 1; height: 100%">
        <div class="q-ma-md">
          <div class="text-center">Explore New Jersey Dams</div>
          <hr />
          <div>
            Use the map tools and filters to explore New Jersey dams. Click on a
            map point to see dam details.
          </div>
          <br />
          <div>Location & Geography</div>
          <q-select
            class="q-my-sm"
            dense
            outlined
            clearable
            label="County"
            :options="countyOptions"
            v-model="ms.selectedCounty"
            :disable="!!ms.selectedCongressionalDistrict"
          ></q-select>
          <q-select
            class="q-my-sm"
            dense
            outlined
            clearable
            label="Congressional District"
            :options="congressionalOptions"
            v-model="ms.selectedCongressionalDistrict"
            :disable="!!ms.selectedCounty"
          ></q-select>
          <!-- <q-select
          class="q-my-sm"
          dense
          outlined
          label="HUC"
          :options="countyOptions"
        ></q-select> -->
          <br />
          <div>Dam Infrastructure</div>
          <q-select
            class="q-my-sm"
            dense
            outlined
            clearable
            label="Owner"
            :options="ownerOptions"
            v-model="ms.selectedOwner"
          ></q-select>
          <q-select
            class="q-my-sm"
            dense
            outlined
            clearable
            label="Hazard Classification"
            :options="hazardOptions"
            v-model="ms.selectedHazardClassification"
          ></q-select>
          <q-select
            class="q-my-sm"
            dense
            outlined
            clearable
            label="Condition"
            :options="conditionOptions"
            v-model="ms.selectedCondition"
          ></q-select>

          <br />
          <div>Community</div>
          <q-checkbox
            label="Environmental Justice Tract"
            v-model="ms.envJusticeTract"
          ></q-checkbox>
          <q-checkbox
            label="Environmental Justice Tribal"
            v-model="ms.envJusticeTribe"
          ></q-checkbox>
        </div>
      </q-scroll-area>
    </div>

    <div id="button-toggle">
      <q-btn-toggle
        v-model="ms.mapDashboardOption"
        :options="[
          { label: 'Web Map', value: 'map' },
          { label: 'Dashboard', value: 'dashboard' },
        ]"
        color="grey"
        text-color="white"
        toggle-color="primary"
      ></q-btn-toggle>
    </div>
  </q-layout>
</template>

<script setup>
import { watch } from 'vue';
import Portal from '@arcgis/core/portal/Portal';
import PortalBasemapsSource from '@arcgis/core/widgets/BasemapGallery/support/PortalBasemapsSource';
import CSVLayer from '@arcgis/core/layers/CSVLayer.js';
import { watch as reactiveWatch } from '@arcgis/core/core/reactiveUtils.js';
import { useMapStore } from '../store/index';
const ms = useMapStore();

// plain variable avoids Vue proxy conflicting with ArcGIS __accessor__
let damsLayer = null;

const applyFilters = () => {
  if (!damsLayer) return;
  const conditions = [];
  if (ms.selectedCounty?.label) {
    conditions.push(`County = '${ms.selectedCounty.label}'`);
  }
  if (ms.selectedCongressionalDistrict?.label) {
    conditions.push(
      `CongressionalDistrict = '${ms.selectedCongressionalDistrict.label}'`,
    );
  }
  if (ms.selectedOwner?.value) {
    conditions.push(`OwnerType = '${ms.selectedOwner.value}'`);
  }
  if (ms.selectedHazardClassification?.value) {
    conditions.push(`Hazard = '${ms.selectedHazardClassification.value}'`);
  }
  if (ms.selectedCondition?.value) {
    conditions.push(`Condition = '${ms.selectedCondition.value}'`);
  }
  if (ms.envJusticeTract) {
    conditions.push("EJTract = 'yes'");
  }
  if (ms.envJusticeTribe) {
    conditions.push("EJTribal = 'yes'");
  }
  damsLayer.definitionExpression = conditions.length
    ? conditions.join(' AND ')
    : null;
};

watch(() => ms.selectedCounty, applyFilters);
watch(() => ms.selectedCongressionalDistrict, applyFilters);
watch(() => ms.selectedOwner, applyFilters);
watch(() => ms.selectedHazardClassification, applyFilters);
watch(() => ms.selectedCondition, applyFilters);
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
  { label: 'Department of Defense', value: 'Department of Defense' },
  {
    label: 'Joint Ownership or Regional land',
    value: 'Joint Ownership or Regional land',
  },
  { label: 'National Park Service', value: 'National Park Service' },
  {
    label: 'Other private conservation land',
    value: 'Other private conservation land',
  },
  { label: 'Private easement', value: 'Private easement' },
  { label: 'State land', value: 'State land' },
  {
    label: 'US Fish and Wildlife Service',
    value: 'US Fish and Wildlife Service',
  },
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
      <b>Owner:</b> {OwnerType}<br/>
      <b>Hazard Classification:</b> {Hazard}<br/>
      <b>Condition:</b> {Condition}<br/>
      <b>River:</b> {River}<br/>
      <b>Gain Miles:</b> {GainMiles}<br/><br/>
      <b>Environmental Justice Tract:</b> {EJTract}<br/>
      <b>Environmental Justice Tribal:</b> {EJTribal}<br/>
    `,
    },
  });

  damsLayer = dams_csv;
  mapView.map.add(dams_csv);

  webMap.allLayers.forEach((layer) => {
    console.log(layer.title);
    layer.listMode = 'show';
  });

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
@media screen and (max-width: 700px) {
  #map {
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

#button-toggle {
  position: fixed;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
