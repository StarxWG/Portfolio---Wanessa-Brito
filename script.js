// detecta o scroll da página
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    var logo = document.getElementById('logo');
    
    // se o usuário rolou para baixo
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        logo.src = "/src/logo-preta.svg";
    } else {
        navbar.classList.remove('scrolled');
        logo.src = "/src/logo-WB.svg";
    }
};

// msg de envio do formulario
const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    
    const formData = new FormData(formulario);
    const data = Object.fromEntries(formData.entries());

    fetch(formulario.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (response.ok) {
                mensagem.style.display = 'block';
                formulario.reset();
                setTimeout(() => {
                    mensagem.style.display = 'none';
                }, 4000);
            } else {
                alert('Erro ao enviar o formulário. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao conectar à API. Verifique sua conexão.');
        });
});

// tooltip
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    })
});