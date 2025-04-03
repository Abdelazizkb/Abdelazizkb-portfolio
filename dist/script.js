var SocialMedia=[{name:"LinkedIn",svg:"./assets/icons/reactjs.png"},{name:"Github",logo:"./assets/icons/typescript.png"},{name:"Whatsapp",logo:"./assets/icons/python.png"},{name:"X",logo:"./assets/icons/Django.png"}],technologies=[{name:"React",logo:"./assets/icons/reactjs.png"},{name:"Typescript",logo:"./assets/icons/typescript.png"},{name:"Python",logo:"./assets/icons/python.png"},{name:"Django",logo:"./assets/icons/Django.png"},{name:"Next",logo:"./assets/icons/nextjs.png"},{name:"Redux",logo:"./assets/icons/redux.png"},{name:"TailwindCSS",logo:"./assets/icons/tailwindcss.png"},{name:"Sass",logo:"./assets/icons/sass.png"},{name:"Figma",logo:"./assets/icons/figma.png"}],technologiesList=document.getElementById("technologies-list"),projects=(technologies.forEach(function(tech){var listItem=document.createElement("div"),logoImg=(listItem.classList.add("bg-white","text-secondary","w-[120px]","h-[120px]","rounded-md","shadow-md","flex","flex-col","items-center","justify-center","gap-3"),document.createElement("img")),nameSpan=(logoImg.src=tech.logo,logoImg.alt="".concat(tech.name," logo"),logoImg.classList.add("w-5","h-5"),document.createElement("span"));nameSpan.textContent=tech.name,nameSpan.classList.add("text-secondary","font-medium"),listItem.appendChild(logoImg),listItem.appendChild(nameSpan),technologiesList.appendChild(listItem)}),[{title:"Business Landing Page Design",category:"BACKEND",description:"Back-End Development",image:"./assets/images/project-5.png"},{title:"Mobile App UI",category:"FRONTEND",description:"Front-End Development",image:"./assets/images/project-4.png"},{title:"E-commerce Website",category:"BACKEND",description:"Back-End Development",image:"./assets/images/project-2.png"},{title:"Branding and Logo Design",category:"UI-UX",description:"Web design",image:"./assets/images/project-3.png"},{title:"Dashboard UI",category:"UI-UX",description:"Web design",image:"./assets/images/project-1.png"},{title:"Social Media Graphics",category:"FRONTEND",description:"Front-End Development",image:"./assets/images/project-5.png"}]),projectsList=document.getElementById("projects-list"),largeProjectsList=document.getElementById("large-projects-list");function displayProjects(){var filter=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"all";projectsList.innerHTML="",largeProjectsList.innerHTML="",("all"===filter?projects:projects.filter(function(project){return project.category===filter})).forEach(function(project){var projectCard=document.createElement("li"),project=(projectCard.innerHTML='\n      <div class="h-[500px] flex flex-col" style="gap:16px;">\n        <div class="w-[335px] h-[365px] lg:w-[445px] lg:h-[489px]">\n          <img\n            src="'.concat(project.image,'" alt="').concat(project.title,'"\n            alt="services-design"\n            alt=""\n          />\n        </div>\n        <div class="flex flex-col" style="gap:10px;">\n          <p class="text-sm text-primary">').concat(project.description,'</p>\n          <p class="font-semibold text-lg text-secondary">').concat(project.title,"</p>\n        </div>\n      </div>\n    "),projectCard.cloneNode(!0)),project=(largeProjectsList.appendChild(project),projectCard.classList.add("splide__slide"),projectCard.cloneNode(!0));projectsList.appendChild(project)}),new Splide(".splide",{autoWidth:!0,perPage:3,focus:"center",autoplay:!0,interval:8e3,flickMaxPages:3,updateOnMove:!0,pagination:!1,gap:"33px",throttle:300}).mount()}document.querySelectorAll(".filter-btn").forEach(function(button){button.addEventListener("click",function(){document.querySelectorAll(".filter-btn").forEach(function(btn){return btn.classList.remove("bg-primary","border","text-white")}),document.querySelectorAll(".filter-btn").forEach(function(btn){return btn.classList.remove("bg-light","text-secondary")}),button.classList.add("bg-primary","border","text-white"),displayProjects(button.dataset.filter)})}),displayProjects(),function(){function stackedCards(options){null==options&&(options={}),this.draw=bind(this.draw,this),this.config=this.extend(options,this.defaults)}bind=function(fn,me){return function(){return fn.apply(me,arguments)}},this.stackedCards=(stackedCards.prototype.defaults={layout:"slide",onClick:void 0,transformOrigin:"center"},stackedCards.prototype.init=function(){this.element=window.document.documentElement,"interactive"===(ref=document.readyState)||"complete"===ref?this.draw():document.addEventListener("DOMContentLoaded",this.draw)},stackedCards.prototype.draw=function(){var me=this,selector=this.config.selector,els=(this.els=document.querySelectorAll(selector+" li"),this.els),selector=(this.parent=els[0].parentNode,els[0].getBoundingClientRect().height);els[0].parentNode.style.height=parseInt(selector)+"px",els.length;this.detectSwipe(),Array.prototype.forEach.call(els,function(el){el.style.transformOrigin=me.config.transformOrigin,el.addEventListener("click",function(){var clickedEl=el,nextCnt=0,prevCnt=0;do{clickedEl.nextElementSibling}while(nextCnt+=1,clickedEl=clickedEl.nextElementSibling);clickedEl=el;do{clickedEl.previousElementSibling}while(prevCnt+=1,clickedEl=clickedEl.previousElementSibling);me.reCalculateTransformsOnClick(nextCnt-1,prevCnt-1),me.loopNodeList(els,function(el){el.classList.remove("active")}),el.classList.add("active"),el.classList.add(me.config.layout),el.style.zIndex=5*els.length,el.style.transform="translate(-50%, 0%)  scale(1)",void 0!==me.config.onClick&&me.config.onClick(el)})}),els[0].click()},stackedCards.prototype.reCalculateTransformsOnClick=function(nextCnt,prevCnt){for(var z=10,els=this.nodelistToArray(this.els),scale=1,translateX=0,rotate="",layout=this.config.layout,maxCntDivisor=Math.max(prevCnt,nextCnt),prevDivisor=100/maxCntDivisor,nextDivisor=100/maxCntDivisor,scale=nextCnt<prevCnt?0+100/(prevCnt+1)/100:1-prevCnt*(1/(nextCnt+1)),rotatePrevStart=10*prevCnt/prevCnt*prevCnt*-1,rotateNextStart=10*nextCnt/nextCnt,i=0;i<prevCnt;i++){switch(layout){case"slide":0<i&&(scale+=100/(maxCntDivisor+1)/100),translateX=-50-prevDivisor*(prevCnt-i),rotate="rotate(0deg)";break;case"fanOut":0<i&&(scale+=100/(maxCntDivisor+1)/100),translateX=-50-prevDivisor*(prevCnt-i),rotate="rotate("+rotatePrevStart+"deg)",rotatePrevStart+=10*prevCnt/prevCnt;break;default:translateX=-1*(150-2*prevDivisor*i),rotate="rotate(0deg)"}var styleStr="translate("+translateX+"%, 0%)  scale("+scale+") "+rotate;z+=1,els[i].style.transform=styleStr,els[i].style.zIndex=z}z-=1;for(var j=0,i=prevCnt+(scale=1);i<nextCnt+prevCnt+1;i++){switch(j+=1,layout){case"slide":scale-=100/(maxCntDivisor+1)/100,translateX=-1*(50-nextDivisor*j),rotate="rotate(0deg)";break;case"fanOut":scale-=100/(maxCntDivisor+1)/100,translateX=-1*(50-nextDivisor*j),rotate="rotate("+rotateNextStart+"deg)",rotateNextStart+=10*nextCnt/nextCnt;break;default:translateX=-1*(100-2*prevDivisor*i),rotate="rotate(0deg)"}z-=1;styleStr="translate("+translateX+"%, 0%)  scale("+scale+") "+rotate;els[i].style.transform=styleStr,els[i].style.zIndex=z}},stackedCards.prototype.detectSwipe=function(){var me=this,regionEl=document.querySelector(me.config.selector);me.detectSwipeDir(regionEl,function(swipedir){var activeEl=document.querySelector(me.config.selector+" li.active");"left"==swipedir?activeEl.nextElementSibling.click():"right"==swipedir&&activeEl.previousElementSibling.click()})},stackedCards.prototype.extend=function(custom,defaults){var key,value;for(key in defaults)value=defaults[key],null==custom[key]&&(custom[key]=value);return custom},stackedCards.prototype.nodelistToArray=function(nodelist){for(var results=[],i=0;i<nodelist.length;i++)results.push(nodelist[i]);return results},stackedCards.prototype.loopNodeList=function(els,callback,scope){for(var i=0;i<els.length;i++)callback.call(scope,els[i])},stackedCards.prototype.scrolledIn=function(el,offset){var elemTop;if(void 0!==el)return elemTop=el.getBoundingClientRect().top,el.getBoundingClientRect().bottom,0<=elemTop&&elemTop<=window.innerHeight},stackedCards.prototype.detectSwipeDir=function(el,callback){var swipedir,startX,startY,distX,distY,startTime,handleswipe=callback||function(swipedir){};el.addEventListener("touchstart",function(e){var touchobj=e.changedTouches[0];swipedir="none",dist=0,startX=touchobj.pageX,startY=touchobj.pageY,startTime=(new Date).getTime(),e.preventDefault()},!1),el.addEventListener("touchmove",function(e){},!1),el.addEventListener("touchend",function(e){var touchobj=e.changedTouches[0];distX=touchobj.pageX-startX,distY=touchobj.pageY-startY,(new Date).getTime()-startTime<=300&&(75<=Math.abs(distX)&&Math.abs(distY)<=100?swipedir=distX<0?"left":"right":75<=Math.abs(distY)&&Math.abs(distX)<=100&&(swipedir=distY<0?"up":"down")),handleswipe(swipedir),e.preventDefault()},!1)},stackedCards)}.call(void 0);var stackedCard=new stackedCards({selector:".featured",layout:"slide",transformOrigin:"center"});stackedCard.init();