<template>
	<div :class="className" class="video">
		<div v-on:click="playVideo(index)">
			<AppImage2
				:src="imageSrc"
				class="video__thumbnail"
				v-if="!isPlaying[index]"
			/>
		</div>
		<video
			preload="auto"
			v-on:ended="isPlaying[index] = false"
			v-on:click="playVideo(index)"
			:ref="'video__' + index"
		>
			<source v-if="src" :src="getVideo(src)" type="video/mp4" />
		</video>
	</div>
</template>

<script>
import AppImage2 from "../../components/atoms/AppImage2.vue";

export default {
	name: "VideoSection",
	data() {
		return {
			isVideoEnd: {},
			isPlaying: {}
		};
	},
	components: {
		AppImage2
	},
	props: {
		src: String,
		className: String,
		index: Number,
		imageSrc: String
	},
	methods: {
		getVideo(video) {
			// explanation: https://stackoverflow.com/a/40493036/1824444
			return require("../../assets/images/" + video);
		},
		playVideo(index) {
			console.log(this.isVideoEnd);
			this.isPlaying[index] = true;
			console.log(index, this.$refs["video__" + index].play());
		}
	},
	mounted() {
		this.$set(this.isVideoEnd, this.index, false);
		this.$set(this.isPlaying, this.index, false);
	}
};
</script>

<style lang="scss" scoped>
.video__thumbnail {
	position: absolute;
	width: 100%;
	height: 100%;
	cursor: pointer;
}
</style>
