import React, { Component } from 'react';
import './landingSection.scss';


class LandingSection extends Component {
    constructor() {
        super();
        this.state = {
            componentIsMounted: false
        }
    }

    componentDidMount() { // gdy komponent zostanie zamontowany przez parent component to funkcja pokazuje wskazane elementy zgodnie z wzorem (index*  600)
        const element = document.querySelectorAll('.landing-text');
        const landingContainer = document.querySelector('.landing-container');
        landingContainer.style.height = `${window.innerHeight}px`; // ustawia wysokość landindContainer na wysokość okna przeglądarki. Lepsze rozwiązanie ponieważ jak ustawie w vh albo % to przy zmniejszaniu się skaluje
        element.forEach((item, index) => {
            setTimeout(() => {
                item.style.left = '0%';
            }, (index+1)*300)
        })
        this.setState({componentIsMounted: true})
    }

    render() {
        return(
            <div className='landing-container'>
                <div className='landing-text header-hover'>
                    <h1>Hi! My name is Mateusz Wrycza</h1>
                </div>
                <div className='landing-text header-hover'>
                    <h2>I'm Front-end Web Developer</h2>
                </div>
                <div className='landing-text'>
                    <button id='landing-btn'>See more</button>
                </div>
            </div>
        )
    }
}

export default LandingSection;