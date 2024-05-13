
const title = ["ID", "Brand", "Model No.", "Serial No.", "Vendor", "Quantity"];

const DeviceTable = ({rows}) => {
    return (
        <table>
            <thead className="table-head">
                {title.map((title) => (
                    <th>{title}</th>
                ))}
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        <td>{row.ID}</td>
                        <td>{row.Brand}</td>
                        <td>{row.ModelNo}</td>
                        <td>{row.SerialNo}</td>
                        <td>{row.Vendor}</td>
                        <td>{row.Quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DeviceTable