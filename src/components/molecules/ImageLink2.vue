<template>
	<div :class="className">
		<a
			v-if="isNewWindow"
			:class="classNameLink"
			:href="path"
			target="_blank"
			:data-bi-id="jsll"
		>
			<AppImage :src="src" :className="classNameImg" />
			<AppParagraph :content="label" :className="classNameText" />
		</a>
		<router-link
			v-else
			:class="classNameLink"
			:to="path"
			:data-bi-id="jsll"
		>
			<svg
				width="18px"
				height="30px"
				viewBox="0 0 18 30"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<!-- Generator: Sketch 54.1 (76490) - https://sketchapp.com -->
				<title>Fill 4</title>
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
						transform="translate(-1067.000000, -576.000000)"
						fill="#106EBE"
					>
						<path
							d="M1067.65229,606 L1084.34771,606 L1084.34771,604.125433 L1067.65229,604.125433 L1067.65229,606 Z M1085,591.659368 L1075.99902,600.83008 L1067,591.659368 L1068.30457,590.341623 L1075.07291,597.226593 L1075.07291,576 L1076.92709,576 L1076.92709,597.226593 L1083.69543,590.341623 L1085,591.659368 Z"
							id="Fill-4"
						></path>
					</g>
				</g>
			</svg>

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
		jsll: {
			type: String,
			required: true
		},
		classNameLink: String,
		classNameText: String,
		isNewWindow: {
			type: Boolean,
			default: false
		}
	}
};
</script>
