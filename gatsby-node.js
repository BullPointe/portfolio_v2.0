// const path = require('path');
// const projects = require('./src/data/projects/all_projects.json');
// const colors = require('./src/data/projects/tag_colors.json');

// const PROJ_IMAGE_PATH = './src/assets/';

// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//     projects.forEach((card) => {
//       // 1. Extract the card data.
//       const {
//         title,
//         description,
//         link,
//         image,
//         alt,
//         tags,
//       } = card;
      
//       // 2. Build the PortfolioCard node. Note that most fields simply correspond to
//       //    to our JSON data.
//       const node = {
//         title,
//         description,
//         link,
//         image,
//         alt,
//         tags: tags.map((name) => ({
//             name,
//             color: colors[name],
//         })),
//         id: createNodeId(`card-${title}`),
//         internal: {
//           type: 'ProjectCard',
//           contentDigest: createContentDigest(card),
//         },
//       };
  
//       // 3. Create the node
//       actions.createNode(node);
//     });
//   };


