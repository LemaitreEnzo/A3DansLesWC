const userConsents = true; 
if (userConsents) {
    const script = document.createElement('script');
    script.src = "https://example.com/third-party.js";
    document.body.appendChild(script);
}

document.addEventListener('scroll', function(e) {
}, { passive: true });

setTimeout(() => {
    console.log("Optimisation en cours...");
}, 0);