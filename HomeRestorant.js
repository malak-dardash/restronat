const carouselInner = document.querySelector(".carousel-inner");
const cardData = [
       {
           title: "Card 1",
           content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum corrupti sapiente iure nam vitae aperiam culpa debitis qui architecto eum illo delectus, doloremque eos earum magnam unde reprehenderit laudantium.",
       },
       {
           title: "Card 2",
           content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum corrupti sapiente iure nam vitae aperiam culpa debitis qui architecto eum illo delectus, doloremque eos earum magnam unde reprehenderit laudantium.",
       },
       {
           title: "Card 3",
           content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum corrupti sapiente iure nam vitae aperiam culpa debitis qui architecto eum illo delectus, doloremque eos earum magnam unde reprehenderit laudantium.",
       },
       {
           title: "Card 4",
           content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum corrupti sapiente iure nam vitae aperiam culpa debitis qui architecto eum illo delectus, doloremque eos earum magnam unde reprehenderit laudantium.",
       },
       {
           title: "Card 5",
           content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum corrupti sapiente iure nam vitae aperiam culpa debitis qui architecto eum illo delectus, doloremque eos earum magnam unde reprehenderit laudantium.",
       },
       {
           title: "Card 6",
           content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum corrupti sapiente iure nam vitae aperiam culpa debitis qui architecto eum illo delectus, doloremque eos earum magnam unde reprehenderit laudantium.",
       },
       {
           title: "Card 7",
           content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum corrupti sapiente iure nam vitae aperiam culpa debitis qui architecto eum illo delectus, doloremque eos earum magnam unde reprehenderit laudantium.",
       },
       {
           title: "Card 8",
           content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum corrupti sapiente iure nam vitae aperiam culpa debitis qui architecto eum illo delectus, doloremque eos earum magnam unde reprehenderit laudantium.",
       },
   ];

   for (let i = 0; i < cardData.length; i += 4) {
       const cardContainer = document.createElement("div");
       cardContainer.classList.add("carousel-item");
       if (i === 0) {
           cardContainer.classList.add("active");
       }

       const cardRow = document.createElement("div");
       cardRow.classList.add("row");

       for (let j = i; j < i + 4 && j < cardData.length; j++) {
           const data = cardData[j];
           const card = document.createElement("div");
           card.classList.add("col-md-3");
           const cardContent = `
               <div class="card">
                   <div class="card-body">
                       <h5 class="card-title">${data.title}</h5>
                       <p class="card-text">${data.content}</p>
                   </div>
               </div>
           `;
           card.innerHTML = cardContent;
           cardRow.appendChild(card);
       }

       cardContainer.appendChild(cardRow);
       carouselInner.appendChild(cardContainer);
   }
