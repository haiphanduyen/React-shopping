import React from 'react'

export default function Footer() {
    return (
        <footer className="footer pt-90">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-xs-12">
              {/*Single Footer*/}
              <div className="single_footer widget">
                <div className="single_footer_widget_inner">
                  <div className="footer_logo">
                    <a href="#"><img src="assets/img/logo/logo_footer.png" alt="" /></a>
                  </div>
                  
                  <div className="footer_social">
                    <h4>Get in Touch:</h4>
                    <div className="footer_social_icon">
                      <a href="#"><i className="fa fa-twitter" /></a>
                      <a href="#"><i className="fa fa-google-plus" /></a>
                      <a href="#"><i className="fa fa-facebook" /></a>
                      <a href="#"><i className="fa fa-youtube" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/*Single Footer*/}
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="footer_menu_list d-flex justify-content-between">
                {/*Single Footer*/}
                <div className="single_footer widget">
                  <div className="single_footer_widget_inner">   
                    <div className="footer_title">
                      <h2>Products</h2>
                    </div>
                    <div className="footer_menu">
                      <ul>
                        <li><a href="#">Prices drop</a></li>
                        <li><a href="#"> New products</a></li>
                        <li><a href="#"> Best sales</a></li>
                        <li><a href="#"> Contact us</a></li>
                        <li><a href="#"> My account</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*Single footer end*/}   
                {/*Single footer start*/}   
                <div className="single_footer widget">
                  <div className="single_footer_widget_inner">   
                    <div className="footer_title">
                      <h2>Login</h2>
                    </div>
                    <div className="footer_menu">
                      <ul>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#"> Stores</a></li>
                        <li><a href="#"> Login</a></li>
                        <li><a href="#"> Contact us</a></li>
                        <li><a href="#"> My account</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*Single Footer end*/}
                {/*Single footer start*/}   
                <div className="single_footer widget">
                  <div className="single_footer_widget_inner">   
                    <div className="footer_title">
                      <h2> Your account </h2>
                    </div>
                    <div className="footer_menu">
                      <ul>
                        <li><a href="#">Personal info</a></li>
                        <li><a href="#"> Orders</a></li>
                        <li><a href="#"> Login</a></li>
                        <li><a href="#"> Credit slips</a></li>
                        <li><a href="#"> Addresses</a></li>
                      </ul> 
                    </div>
                  </div>
                </div>
                {/*Single Footer end*/}
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12">
              <div className="footer_title">
                <h2> Join Our Newsletter Now </h2>
              </div>
              <div className="footer_news_letter">
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <div className="newsletter_form">
                  <form action="#">
                    <input type="email" required placeholder="Your Email Address" />
                    <input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="copyright_text">
                  <p>Copyright 2018 <a href="#">Organicfood</a>. All Rights Reserved</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="footer_mastercard text-right">
                  <a href="#"><img src="assets/img/brand/payment.png" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
