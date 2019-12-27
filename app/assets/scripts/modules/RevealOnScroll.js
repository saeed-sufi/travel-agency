import $ from 'jquery'
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll {
  constructor(els, offset) {
    this.revealItem = els
    this.offsetPercentage = offset;
    this.hideFeature();
    this.createWaypoints();
  }

  hideFeature() {
    this.revealItem.addClass("reveal-item")
  }

  createWaypoints() {
    var that = this;
    
    this.revealItem.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible")
        },
        offset: that.offsetPercentage,
      });
    })
  }
}

export default RevealOnScroll;