<template>
  <q-toolbar class="bg-primary text-white shadow-2 sticky-header">
    <!-- <q-btn flat label="New Jersey Dams" style="font-size: 20px" /> -->
    <div style="font-size: 25px">NEW JERSEY DAMS</div>
    <q-space />

    <div class="q-gutter-sm">
      <q-btn
        flat
        :to="{ name: 'home' }"
        :active="activeTab === 'home'"
        label="HOME"
      />
      <q-btn
        flat
        :to="{ name: 'faq' }"
        :active="activeTab === 'faq'"
        label="FAQ"
      />
      <q-btn-dropdown stretch flat label="DAMS">
        <q-list>
          <q-item clickable v-ripple @click="$router.push('/dams-info')">
            <q-item-section>Dams 101</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/why-remove')">
            <q-item-section>Why remove Dams?</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/how-remove')">
            <q-item-section>How to Remove a Dam</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn
        flat
        :to="{ name: 'case-studies' }"
        :active="activeTab === 'case-studies'"
        label="CASE STUDIES"
      />
      <q-btn
        flat
        :to="{ name: 'resources' }"
        :active="activeTab === 'resources'"
        label="RESOURCES"
      />
      <!-- <q-btn-dropdown stretch flat label="RESOURCES">
        <q-list>
          <q-item clickable v-ripple @click="$router.push('/resources')">
            <q-item-section>Resources</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown> -->
      <q-btn
        flat
        :to="{ name: 'news' }"
        :active="activeTab === 'news'"
        label="IN THE NEWS"
      />
      <q-btn
        flat
        :to="{ name: 'map' }"
        :active="activeTab === 'map'"
        label="MAP & DASHBOARD"
      />
      <q-btn
        flat
        :to="{ name: 'contact' }"
        :active="activeTab === 'contact'"
        label="Contact"
      />
    </div>
  </q-toolbar>
  <div id="top-btn" v-show="showScrollBtn">
    <q-btn color="primary" round icon="north" @click="scrollToTop"></q-btn>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

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
