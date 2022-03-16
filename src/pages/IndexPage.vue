<template>
  <q-page class="flex column">
    <div class="flex justify-end">
        <MenuSettings/>
    </div>
    <div class="flex column">
      <h1>{{user.nameUser}}</h1>
      <h1>{{user.sobrenome}}</h1>
      <div>
        <q-btn class="bg-primary" @click="increase">increase</q-btn>
        {{user.counter}}
        <q-btn class="bg-primary" @click="decrease">decrease</q-btn>
      </div>
      <!-- <q-input v-model="user"/> -->
    </div>
  </q-page>
</template>

<script setup>
import { useStoreUser } from 'src/stores/userData';
import MenuSettings from 'src/components/MenuSettings.vue';

const store = useStoreUser();
const user = store.$state;

const increase = () => { user.counter += 1; };
const decrease = () => {
  if (user.counter === 0) {
    user.counter += user.counter;
    return;
  } user.counter -= 1;
};

</script>

<style scoped>
  button {
    margin: 5px;
  }
</style>
