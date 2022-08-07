import React from 'react'
import './Footer.css'
import {ImLinkedin2} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {MdMail} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__wrapper">
            <div className="footer__up">
                <div className="footer__up-info">
                    <img src="https://assets-global.website-files.com/6027ab9296f259a23eb6d66d/60c73e8d8745561601686560_cwj-text-logo%202-white.svg" width="80" alt="Content Writing Jobs" height="27" />
                    <h4>
                        Paid content writing jobs to 
                        work from home, remotely, 
                        freelance, contract, and full-time.
                    </h4>
                    <div className="footer__up-socials">
                        <span><ImLinkedin2 /></span>
                        <span><BsTwitter /></span>
                        <span><FaFacebookF /></span>
                        <span><MdMail /></span>
                    </div>
                </div>
                <div className="footer__up-links">
                    <div className="footer__up-links_left">
                        <a href="/">Abous Us</a>
                        <a href="/">Writing Jobs</a>
                        <a href="/">Writers for Hire</a>
                        <a href="/">Newsletter</a>
                        <a href="/">Writing Blog</a>
                        <a href="/">Contact</a>
                    </div>
                    <div className="footer__up-links_right">
                        <div>
                            <a href="/">Writier Application</a>
                            <a href="/">Best Writing for Business</a>
                        </div>
                        <div>
                            <a href="/">What's New</a>
                            <a href="/">Terms</a>
                            <a href="/">Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__down">
                2020-2022 © Content Writing Jobs. Made in 🇱🇹 Lithuania, 🇩🇰 Denmark, and 🇪🇸 Spain.
            </div>
        </div>
    </div>
  )
}

export default Footer