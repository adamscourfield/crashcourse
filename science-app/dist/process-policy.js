import{filmForLesson,films}from './process-films.js?v=20261022-matter01r3';
export function processDefaults(lesson,stage,reducedMotion=false,card=null){const key=lesson&&[0,1].includes(stage)&&card?.process!==false?(card?.processFilm&&films[card.processFilm]?card.processFilm:filmForLesson(lesson)):null;return{key:key||null,view:key?'process':'model',loop:true,autoplay:!!key&&!reducedMotion};}
