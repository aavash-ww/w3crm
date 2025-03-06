<template>
    <div class="faqwrap">
        <div style="background: #f2f1ed;">
            <div class="faqwrap__image">
                <div class="faqwrap__image__txt">
                    <h1>FAQs</h1>
                    <p>Have Questions? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis molestias itaque
                        suscipit cum eligendi odio doloribus eum tempora repellat neque.</p>
                </div>
                <div class="faqwrap__image__img">
                    <img src="../assets/images/faq.png" alt="">
                </div>
            </div>
        </div>
        <!-- <h2 class="title">CRM FAQs</h2> -->
        <div class="faqbtm">

            <ul>
                <li>About us</li>
                <li>Our Products</li>
                <li>Contact Us</li>
                <li>Prices & Sales</li>
                <li>Resources</li>
            </ul>

            <div class="faq">
                <div v-for="(item, index) in faqs" :key="index" class="faq-item">
                    <!-- Question -->
                    <div class="faq-question" @click="toggleFAQ(index)">
                        {{ item.question }}
                        <div class="arrow" :class="{ open: activeIndex === index }">
                            <img src="../assets/icons/dropdown.svg" alt="">
                        </div>
                    </div>

                    <!-- Answer -->
                    <div class="faq-answer-wrapper" ref="answerRefs"
                        :style="activeIndex === index ? { height: answerHeights[index] + 'px' } : { height: '0px' }">
                        <p class="faq-answer">{{ item.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";

export default {
    setup() {
        const faqs = ref([
            { question: "What is CRM?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel a nostrum vitae eveniet ut perferendis maxime dolor eligendi ipsa." },
            { question: "Why W3 CRM?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto v" },
            { question: "Why W3 CRM?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto v" },
            { question: "Why W3 CRM?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto v" },
        ]);

        const activeIndex = ref(null);
        const answerRefs = ref([]);
        const answerHeights = ref([]);

        //toggle question
        const toggleFAQ = async (index) => {
            if (activeIndex.value === index) {
                activeIndex.value = null;
            } else {
                activeIndex.value = index;
                await nextTick(); //Waits for DOm update
                answerHeights.value[index] = answerRefs.value[index]?.scrollHeight || 0;
            }
        };

        //on mount
        onMounted(() => {
            answerRefs.value.forEach((el, index) => {
                answerHeights.value[index] = el.scrollHeight;
            });
        });

        return {
            faqs,
            activeIndex,
            toggleFAQ,
            answerRefs,
            answerHeights
        };
    }
};
</script>

<style>
/* .title {
    margin-bottom: 1.5rem;
    text-align: center;
    color: #072932;
} */

.faq {
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    /* height: 95vh; */
}

.faq-item {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
}

.faq-question {
    cursor: pointer;
    display: flex;
    font-size: 1.2rem;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

@media screen and (max-width: 632px) {
    .faq-question {
        font-size: 0.9rem;
        padding: 4px;
    }
}

.faq-question:hover {
    font-weight: bold;
}

.arrow {
    transition: transform 0.3s ease;
}

.arrow img {
    width: auto;
    height: 24px;
}

.arrow.open {
    transform: rotate(180deg);
}

.faq-answer-wrapper {
    overflow: hidden;
    transition: height 0.3s ease-in-out;
}

.faq-answer {
    padding: 10px;
    background-color: #e9e5e5;
    border-radius: 5px;
}
</style>