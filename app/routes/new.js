import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    create(newObj) {
      const record = this.store.createRecord('post',newObj);
      return record.save().then(() => {
        debugger;
      });
    }
  }
});
