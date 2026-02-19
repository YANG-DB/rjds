import jsPDF from 'jspdf'
import type { FormData } from '../types/FormData'

const MARGIN_LEFT = 20;
const MARGIN_RIGHT = 190;
const LINE_HEIGHT = 7;
const HEADER_COLOR: [number, number, number] = [43, 76, 126]; // rjds-blue

function addHeader(doc: jsPDF, title: string) {
  doc.setFillColor(...HEADER_COLOR);
  doc.rect(0, 0, 210, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('RJDS | Richmond Jewish Day School', MARGIN_LEFT, 12);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(title, MARGIN_LEFT, 20);
  doc.setTextColor(0, 0, 0);
}

function addFooter(doc: jsPDF) {
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setFillColor(43, 76, 126);
  doc.rect(0, pageHeight - 15, 70, 15, 'F');
  doc.setFillColor(58, 143, 159);
  doc.rect(70, pageHeight - 15, 70, 15, 'F');
  doc.setFillColor(232, 131, 58);
  doc.rect(140, pageHeight - 15, 70, 15, 'F');
  doc.setFontSize(7);
  doc.setTextColor(100, 100, 100);
  doc.text('8760 No 5 Road, Richmond BC V6Y 2V4  |  P 604-275-3393  |  info@rjds.ca  |  www.rjds.ca', 105, pageHeight - 18, { align: 'center' });
  doc.setTextColor(0, 0, 0);
}

function checkPageBreak(doc: jsPDF, y: number, needed: number = 30): number {
  const pageHeight = doc.internal.pageSize.getHeight();
  if (y + needed > pageHeight - 35) {
    addFooter(doc);
    doc.addPage();
    addHeader(doc, '2026-2027 New Student Enrollment Application');
    return 35;
  }
  return y;
}

function sectionTitle(doc: jsPDF, y: number, title: string): number {
  y = checkPageBreak(doc, y, 20);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...HEADER_COLOR);
  doc.text(title, MARGIN_LEFT, y);
  doc.setDrawColor(...HEADER_COLOR);
  doc.line(MARGIN_LEFT, y + 2, MARGIN_RIGHT, y + 2);
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  return y + LINE_HEIGHT + 3;
}

