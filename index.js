let image= document.querySelector('img');
let prevSrc= image.src;
let tag=document.querySelector('h2');
let prevText= tag.innerText;

image.addEventListener('mouseover',()=>{
      image.src="https://cdn.pixabay.com/photo/2024/04/07/23/28/car-8682389_960_720.jpg";
      tag.innerText= 'Lamborgini'
})
image.addEventListener('mouseleave',()=>{
      image.src=prevSrc;
      tag.innerText=prevText;
})