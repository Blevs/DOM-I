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

// Assign data

// Nav items
Array.from(document.getElementsByTagName("nav")[0].childNodes)
    .filter(e => e.tagName === 'A')
    .forEach((a, idx) => a.textContent = siteContent["nav"][`nav-item-${1 + idx}`]);

// cta
document.querySelector('.cta-text h1').textContent = siteContent["cta"]["h1"];
document.querySelector('.cta-text button').textContent = siteContent["cta"]["button"];
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

// main content
const mainh4s = Object.entries(siteContent["main-content"])
    .filter(([key, _]) => key.match(/-h4$/g))
    .map(e => e[1]);

const maintext = Object.entries(siteContent["main-content"])
    .filter(([key, _]) => key.match(/-content$/g))
    .map(e => e[1]);

document.querySelectorAll('.main-content h4').forEach((h4, idx) => h4.textContent = mainh4s[idx]);
document.querySelectorAll('.main-content p').forEach((p, idx) => p.textContent = maintext[idx]);
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

// contact
const contact = Object.entries(siteContent["contact"]).map(e => e[1]);
document.querySelectorAll('.contact *').forEach((e, idx) => e.textContent = contact[idx]);

// footer
document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];

// Add new content
const first = document.createElement("a");
first.href = "#";
first.textContent = "First";

const last = document.createElement("a");
last.href = "#";
last.textContent = "Last";

document.getElementsByTagName('nav')[0].prepend(first);

document.getElementsByTagName('nav')[0].appendChild(last);

document.querySelectorAll('nav a').forEach(a => a.style.color = "green");
