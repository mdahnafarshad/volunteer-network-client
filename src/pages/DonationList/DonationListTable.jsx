import DonationListTableRow from "./DonationListTableRow";


const DonationListTable = ({data}) => {
   
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <h3>Email</h3>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>item No</th>
                            <th>Donation Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map(res => <DonationListTableRow
                            key={res._id}
                            data={res}
                            ></DonationListTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DonationListTable;