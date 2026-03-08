const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.onclick = () => {
  nav.classList.toggle("active");
  toggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
};

document.querySelectorAll(".nav-links a").forEach(link=>{
  link.onclick = ()=>{
    nav.classList.remove("active");
    toggle.textContent="☰";
  };
});