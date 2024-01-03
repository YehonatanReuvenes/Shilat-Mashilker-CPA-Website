// Load header content
var headerContainer = document.getElementById('header-container');
fetch('head.html')
  .then(response => response.text())
  .then(content => {
    headerContainer.innerHTML = content;

    var page = headerContainer.getAttribute('data-page');
    if (page) {
      switch(page){
        case 'Home':
            aLink = document.getElementById('home-link').style.textDecoration = "underline overline"
          break;
        case 'Services':
            aLink = document.getElementById('services-link').style.textDecoration = "underline overline"
          break;
        case 'About':
            document.getElementById('about-link').style.textDecoration = "underline overline"
          break;
        case 'Articles':
            document.getElementById('articles-link').style.textDecoration = "underline overline"
          break;
        case 'MakeContact':
            aLink = document.getElementById('make-contact-link').style.textDecoration = "underline overline"
          break;
      }
    }
  });

// Load footer content
var footerContainer = document.getElementById('footer-container');
fetch('foot.html')
  .then(response => response.text())
  .then(content => {
    footerContainer.innerHTML = content;
  });


    // Add the external script
    var scriptTag = document.createElement('script');
    scriptTag.src = 'https://cdn.enable.co.il/licenses/enable-L23672mbj2u640xv-0124-53927/init.js';
    document.head.appendChild(scriptTag);