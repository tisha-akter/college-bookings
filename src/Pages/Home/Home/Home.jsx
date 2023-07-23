import CollegeCard from "../CollegeCard/CollegeCard";
import Gallery from "../Gallery/Gallery";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <CollegeCard></CollegeCard>
            <Gallery></Gallery>
            <ResearchPaper></ResearchPaper>
            <Review></Review>
        </div>
    );
};

export default Home;