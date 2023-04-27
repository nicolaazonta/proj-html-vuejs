<script>
export default {
    name: 'PageHeader',
}
</script>

<template>
    <div id="PageHeader">
        <div class="container w-75 d-flex justify-content-between py-3">
            <div class="left_container d-flex align-items-center">
                <font-awesome-icon class="px-1" icon="fa-solid fa-clock" />
                <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
            </div>
            <div class="right_container d-flex">

                <a href="#">
                    <font-awesome-icon class="px-1" icon="fa-solid fa-phone" />
                    <span>+1(305) 1234-5678</span>
                </a>
                <a class="" href="#">
                    <font-awesome-icon class="px-1" icon="fa-solid fa-envelope" />
                    <span>hello@example.com</span>
                </a>
                <a class="" href="#">
                    <font-awesome-icon class="px-1" icon="fa-brands fa-facebook" />
                </a>
                <a class="" href="#">
                    <font-awesome-icon class="px-1" icon="fa-brands fa-twitter" />
                </a>
                <a class="" href="#">
                    <font-awesome-icon class="px-1" icon="fa-brands fa-linkedin" />
                </a>

            </div>

        </div>

    </div>
</template>


<style lang="scss">
    ul {
        list-style: none;
    }

    a {
        text-decoration: none!important;
        padding: 0 .5rem;
        color: inherit!important;

    }
</style>