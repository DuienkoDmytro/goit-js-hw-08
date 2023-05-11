import Player from '@vimeo/player';
const iframe = document.querySelector("iframe");



const onPlay = function(data) {
    localStorage.setItem(localStorageTimePlayedKey, data.seconds);
    console.log(data);
};
const localStorageTimePlayedKey = "videoplayer-current-time";
player.on('timeupdate', onPlay);




player.setCurrentTime(getItem.localStorageTimePlayedKey).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});