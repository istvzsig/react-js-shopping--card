export function toggleCart() {
        const your_cart = document.getElementsByClassName('your_cart')[0];

        your_cart.classList.contains('hide') ?
            your_cart.classList.remove('hide')
            : your_cart.classList.add('hide')
}

export function hoverCard(e) {
        // e.target.classList.add('shadowed')
}

export function animateCounterIcon() {
  const counter = document.getElementsByClassName('item_counter')[0];

  counter.style.animationName = 'fluffy';

  counter.addEventListener('animationend', e => {
    counter.style.animationName = '';
  })
  
}

export function positioning() {
    const featuredDiv = document.getElementsByClassName('featured')[0];
    let topNavHeight = document.getElementsByClassName('top_menu')[0];
    topNavHeight = topNavHeight.getBoundingClientRect().height;

    featuredDiv.getBoundingClientRect().top < 0 ?
        featuredDiv.style.animationName = 'show' :
        featuredDiv.style.animationName = ''
}
