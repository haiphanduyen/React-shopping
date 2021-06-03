import React from 'react'

export default function Point() {
    return (
        <div>
        {/*organicfood wrapper end*/}
        {/*breadcrumb area start*/}
        <div className="breadcrumb_container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">     
                <nav>
                  <ul>
                    <li>
                      <a href="index.html">Home &gt;</a>
                    </li>
                    <li>Wishlist </li>
                  </ul>
                </nav>
              </div>
            </div> 
          </div>        
        </div>
        {/*breadcrumb area end*/}
        <div className="cart_main_area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">  
                  <div className="table-content table-responsive table-wishlist">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-remove one">STT</th>
                          <th className="img-thumbnail">Image</th>
                          <th className="product-name">Product Name</th>
                          <th className="product-price four">Point </th>
                          <th className="product-stock-stauts">Stock    Status </th>
                          <th className="product-add-cart wishlist">Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-remove"><a href="#">1</a></td>
                          <td className="product-thumbnail"><img src="assets/img/product/1.jpg" alt="" /></td>
                          <td className="product-name"><a href="#">Vestibulum suscipit</a></td>
                          <td className="product-price"><span className="amount">1000</span></td>
                          <td className="product-stock-stauts">In Stock</td>
                          <td className="product-add-cart wishlist"><a href="#"> Change</a></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td className="product-remove"><a href="#">2</a></td>
                          <td className="product-thumbnail"><img src="assets/img/product/1.jpg" alt="" /></td>
                          <td className="product-name"><a href="#">Vestibulum dictum magna</a></td>
                          <td className="product-price"><span className="amount">2000</span></td>
                          <td className="product-stock-stauts">In Stock</td>
                          <td className="product-add-cart wishlist"><a href="#"> Changet</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>         
              </div> 
              <div className="col-12">
                <div className="wishlist-share">
                  <h4>Share on:</h4>
                  <div className="social-icon">
                    <ul>
                      <li><a href="#"><i className="zmdi zmdi-rss" /></a></li>           
                      <li><a href="#"><i className="zmdi zmdi-vimeo" /></a></li>           
                      <li><a href="#"><i className="zmdi zmdi-tumblr" /></a></li>           
                      <li><a href="#"><i className="zmdi zmdi-pinterest" /></a></li>        
                      <li><a href="#"><i className="zmdi zmdi-linkedin" /></a></li>        
                    </ul>    
                  </div>    
                </div>
              </div>   
            </div>    
          </div>   
        </div>
        {/*organicfood wrapper start*/}
      </div>
    )
}
