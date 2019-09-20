import * as React from "react"
import Layout from "../../components/layout"
import ContinuousAutomationOperations from "../../img/ContinuousAutomationOperations.png"
import ContinuousDeliveryOperations from "../../img/ContinuousDeliveryOperations.png"
import ContinuousBillingOperations from "../../img/ContinuousBillingOperations.png"
import ContinuousComplianceOperations from "../../img/ContinuousComplianceOperations.png"
import DiscoveryAssessmentOperation from "../../img/DiscoveryAssessmentOperation.png"
import OperationsGraph from "../../img/OperationsGraph.png"
import Solutions from "../../img/Solutions.png"
import transformation from "../../img/Transformation.png"
import OpenPlatform from "../../img/OpenPlatform.png"
import "../../components/layout.css"

class Operations extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey">
          <div className="container pb-5">
            <div className="row main-card pb-5">
              <div className="col-md-12   card-deck">
                <div className="card btn card-shadow mx-3">
                  <a href="/foundation.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={OpenPlatform}
                      alt="Foundation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">
                        Open Platform
                      </h2>
                    </div>
                  </a>
                </div>

                <div className="card btn card-shadow mx-3 pt-3">
                  <a href="/transformation.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={transformation}
                      alt="Transformation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">
                        Transformation
                      </h2>
                    </div>
                  </a>
                </div>

                <div className="card btn card-shadow mx-3 pt-3">
                  <a href="/operations.html" className="noLine">
                    <img
                      className="card-img-top"
                      src={Solutions}
                      alt="Operation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">Solutions</h2>
                      <h1 className="pointer text-center">&#187;</h1>
                    </div>
                  </a>
                </div>
                {/*  */}
              </div>
            </div>
          </div>

          <div className="text-center mt-5 px-4">
            <h3 className="pt-5">
              24x7 Operations for enterprise managed services
            </h3>
          </div>
          <div className="pb-5 text-center">
            <div>
              <img
                src={OperationsGraph}
                width="75%"
                alt="Operations for enterprise managed services"
              />{" "}
            </div>
          </div>

          <div
            className="container-fluid py-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="row justify-content-around align-items-center">
              <div className="card card-hd mx-3">
                <div className="w-100 card-bd bg-maroon">
                  <img
                    className="card-hd-img text-center brdr-maroon"
                    src={DiscoveryAssessmentOperation}
                    width="75%"
                    alt="Discovery Assessment"
                  />
                </div>
                <div className="card-body">
                  <small className="text-center  ">
                    We advise on assessment, migration, multi cloud hybrid
                    architecture adoption coupled with our services, software,
                    methodologies to accelerate enterprise transformation
                    towards operation excellence.
                  </small>
                </div>
              </div>

              <div className="card card-hd mx-3">
                <div className="w-100 card-bd bg-teal">
                  <img
                    className="card-hd-img text-center brdr-teal"
                    src={ContinuousComplianceOperations}
                    width="75%"
                    alt="Continuous Compliance"
                  />
                </div>
                <div className="card-body">
                  <small className="text-center">
                    Synectiks xformation platform perform continuous audits on
                    infrastructure, application, access management and ensure
                    security compliances (CISP, HIPPA,PCI-DSS, DISA, NIST)
                    across clouds, products and environments.
                  </small>
                </div>
              </div>
              <div className="card card-hd mx-3">
                <div className="w-100 card-bd bg-orange">
                  <img
                    className="card-hd-img text-center brdr-orange"
                    src={ContinuousBillingOperations}
                    width="75%"
                    alt="Continuous Billing"
                  />
                </div>
                <div className="card-body">
                  <small className="text-center">
                    Synectiks xformation platform perform continuous billing
                    monitoring across the accounts, services, environments,
                    identifies capex spending and underutilized resources.
                  </small>
                </div>
              </div>
              <div className="card card-hd mx-3">
                <div className="w-100 card-bd bg-green">
                  <img
                    className="card-hd-img text-center brdr-green"
                    src={ContinuousDeliveryOperations}
                    width="75%"
                    alt="Continuous Delivery"
                  />
                </div>
                <div className="card-body">
                  <small className="text-center">
                    Synectiks continuous delivery platform enables you to
                    continuously release new features and changes with superior
                    quality. The delivery mechanism includes multiple quality
                    gates and staged deployment, that ensures rapid releases
                    with less tests efforts.
                  </small>
                </div>
              </div>
              <div className="card card-hd mx-3">
                <div className="w-100 card-bd bg-pink">
                  <img
                    className="card-hd-img text-center brdr-pink"
                    src={ContinuousAutomationOperations}
                    width="75%"
                    alt="Continuous Automation"
                  />
                </div>
                <div className="card-body">
                  <small className="text-center">
                    Synectiks automation platform automates frequently occurring
                    IT tasks, reducing IT tickets 80%. The intelligent
                    diagnostics platform auto fixes more that 50% general
                    alarms.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Operations
