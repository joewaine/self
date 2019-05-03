<template>
	<h3 :class="className">
		<span v-html="content"></span>
	</h3>
</template>

<script>
export default {
	name: "AppSubheader3",
	data() {
		return {};
	},
	props: {
		content: String,
		className: String
	}
};
</script>
