<template>
  <v-app>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="true"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} 兵庫県 新型コロナウイルスまとめサイトプロジェクト</span>
    </v-footer>
  </v-app>
</template>
