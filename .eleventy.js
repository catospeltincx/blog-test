/* hoort bij de datum fiksen */
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  /* css, beelden, collections (yml) verzamelen*/
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

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
