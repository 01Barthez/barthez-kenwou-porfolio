import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { pdfStyles as styles } from '../styles/PDFStyles';

interface Props {
  projects: any[];
  language: 'fr' | 'en';
}

export const ProjectSection: React.FC<Props> = ({ projects, language }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <View style={styles.section}>
      <View style={styles.sectionTitleBox}>
        <Text style={styles.sectionTitle}>{language === 'fr' ? 'Projets Phares' : 'Featured Projects'}</Text>
      </View>
      {projects.map((proj, i) => (
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
  );
};
