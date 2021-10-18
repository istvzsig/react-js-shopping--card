'use strict';

export function toggleCart() {
        const your_cart = document.getElementsByClassName('your_cart')[0];

        your_cart.classList.contains('hide') ?
            your_cart.classList.remove('hide')
            : your_cart.classList.add('hide')
}

export function hoverCard(e) {
        // e.target.classList.add('shadowed')
}