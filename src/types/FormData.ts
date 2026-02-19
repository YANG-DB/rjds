export interface HouseholdMember {
  name: string;
  dateOfBirth: string;
  gender: string;
  pronoun: string;
  relationship: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email: string;
  authorizedPickup: 'yes' | 'no' | '';
}

export interface FormData {
  // Step 1: Student Information
  studentSurname: string;
  studentGivenNames: string;
  gradeEntering: string;
  hebrewName: string;
  dateOfBirth: string;
  gender: string;
  preferredPronoun: string;
  primaryLanguage: string;
  otherLanguage: string;
  personalHealthNumber: string;
  homeAddress: string;
  postalCode: string;
  primaryPhone: string;

  // Step 2: Parent/Guardian #1
  parent1Name: string;
  parent1Occupation: string;
  parent1WorkPhone: string;
  parent1WorkPhoneExt: string;
  parent1Mobile: string;
  parent1Email: string;
  parent1Address: string;

  // Step 2: Parent/Guardian #2
  parent2Name: string;
  parent2Occupation: string;
  parent2WorkPhone: string;
  parent2WorkPhoneExt: string;
  parent2Mobile: string;
  parent2Email: string;
  parent2Address: string;

  // Custody
  parentStudentLivesWith: string;
  hasCustodyAgreement: boolean;

  // Step 3: Emergency Contacts
  emergencyContact1: EmergencyContact;
  emergencyContact2: EmergencyContact;

  // Step 4: Family & Social History
  previousEducation: string[];
  previousFacilityName: string;
  previousFacilityYears: string;
  lastSchoolName: string;
  lastSchoolDates: string;
  lastSchoolGrades: string;
  medicalInfo: string;
  medications: string;
  allergies: string;
  developmentInfo: string;
  assessments: string;

  // Step 5: Family Background
  grandparents1Names: string;
  grandparents1Emails: string;
  grandparents2Names: string;
  grandparents2Emails: string;
  parentsSeparated: 'yes' | 'no' | '';
  separationChildAge: string;
  separationLength: string;
  childResidenceLocations: string;
  majorFamilyEvents: string;
  parent1Religion: string;
  parent2Religion: string;
  synagogueAffiliation: string;

  // Step 6: Household Members
  householdMembers: HouseholdMember[];

  // Step 7: Immigration Status
  immigrationStatus: string;
  immigrationSubStatus: string;
  otherDocumentDescription: string;
  bcResident: 'yes' | 'no' | '';

  // Step 8: Consents
  enrollmentAgreementAccepted: boolean;
  electronicCommunicationConsent: boolean;
  emailAddress1: string;
  emailAddress2: string;
  buzzBookConsent: 'yes' | 'no' | '';
  classPhotosConsent: 'yes' | 'no' | '';
  publicationConsent: 'yes' | 'no' | '';
  fieldTripConsent: boolean;
  fieldTripReleaseConsent: boolean;
  parentParticipationConsent: boolean;

  // Step 9: Payment
  paymentOption: '1' | '2' | '';
  familyName: string;
  studentNames: string[];
  padFamilyName: string;
  padPayorName: string;
  padAddress: string;
  padAccountNumber: string;
  padBranchTransit: string;
  padInstitutionNumber: string;
  padInstitutionName: string;
  padInstitutionAddress: string;
}

export const initialFormData: FormData = {
  studentSurname: '',
  studentGivenNames: '',
  gradeEntering: '',
  hebrewName: '',
  dateOfBirth: '',
  gender: '',
  preferredPronoun: '',
  primaryLanguage: '',
  otherLanguage: '',
  personalHealthNumber: '',
  homeAddress: '',
  postalCode: '',
  primaryPhone: '',
  parent1Name: '',
  parent1Occupation: '',
  parent1WorkPhone: '',
  parent1WorkPhoneExt: '',
  parent1Mobile: '',
  parent1Email: '',
  parent1Address: '',
  parent2Name: '',
  parent2Occupation: '',
  parent2WorkPhone: '',
  parent2WorkPhoneExt: '',
  parent2Mobile: '',
  parent2Email: '',
  parent2Address: '',
  parentStudentLivesWith: '',
  hasCustodyAgreement: false,
  emergencyContact1: { name: '', relationship: '', phone: '', email: '', authorizedPickup: '' },
  emergencyContact2: { name: '', relationship: '', phone: '', email: '', authorizedPickup: '' },
  previousEducation: [],
  previousFacilityName: '',
  previousFacilityYears: '',
  lastSchoolName: '',
  lastSchoolDates: '',
  lastSchoolGrades: '',
  medicalInfo: '',
  medications: '',
  allergies: '',
  developmentInfo: '',
  assessments: '',
  grandparents1Names: '',
  grandparents1Emails: '',
  grandparents2Names: '',
  grandparents2Emails: '',
  parentsSeparated: '',
  separationChildAge: '',
  separationLength: '',
  childResidenceLocations: '',
  majorFamilyEvents: '',
  parent1Religion: '',
  parent2Religion: '',
  synagogueAffiliation: '',
  householdMembers: [{ name: '', dateOfBirth: '', gender: '', pronoun: '', relationship: '' }],
  immigrationStatus: '',
  immigrationSubStatus: '',
  otherDocumentDescription: '',
  bcResident: '',
  enrollmentAgreementAccepted: false,
  electronicCommunicationConsent: false,
  emailAddress1: '',
  emailAddress2: '',
  buzzBookConsent: '',
  classPhotosConsent: '',
  publicationConsent: '',
  fieldTripConsent: false,
  fieldTripReleaseConsent: false,
  parentParticipationConsent: false,
  paymentOption: '',
  familyName: '',
  studentNames: [''],
  padFamilyName: '',
  padPayorName: '',
  padAddress: '',
  padAccountNumber: '',
  padBranchTransit: '',
  padInstitutionNumber: '',
  padInstitutionName: '',
  padInstitutionAddress: '',
};
