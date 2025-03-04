// Function to toggle the navigation menu on and off
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
}

// Function to scroll to a section when a navigation link is clicked
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 50, // Offset for better alignment
        behavior: 'smooth'
    });
    // Hide the menu after clicking on a link
    document.getElementById('nav-links').classList.remove('active');
}
