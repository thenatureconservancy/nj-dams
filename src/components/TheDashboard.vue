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

      <div
        class="bg-white shadow-2"
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

    <div class="dashboard__panels">
      <div class="shadow-2 panel" id="countdown">
        <div class="text-center stat-label">Active Dam Projects</div>
        <div class="q-mt-sm">
          <q-scroll-area style="max-width: 100%; width: 100%; height: 235px">
            <q-list dense>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
              <q-item>
                <q-item-section> Dam Name </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </div>
      </div>
      <div class="shadow-2 panel" id="num-dams">
        <div class="text-center stat-label">Num. of Dams Removed</div>
        <div class="stat-value">
          <span class="material-icons-outlined text-primary">
            remove_circle_outline </span
          >25
        </div>
      </div>
      <div class="shadow-2 panel" id="num-miles">
        <div class="text-center stat-label">Num. of Miles Reconnected</div>
        <div class="stat-value">
          <span class="material-icons-outlined text-primary"> water </span>100
        </div>
      </div>
      <div class="charts-wrapper">
        <div class="shadow-2 panel" id="chart-1">
          <div class="panel-upper" style="border-bottom: 1px solid black">
            <div class="text-center stat-label">Dam Details</div>
          </div>
          <div class="panel-lower" style="border-bottom: 1px solid black">
            <div class="text-center stat-label">Removal Status</div>
          </div>
          <div class="panel-lower">
            <div class="text-center stat-label">Miles Reconnected</div>
          </div>
        </div>
        <div class="shadow-2 panel" id="chart-2">
          <div class="text-center stat-label">Ecological Benefits</div>
          <div>
            <q-list>
              <q-item>
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
              </q-item>
            </q-list>
          </div>
        </div>
        <div class="shadow-2 panel" id="chart-3">
          <div class="text-center stat-label">Co-benefits</div>
          <div>
            <q-list>
              <q-item>
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
              </q-item>
            </q-list>
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
import { useMapStore } from '../store/index';
const ms = useMapStore();
function initGauge() {
  const gaugeChart = echarts.init(this.$refs.gauge);

  const option = {
    tooltip: {
      formatter: function (params) {
        let message;

        if (params.data.name == 'Overall') {
          message = 'Total Dams: <br/>' + params.data.value;
        } else if (params.data.name == 'Policy') {
          message = 'Dams Removed: <br/>' + params.data.value;
        }

        return message;
      },
      confine: true,
    },
    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        max: 10,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: false,
          clip: false,
        },
        axisLine: {
          lineStyle: {
            width: 40,
            color: [
              [0.425, '#e7e7e7'],
              [0.575, '#e7e7e7'],
            ],
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: [
          {
            value: 100,
            name: 'Total',
            title: {
              offsetCenter: ['0%', '-50%'],
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ['0%', '-30%'],
              formatter: '{value}',
            },
          },
          {
            value: 25,
            name: 'Removed',
            title: {
              offsetCenter: ['0%', '-5%'],
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ['0%', '10%'],
              formatter: '{value}',
            },
          },
        ],
        title: {
          fontSize: 14,
        },
        detail: {
          width: 50,
          height: 14,
          fontSize: 14,
          color: 'inherit',
        },
      },
    ],
  };

  gaugeChart.setOption(option);
}
</script>
<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 12px;
  padding: 12px;
  height: 100%;
  width: 100%;
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
  grid-template-rows: 1fr 2fr;
  gap: 12px;
  height: 100%;
  box-sizing: border-box;
}

.panel {
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
  padding: 8px;
  overflow-y: auto;
}

/* .panel-upper {
  border-bottom: 1px solid #ddd;
} */

.stat-value {
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
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
