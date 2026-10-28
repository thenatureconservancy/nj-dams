<template>
  <q-toolbar class="bg-primary text-white shadow-2 sticky-header">
    <!-- <q-btn flat label="New Jersey Dams" style="font-size: 20px" /> -->
    <div
      style="
        font-size: 25px;
        white-space: nowrap;
        flex-shrink: 0;
        cursor: pointer;
      "
      @click="$router.push({ name: 'home' })"
    >
      NEW JERSEY DAMS
    </div>
    <q-space />

    <!-- Full nav: visible on md and larger screens -->
    <div v-if="$q.screen.gt.sm" class="q-gutter-sm">
      <q-btn
        flat
        :to="{ name: 'home' }"
        :active="activeTab === 'home'"
        label="HOME"
      />
      <q-btn-dropdown
        stretch
        flat
        label="DAMS"
        aria-haspopup="menu"
        hover
        fit
        style="min-width: 140px"
      >
        <q-list>
          <q-item clickable v-ripple @click="$router.push('/dams-info')">
            <q-item-section>Dams 101</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/why-remove')">
            <q-item-section
              >Why remove<br />
              Dams?</q-item-section
            >
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/how-remove')">
            <q-item-section
              >How to Remove<br />
              a Dam</q-item-section
            >
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/monitoring')">
            <q-item-section>Monitoring</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/funding')">
            <q-item-section>Funding</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn
        flat
        :to="{ name: 'map' }"
        :active="activeTab === 'map'"
        label="Explore Dams"
      />
      <q-btn
        flat
        :to="{ name: 'dashboard' }"
        :active="activeTab === 'dashboard'"
        label="SDRP Projects"
      />
      <q-btn-dropdown stretch flat label="RESOURCES" hover aria-haspopup="menu">
        <q-list>
          <q-item clickable v-ripple @click="$router.push('/resources')">
            <q-item-section>References</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/case-studies')">
            <q-item-section>Case Studies</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/news')">
            <q-item-section>In the News</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/videos')">
            <q-item-section>Videos</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            @click="$router.push('/reports-publications')"
          >
            <q-item-section>Reports and<br />Publications</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/data')">
            <q-item-section>Data</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn
        flat
        :to="{ name: 'faq' }"
        :active="activeTab === 'faq'"
        label="FAQ"
      />
      <q-btn
        flat
        :active="activeTab === 'contact'"
        label="Contact"
        @click="ms.openContact = true"
      />
    </div>

    <!-- Hamburger menu: visible on sm and smaller screens -->
    <q-btn v-else flat icon="menu">
      <q-menu>
        <q-list style="min-width: 200px">
          <q-item clickable v-close-popup :to="{ name: 'home' }">
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-separator />
          <q-item-label header>Dams</q-item-label>
          <q-item clickable v-close-popup @click="$router.push('/dams-info')">
            <q-item-section>Dams 101</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="$router.push('/why-remove')">
            <q-item-section>Why Remove Dams?</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="$router.push('/how-remove')">
            <q-item-section>How to Remove a Dam</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup :to="{ name: 'map' }">
            <q-item-section>Explore Dams</q-item-section>
          </q-item>
          <q-item clickable v-close-popup :to="{ name: 'dashboard' }">
            <q-item-section>Monitor Dams</q-item-section>
          </q-item>
          <q-separator />
          <q-item-label header>Resources</q-item-label>
          <q-item clickable v-close-popup @click="$router.push('/resources')">
            <q-item-section>Resources</q-item-section>
          </q-item>
          <q-item
            clickable
            v-close-popup
            @click="$router.push('/case-studies')"
          >
            <q-item-section>Case Studies</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="$router.push('/news')">
            <q-item-section>In the News</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup :to="{ name: 'faq' }">
            <q-item-section>FAQ</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="ms.openContact = true">
            <q-item-section>Contact</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-toolbar>
  <div id="top-btn" v-show="showScrollBtn">
    <q-btn color="primary" round icon="north" @click="scrollToTop"></q-btn>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useMapStore } from '../store/index';

const ms = useMapStore();
const route = useRoute();
const activeTab = ref('home');
const showScrollBtn = ref(false);

// Update active tab based on current route
watch(
  () => route.name,
  (newRouteName) => {
    activeTab.value = newRouteName || 'home';
  },
  { immediate: true },
);

// Scroll to top of page with smooth animation
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Handle scroll visibility
const handleScroll = () => {
  showScrollBtn.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

#top-btn {
  position: fixed;
  bottom: 15px;
  right: 15px;
  display: block;
}
</style>
