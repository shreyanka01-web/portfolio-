// Loader
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

// Typing Effect
const textArray=["Frontend Developer","AI Enthusiast","Creative Coder"];
let i=0,j=0;
const typing=document.querySelector(".typing");

function type(){
if(j<textArray[i].length){
typing.textContent+=textArray[i][j++];
setTimeout(type,100);
}else setTimeout(erase,1500);
}
function erase(){
if(j>0){
typing.textContent=textArray[i].substring(0,--j);
setTimeout(erase,50);
}else{ i=(i+1)%textArray.length; setTimeout(type,200); }
}
type();

// Scroll Progress
window.onscroll=function(){
let winScroll=document.body.scrollTop||document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
let scrolled=(winScroll/height)*100;
document.getElementById("progress-bar").style.width=scrolled+"%";
};

// Custom Cursor
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

// Modal
function openModal(src){
    const modal = document.getElementById("modal");
    modal.classList.add("show");
    document.getElementById("modal-img").src = src;
}

function closeModal(){
    document.getElementById("modal").classList.remove("show");
}
window.onclick = function(e) {
    let modal = document.getElementById("modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
}
// Dark Mode
function toggleTheme(){
document.body.classList.toggle("light-mode");
}

