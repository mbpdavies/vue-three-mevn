<template>
  <form @submit.prevent="addUser">
    <input type="text" v-model="name" />
    <input type="number" v-model="age" />
    <input type="submit" value="Add User" />
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("");
    const age = ref();

    const addUser = () => {
      console.log(name.value + "" + age.value);
    };

    return {
      name,
      age,
      addUser,
    };
  },
};
</script>

<style></style>
