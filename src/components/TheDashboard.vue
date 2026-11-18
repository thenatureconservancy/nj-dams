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
          <arcgis-basemap-gallery
            position="top-right"
            :source="source"
          ></arcgis-basemap-gallery>
        </arcgis-expand>
        <!-- <arcgis-expand close-on-esc position="top-right" mode="floating">
          <arcgis-layer-list
            position="top-right"
            view="map"
            selection-mode="multiple"
          ></arcgis-layer-list>
        </arcgis-expand> -->
      </arcgis-map>

      <!-- Legend -->
      <div
        class="esri-widget--button shadow-1 legend-btn"
        style="
          position: absolute;
          display: block;
          width: 32px;
          height: 32px;
          cursor: pointer;
          background-color: white;
          left: 25px;
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
        class="legend-panel"
        style="position: absolute; display: block; bottom: 45px; left: 65px"
      >
        <Legend />
      </div>

      <!-- Dialog Button -->
      <div
        class="bg-white shadow-2 help-btn"
        style="
          position: absolute;
          display: block;
          width: 32px;
          height: 32px;
          left: 25px;
          top: 75px;
          cursor: pointer;
        "
        @click="ms.dashboardInfo = !ms.dashboardInfo"
      >
        <span
          class="material-icons-outlined text-thin text-grey-7"
          style="
            font-size: 25px;
            margin-top: 4px;
            width: 100%;
            text-align: center;
            align-items: center;
          "
        >
          help_outline
        </span>
      </div>
    </div>

    <!-- Panels -->
    <div class="dashboard__panels">
      <div class="shadow-2 panel" id="countdown">
        <div class="text-center stat-label">Dam Removal Projects</div>
        <div class="q-mt-sm dam-list">
          <q-scroll-area style="max-width: 100%; width: 100%; height: 100%">
            <q-list dense>
              <q-item
                v-for="dam in ms.damNames"
                :key="dam"
                clickable
                v-ripple
                @click="onDamClick(dam)"
                :active="ms.selectedDashboardDam?.Dam_Name === dam"
                active-class="bg-grey-4"
              >
                <q-item-section>
                  <div style="display: flex">
                    <span
                      class="material-icons-outlined q-mr-sm text-primary"
                      style="line-height: 1"
                    >
                      launch </span
                    >{{ dam }}
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </div>
      </div>
      <div class="shadow-2 panel" id="num-dams">
        <div class="text-center stat-label">Num. of Dam Removal Projects</div>
        <div class="stat-value" v-if="ms.damNames">
          <span class="material-icons-outlined text-primary">
            remove_circle_outline </span
          >{{ ms.damNames.length }}
        </div>
      </div>
      <div class="shadow-2 panel" id="num-miles">
        <div class="text-center stat-label">Total Miles Reconnected</div>
        <div class="stat-value">
          <span class="material-icons-outlined text-primary"> water </span>100
        </div>
      </div>
      <div class="charts-wrapper">
        <div class="shadow-2 panel" id="chart-1">
          <div class="panel-upper">
            <div class="text-center stat-label q-mb-sm">Dam Details</div>
            <div v-if="ms.selectedDashboardDam" style="line-height: 1.5">
              <div>
                <span class="text-bold"> Name:</span>
                {{ ms.selectedDashboardDam.Dam_Name }}
              </div>
              <div>
                <span class="text-bold"> Project Lead:</span>
                {{ ms.selectedDashboardDam.Project_Lead_Agency_Org }}
              </div>
              <div>
                <span class="text-bold"> Partners:</span>
                {{ ms.selectedDashboardDam.Partners_Involved }}
              </div>
              <div>
                <span class="text-bold"> Funding Needed?:</span>
                {{ ms.selectedDashboardDam.Is_funding_Needed_Y_N_ }}
              </div>
              <div>
                <span class="text-bold"> Funder(s):</span>
                {{ ms.selectedDashboardDam.Name_of_Funder_s_ }}
              </div>
            </div>
          </div>
        </div>
        <div class="shadow-2 panel" id="chart-3">
          <div class="panel-lower">
            <div class="text-center stat-label">Removal Status</div>
            <div
              v-if="ms.selectedDashboardDam"
              style="margin: auto; font-size: 1.8em"
            >
              <div
                class="text-center text-primary"
                v-if="
                  ms.selectedDashboardDam
                    .Project_Stage_feasibility_engineering_design_permitting_construction_ ==
                  'feasibility'
                "
              >
                <span class="material-icons-outlined"> search </span>
              </div>
              <div
                class="text-center text-primary"
                v-if="
                  ms.selectedDashboardDam
                    .Project_Stage_feasibility_engineering_design_permitting_construction_ ==
                  'engineering design'
                "
              >
                <span class="material-icons-outlined"> engineering </span>
              </div>
              <div
                class="text-center text-primary"
                v-if="
                  ms.selectedDashboardDam
                    .Project_Stage_feasibility_engineering_design_permitting_construction_ ==
                  'permitting '
                "
              >
                <span class="material-icons-outlined"> description </span>
              </div>
              <div
                class="text-center text-primary"
                v-if="
                  ms.selectedDashboardDam
                    .Project_Stage_feasibility_engineering_design_permitting_construction_ ==
                  'construction'
                "
              >
                <span class="material-icons-outlined"> construction </span>
              </div>
              <div
                class="text-center text-primary"
                v-if="
                  ms.selectedDashboardDam
                    .Project_Stage_feasibility_engineering_design_permitting_construction_ ==
                  'complete'
                "
              >
                <span class="material-icons-outlined">
                  check_circle_outline
                </span>
              </div>
              <div class="text-center">
                {{
                  ms.selectedDashboardDam.Project_Stage_feasibility_engineering_design_permitting_construction_.replace(
                    /\b\w/g,
                    (char) => char.toUpperCase(),
                  )
                }}
              </div>
            </div>
          </div>
          <q-separator />
          <div class="panel-lower">
            <div class="stat-label">Completion Year</div>
            <div
              v-if="ms.selectedDashboardDam"
              class="text-center"
              style="font-size: 1.8em; margin: auto"
            >
              <span class="material-icons-outlined text-primary">
                calendar_month
              </span>
              <div class="text-center">
                {{ ms.selectedDashboardDam.Estimated_Date_of_Removal }}
              </div>
            </div>
          </div>
          <q-separator />
          <div class="panel-lower">
            <div class="text-center stat-label">Miles Reconnected</div>
            <div
              v-if="ms.selectedDashboardDam"
              style="font-size: 1.8em; margin: auto"
            >
              <span class="material-icons-outlined text-primary"> water </span>
            </div>
          </div>
        </div>
        <div class="shadow-2 panel" id="chart-2">
          <div class="benefit-section">
            <div class="text-center stat-label q-my-sm">
              Ecological Benefits
            </div>
            <span
              class="material-icons-outlined text-center text-primary"
              style="font-size: 1.6em"
            >
              forest
            </span>
            <div>
              <q-list>
                <q-item>
                  <ul
                    v-if="ms.selectedDashboardDam"
                    style="line-height: 1.5; margin: 0; padding-left: 1.2em"
                  >
                    <li
                      v-for="(
                        item, i
                      ) in ms.selectedDashboardDam.Ecological_Benefits.split(
                        ',',
                      )
                        .map((s) => s.trim())
                        .filter(Boolean)"
                      :key="i"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </q-item>
                <!-- <q-item>
                <q-item-section
                  >Restores fish passage and aquatic
                  connectivity:</q-item-section
                >
              </q-item>

              <q-item>
                <q-item-section
                  >Recovery of migratory fish populations:</q-item-section
                >
              </q-item>

              <q-item>
                <q-item-section>Improves water quality:</q-item-section>
              </q-item>

              <q-item>
                <q-item-section
                  >Restores natural sediment transport, river flow and
                  function:</q-item-section
                >
              </q-item>

              <q-item>
                <q-item-section
                  >Improves habitat for native fish and
                  wildlife:</q-item-section
                >
              </q-item>

              <q-item>
                <q-item-section
                  >Restores habitat for freshwater mussels and aquatic
                  insects:</q-item-section
                >
              </q-item>

              <q-item>
                <q-item-section
                  >Restores habitat for native Brook trout and resident
                  fish:</q-item-section
                >
              </q-item>

              <q-item>
                <q-item-section
                  >Increases biodiversity and ecosystem
                  resilience:</q-item-section
                >
              </q-item> -->
              </q-list>
            </div>
          </div>
          <q-separator />
          <div class="benefit-section">
            <div class="text-center stat-label q-my-sm">Co-benefits</div>
            <span
              class="material-icons-outlined text-center text-primary"
              style="font-size: 1.6em"
            >
              groups
            </span>
            <div>
              <q-list>
                <q-item>
                  <ul
                    v-if="ms.selectedDashboardDam"
                    style="line-height: 1.5; margin: 0; padding-left: 1.2em"
                  >
                    <li
                      v-for="(
                        item, i
                      ) in ms.selectedDashboardDam.Co_Benefits.split(',')
                        .map((s) => s.trim())
                        .filter(Boolean)"
                      :key="i"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </q-item>

                <!-- <q-item>
                <q-item-section>Reduces flood risk:</q-item-section>
              </q-item>

              <q-item>
                <q-item-section>Supports climate resilience:</q-item-section>
              </q-item>

              <q-item>
                <q-item-section>Improves public safety:</q-item-section>
              </q-item>

              <q-item>
                <q-item-section>Enhances recreation:</q-item-section>
              </q-item>

              <q-item>
                <q-item-section
                  >Reduces long term maintenance costs:</q-item-section
                >
              </q-item> -->
              </q-list>
            </div>
          </div>
        </div>
        <!-- <div class="panel-overlay">
          <span>Select a dam to see more details</span>
        </div> -->
      </div>
    </div>

    <!-- Intro Dialog -->
    <q-dialog v-model="ms.dashboardInfo">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center q-ma-md">SDRP Projects Dashboard</div>
          <div>
            Welcome to the SDRP Projects Dashboard. Here you can explore active
            dam removal projects and view overall program statistics, including
            the total number of dams removed and miles of rivers reconnected.
          </div>
          <br />
          <div>
            Select a dam project by clicking a location on the map or choosing
            one from the Current Dams Being Removed list to access detailed
            project-specific metrics and information.
          </div>
        </q-card-section>

        <q-card-actions align="center" class="q-ma-md">
          <q-btn label="Enter" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { useMapStore } from "../store/index";
