import { useState } from 'react';
import { useParams } from 'react-router-dom';

const AdmissionForm = () => {
    const { collegeId } = useParams(); 

    const [candidateName, setCandidateName] = useState('');
    const [subject, setSubject] = useState('');
    const [candidateEmail, setCandidateEmail] = useState('');
    const [candidatePhone, setCandidatePhone] = useState('');
    const [address, setAddress] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            collegeId,
            candidateName,
            subject,
            candidateEmail,
            candidatePhone,
            address,
            dateOfBirth,
            image,
        };

        console.log(formData);
    };

    return (
        <section>
            <div className="container mx-auto my-24">
                <h2 className="text-2xl my-5 text-center font-bold text-indigo-600 mb-6">
                    Admission Form for College ID: {collegeId}
                </h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto border shadow-lg rounded-lg p-8">
                    <input
                        type="text"
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        placeholder="Candidate Name"
                        className="border border-indigo-600 rounded p-2 w-full mb-4"
                    />

                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject"
                        className="border border-indigo-600 rounded p-2 w-full mb-4"
                    />

                    <input
                        type="email"
                        value={candidateEmail}
                        onChange={(e) => setCandidateEmail(e.target.value)}
                        placeholder="Candidate Email"
                        className="border border-indigo-600 rounded p-2 w-full mb-4"
                    />

                    <input
                        type="tel"
                        value={candidatePhone}
                        onChange={(e) => setCandidatePhone(e.target.value)}
                        placeholder="Candidate Phone"
                        className="border border-indigo-600 rounded p-2 w-full mb-4"
                    />

                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        className="border border-indigo-600 rounded p-2 w-full mb-4"
                    />

                    <input
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        placeholder="Date of Birth"
                        className="border border-indigo-600 rounded p-2 w-full mb-4"
                    />

                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="border border-indigo-600 rounded p-2 w-full mb-4"
                    />

                    <button
                        type="submit"
                        className="bg-indigo-600 w-full text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AdmissionForm;


