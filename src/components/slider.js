import React from "react"
import "./layout.css"
// import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
import s1 from "../images/Slider_1.jpg"
import s2 from "../images/Slider2.jpg"
import s3 from "../images/Slider3.jpg"
import s4 from "../images/Slider4.jpg"
import s5 from "../images/Slider5.jpg"
import s6 from "../images/Slider6.jpg"
import OpenPlatform from "../images/OpenPlatform.png"
import Transformation from "../images/Transformation.png"
import Solutions from "../images/Solutions.png"
import PoweredBySynectiks from "../images/PoweredBySynectiks.png"
import SoftwareMigration from "../images/CS_Software_Migration.jpg"
import RealtimeMonitoring from "../images/CS_Realtime_Monitoring.jpg"
import SoftwareDefinedTransformation from "../images/CS_SoftwareDefinedTransformation.jpg"
import NetworkDesign from "../images/CS_NetworkDesign.jpg"
import StorageTier from "../images/CS_StorageTier.jpg"
import DisasterRecovery from "../images/CS_DisasterRecovery.jpg"

const Slider = () => {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s1}
            alt="Synectiks Open Xformation"
          />
          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/foundation"
                className="btn text-white bg-logoblue text-uppercase btnLearn float-left"
              >
                Learn More
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s2}
            alt="Enterprise Transformation"
          />

          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/devops"
                className="btn text-white bg-logoblue text-uppercase btnLearn float-left"
              >
                learn more
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s3} alt="AWS Security" />

          <Carousel.Caption>
            <div className="clearfix">
              {/* <a
                href="/audit"
                className="btn text-white bg-logoblue text-uppercase btnLearn float-left"
              >
                learn more
              </a> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s4}
            alt="Enterprise Managed Services"
          />

          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/enterprisemanagedservice"
                className="btn text-white bg-logoblue text-uppercase btnLearn float-left"
              >
                learn more
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text-left">
          <img className="d-block w-100" src={s5} alt="Cloud Managed Backup" />
          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/CloudManagedBackup"
                className="btn text-white bg-yellow text-uppercase btnLearn"
              >
                learn more
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s6} alt="Why Synectiks" />
        </Carousel.Item>
      </Carousel>
      <div className="bg-lightgrey pt-1">
        <div className="text-center w-100 mb-2">
          <h2 className="text-light mb-1 py-1 bg-logoblue">
            ACCELERATING MULTICLOUD SOA TRANSFORMATION THROUGH OPEN PLATFORM
          </h2>
        </div>
        <div className="container">
          <div>
            <div className="text-center my-sm-3 my-md-5 my-lg-5 my-xl-5  w-100">
              <h2 className="">Outcome-based Solution Offerings</h2>
            </div>
            <div className="d-sm-flex justify-content-sm-between d-md-flex  justify-content-md-between d-lg-flex justify-content-lg-between d-xl-flex justify-content-xl-between">
              <div className="card card-shadow">
                <a href="/foundation" className="noLine">
                  <img
                    className="card-img-top"
                    src={OpenPlatform}
                    alt="Foundation"
                  />
                  <div className="card-body">
                    <h3 className="text-center text-uppercase">
                      Open Platform
                    </h3>
                  </div>
                </a>
              </div>

              <div className="card card-shadow mx-sm-3 mx-md-4">
                <a href="/transformation" className="noLine">
                  <img
                    className="card-img-top"
                    src={Transformation}
                    alt="Transformation"
                  />
                  <div className="card-body">
                    <h3 className="text-center text-uppercase">
                      Transformation
                    </h3>
                  </div>
                </a>
              </div>

              <div className="card card-shadow">
                <a href="/operations" className="noLine">
                  <img
                    className="card-img-top"
                    src={Solutions}
                    alt="Operation"
                  />
                  <div className="card-body">
                    <h3 className="text-center text-uppercase">Solutions</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="my-3 text-center">
              <a
                className="btn btn-primary noLine noLine z btn-demo"
                href="/askfordemo"
              >
                Ask For Demo
              </a>
            </div>
          </div>
          {/* Card Ends */}

          <div className="flex-fill my-sm-3 my-md-5 my-lg-5 my-xl-5">
            <img
              src={PoweredBySynectiks}
              width="100%"
              alt=""
              className="w-100"
            />
            <div className="text-center text-white mt-sm-2 mt-md-3 mt-lg-3 mt-xl-3">
              <p>
                <a
                  href="/foundation"
                  className="btn text-white bg-logoblue text-uppercase btnLearn"
                >
                  learn more
                </a>
              </p>
            </div>
          </div>

          <div className="text-center w-100 mb-sm-2 mb-md-3 mb-lg-3 mb-xl-3">
            <h2 className="">Success Stories</h2>
          </div>

          <div
            className="d-sm-flex justify-content-sm-between d-md-flex  justify-content-md-between d-lg-flex justify-content-lg-between d-xl-flex justify-content-xl-between"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <a href="/softwaredefined" className="noLine">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={SoftwareDefinedTransformation}
                      width="100%"
                      alt="Enterprise-DevOps"
                    />
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h3 className="font-weight-bold pt-2 text-black">
                      Software Defined Transformation
                    </h3>
                    <p className="text-black">
                      Moving to AWS cloud with Data Center retirement for Motor
                      Industry.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/realtime" className="noLine">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={RealtimeMonitoring}
                      width="100%"
                      alt="Enterprise-Transformation"
                    />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center ">
                    <h3 className="font-weight-bold pt-2 text-black">
                      Realtime Monitoring{" "}
                    </h3>
                    <p className="text-black">
                      Highly Scalable extremely customizable realtime monitoring
                      platform for a large telco.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/storagemigration" className="noLine ">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={SoftwareMigration}
                      width="100%"
                      alt="Enterprise-Transformation"
                    />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h3 className="font-weight-bold pt-2 text-black">
                      Storage Migration{" "}
                    </h3>
                    <p className="text-black">
                      Zero downtime, Zero Fault Petabytes storage migration of
                      Largest Financial Sector.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div
            className="d-sm-flex justify-content-sm-between d-md-flex  justify-content-md-between d-lg-flex justify-content-lg-between d-xl-flex justify-content-xl-between"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <a href="/networkdesign" className="noLine w-md-75">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src={NetworkDesign} width="100%" alt="NetworkDesign" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h3 className="font-weight-bold text-black">
                      Network Design{" "}
                    </h3>
                    <p className="text-black">
                      Complete Network Backbone Design with highest security for
                      retail.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/storagetier" className="noLine w-md-75">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src={StorageTier} width="100%" alt="StorageTier" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h3 className="font-weight-bold text-black">
                      Storage Tier{" "}
                    </h3>
                    <p className="text-black">
                      Moving Bigdata Workloads to aggregated platform for a
                      large telco.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/disasterrecovery" className="noLine w-md-75">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={DisasterRecovery}
                      width="100%"
                      alt="Disaster Recovery"
                    />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h3 className="font-weight-bold text-black">
                      Disaster Recovery{" "}
                    </h3>
                    <p className="text-black">
                      Lightweight disaster recovery platform for Indian Defense.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