import Legend from "../components/TheLegend.vue";
import CSVLayer from "@arcgis/core/layers/CSVLayer.js";
import PortalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/PortalBasemapsSource";
import Portal from "@arcgis/core/portal/Portal";
// import { createElement } from "react";

const ms = useMapStore();

// basemap gallery
const allowedBasemapTitles = [
  "Imagery Hybrid",
  // 'TNC Light with Hillshade',
  // 'TNC Dark Gray Map',
  "Ocean Basemap",
];
const portal = new Portal();
const source = new PortalBasemapsSource({
  portal,
  query: {
    id: "defa1b2287604d069c70af515331e30f",
  },
  filterFunction: (basemap) =>
    allowedBasemapTitles.indexOf(basemap.portalItem.title) > -1,
});

// function initGauge() {
//   const gaugeChart = echarts.init(this.$refs.gauge);

//   const option = {
//     tooltip: {
//       formatter: function (params) {
//         let message;

//         if (params.data.name == "Overall") {
//           message = "Total Dams: <br/>" + params.data.value;
//         } else if (params.data.name == "Policy") {
//           message = "Dams Removed: <br/>" + params.data.value;
//         }

//         return message;
//       },
//       confine: true,
//     },
//     series: [
//       {
//         type: "gauge",
//         startAngle: 90,
//         endAngle: -270,
//         max: 10,
//         pointer: {
//           show: false,
//         },
//         progress: {
//           show: true,
//           overlap: false,
//           roundCap: false,
//           clip: false,
//         },
//         axisLine: {
//           lineStyle: {
//             width: 40,
//             color: [
//               [0.425, "#e7e7e7"],
//               [0.575, "#e7e7e7"],
//             ],
//           },
//         },
//         splitLine: {
//           show: false,
//           distance: 0,
//           length: 10,
//         },
//         axisTick: {
//           show: false,
//         },
//         axisLabel: {
//           show: false,
//           distance: 50,
//         },
//         data: [
//           {
//             value: 100,
//             name: "Total",
//             title: {
//               offsetCenter: ["0%", "-50%"],
//             },
//             detail: {
//               valueAnimation: true,
//               offsetCenter: ["0%", "-30%"],
//               formatter: "{value}",
//             },
//           },
//           {
//             value: 25,
//             name: "Removed",
//             title: {
//               offsetCenter: ["0%", "-5%"],
//             },
//             detail: {
//               valueAnimation: true,
//               offsetCenter: ["0%", "10%"],
//               formatter: "{value}",
//             },
//           },
//         ],
//         title: {
//           fontSize: 14,
//         },
//         detail: {
//           width: 50,
//           height: 14,
//           fontSize: 14,
//           color: "inherit",
//         },
//       },
//     ],
//   };

