const fs = require('fs').promises;
const path = require('path');

const projectsFilePath = path.join(__dirname, '../data/projects.json');

exports.getAllProjects = async (req, res) => {
    try {
        const data = await fs.readFile(projectsFilePath, 'utf8');
        const projects = JSON.parse(data);
        res.json(projects);
    } catch (error) {
        console.error('Error reading projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

exports.getProjectById = async (req, res) => {
    try {
        const data = await fs.readFile(projectsFilePath, 'utf8');
        const projects = JSON.parse(data);
        const project = projects.find(p => p.id === parseInt(req.params.id));
        
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch project' });
    }
};
