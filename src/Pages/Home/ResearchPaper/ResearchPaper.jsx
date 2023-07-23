import { Link } from "react-router-dom";

const ResearchPaper = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className="mt-20 mb-10">
                    <div className="text-5xl font-bold font-serif text-indigo-600">
                        <h2 className="text-center my-10">Recommended Research Papers</h2>
                    </div>
                    <table className="table table-zebra mx-auto">
                    
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-2xl font-bold">College</th>
                                <th className="text-2xl font-bold">Topic of the research</th>
                                <th className="text-2xl font-bold">Research link</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <th>1</th>
                                <td>Sunshine College</td>
                                <td>Advancements in Renewable Energy Technologies</td>
                                <td><Link to='http://americanengineeringjournal.com/index.php/journal/article/view/1'><button className='btn btn-sm bg-indigo-700 text-white'>see research</button></Link></td>
                            </tr>
                            
                            <tr>
                                <th>2</th>
                                <td>Stellar College</td>
                                <td>Development of AI-driven Healthcare Diagnostics</td>
                                <td><Link to='https://dl.acm.org/doi/abs/10.1145/3428361.3428362'><button className='btn btn-sm bg-indigo-700 text-white'>see research</button></Link></td>
                            </tr>
                          
                            <tr>
                                <th>3</th>
                                <td>Harmony College</td>
                                <td>Discovering New Exoplanets with Advanced Telescopes</td>
                                <td><Link to='https://iopscience.iop.org/article/10.1086/380421/meta'><button className='btn btn-sm bg-indigo-700 text-white'>see research</button></Link></td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>TechHub College</td>
                                <td>Advancements in Quantum Computing Algorithms</td>
                                <td><Link to='https://ieeexplore.ieee.org/abstract/document/7579104'><button className='btn btn-sm bg-indigo-700 text-white'>see research</button></Link></td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Artisans College</td>
                                <td>Personalized Medicine</td>
                                <td><Link to='https://europepmc.org/article/med/12596356'><button className='btn btn-sm bg-indigo-700 text-white'>see research</button></Link></td>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>Greenfield Academy</td>
                                <td>Sub-communities within this community</td>
                                <td><Link to='https://digital.lib.washington.edu/researchworks/handle/1773/47830'><button className='btn btn-sm bg-indigo-700 text-white'>see research</button></Link></td>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td>Global Business College</td>
                                <td>Revitalizing Traditional Crafts for Economic Sustainability</td>
                                <td><Link to='http://www.ijdesign.org/index.php/IJDesign/article/view/1077'><button className='btn btn-sm bg-indigo-700 text-white'>see research</button></Link></td>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td>Creative Art College</td>
                                <td>Healing Through Art An Examination of the Intersection of the Queer and Disabled Communities</td>
                                <td><Link to='https://digital.lib.washington.edu/researchworks/handle/1773/47738'><button className='btn btn-sm bg-indigo-700 text-white'>see research</button></Link></td>
                            </tr>
                            <tr>
                                <th>9</th>
                                <td>Sports Academy</td>
                                <td>Unsettling the Listening Body</td>
                                <td><Link to='https://digital.lib.washington.edu/researchworks/handle/1773/47747'><button className='btn btn-sm bg-indigo-700 text-white'>see research</button></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ResearchPaper;