//   gaugeChart.setOption(option);
// }

// Image file keyed by dam name
const damImages = Object.fromEntries(
  [
    "Calco Dam.jpg",
    "Cedar Grove Dam.JPG",
    "Coles Mill Dam.png",
    "Columbia Lake.JPG",
    "County Line Dam.JPG",
    "Darts Mills Dam.jpg",
    "Finesville Dam.png",
    "Hughesville Dam.webp",
    "Island Farm Weir (Nature-Like Fishway).jpg",
    "Memorial Park Pond Dam.jpg",
    "Nevius Street Dam.jpg",
    "No Name Dam.jpg",
    "Nunns Mill Dam.jpg",
    "Oak Ridge Lake Dam.jpg",
    "Paulina Lake Dam.JPG",
    "Robert Street Dam.jpg",
    "Rockafellows Mills Dam.jpg",
    "Warren Mill Dam.png",
  ].map((file) => [file.replace(/\.[^.]+$/, ""), file]),
);

// Normalize names so quotes, extra spaces and case differences don't matter
const normalizeName = (s) =>
  String(s)
    .replace(/["'\u201C\u201D]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const imageByName = Object.fromEntries(
  Object.entries(damImages).map(([name, file]) => [normalizeName(name), file]),
);

// match the key ignoring spaces/underscores/case.
const getDamName = (graphic) => {
  const attrs = graphic.attributes || {};
  const key = Object.keys(attrs).find(
    (k) => k.replace(/[\s_]/g, "").toLowerCase() === "damname",
  );
  return key && attrs[key] ? String(attrs[key]).trim() : "";
};

// Set once the map is ready so the template can call selectDam
let selectDamRef = null;
const onDamClick = (damName) => selectDamRef?.(damName);

const onReady = async () => {
  const mapView = document.querySelector("arcgis-map").view;

  mapView.popup.dockEnabled = true;
  mapView.popup.docked = true;
  mapView.popup.includeDefaultActions = false;

  mapView.popup.dockOptions = {
    position: "top-right",
    breakpoint: false,
    buttonEnabled: false,
    buttonAlignment: "top-right",
  };

  mapView.popup.visibleElements = {
    featureNavigation: false,
    actionBar: false,
    closeButton: false,
  };

  const dams_csv = new CSVLayer({
    url: "/dashboard_data.csv",
    latitudeField: "Lat",
    longitudeField: "Long",
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "#166534",
        size: 10,
        outline: { color: "black", width: 0.75 },
      },
    },
    popupTemplate: {
      // title: "{Dam Name }",
      content: (event) => {
        const container = document.createElement("div");

        const heading = document.createElement("p");
        heading.textContent = getDamName(event.graphic);

        const img = document.createElement("img");
        img.src = `/dashboardDams/${encodeURIComponent(
          imageByName[normalizeName(getDamName(event.graphic))],
        )}`;

        img.style.width = "100%";

        container.appendChild(heading);
        container.appendChild(img);

        return container;
      },
    },
  });

  const damsLayer = dams_csv;

  mapView.map.add(damsLayer);

  await dams_csv.load();

  const result = await dams_csv.queryFeatures({
    where: "1=1",
    returnGeometry: false,
    outFields: ["*"],
  });

  result.features.forEach((dam) => {
    ms.dashboardDams.push(dam.attributes);
  });

  console.log(ms.dashboardDams);

  ms.damNames = result.features.map(
    (feature) => feature.attributes["Dam_Name"],
  );

  mapView.on("click", (event) => {
    selectDam(event);
  });

  // Accepts either a map click event or a Dam_Name string (from the list)
  async function selectDam(eventOrName) {
    let graphic;

    if (typeof eventOrName === "string") {
      const safeName = eventOrName.replace(/'/g, "''");
      const found = await damsLayer.queryFeatures({
        where: `Dam_Name = '${safeName}'`,
        returnGeometry: true,
        outFields: ["*"],
      });
      graphic = found.features[0];
    } else {
      const hit = await mapView.hitTest(eventOrName);
      graphic = hit.results.find(
        (result) => result.graphic.layer === damsLayer,
      )?.graphic;
    }

    if (!graphic) return;

    ms.selectedDashboardDam = graphic.attributes;

    mapView.goTo({
      target: graphic.geometry,
      zoom: 12,
    });

    // Open the popup when selected from the list
    if (typeof eventOrName === "string") {
      mapView.openPopup({
        features: [graphic],
        location: graphic.geometry,
      });
    }

    console.log(ms.selectedDashboardDam);
  }

  selectDamRef = selectDam;
};
</script>
<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(0, 1fr);
  gap: 12px;
  padding: 12px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.dashboard__map {
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
}

