<template>
    <div class="whycrm">
        <nav class="whycrm__nav">
            <p class="active">Manage Leads and deals</p>
            <p v-for="el, idx in topics" :key="idx">{{ el }}</p>
        </nav>
        <div class="whycrm__content">
            <div class="whycrm__content__image">
                <img src="../assets/images/crm-dash.jpg" alt="">
            </div>

            <div class="whycrm__content__text">
                <div v-for="el, idx in whybox" :key="idx" class="whycrm__content__text__wrap">
                    <div class="whycrm__content__text__wrap__title">
                        <img :src="el.icon" :alt="el.title">
                        <h6>{{ el.title }}</h6>

                    </div>
                    <p>{{ el.descrption }}</p>
                </div>
                <span>Learn More</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            topics: [
                "One space for all sales exercise",
                "Automate and scale",
                "Instant Sales "

            ],
            whybox: [
                {
                    icon: "/src/assets/icons/tick.svg",
                    title: "Customize your pipelines",
                    descrption: "Import data from spreadsheets or other pipeline management software in  just a few clicks. Link products to deals to track  negotiations and see the bigger picture."
                },
                {
                    icon: "/src/assets/icons/tick.svg",
                    title: "Customize your pipelines",
                    descrption: "Import data from spreadsheets or other pipeline management software in  just a few clicks. Link products to deals to track  negotiations and see the bigger picture."
                },
                {
                    icon: "/src/assets/icons/tick.svg",
                    title: "Customize your pipelines",
                    descrption: "Import data from spreadsheets or other pipeline management software in  just a few clicks. Link products to deals to track  negotiations and see the bigger picture."
                },
                {
                    icon: "/src/assets/icons/tick.svg",
                    title: "Customize your pipelines",
                    descrption: "Import data from spreadsheets or other pipeline management software in  just a few clicks. Link products to deals to track  negotiations and see the bigger picture."
                },

            ]

        }
    }
}
</script>