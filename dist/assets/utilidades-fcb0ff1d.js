(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l=[{id:"1",nome:"Air Jordan 1 Mid",marca:"Nike",preco:1100,imagem:"product-1.jpg",feminino:!1},{id:"2",nome:"Air Jordan 1 Low SE Craft ",marca:"Nike",preco:1199,imagem:"product-4.jpg",feminino:!0},{id:"3",nome:"Air Jordan 1 Low Black Element ",marca:"Nike",preco:1299,imagem:"product-8.jpg",feminino:!1},{id:"4",nome:"Air Jordan Legacy 312 Low",marca:"Nike",preco:1399,imagem:"product-7.jpg",feminino:!1},{id:"5",nome:"Air Jordan 1 Low Purple",marca:"Nike",preco:1099,imagem:"product-6.jpg",feminino:!0},{id:"6",nome:"Air Jordan Retro Low",marca:"Nike",preco:1199,imagem:"product-5.jpg",feminino:!1},{id:"7",nome:"Air Jordan Low SE",marca:"Nike",preco:1199,imagem:"product-3.jpg",feminino:!0},{id:"8",nome:"Air Jordan 4 Thunder",marca:"Nike",preco:1699,imagem:"product-2.jpg",feminino:!1}];function d(r,i){localStorage.setItem(r,JSON.stringify(i))}function m(r){return JSON.parse(localStorage.getItem(r))}function p(r){localStorage.removeItem(r)}function u(r,i,n){const t=l.find(c=>c.id===r),e=document.getElementById(i),o=document.createElement("article"),a=["flex","bg-stone-200","rounded-lg","p-1","relative","mb-2","w-96"];for(const c of a)o.classList.add(c);const s=`
  <img
    src="./assets/img/${t.imagem}"
    alt="Carrinho: ${t.nome}"
    class="h-24 rounded-lg"
  />
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-sm">
      ${t.nome}
    </p>
    <p class="text-green-700 text-lg">$${t.preco}</p>
  </div>
  <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
      <p id='quantidade-${t.id}' class='ml-2'>${n}</p>
  </div>`;o.innerHTML=s,e.appendChild(o)}export{p as a,l as c,u as d,m as l,d as s};
