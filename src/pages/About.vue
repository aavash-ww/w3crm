<template>
    <section class="abt">
        <div class="abt__image">
            <img src="../assets/images/about-main.jpg" alt="">
        </div>

        <div class="abt__text">
            <h1>Our Vlaues.</h1>
            <div class="abt__text__wrap">
                <div v-for="(el, idx) in main" :key="idx" class="abt__text__wrap__card">
                    <div class="abt__text__wrap__card__img">
                        <img :src="el.image" :alt="el.title">
                    </div>
                    <div class="abt__text__wrap__card__des">
                        <h4>{{ el.title }}</h4>
                        <p>{{ el.des }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="about top">

        <div class="about__wrapper">
            <div class="about__wrapper__text">
                <h2>Empowering small businesses to grow</h2>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos ea rerum aliquam unde magnam
                    facere
                    incidunt aspernatur deserunt distinctio illum tempore sequi aperiam impedit!,</p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi repudiandae aliquid,
                    nemo sunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, perspiciatis?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum earum id deserunt odit
                    inventore et praesentium dolore maiores ratione?</p>
            </div>
            <div class="about__wrapper__image">
                <img src="../assets/images/crmgp1.webp" alt="">
            </div>
        </div>
    </section>

    <section class="about">
        <div class="about__wrapper about-mid">
            <div class="about__wrapper__image">
                <img src="../assets/images/crmgp.webp" alt="">
            </div>
            <div class="about__wrapper__text">
                <h3>A CRM built by salespeople, for salespeople</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, provident veritatis. Obcaecati
                    pariatur
                    tempore enim repellendus mollitia dolorem atque, dolores voluptas temporibus provident, ex natus.
                    Culpa
                    nobis aperiam aspernatur tenetur!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, vitae inventore accusantium ducimus
                    beatae voluptatem quia cumque commodi libero alias.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sint rerum aliquam illo saepe
                    cupiditate
                    excepturi neque hic unde expedita.</p>
            </div>
        </div>
    </section>
    <section class="about">
        <div class="about__wrapper">
            <div class="about__wrapper__text">
                <h3>Our CRM mission statement</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officiis, consectetur enim ut rem
                    mollitia quasi? Animi non nisi obcaecati cumque perspiciatis natus ea iusto.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit, deserunt saepe rem
                    molestiae
                    porro
                    dignissimos nisi harum minima doloremque voluptate explicabo maxime numquam nam repellendus illo.
                    Ipsa,
                    quos
                    pariatur?

                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, officiis. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Non, reprehenderit.
                </p>
            </div>
            <div class="about__wrapper__image">
                <img src="../assets/images/aboutsce.png" alt="">
            </div>
        </div>
    </section>
    <div class="stats_main">
        <section class="stats">
            <h2>Stats to be proud of</h2>

            <div class="stats__wrap">
                <div v-for="(el, idx) in stats" :key="idx">
                    <div class="stats__wrap__fig">
                        <h3>{{ el.num }}</h3>
                        <p>{{ el.des }}</p>
                    </div>

                </div>
            </div>
        </section>
    </div>
    <section class="success">
        <h2>Sowing the seeds of success</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur necessitatibus dignissimos eos
            distinctio, cumque quasi doloribus ut esse, nulla tempora natus? Quasi molestiae </p>
        <div class="success__inner">
            <div class="success__inner__div" v-for="(el, idx) in sucess" :key="idx">
                <div class="success__inner__div__image">
                    <img :src="el.path" alt="">
                </div>
                <div class="success__inner__div__text">
                    <h6>{{ el.title }}</h6>
                    <p>{{ el.des }}</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            stats: [
                {
                    num: "100+",
                    des: "Companies using W3 CRM"
                },
                {
                    num: "~70",
                    des: "Companies using W3 CRM"
                },
                {
                    num: "50+",
                    des: "W3 Marketplace integrations"
                },
                {
                    num: "100+",
                    des: "Companies using W3 CRM"
                },
            ],
            sucess: [
                {
                    path: "/src/assets/icons/bulb.svg",
                    title: "Internal drive",
                    des: "tempora natus? Quasi molestiae nostrum molestias nemo suscipit, qui"
                },
                {
                    path: "/src/assets/icons/graduation.svg",
                    title: "Team first",
                    des: "tempora natus? Quasi molestiae nostrum molestias nemo suscipit, qui"
                },
                {
                    path: "/src/assets/icons/heartbeat.svg",
                    title: "No excuses",
                    des: "tempora natus? Quasi molestiae nostrum molestias nemo suscipit, qui"
                },
                {
                    path: "/src/assets/icons/rocket.svg",
                    title: "Be teachable",
                    des: "tempora natus? Quasi molestiae nostrum molestias nemo suscipit, qui"
                },
                {
                    path: "/src/assets/icons/target.svg",
                    title: "Internal drive",
                    des: "tempora natus? Quasi molestiae nostrum molestias nemo suscipit, qui"
                },
                {
                    path: "/src/assets/icons/users.svg",
                    title: "Don’t ruin other people’s days",
                    des: "tempora natus? Quasi molestiae nostrum molestias nemo suscipit, qui"
                },
            ],
            main: [
                {
                    image: "/src/assets/icons/blocks.svg",
                    title: "Create Community",
                    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ex laboriosam quaerat facere"

                },
                {
                    image: "/src/assets/icons/diversity.svg",
                    title: "Embrace Diversity",
                    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ex laboriosam quaerat facere"

                },
                {
                    image: "/src/assets/icons/impact.svg",
                    title: "Drive Impact",
                    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ex laboriosam quaerat facere"

                },
                {
                    image: "/src/assets/icons/unity.svg",
                    title: "Bring Others Alone",
                    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ex laboriosam quaerat facere"

                },
            ]
        }
    }
}
</script>

<style>
@media screen and (max-width: 1000px) {
    .about-mid {
        flex-direction: column !important;
    }
}
</style>