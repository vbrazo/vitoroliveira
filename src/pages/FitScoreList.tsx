import { motion } from "framer-motion";
import { useState } from "react";
import { Sidebar } from "../components/RetractingSideBar";
import { useNavigate } from "react-router-dom";
import { FiTrash, FiEye } from "react-icons/fi";

const FitScoreList = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
            <Table />
        </div>
    );
};

const Table = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState(userData);
    const [modalOpen, setModalOpen] = useState(false);
    const [userToRemove, setUserToRemove] = useState<User | null>(null);

    const confirmRemoveUser = (user: User) => {
        setUserToRemove(user);
        setModalOpen(true);
    };

    const removeUser = () => {
        if (userToRemove) {
            setUsers(users.filter(u => u.id !== userToRemove.id));
            setUserToRemove(null);
            setModalOpen(false);
        }
    };

    const cancelRemove = () => {
        setUserToRemove(null);
        setModalOpen(false);
    };

    const shift = (id: number, direction: "up" | "down") => {
        const index = users.findIndex((u) => u.id === id);
        const usersCopy = [...users];

        if (direction === "up") {
            if (index > 0) {
                [usersCopy[index], usersCopy[index - 1]] = [
                    usersCopy[index - 1],
                    usersCopy[index],
                ];
            }
        } else {
            if (index < usersCopy.length - 1) {
                [usersCopy[index], usersCopy[index + 1]] = [
                    usersCopy[index + 1],
                    usersCopy[index],
                ];
            }
        }

        setUsers(usersCopy);
    };

    return (
        <>
        <div className="flex flex-row">
        <Sidebar />
            <div className="w-full bg-white/90 shadow-2xl overflow-x-auto">
                <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-gradient-to-r from-white via-slate-50 to-slate-100 rounded-t-2xl">
                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Fit Score Analyses</h2>
                    <button
                        onClick={() => navigate('/fit-score/new')}
                        className="bg-black hover:bg-slate-800 text-white px-6 py-2 rounded-lg shadow transition font-semibold text-base"
                    >
                        + New Analysis
                    </button>
                </div>
                <table className="w-full text-slate-700">
                    <thead>
                        <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider bg-slate-50">
                            <th className="pl-4 w-8"></th>
                            <th className="text-start p-4 font-semibold">Company Name</th>
                            <th className="text-center p-4 font-semibold">Score Fit</th>
                            <th className="text-start p-4 font-semibold"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <TableRows
                                    key={user.id}
                                    user={user}
                                    index={index}
                                    shift={shift}
                                    confirmRemoveUser={confirmRemoveUser}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        {/* Modal */}
        {modalOpen && userToRemove && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
                    <h3 className="text-lg font-semibold mb-4">Remove Analysis</h3>
                    <p className="mb-6">
                        Are you sure you want to remove <span className="font-bold">{userToRemove.name}</span>?
                    </p>
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={cancelRemove}
                            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={removeUser}
                            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

interface TableRowsProps {
    user: User;
    index: number;
    shift: (id: number, direction: "up" | "down") => void;
    confirmRemoveUser: (user: User) => void;
}

const TableRows = ({ user, index, shift, confirmRemoveUser }: TableRowsProps) => {
    const navigate = useNavigate();
    return (
        <motion.tr
            layoutId={`row-${user.id}`}
            className={`text-sm transition hover:bg-slate-100 focus-within:bg-slate-100 ${user.id % 2 ? "bg-slate-50" : "bg-white"}`}
        >
            <td className="pl-4 w-8 text-lg"></td>
            <td className="p-4 flex items-center gap-3 overflow-hidden">
                <img
                    src={user.photoURL}
                    alt="Example user photo"
                    className="w-10 h-10 rounded-full bg-slate-200 object-cover object-top shrink-0 border-2 border-slate-300"
                />
                <div>
                    <span className="block mb-1 font-semibold text-slate-800">{user.name}</span>
                    <span className="block text-xs text-slate-500">{user.contact}</span>
                </div>
            </td>
            <td className="p-4 text-center">
                <div className={`flex items-center gap-2 font-medium justify-center`}>
                    <span>{user.score}</span>
                </div>
            </td>
            <td className="p-4 flex gap-2">
                <button
                    onClick={() => navigate(`/fit-score/result`)}
                    className="text-slate-500 hover:text-black transition"
                    title="View Report"
                >
                    <FiEye size={18} />
                </button>
                <button
                    onClick={e => {
                        e.stopPropagation();
                        confirmRemoveUser(user);
                    }}
                    className="text-red-500 hover:text-red-700 transition"
                    title="Remove"
                >
                    <FiTrash size={18} />
                </button>
            </td>
        </motion.tr>
    );
};

interface User {
    id: number;
    name: string;
    contact: string;
    photoURL: string;
    maxRank: number;
    status: string;
    score: number;
}

const userData: User[] = [
    {
        id: 1,
        name: "Gun.io",
        contact: "andythompson@example.com",
        photoURL: "https://api.dicebear.com/7.x/identicon/svg?seed=Gunio",
        maxRank: 112,
        status: "online",
        score: 90,
    },
    {
        id: 2,
        name: "Paywith",
        contact: "tsmith@example.com",
        photoURL: "https://api.dicebear.com/7.x/identicon/svg?seed=Paywith",
        maxRank: 41,
        status: "online",
        score: 90,
    },
    {
        id: 3,
        name: "Google",
        contact: "john.a@example.com",
        photoURL: "https://api.dicebear.com/7.x/identicon/svg?seed=Google",
        maxRank: 9,
        status: "offline",
        score: 90,
    },
    {
        id: 4,
        name: "Amazon",
        contact: "craigpeterson@example.com",
        photoURL: "https://api.dicebear.com/7.x/identicon/svg?seed=Amazon",
        maxRank: 1,
        status: "online",
        score: 90,
    },
    {
        id: 5,
        name: "Microsoft",
        contact: "j.horowitz@example.com",
        photoURL: "https://api.dicebear.com/7.x/identicon/svg?seed=Microsoft",
        maxRank: 9999,
        status: "pending",
        score: 90,
    },
];

export default FitScoreList;
