import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { ICvData } from '@/entities/cv/api/mock/cv-data';

const styles = StyleSheet.create({
  page: { 
    flexDirection: 'column', 
    backgroundColor: '#FFFFFF', 
    padding: 35, 
    fontFamily: 'Helvetica' 
  },
  header: { 
    marginBottom: 20, 
    borderBottomWidth: 2, 
    borderBottomColor: '#1e3a8a', 
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLeft: {
    width: '65%'
  },
  headerRight: {
    width: '35%',
    alignItems: 'flex-end',
    lineHeight: 1.4
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#0f172a',
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  title: { 
    fontSize: 11, 
    color: '#1e3a8a', 
    marginTop: 4,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  section: {
    marginBottom: 12
  },
  sectionTitleBox: {
    backgroundColor: '#f8fafc',
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    borderLeftWidth: 3,
    borderLeftColor: '#1e3a8a'
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
    pageBreakInside: 'avoid',
    alignItems: 'flex-start'
  },
  leftCol: {
    width: '25%',
    paddingRight: 10
  },
  rightCol: {
    width: '75%'
  },
  period: {
    fontSize: 10,
    color: '#1e3a8a',
    fontWeight: 'bold'
  },
  text: { 
    fontSize: 10, 
    color: '#334155', 
    marginBottom: 3,
    lineHeight: 1.4 
  },
  boldText: { 
    fontSize: 11, 
    fontWeight: 'bold', 
    color: '#0f172a',
    marginBottom: 2
  },
  company: {
    fontSize: 10,
    color: '#475569',
    fontStyle: 'italic',
    marginBottom: 4
  },
  bulletList: {
    marginTop: 2,
    marginLeft: 0
  },
  bulletItem: {
    fontSize: 10,
    color: '#334155',
    marginBottom: 3,
    lineHeight: 1.4
  },
  skillGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2
  },
  skillPill: {
    fontSize: 9,
    backgroundColor: '#f1f5f9',
    color: '#334155',
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginRight: 6,
    marginBottom: 6,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#cbd5e1'
  }
});

interface PDFDocumentProps {
  data: ICvData;
  language: 'fr' | 'en';
}

export const CvPDFDocument: React.FC<PDFDocumentProps> = ({ data, language }) => {
  const { personalInfo, experiences, education, skills, languages, featuredProjects, certifications } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Header - Europass / Luxembourgish Formal Area */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{personalInfo.name}</Text>
            <Text style={styles.title}>{language === 'fr' ? personalInfo.titleFr : personalInfo.titleEn}</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.text}>{personalInfo.location}</Text>
            <Text style={styles.text}>{personalInfo.email}</Text>
            <Text style={styles.text}>{personalInfo.phone}</Text>
            {personalInfo.linkedin && <Text style={styles.text}>{personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</Text>}
            {personalInfo.github && <Text style={styles.text}>{personalInfo.github.replace(/^https?:\/\/(www\.)?/, '')}</Text>}
          </View>
        </View>

        {/* Profile */}
        <View style={styles.section}>
          <View style={styles.sectionTitleBox}>
            <Text style={styles.sectionTitle}>{language === 'fr' ? 'Profil Professionnel' : 'Professional Profile'}</Text>
          </View>
          <Text style={styles.text}>
            {language === 'fr'
              ? "Développeur Full Stack passionné et ingénieur DevOps certifié AWS. Plus de 3 ans d'expérience dans la conception, le développement et le déploiement d'applications web modernes et d'infrastructures cloud. Expert en architecture microservices, CI/CD, et solutions serverless. Orienté résultats avec une capacité démontrée à transformer des idées complexes en produits fonctionnels et performants."
              : "Passionate Full Stack Developer and AWS certified DevOps Engineer. Over 3 years of experience in designing, developing, and deploying modern web applications and cloud infrastructures. Expert in microservices architecture, CI/CD, and serverless solutions. Results-oriented with a proven ability to transform complex ideas into functional products."}
          </Text>
        </View>

        {/* Experience - Formal Two-Column Layout */}
        <View style={styles.section}>
          <View style={styles.sectionTitleBox}>
            <Text style={styles.sectionTitle}>{language === 'fr' ? 'Expérience Professionnelle' : 'Work Experience'}</Text>
          </View>
          {(experiences || []).map((exp: any, i: number) => (
            <View key={i} style={styles.row}>
              <View style={styles.leftCol}>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <View style={styles.rightCol}>
                <Text style={styles.boldText}>{language === 'fr' ? exp.titleFr : exp.titleEn}</Text>
                <Text style={styles.company}>{exp.company}</Text>
                <View style={styles.bulletList}>
                  {((language === 'fr' ? exp.descriptionFr : exp.descriptionEn) || []).map((desc: any, idx: number) => (
                    <Text key={idx} style={styles.bulletItem}>• {desc}</Text>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Projets Phares */}
        {featuredProjects && featuredProjects.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>{language === 'fr' ? 'Projets Phares' : 'Featured Projects'}</Text>
            </View>
            {featuredProjects.map((proj: any, i: number) => (
              <View key={i} style={styles.row}>
                <View style={styles.leftCol}>
                  <Text style={styles.period}>{proj.date}</Text>
                </View>
                <View style={styles.rightCol}>
                  <Text style={styles.boldText}>{language === 'fr' ? proj.titleFr : proj.titleEn}</Text>
                  <Text style={styles.company}>{language === 'fr' ? proj.descriptionFr : proj.descriptionEn}</Text>
                  <View style={[styles.skillGrid, { marginTop: 4 }]}>
                    {(proj.tags || []).slice(0, 6).map((tag: string, idx: number) => (
                      <Text key={idx} style={styles.skillPill}>{tag}</Text>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>Certifications</Text>
            </View>
            {certifications.map((cert: any, i: number) => (
              <View key={i} style={styles.row}>
                <View style={styles.leftCol}>
                  <Text style={styles.period}>{cert.year}</Text>
                </View>
                <View style={styles.rightCol}>
                  <Text style={styles.boldText}>{cert.name}</Text>
                  <Text style={styles.company}>{cert.issuer}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        <View style={styles.section}>
          <View style={styles.sectionTitleBox}>
            <Text style={styles.sectionTitle}>{language === 'fr' ? 'Éducation & Formations' : 'Education & Training'}</Text>
          </View>
          {(education || []).map((edu: any, i: number) => (
            <View key={i} style={styles.row}>
              <View style={styles.leftCol}>
                <Text style={styles.period}>{edu.period}</Text>
              </View>
              <View style={styles.rightCol}>
                <Text style={styles.boldText}>{language === 'fr' ? edu.degreeFr : edu.degreeEn}</Text>
                <Text style={styles.company}>{edu.school}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Compétences Techniques */}
        <View style={styles.section}>
          <View style={styles.sectionTitleBox}>
            <Text style={styles.sectionTitle}>{language === 'fr' ? 'Compétences Techniques' : 'Technical Skills'}</Text>
          </View>
          {Object.entries(skills || {}).filter(([cat]) => cat !== 'softSkills').map(([category, categorySkills]: [string, any], cIdx: number) => {
            if (!categorySkills || categorySkills.length === 0) return null;
            let displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
            if (category === 'devops') displayCategory = 'DevOps & Cloud';
            else if (category === 'database') displayCategory = language === 'fr' ? 'Bases de données' : 'Databases';
            else if (category === 'tools') displayCategory = language === 'fr' ? 'Outils' : 'Tools';

            return (
              <View key={cIdx} style={styles.row}>
                <View style={styles.leftCol}>
                  <Text style={styles.period}>{displayCategory}</Text>
                </View>
                <View style={styles.rightCol}>
                  <View style={styles.skillGrid}>
                    {categorySkills.map((sk: any, sIdx: number) => (
                      <Text key={sIdx} style={styles.skillPill}>{sk.name}</Text>
                    ))}
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        {/* Compétences Comportementales */}
        {skills && (skills as any).softSkills && (skills as any).softSkills.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>{language === 'fr' ? 'Compétences Comportementales' : 'Soft Skills'}</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.leftCol}>
                <Text style={styles.period}>{language === 'fr' ? 'Atouts' : 'Strengths'}</Text>
              </View>
              <View style={styles.rightCol}>
                <View style={styles.skillGrid}>
                  {(skills as any).softSkills.map((sk: any, sIdx: number) => (
                    <Text key={sIdx} style={styles.skillPill}>{sk.name}</Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
        )}

        {/* Langues */}
        <View style={styles.section}>
          <View style={styles.sectionTitleBox}>
            <Text style={styles.sectionTitle}>{language === 'fr' ? 'Langues' : 'Languages'}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.leftCol}>
              <Text style={styles.period}>{language === 'fr' ? 'Niveaux' : 'Proficiency'}</Text>
            </View>
            <View style={styles.rightCol}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {(languages || []).map((lang: any, i: number) => (
                  <Text key={i} style={[styles.text, { marginRight: 15 }]}>
                    <Text style={styles.boldText}>{lang.language}</Text>: {language === 'fr' ? lang.proficiencyFr : lang.proficiencyEn}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Références */}
        {(data as any).references && (data as any).references.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>{language === 'fr' ? 'Références Professionnelles' : 'Professional References'}</Text>
            </View>
            {((data as any).references || []).map((ref: any, i: number) => (
              <View key={i} style={styles.row}>
                <View style={styles.leftCol}>
                  <Text style={styles.period}>{ref.name}</Text>
                </View>
                <View style={styles.rightCol}>
                  <Text style={styles.boldText}>{language === 'fr' ? ref.roleFr : ref.roleEn}</Text>
                  <Text style={styles.company}>{ref.company}</Text>
                  <Text style={styles.text}>{ref.email}  |  {ref.phone}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

      </Page>
    </Document>
  );
};
