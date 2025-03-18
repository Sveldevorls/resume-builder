export const defaultInfo = {
    "fullName": "John Smith",
    "location": "123 Main Street, Example city",
    "phone": "123-4567-890",
    "email": "john@example.com",
}

export const defaultEducation = [
    {
        "id": crypto.randomUUID(),
        "school": "University of Example",
        "location": "Example city",
        "degree": "Bachelor of Science in Information Technology",
        "startMonth": 6,
        "startYear": 2020,
        "endMonth": 6,
        "endYear": 2024,
        "notes": [
            {
                "id": crypto.randomUUID(),
                "content": "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management, Artificial Intelligence, Software Engineering",
            },
        ],
    },
]

export const defaultExperience = [
    {
        "id": crypto.randomUUID(),
        "company": "Example Inc.",
        "location": "Example city",
        "title": "Junior Software Engineer",
        "startMonth": 8,
        "startYear": 2024,
        "endMonth": 6,
        "endYear": 2025,
        "isCurrentlyEmployed": true,
        "notes": [
            {
                "id": crypto.randomUUID(),
                "content": "Assisted in the development of a cloud-based application using Python and Django",
            },
            {
                "id": crypto.randomUUID(),
                "content": "Designed and implemented automated test scripts, reducing manual testing time by 40%",
            },
            {
                "id": crypto.randomUUID(),
                "content": "Collaborated with senior developers to debug and optimize code for performance improvements",
            }
        ],
    },
    {
        "id": crypto.randomUUID(),
        "company": "Example Lt.",
        "location": "Example city",
        "title": "Software Development Intern",
        "startMonth": 6,
        "startYear": 2023,
        "endMonth": 12,
        "endYear": 2023,
        "isCurrentlyEmployed": false,
        "notes": [
            {
                "id": crypto.randomUUID(),
                "content": "Optimized database queries, reducing response times by 30%",
            },
            {
                "id": crypto.randomUUID(),
                "content": "Conducted code reviews and provided constructive feedback to team members",
            }
        ],
    },
]

export const defaultProjects = [
    {
        "id": crypto.randomUUID(),
        "title": "Online Bookstore Web App",
        "techs": "Javascript, React, Node.js, MongoDB",
        "notes": [
            {
                "id": crypto.randomUUID(),
                "content": "Developed a full-stack web application using React.js, Node.js, and MongoDB"
            },
            {
                "id": crypto.randomUUID(),
                "content": "Implemented user authentication, product search, and cart functionality",
            },
            {
                "id": crypto.randomUUID(),
                "content": "Deployed the app using AWS EC2 and S3 for hosting",
            }
        ],
    },
    {
        "id": crypto.randomUUID(),
        "title": "Task Manager Android App",
        "techs": "Kotlin",
        "notes": [
            {
                "id": crypto.randomUUID(),
                "content": "Developed a mobile application using Java and Firebase for task tracking"
            },
            {
                "id": crypto.randomUUID(),
                "content": "Implemented push notifications and offline support",
            },
            {
                "id": crypto.randomUUID(),
                "content": "Achieved 5000+ downloads on Google Play Store",
            }
        ],
    },
]

export const defaultSkills = [
    {
        "id": crypto.randomUUID(),
        "title": "Programming Languages",
        "content": "Kotlin, Python, C++, JavaScript",
    },
    {
        "id": crypto.randomUUID(),
        "title": "Web Technologies",
        "content": "HTML, CSS, React.js, Node.js",
    },
    {
        "id": crypto.randomUUID(),
        "title": "Databases",
        "content": "MySQL, MongoDB",
    },
    {
        "id": crypto.randomUUID(),
        "title": "Tools & Platforms",
        "content": "Git, Docker, AWS, Linux",
    }
]