.dashboard__panels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(0, 1fr) minmax(0, 2fr);
  gap: 12px;
  height: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  /* all panel text scales with the smaller of viewport width / height */
  font-size: clamp(8px, min(1.05vw, 1.6vh), 15px);
}

.dam-list {
  flex: 1;
  min-height: 0;
}

.dashboard__panels :deep(.q-item) {
  min-height: 0;
  padding: 0.2em 0.5em;
  font-size: inherit;
}

.dashboard__panels :deep(.q-list--dense > .q-item) {
  min-height: 0;
}

.dashboard__panels .material-icons-outlined {
  font-size: 1.5em;
}

.panel {
  overflow: hidden;
  min-width: 0;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.panel-upper,
.panel-lower {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  overflow: hidden;
  min-height: 0;
  min-width: 0;
}

/* 60% / 20% / 20% split */
.panel-upper {
  flex: 3 1 0;
}

.panel-lower {
  flex: 1 1 0;
}

/* 50% / 50% split for ecological benefits and co-benefits */
.benefit-section {
  flex: 1 1 0;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.charts-wrapper {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  height: 100%;
  position: relative;
}

.stat-label {
  font-weight: bold;
}

.dashboard__panels .stat-value .material-icons-outlined {
  font-size: 1em;
}

/* Phones: stack map and panels (the only layout that scrolls) */
@media (max-width: 700px) {
  .dashboard {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .dashboard__panels {
    font-size: 14px;
  }

  .dam-list {
    height: 220px;
    flex: none;
  }

  .dashboard__map {
    position: relative;
    flex: none;
    height: 50vh;
    min-height: 280px;
  }

  .help-btn {
    left: 12px !important;
    top: 12px !important;
  }

  .dashboard__panels {
    display: flex;
    flex-direction: column;
    flex: none;
    height: auto;
  }

  .panel {
    flex: none;
  }

  .stat-value {
    min-height: 100px;
  }

  .charts-wrapper {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  .panel-upper,
  .panel-lower {
    min-height: 120px;
  }
}

.panel-overlay {
  grid-column: 1 / -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(170, 169, 169, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
  z-index: 10;
}
</style>
