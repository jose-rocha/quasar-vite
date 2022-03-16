<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

onMounted(() => {
  const darkModeIsActive = $q.localStorage.getItem('darkMode');
  if (darkModeIsActive) {
    $q.dark.set(true);
  }
});

</script>
