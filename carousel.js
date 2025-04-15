let index = 0;
const images = document.querySelectorAll(".carousel img");
const totalImages = images.length;
const titles = ["Attack on Titan", "Naruto", "One Piece"];
const descriptions = [
    "As Eren and his friends fight to survive against the Titans, shocking revelations about their world come to light.",
    "Naruto Uzumaki, a young ninja with dreams of becoming the Hokage, embarks on an epic adventure.",
    "Monkey D. Luffy and his pirate crew sail the seas in search of the legendary One Piece treasure.",
    "As Eren and his friends fight to survive against the Titans, shocking revelations about their world come to light.",
    "Naruto Uzumaki, a young ninja with dreams of becoming the Hokage, embarks on an epic adventure.",
    "Monkey D. Luffy and his pirate crew sail the seas in search of the legendary One Piece treasure.",
    "As Eren and his friends fight to survive against the Titans, shocking revelations about their world come to light.",
    "Naruto Uzumaki, a young ninja with dreams of becoming the Hokage, embarks on an epic adventure.",
    "Monkey D. Luffy and his pirate crew sail the seas in search of the legendary One Piece treasure.",
    "As Eren and his friends fight to survive against the Titans, shocking revelations about their world come to light.",
    "Naruto Uzumaki, a young ninja with dreams of becoming the Hokage, embarks on an epic adventure.",
    "Monkey D. Luffy and his pirate crew sail the seas in search of the legendary One Piece treasure.",
    "As Eren and his friends fight to survive against the Titans, shocking revelations about their world come to light.",
    "Naruto Uzumaki, a young ninja with dreams of becoming the Hokage, embarks on an epic adventure.",
    "Monkey D. Luffy and his pirate crew sail the seas in search of the legendary One Piece treasure."
];
const videos = [
    "https://www.youtube.com/embed/MGRm4IzK1SQ", 
    "https://www.youtube.com/embed/tA_Qmxt1GeI", 
    "https://www.youtube.com/embed/S8_YwFLCh4U",
    "https://www.youtube.com/embed/MGRm4IzK1SQ", 
    "https://www.youtube.com/embed/tA_Qmxt1GeI", 
    "https://www.youtube.com/embed/S8_YwFLCh4U",
    "https://www.youtube.com/embed/MGRm4IzK1SQ", 
    "https://www.youtube.com/embed/tA_Qmxt1GeI", 
    "https://www.youtube.com/embed/S8_YwFLCh4U",
    "https://www.youtube.com/embed/MGRm4IzK1SQ", 
    "https://www.youtube.com/embed/tA_Qmxt1GeI", 
    "https://www.youtube.com/embed/S8_YwFLCh4U",
];

function showSlide(i) {
    index = (i + totalImages) % totalImages;
    document.getElementById("carousel").style.transform = `translateX(-${index * 100}%)`;
    document.getElementById("anime-title").innerText = titles[index];
    document.getElementById("anime-desc").innerText = descriptions[index];
    adjustTextColor(images[index]);
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

function autoScroll() {
    nextSlide();
}

setInterval(autoScroll, 3000);

function playVideo() {
    document.getElementById("video-frame").src = videos[index];
    document.getElementById("video-container").style.display = "block";
}

function closeVideo() {
    document.getElementById("video-frame").src = "";
    document.getElementById("video-container").style.display = "none";
}

function adjustTextColor(image) {
    const img = new Image();
    img.src = image.src;
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const pixel = ctx.getImageData(0, img.height * 0.75, 1, 1).data;
        const brightness = (pixel[0] + pixel[1] + pixel[2]) / 3;
        document.getElementById("hero-content").style.color = brightness < 100 ? "white" : "black";
        
       
        
    };
}

function scrollToSection() {
    const section = document.querySelector(".new-popular");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
