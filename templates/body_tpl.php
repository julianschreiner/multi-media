<!DOCTYPE html>
<html>
<head>
	<title>Multi-Media</title>
</head>
<body class="flex flex-col h-full">
	<div id="app">
  <!-- <div class="mb-4" v-if="loaded === true">
    <p> Loaded </p>
</div> -->
<div id="content" class="flex-1 container mx-auto p-8">
	
</div>
<div class="flex content-start flex-wrap bg-grey-lighter h-48 mb-4" style="min-height: 70%;">
  <div class="w-1/3 p-2">
    <div class="text-grey-darker text-center bg-grey-light p-2">
    	<h1 class="mb-4">MP3<h1>
		<i :class="iconType" class="mb-4" style="font-size: 75px;"@click="playAudio('audios/sample.mp3')">
		</i>
		<p class="text-justify text-center">{{ playTitle }}</p>
		<div class="w-full">
			<div class="shadow w-full bg-grey-light">
    			<div class="bg-blue text-xs leading-none py-1 text-center text-white" v-bind:style="{ width: progress }">{{progress}}</div>
  			</div>
		</div>
	</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-grey-darker text-center bg-grey-light p-2">
    	<h1 class="mb-4">OGG<h1>
    	<i :class="iconTypeOGG" class="mb-4" style="font-size: 75px;"@click="playAudioOGG('audios/ghost_busters.ogg')">
		</i>
		<p class="text-justify text-center">{{ playTitleOGG }}</p>
	</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-grey-darker text-center bg-grey-light p-2">
    	<h1 class="mb-4">WMA<h1>
    	<i :class="iconTypeWAVE" class="mb-4" style="font-size: 75px;"@click="playAudioWAVE('audios/mando.wma')">
		</i>
		<p class="text-justify text-center">{{ playTitleWAVE }}</p>
    </div>
  </div>
</div>


<br>
<br>
<br>
<br>
</div> <!-- app -->


<!-- JS -->
<script src="app/src/model.js" type="module"></script>
<!-- JS -->
<script src="app/src/app.js"></script>

</body>
</html>