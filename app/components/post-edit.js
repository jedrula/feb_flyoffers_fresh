import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitform() {
      const newObj = this.getProperties(['title','href','desc']);//TODO add legs support
      this.getAttr('submit')(newObj);
    }
  }
});
