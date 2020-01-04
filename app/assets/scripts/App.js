import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyMenu from './modules/StickyMenu'
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial-item"), "65%");

var stickyMenu = new StickyMenu()

var modal = new Modal()