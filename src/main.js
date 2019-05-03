import Vue from "vue";
import App from "../App.vue";
import router from "@/router";
import locale from "@/data/locale-en";
import VueScrollTo from "vue-scrollto";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(VueScrollTo, {
	duration: 650,
	easing: "ease"
});

const aosConfig = {
	offset: 120,
	delay: 0,
	duration: 700,
	easing: "ease",
	once: true,
	anchorPlacement: "top-bottom"
};

Vue.config.productionTip = false;
Vue.prototype.$locale = locale;

new Vue({
	created() {
		// let html = document.documentElement;
		// html.classList.remove("no-js");
		AOS.init(aosConfig);
	},
	router,
	render: h => h(App)
}).$mount("#app");
AOS.init(aosConfig);
