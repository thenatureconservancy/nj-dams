<template>
  <div class="q-ma-md shadow-2" style="border-radius: 8px">
    <q-img src="/header-bg.jpg" style="height: 40vh; border-radius: 8px">
      <div class="absolute-full flex flex-center">
        <h1
          class="text-bold banner-title text-center"
          style="margin: auto; width: 100%; padding: 0 16px"
        >
          <span style="font-weight: 300 !important"> WELCOME TO THE </span>
          <br />
          NEW JERSEY STATEWIDE DAM REMOVAL PARTNERSHIP
        </h1>
      </div>
    </q-img>
  </div>

  <div class="row q-mt-xl justify-evenly">
    <div class="col-10 text-subtitle1">
      <div class="q-mb-lg">
        <b>The New Jersey Statewide Dam Removal Partnership (SDRP)</b> is a
        collaboration of nonprofits and government agencies that seeks to
        advance the removal of antiquated, dangerous or ecologically detrimental
        dams. Its members meet quarterly to discuss beneficial dam removal
        projects and to exchange information regarding policy, regulatory
        issues, funding and the practical considerations of dam removal. The
        SDRP also provides information to the public about how dams and dam
        removal may affect their communities and their lives. <br /><br />
        <b>Partners include:</b> American Rivers, Natural Resources Conservation
        Service (NRCS), Sustainable Raritan River Initiative, Raritan Headwaters
        Association, Musconetcong Watershed Association, The Nature Conservancy
        of New Jersey, The Watershed Institute, North Jersey RC&D, US Fish and
        Wildlife Service, NJ Department of Environmental Protection (NJDEP),
        Trout Unlimited
      </div>
      <div class="q-mt-md">
        <h5>
          <span class="material-icons-outlined q-mr-sm text-primary">
            not_listed_location </span
          >Why Remove Dams?
        </h5>
        <div>
          Aging and obsolete dams can pose significant public safety risks due
          to structural deterioration, sediment buildup, and increased flooding
          threats associated with extreme weather events, while also creating
          hazards for recreationists through dangerous hydraulic conditions. In
          New Jersey, dams are regulated by the New Jersey Department of
          Environmental Protection's Bureau of Dam Safety, which oversees
          inspections, permitting, and, in certain emergency situations, may
          order or carry out dam removal to protect life and property. Dam
          removal is often a cost-effective alternative to long-term maintenance
          and can provide substantial environmental benefits by restoring river
          connectivity, improving water quality, enhancing fish migration, and
          creating new recreational opportunities.
        </div>
        <div class="text-center">
          <q-btn
            color="primary"
            class="q-mt-md"
            label="Learn More About Dam Removal"
            @click="navigateToWhyRemove"
          ></q-btn>
        </div>
      </div>

      <div class="q-mt-md">
        <h5>
          <span class="material-icons-outlined q-mr-sm text-primary"> map </span
          >Where are New Jersey's Dams?
        </h5>
        <div>
          Explore the interactive map to see where dams are located, who owns
          them, and which ones are in your backyard. The map highlights dam
          locations throughout the state and provides key information for each
          project, including infrastructure details, stream miles reconnected,
          and geographic context. Each dam record is accompanied by a supporting
          report that offers a deeper look at the environmental, safety,
          economic, and community impacts associated with the project.
        </div>
        <div class="text-center">
          <q-btn
            color="primary"
            class="q-mt-md"
            label="Explore the Interactive Map"
            @click="navigateToWhyRemove"
          ></q-btn>
        </div>
      </div>
      <div class="q-mt-md">
        <h5>
          <span class="material-icons-outlined q-mr-sm text-primary">
            people </span
          >Voices of Dam Removal
        </h5>
        <div>
          <div class="row justify-between">
            <div class="col-6">
              In this short video series, we explore how local governments can
              play a pivotal role in restoring rivers through dam removal. This
              episode highlights the full story of the SDRP and collaborative
              process between government agencies, conservation organizations,
              and community members to remove outdated dams and revitalize
              freshwater ecosystems. <br /><br />Learn how local leaders are
              navigating funding, permitting, and public engagement—and how your
              town can get involved. Whether you're a municipal official,
              planner, or community advocate, this video offers insights and
              inspiration to help you take the next step toward a healthier
              river.

              <div class="text-center">
                <q-btn
                  color="primary"
                  class="q-mt-md"
                  label="View Full Series"
                  @click="navigateToCaseStudies"
                ></q-btn>
              </div>
            </div>
            <div class="col-5">
              <q-video
                :ratio="16 / 11.5"
                src="https://www.youtube.com/embed/8XqTcq08qsQ?si=DOIlK7YtOd1IVu1X"
                style="width: 100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="q-ma-xl text-center">
        <q-btn
          size="lg"
          color="primary"
          class="q-mt-md"
          label="Contact NJ SDRP"
          @click="ms.openContact = !ms.openContact"
        ></q-btn>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useMapStore } from '../../store/index';

const ms = useMapStore();

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

.btn-label {
  height: 150px !important;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.welcome-text {
  font-size: clamp(1.25rem, 4vw, 2rem);
  padding-top: 30px;
}

.banner-title {
  font-size: clamp(1.5rem, 7vw, 3.5rem);
  line-height: 1.2;
}

@media (max-width: 768px) {
  .banner-title {
    font-size: clamp(1.25rem, 5vw, 2rem);
  }
}

@media (max-width: 480px) {
  .banner-title {
    font-size: clamp(1rem, 4.5vw, 1.5rem);
  }

  .welcome-text {
    font-size: clamp(0.875rem, 3.5vw, 1.25rem);
  }
}
</style>
