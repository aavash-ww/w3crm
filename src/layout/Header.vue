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
                <li><router-link to="/about"><span> About </span></router-link> </li>
                <li> <span>Pricing</span> </li>
                <li> <span>Products</span> </li>
                <li> <span>Resources</span> </li>
                <li> <span>Why W3</span> </li>
                <li> <span>FAQs</span> </li>
                <li> <span>Contacts</span> </li>

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