<template>
  <h2 id="header-title">Webinars</h2>
  <div id="webinars">
    <div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/ffBeD0PuFjI"
          />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/L6joFluw_xE"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/emKbdkeVoOQ"
          />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/_SXMMKtfOOg"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/znPdOgUEay8"
          />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/gYU08JrOTps"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/y0pkd5yI4mQ"
          />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/2rhTn9e0YDU"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/r9c5F-tqeio"
          />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/yDwnFn_ctxs"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/n-1aMoPhlnM"
          />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/8sQBaGoHnSQ"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/L6nar23Q4AA"
          />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/Bi4snLkpyXs"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/-T3U-LG-BB4"
          />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/9v6C0tPD5tc"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/91OGKU0vpLY"
          />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/9NGlGlOq4ug"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video :ratio="16 / 9" src="https://videopress.com/v/i3zb04Ae" />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video :ratio="16 / 9" src="https://videopress.com/v/e31mg86O" />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video :ratio="16 / 9" src="" />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video :ratio="16 / 9" src="" />
        </div>
      </div>
      <div class="row">
        <div class="col q-mx-md q-mb-md">
          <q-video :ratio="16 / 9" src="" />
        </div>
        <div class="col q-mx-md q-mb-md">
          <q-video :ratio="16 / 9" src="https://videopress.com/v/If0k5de3" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
#header-title {
  border-left: 4px solid black;
  padding: 1rem;
  background-color: white;
  background-image: linear-gradient(
    45deg,
    white,
    rgb(238, 241, 238),
    rgb(166, 195, 166)
  ) !important;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

@media (max-width: 599px) {
  #webinars .row {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  #webinars .row > .col {
    flex: none;
    width: auto;
  }
}
</style>
