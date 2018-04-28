songsarray = ["MUS_Aint_That_A_Kick_In_the_Head.mp3", "MUS_American_Swing.mp3", "MUS_Big_Iron.mp3", "MUS_Blue_Moon.mp3", "MUS_Heartaches_by_the_Number.mp3", "MUS_Its_A_Sin_To_Tell_A_Lie.mp3", "MUS_Jingle_Jangle_Jingle.mp3", "MUS_Johnny_Guitar.mp3", "MUS_Manhattan.mp3", "MUS_Slow_Bounce.mp3", "MUS_Where_Have_You_Been_All_My_Life.mp3", "MUS_Why_Dont_You_Do_Right.mp3", "MUS_Jazz_Blues_GT.mp3", "MUS_Love_Me_As_Though_No_Tomorrow.mp3", "MUS_Somethings_Gotta_Give.mp3", "MUS_Jazz_Club_Blues_CAS.mp3", "MUS_Sit_And_Dream.mp3"];
songintrosarray = ["radionewve_rnvmusicintroge_0014dfc5_1.wav", "radionewve_rnvmusicintroge_0014dfc6_1.wav", "radionewve_rnvmusicintroge_0014dfc7_1.wav", "radionewve_rnvmusicintroge_0014eb1a_1.wav", "radionewve_rnvmusicintroge_0014eb1b_1.wav", "radionewve_rnvmusicintroge_0014eb1c_1.wav", "radionewve_rnvmusicintroge_0014eb1d_1.wav", "radionewve_rnvmusicintroge_0014eb1e_1.wav", "radionewve_rnvmusicintroge_0014eb1f_1.wav", "radionewve_rnvmusicintroge_0014eb17_1.wav", "radionewve_rnvmusicintroge_0014eb18_1.wav", "radionewve_rnvmusicintroge_0014eb19_1.wav"];
hellosarray = ["burstintoflames.wav", "cometotherightplace.wav", "fanningtheflames.wav", "ihaveagoodfeeling.wav", "iloveyou.wav", "mrnewvegashere.wav", "mrsnewvegas.wav", "notcomingontoostrong.wav", "notthegammaradiation.wav", "nuclearwinterwonderland.wav", "thankyouveryverymuch.wav", "themrnewvegasshow.wav", "welcometoourprogram.wav", "youlookbeautiful.wav", "yourelisteningtornv.wav"];
newsendings = ["radionewvegas_rnvnewspost_0014dfc2_1.wav", "radionewvegas_rnvnewspost_0014dfc3_1.wav", "radionewvegas_rnvnewspost_0014dfc4_1.wav", "radionewvegas_rnvnewspost_0014eb2a_1.wav", "radionewvegas_rnvnewspost_0014eb2b_1.wav", "radionewvegas_rnvnewspost_0014eb2c_1.wav", "radionewvegas_rnvnewspost_0014eb2d_1.wav", "radionewvegas_rnvnewspost_0014eb20_1.wav", "radionewvegas_rnvnewspost_0014eb21_1.wav", "radionewvegas_rnvnewspost_0014eb22_1.wav", "radionewvegas_rnvnewspost_0014eb23_1.wav", "radionewvegas_rnvnewspost_0014eb24_1.wav", "radionewvegas_rnvnewspost_0014eb25_1.wav", "radionewvegas_rnvnewspost_0014eb26_1.wav", "radionewvegas_rnvnewspost_0014eb27_1.wav", "radionewvegas_rnvnewspost_0014eb28_1.wav", "radionewvegas_rnvnewspost_0014eb29_1.wav", "radionewvegas_rnvnewspost_0014f161_1.wav", "radionewvegas_rnvnewspost_0014f162_1.wav"];
newsstories = ["radionewvegas_rnvnewsstory_0014e80c_1.wav", "radionewvegas_rnvnewsstory_0014e80d_1.wav", "radionewvegas_rnvnewsstory_0014e80e_1.wav", "radionewvegas_rnvnewsstory_0014e800_1.wav", "radionewvegas_rnvnewsstory_0014e801_1.wav", "radionewvegas_rnvnewsstory_0014e804_1.wav", "radionewvegas_rnvnewsstory_0014e805_1.wav", "radionewvegas_rnvnewsstory_0014e806_1.wav", "radionewvegas_rnvnewsstory_0014e807_1.wav", "radionewvegas_rnvnewsstory_0014e808_1.wav", "radionewvegas_rnvnewsstory_0014e809_1.wav", "radionewvegas_rnvnewsstory_0014e810_1.wav", "radionewvegas_rnvnewsstory_0014e812_1.wav", "radionewvegas_rnvnewsstory_0014e813_1.wav"];
newsintros = ["radionewvegas_rnvnewsintro_0014dfb7_1.wav", "radionewvegas_rnvnewsintro_0014dfb8_1.wav", "radionewvegas_rnvnewsintro_0014dfb9_1.wav", "radionewvegas_rnvnewsintro_0014e301_1.wav", "radionewvegas_rnvnewsintro_0014e302_1.wav", "radionewvegas_rnvnewsintro_0014eb2f_1.wav", "radionewvegas_rnvnewsintro_0014eb30_1.wav", "radionewvegas_rnvnewsintro_0014eb31_1.wav", "radionewvegas_rnvnewsintro_0014eb32_1.wav", "radionewvegas_rnvnewsintro_0014eb33_1.wav", "radionewvegas_rnvnewsintro_0014eb34_1.wav"];
newstransitions = ["radionewve_rnvnewstransiti_0014e2fb_1.wav", "radionewve_rnvnewstransiti_0014e2fc_1.wav", "radionewve_rnvnewstransiti_0014e2fd_1.wav", "radionewve_rnvnewstransiti_0014e2fe_1.wav", "radionewve_rnvnewstransiti_0014e2ff_1.wav", "radionewve_rnvnewstransiti_0014e300_1.wav"];
function playRandomHello(){
		var index = Math.floor(Math.random() * (hellosarray.length)),
		line = hellosarray[index];
		var voiceline = new Audio("Hellos/" + line)
		voiceline.play();
		voiceline.addEventListener("timeupdate", function(){
			if (voiceline.currentTime == voiceline.duration){
				playRandomNewsIntro();
				voiceline.pause();
			}
		})
	}
