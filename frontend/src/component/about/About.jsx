import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";
import BottomTab from "../../more/BottomTab";
import lg2 from "../../Assets/logo-change-backgr.png";


const About = () => {
  const { loading } = useSelector(
    (state) => state.profile
  );
  return (
    <>
      {loading ? <Loading /> :
        <>
          <MetaData title="About" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    <img src={lg2} />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Welcome to dddd
                      </span>
                      <p>
                        dddddddddddd
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>What We Provide?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div style={{
                        padding: "10px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" />
                        </div>
                        <span>dddddd</span>
                        <p>
                          ddddd
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div style={{
                        padding: "10px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                        </div>
                        <span>Chdd</span>
                        <p>
                          ddddd
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                        </div>
                        <span>Hệ tddddg</span>
                        <p>
                          ddddd
                        </p>
                      </div>
                    </div>


                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" />
                        </div>
                        <span>dddd</span>
                        <p>
                          dddd
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" />
                        </div>
                        <span>dddd</span>
                        <p>
                          0ddddd
                        </p>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <BottomTab />
        </>
      }
    </>
  );
};

export default About;