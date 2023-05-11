import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);
const localStorageTimePlayedKey = "videoplayer-current-time";

const onPlay = function(data) {
    localStorage.setItem(localStorageTimePlayedKey, data.seconds);
    console.log(data.seconds)
  };

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(localStorageTimePlayedKey) || 0).then(function(seconds) {
    onPlay
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:        
            break;
    }
});