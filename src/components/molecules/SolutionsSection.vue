<template>
	<div class="solution">
		<div class="container" data-aos="fade-up" data-aos-delay="0">
			<div class="row solution__bgpad">
				<div class="col-lg-12 col-xl-6">
					<AppSubheader
						className="solution__title common--fontweight"
						:content="content.bottomSection.title"
					/>
					<AppParagraph
						className="solution__shortnote no-bottom-m"
						:content="content.bottomSection.shortnote"
					/>
					<AppParagraph2
						className="solution__shortnote no-bottom-m subheader-text"
						:content="content.bottomSection.shortnoteSmall"
					/>
					<AppParagraph
						className="solution__description"
						:content="content.bottomSection.description"
					/>
				</div>
				<div class="col-lg-12 col-xl-6">
					<AppParagraph
						className="solution__linkhead no-bottom-m no-bottom-p"
						:content="content.bottomSection.linkListhead"
					/>
					<div
						v-for="(value, index) in content.bottomSection.linkList"
						:key="index"
					>
						<ImageLink
							classNameLink="solution__link"
							classNameText="solution__textlink no-bottom-m"
							:src="content.common.rightArrowWhite"
							:label="value.label"
							path=""
							:jsll="value.jsll"
						/>
					</div>
					<ImageLink2
						classNameLink="solution__downloadlink"
						classNameText="solution__downloadtext"
						:src="content.common.dwnIcon"
						:label="content.common.dwn"
						path=""
						:jsll="content.bottomSection.jsllDownload"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppParagraph from "../../components/atoms/AppParagraph.vue";
import AppParagraph2 from "../../components/atoms/AppParagraph2.vue";
import AppSubheader from "../../components/atoms/AppSubheader.vue";
import ImageLink from "./ImageLink.vue";
import ImageLink2 from "./ImageLink2.vue";

export default {
	name: "ImageTip",
	components: {
		AppParagraph,
		AppParagraph2,
		AppSubheader,
		ImageLink2,
		ImageLink
	},
	props: {
		className: String
	},
	data() {
		return {
			content: this.$locale
		};
	}
};
</script>
<style lang="scss" scoped>
.solution {
	.common {
		&-- {
			&shortnote {
				padding-top: 28px;
			}
			&padt6 {
				padding-top: 48px;
			}
		}
	}
}
</style>
