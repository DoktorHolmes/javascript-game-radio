songsarray = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3", "song6.mp3", "song7.mp3", "song8.mp3", "song9.mp3", "song10.mp3", "song11.mp3", "song12.mp3", "song13.mp3", "song14.mp3", "song15.mp3", "song17.mp3", "song18.mp3", "song19.mp3", "song20.mp3", "song21.mp3", "song22.mp3", "song23.mp3", "song24.mp3"];
hellosarray = ["intro01.mp3", "intro02.mp3", "intro03.mp3", "intro04.mp3", "intro05.mp3", "intro06.mp3", "intro07.mp3", "intro08.mp3", "intro09.mp3", "intro10.mp3", "intro11.mp3", "intro12.mp3", "intro13.mp3", "intro14.mp3", "intro15.mp3"];
commercialsarray = ["Decapitated Villains.mp3", "Lance and Janice.mp3", "My Blaster Runs Hot.mp3", "QPore.mp3", "Rusty Pete.mp3", "Unicop.mp3", "War Crok.mp3"]
songtoplay = "";
voiceline = new Audio;
songaudio2 = new Audio;
voiceline = document.getElementById('AudioBase');
songaudio = document.getElementById('AudioBase');
function UpdateAudio(filename){
voiceline.src=filename;
}
function UpdateAudio2(filename){
songaudio.src=filename;
}
function playRandomHello(){
voiceline.removeEventListener('ended', playRandomSong2, false);
voiceline.removeEventListener('ended', playRandomSong1, false);
voiceline.removeEventListener('ended', playRandomHello, false);
voiceline.removeEventListener('ended', playRandomCommercial, false);
voiceline.addEventListener('loadedmetadata', function(){
voiceline.currentTime = 0.1;
}, false);
		var index = Math.floor(Math.random() * (hellosarray.length)),
		line = hellosarray[index];

	        UpdateAudio("PR2/Hellos/" + line)
		voiceline.currentTime = 0.01;
voiceline.addEventListener('loadedmetadata', function(){
voiceline.currentTime = 0.1;
}, false);
		voiceline.addEventListener('ended', playRandomCommercial, false);
		voiceline.play();
	}

function playRandomSong1(){ 
voiceline.removeEventListener('ended', playRandomSong2, false);
voiceline.removeEventListener('ended', playRandomSong1, false);
voiceline.removeEventListener('ended', playRandomHello, false);
voiceline.removeEventListener('ended', playRandomCommercial, false);
voiceline.addEventListener('loadedmetadata', function(){
voiceline.currentTime = 0.1;
}, false);
		var index = Math.floor(Math.random() * (songsarray.length)),
		line = songsarray[index];

	        UpdateAudio("PR2/Songs/" + line)
		voiceline.currentTime = 0.01;
voiceline.addEventListener('loadedmetadata', function(){
voiceline.currentTime = 0.1;
}, false);
		voiceline.addEventListener('ended', playRandomSong2, false);
		voiceline.play();
	}

function playRandomSong2(){
voiceline.removeEventListener('ended', playRandomSong2, false);
voiceline.removeEventListener('ended', playRandomSong1, false);
voiceline.removeEventListener('ended', playRandomHello, false);
voiceline.removeEventListener('ended', playRandomCommercial, false);
voiceline.addEventListener('loadedmetadata', function(){
voiceline.currentTime = 0.1;
}, false);
		var index = Math.floor(Math.random() * (songsarray.length)),
		line = songsarray[index];

	        UpdateAudio("PR2/Songs/" + line)
		voiceline.currentTime = 0.01;
voiceline.addEventListener('loadedmetadata', function(){
voiceline.currentTime = 0.1;
}, false);
		voiceline.addEventListener('ended', playRandomHello, false);
		voiceline.play();
	}


function playRandomCommercial(){
voiceline.removeEventListener('ended', playRandomSong2, false);
voiceline.removeEventListener('ended', playRandomSong1, false);
voiceline.removeEventListener('ended', playRandomHello, false);
voiceline.removeEventListener('ended', playRandomCommercial, false);
voiceline.addEventListener('loadedmetadata', function(){
voiceline.currentTime = 0.1;
}, false);
		var index = Math.floor(Math.random() * (commercialsarray.length)),
		line = commercialsarray[index];

	        UpdateAudio("PR2/Commercials/" + line)
		voiceline.currentTime = 0.01;
voiceline.addEventListener('loadedmetadata', function(){
voiceline.currentTime = 0.1;
}, false);
		voiceline.addEventListener('ended', playRandomSong1, false);
		voiceline.play();
	}



playRandomHello();
