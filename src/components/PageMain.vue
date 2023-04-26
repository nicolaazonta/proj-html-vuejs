<script>
    import JumboSection from './JumboSection.vue'
    import HumanCorePerformanceSection from './HumanCorePerformanceSection.vue'
    import CompanySection from './CompanySection.vue'
    import ServicesSection from './ServicesSection.vue'
    import PricingSection from './PricingSection.vue'
    import NewsSection from './NewsSection.vue'
    import KnowSection from './KnowSection.vue'


    export default {
        name: 'PageMain',
        components: {
            JumboSection,
            HumanCorePerformanceSection,
            CompanySection,
            ServicesSection,
            PricingSection,
            NewsSection,
            KnowSection
        }

        
    }
</script>

<template>

    <JumboSection/>
    <HumanCorePerformanceSection/>
    <CompanySection/>
    <ServicesSection/>
    <PricingSection/>
    <NewsSection/>
    <KnowSection/>


</template>


<style lang="scss" scoped>

</style>