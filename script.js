
// Get all FAQ boxes and their corresponding SVG icons
const faqBoxes = document.querySelectorAll('.faqbox');

// Add click event listeners to each FAQ box
faqBoxes.forEach(faqBox => {
    const svgIcon = faqBox.querySelector('svg');
    faqBox.addEventListener('click', () => toggleFAQContent(faqBox, svgIcon));
      
});

// Function to toggle the visibility of the FAQ content and change the SVG icon
function toggleFAQContent(faqBox, svgIcon) {
    // Get the corresponding FAQ content
    const faqContent = faqBox.nextElementSibling;

    // Toggle the class to show/hide content
    faqContent.classList.toggle('show-content');
    // Toggle the SVG icon between '+' and 'x'
    svgIcon.classList.toggle('rotate-icon');
    const isRotated = svgIcon.style.transform === 'rotate(45deg)';
    svgIcon.style.transform = isRotated ? '' : 'rotate(45deg)';
  
}

// You can add this function to close the content if needed
function closeFAQContent() {
    const faqContents = document.querySelectorAll('.faq-content');
    const svgIcons = document.querySelectorAll('.faqbox svg');

    // Close all FAQ contents
    faqContents.forEach(content => content.classList.remove('show-content'));

    // Change all SVG icons back to '+'
    svgIcons.forEach(icon => icon.classList.remove('rotate-icon'));
}
