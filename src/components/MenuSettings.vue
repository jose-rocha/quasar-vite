<template>
  <div class="q-pa-md">
    <q-btn color="primary" round >
      <q-icon name="mdi-cog" size="2em"/>
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle
              v-model="darkMode"
              :label="darkMode === true ? 'Dark' : 'Light'"
              checked-icon='mdi-moon-waxing-crescent'
              unchecked-icon="mdi-white-balance-sunny"
             />
             <span>hora: {{times}} </span>
             <span>{{user.email}}</span>
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="../assets/user.jpg">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">{{user.nameFull}}</div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>

<script setup>
import {
  ref, watch, onMounted, computed,
} from 'vue';
import { useQuasar } from 'quasar';
import { useStoreUser } from 'src/stores/userData';

const store = useStoreUser();
const user = store.$state;
const darkMode = ref(false);
const $q = useQuasar();
const date = ref(new Date());
const times = computed(
  () => `${date.value.getHours().toString().padStart(2, '0')}:
  ${date.value.getMinutes().toString().padStart(2, '0')}:
  ${date.value.getSeconds().toString().padStart(2, '0')}`,
);

setInterval(() => {
  date.value = new Date();
}, 1000);

// watch(darkMode, (dark) => console.log('darkMode', dark));
watch(darkMode, (darkSet) => {
  $q.dark.set(darkSet);
  $q.localStorage.set('darkMode', darkSet);
});

onMounted(() => {
  const darkModeIsActive = $q.localStorage.getItem('darkMode');
  if (darkModeIsActive) {
    darkMode.value = true;
  }
});

</script>
