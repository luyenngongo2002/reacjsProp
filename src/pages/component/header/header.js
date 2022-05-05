import React, { Component } from "react";
class Header extends Component {
    render() {
        return (
            <div>
                <header className="header bg">
                    <div className="container text-white">
                        <div className="row">
                        <div className="col-sm-2 col-0 align-self-center box-1">
                        </div>
                        <div className="col-sm-10 col-12 align-self-center text-right">
                            <div className="social-icons">
                            <ul>
                                <li>email: info@bldrtheme.com</li>
                                <li>Call Us Now : 800 123 456 7890</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        {/*/row*/}
                    </div>
                    {/*container*/}
                </header>
            </div>
        );
    }
}
export default Header;// xuất ra
