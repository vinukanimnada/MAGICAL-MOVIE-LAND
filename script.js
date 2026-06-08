function toggleMenu(){
  document.getElementById('sidebar').classList.toggle('active');
}

// Active menu highlight
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const menuLinks = document.querySelectorAll('#sidebar ul li a');
  
  menuLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    
    // index.html සහ / දෙකම Home විදිහට count කරපන්
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index.html') ||
        (currentPage === 'MAGICAL-MOVIE-LAND/' && linkPage === 'index.html')) {
      link.parentElement.classList.add('active');
    }
  });
});
