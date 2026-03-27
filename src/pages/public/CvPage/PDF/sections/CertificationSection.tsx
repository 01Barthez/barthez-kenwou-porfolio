import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { pdfStyles as styles } from '../styles/PDFStyles';

interface Props {
  certifications: any[];
}

export const CertificationSection: React.FC<Props> = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <View style={styles.section}>
      <View style={styles.sectionTitleBox}>
        <Text style={styles.sectionTitle}>Certifications</Text>
      </View>
      {certifications.map((cert, i) => (
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
  );
};
