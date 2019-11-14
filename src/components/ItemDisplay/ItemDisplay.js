import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ItemDisplay.css'

class ItemDisplay extends Component {

    componentDidMount() {
        this.getItems();
    }

    getItems = () => {
        this.props.dispatch({ type: 'GET_ITEMS' });
        console.log('in getItems function');

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
