import Directory from "../../components/directory/directory.component.jsx";
import categories from "../../data/categories.js";

const Home = () => {
    return <Directory categories={categories} />;
};

export default Home;
