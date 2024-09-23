# Code Pudding Sept 2024
September 2024 Code Jam for TripleTen

The object of this project we will build a machine learning model to predict the genre of a song, using data searched from the [Spotify Web API](https://developer.spotify.com/documentation/web-api). 

## Team Members:
- [Michael Velasco](https://github.com/vekim91)
- [Isaiah Montoya](https://github.com/IMMontoya)
- [Michael Gleason](https://github.com/mtgleason)

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install all neccesary libraries:

```bash
pip install spotipy
pip install python
pip install pandas
pip install matplotlib
pip install seaborn
pip install sklearn
pip install lightgbm
pip install catboost
```


## Useage

A software able to read [Jupyter Notebook](https://jupyter.org/) files such as [VS Code](https://code.visualstudio.com/) is necessary.

Visit the [Spotify Web API](https://developer.spotify.com/documentation/web-api) website, follow instructions to recieve API ID and secret.

Place them in a file named `.env` using the format:

```
Client_ID = 'ID_HERE'
Client_secret = 'secret_HERE'
```

## Data 

**Description of the spotify_data.csv:**
- `track_id` - Unique ID for each track
- `genre` - song genre (Target)
- `danceability` 
- `energy` 
- `key` - 1-12
- `loudness` 
- `mode` 
- `speechiness`
- `acousticness`
- `instrumentalness`
- `liveness`
- `valence`
- `tempo` - tempo of the track
- `type` - type of data extracted from the Spotify API
- `uri` - Unique track URI
- `track_href` - API link to song data
- `analysis_url` - API link to audio_features
- `duration_ms` - Length of song (in ms)
- `time_signature` - Time signatrue of the track