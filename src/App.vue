<template>
  <div>
    <Layout>
      <Homepage />
    </Layout>
  </div>
</template>


<script>
import Layout from './Layout.vue';
import Homepage from './pages/Homepage.vue';

export default {
  components: {
    Layout,
    Homepage
  }
}
</script>