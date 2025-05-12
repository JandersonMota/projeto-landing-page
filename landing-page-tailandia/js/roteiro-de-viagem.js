document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe 'day'
    const dayTabs = document.querySelectorAll('.days .day');
    
    // Adiciona evento de clique para cada tab de dia
    dayTabs.forEach(function(dayTab) {
        dayTab.addEventListener('click', function() {
            // Remove a classe 'active' de todas as tabs
            dayTabs.forEach(function(tab) {
                tab.classList.remove('active');
            });
            
            // Adiciona a classe 'active' à tab clicada
            this.classList.add('active');
            
            // Obtém o ID do conteúdo relacionado a partir do atributo data-day
            const targetId = this.getAttribute('data-day');
            
            // Seleciona todos os detalhes do guia
            const guideDetails = document.querySelectorAll('.guide-details');
            
            // Esconde todos os detalhes
            guideDetails.forEach(function(detail) {
                detail.classList.remove('active');
            });
            
            // Mostra apenas o detalhe relacionado à tab clicada
            document.getElementById(targetId).classList.add('active');
        });
    });
});