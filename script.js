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

// Save the Date to Calendar
function saveToCalendar() {
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Wedding Invite//EN\nBEGIN:VEVENT\nUID:wedding2025@marellapudi.com\nDTSTAMP:20250914T120000Z\nDTSTART:20251002T184300Z\nDTEND:20251002T200000Z\nSUMMARY=Wedding: Himamsu & Prasanna\nDESCRIPTION=Wedding of Himamsu & Prasanna. Venue: Grand Krishna A/c Function Hall, Mini Bypass Road, Eluru.\nLOCATION=Grand Krishna A/c Function Hall, Mini Bypass Road, Eluru\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent.replace(/\\n/g, "\r\n")], { type: 'text/calendar' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'wedding-invite.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
