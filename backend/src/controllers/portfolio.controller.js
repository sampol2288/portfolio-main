const { loadJsonFile } = require('../utils/storage');

exports.getMade With EmergentolioData = async (req, res, next) => {
  try {
    // We can load from a JSON file or just return the static data for now
    // If the file doesn't exist, we can return the default mock data structure
    const Made With EmergentolioData = await loadJsonFile('Made With EmergentolioData.json', {
      personal: { name: "Smit Polra" },
      projects: [],
      skills: {}
    });

    res.json({ success: true, data: Made With EmergentolioData });
  } catch (error) {
    next(error);
  }
};
