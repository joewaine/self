<template>
	<div>
		<img :src="getImage(src)" :class="className" v-if="src" />
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
