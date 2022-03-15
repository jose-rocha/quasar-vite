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
          v-if="$q.screen.gt.xs"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>seus score é: {{user.counter}}, Bem vindo: {{user.nameFull}}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>
        <div class="flex" style="height: 30px;">
          <q-card class="full-width flex justify-center items-center">
          <router-link
            :to="{name: 'tabs'}"
            style="text-decoration:none; font-weight: bold; font-size: 20px;"
          >
          <q-icon name="mdi-arrow-collapse-right" size="1.5em" />
          Ir para Tabs
          </router-link>
          </q-card>
        </div>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreUser } from 'src/stores/userData';

const leftDrawerOpen = ref(false);
const store = useStoreUser();
const user = store.$state;
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

</script>
