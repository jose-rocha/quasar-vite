<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="height:100%; width: 100%;">
        <q-tab-panels v-model="setTabs.tabSelected" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>

        <q-separator />

        <q-footer v-if="$q.screen.lt.sm">
          <q-tabs
            v-model="setTabs.tabSelected"
            dense
            align="justify"
            narrow-indicator
            active-color="green-5"
            indicator-color="green-5"
            class="text-black"
          >
            <q-tab  name="mails" icon="mail" label="Mails" />
                <q-tab  name="alarms" icon="alarm" label="Alarms" />
                <q-tab  name="movies" icon="movie" label="Movies" />
          </q-tabs>
        </q-footer>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
import { useStoreTabs } from 'src/stores/tabs';
// import { computed } from 'vue';

const store = useStoreTabs();
const setTabs = store.$state;

// const tab = ref('mails');
</script>
