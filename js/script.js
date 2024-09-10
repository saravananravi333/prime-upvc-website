// ----- LOAD FANCYBOX -----
document.addEventListener("DOMContentLoaded", function () {
    Fancybox.bind('[data-fancybox="gallery"]', {});
});

// ----- BLOG - READ MORE -----
function toggleReadMore(button) {
    const moreText = button.parentElement.querySelector('.more-text');

    if (moreText.style.display === 'inline') {
        moreText.style.display = 'none';
        button.innerHTML = 'Read More...';
    } else {
        moreText.style.display = 'inline';
        button.innerHTML = 'Read Less <i class="ri-arrow-up-fill"></i>';
    }
}

document.querySelectorAll('.more-text').forEach(function (span) {
    span.style.display = 'none';
});