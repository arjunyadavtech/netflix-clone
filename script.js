const faqs = [
    {
        question: "What is StreamX?",
        answer: `StreamX is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`
    },
    {
        question: "How much does StreamX cost?",
        answer: `Watch StreamX on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.`
    },
    {
        question: "What can I watch?",
        answer: `Watch anywhere, anytime. Sign in with your StreamX account to watch instantly on the web or on any internet-connected device.

        You can also download your favourite shows with the app and watch offline.`
    },
    {
        question: "How do I cancel?",
        answer: `StreamX is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
    },
    {
        question: "What can I watch on StreamX?",
        answer: `StreamX has an extensive library of feature films, documentaries, shows, anime, award-winning StreamX originals, and more.`
    },
    {
        question: "Is StreamX good for kids?",
        answer: `The StreamX Kids experience is included in your membership to give parents control while kids enjoy family-friendly content.

        Kids profiles come with PIN-protected parental controls.`
    }
];




function createFAQ(container, faqs) {
    if (!container) {
        console.error("Container not found");
        return;
    }

    faqs.forEach(faq => {

        const box = document.createElement("div");
        box.classList.add("faqbox");

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

        container.appendChild(box);
    });

    container.addEventListener("click", (e) => {

    const box = e.target.closest(".faqbox");
    if (!box) return;

    const allBoxes = container.querySelectorAll(".faqbox");

    allBoxes.forEach(item => {
        if (item !== box) {
            item.classList.remove("active");
        }
    });

    box.classList.toggle("active");
    });
}


const container = document.getElementById("faq-container");

createFAQ(container, faqs);

