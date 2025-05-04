
import { Sidebar } from "../components/RetractingSideBar";

const Dashboard = () => {
    return (
        <div>
            <div className="flex bg-indigo-50">
            <Sidebar />
            <ExampleContent />
            </div>
        </div>
    )
}

const ExampleContent = () => <div className="h-[200vh] w-full"></div>;

export default Dashboard;