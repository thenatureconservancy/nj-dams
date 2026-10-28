<template>
  <div
    class="q-pa-md"
    style="background-color: white; width: 225px; height: fit-content"
  >
    <!-- <div class="q-mb-md" style="font-size: 18px">Legend</div>
    <hr /> -->
    <!-- Dams -->
    <div>
      <div class="q-mb-md">Prioritization for Ecologic Gains</div>
      <div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #c46a54;
              border: 1px solid black;
              height: 16px;
              width: 16px;
              border-radius: 50px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Highest</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #f0c419;
              border: 1px solid black;
              height: 14px;
              width: 14px;
              border-radius: 50px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Very High</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #9be53f;
              border: 1px solid black;
              height: 12px;
              width: 12px;
              border-radius: 50px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">High</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #73c9a5;
              border: 1px solid black;
              height: 10px;
              width: 10px;
              border-radius: 50px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Medium</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #142a78;
              border: 1px solid black;
              height: 8px;
              width: 8px;
              border-radius: 50px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Low</div>
        </div>
      </div>
    </div>

    <!-- Waterbodies -->
    <div v-if="ms.waterbodiesVis">
      <hr />
      <div class="q-my-md">Waterbodies</div>
      <div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #a8dbf2;
              border: 1px solid black;
              height: 16px;
              width: 16px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Lake, Pond, Reservoir</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #1f78b4;
              border: 1px solid black;
              height: 16px;
              width: 16px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">River, Stream, Spillway</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              width: 16px;
              height: 16px;
              border: 1px solid blue;
              background-color: lightgrey;
              background-image: radial-gradient(
                circle,
                #0066ff 35%,
                transparent 40%
              );
              background-size: 3px 3px;
            "
          ></div>
          <div style="line-height: 1">Inundation Area</div>
        </div>
      </div>
    </div>

    <!-- Tribal Lands -->

    <!-- Overburdened Communities -->
    <div v-if="ms.overburdenedVis">
      <hr />
      <div class="q-my-md">Overburdened Communities</div>
      <div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #ecdeb3;
              border: 1px solid black;
              height: 16px;
              width: 16px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Adjacent</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #daffb5;
              border: 1px solid black;
              height: 16px;
              width: 16px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Limited English</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #fcf5de;
              border: 1px solid black;
              height: 16px;
              width: 16px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Low Income</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #c1c6fa;
              border: 1px solid black;
              height: 16px;
              width: 16px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Low Income & Limited English</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #a0b8ff;
              border: 1px solid black;
              height: 16px;
              width: 16px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Low Income & Minority</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #8a92b9;
              border: 1px solid black;
              height: 16px;
              width: 16px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">
            Low Income, Minority, and Limited English
          </div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #f5ffdd;
              border: 1px solid black;
              height: 16px;
              width: 16px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Minority</div>
        </div>
        <div
          class="q-mb-md"
          style="display: flex; align-items: center; gap: 12px"
        >
          <div
            style="
              background-color: #fadedf;
              border: 1px solid black;
              height: 16px;
              width: 16px;
              flex-shrink: 0;
            "
          ></div>
          <div style="line-height: 1">Minority & Limited English</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMapStore } from '../store/index';
const ms = useMapStore();
</script>
