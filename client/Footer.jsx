import React from 'react';
import ReactDOM from 'react-dom';

const Footer = () => {
  return (
    <div class="adidas-footer">
      <div class="signup-bar">
        <div class="signup-bar-wrapper">
          <div class="signup-text signup-bar-div">
            <h4>STAY IN THE KNOW WITH ADIDAS!</h4>
          </div>
          <div class="signup-bar-div">
            <div class="signup-btn-outline">
              <button class="footer-signup-btn"> <div class="footer-signup-btn-text">SIGN UP</div> <svg class="footer-signup-btn-icon"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" shape-rendering="crispEdges" /> </svg> </button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-nav">
        <div class="footer-nav-content">
          <div class="footer-nav-col">
            <h3>trending</h3>
            <div class="footer-nav-row footer-fake-link">Casual Shoes</div>
            <div class="footer-nav-row footer-fake-link">Slip On Shoes</div>
            <div class="footer-nav-row footer-fake-link">Burgundy Shoes</div>
            <div class="footer-nav-row footer-fake-link">Leather Sneakers</div>
          </div>
          <div class="footer-nav-col">
            <h4 class="footer-fake-link">customer support</h4>
            <div class="footer-nav-row footer-fake-link">Get Help</div>
            <div class="footer-nav-row footer-fake-link">Track Order</div>
            <div class="footer-nav-row footer-fake-link">Returns &amp; Refunds</div>
            <div class="footer-nav-row footer-fake-link">Sizing</div>
            <div class="footer-nav-row footer-fake-link">Promotions</div>
            <div class="footer-nav-row footer-fake-link">Hot to Clean</div>
            <div class="footer-nav-row footer-fake-link">Bra Fit Guide</div>
            <div class="footer-nav-row footer-fake-link">Store Locator</div>
            <div class="footer-nav-row footer-fake-link">Site Map</div>
          </div>
          <div class="footer-nav-col">
            <h3 class="footer-fake-link">company info</h3>
            <div class="footer-nav-row footer-fake-link">About Us</div>
            <div class="footer-nav-row footer-fake-link">Careers</div>
            <div class="footer-nav-row footer-fake-link">Press</div>
            <div class="footer-nav-row footer-fake-link">Affiliates</div>
            <div class="footer-nav-row footer-fake-link">Military Discount</div>
            <div class="footer-nav-row footer-fake-link">Student Discount</div>
            <div class="footer-nav-row footer-fake-link">Mobile Apps</div>
            <div class="footer-nav-row footer-fake-link">Creators Club</div>
            <div class="footer-nav-row footer-fake-link">adidas Stories</div>
          </div>
          <div class="footer-nav-col">
            <div class="footer-nav-col-row">
              <h3>partner sites</h3>
              <div class="footer-nav-row footer-fake-link">adidas Outdoor</div>
              <div class="footer-nav-row footer-fake-link">miTeam</div>
            </div>
            <div class="footer-nav-col-row">
              <h3>privacy &amp; terms</h3>
              <div class="footer-nav-row footer-fake-link">Privacy &amp; Security</div>
              <div class="footer-nav-row footer-fake-link">Terms and Conditions</div>
              <div class="footer-nav-row footer-fake-link">Policy on Human Trafficking</div>
            </div>
          </div>
          <div class="footer-nav-col">
            <h3 class="footer-fake-link">gift cards</h3>
            <div class="footer-nav-row footer-fake-link">Check Balance</div>
          </div>
        </div>
      </div>
      <div class="footer-nav-bottom">
        <div class="footer-nav-bottom-inner">
          <div class="footer-bottom-country">
            <img src="https://adl-foundation.adidas.com/prod/v23.0.0/assets/flags/us.svg" alt="us flag" />
            USA
          </div>
          <div class="footer-bottom-links">
            <span class="footer-bottom-link-pointer">Data settings</span>
            <span class="footer-bottom-link-separator">|</span>
            <span class="footer-bottom-link-pointer">Do not sell my personal information</span>
            <span class="footer-bottom-link-separator">|</span>
            <span class="footer-bottom-link-pointer">Privacy Policy Terms and Conditions</span>
            <span class="footer-bottom-link-separator">|</span>
            <span>©2020 adidas America Inc.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Footer />, document.getElementById('footer'));