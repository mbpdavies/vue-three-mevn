<template>
  <p>{{ myRef }}</p>
  <p>The current count is: {{ count }}</p>
  <button @click="count++">Increase Counter</button>
  <p>The value of the current count plus 10 = {{ calculated }}</p>
  <add-user />
</template>

<script>
import { ref, computed } from "vue";
import AddUser from "./AddUser.vue";
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

    // return state for use within templates
    return {
      myRef,
      count,
      calculated,
    };
  },
};
</script>

<style></style>
