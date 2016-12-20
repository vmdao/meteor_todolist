import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
class HomeComponent extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const object = {
            name: event.target.name.value
        }
        Meteor.call('insertProduct', object, (data) => {
            if (data) {
                return console.log(save)
            }
            console.log('save')
        });

    }

    render() {
        console.log(this.props)
        return (
            <div>Hello
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='name' />
                    <button type='submit'>Submit</button>
                </form>
                <ul>
                    {this.props.items.map((item, index) => {
                        return <li key={index}>{item.name}</li>;
                    })}
                </ul>
            </div>
        )
    }
}

export default HomeComponent;