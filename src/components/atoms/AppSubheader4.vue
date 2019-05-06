<template>
		<h2 :class="className">
		<span v-html="content"></span>
	</h2>
</template>

<script>
export default {
	name: "AppSubheader4",
	data() {
		return {};
	},
	props: {
		content: String,
		className: String
	}
};
</script>
