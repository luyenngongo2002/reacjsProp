import React, { Component } from "react";
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer">
          {/* Footer Links */}
          <div className="container text-center text-md-left">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-lg-4 col-md-12 mx-auto">
                <img src="images/logo-footer.png" alt="footer" />
                {/* Content */}
                <p>© 2018. Rights Reserved <span>Designed by Template.net</span></p>
              </div>
              {/* Grid column */}
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  {/* Grid column */}
                  <div className="col-md-4 mx-auto">
                    {/* Links */}
                    <h5 className="font-weight-bold text-uppercase mt-3">Site Navigation</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="index.html">go to home</a>
                      </li>
                      <li>
                        <a href="services.html">services</a>
                      </li>
                      <li>
                        <a href="projects.html">portfolio</a>
                      </li>
                      <li>
                        <a href="#!">read blog</a>
                      </li>
                      <li>
                        <a href="contact.html">contact us</a>
                      </li>
                      <li>
                        <a href="support.html">product support</a>
                      </li>
                    </ul>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-4 mx-auto">
                    {/* Links */}
                    <h5 className="font-weight-bold text-uppercase mt-3">information</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#!">user login</a>
                      </li>
                      <li>
                        <a href="#!">creat new account</a>
                      </li>
                      <li>
                        <a href="#!">checkout</a>
                      </li>
                      <li>
                        <a href="#!">other information</a>
                      </li>
                    </ul>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-4 mx-auto">
                    {/* Links */}
                    <h5 className="font-weight-bold text-uppercase mt-3">policies &amp; Info</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#!">Terms Conditions </a>
                      </li>
                      <li>
                        <a href="#!">website polocy</a>
                      </li>
                      <li>
                        <a href="#!">Policy for Sellers </a>
                      </li>
                      <li>
                        <a href="#!">Policy for Buyers </a>
                      </li>
                      <li>
                        <a href="#!">Shipping &amp; Refund</a>
                      </li>
                      <li>
                        <a href="#!">Wholesale Policy </a>
                      </li>
                    </ul>
                  </div>
                  {/* Grid column */}
                </div>
              </div>
            </div>
            {/* Grid row */}
          </div>
          {/* Footer Links */}
    </footer>

            </div>
        );
    }
}
export default Footer;