// Anime Data List
const animeData = [
    {
        title: "Black Clover",
        image: "images/black_clover.jpg",
        rating: 4.8,
        ageRating: "TV-14",
        description: "Asta, a boy born without magic in a world where magic is everything, fights to become the Wizard King against all odds. ⚔✨"
    },
    {
        title: "Blue Lock",
        image: "images/blue_lock.jpg",
        rating: 4.7,
        ageRating: "TV-14",
        description: "A high-stakes soccer program recruits Japan's most talented strikers to create the ultimate ego-driven forward in order to win the World Cup."
    },
    {
        title: "Bleach",
        image: "images/bleach.jpg",
        rating: 4.9,
        ageRating: "TV-14",
         description: "Ichigo Kurosaki, a teenager with the ability to see ghosts, becomes a Soul Reaper and takes on the duty of protecting the world from evil spirits."
    },
    {
        title: "Dragon Ball Z",
        image: "images/dbz.jpg",
        rating: 4.9,
        ageRating: "TV-PG",
        description: "Goku and his friends protect Earth from powerful villains, pushing their limits with each battle and unlocking new transformations."
    },
    {
        title: "Haikyuu!!",
        image: "images/haikyuu.jpg",
        rating: 4.9,
        ageRating: "TV-PG",
        description: "Hinata Shoyo, inspired by 'The Little Giant', joins Karasuno High to become the best volleyball player despite his short height."
    },
    {
        title: "Jujutsu Kaisen",
        image: "images/jjk.jpg",
        rating: 4.9,
        ageRating: "TV-MA",
        description: "Yuji Itadori consumes a cursed object and gains supernatural powers, joining a secret organization to fight evil spirits."
    },
    {
        title: "Kuroko's Basketball",
        image: "images/kuroko.jpg",
        rating: 4.7,
        ageRating: "TV-14",
        description: "Kuroko, a mysterious basketball player with almost invisible presence, joins Seirin High to take on the Generation of Miracles."
    },
    {
        title: "My Hero Academia",
        image: "images/mha.jpg",
        rating: 4.8,
        ageRating: "TV-14",
        description: "In a world where people have superpowers called 'Quirks', Izuku Midoriya, born Quirkless, aims to become the greatest hero."
    },
    {
        title: "Naruto",
        image: "images/naruto.jpg",
        rating: 4.9,
        ageRating: "TV-PG",
        description: "Naruto Uzumaki, a young ninja, dreams of becoming the Hokage while learning about friendship, loss, and determination."
    },
    {
        title: "One Piece",
        image: "images/one_piece.jpg",
        rating: 4.9,
        ageRating: "TV-14",
        description: "Monkey D. Luffy sets sail with his pirate crew to find the legendary treasure, 'One Piece', and become the Pirate King."
    },
    {
        title: "Solo Leveling",
        image: "images/solo_leveling.jpg",
        rating: 4.8,
        ageRating: "TV-MA",
        description: "Sung Jin-Woo, the weakest hunter, gains an ability that allows him to level up infinitely after surviving a deadly dungeon."
    },
    {
        title: "Wind Breaker",
        image: "images/wind_breaker.jpg",
        rating: 4.7,
        ageRating: "TV-14",
        description: "Haruka Sakura, an elite fighter, enrolls in Furin High, a school of delinquents, and gets involved in brutal street battles."
    }
];



// Function to generate anime cards
function generateAnimeCards() {
    const animeListContainer = document.getElementById("anime-list");

    animeData.forEach((anime) => {
        // Create a new div for the anime card
        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");

        // Set inner HTML for the card
        animeCard.innerHTML = `
            <div class="relative pb-[150%] rounded overflow-hidden group">
                <img src="${anime.image}" alt="${anime.title}" class="absolute h-full w-full object-cover">
                <div class="overlay">
                    <button class="play-button"><i class="fas fa-play"></i></button>
                    <button class="info-button" onclick=" showInfo('${anime.title}')"><i class="fas fa-info-circle"></i></button>
                </div>
            </div>
            <div class="anime-details">
                <h4>${anime.title}</h4>
                <div class="rating">
                    <span class="text-yellow-400"><i class="fas fa-star"></i></span>
                    <span>${anime.rating}</span>
                    <span class="mx-1">•</span>
                    <span>${anime.ageRating}</span>
                </div>
            </div>
        `;

        // Append the card to the anime list container
        animeListContainer.appendChild(animeCard);
    });
}

// Run function to generate anime cards on page load
generateAnimeCards();



function showAnimeInfo(animeTitle) {
    const anime = animeList.find(a => a.title === animeTitle);
    
    if (anime) {
        document.getElementById("info-title").textContent = anime.title;
        document.getElementById("info-description").textContent = anime.description;
        document.getElementById("anime-info-box").style.display = "block"; // Show the pop-up
    }
}

// Close the pop-up
function closeAnimeInfo() {
    document.getElementById("anime-info-box").style.display = "none";
}

// Add event listeners to all More Info buttons
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".info-button").forEach(button => {
        button.addEventListener("click", function () {
            const animeTitle = this.closest(".anime-card").querySelector("h4").textContent;
            showAnimeInfo(animeTitle);
        });
    });
});