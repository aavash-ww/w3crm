<!-- <template>
    <div class="whycrm">
        <nav class="tabs">
            <button @click="scrollLeft">&lt;</button>
            <div class="tab-container" ref="navRef">

                <div v-for="(tab, index) in tabs" :key="index" class="tab" :class="{ active: activeIndex === index }"
                    @click="setActiveTab(index, $event)">
                    {{ tab }}
                </div>
                <div class="underline" :style="underlineStyle"></div>
            </div>
            <button @click="scrollRight">&gt;</button>
        </nav>

        <div class="whycrm__content">
            <div class="whycrm__content__image">
                <img src="../assets/images/crm-dash.jpg" alt="">
            </div>

            <div class="whycrm__content__text">
                <div v-for="(el, idx) in whybox" :key="idx" class="whycrm__content__text__wrap">
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

<script setup>
import { ref, onMounted } from "vue";

const navRef = ref(null);

// Scroll functions
const scrollLeft = () => {
    if (navRef.value) {
        navRef.value.scrollBy({ left: -200, behavior: "smooth" });
    }
};
const scrollRight = () => {
    if (navRef.value) {
        navRef.value.scrollBy({ left: 200, behavior: "smooth" });
    }
};

// Tabs
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

onMounted(() => {
    const activeTab = document.querySelector(".tab.active");
    if (activeTab) {
        updateUnderline(activeTab);
    }
});

// Tab Data
const whybox = ref([
    {
        icon: "/src/assets/icons/tick.svg",
        title: "Customize your pipelines",
        descrption: "Import data from spreadsheets or other pipeline management software in just a few clicks.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, eveniet!",
    },
    {
        icon: "/src/assets/icons/tick.svg",
        title: "Reach your sales potential",
        descrption: "Import data from spreadsheets or other pipeline management software in just a few clicks.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, eveniet!",
    },
    {
        icon: "/src/assets/icons/tick.svg",
        title: "Manage your deals and leads",
        descrption: "Import data from spreadsheets or other pipeline management software in just a few clicks.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, eveniet!"
    },
    {
        icon: "/src/assets/icons/tick.svg",
        title: "Customize your pipelines",
        descrption: "Import data from spreadsheets or other pipeline management software in just a few clicks.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, eveniet!"
    }
]);
</script> -->
<template>
    <div class="whycrm">
        <nav class="tabs">
            <button @click="scrollLeft">&lt;</button>
            <div class="tab-container" ref="navRef">
                <div v-for="(tab, index) in tabs" :key="index" class="tab" :class="{ active: activeIndex === index }"
                    @click="setActiveTab(index, $event)">
                    {{ tab }}
                </div>
                <div class="underline" :style="underlineStyle"></div>
            </div>
            <button @click="scrollRight">&gt;</button>
        </nav>

        <div class="whycrm__content">
            <div class="whycrm__content__image">
                <img :src="whybox[activeIndex]?.image" alt="">
            </div>

            <div class="whycrm__content__text">
                <div v-for="(el, idx) in whybox" :key="idx" class="whycrm__content__text__wrap">
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

<script setup>
import { ref, onMounted } from "vue";

const navRef = ref(null);

// Scroll functions
const scrollLeft = () => {
    if (navRef.value) {
        navRef.value.scrollBy({ left: -200, behavior: "smooth" });
    }
};
const scrollRight = () => {
    if (navRef.value) {
        navRef.value.scrollBy({ left: 200, behavior: "smooth" });
    }
};

// Tabs
const tabs = ref([
    "Manage Leads and deals",
    "One space for all sales",
    "Automate and scale",
    "Instant Sales"
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

onMounted(() => {
    const activeTab = document.querySelector(".tab.active");
    if (activeTab) {
        updateUnderline(activeTab);
    }
});

// Tab Data
const whybox = ref([
    {
        icon: "/src/assets/icons/tick.svg",
        title: "Customize your pipelines",
        descrption: "Import data from spreadsheets or other pipeline management software in just a few clicks.",
        image: "/src/assets/images/crm-dash.jpg"
    },
    {
        icon: "/src/assets/icons/tick.svg",
        title: "Reach your sales potential",
        descrption: "Boost your sales performance with advanced analytics and automation.",
        image: "/src/assets/images/crmgp.webp"
    },
    {
        icon: "/src/assets/icons/tick.svg",
        title: "Manage your deals and leads",
        descrption: "Keep track of your deals and leads in an organized pipeline view.",
        image: "/src/assets/images/crm-dash.jpg"
    },
    {
        icon: "/src/assets/icons/tick.svg",
        title: "Customize your pipelines",
        descrption: "Tailor your CRM pipeline to match your business workflow effortlessly.",
        image: "/src/assets/images/crmgp1.webp"
    }
]);
</script>

<style>
.tabs {
    display: flex;
    align-items: center;
    padding: 0 1rem;
}

.tab-container {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    flex-grow: 1;
    white-space: nowrap;
    align-items: center;
    position: relative;
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
    justify-content: space-between;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
}

/* Hide scrollbar */
.tab-container::-webkit-scrollbar {
    display: none;
}

.tabs button {
    display: none;
    border: none;
    background: #fff;
    font-size: 1.5rem;
    color: #818181;
    font-weight: 700;
}

@media screen and (max-width: 820px) {
    .tabs button {
        display: block;
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
