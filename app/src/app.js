


// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
    });
});


// Define a new component called video-container
Vue.component('header-container', {
  data: function() {
  	return {
  		message: 'ss'
  	}
  },
  template: '<video>{{ message }}</video>'
});

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
    durationGeneral: 0,
    duration: 0,
    durationOGG: 0,
    durationWAVE: 0,
    progress: '0%',
    progressOGG: '0%',
    progressWAVE: '0%',
    myInterval: 0,
    myIntervalOGG: 0,
    generalVolume: 1,								// STD Value
    valueOfSlider: 0,
    maxValueSlider: 100,	
    minValueSlider: 0,
    valueOfSliderOGG: 0,
    maxValueSliderOGG: 100,
    minValueSliderOGG: 0,
    pausePressed: false		
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
  		var temp = '';
  		if(!this.soundPlaying){
  			var audio = new Audio(sound);
  			this.setAudio(audio);
  			audio.play();
  			audio.volume = this.generalVolume;
  			console.log("VOLUME: ", audio.volume);
  
  			setTimeout(function(){
  				app.durationGeneral = audio.duration;

  				if(app.duration != 0 && app.pausePressed){
  					audio.currentTime = app.durationGeneral - app.duration;

  				}
  				else{
  					app.duration = parseInt(Math.ceil(audio.duration));
  				}
  				console.log("Duration: ", app.duration);
  				
  				// PROGRESS BAR
  				var myvar = window.setInterval(incProgress, app.duration * 10);
  				app.setMyInterval(myvar);

  				console.log("this.interval START:" , app.getMyInterval());

  				function incProgress() {
  					var temp = app.progress.substring(0, app.progress.length-1);
  				
  					if(temp < 100){
  						temp++;
  						app.duration--;	
  					}
  					else{
  						window.clearInterval(myvar);
  					}

  					app.progress = temp + '%';
  				}

  			}, 100);
  			
  				  		
  			this.playTitle = 'Stop Sound';
  			this.soundPlaying = true;
  			this.iconType = 'fas fa-pause';
  		}
  		else{
  			console.log("this.interval STOP: ", this.getMyInterval());		// 0
  			console.log("DURATION ON STOP: ", this.duration);
  			this.pausePressed = true;

  			var audio = this.getAudio();
  			audio.pause();
  			this.resetProgress(this.getMyInterval());

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
  			audio.volume = this.generalVolume;

  			console.log("VOLUME: ", audio.volume);
  
  			setTimeout(function(){
  				this.durationOGG = Math.ceil(audio.duration);
  				console.log("Duration:" , this.durationOGG);

  				// PROGRESS BAR
  				var myvar = window.setInterval(incProgress, this.durationOGG * 10);
  				app.setMyIntervalOGG(myvar);

  				console.log("this.interval START:" , app.getMyIntervalOGG());

  				function incProgress() {
  					var temp = app.progressOGG.substring(0, app.progressOGG.length-1);
  				
  					if(temp < 100){
  						temp++;	
  					}
  					else{
  						window.clearInterval(myvar);
  					}

  					app.progressOGG = temp + '%';
  				}

  			}, 100);


  			this.playTitleOGG = 'Stop Sound';
  			this.soundPlayingOGG = true;
  			this.iconTypeOGG = 'fas fa-pause';
  		}
  		else{
  			console.log("this.interval STOP: ", this.getMyIntervalOGG());		// 0
  			var audio = this.getAudioOGG();
  			audio.pause();
  			this.resetProgressOGG(this.getMyIntervalOGG());

  			this.playTitleOGG = 'Play Sound';
  			this.soundPlayingOGG = false;
  			this.iconTypeOGG = 'fas fa-play';
  		}
  	},
  	playAudioWAVE(sound) {
  		if(!this.soundPlayingWAVE){
  			var audio = new Audio(sound);
  			audio.play();
  			audio.volume = this.generalVolume;

			this.setAudioWAVE(audio);
  			this.playTitleWAVE = 'Stop Sound';
  			this.soundPlayingWAVE = true;
  			this.iconTypeWAVE = 'fas fa-pause';
  		}
  		else{
  			var audio = this.getAudioWAVE();
  			audio.pause();

  			this.playTitleWAVE = 'Play Sound';
  			this.soundPlayingWAVE = false;
  			this.iconTypeWAVE = 'fas fa-play';
  		}
  	},
  	setAudio(audio){
  		this.audioOBJ = audio;
  	},
  	getAudio(){
  		return this.audioOBJ;
  	},
  	setAudioOGG(audio){
  		this.audioOBJ_OGG = audio;
  	},
  	getAudioOGG(){
  		return this.audioOBJ_OGG;
  	},
  	setAudioWAVE(audio){
  		this.audioOBJ_WAVE = audio;
  	},
  	getAudioWAVE(){
  		return this.audioOBJ_WAVE;
  	},
  	setMyInterval(m_interval){
  		this.myInterval = m_interval;
  	},
  	getMyInterval(){
  		return this.myInterval;
  	},
  	setMyIntervalOGG(m_interval){
  		this.myIntervalOGG = m_interval;
  	},
  	getMyIntervalOGG(){
  		return this.myIntervalOGG;
  	},
  	resetProgress(intervalID){
  		this.progress = '0%';
  		window.clearInterval(intervalID);
  	},
  	resetProgressOGG(intervalID){
  		this.progressOGG = '0%';
  		window.clearInterval(intervalID);
  	},
  	sliderChanged(e){
  		this.valueOfSlider = e.target.value;
  		
  		this.generalVolume = parseFloat(this.valueOfSlider) / 100;
  		console.log("VOLUME: ", this.generalVolume);
  		
  		let audio = this.getAudio();
  		audio.volume = this.generalVolume;
  		window.localStorage.setItem('volume', this.generalVolume);
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
                	app.setLoad();
            	}, 2000);
  			});

  		let volumeStorage = window.localStorage.getItem('volume');

  		if(!volumeStorage){
  			window.localStorage.setItem('volume', this.generalVolume);
  		}
  		else{
  			this.generalVolume = parseFloat(volumeStorage);
  			this.valueOfSlider = parseFloat(volumeStorage) * 100;
  		}
  },
  computed: {
  	progressObject: function(){
  		return {
  			width: this.progress
  		}
  	}
  }
});



