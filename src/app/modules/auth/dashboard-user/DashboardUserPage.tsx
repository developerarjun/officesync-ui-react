import '../dashboard-raw/dashboard-raw.css'
import {useNavigate } from 'react-router-dom';
function DashboardUserPage() {
    const navigate=useNavigate();
    return (
        <>
            {/* Navbar */}
            <nav>
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
                            <div className="sidebar-title">
                            <h4>Manage</h4>
                        </div>
                        <div className="sidebar-items">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                    </svg>
                                    <a href="">Leave</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>

                                    <a href="">Document</a>
                                </li>
                                <li>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                    <a href="">Inventory/Device</a>
                                </li>
                                <li>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>

                                    <a href="">Meeting</a>
                                </li>
                                <li>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                    </svg>
                                    <a href="">Time and Attendance</a>
                                </li>

                            </ul>
                        </div>
                        <div className="sidebar-title">
                            <h4>Project Management</h4>
                        </div>
                        <div className="sidebar-items">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                    </svg>

                                    <a href="">Project</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>


                                    <a href="">Time Tracker</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>

                                    <a href="">Calender</a>
                                </li>


                            </ul>
                        </div>
                        <div className="sidebar-title">
                            <h4>Project Management</h4>
                        </div>
                        <div className="sidebar-items">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                    </svg>

                                    <a href="">Project</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>


                                    <a href="">Time Tracker</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>

                                    <a href="">Calender</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar-title">
                            <h4>Project Management</h4>
                        </div>
                        <div className="sidebar-items">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                    </svg>

                                    <a href="">Project</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <a href="">Time Tracker</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>

                                    <a href="">Calender</a>
                                </li>
                            </ul>
                        </div>
                            </div>
                        </div>
                        {/* sidebar ends */}
                        <div className="main-content">
                            <div className="main-content-wrapper ">
                                <div className="page-title">
                                    <h3>Available Users</h3>
                                </div>
    
                                {/* Search and Filter */}
                            <div className="search-device-type-selection mtb-15">
                            <div className="device-type">
                                <div className="form">                                   
                                        <select name="" className="form-control" id="">
                                            <option value="">User Type</option>
                                        </select>                                    
                                </div>
                            </div>
                            <div className="inventory-search">
                                <div className="form">                                   
                                        <input type="text" name="" id="" placeholder="search"/>                                    
                                    
                                </div>
                            </div>
                        </div>
                        <div className="add-button">
                            <button className='btn btn-primary btn-sm mt-4'>+ Add User</button>
                        </div>
    
                    
    
                                {/* Table Section */}
                                <div className="table-layout-wrapper mt-40">
                                <div className="table-layout-data">
                              
                                <div className="table-content mt-10">
                                    <table>
                                        <thead className="table-head">
                                            <th>ID</th>
                                            <th>UserName</th>
                                            <th>Email</th>
                                            <th>Joined On</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                        </thead>
                                        <tbody>
                                           <tr>
                                            <td>1</td>
                                            <td>Sandesh Thapa</td>
                                            <td>sandeshthapa5907@gmail.com</td>
                                            <td>2024/03/23</td>
                                            <td>SuperUser</td>
                                            <td>Active</td>
                                           </tr>
                                           <tr>
                                            <td>1</td>
                                            <td>Sandesh Thapa</td>
                                            <td>sandeshthapa5907@gmail.com</td>
                                            <td>2024/03/23</td>
                                            <td>SuperUser</td>
                                            <td>Active</td>
                                           </tr> <tr>
                                            <td>1</td>
                                            <td>Sandesh Thapa</td>
                                            <td>sandeshthapa5907@gmail.com</td>
                                            <td>2024/03/23</td>
                                            <td>SuperUser</td>
                                            <td>Active</td>
                                           </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    
                         
                                </div>

                                {/* Pagination starts */}
                                <div className="pagination-container">
                            <ul className="pagination">
                            <li className="page-item"><a href="#" className="page-link pagination-arrow">ᐸ</a></li>

                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link active">2</a></li>
                                <li className="page-item"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">...</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item"><a href="#" className="page-link pagination-arrow">ᐳ</a></li>

                            
                            </ul>
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

export default DashboardUserPage;
