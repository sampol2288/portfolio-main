const { loadJsonFile } = require('../utils/storage');

exports.getPortfolioData = async (req, res, next) => {
  try {
    // We can load from a JSON file or just return the static data for now
    // If the file doesn't exist, we can return the default mock data structure
    const portfolioData = await loadJsonFile('portfolioData.json', {
      personal: { name: "Smit Polra" },
      projects: [],
      skills: {}
    });
    
    res.json({ success: true, data: portfolioData });
  } catch (error) {
    next(error);
  }
};
