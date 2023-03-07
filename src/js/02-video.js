import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayer = document.querySelector('#vimeo-player');
const storageCurrentTimeKey = localStorage.getItem('videoplayer-current-time');
const player = new Player(videoPlayer);

player.on('timeupdate', throttle(onPlayClick, 1000));

function onPlayClick(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

if (storageCurrentTimeKey) {
  player.setCurrentTime(JSON.parse(storageCurrentTimeKey));
}
