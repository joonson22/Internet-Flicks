import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        console.log(this.state.counter);
    }

    handlePrev(e){
        e.preventDefault();
        const carouselSlide = document.querySelector('.carousel-slide');
        const carouselImages = document.querySelectorAll('.carousel-slide img')

        const size = carouselImages[0].clientWidth;
        this.setState({ counter: this.state.counter - 1 })
    
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';

        // carouselSlide.addEventListener('transitionend', () => {
        //     if (carouselImages[this.state.counter].id === 'lastCLone') {
        //         carouselSlide.style.transition = 'none';
        //         this.setState({counter: carouselImages.length - 2})
        //         carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        //     }
        // })
        setTimeout(() => {
            if (this.state.counter < 0) {
                carouselSlide.style.transform = 'translateX(' + (-size * this.state.counter) + 'px)';
                this.setState({counter: carouselImages.length - 1})
            } else {
                carouselSlide.style.transform = 'translateX(' + (-size * this.state.counter) + 'px)';
            }
        }, 0)
       
        console.log(this.state.counter)
        
    }
    
    handleNext(e){
        e.preventDefault();
        const carouselSlide = document.querySelector('.carousel-slide');
        const carouselImages = document.querySelectorAll('.carousel-slide img')
   
        const size = carouselImages[0].clientWidth;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        this.setState({counter: this.state.counter + 1})
        

        setTimeout(() => {
            if (this.state.counter > carouselImages.length) {
                carouselSlide.style.transform = 'translateX(' + (-size * this.state.counter) + 'px)';
                this.setState({counter: 0})
            } else {
                carouselSlide.style.transform = 'translateX(' + (-size * this.state.counter) + 'px)';
            }
        }, 0)
        console.log(this.state.counter)
    }
    



    render() {
        return(
            <div className='carousel-container'>
                <div className='carousel-slide'>
                    
                    <img id='lastClone' src="https://thegrio.com/wp-content/uploads/2019/07/lion-king-2-e1562857035506.jpg" alt=""/>
                    <img src="https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2011/09/228463c10a-lkks17pproportioned_a_l.jpg" alt=""/>
                    <img src="https://i.ytimg.com/vi/4CbLXeGSDxg/maxresdefault.jpg" alt=""/>
                    <img src="https://media.vanityfair.com/photos/5c390ee13889055ec05705b8/16:9/w_2560%2Cc_limit/Lion-King-Remake.jpg" alt=""/>
                    <img src="https://i.ytimg.com/vi/7TavVZMewpY/maxresdefault.jpg" alt=""/>
                    <img src="https://thegrio.com/wp-content/uploads/2019/07/lion-king-2-e1562857035506.jpg" alt=""/>
                    <img id='firstClone' src="https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2011/09/228463c10a-lkks17pproportioned_a_l.jpg" alt=""/>
                    
                </div>
                <button id='prevBtn' onClick={this.handlePrev}>Prev</button>
                <button id='nextBtn' onClick={this.handleNext}>Next</button>
            </div>
        )
    }
}

export default Carousel;