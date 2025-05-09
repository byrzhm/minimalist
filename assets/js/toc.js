document.addEventListener('DOMContentLoaded', function() {
    const toc = document.querySelector('.toc-content');
    if (!toc) return;
  
    const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
    const tocLinks = toc.querySelectorAll('a');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove active class from all links
          tocLinks.forEach(link => link.classList.remove('active'));
          
          // Add active class to current link
          const activeLink = toc.querySelector(`a[href="#${entry.target.id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, observerOptions);
  
    // Observe all headings
    headings.forEach(heading => observer.observe(heading));
  }); 