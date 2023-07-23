import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Colleges = () => {
    const [collegesData, setCollegesData] = useState([]);

    useEffect(() => {
        // Fetch the college data from CardData.json
        fetch('http://localhost:5000/collegeDetails')
            .then((response) => response.json())
            .then((data) => setCollegesData(data))
            .catch((error) => console.error('Error fetching colleges data:', error));
    }, []);

    return (
        <div className='container mx-auto my-20'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {collegesData.map((college) => (
                    <div className="card w-full bg-base-100 shadow-xl" key={college.id}>
                        <figure className="px-10 pt-10">
                            <img src={college.image} alt="College" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <div className="text-center mb-5 md:mb-12">
                                <h2 className=" font-bold font-serif text-3xl lg:text-5xl text-gray-900">
                                    {college.name}
                                </h2>
                            </div>
                            <div className="mb-5 md:mb-10">
                                <h2 className="card-title font-medium mb-3 text-gray-600">
                                    <span className="font-semibold text-gray-900 text-2xl">Admission Date:</span>{' '}
                                    {college.admissionDates}
                                </h2>
                                <h2 className="card-title font-medium mb-3 text-gray-600">
                                    <span className="font-semibold text-gray-900 text-2xl">Ratings:</span> {college.rating}
                                </h2>

                                <h2 className="card-title 0 font-medium mb-3 text-gray-600">
                                    <span className="font-semibold text-gray-900 text-2xl">Number of Research: </span>{' '}
                                    {college.researchCount}
                                </h2>
                            </div>
                            <div className="">
                                <Link to={`/college-card-details/${college._id}`}>
                                    <button className="btn btn-primary ml-auto text-white bg-indigo-700 rounded-xl border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600">
                                        View Detail
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Colleges;
