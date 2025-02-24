<template>
    <!-- Herosection -->
    <section>
        <Hero />
    </section>
    <!-- Trust/Partner Section  -->
    <section class="partners">
        <div class="partners__text">
            <h4>Growing together with our trusted partners</h4>
        </div>
        <div class="partners__cards">
            <Trustcard />
            <Trustcard />
            <Trustcard />
            <Trustcard />
        </div>
    </section>

    <!-- Why section  -->
    <section>
            <h3>Why CRM is so needed?</h3>
            <Whycrm/>
            
    </section>


</template>

<script>
import Hero from '../components/Hero.vue';
import Trustcard from '../components/Trustcard.vue';
import Whycrm from '../components/Whycrm.vue';
export default {
    components: {
        Hero,
        Trustcard,
        Whycrm
    }
}
</script>