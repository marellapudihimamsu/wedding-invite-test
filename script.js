// Initialize all tooltips
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});

// Show RSVP modal
function showRSVP() {
    var rsvpModal = new bootstrap.Modal(document.getElementById('rsvpModal'));
    rsvpModal.show();
}

// Handle RSVP form submission
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;
    const guests = document.getElementById('guests').value;
    
    // Here you would typically send this data to a server
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your RSVP has been received.\nWe ${attendance === 'yes' ? 'look forward to seeing you' : 'will miss you'} at the wedding!`);
    
    // Close the modal
    var rsvpModal = bootstrap.Modal.getInstance(document.getElementById('rsvpModal'));
    rsvpModal.hide();
    
    // Reset the form
    this.reset();
});
