<template>
	<div class="pagesection">
		<div id="trustSection">
			<ContentTip :tipContent="content.trust" className="trustcontent" />
		</div>
		<div id="ccpaSection">
			<ContentTip :tipContent="content.ccpa" className="ccpacontent" />
		</div>
		<div class="pagesection__movetop">
			<div
				v-for="(value, index, key) in 5"
				:key="key"
				:id="'tipSection--' + index"
			>
				<ContentTip
					:tipContent="content.tipsSection.content[index]"
					:index="index"
					:className="[index % 2 == 0 ? '' : 'evencontent']"
				/>
			</div>
			<SolutionsSection className="solutionsection" />
		</div>
	</div>
</template>

<script>
import ContentTip from "../../components/molecules/ContentTip.vue";
import SolutionsSection from "../../components/molecules/SolutionsSection.vue";

export default {
	name: "PageSection",
	components: {
		ContentTip,
		SolutionsSection
	},
	data() {
		return {
			content: this.$locale
		};
	}
};
</script>
<style lang="scss" scoped>
@import "../../styles/main";
.pagesection {
	&__ {
		&movetop {
			// top: -100px;
			position: relative;
			@include media-breakpoint-down(lg) {
				top: 0px;
			}
		}
	}
}
</style>
