import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class Edit extends Component {
    state = {
        id: this.props.state.editItem.id,
        description: this.props.state.editItem.description,
        image_url: this.props.state.editItem.image_url,
        user_id: this.props.state.editItem.user_id,
    }

    handleInput = (event, property) => {
        this.setState({
            [property]: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'PUT_ITEM', payload: this.state})
        this.props.history.push('/info');
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.description} onChange={(event) => this.handleInput(event, 'description')} />
                <input type='text' value={this.state.image_url} onChange={(event) => this.handleInput(event, 'image_url')} />
                <button onClick={this.handleClick}>Save</button>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(withRouter(Edit));
