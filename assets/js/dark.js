// dark
let dark = document.querySelector("#dark");
let icona = document.querySelector("#mooon");

icona.addEventListener("click", (eo) => {
  eo.preventDefault();
  dark.classList.toggle("dark");
});

// click download cv 
function downloadImage() {
    let imageUrl = "https://drive.google.com/file/d/1j1xLs9cOfZk-7fzIzPDWy2tL72dVZ57W/view?usp=drive_link"; // عنوان الصورة التي ترغب في تنزيلها
  
    let link = document.createElement("a");
    link.href = imageUrl;
    link.download = "cv.png"; // اسم الملف الذي سيتم حفظه للصورة
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }