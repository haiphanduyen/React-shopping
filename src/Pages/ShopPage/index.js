import React from 'react'

export default function Shop() {
    console.log("Shop")
    return (
        <div>
      <div>
        <div className="breadcrumb_container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">     
                <nav>
                  <ul>
                    <li>
                      <a href="index.html">Home &gt;</a>
                    </li>
                    <li>shop</li>
                  </ul>
                </nav>
              </div>
            </div> 
          </div>        
        </div>
        <div className="organic_food_wrapper">        
          {/*- shop_wrapper area  */}
          <div className="shop_wrapper ptb-90">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-8 col-12">
                  <div className="shop_sidebar">
                    <div className="block_categories">
                      <div className="category_top_menu widget">
                        <div className="widget_title">
                          <h3>categories</h3>
                        </div>
                        <ul className="shop_toggle">
                          <li className="has-sub"><a href="#">Áo</a>
                            <ul className="categorie_sub">
                              <li><a href="#">Nike</a></li>
                              <li><a href="#">Adidas</a></li>
                              <li><a href="#">Puma</a></li>
                    
                            </ul>
                          </li>
                          <li className="has-sub"><a href="#">Quần </a>
                            <ul className="categorie_sub">
                              <li><a href="#">Nike</a></li>
                              <li><a href="#">Adidas</a></li>
                              <li><a href="#">Puma</a></li>
 
                            </ul>
                          </li>
                          <li className="has-sub"><a href="#">Giày </a>
                            <ul className="categorie_sub">
                              <li><a href="#">Nike</a></li>
                              <li><a href="#">Adidas</a></li>
                              <li><a href="#">Puma</a></li>
            
                            </ul>
                          </li>
                        </ul>   
                      </div>
                    </div>
                    <div className="search_filters_wrapper">
                      <div className="price_filter widget">
                        <div className="widget_title">
                          <h3>filter By price</h3>
                        </div>
                        <div className="search_filters widget">
                          <div id="slider-range" />
                          <input type="text" name="text" id="amount" />    
                        </div>
                      </div>
                      <div className="size_clearfix widget  mb-30">
                        <div className="widget_title">
                          <h3>Size</h3>
                        </div>
                        <ul>
                          <li>
                            <input id="facet_size" type="checkbox" />
                            <label htmlFor="facet_size">S (11)</label>
                          </li>
                          <li>
                            <input id="facet_size_one" type="checkbox" />
                            <label htmlFor="facet_size_one">M(11)</label>
                          </li>
                          <li>
                            <input id="facet_size_two" type="checkbox" />
                            <label htmlFor="facet_size_two">L(11)</label>
                          </li>
                        </ul>    
                      </div>
                      
                      <div className="Compositions widget mb-30">
                        <div className="widget_title">
                          <h3>Hãng</h3>
                        </div>
                        <ul>
                          <li>
                            <input type="checkbox" id="com1" /> 
                            <label htmlFor="com1">Nike</label>
                          </li>
                          <li>
                            <input type="checkbox" id="com2" /> 
                            <label htmlFor="com2">Adidas</label>
                          </li>
                          <li>
                            <input type="checkbox" id="com3" /> 
                            <label htmlFor="com3">Puma</label>
                          </li>
                        </ul>
                      </div>
                     
                                            <div className="color_clearfix widget mb-30">
                        <div className="widget_title">
                          <h3>color</h3>
                        </div>
                        <ul>
                          <li>
                            <input id="balck" defaultChecked="checked" className="input_color" name="color1" type="radio" /> 
                            <label htmlFor="balck" className="color_btns" /> 
                            <a href="#"> Beige(5)</a>
                          </li>
                          <li>
                            <input id="White" defaultChecked="checked" className="input_color" name="color1" type="radio" /> 
                            <label htmlFor="White" className="color_btns1" /> 
                            <a href="#"> White(7)</a>
                          </li>
                          <li>
                            <input id="Red" defaultChecked="checked" className="input_color" name="color1" type="radio" /> 
                            <label htmlFor="Red" className="color_btns2" /> 
                            <a href="#"> Red(6)</a>
                          </li>
                          <li>
                            <input id="gray" defaultChecked="checked" className="input_color" name="color1" type="radio" /> 
                            <label htmlFor="gray" className="color_btns3" /> 
                            <a href="#"> gray(4)</a>
                          </li>
                          <li>
                            <input id="Orange" defaultChecked="checked" className="input_color" name="color1" type="radio" /> 
                            <label htmlFor="Orange" className="color_btns4" /> 
                            <a href="#">Orange(3)</a>
                          </li>
                          <li>
                            <input id="Blue" defaultChecked="checked" className="input_color" name="color1" type="radio" /> 
                            <label htmlFor="Blue" className="color_btns6" /> 
                            <a href="#"> Blue(8)</a>
                          </li>
                          <li>
                            <input id="yellow" defaultChecked="checked" className="input_color" name="color1" type="radio" /> 
                            <label htmlFor="yellow" className="color_btns7" /> 
                            <a href="#"> yellow(2)</a>
                          </li>
                        </ul>    
                      </div>    
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-12 col-12">
                  <div className="categories_banner">
                    <div className="categories_banner_inner">
                      <img src="assets/img/banner/1.jpg" alt="" />
                    </div>
                    <h3>SHOP</h3>
                  </div>
                  <div className="tav_menu_wrapper">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-7 col-sm-6">
                        <div className="tab_menu shop_menu">
                          <div className="tab_menu_inner">
                            <ul className="nav" role="tablist">
                              <li><a className="active" data-toggle="tab" href="#shop_active" role="tab" aria-controls="shop_active" aria-selected="true"><i className="fa fa-th" aria-hidden="true" /></a></li>
                              <li><a data-toggle="tab" href="#featured_active" role="tab" aria-controls="featured_active" aria-selected="false"><i className="fa fa-list" aria-hidden="true" /></a></li>
                            </ul>
                          </div>
                          <div className="tab_menu_right">    
                            <p>There are 14 products.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-5 col-sm-6">
                        <div className="Relevance">
                          <span>Sort by:</span>
                          <div className="dropdown dropdown-shop">
                            <select name="drop" id="dropdown">
                              <option value={1}>Relevance</option>   
                              <option value={2}>Name, A to Z</option>
                              <option value={2}>Name, Z to A</option>
                              <option value={2}>Price, low to high</option>
                              <option value={2}>Price, high to low</option>
                            </select>
                          </div>
                        </div>    
                      </div>    
                    </div>
                  </div> 
                  <div className="tab_product_wrapper">
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="shop_active">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <span className="discount_price">-5%</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$75.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> 
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$55.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$75.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>  
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$95.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>  
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <span className="discount_price">-10%</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$45.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <span className="discount_price">-15%</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$35.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>  
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$55.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>  
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <span className="discount_price">-5%</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$67.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> 
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <span className="discount_price">-5%</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$85.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$75.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> 
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <span className="discount_price">-5%</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$75.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> 
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single__product">
                              <div className="single_product__inner">
                                <span className="new_badge">new</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="product__content text-center">
                                  <div className="produc_desc_info">
                                    <div className="product_title">
                                      <h4><a href="product-details.html">Jordan</a></h4>
                                    </div>
                                    <div className="product_price">
                                      <p>$75.66</p>
                                    </div>
                                  </div>
                                  <div className="product__hover">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>           
                        </div>
                      </div>
                      <div className="tab-pane fade" id="featured_active" role="tabpanel">
                        <div className="tab_product_bottom_wrapper">    
                          <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-5">
                              <div className="single_product__inner inner_shop">
                                <span className="new_badge">new</span>
                                <span className="discount_price">-5%</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/207.jpg" alt="" />
                                  </a>
                                </div>
                              </div> 
                            </div> 
                            <div className="col-lg-8 col-md-7 col-sm-7">
                              <div className="product__content text-left">
                                <div className="produc_desc_info">
                                  <div className="product_title title_shop">
                                    <h4><a href="product-details.html">Cheese Butter Burger</a></h4>
                                  </div>
                                  <div className="product_price price_shop">
                                    <p className="regular_price">$65.51</p>
                                    <p>$75.66</p>
                                  </div>
                                  <div className="product_content_shop">
                                    <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                                  </div>
                                </div>
                                <div className="product__hover hover_shop">
                                  <div className="product_addto_cart">
                                    <button type="submit">ADD TO CART</button> 
                                  </div>
                                  <div className="product_cart_icone">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab_product_bottom_wrapper">    
                          <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-5">
                              <div className="single_product__inner inner_shop">
                                <span className="new_badge">new</span>
                                <span className="discount_price">-5%</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/7.jpg" alt="" />
                                  </a>
                                </div>
                              </div> 
                            </div> 
                            <div className="col-lg-8 col-md-7 col-sm-7">
                              <div className="product__content text-left">
                                <div className="produc_desc_info">
                                  <div className="product_title title_shop">
                                    <h4><a href="product-details.html">Cheese Butter Burger</a></h4>
                                  </div>
                                  <div className="product_price price_shop">
                                    <p className="regular_price">$65.51</p>
                                    <p>$75.66</p>
                                  </div>
                                  <div className="product_content_shop">
                                    <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                                  </div>
                                </div>
                                <div className="product__hover hover_shop">
                                  <div className="product_addto_cart">
                                    <button type="submit">ADD TO CART</button> 
                                  </div>
                                  <div className="product_cart_icone">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="tab_product_bottom_wrapper">    
                          <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-5">
                              <div className="single_product__inner inner_shop">
                                <span className="new_badge">new</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/6.jpg" alt="" />
                                  </a>
                                </div>
                              </div> 
                            </div> 
                            <div className="col-lg-8 col-md-7 col-sm-7">
                              <div className="product__content text-left">
                                <div className="produc_desc_info">
                                  <div className="product_title title_shop">
                                    <h4><a href="product-details.html">Cheese Butter Burger</a></h4>
                                  </div>
                                  <div className="product_price price_shop">
                                    <p className="regular_price">$65.51</p>
                                    <p>$75.66</p>
                                  </div>
                                  <div className="product_content_shop">
                                    <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                                  </div>
                                </div>
                                <div className="product__hover hover_shop">
                                  <div className="product_addto_cart">
                                    <button type="submit">ADD TO CART</button> 
                                  </div>
                                  <div className="product_cart_icone">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="tab_product_bottom_wrapper">    
                          <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-5">
                              <div className="single_product__inner inner_shop">
                                <span className="new_badge">new</span>
                                <span className="discount_price">-5%</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/5.jpg" alt="" />
                                  </a>
                                </div>
                              </div> 
                            </div> 
                            <div className="col-lg-8 col-md-7 col-sm-7">
                              <div className="product__content text-left">
                                <div className="produc_desc_info">
                                  <div className="product_title title_shop">
                                    <h4><a href="product-details.html">Cheese Butter Burger</a></h4>
                                  </div>
                                  <div className="product_price price_shop">
                                    <p className="regular_price">$65.51</p>
                                    <p>$75.66</p>
                                  </div>
                                  <div className="product_content_shop">
                                    <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                                  </div>
                                </div>
                                <div className="product__hover hover_shop">
                                  <div className="product_addto_cart">
                                    <button type="submit">ADD TO CART</button> 
                                  </div>
                                  <div className="product_cart_icone">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="tab_product_bottom_wrapper">    
                          <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-5">
                              <div className="single_product__inner inner_shop">
                                <span className="new_badge">new</span> 
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/4.jpg" alt="" />
                                  </a>
                                </div>
                              </div> 
                            </div> 
                            <div className="col-lg-8 col-md-7 col-sm-7">
                              <div className="product__content text-left">
                                <div className="produc_desc_info">
                                  <div className="product_title title_shop">
                                    <h4><a href="product-details.html">Cheese Butter Burger</a></h4>
                                  </div>
                                  <div className="product_price price_shop">
                                    <p className="regular_price">$65.51</p>
                                    <p>$75.66</p>
                                  </div>
                                  <div className="product_content_shop">
                                    <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                                  </div>
                                </div>
                                <div className="product__hover hover_shop">
                                  <div className="product_addto_cart">
                                    <button type="submit">ADD TO CART</button> 
                                  </div>
                                  <div className="product_cart_icone">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="tab_product_bottom_wrapper">    
                          <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-5">
                              <div className="single_product__inner inner_shop">
                                <span className="new_badge">new</span>
                                <span className="discount_price">-5%</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/2.jpg" alt="" />
                                  </a>
                                </div>
                              </div> 
                            </div> 
                            <div className="col-lg-8 col-md-7 col-sm-7">
                              <div className="product__content text-left">
                                <div className="produc_desc_info">
                                  <div className="product_title title_shop">
                                    <h4><a href="product-details.html">Cheese Butter Burger</a></h4>
                                  </div>
                                  <div className="product_price price_shop">
                                    <p className="regular_price">$65.51</p>
                                    <p>$75.66</p>
                                  </div>
                                  <div className="product_content_shop">
                                    <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                                  </div>
                                </div>
                                <div className="product__hover hover_shop">
                                  <div className="product_addto_cart">
                                    <button type="submit">ADD TO CART</button> 
                                  </div>
                                  <div className="product_cart_icone">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="tab_product_bottom_wrapper">    
                          <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-5">
                              <div className="single_product__inner inner_shop">
                                <span className="new_badge">new</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/1.jpg" alt="" />
                                  </a>
                                </div>
                              </div> 
                            </div> 
                            <div className="col-lg-8 col-md-7 col-sm-7">
                              <div className="product__content text-left">
                                <div className="produc_desc_info">
                                  <div className="product_title title_shop">
                                    <h4><a href="product-details.html">Cheese Butter Burger</a></h4>
                                  </div>
                                  <div className="product_price price_shop">
                                    <p className="regular_price">$65.51</p>
                                    <p>$75.66</p>
                                  </div>
                                  <div className="product_content_shop">
                                    <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                                  </div>
                                </div>
                                <div className="product__hover hover_shop">
                                  <div className="product_addto_cart">
                                    <button type="submit">ADD TO CART</button> 
                                  </div>
                                  <div className="product_cart_icone">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
                                    </ul>
                                  </div>    
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="tab_product_bottom_wrapper">    
                          <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-5">
                              <div className="single_product__inner inner_shop">
                                <span className="new_badge">new</span>
                                <span className="discount_price">-5%</span>
                                <div className="product_img">
                                  <a href="#">
                                    <img src="assets/img/product/103.jpg" alt="" />
                                  </a>
                                </div>
                              </div> 
                            </div> 
                            <div className="col-lg-8 col-md-7 col-sm-7">
                              <div className="product__content text-left">
                                <div className="produc_desc_info">
                                  <div className="product_title title_shop">
                                    <h4><a href="product-details.html">Cheese Butter Burger</a></h4>
                                  </div>
                                  <div className="product_price price_shop">
                                    <p className="regular_price">$65.51</p>
                                    <p>$75.66</p>
                                  </div>
                                  <div className="product_content_shop">
                                    <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                                  </div>
                                </div>
                                <div className="product__hover hover_shop">
                                  <div className="product_addto_cart">
                                    <button type="submit">ADD TO CART</button> 
                                  </div>
                                  <div className="product_cart_icone">
                                    <ul>
                                      <li><a href="#"><i className="ion-android-cart" /></a></li>
                                      <li><a className="cart-fore" href="#" data-toggle="modal" data-target="#my_modal" title="Quick View"><i className="ion-android-open" /></a></li>
                                      <li><a href="product-details.html"><i className="ion-clipboard" /></a></li>
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
                  <div className="shop_pagination">
                    <div className="row align-items-center">   
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="total_item_shop">
                          Showing 13-14 of 14 item(s) 
                        </div>
                      </div>
                      <div className="col-lg-6 offset-lg-2 col-md-6 col-sm-6">
                        <div className="page_list_clearfix text-center">
                          <ul>
                            <li className="prev"><a href="#"><i className="zmdi zmdi-chevron-left" /> Previous</a></li>
                            <li><a href="#">1</a></li>
                            <li className="current_page"><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li className="next"><a href="#"> Next <i className="zmdi zmdi-chevron-right" /></a></li>
                          </ul> 
                        </div>         
                      </div>
                    </div>          
                  </div>
                </div> 
              </div>
            </div>
          </div>   
          {/*- shop_wrapper area end  */}
          {/*Brand logo start*/}  
          <div className="brand_logo">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="brand_list_carousel owl-carousel shop_page">
                    <div className="single_brand_logo">
                      <a href="#">
                        <img src="assets/img/brand/1.png" alt="brand logo" />
                      </a>
                    </div>
                    <div className="single_brand_logo">
                      <a href="#">
                        <img src="assets/img/brand/2.png" alt="brand logo" />
                      </a>
                    </div>
                    <div className="single_brand_logo">
                      <a href="#">
                        <img src="assets/img/brand/3.png" alt="brand logo" />
                      </a>
                    </div>
                    <div className="single_brand_logo">
                      <a href="#">
                        <img src="assets/img/brand/4.png" alt="brand logo" />
                      </a>
                    </div>
                    <div className="single_brand_logo">
                      <a href="#">
                        <img src="assets/img/brand/5.png" alt="brand logo" />
                      </a>
                    </div>
                    <div className="single_brand_logo">
                      <a href="#">
                        <img src="assets/img/brand/1.png" alt="brand logo" />
                      </a>
                    </div>
                    <div className="single_brand_logo">
                      <a href="#">
                        <img src="assets/img/brand/2.png" alt="brand logo" />
                      </a>
                    </div>
                    <div className="single_brand_logo">
                      <a href="#">
                        <img src="assets/img/brand/3.png" alt="brand logo" />
                      </a>
                    </div>
                    <div className="single_brand_logo">
                      <a href="#">
                        <img src="assets/img/brand/4.png" alt="brand logo" />
                      </a>
                    </div>
                    <div className="single_brand_logo">
                      <a href="#">
                        <img src="assets/img/brand/5.png" alt="brand logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          {/*Brand logo end*/}
        </div> 
        </div>
        </div>
    )
}
