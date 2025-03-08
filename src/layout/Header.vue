<template>
    <header class="header">
        <div class="header__menu">
            <img src="../assets/icons/menu-iconn.svg" alt="">
        </div>
        <router-link to="/">
            <div class="header__logo">
                <img src="../assets/images/w3reservations.png" alt="">
            </div>
        </router-link>

        <nav class="header__nav">
            <ul class="header__nav__list">
                <li>
                    <router-link to="/about"><span :class="{ active: isActive('/about') }"> About
                        </span></router-link>
                </li>
                <li>
                    <router-link to="/pricing"><span
                            :class="{ active: isActive('/pricing') }">Pricing</span></router-link>
                </li>
                <li>
                    <router-link to="/products"> <span
                            :class="{ active: isActive('/products') }">Products</span></router-link>
                </li>
                <li>
                    <router-link to="/resources"><span
                            :class="{ active: isActive('/resources') }">Resources</span></router-link>
                </li>
                <li>
                    <router-link to="/why-w3"> <span :class="{ active: isActive('/why-w3') }">Why
                            W3</span></router-link>
                </li>
                <li>
                    <router-link to="/faq"><span :class="{ active: isActive('/faq') }"> FAQs </span></router-link>
                </li>
                <li>
                    <router-link to="/contacts"><span :class="{ active: isActive('/contacts') }"> Contacts
                        </span></router-link>
                </li>
            </ul>
        </nav>

        <div class="header__button">
            <div class="header__button__search">
                <img src="../assets/icons/search-alt-1-svgrepo-com(1).svg" alt="">
            </div>
            <div class="login-btn">Login</div>
            <div class="free-trial-btn">Start a trial</div>
        </div>
    </header>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (path) => route.path === path; 
</script>
