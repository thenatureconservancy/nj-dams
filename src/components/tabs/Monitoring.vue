<template>
  <div>
    <h2 id="header-title">Monitoring</h2>
    <div id="monitoring" class="q-my-md">
      <div>
        Monitoring should be a key component of any dam removal process, both to
        ensure that project goals and objectives were met and to improve the
        practice of dam removal. The project team should develop a monitoring
        plan that covers pre‐project monitoring, monitoring during construction
        and post-project monitoring. A project might be monitored for changes in
        fish population, temperature, dissolved oxygen, or physical changes to
        the stream channel among other things. Many permits will also require
        some form of project monitoring.
        <br /><br />
        There are many documents which describe methods for monitoring, for
        example, the Gulf of Maine Council on the Marine Environment developed a
        handbook titled, “Stream Barrier and Removal Guide.” This guide provides
        pre‐ and post‐dam removal monitoring guidelines that provide methods to
        assess impacts on sediment transport, stream channel morphology, fish
        passage, macroinvertebrates, water quality, and riparian vegetative
        communities.
        <a
          href="https://www.gulfofmaine.org/streambarrierremoval/Stream-Barrier-Removal-Monitoring-Guide-12-19-07.pdf"
          target="_blank"
          >The guide is available online.</a
        >
        <br /><br />
        In addition to the guidance available online, the Monitoring Partners of
        the Statewide Dam Removal Partnership (SDRP) have created a
        comprehensive monitoring guide, which includes a universal suite of
        monitoring parameters (aka metrics) specific to dam removal monitoring.
        The guidance below is designed to help organize monitoring efforts
        needed to achieve dam removal project goals. Within each of the links
        below, you will find information about individual metrics, such as their
        importance to dam removal monitoring, defined monitoring goals (required
        by permit, state surface water quality standards, project and/or
        research related) and acceptable methodology for data collection.
        Depending on the project, monitoring may be required by permit to assess
        water quality parameters like sediment, and/or turbidity or for
        biological assessments of fish species and/or mussel populations.
        Chemical, physical or biological monitoring can also be used to
        determine water quality impairments and compared against the
        <a
          href="https://dep.nj.gov/wp-content/uploads/rules/rules/njac7_9b.pdf"
          target="_blank"
          >state’s surface water quality standards</a
        >. Monitoring efforts will also allow project managers to determine pre
        existing water quality conditions and document improvements to water
        quality post removal. When funding and capacity allow, research related
        monitoring can be a great way to evaluate the long term ecological,
        sociological and economic benefits of your project. <br /><br />
        The guidance to the right is intended to provide the basic information
        project managers will need to begin dam removal project monitoring. A
        number of useful reference links for individual metrics are included and
        provide more information for individual metrics. Furthermore, The SDRP
        Monitoring Partners are here to help. If you are interested in or
        required to monitor your dam removal project, please contact us with
        your questions via the Contact page.
        <br /><br />
        Disclaimer: The information presented here is a suggested guide to
        monitoring and is to be used as such. Please reach out to regulators
        early about any additional regulatory requirements, including any
        required methods.
        <br /><br />
        <i>Click on the photos below to learn more about each topic</i>
      </div>
      <div>
        <div class="photo-gallery">
          <div
            v-for="photo in monitoringTopics"
            :key="photo.name"
            class="gallery-item"
            @click="selectPhoto(photo)"
          >
            <div class="photo-container">
              <img
                :src="`/monitoring/${photo.name}`"
                :alt="photo.caption"
                class="gallery-photo"
              />
            </div>
            <div class="photo-caption">{{ photo.caption }}</div>
          </div>
        </div>
        <q-dialog v-model="openMonitorFactsheet">
          <q-card>
            <q-card-section>
              <img
                v-if="selectedPhoto"
                :src="`/monitoring/${selectedPhoto.factsheet}`"
                :alt="selectedPhoto.caption"
                style="width: 100%; height: auto; border-radius: 4px"
              />
            </q-card-section>
            <div class="text-center q-my-md">
              <q-btn
                label="Learn More"
                color="primary"
                :href="selectedPhoto.link"
                target="_blank"
              />
            </div>
          </q-card>
        </q-dialog>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const monitoringTopics = [
  {
    name: 'floodplain-restoration-survivability.jpg',
    factsheet: 'floodplain-restoration-factsheet.png',
    caption: 'Floodplain Restoration and Survivability',
    link: 'https://drive.google.com/file/d/1Qvd8WtwGzZLtgzxnx2TGeB0QmeUvXYvm/view',
  },
  {
    name: 'fish_nj-fish_wildlife-2.webp',
    factsheet: 'fish-monitoring-factsheet.png',
    caption: 'Fish Monitoring',
    link: 'https://drive.google.com/file/d/1nKJ5QR9cnzUyojKMiGOFl74vO5F7SSX7/view',
  },
  {
    name: 'turbidity.webp',
    factsheet: 'turbidity-factsheet.png',
    caption: 'Turbidity',
    link: 'https://drive.google.com/file/d/16P_fIk92bpnGVOKGzadIeqzDC3_Ih1qa/view',
  },
  {
    name: 'temperature_tnc-1.webp',
    factsheet: 'temperature-factsheet.png',
    caption: 'Temperature',
    link: 'https://drive.google.com/file/d/1vEypm5u-G-9i0uBR8l-RxAEJ6JUU1TLo/view',
  },
  {
    name: 'recreation_tnc-1.webp',
    factsheet: 'recreation-factsheet.png',
    caption: 'Recreation',
    link: 'https://drive.google.com/file/d/1wYvJiFPtRFGOgdZfHflIS18rLMFkoFZe/view',
  },
  {
    name: 'chemistry-loggers-waterquality-2.webp',
    factsheet: 'chemistry-factsheet.png',
    caption: 'Chemistry',
    link: 'https://drive.google.com/file/d/1_z7DflCaIRFKGSpJPYb_Na2Hw7jz0hbU/view',
  },
  {
    name: 'benthic-invertebrates.webp',
    factsheet: 'benthic-environments-factsheet.png',
    caption: 'Benthic Invertebrates',
    link: 'https://drive.google.com/file/d/1nFeu7nJtC39B5XCBHdctl5pqJ0pm-Xml/view',
  },
  {
    name: 'presence-of-invasive-species.webp',
    factsheet: 'invasive-species-factsheet.png',
    caption: 'Invasive Species',
    link: 'https://drive.google.com/file/d/1QoZfbUpYJ8t8LxuH5pBtRLfu9NlPeOgr/view',
  },
  {
    name: '12-mussels_relocation-1.webp',
    factsheet: 'mussels-factsheet.png',
    caption: 'Mussels',
    link: 'https://drive.google.com/file/d/179wIoLvk_BkrVpJURgxrhK4MNqUf2zyi/view',
  },
  {
    name: 'habitat-assessment.webp',
    factsheet: 'habitat-assessment-factsheet.png',
    caption: 'Habitat Assessment',
    link: 'https://drive.google.com/file/d/1S_YnaTnZbZRSmGmdg2x6nvBctJMTNr-g/view',
  },
  {
    name: 'picture1.webp',
    factsheet: '',
    caption: 'Sediment & Geomorphology',
    link: '',
  },
  {
    name: 'flooding-hydrology.webp',
    factsheet: '',
    caption: 'Flooding & Hydrology',
    link: '',
  },
];

import { ref } from 'vue';

const selectedPhoto = ref(null);
const openMonitorFactsheet = ref(false);

function selectPhoto(photo) {
  selectedPhoto.value = photo;
  openMonitorFactsheet.value = true;
}
</script>
<style scoped>
#header-title {
  border-left: 4px solid black;
  padding-left: 1rem;
}

.photo-gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px 0;
}

.gallery-item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.photo-container {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.gallery-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-photo:hover {
  transform: scale(1.05);
}

.photo-caption {
  margin-top: 12px;
  min-height: 40px;
  padding: 8px;
  text-align: center;
  font-size: 14px;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .photo-gallery {
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }
}

@media (max-width: 768px) {
  .photo-gallery {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .photo-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .photo-caption {
    font-size: 12px;
  }
}

@media (max-width: 320px) {
  .photo-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
