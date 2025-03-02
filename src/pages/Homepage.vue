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
    <section class="why-section">
        <h3>Why CRM is must?</h3>
        <Whycrm />
    </section>

    <!-- Review Section  -->
    <section class="review-section">
        <h2>CRM software sales teams will love</h2>
        <ReviewCard />
    </section>



</template>

<script>
import Hero from '../components/Hero.vue';
import Trustcard from '../components/Trustcard.vue';
import Whycrm from '../components/Whycrm.vue';
import ReviewCard from '../components/ReviewCard.vue';
export default {
    components: {
        Hero,
        Trustcard,
        Whycrm,
        ReviewCard
    }
}
</script>