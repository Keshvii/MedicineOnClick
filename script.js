/* Shared sample catalogue. All pricing, inventory and mappings are illustrative. */
'use strict';
const PRODUCTS = [
 {id:1,name:'Dolo 650 Tablet',brand:'Micro Labs',pack:'15 tablets',price:29,mrp:34,category:'Medicines',ingredient:'Paracetamol 650 mg',stock:true,rx:true,color:'#236aaf',label:'Dolo 650',type:'box'},
 {id:2,name:'Crocin 650 Advance',brand:'Haleon',pack:'15 tablets',price:30,mrp:35,category:'Medicines',ingredient:'Paracetamol 650 mg',stock:false,rx:true,color:'#c63e47',label:'Crocin 650',type:'box'},
 {id:3,name:'Digene Mint Tablets',brand:'Abbott',pack:'15 tablets',price:24,mrp:30,category:'Medicines',ingredient:'Antacid',stock:true,rx:false,color:'#e46b8a',label:'Digene',type:'box'},
 {id:4,name:'Cetzine 10 mg Tablet',brand:'Dr. Reddy’s',pack:'10 tablets',price:19,mrp:23,category:'Medicines',ingredient:'Cetirizine 10 mg',stock:true,rx:true,color:'#367f83',label:'Cetzine',type:'box'},
 {id:5,name:'Cetcip 10 mg Tablet',brand:'Cipla',pack:'10 tablets',price:17,mrp:21,category:'Medicines',ingredient:'Cetirizine 10 mg',stock:false,rx:true,color:'#4e83bd',label:'Cetcip',type:'box'},
 {id:6,name:'Electral ORS Powder',brand:'FDC',pack:'21.8 g sachet',price:19,mrp:23,category:'Medicines',ingredient:'Oral rehydration salts',stock:true,rx:false,color:'#e77927',label:'Electral',type:'sachet'},
 {id:7,name:'Becosules Capsules',brand:'Pfizer',pack:'20 capsules',price:48,mrp:57,category:'Wellness',ingredient:'B-complex with vitamin C',stock:true,rx:false,color:'#b83043',label:'Becosules',type:'box'},
 {id:8,name:'Himalaya Ashvagandha',brand:'Himalaya',pack:'60 tablets',price:180,mrp:225,category:'Wellness',ingredient:'Ashvagandha supplement',stock:true,rx:false,color:'#277968',label:'Ashvagandha',type:'bottle'},
 {id:9,name:'Limcee Vitamin C 500 mg',brand:'Abbott',pack:'15 chewable tablets',price:22,mrp:27,category:'Wellness',ingredient:'Vitamin C',stock:true,rx:false,color:'#f29527',label:'Limcee',type:'box'},
 {id:10,name:'Shelcal 500 Tablets',brand:'Torrent',pack:'15 tablets',price:124,mrp:155,category:'Wellness',ingredient:'Calcium and vitamin D3',stock:true,rx:false,color:'#cb6b3a',label:'Shelcal 500',type:'box'},
 {id:11,name:'Zincovit Tablets',brand:'Apex',pack:'15 tablets',price:88,mrp:110,category:'Wellness',ingredient:'Multivitamin and multimineral',stock:true,rx:false,color:'#5a963e',label:'Zincovit',type:'box'},
 {id:12,name:'Revital H Capsules',brand:'Sun Pharma',pack:'30 capsules',price:248,mrp:310,category:'Wellness',ingredient:'Multivitamin supplement',stock:true,rx:false,color:'#b93938',label:'Revital H',type:'bottle'},
 {id:13,name:'Cetaphil Gentle Skin Cleanser',brand:'Galderma',pack:'125 ml bottle',price:305,mrp:399,category:'Personal care',ingredient:'Gentle skin cleanser',stock:true,rx:false,color:'#3679aa',label:'Cetaphil',type:'bottle'},
 {id:14,name:'Sebamed Clear Face Care Gel',brand:'Sebamed',pack:'50 ml tube',price:392,mrp:490,category:'Personal care',ingredient:'Skin care gel',stock:true,rx:false,color:'#2790ab',label:'sebamed',type:'box'},
 {id:15,name:'Himalaya Purifying Neem Face Wash',brand:'Himalaya',pack:'150 ml tube',price:159,mrp:199,category:'Personal care',ingredient:'Neem face wash',stock:true,rx:false,color:'#2e8955',label:'Neem Face Wash',type:'bottle'},
 {id:16,name:'Sebamed Lip Defense SPF 30',brand:'Sebamed',pack:'4.8 g stick',price:335,mrp:418,category:'Personal care',ingredient:'Lip care',stock:true,rx:false,color:'#2f9cb0',label:'Lip Defense',type:'box'},
 {id:17,name:'Omron HEM-7120 BP Monitor',brand:'Omron',pack:'1 digital monitor',price:1899,mrp:2499,category:'Devices',ingredient:'Blood pressure monitor',stock:true,rx:false,color:'#2c5eab',label:'OMRON',type:'device'},
 {id:18,name:'Accu-Chek Active Test Strips',brand:'Roche',pack:'50 test strips',price:829,mrp:1049,category:'Devices',ingredient:'Blood glucose test strips',stock:true,rx:false,color:'#218789',label:'Accu-Chek',type:'box'},
 {id:19,name:'Omron Digital Thermometer',brand:'Omron',pack:'1 thermometer',price:239,mrp:299,category:'Devices',ingredient:'Digital thermometer',stock:true,rx:false,color:'#3279b4',label:'OMRON',type:'device'},
 {id:20,name:'Dr. Morepen Pulse Oximeter',brand:'Dr. Morepen',pack:'1 fingertip oximeter',price:749,mrp:999,category:'Devices',ingredient:'Pulse oximeter',stock:true,rx:false,color:'#4b6cac',label:'Dr. Morepen',type:'device'},
 {id:21,name:'Dettol Antiseptic Liquid',brand:'Reckitt',pack:'250 ml bottle',price:112,mrp:140,category:'First aid',ingredient:'Antiseptic liquid',stock:true,rx:false,color:'#237c48',label:'Dettol',type:'bottle'},
 {id:22,name:'Savlon Antiseptic Liquid',brand:'ITC',pack:'100 ml bottle',price:44,mrp:55,category:'First aid',ingredient:'Antiseptic liquid',stock:true,rx:false,color:'#e87933',label:'Savlon',type:'bottle'},
 {id:23,name:'Hansaplast Regular Bandages',brand:'Beiersdorf',pack:'40 strips',price:88,mrp:110,category:'First aid',ingredient:'Adhesive bandages',stock:true,rx:false,color:'#b53d3c',label:'Hansaplast',type:'box'},
 {id:24,name:'Volini Pain Relief Gel',brand:'Sun Pharma',pack:'30 g tube',price:104,mrp:130,category:'First aid',ingredient:'Topical pain relief gel',stock:true,rx:false,color:'#5c3c8b',label:'Volini',type:'box'}
];
// Mock verified mappings for presentation only; not clinical verification.
const MOCK_ALTERNATIVES = {2:[1],5:[4]};
const $ = (s,root=document) => root.querySelector(s);
const $$ = (s,root=document) => [...root.querySelectorAll(s)];
const money = n => new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:2}).format(n);
const icons = () => window.lucide?.createIcons();
const escapeHTML = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const image = p => `assets/product-${p.id}.svg`;
const discount = p => Math.round((1-p.price/p.mrp)*100);
let cart = {};
try {
 const saved=JSON.parse(localStorage.getItem('moc-cart-v1')||'{}');
 if(saved && typeof saved==='object' && !Array.isArray(saved)) for(const [id,qty] of Object.entries(saved)) {
  if(PRODUCTS.some(p=>p.id===Number(id)&&p.stock)&&Number.isInteger(qty)&&qty>0) cart[id]=Math.min(qty,99);
 }
} catch { /* Storage may be disabled when opening a local file. Keep an in-memory cart. */ }
function saveCart(){try{localStorage.setItem('moc-cart-v1',JSON.stringify(cart));}catch{} updateCartCount();}
function updateCartCount(){const count=Object.values(cart).reduce((a,b)=>a+b,0);$$('.cart-count').forEach(e=>e.textContent=count);$('.cart-trigger')?.setAttribute('aria-label',`Open shopping cart, ${count} items`);}
let toastTimeout;
function toast(text){const el=$('.toast');el.textContent=text;el.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('show'),3000);}
function productCard(p){return `<article class="product-card"><div class="product-image"><span class="discount-badge">${discount(p)}% OFF</span>${p.rx?'<span class="rx-badge">Rx required</span>':''}<img src="${image(p)}" alt="Illustrated ${p.name} packaging" loading="lazy" width="280" height="200"></div><div class="product-details"><div class="product-brand">${p.brand}</div><h3>${p.name}</h3><p class="pack-size">${p.pack}</p><span class="availability ${p.stock?'':'out'}">${p.stock?'In stock':'Currently unavailable'}</span><div class="product-bottom"><div><div class="price">${money(p.price)} <del>${money(p.mrp)}</del></div><small class="tax-note">Inclusive of all taxes</small></div><button class="add-button" data-add="${p.id}" ${p.stock?'':'disabled'} aria-label="${p.stock?'Add '+p.name+' to cart':p.name+' is out of stock'}">${p.stock?'Add <i data-lucide="plus"></i>':'Sold out'}</button></div>${MOCK_ALTERNATIVES[p.id]?`<button class="alternative-button" data-alternative="${p.id}">Explore possible alternatives →</button>`:''}</div></article>`;}
function renderCart(){
 const items=Object.entries(cart).map(([id,qty])=>({p:PRODUCTS.find(p=>p.id===Number(id)),qty}));
 $('#cart-items').innerHTML=items.length?items.map(({p,qty})=>`<div class="cart-item"><img src="${image(p)}" alt="${p.name}"><div class="cart-item-copy"><h4>${p.name}</h4><small>${p.pack}${p.rx?' · Prescription required':''}</small><div class="price">${money(p.price*qty)}</div><div class="quantity-control"><button data-quantity="${p.id}" data-change="-1" aria-label="Decrease ${p.name} quantity">−</button><span aria-label="Quantity">${qty}</span><button data-quantity="${p.id}" data-change="1" aria-label="Increase ${p.name} quantity" ${qty>=99?'disabled':''}>+</button></div></div><button class="icon-btn" data-remove="${p.id}" aria-label="Remove ${p.name}"><i data-lucide="trash-2"></i></button></div>`).join(''):'<div class="cart-empty"><i data-lucide="shopping-bag"></i><h3>A little care belongs here.</h3><p>Explore our collection and find your everyday essentials.</p><a href="medicines.html" class="button">Explore medicines</a></div>';
 $('#cart-summary').innerHTML=items.length?`<div class="cart-total"><span>Subtotal</span><span>${money(items.reduce((sum,{p,qty})=>sum+p.price*qty,0))}</span></div><p class="cart-footnote">You save ${money(items.reduce((sum,{p,qty})=>sum+(p.mrp-p.price)*qty,0))} against sample MRP.</p><div class="info-highlight"><p>This is a presentation cart. Checkout and order placement are not enabled. Prescription items require a valid prescription and pharmacist review.</p></div>`:'';
 icons();
}
function showInfo(title,body){$('#info-content').innerHTML=`<span class="eyebrow">MEDICINE ON CLICK</span><h2 id="info-title">${title}</h2>${body}`;$('#info-dialog').setAttribute('aria-labelledby','info-title');$('#info-dialog').showModal();icons();}
const INFO={
 delivery:['A little care, delivered.','Delivery options, estimated arrival dates and serviceable PIN codes will be shown in the live platform. This prototype does not dispatch products.'],
 returns:['Thoughtful support.','The live service would show item-specific return eligibility, damaged-product support and refund timelines before purchase. This demo does not process returns or refunds.'],
 prescription:['The right care matters.','Products marked “Rx required” need a valid prescription and pharmacist review before supply. No prescription is collected in this prototype. Never change a prescribed medicine based on the sample alternatives shown here.'],
 contact:['Here for your health.','This is a client presentation prototype. Live customer support and contact details will be added before launch. For medicine questions, consult a qualified pharmacist or your healthcare professional.'],
 privacy:['Your privacy matters.','This prototype stores only your demo cart in browser localStorage. Business form details and selected documents are not transmitted or saved. Use sample details for presentations. Production privacy and service terms will be provided before launch.']
};
document.addEventListener('click',event=>{
 const add=event.target.closest('[data-add]');
 if(add){const p=PRODUCTS.find(p=>p.id===Number(add.dataset.add));if(!p?.stock)return;if((cart[p.id]||0)>=99){toast('Maximum quantity is 99 packs per product.');return;}cart[p.id]=(cart[p.id]||0)+1;saveCart();toast(`${p.name} added to your cart`);return;}
 const qty=event.target.closest('[data-quantity]');
 if(qty){const id=qty.dataset.quantity;cart[id]=Math.min(99,(cart[id]||0)+Number(qty.dataset.change));if(cart[id]<=0)delete cart[id];saveCart();renderCart();return;}
 const remove=event.target.closest('[data-remove]');if(remove){delete cart[remove.dataset.remove];saveCart();renderCart();return;}
 if(event.target.closest('.cart-trigger')){renderCart();$('#cart-dialog').showModal();return;}
 const close=event.target.closest('.close-dialog');if(close){close.closest('dialog').close();return;}
 const info=event.target.closest('[data-info]');if(info){const [title,body]=INFO[info.dataset.info];showInfo(title,`<p>${body}</p>`);return;}
 const alt=event.target.closest('[data-alternative]');if(alt){const p=PRODUCTS.find(p=>p.id===Number(alt.dataset.alternative));const candidates=MOCK_ALTERNATIVES[p.id].map(id=>PRODUCTS.find(p=>p.id===id));showInfo('A possible alternative',`<p>For <strong>${p.name}</strong></p><div class="info-highlight"><span class="eyebrow">MOCK VERIFIED MAPPING · DEMO ONLY</span>${candidates.map(a=>`<h3>${a.name}</h3><p>${a.ingredient} · ${a.pack} · ${money(a.price)}</p>`).join('')}</div><p><strong>Pharmacist verification is required before any substitution.</strong> This mapping is illustrative and has not been clinically verified. Your pharmacist must confirm suitability, strength, formulation and prescription requirements.</p><a class="button purple-button" href="medicines.html?q=${encodeURIComponent(candidates[0].name)}">View product <i data-lucide="arrow-right"></i></a>`);return;}
 if(event.target.closest('.login-trigger')){showInfo('Welcome to a little more care.',`<p>Sign in or create an account on the live platform. Preview the experience below.</p><form class="login-form"><label for="login-email">Email address</label><input type="email" id="login-email" placeholder="you@example.com" required><button class="button" type="submit">Continue in demo <i data-lucide="arrow-right"></i></button><p>No account is created and no email is sent.</p></form>`);$('.login-form').addEventListener('submit',e=>{e.preventDefault();$('#info-dialog').close();toast('Demo complete. Sign-in will be available on the live platform.');});}
});
$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
$('.menu-toggle').addEventListener('click',()=>{const open=$('.nav-wrap').classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',String(open));});
$$('.main-nav a').forEach(a=>{if(a.dataset.page===document.body.dataset.page){a.classList.add('active');a.setAttribute('aria-current','page');}});
if($('#featured-products'))$('#featured-products').innerHTML=[1,3,6,9].map(id=>productCard(PRODUCTS.find(p=>p.id===id))).join('');
if($('#healthcare-products'))$('#healthcare-products').innerHTML=[13,17,21,24].map(id=>productCard(PRODUCTS.find(p=>p.id===id))).join('');
/* Catalogue: category and brand selections use OR internally, AND across groups. */
if($('#catalogue-products')){
 const params=new URLSearchParams(location.search);const state={q:params.get('q')||'',categories:new Set(),brands:new Set(),max:3000,stock:false,sort:'recommended'};
 if(PRODUCTS.some(p=>p.category===params.get('category')))state.categories.add(params.get('category'));
 $('#product-query').value=state.q;$('.header-search input').value=state.q;
 const categories=[...new Set(PRODUCTS.map(p=>p.category))];const brands=[...new Set(PRODUCTS.map(p=>p.brand))].sort();
 for(const [kind,values] of [['category',categories],['brand',brands]]) $(`#${kind}-filters`).innerHTML=values.map(v=>`<label class="check-row"><input type="checkbox" data-filter="${kind}" value="${v}" ${state.categories.has(v)?'checked':''}>${v}<span class="count">${PRODUCTS.filter(p=>p[kind]===v).length}</span></label>`).join('');
 function syncURL(){const next=new URLSearchParams();if(state.q)next.set('q',state.q);if(state.categories.size===1)next.set('category',[...state.categories][0]);try{history.replaceState(null,'',location.pathname+(next.size?'?'+next:''));}catch{}}
 function render(){
  let results=PRODUCTS.filter(p=>(!state.q||`${p.name} ${p.brand} ${p.ingredient}`.toLowerCase().includes(state.q.toLowerCase().trim()))&&(!state.categories.size||state.categories.has(p.category))&&(!state.brands.size||state.brands.has(p.brand))&&p.price<=state.max&&(!state.stock||p.stock));
  if(state.sort==='price-low')results.sort((a,b)=>a.price-b.price);if(state.sort==='price-high')results.sort((a,b)=>b.price-a.price);if(state.sort==='name')results.sort((a,b)=>a.name.localeCompare(b.name));
  $('#catalogue-products').innerHTML=results.length?results.map(productCard).join(''):'<div class="empty-state"><h3>No matches, just yet.</h3><p>Try another search or give your filters a little more room.</p><button class="button" id="empty-reset">Clear search & filters</button></div>';
  $('#results-count').textContent=`Showing ${results.length} of ${PRODUCTS.length} products${state.q?' for “'+state.q+'”':''}`;
  $('#active-filters').innerHTML=[...state.categories].map(v=>`<button data-clear-category="${v}" aria-label="Remove ${v} filter">${v} ×</button>`).join('')+[...state.brands].map(v=>`<button data-clear-brand="${v}" aria-label="Remove ${v} filter">${v} ×</button>`).join('');
  icons();syncURL();
 }
 function reset(){state.q='';state.categories.clear();state.brands.clear();state.max=3000;state.stock=false;state.sort='recommended';$('#product-query').value='';$('.header-search input').value='';$('#price-range').value=3000;$('#price-label').textContent=money(3000);$('#in-stock').checked=false;$('#sort').value='recommended';$$('[data-filter]').forEach(c=>c.checked=false);render();}
 $('#product-query').addEventListener('input',e=>{state.q=e.target.value;render();});$('#catalogue-search').addEventListener('submit',e=>e.preventDefault());
 $('.header-search').addEventListener('submit',e=>{e.preventDefault();state.q=$('.header-search input').value;$('#product-query').value=state.q;render();$('.catalogue-layout').scrollIntoView({behavior:'smooth'});});
 $$('[data-filter]').forEach(input=>input.addEventListener('change',()=>{const set=input.dataset.filter==='category'?state.categories:state.brands;input.checked?set.add(input.value):set.delete(input.value);render();}));
 $('#price-range').addEventListener('input',e=>{state.max=Number(e.target.value);$('#price-label').textContent=money(state.max);render();});
 $('#in-stock').addEventListener('change',e=>{state.stock=e.target.checked;render();});$('#sort').addEventListener('change',e=>{state.sort=e.target.value;render();});$('#reset-filters').addEventListener('click',reset);
 $('#filter-toggle').setAttribute('aria-expanded','false');$('#filter-toggle').setAttribute('aria-controls','filter-panel');$('#filter-toggle').addEventListener('click',()=>{const open=$('#filter-panel').classList.toggle('show');$('#filter-toggle').setAttribute('aria-expanded',String(open));if(open)$('#filter-panel').scrollIntoView({behavior:'smooth',block:'start'});});
 document.addEventListener('click',e=>{if(e.target.closest('#empty-reset'))reset();const c=e.target.closest('[data-clear-category]'),b=e.target.closest('[data-clear-brand]');if(c||b){(c?state.categories:state.brands).delete(c?c.dataset.clearCategory:b.dataset.clearBrand);$$('[data-filter]').forEach(i=>i.checked=(i.dataset.filter==='category'?state.categories:state.brands).has(i.value));render();}});render();
}
if($('#wholesale-products')){
 const wholesale=[{id:1,price:23,moq:50},{id:6,price:15,moq:100},{id:7,price:39,moq:30},{id:21,price:91,moq:24}];
 $('#wholesale-products').innerHTML=wholesale.map(w=>{const p=PRODUCTS.find(p=>p.id===w.id);return `<article class="product-card"><div class="product-image"><span class="discount-badge">BUSINESS EXCLUSIVE</span><img src="${image(p)}" alt="Illustrated ${p.name} packaging" loading="lazy"></div><div class="product-details"><div class="product-brand">${p.brand}</div><h3>${p.name}</h3><p class="pack-size">${p.pack}</p><span class="moq">MOQ: ${w.moq} packs</span><div class="wholesale-prices"><div><small>Wholesale / pack</small><strong>${money(w.price)}</strong></div><div><small>Retail / pack</small><del>${money(p.price)}</del></div></div><a class="outline-button" href="#register">Register to explore <i data-lucide="arrow-up-right"></i></a></div></article>`;}).join('');
 const form=$('#business-form'),files=form.elements.documents,expiry=form.elements.licenceExpiry;
 const today=new Date();expiry.min=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
 function validateFiles(){const selected=[...files.files];let error='';if(selected.length>3)error='Please select at most 3 files.';else if(selected.some(f=>f.size>5*1024*1024))error='Each document must be 5 MB or smaller.';else if(selected.some(f=>!(/\.(pdf|jpe?g|png)$/i).test(f.name)))error='Please use PDF, JPG or PNG documents.';files.setCustomValidity(error);$('#file-status').textContent=error||selected.map(f=>f.name).join(' · ')||'Maximum 5 MB per file · 3 files maximum';return !error;}
 files.addEventListener('change',validateFiles);
 form.addEventListener('input',()=>{if($('#verification-status').textContent.startsWith('PREVIEW')){$('#verification-status').textContent='EDITED · PREVIEW AGAIN';$('#registration-result').textContent='';}});
 form.addEventListener('submit',e=>{e.preventDefault();if(!validateFiles()||!form.reportValidity())return;$('#verification-status').textContent='PREVIEW COMPLETE · NOT VERIFIED';$('#registration-result').innerHTML=`<div class="registration-success"><strong>Your business profile preview is ready.</strong><br>${escapeHTML(form.elements.businessName.value)} · Documents selected: ${files.files.length}.<br>Mock status: awaiting document review. No verification has occurred, and no details or documents have been uploaded.</div>`;$('#registration-result').scrollIntoView({behavior:'smooth',block:'center'});toast('Business registration preview complete');});
}
updateCartCount();icons();
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});},{threshold:.08});$$('.section-heading,.category-card,.business-benefits>div,.offer').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}
window.addEventListener('storage',e=>{if(e.key==='moc-cart-v1'){try{const next=JSON.parse(e.newValue||'{}');cart={};for(const [id,n]of Object.entries(next||{}))if(PRODUCTS.some(p=>p.id===Number(id)&&p.stock)&&Number.isInteger(n)&&n>0)cart[id]=Math.min(n,99);updateCartCount();if($('#cart-dialog').open)renderCart();}catch{}}});
// In-page links also dismiss the compact navigation.
$$('.main-nav a').forEach(a=>a.addEventListener('click',()=>{$('.nav-wrap').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');}));
