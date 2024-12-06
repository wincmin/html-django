
        let currentIndex = 0;

        function moveSlide(direction) {
            const slides = document.querySelectorAll(".carousel img");
            const totalSlides = slides.length;

            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            } else if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }

            const carousel = document.querySelector(".carousel");
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
 