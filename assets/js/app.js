var volume, audio, currentPlaying, buttonIcon, isPaused;

var playlist = {
	bitconneeect: function() {
		audio = new Audio('assets/audio/bitconneeect.mp3');
	}, 
	soMuchMoney: function() {
		audio = new Audio('assets/audio/soMuchMoney.mp3');
	}, 
	excited: function() {
		audio = new Audio('assets/audio/excited.mp3');
	}, 
	heheheey: function() {
		audio = new Audio('assets/audio/heheheey.mp3');
	}, 
	mmhmmhnonono: function() {
		audio = new Audio('assets/audio/mmhmmhnonono.mp3');
	}, 
	toTheBank: function() {
		audio = new Audio('assets/audio/toTheBank.mp3');
	}, 
	independently: function() {
		audio = new Audio('assets/audio/independently.mp3');
	}, 
	loooooooove: function() {
		audio = new Audio('assets/audio/loooooooove.mp3');
	}, 
	mywife: function() {
		audio = new Audio('assets/audio/mywife.mp3');
	}, 
	heyEveryBody: function() {
		audio = new Audio('assets/audio/heyEveryBody.mp3');
	}, 
	thatsaScam: function() {
		audio = new Audio('assets/audio/thatsaScam.mp3');
	}, 
	waves: function() {
		audio = new Audio('assets/audio/waves.mp3');
	}, 
	whaaat: function() {
		audio = new Audio('assets/audio/whaaat.mp3');
	}, 
	whatAmIGonnaDo: function() {
		audio = new Audio('assets/audio/whatAmIGonnaDo.mp3');
	}, 
	whoaThatsReal: function() {
		audio = new Audio('assets/audio/whoaThatsReal.mp3');
	}, 
	wowwowWhatsUp: function() {
		audio = new Audio('assets/audio/wowwowWhatsUp.mp3');
	}, 
}

Player = {
	playToEnd: function(audio, $button) {
		var isPlaying = true;

		setInterval(function() {
			if (isPlaying && audio.ended) {
				isPlaying = false;
				$button.removeClass('stop').addClass('play');

				clearInterval();
			}
		}, 100)
	}
}


$(document).ready(function(){
	// Semantic UI Range
	$('#volume-slider').range({
		min: 0,
		max: 10,
		start: 3,
		onChange: function(val) {
			$("#volume").html(val)
			volume = val / 10;
			if (audio) {
				audio.volume = volume;
			}
		}
	});

	$("#player .button").on('click', function() {
		$buttonIcon = $(this).find('.icon')

		if ($buttonIcon.hasClass('stop') && audio && !audio.ended) {
			isPaused = true;
			audio.pause();
			$buttonIcon.removeClass('stop').addClass('play');
		} else {
			$buttonIcon.removeClass('play').addClass('stop');
			
			clip = $(this).attr('id');
			currentPlaying = clip;
			playlist[clip]();
			audio.volume = volume;
			audio.play();

			Player.playToEnd(audio, $buttonIcon);
		}
	});

});