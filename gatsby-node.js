exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        // Other rules...

        // Rule for handling .obj files
        {
          test: /\.obj$/,
          use: loaders.file(),
        },
      ],
    },
  });
};
