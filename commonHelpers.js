import{S as d,i as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function p(){const o={method:"GET"},l=`https://pixabay.com/api/?${new URLSearchParams({key:"42957626-41f27679caf00334274850a6e",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return h(),fetch(l,o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(o){if(o.hits.length===0)c("Sorry, there are no images matching your search query. Please try again!");else{n.gallery.innerHTML="";const l=o.hits.map(t=>`<li class="gallery-item">
                <a class="gallery-link" href="${t.largeImageURL}">
                  <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
                </a>
                <div class="stats">
                  <p class="text">Likes<br/>${t.likes}</p>
                  <p class="text">Views<br/>${t.views}</p>
                  <p class="text">Comments<br/>${t.comments}</p>
                  <p class="text">Downloads<br/>${t.downloads}</p>
                </div>
              </li>`).join("");n.gallery.insertAdjacentHTML("beforeend",l),y.refresh()}}const n={gallery:document.querySelector(".gallery"),form:document.querySelector(".form"),wordInput:document.querySelector(".input"),loader:document.querySelector(".loader")},y=new d(".gallery-link",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.7});let a="";u();n.form.addEventListener("submit",o=>{o.preventDefault(),n.gallery.innerHTML="",a=n.wordInput.value.trim(),a!==""?p().then(s=>{m(s),u()}).catch(s=>console.log(s)):c("Please complete the field!"),n.form.reset()});function c(o){f.error({title:"Error",message:o,position:"topRight"})}function h(){n.loader.style.display="block"}function u(){n.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
