module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`, `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lora`,
            subsets: [`latin`],
          },
          {
            family: `Lato`,
            variants: [`400`]
          },
        ],
      },
    }
  ]
};
