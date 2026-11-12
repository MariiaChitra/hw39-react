import { CourseCard } from "./CourseCard";

export function CourseList({ courses }) {
    if (!courses || courses.length === 0) {
        return <p className="empty-message">No courses found.</p>;
    }

    return (
        <section className="course-list">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </section>
    );
}