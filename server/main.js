import { Meteor } from 'meteor/meteor';
import Products from '/libs/collections';
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  insertProduct(product) {
    Products.insert(product);
  },
  updateProduct(_id, product) {
    Products.update({ _id }, { $set: product });
  },
  removeProduct(_id) {
    Products.remove(_id);
  },
});

Meteor.publish('publish.list', () => {
  return Products.find({});
})

Meteor.publish('publish.single.id', (_id) => {
  return Products.findOne({ _id });
})
