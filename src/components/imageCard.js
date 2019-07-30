import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);

        this.state = {spans: 0};

        //here is the way to create refrance to element
        this.imageRef = React.createRef();
     }

     //we cannot access height of the component for example inside componentDidMount as it is to early to get element specs
     // we must call it after loading image
    componentDidMount(){
        console.log(this.imageRef );
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil( height / 10 );

        this.setState({spans})
    }

    render(){
        const { description , urls } = this.props.image;
        return (
            <div style={{ gridRowEnd : `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
};
export default ImageCard;