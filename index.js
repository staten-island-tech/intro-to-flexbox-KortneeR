const products =[
    {
        name: "Free Stage Series- Blind Box Figure",
        price: 11.00,
        category: "Blind Boxes",
        img: "alnst vol1 blindbox.webp",
        alt: "Blind Box Figures"
    },
        {
        name: "Free Stage Series- Plush Toy",
        price: 4.20,
        category: "Rabbit Series 1",
        img: "bunny1-pin.webp",
        alt: "Rabbit Series 1: Random Can Badges"
    },
        {
        name: "Mini Doll Pendant Blind Box",
        price: 9.00,
        category: "Blind Boxes",
        img: "alnst keychain.jpg",
        alt: "Mini Doll Pendant Blind Box"
    },   
        {
        name: "Sunny Doll Series",
        price: 12.00,
        category: "Blind Boxes",
        img: "sunny-doll.webp",
        alt: "Sunny Doll Series"
    },    
        {
        name: "Baby Series- Mechanical Keycaps",
        price: 7.00,
        category: "Blind Boxes",
        img: "keycap-chain.webp",
        alt: "Baby Series- Mechanical Keycaps"
    },    
        {
        name: "Baby Series- Figure Blind Box",
        price: 10.00,
        category: "Blind Boxes",
        img: "baby box.webp",
        alt: "Baby Series- Figure Blind Box"
    },
        {
        name: "Blind Box Plush Doll",
        price: 10.00,
        category: "Blind Boxes",
        img: "cutealnstbag.webp",
        alt: "Blind Box Plush Doll"
    },  
        {
        name: "Rabbit Series 1: Acrylic Stand",
        price: 18.00,
        category: "Rabbit Series 1",
        img: "all bunny stand.webp",
        alt: "Rabbit Series 1: Acrylic Stand"
    },  
        {
        name: "Rabbit Series 1: Rabbit Keyring",
        price: 7.00,
        category: "Rabbit Series 1",
        img: "bunnykeyring.webp",
        alt: "Rabbit Series 1: Rabbit Keyring"
    },  
        {
        name: "Rabbit Series 1: Random Can Badges",
        price: 4.20,
        category: "Rabbit Series 1",
        img: "bunny1-pin.webp",
        alt: "Rabbit Series 1: Random Can Badges"
    },  
        {
        name: "Rabbit Series 1: Rabbit Cushions",
        price: 4.20,
        category: "Rabbit Series 1",
        img: "bunny-cushion.webp",
        alt: "Rabbit Series 1: Rabbit Cushions"
    },  
        {
        name: "Rabbit Series 1: Rabbit Mug",
        price: 42.00,
        category: "Rabbit Series 1",
        img: "bunny mug.webp",
        alt: "Rabbit Series 1: Rabbit Mug"
    },  
        {
        name: "Rabbit Series 2: Mobile Phone Chain Blind Box",
        price: 19.00,
        category: "Rabbit Series 2",
        img: "chains.webp",
        alt: "Rabbit Series 2: Mobile Phone Chain Blind Box"
    },
        {
        name: "Rabbit Series 2: Blind Box",
        price: 12.00,
        category: "Rabbit Series 2",
        img: "mizi fat bunny.webp",
        alt: "Rabbit Series 2: Blind Box"
    }, 
        {
        name: "Rabbit Series 2: Little Cute Carrot Blind Box",
        price: 5.00,
        category: "Rabbit Series 2",
        img: "carrot-chain.webp",
        alt: "Rabbit Series 2: Little Cute Carrot Blind Box"
    },        
        {
        name: "Rabbit Series 2: Random Can Badges",
        price: 19.00,
        category: "Rabbit Series 2",
        img: "bunny-pin.webp",
        alt: "Rabbit Series 2: Random Can Badges"
    },         
        {
        name: "Rabbit Series 2: Card Set",
        price: 10.00,
        category: "Rabbit Series 2",
        img: "bunny cards.webp",
        alt: "Rabbit Series 2: Card Set"
    },         
        {
        name: "Card Collection Book",
        price: 20.00,
        category: "Rabbit Series 1",
        img: "cardbook.webp",
        alt: "Card Collection Book"
    }, 
        {
        name: "Anakt Garden Kit",
        price: 28.00,
        category: "Rabbit Series 1",
        img: "yaybook.webp",
        alt: "Anakt Garden Kit"
    }, 
        {
        name: "Album Vol.1",
        price: 37.00,
        category: "Rabbit Series 1",
        img: "alnstalbum.webp",
        alt: "Album Vol.1"
    }, 
];

const cart = []

function inject(product) {
    console.log(product.img);
document.querySelector('.container').insertAdjacentHTML(
    "afterbegin",
    `<div class="card"> 
    <h3>${product.name}</h3>
    <h5>${product.category}</h5>
    <img src = ${product.img} class = "image">
    <h4>$${product.price}</h4>
    <button class="button" "data-title="${products.indexOf(product)}">Add to Cart</button>
    </div>`
  );
}

products.forEach(inject);

function addtocart() {
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click',(event) => {
        let productTitle = event.target.closest(".card").querySelector("h3").textContent; 
        let productPrice = event.target.closest(".card").querySelector("h4").textContent;
        console.log(productTitle, productPrice) 
        //insertAdjacentHTML copy inject func
        document.querySelector('.cart').insertAdjacentHTML(
        "afterbegin",
        `<div class="card">
        <h4>${productTitle}</h4> 
        <h4>${productPrice}</h4>
        </div>`
);
    } )
})
}


addtocart()
cart()