"use strict"

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/

// Add navication
 const navOpen=document.querySelector(".nav-open")
 const headerNav=document.querySelector(".header__navbar")
 const menuOpen=document.querySelector(".frist")
 const menuClose=document.querySelector(".second")
 const headerBox= document.querySelector(".header__box")
 const btnNavEl=document.querySelector(".menu__icon")


 console.log(navOpen,menuClose,menuOpen,headerNav,btnNavEl);
   // old way
  // menuOpen.addEventListener("click",()=>{
  //   headerBox.classList.add("nav-open")
    
  // })
  // menuClose.addEventListener("click",()=>{
  //   headerBox.classList.remove("nav-open")

  // })
  //  fast way
  btnNavEl.addEventListener("click",()=>{
    headerBox.classList.toggle('nav-open')
  })




  // set  dynamic time here
  const data= document.querySelector(".data-time")
   console.log(data);

    const getdate= new Date().getFullYear()
    data.textContent=getdate
    /////////////////////////////

    ///////////////////////////
    // smooth scroll animation
    //////////////////////

// frist we should select all links on page
 const alllinks = document.querySelectorAll("a:link")
 
 
 
 .forEach(link=>{
    link.addEventListener("click",(e)=>{
      e.preventDefault()
      const href= link.getAttribute("href")
      console.log(href);
      //scroll back to top
      if(href=== "#"){
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
      }
      
      //Scroll to other links
    
      else if( href !== "#" && href.startsWith("#")){

        const sectionEl= document.querySelector(href)
        sectionEl.scrollIntoView({
          behavior:"smooth"
        })

      }
      //close mobile  navigation
       if (link.classList.contains("nav__bar__links"))
       headerBox.classList.toggle('nav-open')

    })
 })
// Sticky navigation

const sectionHeroEl = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
