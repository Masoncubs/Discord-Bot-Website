/*
    Updated Owner Cards
    Modernized & Improved
*/

const boxOwners = document.getElementById("owners_list");

const API = "https://discord-web-api.glitch.me/discord/user/";

const owners = [
    {
        id: "519666024220721152",
        post: "Owner of Bot",
        github: "https://github.com/diwasatreya",
        youtube: "https://www.youtube.com/c/Kp18Gamer",
        instagram: "",
        twitter: "",
        website: ""
    }
];

async function loadOwners() {
    boxOwners.innerHTML = "";

    for (const owner of owners) {
        try {
            const response = await fetch(`${API}${owner.id}`);
            const user = await response.json();

            const avatar =
                user.url ||
                "https://cdn.discordapp.com/embed/avatars/0.png";

            const username =
                user.username || "Unknown User";

            const card = document.createElement("div");
            card.className = "card owner-card";
            card.style.margin = "15px";

            card.innerHTML = `
                <div class="banner">
                    <img
                        src="${avatar}"
                        alt="${username}"
                        loading="lazy"
                    >
                </div>

                <h2 class="name">${username}</h2>
                <h3 class="title">${owner.post}</h3>

                <div class="actions">
                    ${owner.github ? `
                    <a href="${owner.github}" target="_blank" rel="noopener">
                        <button>GitHub</button>
                    </a>` : ""}

                    ${owner.youtube ? `
                    <a href="${owner.youtube}" target="_blank" rel="noopener">
                        <button>YouTube</button>
                    </a>` : ""}

                    ${owner.instagram ? `
                    <a href="${owner.instagram}" target="_blank" rel="noopener">
                        <button>Instagram</button>
                    </a>` : ""}

                    ${owner.twitter ? `
                    <a href="${owner.twitter}" target="_blank" rel="noopener">
                        <button>X</button>
                    </a>` : ""}

                    ${owner.website ? `
                    <a href="${owner.website}" target="_blank" rel="noopener">
                        <button>Website</button>
                    </a>` : ""}
                </div>
            `;

            boxOwners.appendChild(card);

        } catch (err) {
            console.error(`Failed to load owner ${owner.id}`, err);
        }
    }
}

loadOwners();
