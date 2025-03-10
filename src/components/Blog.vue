<template>
    <div class="blog-main">
        <h3>Popular blog posts</h3>
        <div class="blog">
            <div class="blog__wrap">
                <div class="blog__wrap__image">
                    <div class="blog__wrap__image__wrap">
                        <img class="blog_img_1" src="../assets/vectors/blog1.svg" alt="">
                        <img class="blog_img_2" src="../assets/vectors/blogstats.svg" alt="">
                    </div>

                </div>
                <div class="blog__wrap__text">
                    <h6>CRM evaluations: How to choose perfect system</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, provident fugiat! Inventore
                        rem
                        sunt
                        veritatis dicta excepturi atque illum corrupti?</p>
                </div>
            </div>
            <!-- Second  -->
            <div class="blog__wrap">
                <div class="blog__wrap__image">
                    <div class="blog__wrap__image__wrap second">
                        <img class="blog_img_3" src="../assets/vectors/blog2.svg" alt="">
                        <img class="blog_img_4" src="../assets/vectors/blog-pie.svg" alt="">
                        <img class="blog_img_7" src="../assets/vectors/bloginterfece.svg" alt="">
                    </div>

                </div>
                <div class="blog__wrap__text">
                    <h6>CRM evaluations: How to choose perfect system</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, provident fugiat! Inventore
                        rem
                        sunt
                        veritatis dicta excepturi atque illum corrupti?</p>
                </div>
            </div>
            <!-- Third  -->
            <div class="blog__wrap">
                <div class="blog__wrap__image">
                    <div class="blog__wrap__image__wrap third">
                        <img class="blog_img_5" src="../assets/vectors/blog3.svg" alt="">
                        <img class="blog_img_6" src="../assets/vectors/blogmail1.svg" alt="">
                        <img class="blog_img_8" src="../assets/vectors/blogmail2.svg" alt="">
                    </div>

                </div>
                <div class="blog__wrap__text">
                    <h6>CRM evaluations: How to choose perfect system</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, provident fugiat! Inventore
                        rem
                        sunt
                        veritatis dicta excepturi atque illum corrupti?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Blog"
}
</script>

<style>


.blog-main h3 {
    margin-bottom: 1rem;
}

.blog_img_1 {
    /* left: 0; */
    width: 350px;
    height: 350px;
    object-fit: cover;
}

.blog_img_2 {
    position: absolute;
    width: 100px;
    height: 100px;
    object-fit: cover;
    right: 0;
    top: 0;
}

.blog_img_3 {
    position: absolute;
    right: -2%;
    top: 10%;
    width: 250px;
    height: 250px;
    object-fit: cover;
}

.blog_img_4 {
    position: absolute;
    left: 10%;
    bottom: 0;
    width: 120px;
    height: 120px;
    object-fit: cover;
}

.blog_img_7 {
    position: absolute;
    left: 10%;
    width: 150px;
    height: 150px;
    object-fit: cover;
}

.blog_img_5 {
    position: absolute;
    right: -12%;
    width: 300px;
    height: 300px;
    object-fit: cover;

}

.blog_img_6,
.blog_img_8 {
    width: 140px;
    height: 140px;
    object-fit: cover;
}

.blog_img_8 {
    position: absolute;
    left: 18%;
    top: 10%;
}

.second {
    background: #0d4d5f;
}

.third {
    background: #0f6684;
}
</style>