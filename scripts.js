// Get the category and search input elements
const categoryFilter = document.getElementById('category');
const searchInput = document.getElementById('search');
const projectLinks = document.querySelectorAll('.projects-list a');

// Function to filter projects by category
categoryFilter.addEventListener('change', function() {
    const selectedCategory = categoryFilter.value.toLowerCase();
    
    projectLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes(selectedCategory) || selectedCategory === '') {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });

    // Scroll to category section on the project page
    if (selectedCategory) {
        window.location.href = `#${selectedCategory}`;
    }
});

// Function to search projects by name
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    
    projectLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes(searchTerm)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
});

