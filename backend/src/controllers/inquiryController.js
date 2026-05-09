const Inquiry = require('../models/Inquiry');

exports.createInquiry = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        const newInquiry = new Inquiry({
            name,
            email,
            subject,
            message
        });

        const savedInquiry = await newInquiry.save();
        
        res.status(201).json({
            success: true,
            data: savedInquiry
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

exports.getAllInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            count: inquiries.length,
            data: inquiries
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.updateInquiryStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        
        const updatedInquiry = await Inquiry.findByIdAndUpdate(
            id, 
            { status }, 
            { new: true, runValidators: true }
        );

        if (!updatedInquiry) {
            return res.status(404).json({
                success: false,
                message: 'Inquiry not found'
            });
        }

        res.status(200).json({
            success: true,
            data: updatedInquiry
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
