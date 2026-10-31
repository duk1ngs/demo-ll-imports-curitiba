// @ts-check
(()=>{
 'use strict';
 document.body.classList.add('js');
 /** @type {HTMLButtonElement|null} */const menu=document.querySelector('.menu-button');
 /** @type {HTMLElement|null} */const nav=document.querySelector('.navigation');
 /** @param {boolean} open */
 function setMenu(open){if(!menu||!nav)return;nav.classList.toggle('is-open',open);menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Fechar':'Menu';}
 menu?.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
 nav?.addEventListener('click',e=>{if(e.target instanceof Element&&e.target.closest('a'))setMenu(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){setMenu(false);menu.focus();}});
 matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches)setMenu(false);});
 document.addEventListener('pointerdown',e=>{if(e.target instanceof Node&&menu?.getAttribute('aria-expanded')==='true'&&!nav?.contains(e.target)&&!menu.contains(e.target))setMenu(false);},{passive:true});
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 /** @type {HTMLElement|null} */const intro=document.querySelector('[data-intro]');let timer=0;
 function closeIntro(){clearTimeout(timer);timer=0;if(intro)intro.hidden=true;}
 if(intro&&!reduced.matches&&!location.hash&&scrollY<80){intro.hidden=false;timer=setTimeout(closeIntro,Math.min(1900,Number(intro.dataset.duration)||1400));}
 intro?.querySelector('[data-skip]')?.addEventListener('click',closeIntro);
 document.addEventListener('keydown',closeIntro);
 document.addEventListener('focusin',e=>{if(e.target instanceof Node&&!intro?.contains(e.target))closeIntro();});
 document.addEventListener('pointerdown',e=>{if(e.target instanceof Node&&!intro?.contains(e.target))closeIntro();},{passive:true});
 addEventListener('scroll',()=>{if(scrollY>80)closeIntro();},{passive:true});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)closeIntro();});addEventListener('pagehide',closeIntro);reduced.addEventListener('change',e=>{if(e.matches)closeIntro();});
 for(const group of document.querySelectorAll('[data-tabs]')){
  /** @type {HTMLButtonElement[]} */const buttons=Array.from(group.querySelectorAll('button[data-panel]'));
  /** @type {HTMLElement[]} */const panes=Array.from(group.querySelectorAll('[data-pane]'));
  const bar=group.querySelector('.tabbar'),live=group.querySelector('[data-choice-status]');
  if(!buttons.length||buttons.length!==panes.length)continue;
  bar?.setAttribute('role','tablist');let selected=0;
  /** @param {number} index @param {boolean} [focus] @param {boolean} [announce] */
  function select(index,focus=false,announce=true){
   if(index<0||index>=buttons.length)return;selected=index;
   buttons.forEach((b,i)=>{b.setAttribute('role','tab');b.setAttribute('aria-selected',String(i===index));b.setAttribute('aria-controls',panes[i].id);b.tabIndex=i===index?0:-1;panes[i].hidden=i!==index;panes[i].setAttribute('role','tabpanel');panes[i].tabIndex=0;});
   if(focus)buttons[index].focus();if(announce&&live)live.textContent='Categoria selecionada: '+buttons[index].textContent;
  }
  buttons.forEach((b,i)=>{b.addEventListener('click',()=>select(i));b.addEventListener('keydown',e=>{let next=selected;if(e.key==='ArrowRight')next=(selected+1)%buttons.length;else if(e.key==='ArrowLeft')next=(selected-1+buttons.length)%buttons.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=buttons.length-1;else return;e.preventDefault();select(next,true);});});select(0,false,false);
 }
 /** @type {HTMLFormElement|null} */const form=document.querySelector('[data-message-form]');
 if(form){
  /** @type {HTMLInputElement|null} */const note=form.querySelector('#model-note');
  /** @type {HTMLTextAreaElement|null} */const draft=form.querySelector('#message-draft');
  /** @type {HTMLAnchorElement|null} */const destination=form.querySelector('.draft-link');
  const status=form.querySelector('.copy-status');
  function update(){
   if(!form||!draft||!destination)return;
   /** @type {HTMLInputElement|null} */const usage=form.querySelector('input[name="usage"]:checked');
   const detail=note?.value.trim().slice(0,100);
   const text='Olá, FG Store! Procuro um iPhone para '+(usage?.value||'dia a dia')+'.'+(detail?' Tenho em mente: '+detail+'.':'')+' Quais modelos e condições estão disponíveis?';
   draft.value=text;destination.href='https://wa.me/'+form.dataset.phone+'?text='+encodeURIComponent(text);if(status)status.textContent='';
  }
  form.addEventListener('input',update);form.addEventListener('change',update);form.addEventListener('submit',e=>e.preventDefault());
  form.querySelector('.copy-message')?.addEventListener('click',async()=>{if(!draft)return;try{if(!navigator.clipboard)throw Error('Clipboard unavailable');await navigator.clipboard.writeText(draft.value);if(status)status.textContent='Mensagem copiada.';}catch{draft.focus();draft.select();if(status)status.textContent='Selecione e copie o texto, ou abra a mensagem no WhatsApp.';}});update();
 }
 if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){if(!reduced.matches)entry.target.classList.add('is-in');observer.unobserve(entry.target);}},{threshold:.12});document.querySelectorAll('[data-reveal]').forEach(e=>observer.observe(e));addEventListener('pagehide',()=>observer.disconnect(),{once:true});}
})();
