import Vue from 'vue/dist/vue.js'
import SkeletonOne from './skeleton-one.vue'

export default new Vue({
  components: {
    SkeletonOne
  },
  template: `<div>
              <SkeletonOne id="skeleton-one" />
            </div>`
})