const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!');

const navLinks = document.querySelectorAll(" header nav a")
console.log(navLinks)

// navLinks.classList.add('italics')

// navLinks.style.fontStyle = "italics"
navLinks.forEach((element, index) => {
element.classList.add('italic')
element.style.fontstyle = 'italics'

})



const navAnc1 = document.querySelector("nav a:nth-of-type(1)").textContent = "Services"

const navAnc2 =document.querySelector("nav a:nth-of-type(2)").textContent = "Product"

const navAnc3 =document.querySelector("nav a:nth-of-type(3)").textContent = "Vision"

const navAnc4 =document.querySelector("nav a:nth-of-type(4)").textContent = "Features"

const navAnc5 =document.querySelector("nav a:nth-of-type(5)").textContent = "About"

const navAnc6 =document.querySelector("nav a:nth-of-type(6)").textContent = "Contact"





const logoImg = document.querySelector("#logo-img").src="http://localhost:9000/img/logo.png"

const h1 = document.querySelector('h1').textContent = "DOM Is Awesome"

const button = document.querySelector("button").textContent = "Get Started"

const ctaImg = document.querySelector("#cta-img").src = "http://localhost:9000/img/cta.png"

const topContent =document.querySelector(".top-content")
topContent.children[0].children[0].textContent= siteContent['main-content']['features-h4']

topContent.children[0].children[1].textContent= siteContent['main-content']['features-content']

topContent.children[1].children[0].textContent= siteContent['main-content']['about-h4']

topContent.children[1].children[1].textContent= siteContent['main-content']['about-content']



const middleImg = document.querySelector("#middle-img").src =  "http://localhost:9000/img/accent.png"

const bottomContent = document.querySelector(".bottom-content")
bottomContent.children[0].children[0].textContent = siteContent['main-content']['services-h4']

bottomContent.children[0].children[1].textContent = siteContent['main-content']['services-content']

bottomContent.children[1].children[0].textContent = siteContent['main-content']['product-h4']

bottomContent.children[1].children[1].textContent = siteContent['main-content']['product-content']

bottomContent.children[2].children[0].textContent = siteContent['main-content']['vision-h4']

bottomContent.children[2].children[1].textContent = siteContent['main-content']['vision-content']
const h4Product =document.querySelector("div h4:nth-of-type(4)")

const productP = document.querySelector("div p:nth-of-type(4)")

const h4Vision =document.querySelector("div h4:nth-of-type(5)")

const visionP = document.querySelector("div p:nth-of-type(5)")


const h4Contact = document.querySelector(".contact h4").textContent = "Contact"

const contactP1 = document.querySelector(".contact p:nth-of-type(1)").textContent =" 123 Way 456 Street Somewhere, USA"

const contactP2 = document.querySelector(".contact p:nth-of-type(2)").textContent ="1 (888) 888-8888"


const contactP3 = document.querySelector(".contact p:nth-of-type(3)").textContent ="sales@greatidea.io"

// Footer
const footerLink = document.querySelector("footer a")

footerLink.textContent = "Copyright Great Idea! 2021"

console.log(footerLink)
footerLink.classList.add('bold')

footerLink.style.fontStyle = "bold"

