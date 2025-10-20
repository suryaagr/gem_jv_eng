document.addEventListener('DOMContentLoaded', function () {
    // --- Initialize Tooltips ---
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // --- Glossary Page Search Filter ---
    const searchInput = document.getElementById('glossarySearch');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filter = searchInput.value.toUpperCase();
            const dtElements = document.querySelectorAll('.glossary-list dt');
            
            dtElements.forEach(function(dt) {
                const term = dt.textContent || dt.innerText;
                const dd = dt.nextElementSibling;
                if (term.toUpperCase().indexOf(filter) > -1) {
                    dt.style.display = "";
                    dd.style.display = "";
                } else {
                    dt.style.display = "none";
                    dd.style.display = "none";
                }
            });
        });
    }

    // --- Back to Top Button & Scroll Progress Logic ---
    const backToTopButton = document.getElementById("backToTopBtn");
    const progressBar = document.getElementById("progressBar");

    // Function to handle scroll events
    function handleScroll() {
        // Back to top button visibility
        if (backToTopButton) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        }

        // Scroll progress bar calculation
        if (progressBar) {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            // Ensure we don't go over 100%
            if (scrolled > 100) scrolled = 100;
            progressBar.style.width = scrolled + "%";
        }
    }

    // Attach scroll event listener
    window.onscroll = handleScroll;
});

