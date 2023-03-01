import React, { useState, useEffect } from 'react'
import styles from './styles/Landing.module.css'
import { Container, Row, Col} from 'react-bootstrap'
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi'
import { BsFillChatLeftDotsFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';


// import swiper
// import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Mousewheel, Keyboard,Scrollbar,A11y } from "swiper";



import { useNavigate } from "react-router";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import redux

const jwtToken = localStorage.getItem("token")






const Landing = () => {

   
    const navigate = useNavigate();
   
    
    


    
    
   
    
    const signOut = () => {
        localStorage.removeItem("token");
        navigate("/");
        toast("Đăng xuất thành công")
      };
    
    

  return (
    <>
    {/* Header */}
    <Container className={styles.container_header}>
        <div className='swapper'>
            <div className='header d-flex justify-content-between align-items-center'>
                <div className={styles.icons}>
                    <div className={styles.icon1}></div>
                    <div className={styles.icon2}></div>
                </div>
                {!jwtToken ? (
                <Link to='/login' className='text-decoration-none'>
                <div className={styles.button}>Sign In</div>

                </Link>

                ) : (
                    <div className={styles.log}>
                        
                        <div className={styles.button} onClick={signOut} >Đăng xuất</div>

                        
                        <Link to='/profile' className='text-decoration-none'>
                            <div className={styles.button}  >Profile</div>

                        </Link>

                    </div>
                )}
            </div>

            {/* <div className={styles.swapper_headline}>
                <div className={styles.headline}>
                    <div className={styles.title_head}>Save your data storage here.</div>
                    <div className={styles.sub_head}>Data Warehouse is data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others</div>
                    <div className={styles.button_headline}>Learn more</div>
                </div>
                <img src="../../image1.jpg" alt="" className={styles.img_headline} />
            </div> */}
        </div>
        
    </Container>
    <Container className='pt-4'>
        <Row className='align-items-center '>
            <Col xs={12} md={6}>
            <div className={styles.headline}>
                    <div className={styles.title_head}>Save your data storage here.</div>
                    <div className={styles.sub_head}>Data Warehouse is data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others</div>
                    
                </div>
            </Col>
            <Col  xs={12} md={6}>
            <img src="../../image1.jpg" alt="" className='w-100' />
            </Col>
        </Row>
    </Container>

    {/* Features */}

    <Container className={styles.swapper_features}>
        <div className='title d-flex justify-content-center flex-column align-items-center'>
            <div className={styles.title_features}>Features</div>
            <div className={styles.sub_title_features}>Some of the features and advantages that we provide for those of you who store data in this Data Waraehouse</div>
        </div>
        <div className='row flex-wrap'>
            <div className='col-12 col-md-6'>
            <div className=" d-flex position-relative pb-5 justify-content-center">
                    <img src="../../features 1.png" alt="" className={styles.img_features} />
                    <div className={styles.content}>
                        <div className={styles.swaper_data}>
                            <div className={styles.title_search}>Search Data</div>
                            <div className={styles.sub_search}>Don't worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.</div>
                            <div className={styles.icon_features}>
                                <div className={styles.learn}>Learn more</div>
                                <div>
                                    <HiOutlineArrowRight className={styles.icons_arrow}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 col-md-6'>
            <div className=" d-flex position-relative pb-5 justify-content-center">
                    <img src="../../features 2.png" alt="" className={styles.img_features} />
                    <div className={styles.content2}>
                        <div className={styles.swaper_data}>
                            <div className={styles.title_search}>24h Hours Access</div>
                            <div className={styles.sub_search}>Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.</div>
                            <div className={styles.icon_features}>
                                <div className={styles.learn}>Learn more</div>
                                <div>
                                    <HiOutlineArrowRight className={styles.icons_arrow}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 col-md-6'>
            <div className=" d-flex position-relative pb-5 justify-content-center">
                    <img src="../../features 3.png" alt="" className={styles.img_features} />
                    <div className={styles.content3}>
                        <div className={styles.swaper_data}>
                            <div className={styles.title_search}>Print Out</div>
                            <div className={styles.sub_search}> Data Security is one of four best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.</div>
                            <div className={styles.icon_features}>
                                <div className={styles.learn}>Learn more</div>
                                <div>
                                    <HiOutlineArrowRight className={styles.icons_arrow}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 col-md-6'>
            <div className=" d-flex position-relative pb-5 justify-content-center">
                    <img src="../../features 4.png" alt="" className={styles.img_features} />
                    <div className={styles.content4}>
                        <div className={styles.swaper_data}>
                            <div className={styles.title_search}>Security Code</div>
                            <div className={styles.sub_search}>Data Security is one of four best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.</div>
                            <div className={styles.icon_features}>
                                <div className={styles.learn}>Learn more</div>
                                <div>
                                    <HiOutlineArrowRight className={styles.icons_arrow}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </Container>

    {/* Testimonials */}

    <Container className='pb-5' >
       
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../image 4.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="../image 3.png"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../image 2.png"
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../image 1.png"
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>

    
       

       
    </Container>

    {/* footer */}

    <Container className={styles.swaper_footer}>
        <Row>
            <Col xs={6} className=''>
                <div className={styles.swaper_head_footer}>
               
                <div className={styles.title_footer}>DataWarehouse</div>
                </div>

                <div className={styles.swaper_contact_footer}>
                    <div>
                        <div className={styles.location}>Warehouse Society, 234</div>
                        <div className={styles.location}>Bahagia Ave Street PRBW 29281</div>
                    </div>
                    <div>
                        <div className={styles.email}>info@warehouse.project</div>
                        <div className={styles.email}>1-232-3434(Main)</div>
                    </div>
                </div>

                {/* <div className={styles.swaper_end_footer}>
                    <div className={styles.end_footer}>Datawarehouse , 2020. All rights reserved.</div>
                    <div className={styles.end_footer}>Company Registration Number: 21479524</div>
                </div> */}
            </Col>
            <Col xs={2} className='p-0'>
                <div className={styles.title_footer_2}>About</div>
                <div className={styles.padding_top}>
                    <div className={styles.footer_about}>Profile</div>
                    <div className={styles.footer_about}>Features</div>
                    <div className={styles.footer_about}>Careers</div>
                    <div className={styles.footer_about}>DW News</div>
                </div>
            </Col>

            <Col xs={2} className='p-0'>
                <div className={styles.title_footer_2}>Help</div>
                <div className={styles.padding_top}>
                    <div className={styles.footer_about}>Support</div>
                    <div className={styles.footer_about}>Sign up</div>
                    <div className={styles.footer_about}>Guide</div>
                    <div className={styles.footer_about}>Reports</div>
                    <div className={styles.footer_about}>Q&A</div>
                </div>
            </Col>
            <Col xs={2} className='p-0'>
            <div className={styles.title_footer_2}>Social Media</div>
            </Col>
            <Col xs={12} className={styles.swaper_end}>
                <div className={styles.swaper_end_footer}>
                    <div className={styles.end_footer}>Datawarehouse , 2020. All rights reserved.</div>
                    <div className={styles.end_footer}>Company Registration Number: 21479524</div>
                </div>
                <div className={styles.swaper_icons_chat}>
                    <BsFillChatLeftDotsFill className={styles.icons_chat}/>
                </div>
            </Col>
        </Row>
    </Container>
    <ToastContainer/>
    </>
  )
}

export default Landing
