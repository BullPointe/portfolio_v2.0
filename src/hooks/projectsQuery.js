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
            link
            tags
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          professional {
            alt
            description
            link
            tags
            title
            image {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        colors {
          gatsby
          javascript
          react
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