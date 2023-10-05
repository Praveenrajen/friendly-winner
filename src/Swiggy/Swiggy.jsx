import React from "react";
import '../Swiggy.css';
const Swiggy = () => {



    return (
        <div className="Main">
            {/* container1 starts */}
            <div className="container1" >
                <div className="c1Left">
                    {/* container1 with logo and login */}
                <div className="c1Left1">
                    {/* inside c1left another container having logo and login */}
                    <div className="c1Left2">
                        <img src="Swiggy_logo.png" alt="" height="55px" width="180px" id="logo"/>
                        
                            <pre className="button"><button id="BT1">Login</button>  <button id="BT2">Sign Up</button></pre>
                    

                    </div>
                    <div className="c1OrderFood">
                        <h1>UNEXPECTED GUESTS?</h1>
                      <h4 id="">Order food from favourite restaurants near you.</h4>
                    </div>
                    <div className="c1Input"> 

                    <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{height:"50px",width:"75%",display:"flex",alignItems:"center"}}>
                     <input type="text"   style={{height:"50px",width:"75%",outline:"none",borderColor:"transparent"}}  placeholder="Enter Your Delivery Location" />

                        </div>

                                
                        <div style={{width:"25%" ,height:"100%"}}>
                   <p>Locate me</p>

                        </div>
                    </div>
    
                     <button className="findMeBut">FIND ME</button>
                     {/* <a href="" id="findme">FIND ME</a> */}
                    </div>

                    <div className="c1bottom">
                      <h3>POPULAR CITIES IN INDIA</h3>

                      <span>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai 
                        Pune& more.</span>
                    </div>
                </div>    
                

                </div>
                <div className="c1Right">
                    <img src="./Food.jpg" alt="" height="100%" width="100%" />
                </div>

            </div>
            {/* container2 starts  */}
            <div className="container2">
                <img src="container2_img.png" alt="" height="100%" width="100%" />
            </div>

            {/* container3 starts */}
            <div className="container3">
                <div className="c3ContentPart">
                    <div className="c3border">
                    <div className="c3Left">
                        {/* child containers of container3 left side  */}
                        <div className="text1">
                            <h1>RESTRURANTS IN YOUR POCKETS</h1>
                        </div>
                        <div className="text2">
                         <p>Order from your favorite restaurants & track 
                            on the go,with the all-new Swiggy app.</p>
                        </div>
                    </div>
                        <div className="c3img">
                          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" height="54px" width="180px" />
                          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt=""  height="54px" width="180px"/>
                        </div>
                    </div>
                </div>

                <div className="c3ImgPart">
                    <div className="c3Image1">
                        <img src="phone_image1.webp" alt=""  height="80%" width="90%" />
                    </div>
                    <div className="c3Image2" >
                        <img src="phone_image2.webp" alt="" style={{display:"block",margin:"auto"}} height="80%" width="90%" />
                    </div>
                </div>
            </div>
            {/* container4 starts */}
            <div className="container4">
              <div className="c4Company">
                <h4>COMPANY</h4>
                   <ul className="c4list"> 
                    <li>About us</li>
                    <li>Team</li>
                    <li>Careers</li>
                    <li>Swiggy Blog</li>
                    <li>Bug Bounty</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Corporate</li>
                    <li>Swiggy Instamart</li>
                    <li>Swiggy Genie</li>
                    
                   </ul>
              </div>
              {/* container4 contact text starts */}
              <div className="c4Contact">
                <h4>CONTACT</h4>
               <ul>
                 <li>Help & Support</li>
                 <li>Partner with us</li>
                 <li>Ride with us</li>
               </ul>
              </div>

              <div className="c4Legal">
                <h4>LEGAL</h4>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Refund & Cancellation</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Offer Terms</li>
                    <li>Phishing & Fraud</li>
                    <li>Corporate - Swiggy Money Codes Terms and Conditions</li>
                    <li>Corporate - Swiggy Discount Voucher Terms and Conditions</li>
                </ul>

              </div>
              <div className="c4img">
                <img src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" height="50px" width="65px" />
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" height="50px" width="65px" />

              </div>
            </div>

        </div>
    )


}
export default Swiggy