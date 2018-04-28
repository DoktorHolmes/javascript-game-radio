songsarray = ["MUS_Blues_For_You.mp3", "MUS_Jazz_Blues_GT.mp3", "MUS_Jazz_Club_Blues_CAS.mp3", "MUS_Joe_Cool_CAS.mp3", "MUS_Sleepy_Town_Blues_CAS.mp3", "MUS_Slow_Sax_KOS.mp3"];

songtoplay = "";
voiceline = new Audio;
songaudio2 = new Audio;
voiceline = document.getElementById('AudioBase')
songaudio = document.getElementById('AudioBase');
function UpdateAudio(filename){
voiceline.src=filename;
}
function UpdateAudio2(filename){
songaudio.src=filename;
}

function playRandomSong2(){
		var index = Math.floor(Math.random() * (songsarray.length)),
		line = songsarray[index];

		UpdateAudio2("Songs/" + line)
		songaudio.currentTime = 0.01;
		songaudio.addEventListener('ended', playRandomSong2, false);
		songaudio.addEventListener('loadedmetadata', function(){
			songaudio.play()
		})
		songaudio.play();
	}

playRandomSong2();