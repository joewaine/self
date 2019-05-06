<template>
	<div :class="className">
		<div class="tipsection">
			<div class="container">
				<div class="row" data-aos="fade-up" data-aos-delay="0">
					<div class="col-md-12" v-if="index == 0">
						<h2 class="tipsection__heading common--title">
							{{ content.tipsSection.head }}
						</h2>
					</div>
					<div class="col-lg-12 col-xl-6 tipsection--movetop">
						<div class="common--tipbox" v-if="tipContent.hint">
							<AppParagraph
								className="common--tip"
								:content="tipContent.hint"
							/>
							<div class="common--horizondalline"></div>
						</div>
						<AppSubheader
							v-if="tipContent.trustHead"
							className="common--title common--fontweight"
							:content="tipContent.trustHead"
						/>
						<AppParagraph
							className="common--shortnote common--fontweight"
							:content="tipContent.title"
						/>
						<AppParagraph
							className="common--description common--padr84 tipsection__left--description"
							:content="tipContent.description"
						/>
						<ul v-if="tipContent.textList">
							<li
								v-for="(value, index) in tipContent.textList"
								:key="index"
								class="tipsection__listview"
							>
								<AppParagraph
									v-if="tipContent.descriptionInfo"
									className="common--description"
									:content="value"
								/>
							</li>
						</ul>
						<AppParagraph
							v-if="tipContent.bottomText"
							className="common--description tipsection--bottomtext"
							:content="tipContent.bottomText"
						/>
						<div
							class="tipsection__links"
							v-if="
								tipContent.linkText &&
									tipContent.linkText.length > 0
							"
						>
							<div
								class="tipsection__linksection"
								v-for="(value,
								index,
								key) in tipContent.linkText"
								:key="key"
							>
								<ImageLink
									className="common--flexboxcenter"
									classNameLink="tipsection__linktext"
									src=""
									:label="value.text"
									:isNewWindow="true"
									:path="value.link"
									:jsll="value.jsll"
								/>
							</div>
						</div>
					</div>
					<div class="col-lg-12 col-xl-6">
						<div class="tipsection--mar20">
							<div
								class="tipsection__videosection"
								v-if="tipContent.videoUrl"
							>
								<a :data-bi-id="tipContent.jsllPlay">
									<VideoSection
										v-if="tipContent.videoUrl"
										:imageSrc="tipContent.playUrl"
										:src="tipContent.videoUrl"
										class="tipsection__video"
										:index="index"
									/>
								</a>
							</div>
							<div
								class="tipsection__right"
								v-if="tipContent.additionalInfo"
							>
								<AppSubheader4
									className="common--title common--fontweight additional-bottom-pad secondaryH2"
									:content="tipContent.additionalInfo"
								/>
								<AppSubheader5
									className=""
									:content="tipContent.additionalInfoSmall"
								/>

								<AppParagraph
									v-if="tipContent.descriptionInfo"
									className="common--description tipsection--padt12"
									:content="tipContent.descriptionInfo"
								/>
							</div>
							<div
								class="tipsection__right"
								v-if="tipContent.additionalInfoSmall"
							>
								<AppSubheader5
									className="additional-info-small"
									:content="tipContent.additionalInfoSmall"
								/>

								<AppParagraph
									v-if="tipContent.descriptionInfo"
									className="common--description tipsection--padt12"
									:content="tipContent.descriptionInfo"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppParagraph from "../../components/atoms/AppParagraph.vue";
import AppSubheader from "../../components/atoms/AppSubheader.vue";
import AppSubheader3 from "../../components/atoms/AppSubheader3.vue";
import AppSubheader4 from "../../components/atoms/AppSubheader4.vue";
import AppSubheader5 from "../../components/atoms/AppSubheader5.vue";




import VideoSection from "../../components/molecules/VideoSection.vue";
import ImageLink from "./ImageLink.vue";

export default {
	name: "ContentTip",
	components: {
		AppParagraph,
		AppSubheader,
		AppSubheader3,
		AppSubheader4,
		AppSubheader5,
		VideoSection,
		ImageLink
	},
	data() {
		return {
			content: this.$locale
		};
	},
	props: {
		tipContent: Object,
		className: [String, Array],
		index: Number
	}
};
</script>

<style lang="scss" scoped>
@import "../../styles/main";
//start: even content
.evencontent {
	.tipsection {
		.row {
			@include flex-direction(row-reverse);
		}
		&__ {
			&heading {
				display: none;
			}
		}
		&--mar20 {
			margin-right: 20px;
			@include media-breakpoint-down(sm) {
				margin-right: 0px;
			}
		}
	}
	.common {
		&-- {
			&fontweight {
				padding-right: 13%;
			}
			&padr107,
			&padr84 {
				padding-right: 0px;
			}
		}
	}
}
//end: even content

// start: trust content
.trustcontent {
	.tipsection {
		padding-top: 4.7%;
		&__left {
			&--description {
				// padding-top: 7%;
				padding-top: 16px;
			}
		}
		&__right {
			// padding: 63px 56px 59px 9.3%;
			padding: 56px 56px 59px 9.3%;
			@include media-breakpoint-down(lg) {
				// padding: 9.2% 4% 9.2% 9.3% !important;
				padding: 8.6% 9.3% 9.2% 9.3% !important;
			}
			&-- {
				&description {
					padding-right: 40px;
					// font-size: 41px !important;
					font-size: 30px !important;
					line-height: 38px;
					// margin-bottom: 39%;
					@include media-breakpoint-down(lg) {
						margin-bottom: 10%;
					}
					@include media-breakpoint-down(sm) {
						font-size: 35px !important;
						line-height: 42px;
						padding-right: 0px;
					}
				}
			}
		}
		.common {
			&-- {
				&padr84 {
					padding-right: 51px;
					@include media-breakpoint-down(lg) {
						padding-right: 0px !important;
					}
				}
				&shortnote {
					font-weight: 100;
					font-size: 30px;
					line-height: 40px;
					margin-bottom: 30px;
					font-size: 32px !important;
					line-height: 40px;

				}
				&title {
					// padding-top: 17px;
				}
				&padt34 {
					padding-top: 38px;
				}
			}
		}
	}
}
// end: trust content

// start: ccpa content
.ccpacontent {
	.tipsection {
		padding-top: 22px;
		&__right {
			// padding: 59px 29px 176px 9.3%;
			background: $bg-ccpacontent;
			@include media-breakpoint-down(lg) {
				// padding: 9.2% 4% 9.2% 9.3% !important;
				padding: 8.6% 9.3% 9.2% 9.3% !important;
			}
			&--description {
				// font-size: 41px;
				font-size: 32px;
				padding-bottom: 12px;
				margin-bottom: 0px;
				@include media-breakpoint-down(sm) {
					font-size: 35px;
					line-height: 42px;
				}
			}
		}
		&--bottomtext {
			padding: 11px 54px 0px 0px !important;
			@include media-breakpoint-down(lg) {
				padding: 11px 0px 30px 0px !important;
			}
		}
		&--padt12 {
			padding-top: 12px !important;
		}
		&--movetop {
			// top: -100px;
			position: relative;
			@include media-breakpoint-down(lg) {
				top: 0px;
			}
		}
		.common {
			&--description {
				margin-bottom: 0px;
				padding-top: 22px;
			}
		}
		ul .common--description {
			padding-top: 0px;
		}
	}
}
// end: ccpa content
</style>
