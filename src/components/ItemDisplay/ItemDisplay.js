import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ItemDisplay.css'
import axios from 'axios';

class ItemDisplay extends Component {

    componentDidMount() {
        this.getItems();
    }

    getItems = () => {
        this.props.dispatch({ type: 'GET_ITEMS' });
    }

    handleDelete = (itemId) => {
        console.log('in handleDelete', itemId);
        
        axios.delete(`/api/shelf/${itemId}`)
            .then(() => {
                this.props.dispatch({ type: 'GET_ITEMS' })
            })
            .catch((error) => {
                console.log('error in delete client', error);  
            })
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Item Description</th>
                            <th>Item Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props && this.props.state && this.props.state.itemDisplay && this.props.state.itemDisplay.map((item) =>
                            <tr key={item.id}>
                                <td>{item.description}</td>
                                <td><img className="item-image" src={item.image_url} /></td>
                                <td><button onClick={() => this.handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <pre>{JSON.stringify(this.props.state.itemDisplay, null, 2)}</pre>
            </>
        );
    }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you cotabled write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(ItemDisplay);
