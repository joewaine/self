<template>
	<div class="home">
		<Header />
		<Introduction />
		<PageSection id="next-section" />
		<Footer />
	</div>
</template>

<script>
import Header from "../components/molecules/Header.vue";
import Introduction from "../components/molecules/Introduction.vue";
import PageSection from "../components/organisms/PageSection.vue";
import Footer from "../components/molecules/Footer.vue";

export default {
	components: {
		Header,
		Introduction,
		PageSection,
		Footer
	},
	data() {
		return {};
	}
};
</script>
