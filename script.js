window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    let video = document.querySelector('.ParallaxVideo video');
    let container = document.querySelector('.ParallaxVideo');
    let text = document.querySelector('.ParallaxVideo h1');
    let speed = 0.7; // Adjust the speed of the parallax effect as needed
    
    if (offset > text.offsetHeight) { // Check if scroll offset exceeds the height of the text
        video.style.width = '30%'; // Adjust the video size as needed
        text.style.display = 'none'; // Hide the text
    } else {
        video.style.width = '100%'; // Reset video size to its original width
        text.style.display = 'block'; // Show the text
    }
    
    // Move the background position vertically based on the scroll offset and speed
    container.style.backgroundPositionY = offset * speed + 'px';
});





document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    scrollLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  });
  




  const communityTab = document.querySelector('a[href="#community"]');

  // Add click event listener to the tab
  communityTab.addEventListener('click', function(event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Scroll to the "Community" section smoothly
    document.querySelector('#community').scrollIntoView({
      behavior: 'smooth'
    });
  });