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
      <div class="shadow-2 panel" id="countdown">
        <div class="text-center stat-label">Current Dams Being Removed</div>
        <div class="q-mt-sm">
          <q-scroll-area style="height: 360px; max-width: 100%">
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

        <!-- <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;
          "
        > -->
        <!-- <div
            id="gauge"
            ref="gauge"
            style="width: fit-content; height: inherit"
          ></div> -->
        <!-- </div> -->
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
          <div class="text-center stat-label">Dam Details</div>
        </div>
        <div class="shadow-2 panel" id="chart-2">
          <div class="text-center stat-label">Removal Status</div>
        </div>
        <div class="shadow-2 panel" id="chart-3">
          <div class="text-center stat-label">Num. of Miles Reconnected</div>
        </div>
        <div class="panel-overlay">
          <span>Select a dam to see more details</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
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

.stat-value {
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 100%;
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
  background-color: rgba(128, 128, 128, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  z-index: 10;
}
</style>
