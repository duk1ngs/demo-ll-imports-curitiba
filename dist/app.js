// @ts-check
(() => {
 'use strict';
 document.body.classList.add('js');
 const menu=document.querySelector('.menu'),nav=document.querySelector('#navigation');
 /** @param {boolean} open */
 function setMenu(open){if(!menu||!nav)return;menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);}
 menu?.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
 nav?.addEventListener('click',e=>{if(e.target instanceof Element&&e.target.closest('a'))setMenu(false);});
 document.addEventListener('click',e=>{if(e.target instanceof Node&&!nav?.contains(e.target)&&!menu?.contains(e.target))setMenu(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(menu?.getAttribute('aria-expanded')==='true'){setMenu(false);if(menu instanceof HTMLElement)menu.focus();}closeIntro();}});
 const intro=/** @type {HTMLElement|null} */(document.querySelector('[data-intro]'));
 const skip=/** @type {HTMLButtonElement|null} */(document.querySelector('.skip-intro'));
 let introTimer=0;
 function closeIntro(){if(intro)intro.hidden=true;if(skip){if(document.activeElement===skip){const first=document.querySelector('.brand');if(first instanceof HTMLElement)first.focus();}skip.hidden=true;}window.clearTimeout(introTimer);}
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 if(intro&&skip&&!reduced.matches&&!location.hash&&scrollY<20){intro.hidden=false;skip.hidden=false;introTimer=window.setTimeout(closeIntro,1150);}
 skip?.addEventListener('click',closeIntro);document.addEventListener('pointerdown',e=>{if(e.target!==skip)closeIntro();},{once:true});document.addEventListener('scroll',closeIntro,{once:true,passive:true});reduced.addEventListener('change',e=>{if(e.matches)closeIntro();});
 const gallery=document.querySelector('[data-gallery]');
 gallery?.querySelectorAll('button[data-view]').forEach(button=>button.addEventListener('click',()=>{gallery.closest('.pia-exhibition')?.setAttribute('data-view',button.getAttribute('data-view')||'0');gallery.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));}));
 document.querySelectorAll('[data-tabs]').forEach((group,g)=>{
  const tabs=[...group.querySelectorAll('button[data-tab]')],panes=[...group.querySelectorAll('[data-pane]')];
  group.querySelector('.tab-list')?.setAttribute('role','tablist');
  /** @param {number} index @param {boolean} [focus] */
  function select(index,focus=false){tabs.forEach((tab,i)=>{tab.setAttribute('role','tab');tab.setAttribute('id',`chapter-${g}-tab-${i}`);tab.setAttribute('aria-controls',`chapter-${g}-pane-${i}`);tab.setAttribute('aria-selected',String(i===index));tab.setAttribute('tabindex',i===index?'0':'-1');if(i===index&&focus&&tab instanceof HTMLElement)tab.focus();});panes.forEach((pane,i)=>{pane.setAttribute('role','tabpanel');pane.setAttribute('id',`chapter-${g}-pane-${i}`);pane.setAttribute('aria-labelledby',`chapter-${g}-tab-${i}`);if(pane instanceof HTMLElement)pane.hidden=i!==index;});group.querySelector('.chapter-stage')?.setAttribute('data-chapter',String(index));}
  tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>select(i));tab.addEventListener('keydown',event=>{if(!(event instanceof KeyboardEvent))return;const keys=['ArrowRight','ArrowLeft','Home','End'];if(!keys.includes(event.key))return;event.preventDefault();select(event.key==='Home'?0:event.key==='End'?tabs.length-1:(i+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length,true);});});select(0);
 });
 const dialog=document.querySelector('dialog[data-photo-dialog]'),openPhoto=document.querySelector('[data-open-photo]');
 openPhoto?.addEventListener('click',()=>{if(dialog instanceof HTMLDialogElement&&!dialog.open)dialog.showModal();});
 dialog?.querySelector('[data-close-photo]')?.addEventListener('click',()=>{if(dialog instanceof HTMLDialogElement)dialog.close();});
 const filter=document.querySelector('section[data-filter]');
 filter?.querySelectorAll('button[data-filter]').forEach(button=>button.addEventListener('click',()=>{const selected=button.getAttribute('data-filter');let count=0;filter.querySelectorAll('[data-category]').forEach(card=>{if(card instanceof HTMLElement){card.hidden=selected!=='all'&&card.getAttribute('data-category')!==selected;if(!card.hidden)count++;}});filter.querySelectorAll('button[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const status=filter.querySelector('.filter-status');if(status)status.textContent=`${count} ${count===1?'categoria exibida':'categorias exibidas'}`;}));
 /** @param {string} phone @param {string} message */
 function wa(phone,message){if(!/^\d{10,15}$/.test(phone))return null;const url=new URL('https://wa.me/'+phone);url.searchParams.set('text',message);return url.href;}
 const concierge=document.querySelector('form[data-concierge]');
 if(concierge instanceof HTMLFormElement){
  let step=0;const fields=[...concierge.querySelectorAll('fieldset[data-step]')],next=/** @type {HTMLButtonElement|null} */(concierge.querySelector('[data-next]')),prev=/** @type {HTMLButtonElement|null} */(concierge.querySelector('[data-prev]'));
  function update(){const data=new FormData(/** @type {HTMLFormElement} */(concierge));const message=`Olá, Londrina Imports! Tenho interesse no iPhone 18 Pro Max para ${data.get('usage')}. Gostaria de conversar sobre ${String(data.get('priority')).toLowerCase()}. Quais opções e condições estão disponíveis?`;const draft=concierge?.querySelector('textarea');if(draft)draft.value=message;const link=concierge?.querySelector('.concierge-link'),url=wa(concierge?.getAttribute('data-phone')||'',message);if(link&&url)link.setAttribute('href',url);}
  /** @param {number} value @param {boolean} [focus] */
  function show(value,focus=false){step=value;update();fields.forEach((f,i)=>{if(f instanceof HTMLElement)f.hidden=i!==step;});concierge?.querySelectorAll('[data-step-label]').forEach((label,i)=>{if(i===step)label.setAttribute('aria-current','step');else label.removeAttribute('aria-current');});if(prev)prev.hidden=step===0;if(next)next.hidden=step===2;const status=concierge?.querySelector('.step-status');if(status)status.textContent=`Etapa ${step+1} de 3`;if(focus){const target=fields[step]?.querySelector('input,select,textarea');if(target instanceof HTMLElement)target.focus();}}
  next?.addEventListener('click',()=>show(Math.min(2,step+1),true));prev?.addEventListener('click',()=>show(Math.max(0,step-1),true));concierge.addEventListener('change',update);concierge.addEventListener('submit',e=>e.preventDefault());show(0);
 }
 const visit=document.querySelector('form[data-visit]');
 if(visit instanceof HTMLFormElement){
  function updateVisit(){const data=new FormData(/** @type {HTMLFormElement} */(visit));const message=`Olá, FG Store! Quero conversar sobre ${data.get('topic')}. Prefiro ${String(data.get('way')).toLowerCase()}. Podem confirmar opções e atendimento?`;const draft=visit?.querySelector('textarea');if(draft)draft.value=message;const link=visit?.querySelector('.visit-link'),url=wa(visit?.getAttribute('data-phone')||'',message);if(link&&url)link.setAttribute('href',url);}
  visit.addEventListener('change',updateVisit);visit.addEventListener('submit',e=>e.preventDefault());updateVisit();
  visit.querySelector('[data-copy]')?.addEventListener('click',async()=>{const draft=visit.querySelector('textarea'),status=visit.querySelector('[data-copy-status]');if(!draft||!status)return;try{await navigator.clipboard.writeText(draft.value);status.textContent='Texto copiado. Você decide se deseja enviar.';}catch{draft.focus();draft.select();status.textContent='Selecione o texto e copie pelo seu dispositivo.';}});
 }
})();
