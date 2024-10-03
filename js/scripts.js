// Função de scroll suave para os links "Saiba Mais"
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetPage = button.getAttribute('href');
        window.location.href = targetPage;
    });
});

// Função para destacar os blocos ao passar o mouse
document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('mouseover', function() {
        block.style.transform = 'scale(1.05)';
        block.style.transition = 'transform 0.3s';
    });

    block.addEventListener('mouseout', function() {
        block.style.transform = 'scale(1)';
    });
});

// Confirmação ao clicar no botão "Voltar" para a página principal
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === 'Voltar') {
            let confirmReturn = confirm('Tem certeza de que deseja voltar para a página principal?');
            if (!confirmReturn) {
                event.preventDefault();
            }
        }
    });
});
