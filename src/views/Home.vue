<template>
	<div class="home">
		<DownloadSlider />
		<ShareSlider />
		<FeedbackSlider />
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




import DownloadSlider from "../components/molecules/DownloadSlider.vue";
import ShareSlider from "../components/molecules/ShareSlider.vue";
import FeedbackSlider from "../components/molecules/FeedbackSlider.vue";


export default {
	components: {
		DownloadSlider,
		FeedbackSlider,
		ShareSlider,
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
