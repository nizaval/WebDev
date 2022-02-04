function showImage(image){
    let largeImg = document.getElementById('lg_nature');
    largeImg.src = image;

    console.log(image);
    if(image.includes("nature1"))
    {
        document.getElementById('picDesc').innerHTML = "Breathtaking view from the highes part of mountains!"
    }

    if(image.includes("nature2"))
    {
        document.getElementById('picDesc').innerHTML = "Serene island in the middle of a lake filled with beautiful golden trees."
    }

    if(image.includes("nature3"))
    {
        document.getElementById('picDesc').innerHTML = "Cute simple flowers showcasing its simple beauty."
    }
}

function showTime(){
    let gTime = new Date();
    let ct = document.getElementById("display");
    let tTime = gTime.toLocaleTimeString();
    ct.innerHTML = tTime;
}