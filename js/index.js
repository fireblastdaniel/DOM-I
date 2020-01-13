const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//Set nav bar links
let navLinks = document.querySelectorAll('nav a');
for(let i = 0; i < navLinks.length; i++){
  navLinks[i].text = siteContent['nav'][`nav-item-${i+1}`];
}

//cta section
let ctaText = document.querySelector('.cta-text h1');
let ctaButton = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('.cta img');
ctaText.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];


//main content section
let topMainH4 = document.querySelectorAll('.top-content h4');
let topMainP = document.querySelectorAll('.top-content p');
let mainImg = document.querySelector('.main-content img')
let bottomMainH4 = document.querySelectorAll('.bottom-content h4');
let bottomMainP = document.querySelectorAll('.bottom-content p');
topMainH4[0].textContent = siteContent['main-content']['features-h4'];
topMainH4[1].textContent = siteContent['main-content']['about-h4'];
topMainP[0].textContent = siteContent['main-content']['features-content'];
topMainP[1].textContent = siteContent['main-content']['about-content'];
mainImg.src = siteContent['main-content']['middle-img-src'];
bottomMainH4[0].textContent = siteContent['main-content']['services-h4'];
bottomMainH4[1].textContent = siteContent['main-content']['product-h4'];
bottomMainH4[2].textContent = siteContent['main-content']['vision-h4'];
bottomMainP[0].textContent = siteContent['main-content']['services-content'];
bottomMainP[1].textContent = siteContent['main-content']['product-content'];
bottomMainP[2].textContent = siteContent['main-content']['vision-content'];

//contact section
let contactH4 = document.querySelector('.contact h4');
let address = document.querySelectorAll('.contact p');
contactH4.textContent = siteContent['contact']['contact-h4'];
address[0].textContent = siteContent['contact']['address'];
address[1].textContent = siteContent['contact']['phone'];
address[2].textContent = siteContent['contact']['email'];

//footer section
let copyright = document.querySelector('footer p');
copyright.textContent = siteContent['footer']['copyright'];

navLinks.forEach( element => {element.style.color = 'green'})

