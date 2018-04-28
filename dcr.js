songsarray = [];
songintrosarray = [];
hellosarray = [];
newsendings = [];
newsstories = [];
newsintros = [];
newstransitions = [];
function playRandomHello(){
		var index = Math.floor(Math.random() * (hellosarray.length)),
		line = hellosarray[index];

		var voiceline = new Audio("Hellos/" + line)
		voiceline.currentTime = 0.01;
		voiceline.addEventListener('ended', playRandomNewsIntro, false);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
function playRandomNewsIntro(){
		var index = Math.floor(Math.random() * (newsintros.length)),
		line = newsintros[index];

		var voiceline = new Audio("NewsIntros/" + line)
		voiceline.currentTime = 0.01;
		voiceline.addEventListener('ended', playRandomNewsStory, false);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
function playRandomNewsStory(){
		var index = Math.floor(Math.random() * (newsstories.length)),
		line = newsstories[index];

		var voiceline = new Audio("NewsStories/" + line)
		voiceline.currentTime = 0.01;
		voiceline.addEventListener('ended', playRandomNewsTransition, false);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
function playRandomNewsTransition(){
		var index = Math.floor(Math.random() * (newstransitions.length)),
		line = newstransitions[index];

		var voiceline = new Audio("NewsTransitions/" + line)
		voiceline.currentTime = 0.01;
		voiceline.addEventListener('ended', playRandomNewsStory2, false);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
function playRandomNewsStory2(){
		var index = Math.floor(Math.random() * (newsstories.length)),
		line = newsstories[index];

		var voiceline = new Audio("NewsStories/" + line)
		voiceline.currentTime = 0.01;
		voiceline.addEventListener('ended', playRandomNewsEnding, false);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
function playRandomNewsEnding(){
		var index = Math.floor(Math.random() * (newsendings.length)),
		line = newsendings[index];

		var voiceline = new Audio("NewsEndings/" + line)
		voiceline.currentTime = 0.01;
		voiceline.addEventListener('ended', playRandomSongIntro, false);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
function playRandomSong(){
		var index = Math.floor(Math.random() * (songsarray.length)),
		line = songsarray[index];

		var voiceline = new Audio("Songs/" + line)
		voiceline.currentTime = 0.01;
		voiceline.addEventListener('ended', playRandomSong2, false);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
function playRandomSong2(){
		var index = Math.floor(Math.random() * (songsarray.length)),
		line = songsarray[index];

		var voiceline = new Audio("Songs/" + line)
		voiceline.currentTime = 0.01;
		voiceline.addEventListener('ended', playRandomHello, false);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
function playRandomSongIntro(){
		var index = Math.floor(Math.random() * (songintrosarray.length)),
		line = songintrosarray[index];

		var voiceline = new Audio("SongIntros/" + line)
		voiceline.currentTime = 0.01;
		voiceline.addEventListener('ended', playRandomSong, false);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
playRandomHello();