var postcards = ["Lorem ipsum dolor",
                 "orem ipsum dolor sit amet",
                 "Lore5454m ipsfgtgum?",
                 "Lorem, Lorem, ipsum, t!",
                 
                 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, accusamus dicta. Iusto, veritatis voluptates.",
                 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, laudantium saepe recusandaegugug7.",
                 "Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum doloruggugugg8 g uhuhh878 8gg7g7g7g g78g7g7 7g7g.",
                 "dfhjbn ngbjgjnjg yjg bu. Lorem ipsum dolor sit amet. IJUH ygyg 7g7g7 AAA. Gsuggfgr8 . juihu8h h8 h8 9j.",
                
                 "img/Christmas1/Christmas5.jpg",
                 "img/Christmas1/fewfgg4545545.jpg",
                 "img/Christmas1/ngfe8hfhe.jpg",
                 "img/Christmas1/rebgufg.jpg"
                ];


var cardTitle = document.getElementsByClassName("card-title")[0];
var cardText = document.getElementsByClassName("card-text")[0];
var img = document.querySelector("img");

var lastCardIndex = 0;
var cardIndex = 0;

var buttonToChangeCard = document.getElementsByClassName("btn-primary")[0];
buttonToChangeCard.addEventListener("click", function() {
    while (cardIndex === lastCardIndex) {
        cardIndex = parseInt(Math.random() * 4);
    }
    console.log("Card index: " + cardIndex);
    lastCardIndex = cardIndex;
    
    cardTitle.innerHTML = postcards[cardIndex];
    cardText.innerHTML = postcards[cardIndex + 4];
    img.setAttribute("src", postcards[cardIndex + 8]);
});