function playRandomNewsIntro(){
		var index = Math.floor(Math.random() * (newsintros.length)),
		line = newsintros[index];

		var voiceline = new Audio("NewsIntros/" + line)
		voiceline.play();
		voiceline.addEventListener("timeupdate", function(){
			if (voiceline.currentTime == voiceline.duration){
				playRandomNewsStory();
				voiceline.pause();
				voiceline.currentTime = 0.01;
				voiceline.stop();
			}
		})
	}
function playRandomNewsStory(){
		var index = Math.floor(Math.random() * (newsstories.length)),
		line = newsstories[index];

		var voiceline = new Audio("NewsStories/" + line)
		voiceline.play();
			voiceline.addEventListener("timeupdate", function(){
			if (voiceline.currentTime == voiceline.duration){
				playRandomNewsTransition();
				voiceline.currentTime = 0.01;
				voiceline.stop();
			}
		})
	}
function playRandomNewsTransition(){
		var index = Math.floor(Math.random() * (newstransitions.length)),
		line = newstransitions[index];

		var voiceline = new Audio("NewsTransitions/" + line)
		voiceline.play();
		voiceline.addEventListener("timeupdate", function(){
			if (voiceline.currentTime == voiceline.duration){
				playRandomNewsStory2();
				voiceline.pause();
				voiceline.currentTime = 0.01;
				voiceline.stop();
			}
		})
	}
function playRandomNewsStory2(){
		var index = Math.floor(Math.random() * (newsstories.length)),
		line = newsstories[index];

		var voiceline = new Audio("NewsStories/" + line)
		voiceline.play();
		voiceline.addEventListener("timeupdate", function(){
			if (voiceline.currentTime == voiceline.duration){
				playRandomNewsEnding();
				voiceline.pause();
				voiceline.currentTime = 0.01;
				voiceline.stop();
			}
		})
	}
function playRandomNewsEnding(){
		var index = Math.floor(Math.random() * (newsendings.length)),
		line = newsendings[index];

		var voiceline = new Audio("NewsEndings/" + line)
		voiceline.play();
		voiceline.addEventListener("timeupdate", function(){
			if (voiceline.currentTime == voiceline.duration){
				playRandomSongIntro();
				voiceline.pause();
				voiceline.currentTime = 0.01;
				voiceline.stop();
			}
		})
	}
function playRandomSong(){
		var index = Math.floor(Math.random() * (songsarray.length)),
		line = songsarray[index];

		var voiceline = new Audio("Songs/" + line)
		voiceline.play();
		voiceline.addEventListener("timeupdate", function(){
			if (voiceline.currentTime == voiceline.duration){
				playRandomHello();
				voiceline.pause();
				voiceline.currentTime = 0.01;
				voiceline.stop();
			}
		})
	}
function playRandomSongIntro(){
		var index = Math.floor(Math.random() * (songintrosarray.length)),
		line = songintrosarray[index];

		var voiceline = new Audio("SongIntros/" + line)
		voiceline.play();
		voiceline.addEventListener("timeupdate", function(){
			if (voiceline.currentTime == voiceline.duration){
				playRandomSong();
				voiceline.currentTime = 0.01;
				voiceline.stop();
			}
		})
	}
playRandomHello();