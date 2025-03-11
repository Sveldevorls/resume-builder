export const defaultInfo = {
    "fullName": "Lorem Ipsum",
    "location": "Sample city",
    "phone": "123-4567-890",
    "email": "loremipsum@example.com",
}

export const defaultEducation = [
    {
        "id": crypto.randomUUID(),
        "school": "University of Sample Text",
        "location": "Sample city",
        "degree": "Bachelor of Arts in Examplology",
        "startMonth": 6,
        "startYear": 2018,
        "endMonth": 6,
        "endYear": 2022,
        "extraInfo": [
            {
                "id": crypto.randomUUID(),
                "content": "GPA 3.8",
            },
        ],
    },
]

export const defaultExperience = [
    {
        "id": crypto.randomUUID(),
        "company": "Example Inc.",
        "location": "Sample city",
        "title": "Sample analysis",
        "startMonth": 6,
        "startYear": 2024,
        "endMonth": null,
        "endYear": null,
        "isCurrentlyEmployed": true,
        "extraInfo": [
            {
                "id": crypto.randomUUID(),
                "content": "Improved company efficiency by 30% by introducing analysis SOPs",
            }

        ],
    },
    {
        "id": crypto.randomUUID(),
        "company": "Lipsum",
        "location": "Sample city",
        "title": "Sample tester",
        "startMonth": 6,
        "startYear": 2022,
        "endMonth": 12,
        "endYear": 2023,
        "isCurrentlyEmployed": false,
        "extraInfo": [
            {
                "id": crypto.randomUUID(),
                "content": "Raised customer satisfaction by 50% through new sample text services",
            },
            {
                "id": crypto.randomUUID(),
                "content": "Created over 20 types of sample formats widely used in the field",
            }
        ],
    },
]

export const defaultProjects = [
    {
        "id": crypto.randomUUID(),
        "title": "Sample Messages",
        "techs": "Javascript, Express, Node.js, React, Passport.js, PostgreSQL, Prisma, Socke.Io",
        "extraInfo": [
            {
                "id": crypto.randomUUID(),
                "content": "Developed a chat application with Node.js as the backend"
            },
            {
                "id": crypto.randomUUID(),
                "content": "Integrated Socket.Io for real time bidirectional communication",
            },
            {
                "id": crypto.randomUUID(),
                "content": "Created a database as message storage using PostgreSQL",
            }
        ],
    },
]

export const defaultSkills = [
    {
        "id": crypto.randomUUID(),
        "title": "Programming Languages",
        "content": "Javascript, HTML, CSS, SQL, Python",
    },
    {
        "id": crypto.randomUUID(),
        "title": "Frameworks",
        "content": "React, Vue (currently learning)",
    },
    {
        "id": crypto.randomUUID(),
        "title": "Languages",
        "content": "English (native), French (native), German (C1)",
    }
]