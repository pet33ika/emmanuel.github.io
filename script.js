
        // Mock data
        const monthlyRegistrations = [
            { month: 'Jan', registrations: 700 },
            { month: 'Feb', registrations: 1000 },
            { month: 'Mar', registrations: 800 },
            { month: 'Apr', registrations: 450 },
            { month: 'May', registrations: 1100 },
            { month: 'Jun', registrations: 900 },
            { month: 'Jul', registrations: 600 },
            { month: 'Aug', registrations: 350 },
            { month: 'Sep', registrations: 900 },
            { month: 'Oct', registrations: 700 },
            { month: 'Nov', registrations: 1000 },
            { month: 'Dec', registrations: 600 },
        ];

        const events = [
            { name: 'Cloud Innovation Summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
            { name: 'Blockchain Revolution Conference', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
            { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'Completed' },
            { name: 'Future Of Fintech Forum', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
            { name: 'Data Analytics in Business', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
            { name: 'Sustainable Energy Expo', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'Completed' },
            { name: 'Web3 Interface Workshop', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
            { name: 'Cybersecurity for Startups', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
            { name: 'Smart Cities Forum', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'Completed' },
        ];

        // Chart initialization
        const ctx = document.getElementById('registrationsChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: monthlyRegistrations.map(item => item.month),
                datasets: [{
                    label: 'Registrations',
                    data: monthlyRegistrations.map(item => item.registrations),
                    backgroundColor: 'rgba(99, 102, 241, 0.6)',
                    borderColor: 'rgba(99, 102, 241, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        // Populate events table
        const tableBody = document.getElementById('eventsTableBody');
        events.forEach(event => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = event.name;
            row.insertCell(1).textContent = event.date;
            row.insertCell(2).textContent = event.speaker;
            const statusCell = row.insertCell(3);
            const statusSpan = document.createElement('span');
            statusSpan.textContent = event.status;
            statusSpan.className = `status ${event.status.toLowerCase().replace(' ', '-')}`;
            statusCell.appendChild(statusSpan);
        });
        const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const textSpan = toggleButton.querySelector('span'); // Select the <span> element for text

toggleButton.addEventListener('click', function() {
  // Toggle the dark-mode class on the body element
  body.classList.toggle('dark-mode');

  // Change the text within the <span> element depending on the mode
  if (body.classList.contains('dark-mode')) {
    textSpan.textContent = 'Light Mode';
  } else {
    textSpan.textContent = 'Dark Mode';
  }
});

const sidebar = document.querySelector('.sidebar');

// Update the collapse button event listener
const collapseBtn = document.getElementById('collapse-btn');

collapseBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    document.querySelector('.main-content').classList.toggle('expanded');
});

        // News content 
const images = ['/emmanuel.github.io/images/woman.jpg', '/emmanuel.github.io/images/man.jpg', '/emmanuel.github.io/images/laptop.jpg'];
let currentImageIndex = 0;

const newsImage = document.getElementById('news-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
  newsImage.src = images[currentImageIndex];
});

nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
  newsImage.src = images[currentImageIndex];
});
// Sidebar toggle functionality
const menuToggle = document.getElementById('menu-toggle');
//const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});