export function AvailabilityBadge({ isAvailable }) {
    return (
        <span className={`badge ${isAvailable ? "badge--open" : "badge--closed"}`}>
      {isAvailable ? "Available" : "Enrollment Closed"}
    </span>
    );
}