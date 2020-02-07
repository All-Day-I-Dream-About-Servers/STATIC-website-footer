import React from 'react';
import ReactDOM from 'react-dom';

const Footer = () => {
  return (
    <div className="adidas-footer">
      <div className="signup-bar">
        <div className="signup-bar-wrapper">
          <div className="signup-text signup-bar-div">
            <h4>STAY IN THE KNOW WITH ADIDAS!</h4>
          </div>
          <div className="signup-bar-div">
            <div className="signup-btn-outline">
              <button className="footer-signup-btn"> <div className="footer-signup-btn-text">SIGN UP</div> <svg className="footer-signup-btn-icon"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" shapeRendering="crispEdges" /> </svg> </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-nav">
        <div className="footer-nav-content">
          <div className="footer-nav-col">
            <h3>trending</h3>
            <div className="footer-nav-row footer-fake-link">Casual Shoes</div>
            <div className="footer-nav-row footer-fake-link">Slip On Shoes</div>
            <div className="footer-nav-row footer-fake-link">Burgundy Shoes</div>
            <div className="footer-nav-row footer-fake-link">Leather Sneakers</div>
          </div>
          <div className="footer-nav-col">
            <h4 className="footer-fake-link">customer support</h4>
            <div className="footer-nav-row footer-fake-link">Get Help</div>
            <div className="footer-nav-row footer-fake-link">Track Order</div>
            <div className="footer-nav-row footer-fake-link">Returns &amp; Refunds</div>
            <div className="footer-nav-row footer-fake-link">Sizing</div>
            <div className="footer-nav-row footer-fake-link">Promotions</div>
            <div className="footer-nav-row footer-fake-link">Hot to Clean</div>
            <div className="footer-nav-row footer-fake-link">Bra Fit Guide</div>
            <div className="footer-nav-row footer-fake-link">Store Locator</div>
            <div className="footer-nav-row footer-fake-link">Site Map</div>
          </div>
          <div className="footer-nav-col">
            <h3 className="footer-fake-link">company info</h3>
            <div className="footer-nav-row footer-fake-link">About Us</div>
            <div className="footer-nav-row footer-fake-link">Careers</div>
            <div className="footer-nav-row footer-fake-link">Press</div>
            <div className="footer-nav-row footer-fake-link">Affiliates</div>
            <div className="footer-nav-row footer-fake-link">Military Discount</div>
            <div className="footer-nav-row footer-fake-link">Student Discount</div>
            <div className="footer-nav-row footer-fake-link">Mobile Apps</div>
            <div className="footer-nav-row footer-fake-link">Creators Club</div>
            <div className="footer-nav-row footer-fake-link">adidas Stories</div>
          </div>
          <div className="footer-nav-col">
            <div className="footer-nav-col-row">
              <h3>partner sites</h3>
              <div className="footer-nav-row footer-fake-link">adidas Outdoor</div>
              <div className="footer-nav-row footer-fake-link">miTeam</div>
            </div>
            <div className="footer-nav-col-row">
              <h3>privacy &amp; terms</h3>
              <div className="footer-nav-row footer-fake-link">Privacy &amp; Security</div>
              <div className="footer-nav-row footer-fake-link">Terms and Conditions</div>
              <div className="footer-nav-row footer-fake-link">Policy on Human Trafficking</div>
            </div>
          </div>
          <div className="footer-nav-col">
            <h3 className="footer-fake-link">gift cards</h3>
            <div className="footer-nav-row footer-fake-link">Check Balance</div>
          </div>
        </div>
      </div>
      <div className="footer-nav-bottom">
        <div className="footer-nav-bottom-inner">
          <div className="footer-bottom-country">
            <img src="https://adl-foundation.adidas.com/prod/v23.0.0/assets/flags/us.svg" alt="us flag" />
            USA
          </div>
          <div className="footer-bottom-links">
            <span className="footer-bottom-link-pointer">Data settings</span>
            <span className="footer-bottom-link-separator">|</span>
            <span className="footer-bottom-link-pointer">Do not sell my personal information</span>
            <span className="footer-bottom-link-separator">|</span>
            <span className="footer-bottom-link-pointer">Privacy Policy Terms and Conditions</span>
            <span className="footer-bottom-link-separator">|</span>
            <span>©2020 adidas America Inc.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Footer />, document.getElementById('footer'));