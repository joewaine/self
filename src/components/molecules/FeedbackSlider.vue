<template>
	<div
		:class="{
			'feedback-slider': true,
			active: this.active,
			show: this.revealed
		}"
	>
		<section class="feedback-slider__content">
			<div
				title="Feedback"
				class="feedback-slider__content__icon"
				@click="toggleClass"
			>
<svg width="31px" height="27px" viewBox="0 0 31 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 54.1 (76490) - https://sketchapp.com -->
    <title>Fill 6</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop" transform="translate(-1061.000000, -698.000000)" fill="#106EBE">
            <path d="M1081.82731,698 C1081.46315,698 1081.15539,698.071086 1080.90503,698.211285 C1080.65171,698.350495 1080.39937,698.54697 1080.14703,698.798735 L1070.73234,708.155483 C1070.26725,708.617545 1069.74674,708.969028 1069.16685,709.209932 C1068.58499,709.450836 1067.9675,709.571288 1067.31241,709.571288 L1061,709.571288 L1061,723.071781 L1067.78048,723.071781 C1068.56916,723.071781 1069.32617,723.146817 1070.05845,723.297875 C1070.78973,723.447947 1071.51904,723.670092 1072.24538,723.960361 C1073.92071,724.653454 1075.66234,725 1077.4673,725 L1085.21754,725 C1085.53025,725 1085.83107,724.951622 1086.11903,724.85684 C1086.40601,724.762058 1086.67121,724.627784 1086.91365,724.457966 C1087.15511,724.288149 1087.36687,724.077851 1087.54895,723.832998 C1087.73103,723.587158 1087.87056,723.317622 1087.97248,723.026365 L1091.84662,711.455077 C1091.94854,711.163821 1092,710.856767 1092,710.535891 C1092,710.134055 1091.92281,709.756902 1091.77141,709.405419 C1091.62001,709.054924 1091.41121,708.74787 1091.14403,708.48722 C1090.87685,708.225582 1090.56711,708.019234 1090.21384,707.869163 C1089.85958,707.718104 1089.48651,707.643069 1089.09267,707.643069 L1082.37255,707.643069 C1082.42302,707.161261 1082.51901,706.697225 1082.65953,706.248985 C1082.80103,705.801733 1082.97223,705.363367 1083.1741,704.930925 C1083.52836,704.208213 1083.79554,703.476615 1083.97663,702.739094 C1084.15772,702.000585 1084.24975,701.224558 1084.24975,700.411014 C1084.24975,700.079277 1084.18642,699.767287 1084.05976,699.477018 C1083.93408,699.185761 1083.75893,698.930047 1083.53826,698.707902 C1083.31462,698.486744 1083.05832,698.312978 1082.76541,698.188576 C1082.4725,698.063188 1082.1598,698 1081.82731,698 M1081.82731,699.77716 C1081.91736,699.77716 1081.99256,699.790983 1082.06579,699.822577 C1082.14891,699.85812 1082.21917,699.905511 1082.2736,699.959813 C1082.3399,700.025963 1082.3874,700.096062 1082.42599,700.185907 C1082.45469,700.252057 1082.46854,700.324131 1082.46854,700.411014 C1082.46854,701.074487 1082.39333,701.715252 1082.24589,702.316525 C1082.09548,702.928658 1081.86986,703.545727 1081.56012,704.178594 C1081.32857,704.674224 1081.1267,705.191575 1080.96045,705.717812 C1080.78233,706.281567 1080.6616,706.868029 1080.60124,707.460416 L1080.39838,709.420229 L1082.37255,709.420229 L1089.09267,709.420229 C1089.24704,709.420229 1089.38063,709.446886 1089.51224,709.502176 C1089.66167,709.566351 1089.78734,709.649285 1089.89817,709.757889 C1089.99812,709.855633 1090.07629,709.970161 1090.13468,710.105423 C1090.19108,710.237723 1090.2178,710.377921 1090.2178,710.535891 C1090.2178,710.65733 1090.20098,710.767909 1090.15744,710.89231 L1086.28924,722.442864 C1086.2457,722.56924 1086.1883,722.679819 1086.12002,722.772626 C1086.0468,722.87037 1085.9706,722.946393 1085.89045,723.003657 C1085.78555,723.07573 1085.67769,723.13102 1085.56092,723.169525 C1085.45108,723.205068 1085.33926,723.22284 1085.21754,723.22284 L1077.4673,723.22284 C1075.90478,723.22284 1074.37788,722.918748 1072.90839,722.311552 C1072.08705,721.98179 1071.24988,721.728051 1070.41865,721.556258 C1069.57158,721.383479 1068.68395,721.294621 1067.78048,721.294621 L1062.78121,721.294621 L1062.78121,711.348448 L1067.31241,711.348448 C1068.20005,711.348448 1069.05404,711.181592 1069.85163,710.850843 C1070.64328,710.521081 1071.36269,710.038286 1071.99007,709.414305 L1081.40575,700.055582 C1081.55023,699.911435 1081.66007,699.830475 1081.74022,699.782097 C1081.75705,699.780122 1081.78574,699.77716 1081.82731,699.77716" id="Fill-6"></path>
        </g>
    </g>
