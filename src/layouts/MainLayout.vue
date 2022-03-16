<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <!-- <div><MenuUser/></div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label header >
          <q-item-label header class="flex  justify-center" >
          <div class="flex" style="height: 30px;">
          <!-- <q-card class="full-width flex justify-center items-start"> -->
          <router-link
            :to="{name: 'tabs'}"
            style="text-decoration:none; font-weight: bold;
            font-size: 20px;"
            class="text-green q-mr-sm"
          >
          <q-icon name="mdi-tablet-dashboard" size="2em" style="margin-right: 20px;" />
            Ir para Tabs
          </router-link>
          <!-- </q-card> -->
        </div>
        </q-item-label>
        </q-item-label>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
// import MenuUser from 'src/components/MenuUser.vue';

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

</script>
