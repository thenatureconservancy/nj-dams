<template>
  <h2 id="header-title">Case Studies</h2>
  <div>
    <div class="text-bold">Fact Sheets</div>
    <div class="photo-gallery">
      <div
        v-for="photo in caseStudyPhotos"
        :key="photo.name"
        class="gallery-item"
        @click="selectPhoto(photo)"
      >
        <div class="photo-container">
          <img
            :src="`/caseStudies/${photo.name}`"
            :alt="photo.caption"
            class="gallery-photo"
          />
        </div>
        <div class="photo-caption">{{ photo.caption }}</div>
      </div>
    </div>
  </div>
  <q-dialog v-model="openDamFactsheet">
    <q-card>
      <q-card-section>
        <img
          v-if="selectedPhoto"
          :src="`/caseStudies/${selectedPhoto.factsheet}`"
          :alt="selectedPhoto.caption"
          style="width: 100%; height: auto; border-radius: 4px"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
  <div>
    <!-- <div class="text-bold q-mb-md">Dam Removals in Action</div> -->
    <!-- <div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/xGpRT1IgUPE"
          />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/DzIcjCRXXSA"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/liJffLBfUoU"
          />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/ZvRHQCXLwyg"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/cCQiaT1KcPo"
          />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPhoto: null,
      openDamFactsheet: false,
      caseStudyPhotos: [
        {
          name: 'finesville_3-sm.jpg',
          factsheet: 'finesville_dam_factsheet.webp',
          caption: 'Finesville Dam, Musconetcong River',
        },
        {
          name: 'hughesville.webp',
          factsheet: 'hughesville_dam_factsheet.jpg',
          caption: 'Hughesville Dam, Musconetcong River',
        },
        {
          name: 'robert-street-dam-1.jpg',
          factsheet: 'robert_st_dam_factsheet.png',
          caption: 'Robert Street Dam, Raritan River',
        },
        {
          name: 'weston_mill.jpg',
          factsheet: 'weston_mill_dam_factsheet.png',
          caption: 'Weston Mil Dam, Millstone River',
        },
        {
          name: 'nevius_street.jpg',
          factsheet: 'nevius_street_dam_factsheet.webp',
          caption: 'Nevius Street Dam, Raritan River',
        },
        {
          name: 'columbia.png',
          factsheet: 'columbia_dam_factsheet.png',
          caption: 'Columbia Lake Dam, Paulins Kill River',
        },
        {
          name: 'calco_dam.jpg',
          factsheet: 'calco_dam_factsheet.png',
          caption: 'Calco Dam',
        },
        {
          name: 'cedar_grove_dam.webp',
          factsheet: 'cedar_grove_dam_factsheet.png',
          caption: 'Cedar Grove Dam, Pequest River',
        },
        {
          name: 'county_line_dam.webp',
          factsheet: 'County_line_dam_factsheet.png',
          caption: 'County Line Dam, Paulins Kill River',
        },
        {
          name: 'no_name_dam.webp',
          factsheet: 'no_name_dam_factsheet.png',
          caption: '"No Name" Dam, Pequest River',
        },
      ],
    };
  },
  methods: {
    selectPhoto(photo) {
      this.selectedPhoto = photo;
      this.openDamFactsheet = true;
    },
  },
};
</script>

<style scoped>
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
#header-title {
  border-left: 4px solid black;
  padding-left: 1rem;
}
</style>
