import { useStaticQuery, graphql } from "gatsby"

const ProjectsQuery = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allProjectsJson {
      nodes {
        projects {
          personal {
            alt
            description
            tags
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  )
              }
            }
            link
          }
          professional {
            alt
            description
            tags
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                )
              }
            }
            link {
              publicURL
            }
          }
        }
        colors {
          gatsby
          javascript
          react
          ARM_v6_M
          ASIC_Design
          C
          DMA
          I2C
          MPI
          OpenMP
          RTL
          SPI
          STM_32
          SystemVerilog
          graphql
          python
          scikit_learn
          research
          jekyll
        }
      }
    }
  }
  `)
  return data.allProjectsJson.nodes;
}

// const ProjectsQuery = () => {
//   const data = useStaticQuery(graphql`
//     query projectQuery {
//       allProjectsJson {
//         nodes {
//           colors {
//             gatsby
//             javascript
//             react
//           }
//           projects {
//             professional {
//               title
//               tags
//               alt
//               description
//               link
//               image {
//                 childImageSharp {
//                   gatsbyImageData
//                 }
//               }
//             }
          
//           }
//         }
//       }
//     }
  
//   `)
//   return data.allProjectsJson.nodes;
// }


export default ProjectsQuery