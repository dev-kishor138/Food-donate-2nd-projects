document.getElementById('donate-button').addEventListener('click', function(){
    const popupBox = document.getElementById('pop-message');
    popupBox.style.display = 'block';
})
document.getElementById('ok-button').addEventListener('click', function(){
  const popupBox = document.getElementById('pop-message');
  popupBox.style.display = 'none';
})

// Toggle 
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('ul');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  }