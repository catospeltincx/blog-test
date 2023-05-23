/* hoort bij de datum fiksen */
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  /* css en beelden verzamelen*/
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");

  /* stukje van de datum eruit filteren */
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
