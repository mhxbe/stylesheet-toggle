javascript:!function(){'use strict';window.onload=function(){function e(){t()}function t(){var e=document.createElement('div');e.className='my-ui',e.style.minWidth='150px',e.style.padding='4px',e.style.position='fixed',e.style.bottom='10px',e.style.right='10px',e.style.background='red',e.style.color='white',e.innerHTML='<h2>Stylesheets:</2><ul class="stylesheet-list"><ul>',document.querySelector('body').appendChild(e),l()}function l(){var e=document.querySelectorAll('link[rel=stylesheet]');[].slice.call(e).forEach(function(e){u.push({fileName:e.attributes.href.value,file:e,visible:!0})}),i()}function i(){r=document.querySelector('.my-ui ul.stylesheet-list'),u.forEach(function(e){console.info(e);var t=document.createElement('li');t.innerHTML=e.fileName,t.attributes.fileName=e.fileName,t.attributes.file=e.file,t.onclick=function(t){e.visible?n(e):o(e),e.visible=!e.visible},r.appendChild(t)}),s()}function n(e){document.head.removeChild(e.file)}function o(e){document.head.appendChild(e.file)}function s(){c=document.querySelector('.my-ui'),[].slice.call(c.getElementsByTagName('*')).forEach(function(e){e.style.margin='0px',e.style.padding='0px',e.style.color='white',e.style.fontSize='14px',e.style.textTransform='none',e.style.fontStyle='normal',e.style.border='0',e.style.listStyleType='none','LI'===e.tagName&&(e.style.cursor='pointer')})}var c,r,u=[];e()}}();