function fieldRow(doc: jsPDF, y: number, label: string, value: string): number {
  y = checkPageBreak(doc, y);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text(label + ':', MARGIN_LEFT, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(9);
  const labelWidth = doc.getTextWidth(label + ': ');
  const maxWidth = MARGIN_RIGHT - MARGIN_LEFT - labelWidth;
  const lines = doc.splitTextToSize(value || '—', maxWidth);
  doc.text(lines, MARGIN_LEFT + labelWidth + 2, y);
  return y + LINE_HEIGHT * Math.max(lines.length, 1);
}

function twoCol(doc: jsPDF, y: number, label1: string, val1: string, label2: string, val2: string): number {
  y = checkPageBreak(doc, y);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text(label1 + ':', MARGIN_LEFT, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(9);
  doc.text(val1 || '—', MARGIN_LEFT + 40, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text(label2 + ':', 110, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(9);
  doc.text(val2 || '—', 150, y);

  return y + LINE_HEIGHT;
}

export function generatePdf(data: FormData): void {
  const doc = new jsPDF('p', 'mm', 'a4');
  let y: number;

  // ===== PAGE 1: Cover =====
  doc.setFillColor(...HEADER_COLOR);
  doc.rect(0, 0, 210, 297, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.text('RJDS', 105, 100, { align: 'center' });
  doc.setFontSize(14);
  doc.text('RICHMOND JEWISH DAY SCHOOL', 105, 115, { align: 'center' });
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('& Early Learning Centre', 105, 125, { align: 'center' });
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('New Student', 105, 160, { align: 'center' });
  doc.text('Enrollment Application', 105, 172, { align: 'center' });
  doc.text('2026-2027', 105, 184, { align: 'center' });
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('8760 No 5 Road, Richmond BC V6Y 2V4', 105, 250, { align: 'center' });
  doc.text('P 604-275-3393  |  info@rjds.ca  |  www.rjds.ca', 105, 257, { align: 'center' });

  // ===== PAGE 2: Student Application =====
  doc.addPage();
  addHeader(doc, '2026-2027 New Student Application');
  y = 35;

  y = sectionTitle(doc, y, 'Student Information');
  y = twoCol(doc, y, 'Student Name', `${data.studentSurname}, ${data.studentGivenNames}`, 'Grade Entering', data.gradeEntering);
  y = twoCol(doc, y, 'Hebrew Name', data.hebrewName, 'Date of Birth', data.dateOfBirth);
  y = twoCol(doc, y, 'Gender', data.gender, 'Pronoun', data.preferredPronoun);
  y = fieldRow(doc, y, 'Primary Language', data.primaryLanguage === 'Other' ? data.otherLanguage : data.primaryLanguage);
  y = fieldRow(doc, y, 'Personal Health #', data.personalHealthNumber);
  y = fieldRow(doc, y, 'Home Address', data.homeAddress);
  y = twoCol(doc, y, 'Postal Code', data.postalCode, 'Phone', data.primaryPhone);

  y += 3;
  y = sectionTitle(doc, y, '#1 Parent/Guardian');
  y = twoCol(doc, y, 'Name', data.parent1Name, 'Occupation', data.parent1Occupation);
  y = twoCol(doc, y, 'Work Phone', `${data.parent1WorkPhone}${data.parent1WorkPhoneExt ? ' ext. ' + data.parent1WorkPhoneExt : ''}`, 'Mobile', data.parent1Mobile);
  y = fieldRow(doc, y, 'Email', data.parent1Email);
  if (data.parent1Address) y = fieldRow(doc, y, 'Address', data.parent1Address);

  y += 3;
  y = sectionTitle(doc, y, '#2 Parent/Guardian');
  y = twoCol(doc, y, 'Name', data.parent2Name, 'Occupation', data.parent2Occupation);
  y = twoCol(doc, y, 'Work Phone', `${data.parent2WorkPhone}${data.parent2WorkPhoneExt ? ' ext. ' + data.parent2WorkPhoneExt : ''}`, 'Mobile', data.parent2Mobile);
  y = fieldRow(doc, y, 'Email', data.parent2Email);
  if (data.parent2Address) y = fieldRow(doc, y, 'Address', data.parent2Address);

  y += 3;
  y = fieldRow(doc, y, 'Student lives with', data.parentStudentLivesWith);
  if (data.hasCustodyAgreement) y = fieldRow(doc, y, 'Custody Agreement', 'Documentation to be provided');

  // Emergency Contacts
  y += 3;
  y = sectionTitle(doc, y, 'Emergency Contacts');
  [data.emergencyContact1, data.emergencyContact2].forEach((contact, i) => {
    if (contact.name) {
      y = checkPageBreak(doc, y, 30);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text(`#${i + 1} Emergency Contact`, MARGIN_LEFT, y);
      doc.setFont('helvetica', 'normal');
      y += LINE_HEIGHT;
      y = twoCol(doc, y, 'Name', contact.name, 'Relationship', contact.relationship);
      y = twoCol(doc, y, 'Phone', contact.phone, 'Email', contact.email);
      y = fieldRow(doc, y, 'Authorized Pickup', contact.authorizedPickup === 'yes' ? 'Yes' : 'No');
      y += 2;
    }
  });

  addFooter(doc);

  // ===== PAGE 3: Family & Social History =====
  doc.addPage();
  addHeader(doc, '2026-2027 New Student Application');
  y = 35;

  y = sectionTitle(doc, y, 'Family & Social History');
  y = fieldRow(doc, y, 'Previous Education', data.previousEducation.join(', '));
  y = twoCol(doc, y, 'Facility Name', data.previousFacilityName, 'Years Attended', data.previousFacilityYears);
  y = fieldRow(doc, y, 'Last School', data.lastSchoolName);
  y = twoCol(doc, y, 'Dates', data.lastSchoolDates, 'Grades', data.lastSchoolGrades);
  y += 2;
  y = fieldRow(doc, y, 'Medical Information', data.medicalInfo);
  y = fieldRow(doc, y, 'Medications', data.medications);
  y = fieldRow(doc, y, 'Severe Allergies', data.allergies);
  y = fieldRow(doc, y, 'Development & Behaviour', data.developmentInfo);
  y = fieldRow(doc, y, 'Assessments', data.assessments);

  // Family Background
  y += 3;
  y = sectionTitle(doc, y, 'Family Background');
  y = fieldRow(doc, y, 'Grandparents (#1)', data.grandparents1Names);
  y = fieldRow(doc, y, 'Grandparents (#2)', data.grandparents2Names);
  y = fieldRow(doc, y, 'Parents Separated', data.parentsSeparated === 'yes' ? 'Yes' : data.parentsSeparated === 'no' ? 'No' : '—');
  if (data.parentsSeparated === 'yes') {
    y = twoCol(doc, y, 'Age at Time', data.separationChildAge, 'Length', data.separationLength);
  }
  y = fieldRow(doc, y, 'Residence Locations', data.childResidenceLocations);
  y = fieldRow(doc, y, 'Major Family Events', data.majorFamilyEvents);
  y = twoCol(doc, y, '#1 Religion', data.parent1Religion, '#2 Religion', data.parent2Religion);
  y = fieldRow(doc, y, 'Synagogue', data.synagogueAffiliation);

  // Household Members
  y += 3;
  y = sectionTitle(doc, y, 'Household Members');
  data.householdMembers.filter(m => m.name).forEach((m, i) => {
    y = checkPageBreak(doc, y);
    doc.text(`${i + 1}. ${m.name}  |  DOB: ${m.dateOfBirth}  |  ${m.gender}  |  ${m.pronoun}  |  ${m.relationship}`, MARGIN_LEFT, y);
    y += LINE_HEIGHT;
  });

  addFooter(doc);

  // ===== PAGE 4: Immigration Status =====
  doc.addPage();
  addHeader(doc, '2026-2027 Status of Parent/Guardian (Form A)');
  y = 35;

  y = sectionTitle(doc, y, 'Lawfully Admitted into Canada');
  const statusLabels: Record<string, string> = {
    'canadian-citizen': 'Canadian Citizen',
    'permanent-resident': 'Permanent Resident / Landed Immigrant',
    'lawfully-admitted': 'Lawfully Admitted (Immigration & Refugee Protection Act)',
    'diplomatic': 'Diplomatic / Official Duties',
    'other': 'Other',
  };
  y = fieldRow(doc, y, 'Immigration Status', statusLabels[data.immigrationStatus] || '—');
  if (data.immigrationSubStatus) {
    const subLabels: Record<string, string> = {
      'refugee': 'Refugee or Refugee Claimant',
      'student-permit': 'Valid Student Permit (2+ years)',
      'work-permit': 'Valid Work Permit (2+ years)',
    };
    y = fieldRow(doc, y, 'Document Type', subLabels[data.immigrationSubStatus] || data.immigrationSubStatus);
  }
  if (data.otherDocumentDescription) y = fieldRow(doc, y, 'Document Description', data.otherDocumentDescription);
  y = fieldRow(doc, y, 'BC Resident', data.bcResident === 'yes' ? 'Yes' : data.bcResident === 'no' ? 'No' : '—');

  // Enrollment Agreement Summary
  y += 5;
  y = sectionTitle(doc, y, 'Enrollment Agreement');
  y = fieldRow(doc, y, 'Agreement Accepted', data.enrollmentAgreementAccepted ? 'Yes' : 'No');

  // Consents
  y += 3;
  y = sectionTitle(doc, y, 'Personal Information Consents');
  y = fieldRow(doc, y, 'Electronic Communication', data.electronicCommunicationConsent ? 'Yes' : 'No');
  y = fieldRow(doc, y, 'Email #1', data.emailAddress1);
  y = fieldRow(doc, y, 'Email #2', data.emailAddress2);
  y = fieldRow(doc, y, 'Buzz Book', data.buzzBookConsent === 'yes' ? 'Consent Given' : 'Consent NOT Given');
  y = fieldRow(doc, y, 'Class Photos', data.classPhotosConsent === 'yes' ? 'Consent Given' : 'Consent NOT Given');
  y = fieldRow(doc, y, 'Publication/Social Media', data.publicationConsent === 'yes' ? 'Consent Given' : 'Consent NOT Given');

  // Field Trip
  y += 3;
  y = sectionTitle(doc, y, 'Short Field Trip Permission');
  y = fieldRow(doc, y, 'Field Trip Consent', data.fieldTripConsent ? 'Yes' : 'No');
  y = fieldRow(doc, y, 'Release Form', data.fieldTripReleaseConsent ? 'Accepted' : 'Not Accepted');

  // Parent Participation
  y += 3;
  y = sectionTitle(doc, y, 'Parent Participation Program');
  y = fieldRow(doc, y, 'PPP Authorization', data.parentParticipationConsent ? 'Accepted' : 'Not Accepted');

  addFooter(doc);

  // ===== PAGE 5: Payment =====
  doc.addPage();
  addHeader(doc, '2026-2027 Payment Agreement & Pre-Authorized Debit');
  y = 35;

  y = sectionTitle(doc, y, 'Payment Agreement Schedule');
  y = fieldRow(doc, y, 'Family Name', data.familyName);
  data.studentNames.filter(n => n).forEach((name, i) => {
    y = fieldRow(doc, y, `Student #${i + 1}`, name);
  });
  y = fieldRow(doc, y, 'Payment Option', data.paymentOption === '1' ? 'Full Tuition Fees' : data.paymentOption === '2' ? 'Applying for Tuition Assistance' : '—');

  y += 5;
  y = sectionTitle(doc, y, 'Pre-Authorized Debit');
  y = fieldRow(doc, y, 'Family Name', data.padFamilyName);
  y = fieldRow(doc, y, 'Payor Name(s)', data.padPayorName);
  y = fieldRow(doc, y, 'Address', data.padAddress);
  y = fieldRow(doc, y, 'Account Number', data.padAccountNumber ? '****' + data.padAccountNumber.slice(-4) : '—');
  y = twoCol(doc, y, 'Branch Transit', data.padBranchTransit, 'Institution #', data.padInstitutionNumber);
  y = fieldRow(doc, y, 'Institution Name', data.padInstitutionName);
  y = fieldRow(doc, y, 'Institution Address', data.padInstitutionAddress);

  // Signature Lines
  y += 15;
  y = checkPageBreak(doc, y, 40);
  doc.setDrawColor(0, 0, 0);
  doc.line(MARGIN_LEFT, y, 100, y);
  doc.line(110, y, MARGIN_RIGHT, y);
  y += 4;
  doc.setFontSize(8);
  doc.text('Parent/Guardian Signature', MARGIN_LEFT, y);
  doc.text('Date', 110, y);

  y += 15;
  doc.line(MARGIN_LEFT, y, 100, y);
  doc.line(110, y, MARGIN_RIGHT, y);
  y += 4;
  doc.text('Parent/Guardian Signature', MARGIN_LEFT, y);
  doc.text('Date', 110, y);

  addFooter(doc);

  // Save
  const fileName = `RJDS-Application-${data.studentSurname}-${data.studentGivenNames}-2026-2027.pdf`.replace(/\s+/g, '-');
  doc.save(fileName);
}
