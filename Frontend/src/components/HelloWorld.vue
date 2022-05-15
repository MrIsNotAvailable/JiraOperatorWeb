<script lang="ts">
/**
 * @Author: Heliang
 * @Date:   2022-05-14 14:01:21
 * @Last Modified by:   Heliang
 * @Last Modified time: 2022-05-14 19:50:25
 */
</script>
<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
