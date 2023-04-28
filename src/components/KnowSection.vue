<script>
    export default {
        name: 'KnowSection'
    }
</script>

<template>
    <div id="KnowSection">
        <div class="container w-50">            
            <div class="row py-5">
                <div class="col-6">
                    <h5 class="section_subtitle">newsletter</h5>
                    <h2 class="section_title">Know <span class="marked">First</span></h2>
                    <p class="section_paragraph">Follow closely and receive content about our company and the news of the current market</p>
                </div>
                <div class="col-6 d-flex flex-column h-100 justify-content-between align-items-start">
                    <input type="text" class="border-0 bg-opacity-100 form-control" placeholder="Name" aria-label="name">
                    <input type="text" class="border-0 bg-opacity-100 form-control" placeholder="Email" aria-label="email">

                    <button class="my_btn full_btn">subscribe</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">

</style>