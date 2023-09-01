console.log("Hello world!");

const myName = "Hiep Phan";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

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

// Mặc định là ngôn ngữ tiếng Anh
let currentLanguage = 'de';

// Hàm để tải tệp JSON dịch
function loadTranslations(language) {
    fetch(`../translations/${language}.json`)
        .then(response => response.json())
        .then(data => {
            translations = data;
            updateUI();
        })
        .catch(error => {
            console.error('Error loading translations:', error);
        });
}

// Hàm để cập nhật giao diện với dữ liệu dịch mới
function updateUI() {
    document.querySelector('.how-it-work').textContent = translations['how_it_work'];
    document.querySelector('.services').textContent = translations['services'];
    document.querySelector('.eyelash-lengthening').textContent = translations['eyelash_lengthening'];
    document.querySelector('.eyelash-lifting').textContent = translations['eyelash_lifting'];
    document.querySelector('.nail').textContent = translations['nail'];
    document.querySelector('.training').textContent = translations['training'];
    document.querySelector('.testimonials').textContent = translations['testimonials'];
    document.querySelector('.price-list').textContent = translations['price_list'];
    document.querySelector('.contact').textContent = translations['contact'];
    document.querySelector('.call').textContent = translations['call'];
    document.querySelector('.online-booking').textContent = translations['online_booking'];
    document.querySelector('.online-booking2').textContent = translations['online_booking'];
    document.querySelector('.online-booking3').textContent = translations['online_booking'];
    document.querySelector('.online-booking4').textContent = translations['online_booking'];
    document.querySelector('.banner-heading').textContent = translations['banner_heading'];
    document.querySelector('.banner-description').textContent = translations['banner_description'];
    document.querySelector('.banner-btn').textContent = translations['banner_btn'];
    document.querySelector('.learn-more').textContent = translations['learn_more'];
    document.querySelector('.delivered-text').textContent = translations['delivered_text'];
    document.querySelector('.we-work').textContent = translations['we_work'];
    document.querySelector('.step-heading').textContent = translations['step_heading'];
    document.querySelector('.step1').textContent = translations['step1'];
    document.querySelector('.step1-description').textContent = translations['step1_description'];
    document.querySelector('.step2').textContent = translations['step2'];
    document.querySelector('.step2-description').textContent = translations['step2_description'];
    document.querySelector('.step3').textContent = translations['step3'];
    document.querySelector('.step3-description').textContent = translations['step3_description'];
    document.querySelector('.services-subtitle').textContent = translations['services_subtitle'];
    document.querySelector('.eyelashes').textContent = translations['eyelashes'];
    document.querySelector('.eyelash-extensions').textContent = translations['eyelash_extensions'];
    document.querySelector('.handmade').textContent = translations['handmade'];
    document.querySelector('.guarantee').textContent = translations['guarantee'];
    document.querySelector('.days').textContent = translations['days'];
    document.querySelector('.eyelash-design').textContent = translations['eyelash_design'];
    document.querySelector('.smooth-as-silk').textContent = translations['smooth_as_silk'];
    document.querySelector('.organic').textContent = translations['organic'];
    document.querySelector('.coconut').textContent = translations['coconut'];
    document.querySelector('.wax-text').textContent = translations['wax'];
    document.querySelector('.nail-care').textContent = translations['nail_care'];
    document.querySelector('.nail-gel-acrylic').textContent = translations['nail_gel_acrylic'];
    document.querySelector('.manicure').textContent = translations['manicure'];
    document.querySelector('.pedicure').textContent = translations['pedicure'];
    document.querySelector('.testimonials-title').textContent = translations['testimonials_heading'];
    document.querySelector('.testimonials-description').textContent = translations['testimonials_heading'];
    document.querySelector('.testimonial-text1').textContent = translations['testimonial_text1'];
    document.querySelector('.testimonial-text2').textContent = translations['testimonial_text2'];
    document.querySelector('.testimonial-text3').textContent = translations['testimonial_text3'];
    document.querySelector('.testimonial-text4').textContent = translations['testimonial_text4'];
    document.querySelector('.feature1').textContent = translations['feature1'];
    document.querySelector('.feature-text1').textContent = translations['feature_text1'];
    document.querySelector('.feature2').textContent = translations['feature2'];
    document.querySelector('.feature-text2').textContent = translations['feature_text2'];
    document.querySelector('.feature3').textContent = translations['feature3'];
    document.querySelector('.feature-text3').textContent = translations['feature_text3'];
    document.querySelector('.feature4').textContent = translations['feature4'];
    document.querySelector('.feature-text4').textContent = translations['feature_text4'];
    document.querySelector('.contact-heading').textContent = translations['contact_heading'];
    document.querySelector('.contact-text').textContent = translations['contact_text'];
    document.querySelector('.fullname').textContent = translations['fullname'];
    document.querySelector('.email').textContent = translations['email'];
    document.querySelector('.your-msg').textContent = translations['your_msg'];
    document.querySelector('.send').textContent = translations['send'];
    document.querySelector('.contact-us').textContent = translations['contact_us'];
    document.querySelector('.opening-hours').textContent = translations['opening_hours'];
    document.querySelector('.monday-to-friday').textContent = translations['monday_to_friday'];
    document.querySelector('.saturday').textContent = translations['saturday'];
    document.querySelector('.dont-miss-promotions').textContent = translations['dont_miss_promotions'];
    document.querySelector('.dont-miss-promotions2').textContent = translations['dont-miss-promotions2'];
}

// Gọi hàm tải dữ liệu dịch khi trang tải xong
document.addEventListener('DOMContentLoaded', function() {
    loadTranslations(currentLanguage);

    // Đổi ngôn ngữ khi người dùng chọn
    document.querySelector('#language-select').addEventListener('change', function(event) {
        currentLanguage = event.target.value;
        loadTranslations(currentLanguage);
    });
});

function selectLanguage(language){
  loadTranslations(language);
  const languagePopup = document.querySelector(".select-language-popup");
  if(languagePopup){
    languagePopup.style.display = "none";
  }
  document.querySelector('#language-select').value = language;
}
