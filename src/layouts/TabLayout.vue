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

        <div>seus score é: {{user.counter}}, Bem vindo: {{user.nameFull}}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      show-if-above
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>
        <div v-if="$q.screen.gt.xs">
          <q-tabs
              v-model="setTabs.tabSelected"
              dense
              class="bg-grey-3"
              align="justify"
              narrow-indicator
              active-color="green-5"
              indicator-color="green-5"
              vertical
            >

              <q-tab  name="mails">
                <div class="flex items-center"
                    style="justify-content: center; width: 300px;
                    height: 100%; padding-right: 80px;"
                >
                  <q-icon name="mail" size="2rem" class="q-mr-xl"/>
                  <div>Mails</div>
                </div>
              </q-tab>

              <q-tab  name="alarms" >
                <div class="flex items-center"
                    style="justify-content: center; width: 300px;
                    height: 100%; padding-right: 70px;">
                  <q-icon name="alarm"  size="2rem" class="q-mr-xl"/>
                  <div>Alarms</div>
                </div>
              </q-tab>

              <q-tab  name="movies" >
                <div class="flex items-center"
                    style="justify-content: center; width: 300px;
                    height: 100%; padding-right: 70px;">
                    <q-icon name="movie"  size="2rem" class="q-mr-xl"/>
                    <div>Movies</div>
                </div>
              </q-tab>

            </q-tabs>
        </div>
        <div class="flex" style="height: 30px;">
          <q-card class="full-width flex justify-center items-start">
          <router-link
            :to="{name: 'home'}"
            style="text-decoration:none; font-weight: bold; font-size: 20px;"
          >
          <q-icon name="mdi-home" size="1.5em" style="margin-right: 20px;" />
          Ir para Home
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
import { useStoreTabs } from 'src/stores/tabs';

const leftDrawerOpen = ref(false);
const store = useStoreUser();
const user = store.$state;
const storeTabs = useStoreTabs();
const setTabs = storeTabs.$state;
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

</script>
