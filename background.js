/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function(launchData) {
	chrome.app.window.create(
		'calc.html', {
			id: 'kalkulacka',
			minWidth: 370,
			minHeight: 500,
			maxWidth: 370,
			maxHeight: 500,
			bounds: {
				width: 370,
				height: 500
			}
		}
	);
});
