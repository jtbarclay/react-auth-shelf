import React from 'react';
import connect from 'react-redux';


class Form extends Component {

    state={
        name: '',
        imgUrl: '',
    }

    handleItemInput = (event) => {
        this.setState({
            name: event.target.value,
            imgUrl: this.state.imgUrl,
        })
    };

    handleImageInput = (event) => {
        this.setState({
            name: this.state.name,
            imgUrl: event.target.value,
        })   
    }

    render() {
        return(
            <div>
                <input type="text" value={this.state.name} onChange={this.handleItemInput} placeholder="item"/>
                <input value={this.state.imgUrl} onChange={this.handleImageInput} placeholder="image url"/>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Form);