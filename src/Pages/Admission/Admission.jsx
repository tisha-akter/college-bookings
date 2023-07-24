import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('https://college-bookings-server-tisha-akter.vercel.app/collegeDetails')
            .then((res) => res.json())
            .then((data) => setColleges(data));
    }, []);

    return (
        <section>
            <div className='container mx-auto my-24'>
                <div className="text-center">
                    <h2 className="text-5xl font-bold font-serif text-indigo-600 mb-5">Colleges Offering Admission</h2>
                    <p className="text-gray-600 mb-20">
                        Explore the list of colleges below. Click on a college to view more
                        information and start your admission process.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-2xl">
                    {colleges.map((college) => (
                        <Link
                            key={college._id}
                            to={`/admission/${college._id}`}
                            className="p-4 border rounded shadow"
                        >
                            {college.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Admission;





