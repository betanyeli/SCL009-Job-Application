import React from 'react';
import Modal from './modal'
//import InfiniteScroll from 'react-infinite-scroll-component';
import '../App.css';

const unsplashId = '7c567bc4b1005e169e49b8918e1150d58979f65b09e30db07ba0ab4a8a979aa5';
const endpoint = 'https://api.unsplash.com/search/photos';
//const unsplashUrl = "https://api.unsplash.com/photos"

class Navbar extends React.Component {

    constructor() {
        super();
        this.query = '';
        this.trackQueryValue = this.trackQueryValue.bind(this);
        //this.keyPressed = this.keyPressed.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

        this.state = {
            imagesResult: [],
            show: false,
            img: '',
            start: 1,
            count: 20,
        }
    }

    /*component to init app */
    componentDidMount() {
        const { count, start } = this.state;
        fetch(`${endpoint}?query=cow&per_page=${count}&client_id=${unsplashId}&start=${start}`)
            .then(res => {
                return res.json()
            }).then(jsonResponse => {
                console.log("JSON", jsonResponse)
                this.setState({
                    imagesResult: jsonResponse.results
                })
            })
    }
    /*functions modals*/
    showModal = (img) => {
        this.setState({
            show: true,
            img: img
        });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    /*search function without button*/
    // keyPressed(event) {
    //     if (event.key === "Enter") {
    //         if (this.query === '') {
    //             fetch(`${endpoint}?query=tech&client_id=${unsplashId}`)
    //                 .then(res => {
    //                     return res.json()
    //                 }).then(jsonResponse => {
    //                     console.log("JSON", jsonResponse)
    //                     this.setState({
    //                         imagesResult: jsonResponse.results
    //                     })
    //                 })
    //         } else {
    //             fetch(`${endpoint}?query=${this.query}&client_id=${unsplashId}`)
    //                 .then(res => {
    //                     return res.json()
    //                 }).then(jsonResponse => {
    //                     console.log("JSON", jsonResponse)
    //                     this.setState({
    //                         imagesResult: jsonResponse.results
    //                     })
    //                 })
    //         }

    //     }
    // }
    /*capture input value*/
    trackQueryValue(event) {
        this.query = event.target.value;
        this.keyPressed(this.query)
    }
    keyPressed() {
        fetch(`${endpoint}?query=${this.query}&per_page=1000&client_id=${unsplashId}`)
            .then(res => {
                return res.json()
            }).then(jsonResponse => {
                console.log("JSON", jsonResponse)
                this.setState({
                    imagesResult: jsonResponse.results
                })
            })
    }

    /*print search img*/
    printImg() {
        return this.state.imagesResult.map(images => {
            return <img className="img-result"
                src={images.urls.thumb}
                alt=""
                key={images.id}
                onClick={() => this.showModal(images.urls.small)} />


        })
    }

    /*scroll function not working */
    // scrollFunction() {
    //     fetch(`${endpoint}?query=cow&per_page=1000&client_id=${unsplashId}`)
    //         .then(res => {
    //             return res.json()
    //         }).then(jsonResponse => {
                
    //             this.setState({
    //                 imagesResult: this.state.imagesResult.concat(jsonResponse)

    //             })

    //         })

    // }

    render() {
        return (
            <>
                <header>

                    <i className="fab fa-pinterest pinterest"></i>
                    <div className="all-items input-text">
                        <i className="fas fa-search"></i>
                        <input type="text" className="input-text" onChange={this.trackQueryValue} onKeyPress={this.trackQueryValue}
                            placeholder="Buscar" />
                    </div>

                    <div className="all-items">
                        <span ><b>Inicio</b></span>
                        <span>Siguiendo</span>
                        <span><i className="fab fa-adn"></i></span>
                        <span>Ang</span>
                        <span><i className="fas fa-comment-dots icon-group"></i></span>
                        <span><i className="fas fa-bell icon-group"></i></span>
                        <span><i className="fas fa-ellipsis-h icon-group"></i></span>
                    </div>


                </header>

                <div className="container-result">{this.printImg()}</div>
                <Modal show={this.state.show} img={this.state.img} handleClose={this.hideModal} />
{/* 
                <InfiniteScroll
                    dataLength={this.state.imagesResult.length}
                    next={this.scrollFunction}
                    hasMore={true}
                    loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
                >

                </InfiniteScroll> */}


            </>
        );

    }

}

export default Navbar;
