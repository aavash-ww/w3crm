<template>
    <div>
        <Header />
        <main>
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from './layout/Header.vue';
import Footer from "./layout/Footer.vue";
export default {
    name: "Layout",
    components: {
        Header,
        Footer
    }
}
</script>