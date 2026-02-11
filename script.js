// ========================================
// 💖 GLOBAL TYPING FUNCTION
// ========================================
function startTyping(){
  const text = "To: Jeam Abby Keith Panganiban 😊";
  let i = 0;

  function type(){
    if(i < text.length){
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", function () {


// ========================================
// 💖 CLICK HEART BURST
// ========================================
document.addEventListener("click", function(e){
 for(let i=0;i<10;i++){
  let heart=document.createElement("div");
  heart.innerHTML=["💖","💗","💕","💘","❤️"][Math.floor(Math.random()*5)];
  heart.style.position="fixed";
  heart.style.left=e.clientX+"px";
  heart.style.top=e.clientY+"px";
  heart.style.fontSize=(Math.random()*10+18)+"px";
  heart.style.pointerEvents="none";
  document.body.appendChild(heart);

  const x=(Math.random()-0.5)*200;
  const y=(Math.random()-0.5)*200;
  heart.animate([
    {transform:"translate(0,0) scale(1)",opacity:1},
    {transform:`translate(${x}px,${y}px) scale(1.8)`,opacity:0}
  ],{duration:1200,easing:"ease-out"});

  setTimeout(()=>heart.remove(),1200);
 }
});


// ========================================
// 💖 FLOATING BACKGROUND HEARTS
// ========================================
setInterval(()=>{
  let heart=document.createElement("div");
  heart.innerHTML=["💖","💕","💗","💘"][Math.floor(Math.random()*4)];
  heart.style.position="fixed";
  heart.style.left=Math.random()*100+"vw";
  heart.style.bottom="-30px";
  heart.style.fontSize=(Math.random()*12+16)+"px";
  heart.style.opacity="0.6";
  heart.style.pointerEvents="none";
  document.body.appendChild(heart);

  heart.animate([
    { transform:"translateY(0)", opacity:0.6 },
    { transform:"translateY(-120vh)", opacity:0 }
  ],{
    duration:9000,
    easing:"linear"
  });

  setTimeout(()=>heart.remove(),9000);
},1200);


// ========================================
// 😈 RUNAWAY NO BUTTON
// ========================================
const noBtn=document.getElementById("noBtn");

const msgs=[
"sure na yarn, baby? 🥺",
"aww, that hurts my feelings, baby 😭",
"it's a love story, baby, just say YES 🥰",
"oops, wrong button nganiii 🙄",
"say YES to heaven 😇",
"nye nyee nyeee 🤪",
"baby, be serious pls 😤",
"i love you, my princess 😍",
"stappph playing, baby 😆",
"click YES na garod 😌💕",
"yieee, enjoy yarn syaaa 😚",
"halla si oa hahaha 🤣",
"how are u so pretty, baby 🥹",
"baby, please? 🥺👉👈",
"wilab na wilab sayo 😝"
];

function move(){
  noBtn.innerText = msgs[Math.floor(Math.random()*msgs.length)];

  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  const x = Math.random() * (window.innerWidth - btnW - 20);
  const y = Math.random() * (window.innerHeight - btnH - 20);

  noBtn.style.position="fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top  = y + "px";
}

noBtn.onmouseover=move;
noBtn.onclick=move;

});


// ========================================
// ⏳ LOADER + START TYPING AFTER LOADER
// ========================================
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");
  const loaderStayTime = 5000; // change delay here

  setTimeout(() => {
      loader.style.opacity = "0";
      document.body.style.opacity = "1";

      setTimeout(() => {
         loader.style.display = "none";
         startTyping(); // 💖 typing starts after loader
      }, 800);

  }, loaderStayTime);

});