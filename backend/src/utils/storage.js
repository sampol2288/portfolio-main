const fs = require('fs').promises;
const path = require('path');
const logger = require('./logger');

const DATA_DIR = path.resolve(__dirname, '../../data');

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    logger.error('Error creating data directory:', error);
  }
}

async function loadJsonFile(filename, defaultValue = []) {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return defaultValue;
    }
    logger.error(`Error loading file ${filename}:`, error);
    throw error;
  }
}

async function saveJsonFile(filename, data) {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    logger.error(`Error saving file ${filename}:`, error);
    throw error;
  }
}

module.exports = {
  loadJsonFile,
  saveJsonFile,
};
