var video = document.querySelector(".video");

window.addEventListener("load", () => {
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", () => {
	video.play();
	document.querySelector("#volume").innerText = "100%"
});

document.querySelector("#pause").addEventListener("click", () => {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", () => {
	video.playbackRate = Math.max(video.playbackRate - 0.1, 0);
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", () => {
	video.playbackRate += 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", () => {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", () => {
	video.muted = !video.muted;
	if (video.muted) document.querySelector("#mute").innerText = "Unmute";
	else document.querySelector("#mute").innerText = "Mute"
});

document.querySelector("#slider").addEventListener("input", () => {
	document.querySelector("#volume").innerText = `${document.querySelector("#slider").value}%`
	video.volume = document.querySelector("#slider").value / 100;
});

document.querySelector("#vintage").addEventListener("click", () => {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", () => {
	video.classList.remove("oldSchool");
});
