import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";


//  React day picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Donation = () => {

    const { user } = useContext(AuthContext);
    const { title, _id, photoURL } = useLoaderData();
    const [Date, setStartDate] = useState(null)


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const title = form.title.value;
        const photo = form.photo.value;
        const registerUser = { email, name, img: photo, title };

        console.log(registerUser, 'donation 27');
        // create a new data object registered user data...
        fetch('http://localhost:5000/registerUser/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registerUser)
        })
            .then(res => res.json())
            .then(data => console.log(data));


    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-300 rounded-xl">
                <div className="w-1/2 flex-col ">
                    <div className="card-side bg-base-100 shadow-xl">
                        <form onSubmit={handleSubmit} className="card-body  my-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">your id is</span>
                                </label>
                                <input type="text" placeholder="id" name="id" defaultValue={_id} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">item</span>
                                </label>
                                <input type="text" placeholder="Title" name="title" defaultValue={title} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">picture</span>
                                </label>
                                <input type="text" placeholder="photo" name="photo" defaultValue={photoURL} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Event date</span>
                                </label>
                                <DatePicker
                                    className="w-full border p-2 rounded-lg "
                                    placeholderText="Pick your Date"
                                    selected={Date}
                                    onChange={(date) => setStartDate(date)}
                                    captionLayout="dropdown-buttons"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-info text-white" value={`Donate`} />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;