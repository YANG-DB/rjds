import { useState } from 'react'
import type { FormData } from '../types/FormData'
import { initialFormData } from '../types/FormData'
import { generatePdf } from '../utils/generatePdf'
import StepStudentInfo from '../components/wizard/StepStudentInfo'
import StepParentGuardian from '../components/wizard/StepParentGuardian'
import StepEmergencyContacts from '../components/wizard/StepEmergencyContacts'
import StepFamilyHistory from '../components/wizard/StepFamilyHistory'
import StepFamilyBackground from '../components/wizard/StepFamilyBackground'
import StepHouseholdMembers from '../components/wizard/StepHouseholdMembers'
import StepImmigrationStatus from '../components/wizard/StepImmigrationStatus'
import StepConsents from '../components/wizard/StepConsents'
import StepPayment from '../components/wizard/StepPayment'
import StepReview from '../components/wizard/StepReview'

const STEPS = [
  { id: 'student', label: 'Student Info', shortLabel: 'Student' },
  { id: 'parents', label: 'Parents/Guardians', shortLabel: 'Parents' },
  { id: 'emergency', label: 'Emergency Contacts', shortLabel: 'Emergency' },
  { id: 'history', label: 'Family & Social History', shortLabel: 'History' },
  { id: 'background', label: 'Family Background', shortLabel: 'Background' },
  { id: 'household', label: 'Household Members', shortLabel: 'Household' },
  { id: 'immigration', label: 'Immigration Status', shortLabel: 'Immigration' },
  { id: 'consents', label: 'Agreements & Consents', shortLabel: 'Consents' },
  { id: 'payment', label: 'Payment', shortLabel: 'Payment' },
  { id: 'review', label: 'Review & Submit', shortLabel: 'Review' },
]

export default function AdmissionWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)

  const updateFormData = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }))
  }

  const goNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = () => {
    generatePdf(formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-rjds-dark mb-4">Application PDF Generated!</h2>
          <p className="text-gray-600 mb-6">
            Your New Student Enrollment Application has been downloaded as a PDF.
            Please print, sign, and submit it along with all required documentation to:
          </p>
          <div className="bg-rjds-light rounded-xl p-6 text-left mb-6">
            <p className="font-semibold text-rjds-dark">Richmond Jewish Day School</p>
            <p className="text-gray-600">8760 No 5 Road, Richmond BC V6Y 2V4</p>
            <p className="text-gray-600 mt-2">
              Email: <a href="mailto:info@rjds.ca" className="text-rjds-blue hover:underline">info@rjds.ca</a>
            </p>
            <p className="text-gray-600">
              Phone: <a href="tel:604-275-3393" className="text-rjds-blue hover:underline">604-275-3393</a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => generatePdf(formData)}
              className="bg-rjds-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Download PDF Again
            </button>
            <button
              onClick={() => { setSubmitted(false); setCurrentStep(STEPS.length - 1); }}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Edit Application
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Progress Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-lg font-bold text-rjds-dark">New Student Enrollment</h1>
            <span className="text-sm text-gray-500">
              Step {currentStep + 1} of {STEPS.length}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-rjds-blue h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
            />
          </div>
          {/* Step Labels (desktop) */}
          <div className="hidden lg:flex justify-between mt-3">
            {STEPS.map((step, i) => (
              <button
                key={step.id}
                onClick={() => { setCurrentStep(i); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`text-xs font-medium transition-colors ${
                  i === currentStep
                    ? 'text-rjds-blue'
                    : i < currentStep
                    ? 'text-green-600'
                    : 'text-gray-400'
                }`}
              >
                {i < currentStep ? '✓ ' : ''}{step.shortLabel}
              </button>
            ))}
          </div>
          {/* Current step label (mobile) */}
          <p className="lg:hidden text-sm font-medium text-rjds-blue mt-2">
            {STEPS[currentStep].label}
          </p>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentStep === 0 && <StepStudentInfo data={formData} onChange={updateFormData} />}
        {currentStep === 1 && <StepParentGuardian data={formData} onChange={updateFormData} />}
        {currentStep === 2 && <StepEmergencyContacts data={formData} onChange={updateFormData} />}
        {currentStep === 3 && <StepFamilyHistory data={formData} onChange={updateFormData} />}
        {currentStep === 4 && <StepFamilyBackground data={formData} onChange={updateFormData} />}
        {currentStep === 5 && <StepHouseholdMembers data={formData} onChange={updateFormData} />}
        {currentStep === 6 && <StepImmigrationStatus data={formData} onChange={updateFormData} />}
        {currentStep === 7 && <StepConsents data={formData} onChange={updateFormData} />}
        {currentStep === 8 && <StepPayment data={formData} onChange={updateFormData} />}
        {currentStep === 9 && <StepReview data={formData} />}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200">
          <button
            onClick={goPrev}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              currentStep === 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-700 bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          {currentStep < STEPS.length - 1 ? (
            <button
              onClick={goNext}
              className="flex items-center gap-2 bg-rjds-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Next
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-rjds-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Generate PDF Application
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
