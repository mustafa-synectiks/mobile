import * as React from "react"
import Layout from "../../components/layout"

import SoftwareMigration from "../../img/CS_Software_Migration.jpg"
import RealtimeMonitoring from "../../img/CS_Realtime_Monitoring.jpg"
import SoftwareDefinedTransformation from "../../img/CS_SoftwareDefinedTransformation.jpg"
import NetworkDesign from "../../img/CS_NetworkDesign.jpg"
import StorageTier from "../../img/CS_StorageTier.jpg"
import DisasterRecovery from "../../img/CS_DisasterRecovery.jpg"
import "../../components/layout.css"

export class Casestudy extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey">
          <div className="container pt-5">
            <div className="text-center w-100 pb-3">
              <h1 className="text-center bg-logoblue text-white">
                Success Stories
              </h1>
            </div>

            <div className="d-flex justify-content-around pt-1 flex-fill mt-3 align-items-center flex-col">
              <a href="/softwaredefined.html" className="noLine">
                <div className="p-3">
                  <div className="border-grey-2px cs_boxshadow">
                    <div className="img_zoom">
                      <img
                        src={SoftwareDefinedTransformation}
                        width="100%"
                        alt="Enterprise-DevOps"
                      />{" "}
                    </div>
                    <div className="text-group p-3 align-self-center">
                      <h4 className="font-weight-bold pt-2 text-black">
                        Software Defined Transformation{" "}
                      </h4>
                      <p className="text-black">
                        Moving to AWS cloud with Data Center retirement for
                        Motor Industry.
                      </p>{" "}
                      Learn more <i className="fa fa-arrow-right" />
                    </div>
                  </div>
                </div>
              </a>
              <a href="/realtime.html" className="noLine">
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
                      <h4 className="font-weight-bold pt-2 text-black">
                        Realtime Monitoring{" "}
                      </h4>
                      <p className="text-black">
                        Highly Scalable extremely customizable realtime
                        monitoring platform for a large telco.
                      </p>{" "}
                      Learn more <i className="fa fa-arrow-right" />
                    </div>
                  </div>
                </div>
              </a>
              <a href="/storagemigration.html" className="noLine">
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
                      <h4 className="font-weight-bold pt-2 text-black">
                        Storage Migration{" "}
                      </h4>
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
              className="d-flex justify-content-around pt-2 flex-fill mt-3 pb-3 align-items-center flex-col"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <a href="/networkdesign.html" className="noLine">
                <div className="p-3">
                  <div className="border-grey-2px cs_boxshadow">
                    <div className="img_zoom">
                      <img
                        src={NetworkDesign}
                        width="100%"
                        alt="NetworkDesign"
                      />{" "}
                    </div>
                    <div className="text-group p-3 align-self-center">
                      <h4 className="font-weight-bold text-black">
                        Network Design{" "}
                      </h4>
                      <p className="text-black">
                        Complete Network Backbone Design with highest security
                        for retail.
                      </p>{" "}
                      Learn more <i className="fa fa-arrow-right" />
                    </div>
                  </div>
                </div>
              </a>
              <a href="/storagetier.html" className="noLine">
                <div className="p-3">
                  <div className="border-grey-2px cs_boxshadow">
                    <div className="img_zoom">
                      <img src={StorageTier} width="100%" alt="StorageTier" />{" "}
                    </div>
                    <div className="text-group p-3 align-self-center">
                      <h4 className="font-weight-bold text-black">
                        Storage Tier{" "}
                      </h4>
                      <p className="text-black">
                        Moving Bigdata Workloads to aggregated platform for a
                        large telco.
                      </p>{" "}
                      Learn more <i className="fa fa-arrow-right" />
                    </div>
                  </div>
                </div>
              </a>
              <a href="/disasterrecovery.html" className="noLine">
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
                      <h4 className="font-weight-bold text-black">
                        Disaster Recovery{" "}
                      </h4>
                      <p className="text-black">
                        Lightweight disaster recovery platform for Indian
                        Defense.
                      </p>{" "}
                      Learn more <i className="fa fa-arrow-right" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Casestudy
