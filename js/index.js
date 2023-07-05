// Declaration of variables
const body = document.querySelector('#body');
const hamburger = document.querySelector('.hamburger');
const hamburgerPopUpNav = document.querySelectorAll('.pop-up-ul-text');
const close = document.querySelector('.close');
// Footer of page
// Store Artist information in object

const featuredArtists = [
  {
    id: '1',
    artistImage: './resources/tanmay-bhat.jpg',
    artistName: 'Tanmay Bhat',
    imageAlt: 'Picture of Tanmay Bhat',
    artistLabel: 'Stand-up comedian and YouTuber.',
    latestRelease:
      'Tanmay Bhat just released a new comedy special titled "Laugh Riot".',
  },

  {
    id: '2',
    artistImage: './resources/zakir-khan.jpg',
    artistName: 'Zakir Khan',
    imageAlt: 'Picture of Zakir Khan',
    artistLabel: 'Stand-up comedian and writer.',
    latestRelease:
      'Zakir Khan\'s latest comedy show "Kaksha Gyarvi" is now streaming on Amazon Prime.',
  },

  {
    id: '3',
    artistImage: './resources/vir-das.jpg',
    artistName: 'Vir Das',
    imageAlt: 'Picture of Vir Das',
    artistLabel: 'Stand-up comedian, actor, and musician.',
    latestRelease:
      'Vir Das just released a new comedy special titled "Losing It" on Netflix.',
  },

  {
    id: '4',
    artistImage: './resources/anubhav-bassi.jpg',
    artistName: 'Anubhav Bassi',
    imageAlt: 'Picture of Anubhav Bassi',
    artistLabel: 'Stand-up comedian and content creator.',
    latestRelease:
      'Anubhav Bassi\'s latest comedy video "Rishte Wale" is now trending on YouTube.',
  },

  {
    id: '5',
    artistImage: './resources/rohan-joshi.jpg',
    artistName: 'Rohan Joshi',
    imageAlt: 'Picture of Rohan Joshi',
    artistLabel: 'Stand-up comedian and writer.',
    latestRelease:
      'Rohan Joshi\'s new stand-up special "Wake N Bake" is receiving rave reviews.',
  },
  {
    id: '6',
    artistImage: './resources/harsh-gujral.jpg',
    artistName: 'Harsh Gujral',
    imageAlt: 'Picture of Harsh Gujral',
    artistLabel: 'Stand-up comedian and entertainer.',
    latestRelease:
      'Harsh Gujral just released a hilarious new comedy video titled "Jokes Unlimited".',
  },
];

// Create the constant header of the page
const footer = document.createElement('footer');
footer.className = 'whole-footer-display';
footer.innerHTML = `
<section class='footer'>
  <h3 class="footer-head font">Featured Artists</h3>
  <div class="red-line-2 font">_______</div>
</section>`;
body.appendChild(footer);

// Create a function and create the element for mobile display
function showFeaturedArtistsMobile(info) {
  const shownArtistMobile = document.createElement('section');
  shownArtistMobile.className = 'featured-artists-container';
  shownArtistMobile.innerHTML = `<section class="featured-artists-container for-phone">
  <div class="featured-artists-item-div for-phone">
      <img class="background-top for-phone" src="resources/icons/Picture-top.png" alt="Picture background" role="presentation">
      <img class="featured-artists-image for-phone" src='${featuredArtists[info].artistImage}' alt="Picture of Haywaya">
      <div class="featured-artists-body-div for-phone">
          <h4 class="font for-phone">${featuredArtists[info].artistName}</h4>
          <h5 class="font for-phone"> <i>${featuredArtists[info].artistLabel}</i></h5>
          <div class=" for-phone">__</div>
          <h6 class="font for-phone">
              ${featuredArtists[info].latestRelease}
          </h6>
      </div>
  </div>
</section>`;
  footer.appendChild(shownArtistMobile);
}

const shownArtistDeskContainer = document.createElement('section');
shownArtistDeskContainer.className = 'desk-featured-artists-container for-desktop';
// shownArtistDeskContainer.innerHTML =
// `<div class="desk-featured-artists-item-div for-desktop">
// </div>`,
footer.appendChild(shownArtistDeskContainer);

// Create a function and create the element for desktop display
function showFeaturedArtistsDesk(info) {
  const shownArtistDesk = document.createElement('section');
  shownArtistDesk.className = 'desk-featured-artist-item-child for-desktop';
  shownArtistDesk.innerHTML = `
<img class="featured-artists-image-desk for-desktop" src='${featuredArtists[info].artistImage}' alt='${featuredArtists[info].imageAlt}'>
<div class="desk-featured-artists-body-div for-desktop">
  <h4 class=" for-desktop ar-n font">${featuredArtists[info].artistName}</h4>
  <h5 class="margin padding ar-l for-desktop font"> <i>${featuredArtists[info].artistLabel}</i></h5>
  <div class=" for-desktop">__</div>
  <h6 class=" for-desktop ar-d margin padding font">
    ${featuredArtists[info].latestRelease}
  </h6>
</div>`;
  shownArtistDeskContainer.appendChild(shownArtistDesk);
}

for (let i = 0; i < featuredArtists.length; i += 1) {
  if (window.innerWidth < 760) {
    featuredArtists.length = 2;
    showFeaturedArtistsMobile(i);
  } else {
    showFeaturedArtistsDesk(i);
  }
}

window.addEventListener('resize', () => {
  window.location.reload();
});

// Create and append footer end elements
const moreButton = document.createElement('div');
moreButton.innerHTML = '<button class="font end-more-button for-phone">MORE<span> v </span> </button>';
footer.appendChild(moreButton);

const desktopFooterEnd = document.createElement('section');
desktopFooterEnd.innerHTML = `
<section>
    <section class="partners padding-left-right">
        <h3 class="partner-head font">Partner</h3>
        <div class="partner-head-red-line font">________</div>
        <ul class="partners-logo-ul">
            <li>
                 <img class="partner-logo" src="resources/icons/bookmyshow.png" alt="bookmyshow Logo" role="presentation">
            </li>
            <li>
                <img class="partner-logo" src="resources/icons/swiggy.png" alt="Swiggy Logo" role="presentation">
            </li>
            <li>
                <img class="partner-logo" src="resources/icons/zomato.png" alt="zomato Loge" role="presentation">
            </li>
        </ul>
    </section>
    <div class="footer-end padding-left-right">
        <div class="footer-end-items">
            <h1 class="footer-end-items-logo font">©️ComicBurst!</h1>
        </div>
        <div class="footer-end-items">
            <h4 class="footer-end-items-rights font">2023 Rights Reserved</h4>
        </div>
    </div> 
</section>
`;
footer.appendChild(desktopFooterEnd);

hamburger.addEventListener('click', () => {
  document.getElementsByClassName('hamburger')[0].style.display = 'none';
  body.classList.add('overflow');
  document.getElementsByClassName('hamburger-pop-up')[0].style.display = 'block';
});

function closePopUp() {
  document.getElementsByClassName('hamburger')[0].style.display = 'block';
  body.classList.remove('overflow');
  document.getElementsByClassName('hamburger-pop-up')[0].style.display = 'none';
}

close.addEventListener('click', closePopUp);

hamburgerPopUpNav.forEach((link) => link.addEventListener('click', () => {
  document.getElementsByClassName('hamburger')[0].style.display = 'block';
  body.classList.remove('overflow');
  document.getElementsByClassName('hamburger-pop-up')[0].style.display = 'none';
}));
