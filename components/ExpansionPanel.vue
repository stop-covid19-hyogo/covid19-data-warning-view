<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ title }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <slot name="content" />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
})
</script>
