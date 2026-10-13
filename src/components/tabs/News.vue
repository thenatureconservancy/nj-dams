<template>
  <div id="header-title" class="shadow-1 text-center text-h5 q-mb-lg">
    In the News
  </div>
  <div>
    <div>
      <q-list dense padding>
        <q-item clickable v-ripple @click="window.open()">
          <q-item-section
            >Headgates Dam: A Story of Past and Future Fish Passage? (August
            21,2020)</q-item-section
          >
        </q-item>
        <q-item clickable v-ripple @click="window.open()">
          <q-item-section
            >Remove a Dam And Bend The Curve For Fish (July 16,
            2019)</q-item-section
          >
        </q-item>
        <q-item clickable v-ripple @click="window.open()">
          <q-item-section
            >In an Era of Extreme Weather, Concerns Grow Over Dam Safety (July
            9, 2019)</q-item-section
          >
        </q-item>
        <q-item clickable v-ripple @click="window.open()">
          <q-item-section
            >Twenty Years of Dam Removal Successes- And What’s Up Next (June 27,
            2019)</q-item-section
          >
        </q-item>
        <q-item clickable v-ripple @click="window.open()">
          <q-item-section
            >The Unexpectedly Large Impacts of Small Hydropower (August 10,
            2018)</q-item-section
          >
        </q-item>
        <q-item clickable v-ripple @click="window.open()">
          <q-item-section
            >Free Rivers: The State of Dam Removals in The United States
            (February 2022)</q-item-section
          >
        </q-item>
        <q-item clickable v-ripple @click="window.open()">
          <q-item-section
            >Low Head Dam Safety Awareness Month (April 2022)</q-item-section
          >
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<style scoped>
#header-title {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5; /* Light gray background for the header */
  border-radius: 4px;
}
</style>
