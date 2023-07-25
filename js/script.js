// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

// Your resource-object with dynamic content
const resource = {
    solution1: {
        headingContent: "Solution 1",
        bodyText: "Harnessing the vast power of the oceans, ocean energy represents a promising renewable energy solution with tremendous potential. Our innovative technology, OceanFlow, utilizes the natural ebb and flow of tides to generate electricity. The system consists of underwater turbines strategically placed along coastal areas, where the tidal currents are strong. As the tides rise and fall, the turbines spin, converting kinetic energy into clean electrical power. OceanFlow boasts a low environmental impact, as it doesn't require any emissions or fuel consumption. With over 70% of the Earth's surface covered by oceans, this untapped energy source can play a crucial role in reducing our dependence on fossil fuels and combating climate change.",
        imgUrl: "./imgs/solution1.png",
        imgAlt: "Solution 1 Image"
    },
    solution2: {
        headingContent: "Solution 2",
        bodyText: "Imagine generating electricity from the footsteps of pedestrians on busy city streets or the vibrations of moving vehicles on highways. Our revolutionary solution, PiezoCharge, does just that. Piezoelectric materials have the unique property of producing an electric charge when subjected to mechanical stress or pressure. By embedding these materials in high-traffic areas, such as sidewalks or roads, PiezoCharge captures the energy created by human movement and vehicular traffic. This energy is then converted into usable electricity to power streetlights, traffic signals, or even feed into the grid. Embracing this innovative technology not only reduces our carbon footprint but also transforms bustling urban areas into vibrant hubs of renewable energy production.",
        imgUrl: "./imgs/solution2.png",
        imgAlt: "Solution 2 Image"
    },
    solution3: {
        headingContent: "Solution 3",
        bodyText:"Traditional solar panels have undoubtedly revolutionized the renewable energy landscape, but what if we could integrate solar power into everyday surfaces effortlessly? Introducing SolarPaint, a game-changing solution that allows us to turn ordinary structures, like buildings and even vehicles, into solar energy harvesters. SolarPaint comprises a special blend of solar-absorbing nanoparticles suspended in a paint-like medium. When applied to surfaces exposed to sunlight, these nanoparticles capture solar energy and convert it into electricity. The possibilities are endless – imagine entire skyscrapers generating clean power, or electric vehicles recharging while sitting idle under the sun. SolarPaint represents a significant step towards a more aesthetically pleasing and accessible renewable energy future.",
        imgUrl: "./imgs/solution3.png",
        imgAlt: "Solution 3 Image"
    }
};

const buttonContainer = document.querySelector(".button-container");
const solutionContent = document.querySelector(".solution-content");

function handleSelection(event) {
    // Remove active-button class from all buttons
    const buttons = buttonContainer.querySelectorAll("button");
    buttons.forEach(button => button.classList.remove("active-button"));

    // Set active-button class to the clicked button
    event.target.classList.add("active-button");

    // Get the content based on the clicked button and update the solution content
    const solutionKey = event.target.textContent.toLowerCase();
    const content = resource[solutionKey];
    const html = `
        <h2>${content.headingContent}</h2>
        <img src="${content.imgUrl}" alt="${content.imgAlt}">
        <p>${content.bodyText}</p>
    `;
    solutionContent.innerHTML = html;
}

// Register all buttons to the click event
buttonContainer.addEventListener("click", handleSelection);
