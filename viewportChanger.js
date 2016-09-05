window.addEventListener('resize', windowResized);

function windowResized(argument) {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		var mobile = 320;
		var pad = 768;

		var deviceWidth = (document.body.clientWidth < window.screen.width) ? document.body.clientWidth : window.screen.width;
		var deviceHeight = (document.body.clientHeight < window.screen.height) ? document.body.clientHeight : window.screen.height;

		var orientation = (deviceWidth > deviceHeight) ? 'landscape' : 'portrait';

		var dpt = window.devicePixelRatio || Math.round(window.screen.availWidth / document.documentElement.clientWidth);

		if (dpt > 2) dpt = 1.5;

		var widthDPI = window.screen.width * dpt;

		if (orientation == 'landscape') {
			document.getElementById('viewport').setAttribute('content', 'width=' + pad + ',  user-scalable=no');
		} else {
			if (widthDPI >= pad) {
				document.getElementById('viewport').setAttribute('content', 'width=' + pad + ',  user-scalable=no');
			} else {
				document.getElementById('viewport').setAttribute('content', 'width=' + mobile);
			}
		}

	}
}

window.dispatchEvent( new Event('resize') );