<script>
export default {
    name: 'PageHeader',
}
</script>

<template>
    <div id="PageHeader">
        <div class="container w-75 d-flex justify-content-between py-2">
            <div class="left_container">
                <i class="fa-regular fa-clock"></i>
                <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
            </div>
            <ul class="right_container d-flex">
                <li class="d-flex align-items-center">
                    <a href="#">
                        <i class="fa-regular fa-clock"></i>
                        <span>+1(305) 1234-5678</span>
                    </a>
                </li>
                <li class="d-flex align-items-center">
                    <a href="#">
                        <i class="fa-solid fa-envelope"></i>
                        <span>hello@example.com</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>hello@example.com</span>
                    </a>
                </li>
            </ul>
 
        </div>
        <i class="fa-regular fa-clock"></i>

    </div>
</template>


<style lang="scss">
ul{
    list-style: none;
}
a{
    text-decoration: none;
    color: inherit;
}
</style>