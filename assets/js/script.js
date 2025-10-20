// Initialize Bootstrap Tooltips
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {
        html: true // Allow HTML content in tooltips
    }));
});


// --- Existing Glossary Search Functionality ---
const glossarySearch = document.getElementById('glossarySearch');
const glossaryList = document.getElementById('glossaryList');

if (glossarySearch && glossaryList) {
    const terms = glossaryList.getElementsByTagName('dt');
    const definitions = glossaryList.getElementsByTagName('dd');

    glossarySearch.addEventListener('keyup', function(e) {
        const searchTerm = e.target.value.toLowerCase();

        for (let i = 0; i < terms.length; i++) {
            const termText = terms[i].textContent.toLowerCase();
            if (termText.includes(searchTerm)) {
                terms[i].style.display = '';
                definitions[i].style.display = '';
            } else {
                terms[i].style.display = 'none';
                definitions[i].style.display = 'none';
            }
        }
    });
}

