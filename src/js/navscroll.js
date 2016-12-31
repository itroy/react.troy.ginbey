window.onscroll = function() {
  let navbarClasses = document.getElementById('navbar_fixed').classList;
  if(window.scrollY > 80) {
    if (!navbarClasses.contains('scrolled')) {
      navbarClasses.add('scrolled');
    };
  }
  if(window.scrollY < 80) {
    navbarClasses.remove('scrolled');
  }
};
