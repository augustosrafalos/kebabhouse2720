// Vent til siden er indlæst
document.addEventListener("DOMContentLoaded", () => {

    // Find alle retter på menuen
    const menuItems = document.querySelectorAll(".menu-item");

    // Opret popup
    const popup = document.createElement("div");
    popup.classList.add("popup");

    popup.innerHTML = `
        <div class="popup-content">
            <span class="close">&times;</span>
            <h2></h2>
            <p></p>
            <button>Bestil nu</button>
        </div>
    `;

    document.body.appendChild(popup);

    const popupTitle = popup.querySelector("h2");
    const popupText = popup.querySelector("p");
    const closeBtn = popup.querySelector(".close");


    // Hover og klik på retter
    menuItems.forEach(item => {

        // Hover effekt
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });


        // Klik animation + popup
        item.addEventListener("click", () => {

            item.classList.add("clicked");

            setTimeout(() => {
                item.classList.remove("clicked");
            }, 200);


            const navn = item.querySelector("h3")?.innerText || "Kebab";
            const pris = item.querySelector(".price")?.innerText || "";

            popupTitle.innerText = navn;
            popupText.innerText = 
                `Lækker frisklavet ${navn.toLowerCase()} fra Kebab House. Pris: ${pris}`;

            popup.classList.add("show");
        });

    });


    // Luk popup
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });


    // Luk hvis man klikker udenfor
    popup.addEventListener("click", (e) => {

        if (e.target === popup) {
            popup.classList.remove("show");
        }

    });

});
