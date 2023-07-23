import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = () => {
    const [collegesData, setCollegesData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleColleges, setVisibleColleges] = useState(3);

    useEffect(() => {
        fetch('http://localhost:5000/collegeDetails')
            .then((response) => response.json())
            .then((data) => setCollegesData(data))
            .catch((error) => console.error('Error fetching colleges data:', error));
    }, []);

    // Filter colleges based on search term
    const filteredColleges = collegesData.filter((college) =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto">
            <div className="form-control mb-4 mt-10">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Search…"
                        className="input input-bordered"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-square">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredColleges.slice(0, visibleColleges).map((college) => (
                    <div className="card w-full bg-base-100 shadow-xl" key={college._id}>
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
                                    <span className="font-semibold text-gray-900 text-2xl">Events:</span> {college.events}
                                </h2>

                                <h2 className="card-title 0 font-medium mb-3 text-gray-600">
                                    <span className="font-semibold text-gray-900 text-2xl">Research History: </span>{' '}
                                    {college.researchHistory}
                                </h2>
                                <h2 className="card-title font-medium mb-3 text-gray-600">
                                    <span className="font-semibold text-gray-900 text-2xl">Sports: </span> {college.sports}
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
            {visibleColleges < filteredColleges.length && (
                <button
                    className="btn btn-primary  mx-auto mb-5 mt-5 block text-white bg-indigo-700 rounded-xl border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600"
                    onClick={() => setVisibleColleges((prev) => prev + 3)}
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default CollegeCard;
