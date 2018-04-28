songsarray = ["MUS_Aint_That_A_Kick_In_the_Head.mp3", "MUS_American_Swing.mp3", "MUS_Big_Iron.mp3", "MUS_Blue_Moon.mp3", "MUS_EddyArnold_Rca_ItsASin.mp3", "MUS_Heartaches_by_the_Number.mp3", "MUS_Its_A_Sin_To_Tell_A_Lie.mp3", "MUS_Jingle_Jangle_Jingle.mp3", "MUS_Johnny_Guitar.mp3", "MUS_Manhattan.mp3", "MUS_Slow_Bounce.mp3", "MUS_Where_Have_You_Been_All_My_Life.mp3", "MUS_Why_Dont_You_Do_Right.mp3"];
songintrosarray = ["radionewve_rnvmusicintroge_0014dfc5_1.wav", "radionewve_rnvmusicintroge_0014dfc6_1.wav", "radionewve_rnvmusicintroge_0014dfc7_1.wav", "radionewve_rnvmusicintroge_0014eb1a_1.wav", "radionewve_rnvmusicintroge_0014eb1b_1.wav", "radionewve_rnvmusicintroge_0014eb1c_1.wav", "radionewve_rnvmusicintroge_0014eb1d_1.wav", "radionewve_rnvmusicintroge_0014eb1e_1.wav", "radionewve_rnvmusicintroge_0014eb1f_1.wav", "radionewve_rnvmusicintroge_0014eb17_1.wav", "radionewve_rnvmusicintroge_0014eb18_1.wav", "radionewve_rnvmusicintroge_0014eb19_1.wav"];
hellosarray = ["burstintoflames.wav", "cometotherightplace.wav", "fanningtheflames.wav", "ihaveagoodfeeling.wav", "iloveyou.wav", "mrnewvegashere.wav", "mrsnewvegas.wav", "notcomingontoostrong.wav", "notthegammaradiation.wav", "nuclearwinterwonderland.wav", "thankyouveryverymuch.wav", "themrnewvegasshow.wav", "welcometoourprogram.wav", "youlookbeautiful.wav", "yourelisteningtornv.wav"];
function playRandomHello(){
		var index = Math.floor(Math.random() * (hellosarray.length)),
		line = hellosarray[index];

		var voiceline = new Audio("Hellos/" + line)
		voiceline.addEventListener('ended', playRandomSongIntro, false);
		voiceline.bind('ended', playRandomSongIntro);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
function playRandomSong(){
		var index = Math.floor(Math.random() * (songsarray.length)),
		line = songsarray[index];

		var voiceline = new Audio("Songs/" + line)
		voiceline.addEventListener('ended', playRandomHello, false);
		voiceline.bind('ended', playRandomHello);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
function playRandomSongIntro(){
		var index = Math.floor(Math.random() * (songintrosarray.length)),
		line = songintrosarray[index];

		var voiceline = new Audio("SongIntros/" + line)
		voiceline.addEventListener('ended', playRandomSong, false);
		voiceline.bind('ended', playRandomSong);
		voiceline.addEventListener('loadedmetadata', function(){
			voiceline.play()
		})
		voiceline.play();
	}
