var playlist = {
  artist1 : "song 1"
};

function updatePlaylist({}, artist, song){
  playlist[artist] = song;
  return playlist;
}