import { useState, useEffect } from 'react';

const Gallery = () => {
    const [collegesData, setCollegesData] = useState([]);

    useEffect(() => {
        fetch('https://college-bookings-server-tisha-akter.vercel.app/collegeDetails')
            .then((response) => response.json())
            .then((data) => setCollegesData(data))
            .catch((error) => console.error('Error fetching colleges data:', error));
    }, []);

    return (
        <div className="container mx-auto mt-8 mb-5">
            <div className='text-5xl font-bold font-serif text-indigo-600 '>
                <h2 className="text-center my-10">College Graduate Group Pictures</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {collegesData.map((college) => (
                    <div key={college._id} className="relative">
                        <img
                            src={college.graduatePicture}
                            alt={`College Graduate - ${college.name}`}
                            className="w-full h-full bg-cover rounded-lg"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-75 hover:opacity-100">
                            <h3 className="text-lg font-medium text-white">{college.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;




