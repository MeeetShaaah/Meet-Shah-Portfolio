document.addEventListener("DOMContentLoaded", function() {
    const progressRing = document.querySelector('.progress-ring-circle');
    const progressText = document.querySelector('.progress-text');

    function setProgress(percent) {
        const offset = 314 - (percent / 100) * 314;
        progressRing.style.strokeDashoffset = offset;
        progressText.textContent = percent + "%";
    }

    // Example: Setting progress to 50%
    setProgress(50);
});
