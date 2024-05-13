import '../dashboard-raw/dashboard-raw.css'
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './dashboard-raw.css';

function DashboardRawPage() {
    const navigate=useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const accordionData = [
        {
            title: 'Manage',
            items: ['Leave', 'Document', 'Inventory/Device', 'Meeting', 'Time and Attendance']
        },
        {
            title: 'Project Management',
            items: ['Project', 'Time Tracker', 'Calendar']
        },
        {
            title: 'Inventory Management',
            items: ['Sales', 'Stock', 'Purchase']
        },
    ];
    return (
        <>
            {/* Navbar */}
            <nav className='sticky-navbar'>
                <section className="nav-bar">
                    <div className="container">
                        <div className="navbar-wrap">
                            <div className="nav-bar-item-left">
                                <div className="navbar-logo">
                                    <img src="../../../../../src/assets/images/office-logo.png" alt="main logo" />
                                </div>
                            </div>
                            <div className="nav-bar-item-mid hide-on-phone">
                                <div className="nav-items">
                                    <ul>
                                        <li><a href="">Dashboard</a></li>
                                        <li><a href="">Projects</a></li>
                                        <li className=""><a href="" className="active">Manage</a></li>
                                        <li><a href="">Employee</a></li>
                                        <li> <a onClick={() => navigate('/dashboard-user')}>
                                            Users
                                            </a></li>
                                        <li>  
                                            <a onClick={() => navigate('/dashboard-user')}>
                                                Settings
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                         
                            <div className="nav-bar-item-right hide-on-phone">
                                <div className="profile">
                                <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>
    
                            </div>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
    
                            </div>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </nav>
            {/* End Navbar */}
    
            {/* Dashboard Content */}
            <section className="dashboard-content">
                <div className="container">
                    <div className="dashboard-inner-wrapper">
                        {/* sidebar start */}
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
                        {/* sidebar ends */}
                        <div className="main-content">
                            <div className="main-content-wrapper ">
                                <div className="page-title">
                                    <h3>Inventory and Device</h3>
                                </div>
    
                                {/* Search and Filter */}
                            <div className="search-device-type-selection mtb-15">
                            <div className="device-type">
                                <div className="form">                                   
                                        <select name="" className="form-control" id="">
                                            <option value="">Device Type</option>
                                        </select>                                    
                                </div>
                            </div>
                            <div className="inventory-search">
                                <div className="form">                                   
                                        <input type="text" name="" id="" placeholder="search"/>                                    
                                    
                                </div>
                            </div>
                        </div>
    
                                {/* Suggested layout */}
                                <div className="suggested-layout-wrapper mtb-30">
                                <p className="suggested-text">Suggested</p>
                                <div className="inner-items">
                                    <ul>                                  

                                        <li className="active">Inventory</li>
                                        <li className="norm">Device</li>
                                        
                                    </ul>
                                </div>
                                <div className="add-device">
                                    <a href="">Add Device</a>
                                </div>
                                </div>
    
                                {/* Table Section */}
                                <div className="table-layout-wrapper mt-40">
                                <div className="table-layout-data">
                                <div className="table-title mt-10">
                                    <p>Laptop</p>
                                    <span>Total 24</span>
                                </div>
                                <div className="table-content mt-10">
                                    <table>
                                        <thead className="table-head">
                                            <th>ID</th>
                                            <th>Brand</th>
                                            <th>Model no.</th>
                                            <th>Serial no.</th>
                                            <th>Vendor</th>
                                            <th>Quantity</th>
                                        </thead>
                                        <tbody>
                                           <tr>
                                            <td>1</td>
                                            <td>abc brand</td>
                                            <td>ABx123sasa</td>
                                            <td>158YTYTY585</td>
                                            <td>xya Vendor</td>
                                            <td>1</td>
                                           </tr>
                                           <tr>
                                            <td>1</td>
                                            <td>abc brand</td>
                                            <td>ABx123sasa</td>
                                            <td>158YTYTY585</td>
                                            <td>xya Vendor</td>
                                            <td>1</td>
                                           </tr>
                                           <tr>
                                            <td>1</td>
                                            <td>abc brand</td>
                                            <td>ABx123sasa</td>
                                            <td>158YTYTY585</td>
                                            <td>xya Vendor</td>
                                            <td>1</td>
                                           </tr>
                                           <tr>
                                            <td>1</td>
                                            <td>abc brand</td>
                                            <td>ABx123sasa</td>
                                            <td>158YTYTY585</td>
                                            <td>xya Vendor</td>
                                            <td>1</td>
                                           </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="table-layout-data">
                                <div className="table-title mt-10">
                                    <p>Monitor</p>
                                    <span>Total 24</span>
                                </div>
                                <div className="table-content mt-10">
                                    <table>
                                        <thead className="table-head">
                                            <th>ID</th>
                                            <th>Brand</th>
                                            <th>Model no.</th>
                                            <th>Serial no.</th>
                                            <th>Vendor</th>
                                            <th>Quantity</th>
                                        </thead>
                                        <tbody>
                                           <tr>
                                            <td>1</td>
                                            <td>abc brand</td>
                                            <td>ABx123sasa</td>
                                            <td>158YTYTY585</td>
                                            <td>xya Vendor</td>
                                            <td>1</td>
                                           </tr>
                                           <tr>
                                            <td>1</td>
                                            <td>abc brand</td>
                                            <td>ABx123sasa</td>
                                            <td>158YTYTY585</td>
                                            <td>xya Vendor</td>
                                            <td>1</td>
                                           </tr>
                                           <tr>
                                            <td>1</td>
                                            <td>abc brand</td>
                                            <td>ABx123sasa</td>
                                            <td>158YTYTY585</td>
                                            <td>xya Vendor</td>
                                            <td>1</td>
                                           </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="table-layout-data">
                                <div className="table-title mt-10">
                                    <p>Monitor</p>
                                    <span>Total 24</span>
                                </div>
                                <div className="table-content mt-10">
                                    <table>
                                        <thead className="table-head">
                                            <th>ID</th>
                                            <th>Brand</th>
                                            <th>Model no.</th>
                                            <th>Serial no.</th>
                                            <th>Vendor</th>
                                            <th>Quantity</th>
                                        </thead>
                                        <tbody>
                                           <tr>
                                            <td>1</td>
                                            <td>abc brand</td>
                                            <td>ABx123sasa</td>
                                            <td>158YTYTY585</td>
                                            <td>xya Vendor</td>
                                            <td>1</td>
                                           </tr>
                                           <tr>
                                            <td>1</td>
                                            <td>abc brand</td>
                                            <td>ABx123sasa</td>
                                            <td>158YTYTY585</td>
                                            <td>xya Vendor</td>
                                            <td>1</td>
                                           </tr>
                                           <tr>
                                            <td>1</td>
                                            <td>abc brand</td>
                                            <td>ABx123sasa</td>
                                            <td>158YTYTY585</td>
                                            <td>xya Vendor</td>
                                            <td>1</td>
                                           </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Dashboard Content */}
        </>
    );
}

export default DashboardRawPage;
