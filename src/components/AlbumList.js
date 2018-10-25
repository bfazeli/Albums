import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './AlbumDetail'

class AlbumList  extends Component {
    state = { albums: [] }

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({ albums: responseJson })
            })
            .catch((error) => {
                console.error(error);
            })
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        )
    }

    render() {
        console.log(this.state);
        
        return (
            <ScrollView syle={{ flex: 1 }}>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList