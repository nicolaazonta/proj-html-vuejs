<script>
export default {
    name: 'PageHeader',
}
</script>

<template>
    <div id="PageHeader">
        <div class="container w-75 d-flex justify-content-between py-2">
            <div class="left_container d-flex align-items-center">
                <font-awesome-icon class="px-1" icon="fa-solid fa-user-secret" />
                <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
            </div>
            <ul class="right_container d-flex">
                <li class="d-flex align-items-center">
                    <a href="#">
                        <font-awesome-icon class="px-1" icon="fa-solid fa-clock" />
                        <span>+1(305) 1234-5678</span>
                    </a>
                </li>
                <li >
                    <a class="d-flex align-items-center" href="#">
                        <i class="fa-solid fa-envelope"></i>
                        <span>hello@example.com</span>
                    </a>
                </li>
                <li>
                    <a class="d-flex align-items-center" href="#">
                        <i class="fa-solid fa-envelope"></i>
                        <span>hello@example.com</span>
                    </a>
                </li>
            </ul>
 
        </div>

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