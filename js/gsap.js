(function() {
	"use strict";
	console.log("Linked up");

	gsap.registerPlugin(ScrollTrigger);

	gsap.to("#infoCon", 1, {scrollTrigger: {
										trigger: "#infoCon",
										//"restart pause reverse none"
										toggleActions:"restart none none none"}, 
										opacity: 1, ease:Bounce.easeOut});

})();