<template>
  <div>
    <v-expansion-panels accordion multiple>
      <expansion-panel title="未修正の警告">
        <template v-slot:content>
          <v-expansion-panels accordion multiple flat hover>
            <expansion-panel v-for="item in notFixedItems" :key="item.title" :title="item.title">
              <template v-slot:content>
                <warning-card
                  v-for="warning in item.warnings"
                  :key="warning.message"
                  :warning-message="warning.message"
                />
              </template>
            </expansion-panel>
          </v-expansion-panels>
        </template>
      </expansion-panel>
      <expansion-panel title="修正済みの警告">
        <template v-slot:content>
          <warning-card
            v-for="warning in fixedWarnings"
            :key="warning.message"
            :warning-message="warning.message"
          />
        </template>
      </expansion-panel>
    </v-expansion-panels>
    <v-dialog v-model="failed" flat>
      <v-alert type="error">
        データの取得に失敗しました。
      </v-alert>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { dataType, extractDataByFixed, extractDataByFile } from '@/utils/dataTypes'

export default Vue.extend({
  data() {
    const fixedWarnings: dataType[] = []
    return {
      fixedWarnings,
      files: ['patients', 'inspections', 'summary'],
      failed: false,
      notFixedItems: [
        {
          title: '陽性患者の属性',
          warnings: [] as dataType[],
        },
        {
          title: '検査状況',
          warnings: [] as dataType[],
        },
        {
          title: '検査陽性者の状況',
          warnings: [] as dataType[],
        },
      ]
    }
  },
  created() {
    this.getWarningsFromAPI()
  },
  methods: {
    getWarningsFromAPI() {
      fetch('https://stop-covid19-hyogo.github.io/covid19-scraping/open_data_warnings.json').then(response => response.json())
        .then((responseJson: dataType[]) => {
          this.fixedWarnings = extractDataByFixed(responseJson)
          const notFixedWarnings = extractDataByFixed(responseJson, false)
          this.notFixedItems.forEach((d, i) => {
            d.warnings = extractDataByFile(notFixedWarnings, this.files[i])
          })
        })
        .catch(_ => this.failed = true)
    },
  },
})
</script>
