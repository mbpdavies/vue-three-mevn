<template>
  <form @submit.prevent="addUser">
    <input type="text" v-model="name" />
    <input type="number" v-model="age" />
    <input type="submit" value="Add User" />
  </form>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const name = ref("");
    const age = ref();

    const addUser = () => {
      axios
        .post("users", { name: name.value, age: age.value })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
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
