const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>{header.style.background=window.scrollY>40?'rgba(7,4,11,.92)':'linear-gradient(to bottom,rgba(5,3,8,.86),rgba(5,3,8,.2))'});
