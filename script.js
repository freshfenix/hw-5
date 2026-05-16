document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header-burger');
  const nav = document.querySelector('.header-nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.classList.toggle('lock'); // To prevent scrolling when menu is open
    });
  }

  // Portfolio filtering logic
  const filterBtns = document.querySelectorAll('.filter-btn, .nav-filter > .header-link');
  const projects = document.querySelectorAll('.project');

  if (filterBtns.length > 0 && projects.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (btn.tagName === 'A') {
          e.preventDefault(); // Prevent page reload for anchor links
        }

        const filterValue = btn.textContent.trim().toLowerCase();

        // Skip filtering if "Contacts" is clicked (it's a dropdown, not a project category)
        if (filterValue === 'contacts') return;

        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to all buttons that match the clicked category
        filterBtns.forEach(b => {
          if (b.textContent.trim().toLowerCase() === filterValue) {
            b.classList.add('active');
          }
        });

        projects.forEach(project => {
          const categoryElement = project.querySelector('.prjct-info p');
          if (categoryElement) {
            const categoryText = categoryElement.textContent.trim().toLowerCase();
            
            if (filterValue === 'all' || filterValue === categoryText) {
              project.style.display = ''; // Reset display to original state
            } else {
              project.style.display = 'none'; // Hide project
            }
          }
        });
      });
    });
  }
});
