import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: "0.5in",
        fontFamily: "Times-Roman",
        fontSize: 12,
        display: "flex",
        flexDirection: "column",
        gap: 16,
    },

    name: {
        fontSize: 22,
        fontWeight: "bold",
    },

    sectionTitle: {
        fontSize: 17,
        fontWeight: "bold",
        borderBottom: "1px solid black",
        paddingBottom: 2,
    },

    entryTitle: {
        fontSize: 14,
        fontWeight: "bold",
    },

    section: {
        paddingLeft: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginTop: 2,
    },
});

const now = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];


export default function MyDocument({ info, education, experience, projects, skills }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <InfoSection content={info} />
                <EducationSection content={education} />
                <ExperienceSection content={experience} />
                <ProjectsSection content={projects} />
                <SkillsSection content={skills} />
            </Page>
        </Document>
    )
}

function InfoSection({ content }) {
    const infoDetails = [content.location, content.phone, content.email].filter(entry => entry != undefined).join("  |  ");

    return (
        <View style={{textAlign: "center"}}>
            <Text style={styles.name}>{content.fullName}</Text>
            <Text>{infoDetails}</Text>
        </View>
    )
}

function EducationSection({ content }) {
    return (
        <View>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.section}>
                {content.map(education => {
                    const educationEndDate = education.endYear > now.getFullYear() || (education.endYear == now.getFullYear && education.endMonth - 1 > now.getMonth) ?
                        <Text>Expected graduation: {months[education.endMonth]} {education.endYear}</Text> :
                        <Text>{months[education.startMonth - 1]} {education.startYear} – {months[education.endMonth - 1]} {education.endYear}</Text>

                    return (
                        <View key={education.id}>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={styles.entryTitle}>{education.school}</Text>
                                {educationEndDate}
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Text>{education.degree}</Text>
                                <Text>{education.location}</Text>
                            </View>
                            <UnorderedList items={education.notes} />
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

function ExperienceSection({ content }) {
    return (
        <View>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.section}>
                {content.map(experience =>
                    <View key={experience.id}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text style={styles.entryTitle}>{experience.company}</Text>
                            {experience.isCurrentlyEmployed ?
                                <Text>{months[experience.startMonth - 1]} {experience.startYear} – Present</Text> :
                                <Text>{months[experience.startMonth - 1]} {experience.startYear} – {months[experience.endMonth - 1]} {experience.endYear}</Text>}
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text>{experience.title}</Text>
                            <Text>{experience.location}</Text>
                        </View>
                        <UnorderedList items={experience.notes} />
                    </View>
                )}
            </View>
        </View>
    )
}

function ProjectsSection({ content }) {
    return (
        <View>
            <Text style={styles.sectionTitle}>Projects</Text>
            <View style={styles.section}>
                {content.map(project =>
                    <View key={project.id}>
                        <View>
                            <Text style={styles.entryTitle}>{project.title}</Text>
                            <Text>{project.techs}</Text>
                        </View>
                        <UnorderedList items={project.notes} />
                    </View>
                )}
            </View>
        </View>
    )
}

function SkillsSection({ content }) {
    return (
        <View>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={{ ...styles.section, gap: 1 }}>
                {content.map(skill =>
                    <Text key={skill.id}>
                        <Text style={styles.entryTitle}>{skill.title}: </Text>
                        <Text>{skill.content}</Text>
                    </Text>
                )}
            </View>
        </View>
    )
}

function UnorderedList({ items }) {
    return (
        items.map(item =>
            <View style={{ display: "flex", flexDirection: "row", paddingLeft: 16 }} key={item.id}>
                <Text style={{ marginRight: 2 }}>•</Text>
                <Text>{item.content}</Text>
            </View>
        )
    )
}