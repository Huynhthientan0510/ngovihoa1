document.getElementById('showMoreBtn').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.textContent = 'Ẩn bớt';
    } else {
        moreInfo.classList.add('hidden');
        this.textContent = 'Xem thêm';
    }
});
