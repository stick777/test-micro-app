<template>
  <ALayout :style="{ minHeight: '100vh' }">
    <ALayoutSider>
      <Sidebar />
    </ALayoutSider>
    <ALayout>
      <ALayoutHeader>
        <Header />
      </ALayoutHeader>
      <ALayoutContent>
        <Container />
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>

<script setup>
  import { ref } from 'vue'

  import Header from './layout/header/index.vue'
  import Sidebar from './layout/sidebar/index.vue'
  import Container from './layout/mainContainer/index.vue'
</script>
