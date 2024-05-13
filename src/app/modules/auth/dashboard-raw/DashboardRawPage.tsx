import './dashboard-raw.css';
import Header from '../../../shared/components/header/header';
import SideNavBar from '../../../shared/components/sidenavbar/sidenavbar';
import DeviceTable from '../../../shared/components/table/devicetable';
import _ from 'lodash';


const rows = [
    {
        ID: 1,
        Brand: "Lenovo",
        ModelNo: "ThinkPad X1 Carbon",
        SerialNo: "ABC123",
        Vendor: "Tech Solutions Inc.",
        Quantity: 10
    },
    {
        ID: 2,
        Brand: "Dell",
        ModelNo: "Latitude 7400",
        SerialNo: "DEF456",
        Vendor: "Computer Universe",
        Quantity: 8
    },
    {
        ID: 3,
        Brand: "HP",
        ModelNo: "EliteBook 840 G7",
        SerialNo: "GHI789",
        Vendor: "Electro Gadgets Ltd.",
        Quantity: 12
    },
    {
        ID: 4,
        Brand: "Apple",
        ModelNo: "MacBook Pro 13",
        SerialNo: "JKL012",
        Vendor: "Digital Dreams",
        Quantity: 5
    },
    {
        ID: 5,
        Brand: "Asus",
        ModelNo: "ZenBook UX333",
        SerialNo: "MNO345",
        Vendor: "Global Technologies",
        Quantity: 6
    },
    {
        ID: 6,
        Brand: "Acer",
        ModelNo: "Swift 5",
        SerialNo: "PQR678",
        Vendor: "Ace Computers Inc.",
        Quantity: 7
    }
];

const total = _.sumBy(rows,"Quantity")

function DashboardRawPage() {
    return (
        <>
            <Header />
            {/* Dashboard Content */}
            <section className="dashboard-content">
                <div className="container">
                    <div className="dashboard-inner-wrapper">
                        <SideNavBar />
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
                                            <input type="text" name="" id="" placeholder="search" />

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
                                            <span>Total {total}</span>
                                        </div>
                                        <div className="table-content mt-10">
                                            <DeviceTable rows={rows}/>
                                        </div>
                                    </div>
                                    <div className="table-layout-data">
                                        <div className="table-title mt-10">
                                            <p>Monitor</p>
                                            <span>Total {total}</span>
                                        </div>
                                        <div className="table-content mt-10">
                                            <DeviceTable rows={rows}/>
                                        </div>
                                    </div>
                                    <div className="table-layout-data">
                                        <div className="table-title mt-10">
                                            <p>Keyboard</p>
                                            <span>Total {total}</span>
                                        </div>
                                        <div className="table-content mt-10">
                                            <DeviceTable rows={rows}/>
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
