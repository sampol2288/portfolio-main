const { z } = require('zod');
const { nanoid } = require('nanoid');
const { loadJsonFile, saveJsonFile } = require('../utils/storage');
const logger = require('../utils/logger');

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

exports.submitContact = async (req, res, next) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    
    const submission = {
      id: nanoid(),
      ...validatedData,
      createdAt: new Date().toISOString(),
    };

    const submissions = await loadJsonFile('contactSubmissions.json');
    submissions.push(submission);
    await saveJsonFile('contactSubmissions.json', submissions);

    logger.info(`New contact submission from ${validatedData.email}`);
    
    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: submission,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors.map(e => ({ path: e.path[0], message: e.message })),
      });
    }
    next(error);
  }
};

exports.getSubmissions = async (req, res, next) => {
  try {
    const submissions = await loadJsonFile('contactSubmissions.json');
    res.json({ success: true, data: submissions });
  } catch (error) {
    next(error);
  }
};
