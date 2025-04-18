// Array of technologies with logos and names
const SocialMedia = [
  { name: "LinkedIn", svg: "./assets/icons/reactjs.png" },
  { name: "Github", logo: "./assets/icons/typescript.png" },
  { name: "Whatsapp", logo: "./assets/icons/python.png" },
  { name: "X", logo: "./assets/icons/Django.png" },
];

// Array of technologies with logos and names
const technologies = [
  { name: "React", logo: "./assets/icons/reactjs.png" },
  { name: "Typescript", logo: "./assets/icons/typescript.png" },
  { name: "Python", logo: "./assets/icons/python.png" },
  { name: "Django", logo: "./assets/icons/Django.png" },

  { name: "Next", logo: "./assets/icons/nextjs.png" },
  { name: "Redux", logo: "./assets/icons/redux.png" },

  { name: "TailwindCSS", logo: "./assets/icons/tailwindcss.png" },
  { name: "Sass", logo: "./assets/icons/sass.png" },
  { name: "Figma", logo: "./assets/icons/figma.png" },
];

// Get the list element from the DOM
const technologiesList = document.getElementById("technologies-list");

// Loop through the technologies array and create list items
technologies.forEach((tech) => {
  const listItem = document.createElement("div");
  listItem.classList.add(
    "bg-white",
    "text-secondary",
    "w-[120px]",
    "h-[120px]",
    "rounded-md",
    "shadow-md",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "gap-3"
  );

  const logoImg = document.createElement("img");
  logoImg.src = tech.logo;
  logoImg.alt = `${tech.name} logo`;
  logoImg.classList.add("w-5", "h-5"); // Tailwind classes for logo

  const nameSpan = document.createElement("span");
  nameSpan.textContent = tech.name;
  nameSpan.classList.add("text-secondary", "font-medium"); // Tailwind classes for name

  listItem.appendChild(logoImg);
  listItem.appendChild(nameSpan);

  technologiesList.appendChild(listItem);
});

// Array of projects
const projects = [
  {
    title: "EasyCarnvan vehicle rentals platform",
    category: "BACKEND",
    description: "Back-End Development",
    image: "./assets/images/project-5.png",
    url: "https://carnvan-website-production.up.railway.app/",
  },
  {
    title: "Modulux 3D modeling platform",
    category: "all",
    description: "Full-Stack Development",
    image: "./assets/images/project-4.png",
  },
  {
    title: "Cars rental dashboard",
    category: "UI-UX",
    description: "Web Design",
    image: "./assets/images/project-2.png",
  },
  {
    title: "Win Solution DZ",
    category: "FRONTEND",
    description: "Front-End Development",
    image: "./assets/images/project-3.png",
  },
  {
    title: "WinSolutionDZ management Dash",
    category: "FRONTEND",
    description: "Front-End Development",
    image: "./assets/images/project-1.png",
  },
];

const projectsList = document.getElementById("projects-list");
const largeProjectsList = document.getElementById("large-projects-list");

// Function to display projects
function displayProjects(filter = "all") {
  // Clear the grid and carousel
  projectsList.innerHTML = "";
  largeProjectsList.innerHTML = "";

  // Filter projects based on the selected category
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Create project cards and append them to the grid and carousel
  filteredProjects.forEach((project) => {
    const projectCard = document.createElement("li");

    projectCard.innerHTML = `
      <div class="h-[500px] flex flex-col" style="gap:16px;">
        <div class="w-[335px] h-[365px] lg:w-[445px] lg:h-[489px]">
          <img
            src="${project.image}" alt="${project.title}"
            alt="services-design"
            alt=""
          />
        </div>
        <div class="flex flex-col" style="gap:10px;">
          <p class="text-sm text-primary">${project.description}</p>
          <p class="font-semibold text-lg text-secondary">${project.title}</p>
        </div>
      </div>
    `;

    // Append to grid (desktop)
    const gridItemLarge = projectCard.cloneNode(true);
    largeProjectsList.appendChild(gridItemLarge);

    // Append to grid (mobile)
    projectCard.classList.add("splide__slide");
    const gridItem = projectCard.cloneNode(true);
    projectsList.appendChild(gridItem);
  });

  new Splide(".splide", {
    autoWidth: true,
    perPage: 3,
    type: "loop",
    focus: "center",
    autoplay: true,
    interval: 8000,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    gap: "33px",
    throttle: 300,
  }).mount();
}

// Add event listeners to filter buttons
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) =>
        btn.classList.remove("bg-primary", "border", "text-white")
      );

    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("bg-light", "text-secondary"));
    // Add active class to the clicked button
    button.classList.add("bg-primary", "border", "text-white");
    // Display projects based on the selected filter
    displayProjects(button.dataset.filter);
  });
});

