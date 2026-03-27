import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { pdfStyles as styles } from '../styles/PDFStyles';

interface Props {
  personalInfo: any;
  language: 'fr' | 'en';
}

export const HeaderSection: React.FC<Props> = ({ personalInfo, language }) => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <Text style={styles.name}>{personalInfo.name}</Text>
      <Text style={styles.title}>{language === 'fr' ? personalInfo.titleFr : personalInfo.titleEn}</Text>
    </View>
    <View style={styles.headerRight}>
      <Text style={styles.text}>{personalInfo.location}</Text>
      <Text style={styles.text}>{personalInfo.email}</Text>
      <Text style={styles.text}>{personalInfo.phone}</Text>
      {personalInfo.linkedin && (
        <Text style={styles.text}>{personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</Text>
      )}
      {personalInfo.github && (
        <Text style={styles.text}>{personalInfo.github.replace(/^https?:\/\/(www\.)?/, '')}</Text>
      )}
    </View>
  </View>
);
