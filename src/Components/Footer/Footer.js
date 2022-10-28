import { useState } from "react"
import FooterItem from "./Footer.jsx"
import "./Footer.css"
export const Footer = () => {
    const[list] = useState(FooterItem)
    return(
        <>
            <section className="info_section layout_padding">
                <div className="container links_container">
                    <div className="row">
                        {list.map((Elem) => {
                            return(
                                <div className="col col-md-3">
                                    <h3>{Elem.heading}</h3>
                                    <ul>
                                        <li>
                                            <a href="">{Elem.title1}</a>
                                        </li>
                                        <li>
                                            <a href="">{Elem.title2}</a>
                                        </li>
                                        <li>
                                            <a href="">{Elem.title3}</a>
                                        </li>
                                        <li>
                                            <a href="">{Elem.title4}</a>
                                        </li>
                                        <li>
                                            <a href="">{Elem.title5}</a>
                                        </li>
                                        <li>
                                            <a href="">{Elem.title6}</a>
                                        </li>
                                    </ul>
                                </div>
                            )
                            
                        })}
                        
                    </div>
                </div>
                
                <div className="container">
                    <div className="follow_container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="app_container d-flex align-center">
                                    <h3>DOWNLOAD OUR APPS</h3>
                                </div>
                                <div className="d-flex align-center">
                                    <img src="images/google-play.png" />
                                    <img src="images/apple-store.png" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info_social">
                                    <div>
                                        <a href="">
                                            <img src="images/fb.png" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img src="images/twitter.png" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img src="images/linkedin.png" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <img src="images/instagram.png" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid footer_section">
                <p className="p-1">
                    copyright &copy; 2022 All Reserved By
                    <a href="https://www.youtube.com/channel/UCOvxBONcR2tHE1ISGPRNNDg">Shamskhus</a>
                </p>
            </section>
        </>
    )
}