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


// All images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headimg = document.getElementById("cta-img");
headimg.setAttribute('src', siteContent["cta"]["img-src"]);

let midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Navigation Bar
let mainMenu = document.querySelectorAll("a");
mainMenu[0].textContent=siteContent["nav"]["nav-item-1"];
mainMenu[1].textContent=siteContent["nav"]["nav-item-2"];
mainMenu[2].textContent=siteContent["nav"]["nav-item-3"];
mainMenu[3].textContent=siteContent["nav"]["nav-item-4"];
mainMenu[4].textContent=siteContent["nav"]["nav-item-5"];
mainMenu[5].textContent=siteContent["nav"]["nav-item-6"];

// Top Section

let topper = document.querySelectorAll("h1");
topper[0].textContent=siteContent["cta"]["h1"];

let butn = document.querySelectorAll("button")
butn[0].textContent=siteContent["cta"]["button"];
// Middle h4's
let midheads = document.querySelectorAll('h4');
midheads[0].textContent=siteContent["main-content"]["features-h4"];
midheads[1].textContent=siteContent["main-content"]["about-h4"];
midheads[2].textContent=siteContent["main-content"]["services-h4"];
midheads[3].textContent=siteContent["main-content"]["product-h4"];
midheads[4].textContent=siteContent["main-content"]["vision-h4"];

// Middle content 
let paras = document.querySelectorAll("p");
paras[0].textContent=siteContent["main-content"]["features-content"];
paras[1].textContent=siteContent["main-content"]["about-content"];
paras[2].textContent=siteContent["main-content"]["services-content"];
paras[3].textContent=siteContent["main-content"]["product-content"];
paras[4].textContent=siteContent["main-content"]["vision-content"];


// Bottom header 

// Bottom Content
let contacts1 = document.querySelectorAll(".contact h4");
contacts1[0].textContent=siteContent["contact"]["contact-h4"];

let infocon = document.querySelectorAll(".contact p")
infocon[0].textContent=siteContent["contact"]["address"];
infocon[1].textContent=siteContent["contact"]["phone"];
infocon[2].textContent=siteContent["contact"]["email"];


// Task 3 part 1
mainMenu.forEach( element => {
  element.style.color = "green";
})

// Task 3 Part 2
//  * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. 

let newMenuItem = document.createElement('a');
newMenuItem.textContent = "Next"

const parentElement = document.querySelector('nav');
parentElement.append(newMenuItem)


let contactItem = document.createElement('h4');
contactItem.textContent = "Maggie's Website"

const parentElement2 = document.querySelector('.contact');
parentElement2.appendChild(contactItem)