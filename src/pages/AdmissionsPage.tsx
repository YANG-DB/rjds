import { Link } from 'react-router-dom'

export default function AdmissionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rjds-blue via-rjds-teal to-rjds-blue text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Admissions</h1>
          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-white/90">
            At RJDS, a solid academic curriculum is the essence of what we provide. Offering
            small class sizes where individual attention is the norm, our students' results are
            nothing short of exceptional.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/apply"
              className="inline-flex items-center bg-rjds-orange text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Apply Now
            </Link>
            <a
              href="mailto:admissions@rjds.ca"
              className="inline-flex items-center bg-white/10 backdrop-blur text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors border border-white/30"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Registration Open Banner */}
      <section className="bg-rjds-orange text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl font-semibold">
            Registration is now open for the 2026-2027 School Year!
          </p>
        </div>
      </section>

      {/* About & Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-rjds-dark mb-6">
                Why Choose RJDS?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Richmond Jewish Day School offers a comprehensive BC curriculum and Jewish
                Academic Programs, that integrate Hebrew and Spanish languages, science,
                technology, the arts, and athletics into students' learning experiences.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our school fosters a warm, stimulating environment in which students thrive in
                small class settings where the mind, body and spirit are nurtured. We are
                committed to the total academic, social, emotional, physical, and intellectual
                development of your child.
              </p>
            </div>
            <div className="bg-rjds-light rounded-xl p-8">
              <h3 className="text-xl font-semibold text-rjds-dark mb-4">Contact Us</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-rjds-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:604-275-3393" className="text-rjds-blue hover:text-rjds-teal font-medium">604-275-3393</a>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-rjds-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:admissions@rjds.ca" className="text-rjds-blue hover:text-rjds-teal font-medium">admissions@rjds.ca</a>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-rjds-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>8760 No 5 Road, Richmond BC V6Y 2V4</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Book a tour by contacting us via phone or email
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-rjds-dark mb-10 text-center">
            Admissions Process
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-0">
              {[
                { step: 1, title: 'Complete New Student Enrollment Form', desc: 'Fill out the online application form with your child\'s information.' },
                { step: 2, title: 'Begin Online Application Process', desc: 'Start your application through our enrollment wizard.' },
                { step: 3, title: 'Review New Student Information Checklist', desc: 'Ensure all required documents are gathered.' },
                { step: 4, title: 'Submit Documentation and Application Fees', desc: 'Submit all required documents along with the registration fee.' },
                { step: 5, title: 'Admissions Committee Review', desc: 'Your application is reviewed for alignment with our mission and vision.' },
                { step: 6, title: 'Response Within 3-5 Business Days', desc: 'You will be contacted with a decision on your application.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-rjds-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {step}
                    </div>
                    {step < 6 && <div className="w-0.5 h-12 bg-rjds-blue/20" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-semibold text-rjds-dark text-lg">{title}</h3>
                    <p className="text-gray-600 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to="/apply"
                className="inline-flex items-center bg-rjds-blue text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-rjds-dark mb-10 text-center">
            New Student Application Checklist
          </h2>
          <div className="max-w-3xl mx-auto bg-rjds-light rounded-xl p-8">
            <ul className="space-y-3">
              {[
                'Non-refundable Registration Fee - $300 per student if registration completed by March 1, 2026, and $500 after March 1, 2026',
                'New Student Application Form',
                'Original Birth Certificate (originals will be returned once copied) or notarized copy',
                'Status of Parent/Guardian Form. If a legal guardian, please attach a copy of the court order appointing you as the legal guardian.',
                'Proof of status in Canada (Canadian passport, citizenship card, birth certificate, permanent residence card, work permit, study permit, refugee claimant document, diplomatic card, or status identification card)',
                'Proof of Address (e.g. utility bill, driver\'s license or BC service card)',
                'Enrollment Agreement',
                'Payment Schedule Agreement',
                'RJDS Use of Personal Information Consent Form',
                'Short Field Trip Permission Form',
                'Pre-authorized Debit Form accompanied by void cheque',
                'Teacher Recommendation Form for Students entering Grades 1-7',
                'Immunization records',
                'Parent Participation Form',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded border-2 border-rjds-blue/30 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-rjds-dark mb-10 text-center">
            2026-2027 Important Dates
          </h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                date: 'March 1, 2026',
                title: 'Early-Bird Registration Deadline',
                desc: 'The registration deadline to be eligible for the early-bird registration fee discount is March 1. Students registered on or before March 1 will pay a non-refundable registration fee of $300 per student. After March 1, the non-refundable registration fee is $500 per student.',
              },
              {
                date: 'April 1, 2026',
                title: 'Registration Deadline',
                desc: 'Registration deadline is April 1, 2026. This is also the deadline to complete the Registration and Tuition Assistance Application along with all supporting documentation for families applying for tuition assistance.',
              },
              {
                date: 'March 1 - June 1, 2026',
                title: 'Tuition Assistance Assessment',
                desc: 'The Tuition Assessment Committee (TAC) will evaluate completed tuition assistance applications between March and June. Supporting documentation should be confidentially submitted to Janet Ragetli, Business Manager at jragetli@rjds.ca. Tuition assessments will be sent out to all eligible families upon determination. All signed Tuition Fee Agreements are to be returned within 14 days of receipt.',
              },
              {
                date: 'July 1, 2026',
                title: 'Tuition Payments Begin',
                desc: 'Tuition fee payments begin for the 2026-2027 school year.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className="inline-flex items-center bg-rjds-blue/10 text-rjds-blue px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    {item.date}
                  </span>
                  <div>
                    <h3 className="font-semibold text-rjds-dark text-lg">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-rjds-dark mb-10 text-center">
            2026-2027 Tuition and Other Fees
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-rjds-blue text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg" />
                  <th className="px-4 py-3 text-center font-semibold">1 Student</th>
                  <th className="px-4 py-3 text-center font-semibold">2 Students</th>
                  <th className="px-4 py-3 text-center font-semibold">3 Students</th>
                  <th className="px-4 py-3 text-center font-semibold rounded-tr-lg">4 Students</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-800">Tuition Fees</td>
                  <td className="px-4 py-3 text-center">$13,800</td>
                  <td className="px-4 py-3 text-center">$24,500</td>
                  <td className="px-4 py-3 text-center">$32,000</td>
                  <td className="px-4 py-3 text-center">$37,600</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">
                    Other Fees
                    <span className="block text-xs text-gray-500 font-normal">
                      (Building Fund, Security Fee, Student Supplies, Fieldtrips & Special Events)
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">$500</td>
                  <td className="px-4 py-3 text-center">$750</td>
                  <td className="px-4 py-3 text-center">$1,000</td>
                  <td className="px-4 py-3 text-center">$1,250</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-800">PAC Membership Fees</td>
                  <td className="px-4 py-3 text-center">$36</td>
                  <td className="px-4 py-3 text-center">$36</td>
                  <td className="px-4 py-3 text-center">$36</td>
                  <td className="px-4 py-3 text-center">$36</td>
                </tr>
                <tr className="bg-rjds-blue/5 font-semibold">
                  <td className="px-4 py-3 text-rjds-dark">Annual Total</td>
                  <td className="px-4 py-3 text-center text-rjds-blue">$14,336</td>
                  <td className="px-4 py-3 text-center text-rjds-blue">$25,286</td>
                  <td className="px-4 py-3 text-center text-rjds-blue">$33,036</td>
                  <td className="px-4 py-3 text-center text-rjds-blue">$38,886</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-4">
            <div className="bg-rjds-light rounded-lg p-5">
              <h3 className="font-semibold text-rjds-dark mb-2">Tuition Fees</h3>
              <p className="text-gray-700 text-sm">
                Tuition is payable by pre-authorized debit over 10 months, starting on July 1, 2026, and ending April 2027.
              </p>
            </div>
            <div className="bg-rjds-light rounded-lg p-5">
              <h3 className="font-semibold text-rjds-dark mb-2">Tuition Assistance</h3>
              <p className="text-gray-700 text-sm">
                Tuition Assistance may be available to eligible families facing financial hardship. Families are required to apply by completing a Tuition Assistance Application and providing supporting documentation. Applications can be made through{' '}
                <a href="https://rjds.ca/tuition/" target="_blank" rel="noopener noreferrer" className="text-rjds-blue hover:underline">rjds.ca/tuition</a>{' '}
                or by contacting Janet Ragetli, Business Manager at{' '}
                <a href="mailto:jragetli@rjds.ca" className="text-rjds-blue hover:underline">jragetli@rjds.ca</a>.
              </p>
            </div>
            <div className="bg-rjds-light rounded-lg p-5">
              <h3 className="font-semibold text-rjds-dark mb-2">Non-refundable Registration Fee</h3>
              <p className="text-gray-700 text-sm">
                $500 per student ($300 per student with early-bird discount before March 1, 2026). The registration fee will be applied as payment towards the tuition fees.
              </p>
            </div>
            <div className="bg-rjds-light rounded-lg p-5">
              <h3 className="font-semibold text-rjds-dark mb-2">Security Fobs</h3>
              <p className="text-gray-700 text-sm">
                Parents are expected to access the building with school-issued security fobs. Fobs are provided for a $20 refundable deposit. Lost fobs may be replaced at cost of $20 each.
              </p>
            </div>
            <div className="bg-rjds-light rounded-lg p-5">
              <h3 className="font-semibold text-rjds-dark mb-2">School Uniforms</h3>
              <p className="text-gray-700 text-sm">
                Parents are expected to purchase the mandated school uniforms for RJDS. More information is available at{' '}
                <a href="https://www.rjds.ca/uniforms" target="_blank" rel="noopener noreferrer" className="text-rjds-blue hover:underline">www.rjds.ca/uniforms</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-rjds-blue to-rjds-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Start your child's journey at Richmond Jewish Day School today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="bg-rjds-orange text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Begin Application
            </Link>
            <a
              href="mailto:admissions@rjds.ca"
              className="bg-white/10 backdrop-blur text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors border border-white/30"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
