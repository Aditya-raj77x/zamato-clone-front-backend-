import footerCss from './Footer.module.css';



const Footer = () => {
    return <div className={footerCss.footer}>
        <div className={footerCss.innerFooter}>
            <div className={footerCss.sec1}>
                <div className={footerCss.logoBox}>
                    <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*' alt='zLOGO' />
                </div>
                <div className={footerCss.filters}>
                    <div className={footerCss.filterBox}> <span>
                        <img className={footerCss.icon} src="https://img.freepik.com/premium-photo/india-flag-background-design-independence-day-other-celebration_46250-2225.jpg?w=2000" alt="india flag" />
                    </span>
                        <span>India</span>
                        <span className={footerCss.arrow} >&#709;</span></div>
                    <div className={footerCss.filterBox}><span>🌐<span></span> English</span> <span className={footerCss.arrow} >&#709;</span></div>
                </div>
            </div>
            <div className={footerCss.sec2}>
                <div className={[footerCss.box1, footerCss.box].join(' ')}>
                    <div className={footerCss.boxTtl}>ABOUT ZOMATO</div>
                    <p className={footerCss.boxOpt}>Who We Are</p>
                    <p className={footerCss.boxOpt}>Blog</p>
                    <p className={footerCss.boxOpt}>Work With Us</p>
                    <p className={footerCss.boxOpt}>Investor Relations</p>
                    <p className={footerCss.boxOpt}>Report Fraud</p>
                </div>
                <div className={[footerCss.box2, footerCss.box].join(' ')}>
                    <div className={footerCss.boxTtl}>ZOMAVERSE</div>
                    <p className={footerCss.boxOpt}>Tomato</p>
                    <p className={footerCss.boxOpt}>Feeding India</p>
                    <p className={footerCss.boxOpt}>Hyperpure</p>
                    <p className={footerCss.boxOpt}>Tomaland</p>
                </div>
                <div className={[footerCss.box3, footerCss.box].join(' ')}>
                    <div className={footerCss.boxTtl}>FOR RESTAURANTS</div>
                    <p className={footerCss.boxOpt}>Partner With Us</p>
                    <p className={footerCss.boxOpt}>Apps For You</p>

                    <div className={footerCss.boxTtl}>FOR ENTERPRISES</div>
                    <p className={footerCss.boxOpt}>Tomato For Work</p>
                </div>
                <div className={[footerCss.box4, footerCss.box].join(' ')}>
                    <div className={footerCss.boxTtl}>LEARN MORE</div>
                    <p className={footerCss.boxOpt}>Privacy</p>
                    <p className={footerCss.boxOpt}>Security</p>
                    <p className={footerCss.boxOpt}>Terms</p>
                    <p className={footerCss.boxOpt}>Sitemap</p>
                </div>
                <div className={[footerCss.box5, footerCss.box].join(' ')}>
                    <div className={footerCss.boxTtl}>SOCIAL LINKS</div>
                    <div className={footerCss.socialImgs} >

                        <img className={footerCss.socialImg} src="https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg" alt="linkedin" />


                        <img className={footerCss.socialImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-BV-OXO554TQCuVLqoep1x5XCp_vnoQJQw&usqp=CAU" alt="instagram" />


                        <img className={footerCss.socialImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Jjr58CYBhk9jOz-HkysG4Yp8kUDwKKDEBw&usqp=CAU" alt="facebook" />


                        <img className={footerCss.socialImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSim07tNm3BnoSIHdCMPyajKyF3JUlewMWpMQ&usqp=CAU" alt="twitter" />


                        <img className={footerCss.socialImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZp1M9sUPvhPYcVJQfX0LcvyQtJ6giuSiZkA&usqp=CAU" alt="youtube" />

                    </div>
                    <p className={footerCss.app}><img className={footerCss.appImg} src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="google play store" /></p>
                    <p className={footerCss.app}><img className={footerCss.appImg} src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="apple app store" /></p>
                </div>
            </div>
            <hr className={footerCss.breakLine} />
            <div className={footerCss.sec3}>
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.
            </div>
        </div>
    </div>
}

export default Footer;