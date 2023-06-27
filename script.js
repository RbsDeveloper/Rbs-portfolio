//Navigation functionality

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');


navToggle.addEventListener('click', () => {
const visibility = primaryNav.getAttribute("data-visible");
const expanded = primaryNav.getAttribute('aria-expanded');

if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
} else {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
}

});

function hover(img)
{
 img.src = "/images/orange.jpeg"
}

function hoverOut(img){
    img.src = "/images/Design fără titlu.png"
   }

//portfolio filter

const filterContainer = document.querySelector('.portfolio-filter'),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll('.project-card'),
    totalPortfolioItem = portfolioItems.length;

    for(let i=0; i<totalFilterBtn; i++) {
        filterBtns[i] .addEventListener('click', function()
        {
            filterContainer.querySelector('.active').classList.remove('active');
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            for(let k=0; k<totalPortfolioItem; k++)
            {
                if(filterValue === portfolioItems[k].getAttribute('data-category'))
                {
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add('show');
                }
                else{
                    portfolioItems[k].classList.add('hide')
                    portfolioItems[k].classList.remove('show');
                }
                if(filterValue === 'all')
                {
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add('show');
                }
            }
        })
    }


//google maps api

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat:44.6361, lng:22.6671 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();