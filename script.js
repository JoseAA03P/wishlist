
const wishlist = document.getElementById("wishlist");


/* ======================================
   PRODUCTOS DE LA WISHLIST
   ====================================== */

const products = [

    {
        name: "Bálsamo Black Honey - Clinique",
        image: "images/blackhoneylipstick.avif",
        price: "$499",
        link: "https://www.clinique.com.mx/product/1605/4772/maquillaje/labiales/balsamo-labial-almost-lipstick?srsltid=AfmBOopGf3mIEtHIYEpiBFwN1mFi12y13Ks1oYuZkvd5efIF-JipIeSx&shade=Black_Honey"
    },

    {
        name: "Delineador Black Honey - Clinique",
        price: "$450",
        image: "images/blackhoneyliner.avif",
        link: "https://www.clinique.com.mx/product/1604/4771/maquillaje/delineadores-de-labios/delineador-de-labios-quickliner-for-lips?shade=BLACK_HONEY"
    },

    {
        name: "Show Off Bra - Aerie",
        price: "$1,199",
        image: "images/aerieshowoffbra.webp",
        link: "https://www.ae.com/mx/es/p/aerie/bras/unlined-bras/show-off-embroidery-unlined-bra/2791_5301_125"
    },

    {
        name: "Rimel color borgoña - Bailando Juntos (Yuya)",
        price: "$219",
        image: "images/yuyarimelborgona.webp",
        link: "https://yuyatiendaoficial.com/collections/ojos/products/1-mascara-de-pestanas-10-aceites-naturales-borgona"
    },

    {
        name: "Gel fijador de cejas - Bailando Juntos (Yuya)",
        price: "$199",
        image: "images/yuyacelfijadorcejas.webp",
        link: "https://yuyatiendaoficial.com/collections/ojos/products/gel-fijador-para-cejas"
    },

    {
        name: "Pestañas postizas individuales",
        price: "$179",
        image: "images/amazonlashes.jpg",
        link: "https://a.co/d/0imMAUqO"
    },

    {
        name: "Serum corporal Niacinamida - Dove",
        price: "",
        image: "images/doveserumniacinamida.avif",
        link: "https://www.dove.com/mx/p/dove-serum-corporal-tonounif-niaci200.html/07506306252837"
    },

    {
        name: "Ácido glicólico al 7% (100 ml) - The Ordinary",
        price: "$215",
        image: "images/ordinaryacidoglicolico.jpg",
        link: "https://a.co/d/08cx8JPr"
    },

    {
        name: "Tubos de satín para cabello",
        price: "$199",
        image: "images/amazonheatlesscurls.jpg",
        link: "https://a.co/d/0hRcuktM"
    }
];


/* ======================================
   MOSTRAR PRODUCTOS
   ====================================== */

function displayProducts() {

    wishlist.innerHTML = "";


    products.forEach((product) => {

        const card = document.createElement("div");

        card.classList.add("product");


        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <h2>
                    ${product.name}
                </h2>

                <p class="price">
                    ${product.price}
                </p>

                <a
                    href="${product.link}"
                    target="_blank"
                    rel="noopener noreferrer">

                    Ver producto ↗

                </a>

            </div>

        `;


        wishlist.appendChild(card);

    });

}


/* ======================================
   INICIAR PÁGINA
   ====================================== */

displayProducts();
