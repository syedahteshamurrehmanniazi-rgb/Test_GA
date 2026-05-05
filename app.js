// Page redirection
function goToPage(page) {
    window.location.href = page;
}

// Run after page loads
document.addEventListener("DOMContentLoaded", function () {

    // Track ALL button clicks
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function(btn) {
        btn.addEventListener("click", function () {
            if (typeof gtag === "function") {
                gtag('event', 'button_click', {
                    event_category: 'engagement',
                    event_label: btn.innerText
                });
            }
        });
    });

    // Track contact form submission
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function () {
            if (typeof gtag === "function") {
                gtag('event', 'contact_form_submit', {
                    event_category: 'lead',
                    event_label: 'contact form'
                });
            }
        });
    }

    // Special offer button
    const offerBtn = document.getElementById("offerBtn");

    if (offerBtn) {
        offerBtn.addEventListener("click", function () {
            alert("Special Offer Applied!");

            if (typeof gtag === "function") {
                gtag('event', 'offer_click', {
                    event_category: 'promotion',
                    event_label: 'special offer'
                });
            }
        });
    }
});
