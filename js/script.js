document.addEventListener('DOMContentLoaded', () => {

    /*  ДАННЫЕ И ПЕРЕКЛЮЧЕНИЕ ФАСОВОК  */
    
    const packagingData = {
      '100': {
        sku: '01306',
        price: '326,40 ₽',
        oldPrice: '349,20 ₽',
        discount: '-7%'
      },
      '500': {
        sku: '01307',
        price: '1 432 ₽',
        oldPrice: '1 646 ₽',
        discount: '-13%'
      },
      '1000': {
        sku: '01308',
        price: '2 064 ₽',
        oldPrice: '2 592 ₽',
        discount: '-20%'
      },
      '5000': {
        sku: '01309',
        price: '6 320 ₽',
        oldPrice: '8 710 ₽',
        discount: '-27%'
      }
    };
  
    const skuElement = document.getElementById('product-sku');
    const priceCurrentElement = document.getElementById('price-current');
    const priceOldElement = document.getElementById('price-old');
    const badgeElement = document.getElementById('badge-discount');
    const packagingButtons = document.querySelectorAll('.product__packaging-btn');
  
    
    packagingButtons.forEach(button => {
      button.addEventListener('click', () => {
        
        packagingButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        
        const weight = button.getAttribute('data-weight');
        const item = packagingData[weight];
  
        
        if (item) {
          skuElement.textContent = item.sku;
          priceCurrentElement.textContent = item.price;
          priceOldElement.textContent = item.oldPrice;
          badgeElement.textContent = item.discount;
        }
      });
    });

  
    /*  ПЕРЕКЛЮЧЕНИЕ ФОТО ПО КЛИКУ НА МИНИАТЮРЫ */
    const mainImage = document.getElementById('main-image');
    const thumbs = document.querySelectorAll('.gallery__thumb');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
        
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        const newSrc = thumb.getAttribute('data-img');
        mainImage.style.opacity = '0.4';
        
        setTimeout(() => {
            mainImage.src = newSrc;
            mainImage.style.opacity = '1';
        }, 120);
        });
    });
  
    /* КНОПКА "В КОРЗИНУ"  */
    const cartBtn = document.getElementById('btn-cart');
    cartBtn.addEventListener('click', () => {
        const originalText = cartBtn.textContent;
        cartBtn.textContent = 'Добавлено!';
        cartBtn.style.backgroundColor = '#1b4332';

        setTimeout(() => {
            cartBtn.textContent = originalText;
            cartBtn.style.backgroundColor = '';
        }, 1500);
    });
  
});