import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CollegeCardDetails = () => {
    const { cardId } = useParams();
    const [collegeData, setCollegeData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/CardData.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Find the college with the matching cardId
                const selectedCollege = data.find((college) => college.id == cardId);
                setCollegeData(selectedCollege);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching college data:', error);
                setLoading(false);
            });
    }, [cardId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!collegeData) {
        return <p>College data not found.</p>;
    }

    return (
        <div className="container mx-auto">

            <div className="grid grid-cols-1 gap-4 mt-10 mb-10">
                
                    <div className="card w-full bg-base-100 shadow-xl" >
                        <figure className="px-10 pt-10">
                            <img src={collegeData.image} alt="College" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <div className="text-center mb-5 md:mb-12">
                                <h2 className=" font-bold font-serif text-3xl lg:text-5xl text-gray-900">
                                    {collegeData.name}
                                </h2>
                            </div>
                            <div className="mb-5 md:mb-10">
                                <h2 className="text-black font-extrabold  text-2xl">Admission Process:</h2>
                                <h2 className="card-title font-medium mb-3 text-gray-600">
                                    {collegeData.admissionProcess}
                                </h2>

                                <h2 className="text-black font-extrabold  text-2xl">Events Details:</h2>
                                <h2 className="card-title font-medium mb-3 text-gray-600 ">
                                   {collegeData.eventsDetails}
                                </h2>

                                <h2 className="text-black font-extrabold  text-2xl">Research Works:</h2>
                                <h2 className="card-title 0 font-medium mb-3 text-gray-600 ">
                                    {collegeData.researchWorks}
                                </h2>

                                <h2 className="text-black font-extrabold  text-2xl">Sports Categories</h2>
                                <h2 className="card-title font-medium mb-3 text-gray-600">
                                    {collegeData.sportsCategories}
                                </h2>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default CollegeCardDetails;

