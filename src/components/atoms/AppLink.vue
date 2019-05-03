<template>
	<a
		v-if="isNewWindow"
		:class="className"
		:href="path"
		target="_blank"
		:data-bi-id="jsll"
	>
		{{ label }}
	</a>
	<a
		v-else-if="isRowAnchor"
		:class="className"
		:href="path"
		:data-bi-id="jsll"
	>
		{{ label }}
	</a>
	<router-link v-else :class="className" :to="path" :data-bi-id="jsll">
		{{ label }}
	</router-link>
</template>

<script>
export default {
	name: "AppLink",
	data() {
		return {};
	},
	props: {
		label: String,
		path: String,
		innerContent: String,
		className: String,
		jsll: {
			type: String,
			required: true
		},
		isRowAnchor: {
			type: Boolean,
			default: false
		},
		isNewWindow: {
			type: Boolean,
			default: false
		}
	}
};
</script>
