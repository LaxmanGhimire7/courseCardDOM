let sheryians = [
  {
    name: "AI Data Science and Analytics with GenAI",
    tag: "HINGLISH",
    words: "Data Science + GenAI",
    price: "₹6999",
    originalPrice: "₹15000",
    discountPercentage: "53% OFF",
    image: "./images/dataScience.webp",
  },
  {
    name: "2.0 Job Ready AI Powered Cohort: Web + DSA + Aptitude",
    tag: "HINGLISH",
    tag1: "Live Batch",
    words: "Limited Time Discount",
    price: "₹5999",
    originalPrice: "₹11999",
    discountPercentage: "50% OFF",
    image: "/images/cohort2.0.webp",
  },
  {
    name: "DSA Domination Cohort",
    tag: "HINGLISH",
    tag1: "Live Batch",
    words: "Build Logic, Crack Interviews",
    price: "₹6600",
    originalPrice: "₹7500",
    discountPercentage: "12% OFF",
    image: "./images/dsadominant.webp",
  },
  {
    name: "Job Ready AI Powered Cohort: Web + DSA + Aptitude",
    tag: "HINGLISH",
    tag1: "Live Batch",
    words: "Limited Time Discount",
    price: "₹5999",
    originalPrice: "₹11999",
    discountPercentage: "50% OFF",
    image: "./images/cohort1.webp",
  },

  {
    name: "Three.js Domination",
    tag: "HINDI",
    words: "Create 3D Websites",
    price: "₹2499",
    originalPrice: "₹3500",
    discountPercentage: "28% OFF",
    image: "./images/threeJS.webp",
  },
  {
    name: "Java & DSA Domination",
    tag: "HINGLISH",
    words: "Master Java for Placements",
    price: "₹4999",
    originalPrice: "₹9999",
    discountPercentage: "50% OFF",
    image: "./images/java&dsa.webp",
  },
  {
    name: "Front-End Domination: Create Anything with Code",
    tag: "HINDI",
    words: "Master UI Development",
    price: "₹3999",
    originalPrice: "₹9999",
    discountPercentage: "60% OFF",
    image: "./images/frontenddomination.webp",
  },

  {
    name: "Aptitude & Reasoning for Campus Placements",
    tag: "HINGLISH",
    words: "Crack Placement Tests",
    price: "₹1100",
    originalPrice: "₹1999",
    discountPercentage: "45% OFF",
    image: "./images/aplitude.webp",
  },
];

var sum = "";

sheryians.forEach((elem) => {
  let htmlTag = "";

  if (elem.tag1) {
    htmlTag += `<p id="type2">${elem.tag1}</p>`;
  }

  if (elem.tag) {
    htmlTag += `<p id="type1">${elem.tag}</p>`;
  }

  sum += `  <div class="selection">
        <div class="main-card">
          <div class="card">
            <div class="image-part">
              <img src="./images/dataScience.webp" alt="" />
            </div>

            <div class="text-part">
              <h3>2.0 Job Ready AI Powered Cohort: Web + DSA + Aplitude</h3>
              <div class="type">
                <p id="type2">Live Batch</p>
                <p id="type1">Hinglish</p>
              </div>
            </div>

            <div class="price">
              <p>Limited Time Discount</p>
              <div class="tags">
                <p id="tags1">₹6999 (+GST)</p>
                <p id="tags2">₹9999</p>
                <p id="tags3">53% OFF</p>
              </div>
            </div>
          </div>
        </div>
        <div class="detail">
          <button>View Detail</button>
        </div>
        </div>   
          `;
});

var mainCard = document.querySelector(".selection");
mainCard.innerHTML = sum;
