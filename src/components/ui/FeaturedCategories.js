import { faMicrochip, faBolt, faMemory, faDisplay, faHardDrive, faServer } from "@fortawesome/free-solid-svg-icons";
import FeaturedCategory from './FeaturedCategory';

const FeaturedCategories = () => {
    const categories = [
        {
            id: 1,
            title: "CPU/Processor",
            bgColor: "pink-300",
            icon: faMicrochip,
            route: "cpu"
        },
        {
            id: 2,
            title: "Motherboard",
            bgColor: "indigo-300",
            icon: faServer,
            route: "motherboard"
        },
        {
            id: 3,
            title: "RAM",
            bgColor: "yellow-300",
            icon: faHardDrive,
            route: "ram"
        },
        {
            id: 4,
            title: "Power Supply Unit",
            bgColor: "blue-300",
            icon: faBolt,
            route: "power-supply"
        },
        {
            id: 5,
            title: "Storage Device",
            bgColor: "green-300",
            icon: faMemory,
            route: "storage"
        },
        {
            id: 6,
            title: "Monitor",
            bgColor: "orange-300",
            icon: faDisplay,
            route: "monitor"
        },
    ]
    return (
        <div className="bg-base-200 py-5 md:py-10 lg:py-16">
            <h2 className=' uppercase text-xl md:text-3xl text-secondary text-center mb-5 md:mb-10 lg:mb-16'>Featured Categories</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-16 lg:px-36 gap-10'>
                {
                    categories.map((category) => <FeaturedCategory
                        key={category.id}
                        category={category}
                    ></FeaturedCategory>)
                }
            </div>
        </div>
    );
};

export default FeaturedCategories;