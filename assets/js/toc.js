document.addEventListener('DOMContentLoaded', function() {
    const toc = document.querySelector('.toc-content');
    if (!toc) return;
  
    const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
    const tocLinks = toc.querySelectorAll('a');
    
    // Calculate header height to use as scroll offset
    const headerHeight = document.querySelector('header').offsetHeight;
    
    // Add click event handlers to TOC links
    tocLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Get the element's position relative to the viewport
          const elementPosition = targetElement.getBoundingClientRect().top;
          // Get the current scroll position
          const offsetPosition = elementPosition + window.scrollY - headerHeight - 20; // 20px extra padding
          
          // Scroll to the heading with offset for header
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without reloading page
          history.pushState(null, null, `#${targetId}`);
          
          // Add active class to clicked link and mark as user-clicked
          tocLinks.forEach(link => {
            link.classList.remove('active');
            link.classList.remove('user-clicked');
          });
          this.classList.add('active');
          this.classList.add('user-clicked');
          
          // Remove the user-clicked class after a delay
          setTimeout(() => {
            this.classList.remove('user-clicked');
          }, 1500);
        }
      });
    });
    
    const scrollPadding = 20; // Extra padding beyond the header
    
    const observerOptions = {
      root: null,
      rootMargin: `-${headerHeight + scrollPadding}px 0px -20% 0px`, // Adjust top margin to account for header
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      // Filter for elements that are currently intersecting
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Sort entries by their position in the viewport
        const sortedEntries = visibleEntries.sort((a, b) => {
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });
        
        // Get the topmost visible heading (first one after sorting)
        const topmostEntry = sortedEntries[0];
        
        // Remove active class from all links
        tocLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to current link
        const activeLink = toc.querySelector(`a[href="#${topmostEntry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
          
          // If this is from scrolling (not clicking), also scroll the TOC to show the active link
          if (!activeLink.classList.contains('user-clicked')) {
            activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      }
    }, observerOptions);
  
    // Observe all headings
    headings.forEach(heading => observer.observe(heading));
  }); 