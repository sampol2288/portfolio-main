const { loadJsonFile } = require('../utils/storage');

exports.getolioData = async (req, res, next) => {
  try {
    // We can load from a JSON file or just return the static data for now
    // If the file doesn't exist, we can return the default mock data structure
    const olioData = await loadJsonFile('olioData.json', {
      personal: { name: "Smit Polra" },
      projects: [],
      skills: {}
    });

    res.json({ success: true, data: olioData });
  } catch (error) {
    next(error);
  }
};
