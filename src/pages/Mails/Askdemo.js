import * as React from "react"
import { Helmet } from "react-helmet"
import { Formik } from "formik"
import * as Yup from "yup"
import Layout from "../../components/layout"
import NiceToMeet from "../../images/NiceToMeet.png"
import "../../components/layout.css"
import ContactM from "../../components/ContactMe"

export class Contact extends React.Component {
  render() {
    return (
      <Layout>
        {/* <div>
          <img
            className="text-center"
            src={NiceToMeet}
            width="100%"
            alt="Card image Foundation"
          />
        </div> */}
        <ContactM />

        <Helmet>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
        `,
            }}
          />
        </Helmet>
      </Layout>
    )
  }
}

export default Contact
