// Reserve enough room for wrapping scientific captions at every viewport/font size.
const title=document.querySelector('.scene-title'),panel=document.querySelector('.scene-panel');
export function reserveCaption(){const bottom=parseFloat(getComputedStyle(title).bottom)||83;panel.style.setProperty('--caption-space',`${Math.ceil(title.getBoundingClientRect().height+bottom+24)}px`);const diagram=document.querySelector('#diagram');const cards=[...diagram.children].filter(el=>el.matches('.inventory-board,.diagram-card,.organic-structures'));const contentHeight=cards.reduce((n,el)=>n+el.getBoundingClientRect().height,0);panel.style.setProperty('--model-space',`${Math.ceil(Math.max(320,contentHeight+90))}px`);}
new ResizeObserver(reserveCaption).observe(title);
reserveCaption();
