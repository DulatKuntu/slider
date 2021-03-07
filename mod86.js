let photos = ["2chairs.png", "fantasy1.png", "homeL.jpg"]
window.num = 0;
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let points = document.querySelectorAll(".point")
let photo = document.querySelector(".photo")
function previous(){
	if(window.num == 0){
		window.num = photos.length
	}
	window.num--;
	photo.style.backgroundImage = `url(images/${photos[window.num]})`
	for(let i=0;i<points.length;i++){
		points[i].classList.add('nonActive')
	}
	points[window.num].classList.remove('nonActive')
	points[window.num+3].classList.remove('nonActive')
}
prev.addEventListener("click", previous)
function nextElem(){
	if(window.num == photos.length-1){
		window.num = -1
	}
	window.num++
	photo.style.backgroundImage = `url(images/${photos[window.num]})`
	for(let i=0;i<points.length;i++){
		points[i].classList.add('nonActive')
	}
	points[window.num].classList.remove('nonActive')
	points[window.num+3].classList.remove('nonActive')
}
next.addEventListener("click", nextElem)
points.forEach(item=>{
	item.addEventListener("click", function(){
		let i;
		if(item.id=="one"){
			i=0
		}else if(item.id=="two"){
			i=1
		}else{
			i=2
		}
		while(i!=window.num){
			nextElem()
		}
	})
})
