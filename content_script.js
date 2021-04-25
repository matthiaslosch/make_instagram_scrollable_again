// When scrolling down on Instagram, after a while, the screen gets blocked by
// a popup asking you to login and scrolling of the screen gets disabled.
// As soon as the popup appears, hide it and make the screen scrollable again.

const node = document.body;
const config = { attributeFilter: [ "style" ] };

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        document.body.style.overflow = "auto";
        document.querySelectorAll("[role='presentation']").forEach(element => {
            element.style.display = "none";
        });
    });
});

observer.observe(node, config);
