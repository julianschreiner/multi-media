var app = new Vue({
  el: '#app',
  data: {
    loaded: false,
    soundPlaying: false,
    soundPlayingOGG: false,
    soundPlayingWAVE: false,
    audioOBJ: '',
    audioOBJ_OGG: '',
    audioOBJ_WAVE: '',
    playTitle: 'Play Sound',
    playTitleOGG: 'Play Sound',
    playTitleWAVE: 'Play Sound',
    iconType: 'fas fa-play',
    iconTypeOGG: 'fas fa-play',
    iconTypeWAVE: 'fas fa-play',
    durationOGG: 0,
    progress: '40%'
  },

  methods: {
  	addName() {
  		this.names.push(this.newName);
  		this.newName = '';
  	},
  	setLoad() {
  		this.loaded = true;
  	},
  	playAudio(sound) {
  		if(!this.soundPlaying){
  			var audio = new Audio(sound);
  			this.setAudio(audio);
  			audio.play();
  			console.log(audio);
  			console.log(audio.src);
  			setTimeout(function(){
  				console.log(audio.duration);
  				this.durationOGG = audio.duration;
  			}, 100);
  		

  			this.playTitle = 'Stop Sound';
  			this.soundPlaying = true;
  			this.iconType = 'fas fa-pause';
  		}
  		else{
  			var audio = this.getAudio();
  			audio.pause();

  			this.playTitle = 'Play Sound';
  			this.soundPlaying = false;
  			this.iconType = 'fas fa-play';
  		}
  	},
  	playAudioOGG(sound) {
  		if(!this.soundPlayingOGG){
  			var audio = new Audio(sound);
  			this.setAudioOGG(audio);
  			audio.play();


  			this.playTitleOGG = 'Stop Sound';
  			this.soundPlayingOGG = true;
  			this.iconTypeOGG = 'fas fa-pause';
  		}
  		else{
  			var audio = this.getAudioOGG();
  			audio.pause();

  			this.playTitleOGG = 'Play Sound';
  			this.soundPlayingOGG = false;
  			this.iconTypeOGG = 'fas fa-play';
  		}
  	},
  	playAudioWAVE(sound) {
  		if(!this.soundPlayingWAVE){
  			var audio = new Audio(sound);
  			this.setAudioWAVE(audio);
  			audio.play();

  			this.playTitleWAVE = 'Stop Sound';
  			this.soundPlayingWAVE = true;
  			this.iconTypeWAVE = 'fas fa-pause';
  		}
  		else{
  			var audio = this.getAudioOGG();
  			audio.pause();

  			this.playTitleOGG = 'Play Sound';
  			this.soundPlayingOGG = false;
  			this.iconTypeOGG = 'fas fa-play';
  		}
  	},
  	setAudio(audio){
  		this.audioOBJ = audio;
  	},
  	getAudio(){
  		return this.audioOBJ;
  	},
  	setAudioOGG(audio){
  		this.audioOBJOGG = audio;
  	},
  	getAudioOGG(){
  		return this.audioOBJOGG;
  	},
  	setAudioWAVE(audio){
  		this.audioOBJWAVE = audio;
  	},
  	getAudioWAVE(){
  		return this.audioOBJWAVE;
  	}
  },

  //when everyone loads this gets triggerd
  mounted() {
  		axios
  			.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  			.then(response => {
  				console.log(response);
  			})
  			.catch(error => {
  				console.log(error);
  			})
  			.finally(() => {
				setTimeout(function(){
					console.log("time");
                	app.setLoad()
            	}, 2000);
  				
  			});

  			window.setInterval( function() {
 				var temp = app.progress.substring(0, app.progress.length-1);
  				console.log(temp);

  				if(temp < 100){
  					temp++;	
  				}
  				
  				app.progress = temp + '%';

			}, 400)	  			
  },
  computed: {
  	progressObject: function(){
  		return {
  			width: this.progress
  		}
  	}
  }
});

