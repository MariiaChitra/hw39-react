import { Card } from "./Card";
import { AvailabilityBadge } from "./AvailabilityBadge";

export function CourseCard({ course }) {
    const { title, teacher, duration, price, isAvailable } = course;

    return (
        <Card className="course-card">
            <div className="course-card__header">
                <h2>{title}</h2>
                <AvailabilityBadge isAvailable={isAvailable} />
            </div>

            {/* Task 1.7: Conditional rendering with && */}
            {price > 400 && <p className="premium-label">Premium Course</p>}

            <ul className="course-card__details">
                <li>
                    <strong>Instructor:</strong> {teacher}
                </li>
                <li>
                    <strong>Duration:</strong> {duration} hrs
                </li>
                <li>
                    <strong>Price:</strong> ${price}
                </li>
            </ul>
        </Card>
    );
}