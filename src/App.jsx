// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Donation from "./pages/sessionbooking";
import ProgramsPage from "./pages/programs/programspage";
//import BlogPage from "./pages/blog"; // <-- Your main blog page
import BlogPostPage from "./pages/blog/[slug]"; // <-- Import the new dynamic page
import BlogPage from "./pages/blog";
import ServiceDetailPage from "./pages/services/[slug]";
import Bg2 from './assets/Bg2.jpg';

function App() {
  return (
   // Root Body: Fixed Background Image and Color
    <div 
      className="min-h-screen w-full p-0 flex flex-col items-center text-text-dark"
      style={{
       // backgroundColor: '#946b6bff', 
          backgroundImage: `url(${Bg2})`,
        backgroundSize: 'cover', 
        backgroundAttachment: 'fixed',
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/sessionbooking" element={<Donation />} />
        <Route path="/ProgramsPage" element={<ProgramsPage />} />
        <Route path="/blog" element={<BlogPage />} /> {/* <-- Route for the list of all post*/}
        <Route path="/blog/:slug" element={<BlogPostPage />} /> 
  
        
        {/* <-- New dynamic route for a single post */}
        <Route path="/service/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
