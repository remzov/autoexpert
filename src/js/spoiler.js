(function() {

    let reviews = document.querySelectorAll('.reviews-item__text');
    let reviewLength = 410;
    if (reviews) {
        reviews.forEach(element => {
            let reviewText = element.textContent.trim(); 
            let reviewOpenBtn = element.nextElementSibling;
            if ((reviewText.length) > reviewLength) {
                while (reviewText[reviewLength] != ' ') {
                    reviewLength += 1;
                }
                let visibleText = reviewText.slice(0, reviewLength);
                element.textContent = visibleText + '...';
                reviewOpenBtn.addEventListener('click', () => {
                    element.textContent = reviewText;
                    reviewOpenBtn.hidden = true;
                });
            } else {
                reviewOpenBtn.hidden = true;
            }
        });
    }

})()