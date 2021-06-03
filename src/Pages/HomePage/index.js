import React from 'react'

export default function Home() {
    console.log("Home")
    return (
        <div>
                {/*Slider start*/}
            <div className="slider_area">
                <div className="slider_list  owl-carousel">
                <div className="single_slide" style={{backgroundImage: 'url(assets/img/slider/1.jpg)'}}>
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="slider__content">
                            <p>Exclusive Offer -10% Off This Week</p>
                            <h2>Live <strong>healthy</strong> with a glass</h2>
                            <h3>of <strong>fruit juice</strong> every day</h3>  
                            <h6>Starting at<span>$42.99</span></h6>
                            <div className="slider_btn">
                            <a href="shop.html">Shopping now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="single_slide" style={{backgroundImage: 'url(assets/img/slider/2.jpg)'}}>
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="slider__content">
                            <p>Exclusive Offer -10% Off This Week</p>
                            <h2>We <strong>provide</strong> the best</h2> 
                            <h3> product <strong> for you </strong></h3>
                            <h6>Starting at <span>$42.99</span></h6>
                            <div className="slider_btn">
                            <a href="shop.html">Shopping now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
      {/*Slider end*/}
            
                {/*Banner area start*/}
            <div className="banner_area home1_banner mt-30">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single_banner">
                    <a href="#">
                        <img src="assets/img/banner/1.jpg" alt="" />
                    </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_banner">
                    <a href="#">
                        <img src="assets/img/banner/1.jpg" alt="" />
                    </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_banner banner_three">
                    <a href="#">
                        <img src="assets/img/banner/1.jpg" alt="" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/*Banner area end*/}
            {/*Features product area*/}
            <div className="features_product pt-90">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12">
                    <div className="section_title text-center">
                    <h3> Featured products </h3>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="features_product_active owl-carousel">
                    <div className="col-lg-2">
                    <div className="single__product">
                        <div className="single_product__inner">
                        <span className="new_badge">new</span>
                        <div className="product_img">
                            <a href="#">
                            <img src="assets/img/product/2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product__content text-center">
                            <div className="produc_desc_info">
                            <div className="product_title">
                                <h4><a href="product-details.html">Cheese Butter Burger</a></h4>
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
                    <div className="col-lg-2">
                    <div className="single__product">
                        <div className="single_product__inner">
                        <span className="new_badge">new</span>
                        <span className="discount_price">-5%</span>
                        <div className="product_img">
                            <a href="#">
                            <img src="assets/img/product/3.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product__content text-center">
                            <div className="produc_desc_info">
                            <div className="product_title">
                                <h4><a href="product-details.html">Sprite Yoga Straps1</a></h4>
                            </div>
                            <div className="product_price">
                                <p>$65.66</p>
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
                    <div className="col-lg-2">
                    <div className="single__product">
                        <div className="single_product__inner">
                        <span className="new_badge">new</span>
                        <div className="product_img">
                            <a href="#">
                            <img src="assets/img/product/4.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product__content text-center">
                            <div className="produc_desc_info">
                            <div className="product_title">
                                <h4><a href="product-details.html">Wayfarer Messenger Bag</a></h4>
                            </div>
                            <div className="product_price">
                                <p>$57.66</p>
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
                    <div className="col-lg-2">
                    <div className="single__product">
                        <div className="single_product__inner">
                        <span className="new_badge">new</span>
                        <div className="product_img">
                            <a href="#">
                            <img src="assets/img/product/5.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product__content text-center">
                            <div className="produc_desc_info">
                            <div className="product_title">
                                <h4><a href="product-details.html">Impulse Duffle</a></h4>
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
                    <div className="col-lg-2">
                    <div className="single__product">
                        <div className="single_product__inner">
                        <span className="new_badge">new</span>
                        <div className="product_img">
                            <a href="#">
                            <img src="assets/img/product/6.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product__content text-center">
                            <div className="produc_desc_info">
                            <div className="product_title">
                                <h4><a href="product-details.html">Fusce nec facilisi</a></h4>
                            </div>
                            <div className="product_price">
                                <p>$88.66</p>
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
                    <div className="col-lg-2">
                    <div className="single__product">
                        <div className="single_product__inner">
                        <span className="new_badge">new</span>
                        <span className="discount_price">-5%</span>
                        <div className="product_img">
                            <a href="#">
                            <img src="assets/img/product/7.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product__content text-center">
                            <div className="produc_desc_info">
                            <div className="product_title">
                                <h4><a href="product-details.html">Chaz Kangeroo Hoodie3</a></h4>
                            </div>
                            <div className="product_price">
                                <p>$99.66</p>
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
                    <div className="col-lg-2">
                    <div className="single__product">
                        <div className="single_product__inner">
                        <span className="new_badge">new</span>
                        <div className="product_img">
                            <a href="#">
                            <img src="assets/img/product/8.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product__content text-center">
                            <div className="produc_desc_info">
                            <div className="product_title">
                                <h4><a href="product-details.html">Donec sem tellus</a></h4>
                            </div>
                            <div className="product_price">
                                <p>$80.66</p>
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
                    <div className="col-lg-2">
                    <div className="single__product">
                        <div className="single_product__inner">
                        <span className="new_badge">new</span>
                        <div className="product_img">
                            <a href="#">
                            <img src="assets/img/product/9.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product__content text-center">
                            <div className="produc_desc_info">
                            <div className="product_title">
                                <h4><a href="product-details.html">Healthy Melt</a></h4>
                            </div>
                            <div className="product_price">
                                <p>$90.66</p>
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
                    <div className="col-lg-2">
                    <div className="single__product">
                        <div className="single_product__inner">
                        <span className="new_badge">new</span>
                        <span className="discount_price">-5%</span>
                        <div className="product_img">
                            <a href="#">
                            <img src="assets/img/product/10.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product__content text-center">
                            <div className="produc_desc_info">
                            <div className="product_title">
                                <h4><a href="product-details.html">Mushroom Burger</a></h4>
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
                </div>
                </div>
            </div>
            </div>
            {/*Features product end*/}
            {/*Shipping area start*/}
            <div className="shipping_area">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12">
                    <div className="shipping_list d-flex justify-content-between flex-xs-column">
                    <div className="single_shipping_box d-flex">
                        <div className="shipping_icon">
                        <img src="assets/img/ship/1.png" alt="shipping icon" />
                        </div>
                        <div className="shipping_content">
                        <h6>Free Shipping On Order Over $120</h6>
                        <p>Free shipping on all order</p>
                        </div>
                    </div>
                    <div className="single_shipping_box one d-flex">
                        <div className="shipping_icon">
                        <img src="assets/img/ship/2.png" alt="shipping icon" />
                        </div>
                        <div className="shipping_content">
                        <h6>Money Return</h6>
                        <p>Back guarantee under 7 days</p>
                        </div>
                    </div>
                    <div className="single_shipping_box two d-flex">
                        <div className="shipping_icon">
                        <img src="assets/img/ship/3.png" alt="shipping icon" />
                        </div>
                        <div className="shipping_content">
                        <h6>Member Discount</h6>
                        <p>Support online 24 hours a day</p>
                        </div>
                    </div>
                    <div className="single_shipping_box three d-flex">
                        <div className="shipping_icon">
                        <img src="assets/img/ship/4.png" alt="shipping icon" />
                        </div>
                        <div className="shipping_content">
                        <h6>Online Support 24/7</h6>
                        <p>Free shipping on all order</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/*Shipping area end*/}



        </div>
    )
}
