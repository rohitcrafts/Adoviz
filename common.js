/* ── MENU TOGGLE ── */
const toggle = document.getElementById("menu-toggle");
const nav    = document.getElementById("nav-links");

if(toggle && nav){
  toggle.onclick = () => {
    nav.classList.toggle("active");
    toggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
  };
  document.querySelectorAll(".nav-links a").forEach(link=>{
    link.onclick = ()=>{ nav.classList.remove("active"); toggle.textContent="☰"; };
  });
}

/* ── MONEY RAIN ── */
const moneyBg = document.getElementById("money-bg");
if(moneyBg){
  const emojis = ["💰","💵","📊","💹","🪙","💳","📈","💎"];
  for(let i=0;i<18;i++){
    const el = document.createElement("div");
    el.className = "money";
    el.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    el.style.left = Math.random()*100 + "%";
    el.style.fontSize = (16+Math.random()*18) + "px";
    el.style.animationDuration = (6+Math.random()*8) + "s";
    el.style.animationDelay = (Math.random()*6) + "s";
    moneyBg.appendChild(el);
  }
}

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll("section, .card, .value-card, .why-card, .about-card, .process-step");
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("show"); });
},{ threshold:0.1 });
reveals.forEach(el=>io.observe(el));