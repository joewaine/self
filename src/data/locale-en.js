export default {
	common: {
		lm: "Learn more",
		rt: "Read the tips",
		dwn: "Download this eBook",
		dwnIcon: "i-download.svg",
		rightArrow: "i-link-blue.svg",
		rm: "Read more",
		heroIcon: "i-down.svg",
		map: "map.svg",
		rightArrowWhite: "i-link-white.svg"
	},
	introduction: {
		title: "5 tips to prepare for the new CCPA",
		subTitle: "California Consumer Privacy Act",
		jsll: "navigation:home-select-01"
	},
	trust: {
		trustHead: "Building customer trust",
		title:
			"Today, building customer trust in how you handle data is an important part of growing your business",
		description:
			"That comes from increasing public interest into knowing how their private information is being used—including where and what information is stored, and if it’s sold to any third-party organization. Recognizing the success of the General Data Protection Regulation (GDPR), California took the initiative with the California Consumer Privacy Act (CCPA). While other states and the federal government are considering regulations of their own, CCPA is the first US data privacy regulation of its kind. This law will grant consumers new rights concerning the collection and sale of their personal information.",
		additionalInfo: "A global trend toward stronger privacy protections",
		descriptionInfo:
			"Driven by the continued rise in consumer data breaches and growing privacy concerns, the State of California has passed the California Consumer Privacy Act (CCPA). The law will significantly strengthen privacy in the U.S. and is part of a global trend toward stronger privacy protections and greater data transparency, which included the General Data Protection Regulation (GDPR).",
		linkText: []
	},
	ccpa: {
		title: "The California Consumer Privacy Act",
		description:
			"CCPA grants consumers new rights concerning the collection and sale of their data",
		additionalInfo: "Let Microsoft help you",
		descriptionInfo:
			"Microsoft can provide tools and guidance to help. To help transform organizational compliance, Microsoft already employs key principles for data collection and storage such as privacy, transparency, and security. Through services like Compliance Manager, Microsoft Information Protection and Advanced Data Governance, and tools such as Content Search eDiscovery for Data Subject Requests, Microsoft offers solutions for general compliance and easing the adoption of the CCPA.",
		textList: [
			"The CCPA impacts many large businesses, government agencies, and organizations who have California-based customers.",
			"Organizations must, upon request, disclose the data that they collect, the purpose for collecting it, and categories of third parties that share the data.",
			"Consumers have the right to ask businesses to stop selling their personal information and companies are prohibited from discriminating consumers exercising this right."
		],
		bottomText:
			"Though the CCPA isn’t planned to go into effect until January 1, 2020, you can prepare well in advance. By becoming aware of the policies and processes necessary for compliance, you can start to implement them within your organization. However, how do you get started?",
		linkText: []
	},
	tipsSection: {
		head: "5 Tips to help prepare you for the CCPA",
		content: [
			{
				hint: "TIP 1",
				title: "Use the GDPR assessment in Compliance Manager",
				description:
					"Completing the GDPR assessment in Compliance Manager can help your organization with their initial CCPA compliance. Compliance Manager enables you to measure institutional readiness and monitor compliance activities for regulations such as the GDPR, Health Insurance Portability and Accountability Act (HIPAA), NIST 800-53, and ISO 27001 status. You can be more confident that you’re considering the right measures to prepare for compliance regulations while demonstrating which data protection capabilities are in place and their status.",
				videoUrl: "additional-visual-cues-capture.mp4",
				playUrl: "playIcon.png",
				jsllPlay: "tip-01-select-video-01",
				additionalInfo:
					"Compliance Manager enables you to assign, track, and record your compliance activities, so you can collaborate across teams and manage your documents for creating audit reports more easily.",
				linkText: [
					{
						link: "",
						text:
							"<b>Read the White Paper:</b> <i>Use Compliance Manager to help meet data protection and regulatory requirements when using Microsoft cloud services</i>",
						jsll: "navigation:tip-01-select-01"
					}
				]
			},
			{
				hint: "TIP 2",
				title:
					"Establish a process to efficiently respond to Data Subject Requests",
				description:
					"The CCPA requires a 12-month look-back period, meaning that the public can request data records dating back an entire year from when the request is made. In preparation, you should begin to identify collected records of personal information dating back to January 2019 and improve standards for how your organization inventories personal information.<br><br> Using search and discovery tools from Microsoft, you can effectively respond to Data subject requests (DSR) while protecting the security and privacy, and use the Content Search tool in the Microsoft 365 security & compliance center to search for most DSR-related data.",
				videoUrl: "additional-visual-cues-capture.mp4",
				playUrl: "playIcon.png",
				jsllPlay: "tip-02-select-video-01",
				additionalInfo:
					"Consumers around the globe want control over their data, and US consumers are no exception. ",
				linkText: [
					{
						link:
							"https://techcommunity.microsoft.com/t5/Security-Privacy-and-Compliance/Introducing-Data-Privacy-in-Security-amp-Compliance-Center/ba-p/183648",
						text:
							"<b>Read the</b> <i>GDPR Dashboard & DSR Announcement blog post</i>",
						jsll: "navigation:tip-02-select-01"
					}
				]
			},
			{
				hint: "TIP 3",
				title:
					"Discover, classify and label, and protect sensitive data",
				description:
					"To move toward CCPA compliance, you can use data labeling—commonly known as classification—to better identify when US personally identifiable information (PII) sensitive data types are stored within documents. <br><br>Microsoft tools, such as Microsoft Information Protection, can help you get started with data classification, identifying sensitive data and implementing processes related to the data. Using data governance features within Office 365, you can automatically classify data based on the sensitivity of the content. Using data classification, you can also implement safeguards to protect data sharing both internally and externally. ",
				videoUrl: "additional-visual-cues-capture.mp4",
				playUrl: "playIcon.png",
				jsllPlay: "tip-03-select-video-01",
				additionalInfo:
					"<b>Through services such as Microsoft Information Protection</b>, data can be automatically encrypted based on its sensitivity type or risk level. Plus, the protection from unauthorized access travels with the document. ",
				linkText: [
					{
						link:
							"https://techcommunity.microsoft.com/t5/Security-Privacy-and-Compliance/Protect-your-sensitive-information-wherever-it-lives-or-travels/ba-p/360595",
						text:
							"<b>Read the</b> <i>Protect your sensitive information – wherever it lives or travels blog post</i>",
						jsll: "navigation:tip-03-select-01"
					}
				]
			},
			{
				hint: "TIP 4",
				title:
					"Use encryption to protect and control your sensitive emails",
				description:
					"CCPA suggests using encryption to safeguard emails as an effective way to securely protect data and personal information from unauthorized parties. For organizations using Office 365, messaging encryption will be on by default, protecting emails both internally and externally. You can also extend company data classification and protection capabilities when sending emails, labeling sensitive data automatically to inform users of the correct usage, and when needed encrypting any attachments for further protection. You can also implement these same policies to encrypt email and documents stored in employee mobile devices, as well as content stored in third-party apps and file sharing services.",
				videoUrl: "additional-visual-cues-capture.mp4",
				playUrl: "playIcon.png",
				jsllPlay: "tip-04-select-video-01",
				additionalInfo: "",
				linkText: [
					{
						link: "",
						text:
							"<b>Read</b> <i>Introduction to Encryption in Office 365 white paper - Level 100</i>",
						jsll: "navigation:tip-04-select-01"
					},
					{
						link: "",
						text:
							"<b>Read</b> <i>Microsoft Cloud Encryption documentation - Level 200</i>",
						jsll: "navigation:tip-04-select-01"
					}
				]
			},
			{
				hint: "TIP 5",
				title:
					"Champion consumer privacy rights to build a sustainable business",
				description:
					"In response to GDPR and CCPA, government agencies around the world are enacting similar privacy laws. By enhancing privacy programs to keep up with the evolving regulatory landscape, you can continue building trust with customers. <br><br>To begin, champion consumer privacy rights in your company by sharing the Microsoft Journey to Compliance e-book. This e-book explains how Microsoft assesses compliance risk to meet our obligations and offers examples of key implementation work streams for GDPR and CCPA. To further understand the importance of consumer privacy rights, watch the Championing Data Privacy Rights to Drive Differentiation video webcast.",
				videoUrl: "additional-visual-cues-capture.mp4",
				playUrl: "playIcon.png",
				jsllPlay: "tip-05-select-video-01",
				additionalInfo:
					"<b>In the United States</b>, federal agencies—such as the Federal Trade Commission (FTC), National Telecommunications and Information Administration (NTIA), and National Institute of Standards and Technology (NIST) —are creating US privacy standards and guidance.",
				linkText: [
					{
						link: "",
						text:
							"<b>To further understand the importance of consumer privacy rights</b> from the Analyst, Microsoft internal, and Microsoft product perspective, watch the <i>Championing Data Privacy Rights</i> to Drive Differentiation video webcast.",
						jsll: "navigation:tip-05-select-01"
					}
				]
			}
		]
	},
	bottomSection: {
		title: "Microsoft 365 solutions",
		shortnote:
			"Microsoft 365 offers a set of security and mobility software capabilities specifically tailored for people who work under strict compliance regulations.",
		description:
			"Delivered through a unique environment that helps meet many stringent requirements regardless of organization, Microsoft 365 is an ideal cloud solution for customers beginning their journey to compliance and other data privacy regulations.",
		linkListhead: "Continue your compliance journey",
		jsllDownload: "solution-download-select-01",
		linkList: [
			{
				label: "Learn more about the Microsoft Trust Center.",
				link: "",
				jsll: "navigation:solution-select-01"
			},
			{
				label: "Get further information on CCPA.",
				link: "",
				jsll: "navigation:solution-select-02"
			},
			{
				label: "Discover new compliance offerings in Microsoft 365.",
				link: "",
				jsll: "navigation:solution-select-03"
			}
			// {
			//     label: "Discover new Information Protection and Compliance offerings in Microsoft 365. ",
			//     link: ""
			// },
			// {
			//     label: "Get further information on GDPR and how Microsoft can help.",
			//     link: ""
			// }
		]
	}
};
