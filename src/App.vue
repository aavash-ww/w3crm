<template>
  <Layout>
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <h1>Loading....</h1>
      </template>
    </Suspense>
  </Layout>
</template>


<script>
import Layout from './Layout.vue';

export default {
  components: {
    Layout

  }
}
</script>