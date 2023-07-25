
function preloader() {
    const picturesList = [
        "./img/solution1.png",
        "./img/solution2.png",
        "./img/solution3.png"
    ];
    const pictures = [];
    for (let i = 0; i < picturesList.length; i++) {
        pictures[i] = new Image();
        pictures[i].src = picturesList[i];
    }

  
    console.log(`Preloaded pictures:\n\t${pictures[0].src}\n\t${pictures[1].src}\n\t${pictures[2].src}`);
};
window.addEventListener("load", preloader);


let urls = document.querySelectorAll('button');


let data = {
    solution1: {
        headingData: 'solution1',
        bodyText: 'Government help is one of the best methods to make green energy accessible for the average individual. To promote the use of sustainable energy technologies, governments can offer a variety of incentives and subsidies. For the installation of solar panels, wind turbines, energy-efficient appliances, or electric vehicles, these incentives may include tax credits, grants, or refunds. Government initiatives can also aid in lowering the initial cost necessary to switch to renewable energy, making it more accessible to a wider spectrum of individuals.',
        imgURL: './imgs/solution1.png',
        imgALT: 'solution1'
    },
    solution2: {
        headingData: 'solution2',
        bodyText: 'Community solar initiatives let several people share the advantages of a single solar energy system. Participants can sign up for a shared solar farm or array in their neighbourhood as an alternative to installing solar panels on their own properties. With this strategy, clean energy is made available to those who might not have adequate rooftops or enough money for individual installations. It also does away with the requirement for upfront payments. A participants portion of the solar energy produced by the community system is normally credited against their electricity costs.',
        imgURL: './imgs/solution2.png',
        imgALT: 'solution2'
    },
    solution3: {
        headingData: 'solution3',
        bodyText: 'Promoting energy effsolution3is crucial to lowering the cost of clean energy. Many consumers are unaware of the substantial cost reductions that can be achieved by making minor modifications to their energy use habits. People can lower their overall energy usage and possibly use the savings to fund renewable energy sources by giving information and resources on energy-saving techniques. Providing accessible financing options, such as low-interest loans or pay-as-you-save plans, can additionally assist people in paying for the upfront costs of clean energy installations while recouping their investment from the money they save on energy prices.',
        imgURL: './imgs/solution3.png',
        imgALT: 'solution3'
    }
};


let buttonData = document.querySelector('.content');



buttonData.innerHTML = 
       `<h1 class="contentHead">${data.solution1.headingData}</h1>
       <img src="${data.solution1.imgURL}" alt="${data.solution1.imgALT}">
       <p>${data.solution1.bodyText}</p>`;



function handleSelection(event) {

  
    let selectedItem = event.target.parentElement;

   

    for (let i = 0; i < urls.length; i++) {
        if (urls[i].hasAttribute('id')) {
            urls[i].removeAttribute('id')
        }
    }



    selectedItem.setAttribute('id', 'active');

    
    console.log(event.target.classList);
    let buttonClicked = event.target.classList;
    
    if (urls[0].hasAttribute('id')) {
        buttonData.innerHTML = `<h1 class="contentHead">${data.solution1.headingData}</h1>
           <img src="${data.solution1.imgURL}" alt="${data.solution1.imgALT}">
           <p>${data.solution1.bodyText}</p>`;
    } else if (urls[1].hasAttribute('id')) {
        buttonData.innerHTML = `<h1 class="contentHead">${data.solution2.headingData}</h1>
           <img src="${data.solution2.imgURL}" alt="${data.solution2.imgALT}">
           <p>${data.solution2.bodyText}</p>`;
    } else if (urls[2].hasAttribute('id')) {
        buttonData.innerHTML = `<h1 class="contentHead">${data.solution3.headingData}</h1>
           <img src="${data.solution3.imgURL}" alt="${data.solution3.imgALT}">
           <p>${data.solution3.bodyText}</p>`;
    } 

  
}

for (let i = 0; i < urls.length; i++) {
   urls[i].addEventListener('click', handleSelection);
}
