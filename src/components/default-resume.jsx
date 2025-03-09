export const defaultInfo = {
    "fullName": "Lorem Ipsum",
    "title": "Sample title",
    "location": "Sample city",
    "mail": "loremipsum@example.com",
}

export const defaultEducation = [
    {
        "id": crypto.randomUUID(),
        "school": "University of Sample Text",
        "location": "Sample city",
        "degree": "Bachelor of Arts in Examplology",
        "start": "2018",
        "end": "2022",
        "extraInfo": ["GPA 3.8"],
    },
]

export const defaultExperiences = [
    {
        "id": crypto.randomUUID(),
        "company": "Example Inc.",
        "location": "Sample city",
        "title": "Sample analysis",
        "start": "2024",
        "end": "Present",
        "extraInfo": [
            "Improved company efficiency by 30% by introducing analysis SOPs"
        ],
    },
    {
        "id": crypto.randomUUID(),
        "company": "Lipsum",
        "location": "Sample city",
        "title": "Sample tester",
        "start": "2022",
        "end": "2023",
        "extraInfo": [
            "Raised customer satisfaction by 50% through new sample text services",
            "Created over 20 types of sample formats widely used in the field"
        ],
    },
]

export const defaultProjects = [
    {
        "id": crypto.randomUUID(),
        "title": "Sample Messages",
        "techs": "Javascript, Express, Node.js, React, Passport.js, PostgreSQL, Prisma, Socke.Io",
        "date": "2022-02",
        "extraInfo": [
            "Developed a chat application with Node.js as the backend",
            "Integrated Socket.Io for real time bidirectional communication",
            "Created a database as message storage using PostgreSQL"
        ],
    },
]

export const defaultSkills = [
    {
        "title": "Programming Languages",
        "content": "Javascript, HTML, CSS, SQL, Python",
    },
    {
        "title": "Frameworks",
        "content": "React, Vue (currently learning)",
    },
    {
        "title": "Languages",
        "content": "English (native), French (native), German (C1)",
    }
]