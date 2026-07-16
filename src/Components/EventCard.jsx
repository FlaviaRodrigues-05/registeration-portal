import "../styles/EventCard.css";

function EventCard(){
    return(
        <section id="event" className="container">
            <div className="glass event-card">
                <h2>Upcoming Event</h2>
                <h3> ATS Annual Talent Search 2026</h3>
                <p> <strong> Date:</strong> 15 August 2026</p>
                <p> <strong> Venue:</strong> Mukesh Patel Auditorium</p>
                <p> <strong> Time:</strong> 10:00 AM</p>
                <button className="primary-btn">
                    Register
                </button>
            </div>
        </section>
    );
}

export default EventCard;