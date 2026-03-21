
const faqs = [
    {
        question: "What is Netflix?",
        answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`
    },
    {
        question: "How much does Netflix cost?",
        answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.`
    },
    {
        question: "What can I watch?",
        answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on any internet-connected device.

        You can also download your favourite shows with the app and watch offline.`
    },
    {
        question: "How do I cancel?",
        answer: `Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
    },
    {
        question: "What can I watch on Netflix?",
        answer: `Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more.`
    },
    {
        question: "Is Netflix good for kids?",
        answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly content.

        Kids profiles come with PIN-protected parental controls.`
    }
];


const container = document.getElementById("faq-container");

faqs.forEach(faq => {

    // 1. Create main box
    const box = document.createElement("div");
    box.classList.add("faqbox");

    // 2. Add inner HTML
    box.innerHTML = `
        <div class="faq-question">
            <span>${faq.question}</span>
            <svg class="faq-icon" width="24" height="24">
                <path d="M12 4V20 M4 12H20" stroke="white" stroke-width="2"/>
            </svg>
        </div>

        <div class="faq-answer">
            ${faq.answer}
        </div>
    `;

    // 4. Add to DOM 
    faqContainer.appendChild(box);
});


// 4. ADD BEHAVIOR (EVENT DELEGATION)
container.addEventListener("click", (e) => {

    // find clicked faqbox
    const box = e.target.closest(".faqbox");

    // if clicked outside, ignore
    if (!box) return;

    // get all boxes
    const allBoxes = container.querySelectorAll(".faqbox");

    // close others
    allBoxes.forEach(item => {
        if (item !== box) {
            item.classList.remove("active");
        }
    });

    // toggle current
    box.classList.toggle("active");
});


// function createFAQItem(faq) {
//     const box = document.createElement("div");
//     box.classList.add("faqbox");

//     box.innerHTML = `
//         <div class="faq-question">
//             <span>${faq.question}</span>
//             <svg class="faq-icon" width="24" height="24">
//                 <path d="M12 4V20 M4 12H20" stroke="white" stroke-width="2"/>
//             </svg>
//         </div>

//         <div class="faq-answer">
//             ${faq.answer}
//         </div>
//     `;

//     // Add behavior
//     box.addEventListener("click", () => {

//         document.querySelectorAll(".faqbox").forEach(item => {
//             if (item !== box) {
//                 item.classList.remove("active");
//             }
//         });

//         box.classList.toggle("active");
//     });

//     return box;
// }


// faqBoxes.forEach(box => {
//     const answer = box.querySelector(".faq-answer");

//     box.addEventListener("click", () => {

//         faqBoxes.forEach(item => {
//             if (item !== box) {
//                 item.classList.remove("active");
//                 item.querySelector(".faq-answer").style.maxHeight = null;
//             }
//         });

//         box.classList.toggle("active");

//         if (box.classList.contains("active")) {
//             answer.style.maxHeight = answer.scrollHeight + "px";
//         } else {
//             answer.style.maxHeight = null;
//         }
//     });
// });