// Display all projects by default
displayProjects();

/*
 * Stacked Cards
 */

(function () {
  bind = function (fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  };

  this.stackedCards = (function () {
    stackedCards.prototype.defaults = {
      layout: "slide", // slide, fanOut
      onClick: undefined, // onclick event provided
      transformOrigin: "center", // css transformOrigin
    };

    function stackedCards(options) {
      if (options == null) {
        options = {};
      }

      this.draw = bind(this.draw, this);
      this.config = this.extend(options, this.defaults);
    }

    stackedCards.prototype.init = function () {
      this.element = window.document.documentElement;
      if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.draw();
      } else {
        document.addEventListener("DOMContentLoaded", this.draw);
      }
    };

    stackedCards.prototype.draw = function () {
      var me = this;

      var selector = this.config.selector;

      this.els = document.querySelectorAll(selector + " li");
      var els = this.els;

      this.parent = els[0].parentNode;

      var getItemHeight = els[0].getBoundingClientRect().height;

      /*var liWidth = 0;
          for(var q = 0;q<els.length; q++) {
              liWidth = liWidth + els[q].getBoundingClientRect().width;
          }*/

      els[0].parentNode.style.height = parseInt(getItemHeight) + "px";

      // to get the active element's position, we will have to know if elements are in even/odd count
      var lenAdjust = els.length % 2 == 0 ? -2 : -1;

      // oneHalf if the centerPoint - things go left and right from here
      // var oneHalf = (els.length + lenAdjust) / 2;

      var oneHalf = 0;

      var activeTransform = "translate(" + -50 + "%, 0%)  scale(1)";

      this.detectSwipe();

      Array.prototype.forEach.call(els, function (el) {
        el.style.transformOrigin = me.config.transformOrigin;

        el.addEventListener("click", function () {
          var clickedEl = el;
          var nextCnt = 0;
          var prevCnt = 0;

          do {
            // While there is a next sibling, loop
            var next = clickedEl.nextElementSibling;
            nextCnt = nextCnt + 1;
          } while ((clickedEl = clickedEl.nextElementSibling));

          // re-initialize the clickedEl to do the same for prev elements
          clickedEl = el;

          do {
            // While there is a prev sibling, loop
            var prev = clickedEl.previousElementSibling;
            prevCnt = prevCnt + 1;
          } while ((clickedEl = clickedEl.previousElementSibling));

          me.reCalculateTransformsOnClick(nextCnt - 1, prevCnt - 1);

          me.loopNodeList(els, function (el) {
            el.classList.remove("active");
          });

          el.classList.add("active");
          el.classList.add(me.config.layout);

          el.style.zIndex = els.length * 5;
          el.style.transform = activeTransform;

          if (me.config.onClick !== undefined) {
            me.config.onClick(el);
          }
        });
      });

      els[oneHalf].click();
    };

    stackedCards.prototype.reCalculateTransformsOnClick = function (
      nextCnt,
      prevCnt
    ) {
      var z = 10;

      var els = this.nodelistToArray(this.els);

      var scale = 1,
        translateX = 0,
        rotateVal = 0,
        rotate = "";
      var rotateNegStart = 0; // ((75 / els.length) * (oneHalf))*-1;

      var transformArr = [];
      var zIndexArr = [];
      var relArr = [];

      var layout = this.config.layout;

      var maxCntDivisor = Math.max(prevCnt, nextCnt);
      var prevDivisor = 100 / maxCntDivisor;
      var nextDivisor = 100 / maxCntDivisor;

      if (prevCnt > nextCnt) {
        scale = 0 + 100 / (prevCnt + 1) / 100;
      } else {
        scale = 1 - prevCnt * (1 / (nextCnt + 1));
      }

      var rotatePrevStart = ((prevCnt * 10) / prevCnt) * prevCnt * -1;
      var rotateNextStart = (nextCnt * 10) / nextCnt;

      for (var i = 0; i < prevCnt; i++) {
        switch (layout) {
          case "slide":
            if (i > 0) {
              scale = scale + 100 / (maxCntDivisor + 1) / 100;
            }

            translateX = -50 - prevDivisor * (prevCnt - i);

            rotate = "rotate(0deg)";
            break;
          case "fanOut":
            rotateVal = rotatePrevStart;

            if (i > 0) {
              scale = scale + 100 / (maxCntDivisor + 1) / 100;
            }
            translateX = -50 - prevDivisor * (prevCnt - i);
            rotate = "rotate(" + rotateVal + "deg)";

            rotatePrevStart = rotatePrevStart + (prevCnt * 10) / prevCnt;

            break;
          default:
            translateX = (150 - prevDivisor * 2 * i) * -1;
            rotate = "rotate(0deg)";
        }

        var styleStr =
          "translate(" + translateX + "%, 0%)  scale(" + scale + ") " + rotate;

        z = z + 1;

        els[i].style.transform = styleStr;
        els[i].style.zIndex = z;
      }

      // we are going for active element, so make it higher
      z = z - 1;

      var j = 0;

      rotateNegStart = 0;
      scale = 1;
      for (var i = prevCnt + 1; i < nextCnt + prevCnt + 1; i++) {
        j = j + 1;
        switch (layout) {
          case "slide":
            scale = scale - 100 / (maxCntDivisor + 1) / 100;
            translateX = (50 - nextDivisor * j) * -1;
            rotate = "rotate(0deg)";
            break;
          case "fanOut":
            rotateVal = rotateNextStart;

            scale = scale - 100 / (maxCntDivisor + 1) / 100;
            translateX = (50 - nextDivisor * j) * -1;
            rotate = "rotate(" + rotateVal + "deg)";

            rotateNextStart = rotateNextStart + (nextCnt * 10) / nextCnt;
            break;
          default:
            translateX = (100 - prevDivisor * 2 * i) * -1;
            rotate = "rotate(0deg)";
        }

        z = z - 1;

        var styleStr =
          "translate(" + translateX + "%, 0%)  scale(" + scale + ") " + rotate;

        els[i].style.transform = styleStr;
        els[i].style.zIndex = z;
      }
    };

    stackedCards.prototype.detectSwipe = function () {
      var me = this;
      var regionEl = document.querySelector(me.config.selector);

      me.detectSwipeDir(regionEl, function (swipedir) {
        var activeEl = document.querySelector(
          me.config.selector + " li.active"
        );
        if (swipedir == "left") {
          activeEl.nextElementSibling.click();
        } else if (swipedir == "right") {
          activeEl.previousElementSibling.click();
        }
      });
    };

    stackedCards.prototype.extend = function (custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    stackedCards.prototype.nodelistToArray = function (nodelist) {
      var results = [];
      var i, element;
      for (i = 0; i < nodelist.length; i++) {
        element = nodelist[i];
        results.push(element);
      }
      return results;
    };

    stackedCards.prototype.loopNodeList = function (els, callback, scope) {
      for (var i = 0; i < els.length; i++) {
        callback.call(scope, els[i]);
      }
    };

    stackedCards.prototype.scrolledIn = function (el, offset) {
      if (typeof el == "undefined") return;

      var elemTop = el.getBoundingClientRect().top;
      var elemBottom = el.getBoundingClientRect().bottom;

      var scrolledInEl = elemTop >= 0 && elemTop <= window.innerHeight;
      return scrolledInEl;
    };

    stackedCards.prototype.detectSwipeDir = function (el, callback) {
      //credits: http://www.javascriptkit.com/javatutors/touchevents2.shtml

      var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 75, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = callback || function (swipedir) {};

      touchsurface.addEventListener(
        "touchstart",
        function (e) {
          var touchobj = e.changedTouches[0];
          swipedir = "none";
          dist = 0;
          startX = touchobj.pageX;
          startY = touchobj.pageY;
          startTime = new Date().getTime(); // record time when finger first makes contact with surface
          e.preventDefault();
        },
        false
      );

      touchsurface.addEventListener(
        "touchmove",
        function (e) {
          // e.preventDefault() // prevent scrolling when inside DIV
        },
        false
      );

      touchsurface.addEventListener(
        "touchend",
        function (e) {
          var touchobj = e.changedTouches[0];
          distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
          distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
          elapsedTime = new Date().getTime() - startTime; // get time elapsed
          if (elapsedTime <= allowedTime) {
            // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
              // 2nd condition for horizontal swipe met
              swipedir = distX < 0 ? "left" : "right"; // if dist traveled is negative, it indicates left swipe
            } else if (
              Math.abs(distY) >= threshold &&
              Math.abs(distX) <= restraint
            ) {
              // 2nd condition for vertical swipe met
              swipedir = distY < 0 ? "up" : "down"; // if dist traveled is negative, it indicates up swipe
            }
          }
          handleswipe(swipedir);
          e.preventDefault();
        },
        false
      );
    };

    return stackedCards;
  })();
}).call(this);
var stackedCard = new stackedCards({
  selector: ".featured",
  layout: "slide",
  transformOrigin: "center",
});
stackedCard.init();
