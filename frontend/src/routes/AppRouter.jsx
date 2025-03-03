import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Piano from "../pages/Piano";
import Grabaciones from "../pages/Grabaciones";


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/piano" element={<Piano />} />
                <Route path="/grabaciones" element={<Grabaciones />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;