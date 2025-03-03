<template>
    <div class="whycrm">
        <nav class="tabs">

            <div v-for="(tab, index) in tabs" :key="index" class="tab" :class="{ active: activeIndex === index }"
                @click="setActiveTab(index, $event)">
                {{ tab }}
            </div>
            <div class="underline" :style="underlineStyle"></div>
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
import { ref } from "vue";
export default {

    setup() {
        const tabs = ref([
            "Manage Leads and deals",
            "One space for all sales",
            "Automate and scale",
            "Instant Sales "
        ]);
        const activeIndex = ref(0);
        const underlineStyle = ref({});

        const setActiveTab = (index, event) => {
            activeIndex.value = index;
            updateUnderline(event.target);
        };
        const updateUnderline = (tabElement) => {
            underlineStyle.value = {
                width: `${tabElement.offsetWidth}px`,
                left: `${tabElement.offsetLeft}px`
            };
        };
        return {
            tabs,
            activeIndex,
            underlineStyle,
            setActiveTab
        };

    },
    data() {
        return {
            whybox: [
                {
                    icon: "/src/assets/icons/tick.svg",
                    title: "Customize your pipelines",
                    descrption: "Import data from spreadsheets or other pipeline management software in  just a few clicks. Link products to deals to track  negotiations and see the bigger picture."
                },
                {
                    icon: "/src/assets/icons/tick.svg",
                    title: "Reach your sales potential",
                    descrption: "Import data from spreadsheets or other pipeline management software in  just a few clicks. Link products to deals to track  negotiations and see the bigger picture."
                },
                {
                    icon: "/src/assets/icons/tick.svg",
                    title: "Manage your deals and leads",
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

<style>
.tabs {
    display: flex;
    position: relative;
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
    justify-content: space-between;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;


}

@media screen and (max-width: 820px) {
    .tabs {
        overflow-x: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
}
@media screen and (max-width: 600px){
    .tabs {
        
    }
}

.tab {
    font-size: 16px;
    color: #555;
    cursor: pointer;
    padding: 0.5rem 1rem;
    position: relative;
    text-wrap: nowrap;
}

.tab.active {
    font-weight: bold;
    color: #13728c;

}

.underline {
    position: absolute;
    bottom: -2px;
    height: 3px;
    background-color: #13728c;
    transition: all 0.3s ease;
}
</style>