</svg>

				
			</div>

			<div
				class="feedback-slider__content__text"
				v-if="!feedbackSubmitted"
			>
				<span class="feedback-text">Was this content helpful?</span>
				<a
					title="Yes"
					id="cta:feedback:helpful"
					v-on:click="
						toggleClass;
						feedbackFun();
					"
					data-bi-bhvr="VOTE"
					data-bi-fbnm="yes"
					data-bi-fbcat="content"
					>Yes
				</a>
				<a
					title="No"
					id="cta:feedback:not-helpful"
					v-on:click="
						toggleClass;
						feedbackFun();
					"
					data-bi-bhvr="VOTE"
					data-bi-fbnm="no"
					data-bi-fbcat="content"
					>No
				</a>
			</div>
			<div class="feedback-slider__content__text" v-else>
				<span class="feedback-text">Submitted!</span>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "feedback-slider",
	props: [],
	data() {
		return {
			active: false,
			revealed: false,
			feedbackSubmitted: false,
			disableFeedback: false
		};
	},
	mounted() {
		// var vm = this
		window.addEventListener("scroll", () => {
			var scrollPos = window.pageYOffset;
			var docHeight = document.documentElement.scrollHeight;
			var winHeight = 0;
			var perc = (100 * scrollPos) / (docHeight - winHeight);
			var isShown = false;
			if (perc >= 5) {
				isShown = true;
			} else {
				isShown = false;
				this.active = false;
			}
			this.isRevealed(isShown);
		});
	},
	methods: {
		toggleClass() {
			this.active = !this.active;
		},
		feedbackFun() {
			this.feedbackSubmitted = true;
			setTimeout(
				function() {
					this.toggleClass();
				}.bind(this),
				1000
			);
			// setTimeout(()=> {this.disableFeedback = true;}, 1000);
		},
		isRevealed(isShown) {
			this.revealed = isShown;
		}
	}
};
</script>

<style scoped lang="scss">
.feedback-slider {
	position: fixed;
	right: -225px;
	bottom: calc(30% - 116px);
	width: 225px !important;
	height: 50px;
	border: none;
	padding: 0;
	transition-duration: 0.4s;
	background-color: rgba(255, 255, 255, 0.8);
	z-index: 100000;
	// transform: translateX(50%);
	.feedback-text {
		font-size: 14px;
		line-height: 16px;
		margin-bottom: 2px;
		font-family: "Segoe UI Semibold";
		font-weight: 600;
	}
	&__content {
		height: 100%;
		width: 100%;
		margin: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: space-around;
		align-items: center;
		&__icon {
			background-repeat: no-repeat;
			background-position: 44% 50%;
			background-size: 20px 50px;
			height: 50px;
			width: 50px;
			padding-right: 0;
			padding-left: 0;
			cursor: pointer;
			border-right: 1px solid #000000;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			// background: black;
			svg {
				&:hover {
					transform: scale(1.03);
				}
			}
		    border: 2px solid #eee;
    		background-color: #ffffff;
		}
		&__text {
			width: 170px;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			padding: 0;
			padding-right: 0;
			a {
				text-decoration: none !important;
				color: #3c3c41 !important;
				border-bottom: 1px solid transparent !important;
				transition: all 250ms ease !important;
				cursor: pointer !important;
				font-size: 12px !important;
				line-height: 16px !important;
				span {
					color: rgb(0, 130, 115) !important;
				}
				&:hover {
					border-color: #3c3c41 !important;
				}
			}
			svg {
				&:hover {
					transform: scale(1.03);
				}
			}
			&__copy-svg-path {
				fill: #ffffff;
				transition: fill 0.3s ease-in-out;
			}
		}
	}
}
.make-light-blue {
	fill: rgb(0, 130, 115);
	transition: fill 0.3s ease-in-out;
}
.show {
	right: -175px;
}
.active {
	right: 0;
}
.feed-back-text {
	color: #3c3c41 !important;
}
</style>