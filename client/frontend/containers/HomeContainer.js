import HomeComponent from '../components/HomeComponent';
import { compose } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import Products from '/libs/collections';

function composer(props, onData) {
    Tracker.autorun(() => {
        onData(null, {
            // items: [{ name: 'Bill Gate' }, { name: 'Minh Dao' }]
            items: Products.find({}).fetch()
        });
    })

}

export default compose(composer)(HomeComponent);