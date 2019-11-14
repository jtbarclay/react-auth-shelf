import React, { Component } from 'react';
import { connect } from 'react-redux';


class Form extends Component {

    state = {
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

    handleSubmit = () => {
        this.props.dispatch({ type: 'POST_ITEM', payload: this.state});
        this.setState({
            name: '',
            imgUrl: '',
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleItemInput} placeholder="item" />
                    <input type="text" value={this.state.imgUrl} onChange={this.handleImageInput} placeholder="image url" />
                    <input type="submit" placeholder="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Form);