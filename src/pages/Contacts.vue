<template>
    <div style="background: #cceef9;">
        <div class="contacts">
            <div class="contacts__left">
                <h2>Get in touch with our team</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reiciendis sed molestias omnis modi
                    distinctio numquam minima magni illum, commodi quo, maxime ipsam excepturi impedit sapiente tenetur.
                    Sit, ea ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, velit.</p>
                <div class="contacts__left__marks">
                    <div class="contacts__left__marks__checks" v-for="(el, idx) in list" :key="idx">
                        <img :src="el.path" alt="">
                        {{ el.title }}
                    </div>
                </div>
            </div>

            <div class="contacts__form">
                <h6>Contact Sales about W3</h6>
                <form action="">
                    <input type="text" placeholder="Enter Your Name">
                    <input type="text" placeholder="Enter Your Address">
                    <input type="email" placeholder="Enter Your Email">
                    <div class="single-select" @click="isDropdownOpen = true">
                        <input type="text" v-model="selectedCountry" placeholder="Select a country..." readonly />
                        <div v-if="isDropdownOpen" class="dropdown">
                            <div v-for="(country, index) in filteredCountries" :key="index" class="dropdown-item"
                                @click="selectCountry(country)">
                                {{ country }}
                            </div>
                        </div>
                    </div>
                    <input type="text" name="" id="" placeholder="Company Name">

                </form>
                <div class="contacts__form__policy">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service
                    apply</div>
                <button>Submit</button>
            </div>

        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";

export default {
    setup() {
        const allCountries = ref([
            "United States", "India", "United Kingdom", "Nepal", "China"
        ]);

        const selectedCountry = ref("");
        const isDropdownOpen = ref(false);
        const filteredCountries = computed(() => allCountries.value);
        const selectCountry = (country) => {
            selectedCountry.value = country;
            isDropdownOpen.value = false;
        };


        const handleClickOutside = (event) => {
            if (!event.target.closest(".single-select")) {
                isDropdownOpen.value = false;
            }
        };

        onMounted(() => {
            document.addEventListener("click", handleClickOutside);
        });

        return {
            selectedCountry,
            isDropdownOpen,
            filteredCountries,
            selectCountry
        };
    },

    data() {
        return {
            list: [
                {
                    title: "Get advice from a sales expert who will understand your business needs",
                    path: "/src/assets/icons/check.svg"
                },
                {
                    title: "Understand how to best use W3 CRM",
                    path: "/src/assets/icons/check.svg"
                },
                {
                    title: "Understand how to best use W3 CRM",
                    path: "/src/assets/icons/check.svg"
                },
                {
                    title: "Understand how to best use W3 CRM",
                    path: "/src/assets/icons/check.svg"
                },

            ]
        }
    }
}
</script>


<style>
.single-select {
    position: relative;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0px;
    background: #fff;
    cursor: pointer;
    margin-bottom: 1rem;
}

.single-select input {
    width: 100%;
    border: none;
    outline: none;
    padding: 8px;
    font-size: 14px;
    cursor: pointer;
    background: transparent;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: white;
    max-height: 150px;
    overflow-y: auto;
    z-index: 1000;
}

.dropdown-item {
    padding: 8px;
    cursor: pointer;
}

.dropdown-item:hover {
    background: #f0f0f0;
}
</style>