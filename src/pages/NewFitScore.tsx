import { useState } from "react";
import { Sidebar } from "../components/RetractingSideBar";
import { useNavigate } from "react-router-dom";

const NewFitScore = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        linkedinUrl: "",
        email: "",
        phoneNumber: "",
        targetCompany: ""
    });
    const [errors, setErrors] = useState({
        linkedinUrl: "",
        email: "",
        phoneNumber: "",
        targetCompany: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            linkedinUrl: "",
            email: "",
            phoneNumber: "",
            targetCompany: ""
        };

        // LinkedIn URL validation
        if (!formData.linkedinUrl) {
            newErrors.linkedinUrl = "LinkedIn URL is required";
            isValid = false;
        } else if (!formData.linkedinUrl.includes('linkedin.com/in/')) {
            newErrors.linkedinUrl = "Please enter a valid LinkedIn profile URL";
            isValid = false;
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
            isValid = false;
        }

        // Target Company validation
        if (!formData.targetCompany) {
            newErrors.targetCompany = "Target company is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // if (validateForm()) {
            // TODO: Implement API call to submit fit score analysis
            navigate("/fit-score/result");
            console.log("Form submitted:", formData);
        // }
    };

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />
            <div className="flex-1 p-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-8">New Analysis</h1>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700">
                                LinkedIn URL *
                            </label>
                            <input
                                type="url"
                                id="linkedinUrl"
                                name="linkedinUrl"
                                value={formData.linkedinUrl}
                                onChange={handleChange}
                                placeholder="https://linkedin.com/in/yourprofile"
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                    errors.linkedinUrl ? "border-red-500" : ""
                                }`}
                            />
                            {errors.linkedinUrl && (
                                <p className="mt-1 text-sm text-red-600">{errors.linkedinUrl}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                    errors.email ? "border-red-500" : ""
                                }`}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="+1 (555) 123-4567"
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                    errors.phoneNumber ? "border-red-500" : ""
                                }`}
                            />
                            {errors.phoneNumber && (
                                <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="targetCompany" className="block text-sm font-medium text-gray-700">
                                Target Company *
                            </label>
                            <input
                                type="text"
                                id="targetCompany"
                                name="targetCompany"
                                value={formData.targetCompany}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                    errors.targetCompany ? "border-red-500" : ""
                                }`}
                            />
                            {errors.targetCompany && (
                                <p className="mt-1 text-sm text-red-600">{errors.targetCompany}</p>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm focus:ring-offset-2"
                            >
                                Submit Analysis
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewFitScore;