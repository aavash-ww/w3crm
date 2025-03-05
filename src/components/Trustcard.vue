<template>
    <div class="trustcard-wrapper">
        <div class="trustcard-container">
            <div class="trustcard" v-for="i in 10" :key="'a' + i">
                <div class="trustcard__partners">
                    <img src="../assets/images/partner1.png" alt="">
                </div>
                <p><span>4.5</span>/5</p>
                <div class="trustcard__ratings">
                    <img src="../assets/icons/Star.png" alt="">
                    <img src="../assets/icons/Star.png" alt="">
                    <img src="../assets/icons/Star.png" alt="">
                    <img src="../assets/icons/Star.png" alt="">
                    <img src="../assets/icons/HalfStar.png" alt="">
                </div>
            </div>

            <!-- Duplicate slides -->
            <div class="trustcard" v-for="i in 10" :key="'b' + i">
                <div class="trustcard__partners">
                    <img src="../assets/images/partner1.png" alt="">
                </div>
                <p><span>4.5</span>/5</p>
                <div class="trustcard__ratings">
                    <img src="../assets/icons/Star.png" alt="">
                    <img src="../assets/icons/Star.png" alt="">
                    <img src="../assets/icons/Star.png" alt="">
                    <img src="../assets/icons/Star.png" alt="">
                    <img src="../assets/icons/HalfStar.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.trustcard-wrapper {
    display: flex;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
    background: #fff;
    padding: 1rem;
}

.trustcard-container {
    display: flex;
    gap: 20px;
    width: max-content;
    animation: scrollX 30s linear infinite;
}

.trustcard {
    min-width: 200px;
    padding: 15px;
    text-align: center;
}

/* Infinite scrolling animation */
@keyframes scrollX {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}
</style>