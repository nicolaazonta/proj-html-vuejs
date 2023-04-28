<script>
    export default {
        name: 'NewsSection'
    }
</script>

<template>
    <div id="NewsSection">
        <div class="container w-75 padding_special">
            <div class="header_top">
                <h6 class="section_subtitle">our editorial content</h6> 
                <h2 class="section_title">Latest <span class="marked">News</span></h2>          
            </div>
            <div class="header_bottom d-flex justify-content-between align-items-center py-1">
                <p class="w-75 section_paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quisquam doloribus quo .</p>
                <button class="full_btn my_btn">see all</button>
            </div>

            <div class="row py-3 g-4">
                <div class="col-4">
                    <div class="card position-relative">
                        <img class="card-img" src="../assets/img/news-1.jpg" alt="">
                        <p class="card-img-overlay text_card_img">Increasing creativity is possible for everyone</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card position-relative">
                        <img class="card-img" src="../assets/img/news-2.jpg" alt="">
                        <p class="card-img-overlay text_card_img">Because market research is part of the business plan</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card position-relative">
                        <img class="card-img" src="../assets/img/news-3.jpg" alt="">
                        <p class="card-img-overlay text_card_img">Working from home is now a trend</p>
                    </div>
                </div>
                
              
              
            </div>

        </div>
    </div>
</template>


<style lang="scss">

</style>