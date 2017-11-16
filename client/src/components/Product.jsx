import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Product extends Component {
    state = {
        product: {},
        productAlbums: [],
        loading: true
    }

    async componentDidMount() {
        try {
            const { productId } = this.props.match.params
            const res = await axios.get(`https://vgmdb.info/product/${productId}`)
            this.setState({ product: res.data, productAlbums: res.data.albums, loading: false })
        } catch (error) {
            console.log(error)
        }
    }



    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <h2>{this.state.product.name}</h2>
                <img src={this.state.product.picture_full} alt={this.state.product.name} />
                {this.state.productAlbums.map((album) => {
                    return (
                        <Link to={`/${album.link}`}>
                            <h6>{album.titles.en}</h6>
                        </Link>
                    )
                })}
            </div>
        );
    }
}


export default Product;