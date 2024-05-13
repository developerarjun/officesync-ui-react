import { useState } from "react";

const accordionData = [
    {
        title: 'Manage',
        items: ['Leave', 'Document', 'Inventory/Device', 'Meeting', 'Time and Attendance']
    },
    {
        title: 'Project Management',
        items: ['Project', 'Time Tracker', 'Calendar']
    }
];



const SideNavBar = () => {
 const [activeIndex, setActiveIndex] = useState(0);
 const toggleAccordion = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
 };

 return (
        <div className="sidebar hide-on-phone">
            <div className="sidebar-content">
                {accordionData.map((section, index) => (
                    <div className="accordion-item" key={index}>
                        <div className="sidebar-title ponter-cursor" onClick={() => toggleAccordion(index)}>
                            <div className="title-flex">
                                <h4 className=''>{section.title}</h4>
                                {activeIndex === index ? (
                                    <img src="../../../../../src/assets/images/down.png" className='img-fluid' alt="" />
                                ) : (
                                    <img src="../../../../../src/assets/images/left-arrow.png" className='img-fluid' alt="" />
                                )}
                            </div>


                        </div>
                        {activeIndex === index && (
                            <div className="sidebar-items">
                                <ul>
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                            </svg>

                                            <a href="">{item}</a>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideNavBar;