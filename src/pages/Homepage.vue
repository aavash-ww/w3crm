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
        </div>
    </section>
    <!-- Feature section  -->
    <section class="feature">
        <div class="feature__image">
            <div class="feature__image__wrap pie">
                <div class="feature__image__wrap__top">
                    <img src="../assets/vectors/dollar.svg" alt="">
                    <div>W3 performance reports</div>
                </div>
                <div class="feature__image__wrap__btm">
                    <small>CUSTOM PEROID</small>
                    <img src="../assets/vectors/pie-chart.svg" alt="">
                </div>
            </div>
            <div class="feature__image__wrap stat">
                <div class="feature__image__wrap__top">
                    <img src="../assets/vectors/dollar.svg" alt="">
                    <div>W3 performance reports</div>
                </div>
                <div class="feature__image__wrap__btm">
                    <small>THIS MONTH</small>
                    <img src="../assets/vectors/stacked-bar.svg" alt="">
                </div>
            </div>
        </div>
        <div class="feature__text">
            <h2>Improve your Sales with our Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt omnis quas expedita quam ratione odit
                enim quo modi provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est debitis enim
                possimus aliquid harum, quam vel soluta sint sapiente?</p>
            <button>
                Learn More
            </button>
        </div>
    </section>

    <!-- Why section  -->
    <section class="why-section">
        <h3>Why CRM is must?</h3>
        <Whycrm />
    </section>

    <!-- Blogs Section  -->
    <Blog />


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
import Blog from '../components/Blog.vue';
export default {
    components: {
        Hero,
        Trustcard,
        Whycrm,
        ReviewCard,
        Blog
    }
}
</script>

<style>
.pie {
    top: 0;
    left: 10%;
    animation: moveY 3s ease-in-out infinite;

}

.stat {
    right: 15%;
    top: 0;
    animation: moveX 3s ease-in-out infinite;
}

@keyframes moveY {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(20px);
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes moveX {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>