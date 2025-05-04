import { useState } from "react";
import { Sidebar } from "../components/RetractingSideBar";
import { FiUser, FiMail, FiLinkedin, FiPhone, FiLock, FiBriefcase } from "react-icons/fi";

const UserSettings = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        linkedinUrl: "",
        phoneNumber: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        linkedinUrl: "",
        phoneNumber: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
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
            name: "",
            email: "",
            linkedinUrl: "",
            phoneNumber: "",
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        };

        // Name validation
        if (!formData.name) {
            newErrors.name = "Name is required";
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

        // LinkedIn URL validation
        if (!formData.linkedinUrl) {
            newErrors.linkedinUrl = "LinkedIn URL is required";
            isValid = false;
        } else if (!/^https:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.linkedinUrl)) {
            newErrors.linkedinUrl = "LinkedIn URL must start with https://linkedin.com/";
            isValid = false;
        }

        // Phone number validation (optional, but you can add your own logic)
        // if (formData.phoneNumber && !/^[\d\s()+-]+$/.test(formData.phoneNumber)) {
        //     newErrors.phoneNumber = "Phone number is invalid";
        //     isValid = false;
        // }

        // Current password validation
        if (!formData.currentPassword) {
            newErrors.currentPassword = "Current password is required";
            isValid = false;
        }

        // New password validation
        if (!formData.newPassword) {
            newErrors.newPassword = "New password is required";
            isValid = false;
        } else if (formData.newPassword.length < 8) {
            newErrors.newPassword = "Password must be at least 8 characters";
            isValid = false;
        }

        // Confirm password validation
        if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // TODO: Implement API call to update user settings
            console.log("Form submitted:", formData);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-zinc-100 to-zinc-200 flex">
            <Sidebar />
            <main className="flex-1 flex p-6">
                <div className="w-full max-w-lg bg-white border border-zinc-200 p-8">
                    <h1 className="text-3xl font-bold text-black mb-2 tracking-tight">User Settings</h1>
                    <p className="text-zinc-500 mb-8">Update your profile and account information below.</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm font-semibold text-zinc-700 mb-1 flex items-center gap-2">
                                <FiUser className="inline text-zinc-400" /> Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-lg border ${errors.name ? "border-red-400" : "border-zinc-300"} bg-white px-4 py-2 shadow-sm focus:border-black focus:ring-2 focus:ring-zinc-200 transition sm:text-sm`}
                                autoComplete="name"
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-1 flex items-center gap-2">
                                <FiMail className="inline text-zinc-400" /> Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-lg border ${errors.email ? "border-red-400" : "border-zinc-300"} bg-white px-4 py-2 shadow-sm focus:border-black focus:ring-2 focus:ring-zinc-200 transition sm:text-sm`}
                                autoComplete="email"
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="linkedinUrl" className="block text-sm font-semibold text-zinc-700 mb-1 flex items-center gap-2">
                                <FiLinkedin className="inline text-zinc-400" /> LinkedIn URL <span className="text-zinc-400">*</span>
                            </label>
                            <input
                                type="url"
                                id="linkedinUrl"
                                name="linkedinUrl"
                                value={formData.linkedinUrl}
                                onChange={handleChange}
                                placeholder="https://linkedin.com/in/yourprofile"
                                className={`mt-1 block w-full rounded-lg border ${errors.linkedinUrl ? "border-red-400" : "border-zinc-300"} bg-white px-4 py-2 shadow-sm focus:border-black focus:ring-2 focus:ring-zinc-200 transition sm:text-sm`}
                                autoComplete="url"
                            />
                            {errors.linkedinUrl && (
                                <p className="mt-1 text-xs text-red-500">{errors.linkedinUrl}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-zinc-700 mb-1 flex items-center gap-2">
                                <FiPhone className="inline text-zinc-400" /> Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="+1 (555) 123-4567"
                                className={`mt-1 block w-full rounded-lg border ${errors.phoneNumber ? "border-red-400" : "border-zinc-300"} bg-white px-4 py-2 shadow-sm focus:border-black focus:ring-2 focus:ring-zinc-200 transition sm:text-sm`}
                                autoComplete="tel"
                            />
                            {errors.phoneNumber && (
                                <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
                            )}
                        </div>
                        <div className="pt-4 border-t border-zinc-200">
                            <h2 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                                <FiLock className="inline text-zinc-400" /> Change Password
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="currentPassword" className="block text-sm font-semibold text-zinc-700 mb-1">
                                        Current Password
                                    </label>
                                    <input
                                        type="password"
                                        id="currentPassword"
                                        name="currentPassword"
                                        value={formData.currentPassword}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full rounded-lg border ${errors.currentPassword ? "border-red-400" : "border-zinc-300"} bg-white px-4 py-2 shadow-sm focus:border-black focus:ring-2 focus:ring-zinc-200 transition sm:text-sm`}
                                        autoComplete="current-password"
                                    />
                                    {errors.currentPassword && (
                                        <p className="mt-1 text-xs text-red-500">{errors.currentPassword}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="newPassword" className="block text-sm font-semibold text-zinc-700 mb-1">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full rounded-lg border ${errors.newPassword ? "border-red-400" : "border-zinc-300"} bg-white px-4 py-2 shadow-sm focus:border-black focus:ring-2 focus:ring-zinc-200 transition sm:text-sm`}
                                        autoComplete="new-password"
                                    />
                                    {errors.newPassword && (
                                        <p className="mt-1 text-xs text-red-500">{errors.newPassword}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-zinc-700 mb-1">
                                        Confirm New Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full rounded-lg border ${errors.confirmPassword ? "border-red-400" : "border-zinc-300"} bg-white px-4 py-2 shadow-sm focus:border-black focus:ring-2 focus:ring-zinc-200 transition sm:text-sm`}
                                        autoComplete="new-password"
                                    />
                                    {errors.confirmPassword && (
                                        <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-lg bg-black py-2 px-6 text-base font-semibold text-white shadow hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 transition"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default UserSettings;