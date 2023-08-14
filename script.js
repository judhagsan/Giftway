window.addEventListener('scroll', function() {
    var botao = document.getElementById('rolagem');
    if (window.pageYOffset > 100) {
      botao.style.display = 'block';
    } else {
      botao.style.display = 'none';
    }
  });
  