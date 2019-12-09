import $ from 'jquery';

class MobileMenu {

  constructor() {
    this.MenuIcon = $(".site-header__menu-icon");
    this.MenuContent = $(".site-header__menu-container");
    this.SiteHeader = $(".site-header");
    this.events();
  }

  events() {
    this.MenuIcon.click(this.ShowMenuContent.bind(this))
  }

  ShowMenuContent() {
    this.MenuContent.toggleClass("site-header__menu-container--is-visible");
    this.SiteHeader.toggleClass("site-header__mobile-background");
  }
}

export default MobileMenu;