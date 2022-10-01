const imagemBox = document.querySelectorAll('.imgBox');
imagemBox.forEach(popup => popup.addEventListener('click',()=>{
    popup.classList.toggle('active');
}))