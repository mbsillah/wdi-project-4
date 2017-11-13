import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


class Search extends Component {

    state = {
        albumResults: [],
        productResults: [],
        loading: true
    }

    async componentDidMount() {
        var albumSearchResults = []
        var productSearchResults = []
        try {
            const { searchItem } = this.props.match.params
            const res = await axios.get(`https://vgmdb.info/search/${searchItem}`)
            albumSearchResults.push(res.data.results.albums)
            productSearchResults.push(res.data.results.products)
            this.setState({ albumResults: albumSearchResults, productResults: productSearchResults, loading: false })
        } catch (error) {
            console.log(error)
        }
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.match.params.searchItem !== this.props.match.params.searchItem){
            var albumSearchResults = []
            var productSearchResults = []
            try {
                const { searchItem } = this.props.match.params
                const res = await axios.get(`https://vgmdb.info/search/${searchItem}`)
                albumSearchResults.push(res.data.results.albums)
                productSearchResults.push(res.data.results.products)
                this.setState({ albumResults: albumSearchResults, productResults: productSearchResults, loading: false })
            } catch (error) {
                console.log(error)
            }
        }       
    }

    render() {

        if (this.state.loading) {
            return <h1>Loading...</h1>
        }


        return (
            <div>
                <h4>Albums: </h4>
                {this.state.albumResults[0].map(album => {
                    return (
                        <Link to={`/${album.link}`}>
                            <h6>{album.titles.en}</h6>
                        </Link>
                    )
                })}
                <h4>Products: </h4>
                {this.state.productResults[0].map(product => {
                    return (
                        <Link to={`/${product.link}`}>
                            <h6>{product.names.en}</h6>
                        </Link>
                    )
                })}
            </div>
        );
    }
}

export default Search;