import Vue from 'vue'
import Modal from '@/components/Modal'
import $ from 'jquery'

Vue.component('v-modal', Modal)

Vue.directive('select', {
  'twoWay': true,
  'bind': function () {
    $(this.el).material_select()
    var self = this
    $(this.el).on('change', function () {
      self.set($(self.el).val())
    })
  },
  update: function (newValue, oldValue) {
    $(this.el).val(newValue)
  },
  'unbind': function () {
    $(this.el).material_select('destroy')
  }
})
