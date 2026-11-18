<template>
  <div
    class="text-white q-mt-lg"
    style="width: 100%; height: 100px; background-color: #333"
  >
    <!-- <div style="width: fit-content">
      New Jersey Statewide Dam Removal Parntership
    </div> -->
    <!-- <div class="row q-ma-md">
      <div class="col-9">
        <div class="row justify-around">
          <div class="col">Home</div>
          <div class="col">
            Dams 101 <br />Why Remove Dams? <br />How to Remove Dams?
            <br />Monitoring <br />Funding
          </div>
          <div class="col">Explore Dams <br />SDRP Projects</div>
          <div class="col">
            References <br />Case Studies <br />In the News <br />Videos
            <br />Webinars <br />Reports and Publications <br />Data
          </div>
          <div class="col">FAQ</div>
        </div>
      </div>
      <div class="col-3"> -->
    <div
      v-if="ms.tab == 'Home'"
      class="text-center"
      style="align-items: center; justify-content: center"
    >
      <q-btn
        size="lg"
        color="white"
        text-color="black"
        class="q-mt-md"
        label="Contact NJ SDRP"
        icon="send"
        @click="ms.openContact = !ms.openContact"
      ></q-btn>
    </div>
    <!-- </div>
    </div> -->
  </div>
</template>
<script setup>
import { useMapStore } from "../store/index";
const ms = useMapStore();
</script>
<style></style>
