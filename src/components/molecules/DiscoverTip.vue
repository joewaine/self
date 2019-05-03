<template>
	<div class="discover">
		<div class="container">
			<div class="row" :class="className">
				<div class="col-lg-12">
					<div class="common--tipbox">
						<AppParagraph
							className="common--tip"
							:content="tipContent.hint"
						/>
						<div class="common--horizondalline"></div>
					</div>
				</div>
				<div class="col-lg-6">
					<AppParagraph
						className="common--shortnote discover__headtext"
						:content="tipContent.title"
					/>
					<AppParagraph
						className="common--description common--padt44 common--padr107"
						:content="tipContent.description"
					/>
					<br />
					<AppParagraph
						className="common--description common--padt0 common--padr107"
						:content="tipContent.list.text"
					/>
					<br />
					<div>
						<ul class="common--mar0">
							<li
								v-for="(value, index) in tipContent.list
									.unorderlist"
								v-bind:key="index"
							>
								{{ value }}
							</li>
						</ul>
					</div>
					<AppLink
						className="common--learnmore"
						:label="content.common.lm"
						:path="content.common.lm"
					/>
				</div>
				<div class="col-lg-6">
					<div>
						<AppImage
							:src="tipContent.image"
							className="discover__image"
						/>
						<AppParagraph
							:content="tipContent.count"
							className="discover__count"
						/>
						<AppParagraph
							className="discover__additional common--shortnote common--padt34"
							:content="tipContent.additionalInfo"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppParagraph from "../../components/atoms/AppParagraph.vue";
import AppLink from "../../components/atoms/AppLink.vue";
import AppImage from "../../components/atoms/AppImage.vue";
export default {
	name: "ContentTip",
	components: {
		AppParagraph,
		AppLink,
		AppImage
	},
	data() {
		return {
			content: this.$locale
		};
	},
	props: {
		tipContent: Object,
		className: String
	}
};
</script>
<style lang="scss" scoped></style>
