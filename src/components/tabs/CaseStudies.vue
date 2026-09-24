<template>
  <div class="text-center text-h5 q-mb-md">Case Studies</div>
  <div>
    <div class="text-bold">Fact Sheets</div>
    <div class="photo-gallery">
      <div v-for="photo in 10" :key="photo" class="gallery-item">
        <div class="photo-container">
          <img
            :src="`/path/to/photo-${photo}.jpg`"
            :alt="`Photo ${photo}`"
            class="gallery-photo"
          />
        </div>
        <div class="photo-caption"></div>
      </div>
    </div>
  </div>
  <div>
    <div class="text-bold q-mb-md">Videos on New Jersey Dam Removals</div>
    <div>
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
      <!-- <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/cCQiaT1KcPo"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>

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
