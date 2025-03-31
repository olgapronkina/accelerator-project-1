const videoWrapper = document.querySelector('.video');
const playButton = videoWrapper.querySelector('.video__play');
const videoLink = videoWrapper.querySelector('.video__link');
const videoSrc =
  'https://www.youtube.com/embed/9TZXsZItgdw?si=9MGZ0EZuGzQSjyT7&autoplay=1';

function videoHandler() {
  playButton.addEventListener('click', () => {
    const iframe = createIframe();
    videoLink.remove();
    playButton.remove();
    videoWrapper.appendChild(iframe);
  });
}

function createIframe() {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('src', videoSrc);
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute(
    'allow',
    'autoplay',
    'accelerometer',
    'clipboard-write',
    'encrypted-media',
    'gyroscope',
    'picture-in-picture'
  );
  iframe.setAttribute('allowfullscreen', 'true');

  return iframe;
}

videoHandler();
