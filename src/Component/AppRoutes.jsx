
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Movies from "./Movies";
import Theatres from "./Theatres";
import Offers from "./Offers";
import Signup from "./Signup";
import Signin from "./Signin";
import Stream from "./Stream";
import Events from "./Events";
import Plays from "./Plays";
import Sports from "./Sports";
import Activities from "./Activities";
import Contact from "./Contact";
import OTPverify from "./OTPverify";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Theatres" element={<Theatres />} />
            <Route path="/Offers" element={<Offers />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/Stream" element={<Stream />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Plays" element={<Plays />} />
            <Route path="/Sports" element={<Sports />} />
            <Route path="/Activities" element={<Activities />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/OTPverify" element={<OTPverify />} />
        </Routes>
    );
}

export default AppRoutes;
