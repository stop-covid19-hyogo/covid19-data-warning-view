<template>
  <v-card outlined class="card">
    <p class="content">{{ warningMessage }}</p>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    warningMessage: {
      type: String,
      required: true,
      default: '',
    }
  },
})
</script>

<style lang="scss">
.card {
  margin: 5px;
  .content {
    margin-left: 10px;
    margin-top: 17px;
  }
}
</style>
