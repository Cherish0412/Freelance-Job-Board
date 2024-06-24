const form = document.getElementById('job-posting-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const jobTitle = document.getElementById('job-title').value;
    const jobDescription = document.getElementById('job-description').value;
    const jobCategory = document.getElementById('job-category').value;
    const jobLocation = document.getElementById('job-location').value;

    if (!jobTitle || !jobDescription || !jobCategory || !jobLocation) {
        alert('Please fill in all fields');
        return;
    }

    const job = {
        title: jobTitle,
        description: jobDescription,
        category: jobCategory,
        location: jobLocation
    };

    try {
        const response = await fetch('/api/jobs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(job)
        });
        const data = await response.json();
        console.log(data);
        alert('Job posted successfully!');
    } catch (error) {
        console.error(error);
        alert('Error posting job');
    }
});