<template>
	<p :class="className">
		<span v-html="content"></span>
	</p>
</template>

<script>
export default {
	name: "AppParagraph2",
	data() {
		return {};
	},
	props: {
		content: String,
		className: String
	}
};
</script>
