import React from "react";
import {
  GlobalWrapper,
  LeftSpace,
  RightMainWrapper,
  Column,
} from "../styles/global.styles.js"; //Global wrapper styles
import { FooterWrapper } from "../styles/9-contact-footer.styles";

const Footer = () => {
  return (
    <GlobalWrapper>
      <LeftSpace></LeftSpace>
      <RightMainWrapper>
        <FooterWrapper>
          <div className="footer_wrapper">
            <div className="footer_text">
              <div className="header_text">
                <h2>META BIKES</h2>
              </div>

              <Column className="right_text">
                <div className="info_text">
                  <p>
                    ADDRESS:
                    <br></br>
                    Manchester | Liverpool
                  </p>
                  <p>
                    PHONE:
                    <br></br>
                    +44 (0)7070707074
                  </p>
                  <p>
                    EMAIL:
                    <br></br>
                    admin@metabikes.com
                  </p>
                  <p>
                    FOLLOW US ON SOCIALS:
                    <div className="footer_icons">
                      {/* Facebook Icon SVG */}
                      <a
                        href="https://en-gb.facebook.com/"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                          viewBox="0 0 30 30"
                          width="30px"
                          height="30px"
                          className="facebook_icon"
                        >
                          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" />
                        </svg>
                      </a>

                      {/* Instagram Icon -SVG */}
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                          viewBox="0 0 30 30"
                          width="30px"
                          height="30px"
                          className="instagram_icon"
                        >
                          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                        </svg>
                      </a>

                      {/* Twitter Icon SVG */}
                      <a
                        href="https://twitter.com/?lang=en-GB"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                          viewBox="0 0 30 30"
                          width="30px"
                          height="30px"
                          className="twitter_icon"
                        >
                          <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                        </svg>
                      </a>
                    </div>
                  </p>
                </div>

                <div className="copyright_footer">
                  <div>
                    <p>
                      (c) COPYRIGHT - META BIKES Team (Aidan, Amani, Cryshae,
                      Paul and Seb){" "}
                    </p>
                  </div>
                </div>
              </Column>
            </div>
          </div>
        </FooterWrapper>
      </RightMainWrapper>
    </GlobalWrapper>
  );
};

export default Footer;
