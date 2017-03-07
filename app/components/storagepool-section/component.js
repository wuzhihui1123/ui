import Ember from 'ember';
import Sortable from 'ui/mixins/sortable';

export default Ember.Component.extend(Sortable, {
  model: null,
  single: false,

  sortableContent: Ember.computed.alias('model.volumes'),
  sortBy: 'name',
  sorts: {
    state:  ['state','displayName','id'],
    name:   ['displayName','id'],
    mounts: ['mounts.length','displayName','id'],
  },
  headers:  [
    {
      name:           'state',
      sort:           ['state','displayName','id'],
      translationKey: 'generic.state',
      width:          '115',
    },
    {
      name:           'name',
      sort:           ['displayName','id'],
      translationKey: 'storagePoolSection.models.table.header.volumeName',
      width:          '350',
    },
    {
      translationKey: 'storagePoolSection.models.table.header.mounts',
    },
    {
      isActions:      true,
      width:          '75',
    },
  ],


  init: function() {
    this._super();
  },

  hostsByName: function() {
    return (this.get('model.hosts')||[]).sortBy('displayName');
  }.property('model.hosts.@each.displayName'),

  classNames: ['stack-section','storage', 'clear-section'],
});
