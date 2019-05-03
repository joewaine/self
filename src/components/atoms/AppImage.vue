<template>
	<div>
		<div class="arrow-box-white">
			<!-- <img :src="getImage(src)" :class="className" v-if="src"> -->
			<svg
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
						transform="translate(-79.000000, -390.000000)"
					>
						<g
							id="Group-5"
							transform="translate(95.500000, 406.500000) rotate(-270.000000) translate(-95.500000, -406.500000) translate(80.000000, 391.000000)"
						>
							<path
								d="M15.5,31 C24.0599396,31 31,24.0600656 31,15.5 C31,6.93993443 24.0599396,0 15.5,0 C6.94006039,0 0,6.93993443 0,15.5 C0,24.0600656 6.94006039,31 15.5,31 Z"
								id="Stroke-1"
								stroke="#FFFFFF"
								stroke-width="2"
							></path>
							<polygon
								id="Fill-3"
								fill="#FFFFFF"
								points="17.5321739 16.8143096 8 16.8143096 8 14.1670256 17.5227826 14.1670256 13.9206957 11.0251256 15.5631304 9 23 15.4891122 15.5652174 22 13.9186087 19.9790221"
							></polygon>
						</g>
					</g>
				</g>
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	name: "AppLogo",
	data() {
		return {};
	},
	props: {
		src: String,
		className: String
	},
	methods: {
		getImage(img) {
			// explanation: https://stackoverflow.com/a/40493036/1824444
			return require("../../assets/images/" + img);
		}
	}
};
</script>
