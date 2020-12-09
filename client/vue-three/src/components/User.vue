<template>
  <div>
    <p>{{ myRef }}</p>
    <p>The current count is: {{ count }}</p>
    <button @click="count++">Increase Counter</button>
    <p>The value of the current count plus 10 = {{ calculated }}</p>
    <add-user @added="getUsers" />
    <button @click="getUsers">Get Users</button>
    <div v-for="user in users" :key="user._id">
      <p>{{ user.name }}</p>
      <p>{{ user.age }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import AddUser from "./AddUser.vue";
import axios from "axios";
export default {
  components: {
    AddUser,
  },
  setup() {
    // reactive string
    const myRef = ref("Hello");

    // reactive int
    const count = ref(0);

    // computed property
    const calculated = computed(() => {
      return count.value + 10;
    });

    // get users from API
    const users = ref([]);

    const getUsers = () => {
      axios.get("users").then((res) => {
        users.value = res.data;
      });
    };

    // return state for use within templates
    return {
      myRef,
      count,
      calculated,
      getUsers,
      users,
    };
  },
};
</script>

<style></style>
