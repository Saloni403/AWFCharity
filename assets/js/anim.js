
// Intersection Observer Callback
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation classes when element enters the viewport
            if (entry.target.classList.contains('slide-left-trigger')) {
                entry.target.classList.add('slide-in-left');
            }
            if (entry.target.classList.contains('slide-right-trigger')) {
                entry.target.classList.add('slide-in-right');
            }

            // Make sure the elements are visible once animated
            entry.target.style.visibility = 'visible';
            entry.target.style.opacity = '1';

            // Stop observing the element once it's animated
            observer.unobserve(entry.target);
        }
    });
};

// Create IntersectionObserver instance
const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5 // Trigger when 50% of the element is in the viewport
});

// Target elements to observe
document.querySelectorAll('.slide-left-trigger, .slide-right-trigger').forEach(element => {
    observer.observe(element);
});
