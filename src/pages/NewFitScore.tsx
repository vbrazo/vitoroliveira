import { useState } from "react";
import { Sidebar } from "../components/RetractingSideBar";
import { FiBriefcase } from "react-icons/fi";
import Header from "@/components/Header";

const NewFitScore = () => {
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
            newErrors.linkedinUrl = "Please enter a valid LinkedIn URL";
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
        if (validateForm()) {
            // TODO: Implement API call to process fit score analysis
            console.log("Form submitted:", formData);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-zinc-100 to-zinc-200 flex">
            <div className="md:hidden flex">
                <Header />
            </div>

            <div className="md:flex hidden">
                <Sidebar />
            </div>
            <main className="flex-1 flex mt-20 md:mt-0">
                <div className="w-full max-w-lg bg-white border border-zinc-200 p-8">
                    <h1 className="text-3xl font-bold text-black mb-2 tracking-tight">New Fit Score</h1>
                    <p className="text-zinc-500 mb-8">Choose a company to analyze your fit.</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="targetCompany" className="text-sm font-semibold text-zinc-700 mb-1 flex items-center gap-2">
                                <FiBriefcase className="inline text-zinc-400" /> Target Company <span className="text-zinc-400">*</span>
                            </label>
                            <input
                                type="text"
                                id="targetCompany"
                                name="targetCompany"
                                value={formData.targetCompany}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-lg border ${errors.targetCompany ? "border-red-400" : "border-zinc-300"} bg-white px-4 py-2 shadow-sm focus:border-black focus:ring-2 focus:ring-zinc-200 transition sm:text-sm`}
                            />
                            {errors.targetCompany && (
                                <p className="mt-1 text-xs text-red-500">{errors.targetCompany}</p>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-lg bg-black py-2 px-6 text-base font-semibold text-white shadow hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 transition"
                            >
                                Analyze
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default NewFitScore;