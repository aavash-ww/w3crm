<template>
    <div class="whycrm">
        <nav class="whycrm__wrap">
            <p class="active">Manage Leads and deals</p>
            <p v-for="el, idx in topics" :key="idx">{{ el }}</p>
        </nav>
        <div>
            <div>
                <img src="../assets/images/crm-dash.jpg" alt="">
            </div>

            <div>
                <div>
                    <img src="../assets/icons/tick.svg" alt="">
                </div>
                <div>
                    <h4></h4>
                </div>
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
                    title: "Customize your pipelines",
                    descrption: "Import data from spreadsheets or other pipeline management software in  just a few clicks. Link products to deals to track  negotiations and see the bigger picture."
                },
                {
                    title: "Customize your pipelines",
                    descrption: "Import data from spreadsheets or other pipeline management software in  just a few clicks. Link products to deals to track  negotiations and see the bigger picture."
                },
                {
                    title: "Customize your pipelines",
                    descrption: "Import data from spreadsheets or other pipeline management software in  just a few clicks. Link products to deals to track  negotiations and see the bigger picture."
                },
                {
                    title: "Customize your pipelines",
                    descrption: "Import data from spreadsheets or other pipeline management software in  just a few clicks. Link products to deals to track  negotiations and see the bigger picture."
                },
            ]

        }
    }
}
</script>