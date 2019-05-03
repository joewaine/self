<template>
	<div :class="className">
		<a
			v-if="isNewWindow"
			:class="classNameLink"
			:href="path"
			target="_blank"
		>
			<AppParagraph :content="label" :className="classNameText" />
			<div class="arrow-box">
				<svg
					width="33px"
					height="33px"
					viewBox="0 0 33 33"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<!-- Generator: Sketch 54.1 (76490) - https://sketchapp.com -->
					<title>Group 5</title>
					<desc>Created with Sketch.</desc>
					<g
						id="Page-1"
						stroke="none"
						stroke-width="1"
						fill="none"
						fill-rule="evenodd"
					>
						<g
							id="Desktop"
							transform="translate(-79.000000, -2081.000000)"
						>
							<g
								id="Group-5"
								transform="translate(80.000000, 2082.000000)"
							>
								<path
									d="M15.5,31 C24.0599396,31 31,24.0600656 31,15.5 C31,6.93993443 24.0599396,0 15.5,0 C6.94006039,0 0,6.93993443 0,15.5 C0,24.0600656 6.94006039,31 15.5,31 Z"
									id="Stroke-1"
									stroke="#106EBE"
									stroke-width="2"
								></path>
								<polygon
									id="Fill-3"
									fill="#106EBE"
									points="17.5321739 16.8143096 8 16.8143096 8 14.1670256 17.5227826 14.1670256 13.9206957 11.0251256 15.5631304 9 23 15.4891122 15.5652174 22 13.9186087 19.9790221"
								></polygon>
							</g>
						</g>
					</g>
				</svg>
			</div>
		</a>
		<router-link v-else :class="classNameLink" :to="path">
			<div class="arrow-box">
				<svg
					viewBox="0 0 32 33"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<!-- Generator: Sketch 54.1 (76490) - https://sketchapp.com -->
					<title>Group 5 Copy</title>
					<g
						id="Page-1"
						stroke="none"
						stroke-width="1"
						fill="none"
						fill-rule="evenodd"
					>
						<g
							id="Desktop"
							transform="translate(-601.000000, -4880.000000)"
						>
							<g
								id="Group-5-Copy"
								transform="translate(602.000000, 4881.000000)"
							>
								<path
									d="M14.5729,30.5001 C22.6209,30.5001 29.1459,23.6721 29.1459,15.2501 C29.1459,6.8281 22.6209,0.0001 14.5729,0.0001 C6.5249,0.0001 -0.0001,6.8281 -0.0001,15.2501 C-0.0001,23.6721 6.5249,30.5001 14.5729,30.5001 Z"
									id="Stroke-1"
									stroke="#FFFFFF"
									stroke-width="2"
								></path>
								<polygon
									id="Fill-3"
									fill="#FFFFFF"
									points="16.4005 16.5177 7.2655 16.5177 7.2655 13.9647 16.3915 13.9647 12.9395 10.9347 14.5135 8.9817 21.6405 15.2397 14.5155 21.5187 12.9375 19.5697"
								></polygon>
							</g>
						</g>
					</g>
				</svg>
			</div>
			<AppParagraph
				:content="label"
				v-if="label"
				:className="classNameText"
			/>
		</router-link>
	</div>
</template>

<script>
import AppParagraph from "../../components/atoms/AppParagraph.vue";
export default {
	name: "ImageLink",
	data() {
		return {};
	},
	components: {
		AppParagraph
	},
	props: {
		className: String,
		src: String,
		classNameImg: String,
		label: String,
		path: String,
		classNameLink: String,
		classNameText: String,
		isNewWindow: {
			type: Boolean,
			default: false
		}
	}
};
</script>
