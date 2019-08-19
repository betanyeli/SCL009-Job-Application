import React from 'react';
import Modal from './modal'
import '../App.css';

const unsplashId = '7c567bc4b1005e169e49b8918e1150d58979f65b09e30db07ba0ab4a8a979aa5';
const endpoint = 'https://api.unsplash.com/search/photos';

class Navbar extends React.Component {

    constructor() {
        super();
        this.query = '';
        this.trackQueryValue = this.trackQueryValue.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

        this.state = {
            imagesResult: [],
            show: false,
            img: ''
        }
    }

    showModal = (img) => {
        this.setState({ show: true,
        img: img});
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

    keyPressed(event) {
        if (event.key === "Enter") {
            if (this.query === '') {
                fetch(`${endpoint}?query=tech&client_id=${unsplashId}`)
                    .then(res => {
                        return res.json()
                    }).then(jsonResponse => {
                        console.log("JSON", jsonResponse)
                        this.setState({
                            imagesResult: jsonResponse.results
                        })
                    })
            } else {
                fetch(`${endpoint}?query=${this.query}&client_id=${unsplashId}`)
                    .then(res => {
                        return res.json()
                    }).then(jsonResponse => {
                        console.log("JSON", jsonResponse)
                        this.setState({
                            imagesResult: jsonResponse.results
                        })
                    })
            }

        }
    }
    trackQueryValue(event) {
        this.query = event.target.value;
    }

    imagesResult() {
        return this.state.imagesResult.map(images => {
            return <> <img className="img-result" src={images.urls.thumb} alt="" key={images.id} onClick={()=>this.showModal(images.urls.small)}/>

              </>
        })
    }

    componentDidMount() {
        fetch(`${endpoint}?query=sadness&per_page=20&client_id=${unsplashId}`)
            .then(res => {
                return res.json()
            }).then(jsonResponse => {
                console.log("JSON", jsonResponse)
                this.setState({
                    imagesResult: jsonResponse.results
                })
            })
    }
    render() {
        return (
            <>
                <header>

                <i class="fab fa-pinterest pinterest"></i>
                    <div className="all-items input-text">
                    <i class="fas fa-search"></i>
                    <input type="text" className="input-text" onChange={this.trackQueryValue} onKeyPress={this.keyPressed}
                        placeholder="Buscar" />
                    </div>

                    <div className="all-items">
                        <span ><b>Inicio</b></span>
                        <span>Siguiendo</span>
                        <span><i class="fab fa-adn"></i></span>
                        <span>Ang</span>

                        <span><i class="fas fa-comment-dots icon-group"></i></span>
                        <span><i class="fas fa-bell icon-group"></i></span>
                        <span><i class="fas fa-ellipsis-h icon-group"></i></span>
                    </div>


                </header>

                <div className="container-result">{this.imagesResult()}</div>
                 <Modal show={this.state.show} img={this.state.img} handleClose={this.hideModal}/> 
          
              
           
            </>
        );

    }

}

export default Navbar;
