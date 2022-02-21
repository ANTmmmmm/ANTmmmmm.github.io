function scrollToChild(num) {
	var element = "body > *:nth-child(" + num + ")";
	$("html").animate({scrollTop: $(element).offset().top}, 200);
}

var links = [
	["主页", "https://qizhen-yang.cn"]
];

$(".footer, footer").append("<span>&copy; 2019~2021 Qizhen Yang</span>");