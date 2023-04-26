<script>

import {state} from './state'
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
  data() {
    return {
      state
    }
  }
}

</script>

<template>

  <PageHeader/>
  <PageMain/>
  <PageFooter/>

</template>

<style lang="scss">
</style>
