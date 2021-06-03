import React from 'react'
import {Link } from "react-router-dom"
import { RoutePath } from '../../Constansts/RoutePath'
export default function Header() {
    return (
        <header className="header sticky-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header_wrapper_inner">
                <div className="logo col-xs-12">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </a>
                </div>
                <div className="main_menu_inner">
                  <div className="menu">
                    <nav>
                      <ul>
                        <li className="active"><Link to={RoutePath.Home}>Home <i className="" /></Link></li>
                        <li><Link to={RoutePath.About}>about us</Link></li>
                        <li><Link to="shop">shop</Link></li>
                        <li><Link to="blog">Blog </Link>
                        </li>
                        <li className="mega_parent"><Link to={RoutePath.Point}>Point </Link>                       
                        </li>                     
                      </ul>
                    </nav>
                  </div>
                  <div className="mobile-menu d-lg-none">
                    <nav>
                      <ul>
                        <li className="active"><a href="index.html">Home</a>
                          <ul>
                            <li><a href="index.html">Home Version 1</a></li>
                            <li><a href="index-2.html">Home Version 2</a></li>
                            <li><a href="index-3.html">Home Version 3</a></li>
                            <li><a href="index-4.html">Home Version 4</a></li>
                          </ul>
                        </li>
                        <li><a href="about.html">about us </a></li>
                        <li><a href="shop.html">shop</a></li>
                        <li><a href="blog.html">Blog </a>
                        </li>
                        <li><a href="#">Point</a>
                          <ul>
                            <li>
                              <a href="#">Column 1</a>
                              <ul>
                                <li><a href="shop.html">Shop page</a></li>
                                <li><a href="shop-right-sidebar.html">Shop Right sidebar</a></li>
                                <li><a href="shop.html">shop Left Sidebar</a></li>
                                <li><a href="product-details.html">product Details</a></li>
                                <li><a href="my-account.html">My account</a></li>
                              </ul> 
                            </li> 
                            <li>
                              <a href="#">Column 2</a>
                              <ul>
                                <li><a href="wishlist.html">Wishlist</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="login.html">login</a></li>
                                <li><a href="register.html">Register</a></li>
                              </ul> 
                            </li>
                            <li>
                              <a href="#">Column 3</a>
                              <ul>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><a href="blog.html">blog Page</a></li>
                                <li><a href="blog-details.html">blog Details</a></li>
                                <li><a href="404.html">Error Point</a></li>
                              </ul> 
                            </li>
                          </ul>    
                        </li>
                        <li><a href="#">vegetable</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="header_right_info d-flex">
                  <div className="search_box">
                    <div className="search_inner">
                      <form action="#">
                        <input type="text" placeholder="Search our catalog" />
                        <button type="submit"><i className="ion-ios-search" /></button>
                      </form>
                    </div>
                  </div>
                  <div className="mini__cart">
                    <div className="mini_cart_inner">
                      <div className="cart_icon">
                        <a href="#">
                          <span className="cart_icon_inner">
                            <i className="ion-android-cart" />
                            <span className="cart_count">2</span>
                          </span>
                          <span className="item_total">$65.00</span>
                        </a>
                      </div>
                      {/*Mini Cart Box*/}
                      <div className="mini_cart_box cart_box_one">
                        <div className="mini_cart_item">
                          <div className="mini_cart_img">
                            <a href="#">
                              <img src="assets/img/cart/1.jpg" alt="" />
                              <span className="cart_count">1</span>
                            </a>
                          </div>
                          <div className="cart_info">
                            <h5><a href="product-details.html">Jodan</a></h5>
                            <span className="cart_price">$75.99</span>
                          </div>
                          <div className="cart_remove">
                            <a href="#"><i className="zmdi zmdi-delete" /></a>
                          </div>
                        </div>
                        <div className="mini_cart_item">
                          <div className="mini_cart_img">
                            <a href="#">
                              <img src="assets/img/cart/2.jpg" alt="" />
                              <span className="cart_count">1</span>
                            </a>
                          </div>
                          <div className="cart_info">
                            <h5><a href="#">Nike</a></h5>
                            <span className="cart_price">$48.99</span>
                          </div>
                          <div className="cart_remove">
                            <a href="#"><i className="zmdi zmdi-delete" /></a>
                          </div>
                        </div>
                        <div className="price_content">
                          <div className="cart_subtotals">
                            <div className="price_inline">
                              <span className="label">Subtotal </span>
                              <span className="value">$143.49 </span>
                            </div>
                            <div className="price_inline">
                              <span className="label">Shipping </span>
                              <span className="value">$7.00</span>
                            </div>
                            <div className="price_inline">
                              <span className="label">Taxes </span>
                              <span className="value">$0.00</span>
                            </div>
                          </div>
                          <div className="cart-total-price">
                            <span className="label">Total </span>
                            <span className="value">$85.99</span>
                          </div>
                        </div>
                        <div className="min_cart_checkout">
                          <a href="checkout.html">Checkout</a>
                        </div>
                      </div>
                      {/*Mini Cart Box End */}
                    </div>
                  </div>
                  <div className="header_account">
                    <div className="account_inner">
                      <a href="#"><i className="ion-gear-b" /></a>
                    </div>
                    <div className="content-setting-dropdown">
                      <div className="language-selector-wrapper">
                        <div className="language-selector">
                          <ul>
                            <li><a href="#"><img src="assets/img/1.jpg" alt="English" /><span className="expand-more">English</span></a></li>
                            <li><a href="#"><img src="assets/img/banner/frances2.jpg" alt="Language" /><span className="expand-more">Français</span> </a></li>	
                          </ul>
                        </div>
                        <div className="currency-selector-wrapper">
                          <ul>
                            <li><a href="#">EUR $</a></li>
                            <li><a href="#">USD $</a></li>
                          </ul>
                        </div>
                        <div className="user_info_top">
                          <ul>
                            <li><a href="my-account.html">my account</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="login.html">Sign in</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}
