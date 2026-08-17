import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
    course: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    education: { type: String, required: true },
    experience: { type: String },
    message: { type: String },

    // CV (required)
    cv: { type: String, required: true }, // base64
    cvFileName: { type: String },
    cvFileType: { type: String },

    // ID Front (optional)
    idFront: { type: String },
    idFrontFileName: { type: String },

    // ID Back (optional)
    idBack: { type: String },
    idBackFileName: { type: String },

    // Passport (optional)
    passport: { type: String },
    passportFileName: { type: String },

    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);