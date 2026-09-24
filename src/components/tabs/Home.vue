<template>
  <div
    class="row q-mb-lg bg-primary"
    style="
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 80%;
      height: 40vh;
    "
  >
    <div
      class="col text-center text-white"
      style="display: flex; align-items: center; justify-content: center"
    >
      <div
        style="
          background-color: rgb(0, 0, 0, 0.5);
          height: 40vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        "
      >
        <span style="font-size: 30px; padding-top: 30px">WELCOME TO THE</span>
        <h1 class="text-bold" style="margin: auto; width: fit-content">
          NEW JERSEY STATEWIDE DAM REMOVAL PARTNERSHIP
        </h1>
      </div>
    </div>
  </div>

  <div class="row q-mt-md" style="gap: 50px !important">
    <div class="col-5 text-subtitle1">
      <b>The New Jersey Statewide Dam Removal Partnership (SDRP)</b> is a
      collaboration of nonprofits and government agencies that seeks to advance
      the removal of antiquated, dangerous or ecologically detrimental dams. Its
      members meet quarterly to discuss beneficial dam removal projects and to
      exchange information regarding policy, regulatory issues, funding and the
      practical considerations of dam removal. The SDRP also provides
      information to the public about how dams and dam removal may affect their
      communities and their lives. <br /><br />
      <b>Partners include:</b> American Rivers, Natural Resources Conservation
      Service (NRCS), Sustainable Raritan River Initiative, Raritan Headwaters
      Association, Musconetcong Watershed Association, The Nature Conservancy of
      New Jersey, The Watershed Institute, North Jersey RC&D, US Fish and
      Wildlife Service, NJ Department of Environmental Protection (NJDEP), Trout
      Unlimited
    </div>
    <div class="col">
      <div class="row q-col-gutter-md" style="height: 100%">
        <div class="col-6 action-btn" @click="navigateToWhyRemove">
          <q-img src="removal-btn.png">
            <div
              class="absolute-full text-bold flex flex-center"
              style="font-size: xx-large"
            >
              Why Remove Dams?
            </div>
          </q-img>
        </div>
        <div class="col-6 action-btn" @click="navigateToCaseStudies">
          <q-img src="studies-btn.png">
            <div
              class="absolute-full text-bold flex flex-center"
              style="font-size: xx-large"
            >
              Case Studies
            </div>
          </q-img>
        </div>
        <div class="col-6 action-btn" @click="navigateToMapDashboard">
          <q-img src="map-btn.png">
            <div
              class="absolute-full text-bold flex flex-center"
              style="font-size: xx-large"
            >
              Map & Dashboard
            </div>
          </q-img>
        </div>
        <div class="col-6 action-btn" @click="navigateToContact">
          <q-img src="contact-btn.png">
            <div
              class="absolute-full text-bold flex flex-center"
              style="font-size: xx-large"
            >
              Contact
            </div>
          </q-img>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToWhyRemove = () => {
  router.push({ name: 'why-remove' });
};

const navigateToCaseStudies = () => {
  router.push({ name: 'case-studies' });
};

const navigateToMapDashboard = () => {
  router.push({ name: 'map' });
};

const navigateToContact = () => {
  router.push({ name: 'contact' });
};
</script>
<style scoped>
.col-6 {
  min-height: 190px;
}

:deep(.q-img) {
  height: 190px;
}

.action-btn {
  cursor: pointer;
}
</style>
