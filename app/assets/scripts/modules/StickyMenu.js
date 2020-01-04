import $ from 'jquery'
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from 'jquery-smooth-scroll'

class StickyMenu {
  constructor() {
    this.lazyImages = $(".lazyload")
    this.menu = $(".site-header")
    this.headerElement = $(".large-hero__title")
    this.headerLogo = $(".site-header__logo")
    this.createWayPoint()
    this.headerLinks = $(".primary-nav a")
    this.pageSections = $(".page-section")
    this.createPageSectionWaypoint()
    this.smoothScrolling()
    this.refreshWaypoints()
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      Waypoint.refreshAll()
    })
  }

  smoothScrolling() {
    this.headerLinks.smoothScroll()
  }

  createWayPoint() {
    var that = this

    new Waypoint({
      element: this.headerElement[0],

      handler: function(direction) {
       if(direction == "down"){
        that.menu.addClass("site-header--bg-color")
       } else {
        that.menu.removeClass("site-header--bg-color")
       }
      },

      offset: "60"
    }) 
  }

  createPageSectionWaypoint() {

    var that = this
    this.pageSections.each(function() {
      var pageSection = this
      
      new Waypoint({
        element: pageSection,
        handler: function(direction) {
          if(direction == "down") {
            var headerLink = pageSection.getAttribute('data-matching-link')
            that.headerLinks.removeClass('is-current-link')
            $(headerLink).addClass('is-current-link')
          }
        },
        offset: "18%"
      })

      new Waypoint({
        element: pageSection,
        handler: function(direction) {
          if(direction == "up") {
            var headerLink = pageSection.getAttribute('data-matching-link')
            that.headerLinks.removeClass('is-current-link')
            $(headerLink).addClass('is-current-link')
          }
        },
        offset: "-80%"
      })

    })
  }
}


export default StickyMenu