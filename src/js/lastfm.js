const now_song_artist = document.getElementById('now_song_artist');
const now_song_name = document.getElementById('now_song_name');
const now_cover_art = document.getElementById('now_art');

let song_items = [];
for(let i = 1; i <= 5; ++i) {
    song_items.push({
        title: document.getElementById(`song_${i}_title`),
        artist: document.getElementById(`song_${i}_artist`),
        art: document.getElementById(`song_${i}_cover_art`)
    });
}
let lastSong = null;
const updateMusic = () => {
    fetch('https://api-cal.transgirl.space/api/lastfm/current/ConniBug')
        .then(response => response.json())
        .then(data => {
            const mostRecentTrack = data.recenttracks.track[0];
            const isPlaying = mostRecentTrack['@attr'] && mostRecentTrack['@attr'].nowplaying === 'true';

            const last5Tracks = data.recenttracks.track.slice(1, 6);

            if(lastSong === mostRecentTrack.name + mostRecentTrack.mbid)
                return;
            lastSong = mostRecentTrack.name + mostRecentTrack.mbid;

            if(isPlaying) {
                console.log('Now playing:', mostRecentTrack.name, 'by', mostRecentTrack.artist['#text']);
                console.log('Link to cover art:', mostRecentTrack.image[3]['#text']);
                now_song_artist.innerHTML = mostRecentTrack.artist['#text'];
                now_song_name.innerHTML = mostRecentTrack.name;
                now_cover_art.src = mostRecentTrack.image[3]['#text'];
            } else {
                now_song_artist.innerHTML = 'I am currently not listening to anything. <3';
                now_song_name.innerHTML = '';
                now_cover_art.src = '';
            }

            for(let i = 0; i < last5Tracks.length; ++i) {
                console.log(last5Tracks[i].name, 'by', last5Tracks[i].artist['#text']);
                song_items[i].title.innerHTML = last5Tracks[i].name;
                song_items[i].artist.innerHTML = last5Tracks[i].artist['#text'];
                song_items[i].art.src = last5Tracks[i].image[3]['#text'];
            }
        });
}
setInterval(() => updateMusic(), 5000);
updateMusic();
