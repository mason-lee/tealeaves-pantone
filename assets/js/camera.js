/**
 * Configure a few settings and attach camera
 */

if ($(".snap-button").length > 0) {
		var width = $(document).width,
			height = $(window).height;	

		$("body").css({
			backgroundColor: "#202020"
		});

		Webcam.set({
			width: width,
			height: height,
			image_format: 'jpeg',
			jpeg_quality: 90
		});
	
	Webcam.attach( '#my_camera' );
	/*
		Code to handle taking the snapshot and displaying it locally
	 */
	function take_snapshot() {
		// take snapshot and get image data
		Webcam.snap( function(data_uri) {
			// display results in page
			document.getElementById('results').innerHTML = 
				'<h2>Here is your large image:</h2>' + 
				'<img src="'+data_uri+'"/>';
		} );
	}	
}
