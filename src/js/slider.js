;(function () {

    if (document.querySelector('.home') && (window.matchMedia("(min-width: 640px)").matches)) {

        window.addEventListener('DOMContentLoaded', () => {
            let slider = document.querySelector('.home-slider');
            slider.style.height =  window.outerHeight - document.querySelector('.footer').offsetHeight + 'px';
            console.log(window.outerHeight)
            console.log(document.querySelector('.footer').offsetHeight)
        })
        

    }

})();