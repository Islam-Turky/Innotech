function StartCarousel(CarouselId)
{
    var targetId = document.getElementById(CarouselId);
    var carousel = new bootstrap.Carousel(targetId);
    carousel.cycle();
}