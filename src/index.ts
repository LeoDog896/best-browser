// shamelessly stolen from stackoverflow you actually think im going to write this myself? no.
function get_browser() {
	const ua = navigator.userAgent;
	let tem;
	let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 

	if (/trident/i.test(M[1])){
		tem = /\brv[ :]+(\d+)/g.exec(ua) || []; 
		return {name: "IE",version:(tem[1] || "")};
	}   
	if(M[1]==="Chrome"){
		tem = ua.match(/\bOPR|Edge\/(\d+)/);
		if(tem!=null)   {return {name: "Opera", version:tem[1]};}
	}   
	M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, "-?"];
	if ((tem = ua.match(/version\/(\d+)/i))!=null) {
		M.splice(1,1,tem[1]);
	}
	return {
		name: M[0],
		version: M[1]
	};
}

export const check = (failure = () => {
	for (;;) {
		alert("NO UPDATE YOUR BROWSER ITS NOT CHROME OVER VERSION 100 AAAAA");
	}
}) => {
	if (get_browser().name == "Chrome" && !get_browser().version.includes("100")) {
		failure();
	}
};