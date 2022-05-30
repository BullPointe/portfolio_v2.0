import { useStaticQuery, graphql } from "gatsby"

const GetFooterDetails = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
    file(name: {eq: "Sahil_Jaganmohan_Resume_2022"}) {
      publicURL
    }
  }
  `)
  return data
}

export default GetFooterDetails