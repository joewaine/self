<template>
	<p :class="className">
		<span v-html="content"></span>
	</p>
</template>

<script>
export default {
	name: "AppParagraph",
	data() {
		return {};
	},
	props: {
		content: String,
		className: String
	}
};
</script>
