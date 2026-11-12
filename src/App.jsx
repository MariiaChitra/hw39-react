import { courses } from "./data/courses";
import { Header } from "./components/Header";
import { CourseList } from "./components/CourseList";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
      <div className="app">
        <Header />
        <main className="main-content">
          <CourseList courses={courses} />
        </main>
        <Footer />
      </div>
  );
}

export default App;