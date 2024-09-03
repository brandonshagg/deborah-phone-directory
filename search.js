function searchContacts() {
    // Get the search input value
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all the contact groups and their titles
    let contactGroups = document.querySelectorAll('.contact-group');
    
    // If the input is empty, show all contacts
    if (input === "") {
        contactGroups.forEach(group => {
            group.style.display = ""; // Show all groups
            let contacts = group.querySelectorAll('li');
            contacts.forEach(contact => {
                contact.style.display = ""; // Show all contacts
            });
        });
        return; // Exit the function early
    }
    
    // Otherwise, filter the contacts
    contactGroups.forEach(group => {
        // Get the h2 title of the group
        let title = group.querySelector('h2').textContent.toLowerCase();
        // Get all list items in the group
        let contacts = group.querySelectorAll('li');
        let groupMatches = false;

        // Check if the group title matches the search query
        if (title.includes(input)) {
            groupMatches = true;
            group.style.display = ""; // Show the group if the title matches
        } else {
            // If the group title doesn't match, check the individual contacts
            let contactMatches = false;
            contacts.forEach(contact => {
                let contactText = contact.textContent.toLowerCase();
                if (contactText.includes(input)) {
                    contact.style.display = ""; // Show the contact if it matches
                    contactMatches = true;
                } else {
                    contact.style.display = "none"; // Hide the contact if it doesn't match
                }
            });

            // Show the group if any contact within it matches
            if (contactMatches) {
                groupMatches = true;
                group.style.display = ""; // Show the group if any contact matches
            } else {
                group.style.display = "none"; // Hide the group if no contacts match
            }
        }
    });
}
