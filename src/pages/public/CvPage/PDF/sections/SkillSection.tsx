import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { pdfStyles as styles } from '../styles/PDFStyles';

interface Props {
  skills: any;
  language: 'fr' | 'en';
}

export const SkillSection: React.FC<Props> = ({ skills, language }) => {
  if (!skills) return null;

  return (
    <>
      <View style={styles.section}>
        <View style={styles.sectionTitleBox}>
          <Text style={styles.sectionTitle}>{language === 'fr' ? 'Compétences Techniques' : 'Technical Skills'}</Text>
        </View>
        {Object.entries(skills).filter(([cat]) => cat !== 'softSkills').map(([category, categorySkills]: [string, any], cIdx) => {
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

      {/* Soft Skills */}
      {(skills as any).softSkills && (skills as any).softSkills.length > 0 && (
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
    </>
  );
};
