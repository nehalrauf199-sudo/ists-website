import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
    course: { type: String, default: 'Not specified' },
    name: { type: String, default: 'Not specified' },
    phone: { type: String, default: 'Not specified' },
    email: { type: String, default: 'Not specified' },
    education: { type: String, default: 'Not specified' },
    experience: { type: String, default: '' },
    message: { type: String, default: '' },

    // CV fields
    cvUrl: { type: String, required: true },
    cvFileName: { type: String },
    cvFileSize: { type: Number },

    // ID Document fields
    idDocumentUrl: { type: String },
    idDocumentFileName: { type: String },
    idDocumentFileSize: { type: Number },

    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);