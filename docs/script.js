
const wishlist = document.getElementById("wishlist");


/* ======================================
   PRODUCTOS DE LA WISHLIST
   ====================================== */

const products = [

    {
        name: "Explorer - Montblanc",
        image: "images/montblanc.jpg",
        price: "$531",
        link: "https://www.mercadolibre.com.mx/perfume-montblanc-explorer-100-ml/p/MLM16141387?pdp_filters=item_id%3AMLM1887180221&matt_tool=17030900&ua=ha5fdsIirZxuQfe91X0mYJX8rk1URj6qdkLpUgXx8A53FuU&offer_type=BEST_PRICE"
    },

    {
        name: "Velas aromaticas",
        price: "$258",
        image: "images/velas.jpg",
        link: "https://a.co/d/0iQFKzA7"
    },

    {
        name: "Calzado senderismo",
        price: "$599",
        image: "images/senderismo.jpg",
        link: "https://www.decathlon.com.mx/descubre-mas-de-65-deportes/montana/calzado-senderismo"
    },

    {
        name: "Mochila cool (cuero)",
        price: "$407",
        image: "images/mochila.webp",
        link: "https://a.co/d/08C535a7"
    },

    {
        name: "Reloj Casio Vintage Digital Negro Origina",
        price: "$550",
        image: "images/casio.webp",
        link: "https://www.mercadolibre.com.mx/up/MLMU4061577586?matt_tool=17030900&pdp_filters=item_id:MLM2985793727&ua=MzQrfqDCC6ZVwNA9G1Hvd3zGqze9Cklunos55KPHwsVvrQo#origin=share&sid=share&wid=MLM2985793727&action=copy"
    },

    {
        name: "Taza cool",
        price: "$254",
        image: "images/taza.avif",
        link: "https://a.co/d/0djFeQME"
    },

    {
        name: "Termo owala",
        price: "$377",
        image: "images/owala.webp",
        link: "https://www.mercadolibre.com.mx/p/MLM26254901?matt_tool=17030900&pdp_filters=item_id:MLM6089507246&ua=v-amche7xLPdY752g-fwOU3-RqJA0tBFw8i8Wuy7o1e9dMo#origin=share&sid=share&wid=MLM6089507246&action=copy"
    },

    {
        name: "Playeras para el gimnasio",
        price: "$298",
        image: "images/gym.webp",
        link: "https://www.mercadolibre.com.mx/paquete-de-4-playeras-deportivas-de-licra-de-secado-rapido/up/MLMU3866555661?pdp_filters=item_id%3AMLM5098644280&from=gshop&matt_tool=57911886&matt_word=&matt_source=google&matt_campaign_id=23406600365&matt_ad_group_id=193915119354&matt_match_type=&matt_network=g&matt_device=c&matt_creative=790322144558&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5581263552&matt_product_id=MLMU3866555661&matt_product_partition_id=2493287457326&matt_target_id=aud-2006290659986:pla-2493287457326&cq_src=google_ads&cq_cmp=23406600365&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23406600365&gbraid=0AAAAAoTLPrIkigJY2-7fyjZuM_EZ7tADg&gclid=EAIaIQobChMI8KCn2uHYlgMVyitECB3H1ysxEAQYASABEgKpG_D_BwE"
    },

    {
        name: "Power Bank",
        price: "$199",
        image: "images/power.webp",
        link: "https://a.co/d/0hxm98Tn"
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
