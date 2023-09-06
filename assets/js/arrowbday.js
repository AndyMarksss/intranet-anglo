// Obtém os elementos das setas
var scrollLeftArrow = document.querySelector('.scroll-left');
var scrollRightArrow = document.querySelector('.scroll-right');

// Obtém o elemento da barra de rolagem horizontal
var scrollContainer = document.querySelector('.scroll-container');


// Obtém a largura de um item da lista de aniversariantes (assumindo que todos têm a mesma largura)
var itemWidth = document.querySelector('.bday-list-item').clientWidth;

// Define a quantidade de aniversariantes a serem mostrados de cada vez
var numVisibleItems = 2;

// Define o comportamento do clique nas setas
scrollLeftArrow.addEventListener('click', function () {
    var scrollOffset = -itemWidth * numVisibleItems;

    // Verifica se a barra de rolagem está no início
    if (scrollContainer.scrollLeft === 0) {
        // Move para o fim do scroll-container com animação
        scrollContainer.scrollTo({
            left: scrollContainer.scrollWidth,
            behavior: 'smooth'
        });
        // Define o valor de scrollOffset para positivo para mover para a esquerda
        scrollOffset = itemWidth * numVisibleItems;
    } else {
        // Move para a posição anterior com animação
        scrollContainer.scrollBy({
            left: scrollOffset,
            behavior: 'smooth'
        });
    }
});

scrollRightArrow.addEventListener('click', function () {
    var scrollOffset = itemWidth * numVisibleItems;

    // Verifica se a barra de rolagem chegou ao fim
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
        // Move para o início do scroll-container com animação
        scrollContainer.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
        // Define o valor de scrollOffset para negativo para mover para a direita
        scrollOffset = -itemWidth * numVisibleItems;
    } else {
        // Move para a próxima posição com animação
        scrollContainer.scrollBy({
            left: scrollOffset,
            behavior: 'smooth'
        });
    }
});
