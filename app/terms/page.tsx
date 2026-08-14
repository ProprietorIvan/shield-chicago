import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for Shield Water Damage Restoration and Repairs (Felicita Group LLC): emergency call-out, water extraction, drying equipment, and mitigation policies for Chicago water damage services.',
};


export default function TermsPage() {
  return (
    <ServicePageFrame
      breadcrumbs={[{ label: "Terms & Conditions", url: "/terms" }]}
      pill="Shield Water Damage Restoration and Repairs · Felicita Group LLC"
      heroLead="Terms"
      heroAccent="& Conditions"
      lede="Emergency water extraction, drying, and mitigation policies for Chicago water damage services."
      cta="Get Emergency Service"
      image={SERVICE_PHOTO.extraction}
      imageAlt="Chicago water damage restoration crew"
      landingPage="terms"
    >
      <section className="py-20 bg-white">
        <div
          id="terms-content"
          className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16"
        >
          <div className="mb-12 text-sm text-[var(--ink-soft)] font-light">
            Last Updated: August 14, 2026
          </div>

          {/* Arbitration Notice */}
          <div className="mb-16 p-6 border-l-2 border-[var(--ink)] bg-[var(--paper)]">
            <div className="text-xs text-[var(--ink-soft)] uppercase tracking-wider mb-2 font-medium">
              Important Notice
            </div>
            <p className="text-base text-[var(--ink)] font-light leading-relaxed">
              These Terms contain a mandatory arbitration agreement requiring you to resolve
              disputes through binding individual arbitration rather than in court, and to
              forego jury trials and class actions. Please read Section 17 carefully.
            </p>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Table of Contents */}
          <nav className="mb-16">
            <h2 className="text-xs text-[var(--ink-soft)] uppercase tracking-widest mb-6 font-medium">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-2 text-sm">
              <a href="#acceptance" className="text-gray-600 hover:text-black font-light transition-colors">1. Acceptance of Terms</a>
              <a href="#services" className="text-gray-600 hover:text-black font-light transition-colors">2. Services & Scope</a>
              <a href="#estimates" className="text-gray-600 hover:text-black font-light transition-colors">3. Estimates & Pricing</a>
              <a href="#scheduling" className="text-gray-600 hover:text-black font-light transition-colors">4. Scheduling & Access</a>
              <a href="#payment" className="text-gray-600 hover:text-black font-light transition-colors">5. Payment Terms</a>
              <a href="#minimum" className="text-gray-600 hover:text-black font-light transition-colors">6. Minimum Service Charge</a>
              <a href="#equipment" className="text-gray-600 hover:text-black font-light transition-colors">7. Equipment Rental</a>
              <a href="#cancellation" className="text-gray-600 hover:text-black font-light transition-colors">8. Deposits & Cancellation</a>
              <a href="#warranties" className="text-gray-600 hover:text-black font-light transition-colors">9. Warranties</a>
              <a href="#liability" className="text-gray-600 hover:text-black font-light transition-colors">10. Liability & Indemnification</a>
              <a href="#property" className="text-gray-600 hover:text-black font-light transition-colors">11. Property & Client Responsibilities</a>
              <a href="#termination" className="text-gray-600 hover:text-black font-light transition-colors">12. Termination</a>
              <a href="#intellectual" className="text-gray-600 hover:text-black font-light transition-colors">13. Intellectual Property</a>
              <a href="#website" className="text-gray-600 hover:text-black font-light transition-colors">14. Website Use</a>
              <a href="#reviews" className="text-gray-600 hover:text-black font-light transition-colors">15. Reviews & Testimonials</a>
              <a href="#force-majeure" className="text-gray-600 hover:text-black font-light transition-colors">16. Force Majeure</a>
              <a href="#dispute" className="text-gray-600 hover:text-black font-light transition-colors">17. Dispute Resolution</a>
              <a href="#general" className="text-gray-600 hover:text-black font-light transition-colors">18. General Provisions</a>
              <a href="#contact" className="text-gray-600 hover:text-black font-light transition-colors">19. Contact Information</a>
            </div>
          </nav>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 1 */}
          <div id="acceptance" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the
                flood-911.com website and all related sites and services operated by
                Felicita Group LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We provide water damage
                mitigation services under the Shield Water Damage Restoration and Repairs name,
                a trade name (doing business as) of Felicita Group LLC.
                All services are provided by and under the auspices of Felicita Group LLC.
                By accessing our website, requesting a quote, scheduling services, or
                using any of our services, you agree to be bound by these Terms in their
                entirety. If you disagree with any part of these Terms, you may not access
                our services.
              </p>
              <p>
                These Terms, together with any Service Agreement, estimate, or work order we
                provide, constitute the entire agreement between you and Felicita Group LLC
                regarding our services. In the event of any conflict between these Terms and
                a Service Agreement, the Service Agreement shall supersede only with respect
                to the specific services covered therein.
              </p>
              <p>
                <strong className="text-black font-medium">No Oral Modifications.</strong> These
                Terms may only be modified in writing signed by an authorized representative
                of Felicita Group LLC. No oral statements, representations, or promises shall
                alter or supplement these Terms. Any purported oral modifications are void
                and unenforceable.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 2 */}
          <div id="services" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              2. Services & Scope
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                We provide water damage mitigation services for residential and commercial
                properties in Chicago, Illinois, and surrounding Chicagoland, subject to
                scheduling and service-area availability.
              </p>
              <p>
                <strong className="text-black font-medium">Scope of Work.</strong> The specific
                services to be provided will be outlined in a separate Service Agreement,
                work order, or estimate. We will not perform any work beyond what is
                explicitly authorized in writing. Any additional work requested during the
                project will require a separate written authorization and may result in
                additional charges.
              </p>
              <p>
                <strong className="text-black font-medium">Service Area.</strong> We reserve the
                right to decline service or apply additional charges for properties outside
                our standard service area. Emergency service availability may be limited in
                certain areas.
              </p>
              <p>
                <strong className="text-black font-medium">Subcontractors.</strong> We reserve
                the right to engage subcontractors, suppliers, or third-party service
                providers to perform any portion of the work. We are not liable for the
                acts, omissions, or defaults of any subcontractor. Your remedy for
                subcontractor issues is solely against us, and our liability is limited as
                set forth in these Terms.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 3 */}
          <div id="estimates" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              3. Estimates & Pricing
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                Estimates provided for our services are based on our professional assessment
                of the work required at the time of inspection. Estimates are not fixed
                quotes and actual costs may vary based on: unforeseen conditions discovered
                during the restoration process; hidden damage not visible during initial
                assessment; additional work requested or authorized by the client; delays
                caused by the client, third parties, or circumstances beyond our control;
                changes in scope or materials; and regulatory or permit requirements.
              </p>
              <p>
                <strong className="text-black font-medium">Mitigation Price List.</strong>{" "}
                The current rate list is available from these Terms at{" "}
                <Link href="/price-list" className="text-black underline underline-offset-4">
                  /price-list
                </Link>
                . The rate list is not linked from site navigation or the footer and is
                provided for contractual transparency only.
              </p>
              <p>
                We will communicate any significant changes in scope or cost as soon as they
                are identified and will obtain written authorization before proceeding with
                additional work whenever practicable. For emergency work, we may proceed
                with necessary work to prevent further damage and will notify you of costs
                as soon as possible.
              </p>
              <p>
                <strong className="text-black font-medium">Change Orders.</strong> Any change
                to the scope, schedule, or price must be documented in a written change
                order signed by both parties. Verbal authorizations are not binding. We may
                suspend work pending written approval of change orders.
              </p>
              <p>
                <strong className="text-black font-medium">Price Validity.</strong> Estimates
                are valid for 30 days unless otherwise stated. Prices may be subject to
                change after this period due to material cost fluctuations or other factors.
              </p>
              <p>
                <strong className="text-black font-medium">Quote Approval.</strong> When you
                approve a quote, estimate, or work order, it becomes a binding agreement.
                You are obligated to pay for the services as quoted. An approved quote
                authorizes us to schedule work, order materials, and allocate resources.
                Once approved, the quoted amount is due and payable according to the
                payment terms specified, regardless of whether you subsequently cancel,
                delay, or change your mind. Cancellation may result in forfeiture of
                deposits and charges for work or materials already committed as set out in
                our Cancellation Policy.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 4 */}
          <div id="scheduling" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              4. Scheduling & Access
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                By scheduling our services, you agree to provide our technicians with
                necessary, safe, and unobstructed access to your property at the scheduled
                times. An authorized representative must be present at the beginning and
                end of service appointments unless alternative arrangements are made in
                writing.
              </p>
              <p>
                <strong className="text-black font-medium">Access Requirements.</strong> You
                are responsible for ensuring that utilities (electricity, water, gas) are
                available as required for our work. You must disclose any hazardous
                conditions, including but not limited to asbestos, lead paint, mold,
                structural instability, pest infestations, biohazards, or contaminated
                water. Failure to disclose may result in immediate termination of services
                and you remain liable for all costs incurred. You indemnify us for any
                costs, fines, or liability arising from undisclosed hazardous conditions.
                We are not responsible for testing for or remediating hazardous materials
                unless explicitly contracted and paid for separately.
              </p>
              <p>
                <strong className="text-black font-medium">Delays.</strong> If our crew
                cannot access the property or begin work due to your failure to provide
                access, utilities, or disclosures, you may be charged for mobilization
                costs, waiting time, and rescheduling fees. We reserve the right to charge
                a minimum of 4 hours labor for any service call where we cannot complete
                work due to client-caused delays.
              </p>
              <p>
                <strong className="text-black font-medium">Pets.</strong> For the safety of
                our technicians and your pets, please secure pets in a separate area
                during our work. We are not responsible for pets that escape or are injured
                due to property access we require.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 5 */}
          <div id="payment" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              5. Payment Terms
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                Payment for our services is due as specified in your Service Agreement,
                approved quote, or invoice. Once a quote is approved, you are contractually
                obligated to pay the agreed amount. We accept credit cards, debit cards,
                checks, and bank transfers. Payment terms may vary by project size and type.
              </p>
              <p>
                <strong className="text-black font-medium">Late Payment.</strong> Invoices
                not paid within the stated terms are subject to a late payment fee of 2%
                per month (24% per annum) or the maximum rate permitted by Illinois law,
                whichever is less. You will also be responsible for all reasonable
                collection costs, including legal fees, if we must pursue payment.
              </p>
              <p>
                <strong className="text-black font-medium">Returned Payments.</strong> A fee
                of $50 will be charged for any returned check, declined credit card, or
                failed bank transfer. Repeated payment failures may result in immediate
                suspension of services and requirement of payment in full before resuming.
              </p>
              <p>
                <strong className="text-black font-medium">Lien Rights.</strong> We reserve
                the right to file a mechanics&apos; lien or other lien against your
                property for unpaid amounts in accordance with the Illinois Mechanics Lien Act and
                applicable law. We may also withhold completion certificates or
                documentation until payment is received in full. Unpaid amounts may be
                reported to credit bureaus and referred to collection agencies. You consent
                to such reporting and collection efforts.
              </p>
              <p>
                <strong className="text-black font-medium">Time is of the Essence.</strong> All
                payment deadlines and performance dates are material. Your failure to pay
                when due constitutes a material breach entitling us to suspend work,
                terminate the agreement, and pursue all remedies. Interest and late fees
                shall accrue from the due date without need for notice.
              </p>
              <p>
                <strong className="text-black font-medium">Currency.</strong> All amounts
                are stated and payable in United States dollars (USD) unless otherwise
                specified in writing.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 6 */}
          <div id="minimum" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              6. Minimum Service Charge
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                Emergency water-damage call-outs are subject to a{" "}
                <strong className="text-black font-medium">$500 USD minimum</strong>.
                Non-emergency inspection, quote, or walkthrough visits are subject to a{" "}
                <strong className="text-black font-medium">$250 USD minimum</strong>.
                These minimums apply separately from extraction labour, drying equipment,
                fuel or mobilization surcharges, monitoring visits, disposal, or third-party
                services.
              </p>
              <p>
                A larger minimum or deposit may apply when emergency timing, access,
                equipment deployment, contamination, safety conditions, or site complexity
                makes the work uneconomical below a stated project threshold. Any expanded
                minimum will be communicated before scheduled non-emergency work or as soon
                as practicable during an emergency response.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 7 - Equipment */}
          <div id="equipment" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              7. Equipment Rental and Return Policy
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                <strong className="text-black font-medium">Equipment is charged by the day.</strong> Drying
                equipment, dehumidifiers, air movers, moisture meters, and other restoration
                equipment are billed on a per-day basis for the duration they remain on
                your property.
              </p>
              <p>
                <strong className="text-black font-medium">Pickup Deadline—10:00 AM.</strong> Equipment
                must be picked up by 10:00 AM on the scheduled return date to avoid an
                extra daily charge. If equipment is not picked up by 10:00 AM on the
                scheduled return date, you will be charged for that day and for each
                additional day until pickup occurs.
              </p>
              <p>
                <strong className="text-black font-medium">Example.</strong> If equipment is dropped
                off Monday with a scheduled return Wednesday, you are billed for Monday and
                Tuesday. If we pick up the equipment by 10:00 AM Wednesday, no charge for
                Wednesday. If pickup occurs after 10:00 AM Wednesday, you are charged for
                Wednesday; if pickup occurs Thursday or later, you are charged for each
                additional day.
              </p>
              <p>
                Some weekend exceptions may apply; please contact us to confirm weekend
                pickup availability and timing.
              </p>
              <p>
                <strong className="text-black font-medium">Equipment Care & Liability.</strong> You
                are responsible for the care, security, and proper use of all rented
                equipment while on your property. Equipment must be returned in the same
                condition as received, normal wear excepted. Loss, theft, damage, or
                failure to return equipment will result in charges to you. You agree to pay
                the replacement or repair amounts specified in our Equipment Replacement
                Schedule below. These values are set at 1.5 times market replacement cost
                to account for sourcing, downtime, and administrative costs.
              </p>
              <p>
                <strong className="text-black font-medium">Damage & Repair.</strong> If equipment
                is damaged but repairable, you will be charged the full cost of repair
                plus a service fee of 25% of the repair cost, or the replacement value
                listed below if repair is not economical. You are responsible for any
                damage caused by misuse, improper operation, exposure to contaminants
                (e.g., sewage, chemicals), power surges, or failure to maintain proper
                operating conditions. Equipment that fails due to circumstances beyond our
                control while in your possession remains your responsibility until
                returned.
              </p>
              <p>
                <strong className="text-black font-medium">Equipment Replacement Schedule.</strong> The
                following values apply for loss, theft, irreparable damage, or failure to
                return. For equipment not listed, replacement value will be determined at
                1.5 times our actual replacement cost.
              </p>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-medium text-black">Equipment Type</th>
                      <th className="text-right py-3 pl-4 font-medium text-black">Replacement Value (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--ink)] font-light">
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">Residential Dehumidifier</td><td className="text-right py-3 pl-4">$750</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">Commercial Dehumidifier</td><td className="text-right py-3 pl-4">$4,500</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">LGR (Low-Grain) Dehumidifier</td><td className="text-right py-3 pl-4">$6,000</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">Industrial Dehumidifier</td><td className="text-right py-3 pl-4">$7,500</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">Carpet Fan / Small Air Mover</td><td className="text-right py-3 pl-4">$350</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">Standard Floor Air Mover</td><td className="text-right py-3 pl-4">$600</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">Commercial Air Mover</td><td className="text-right py-3 pl-4">$900</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">Industrial Axial Air Mover</td><td className="text-right py-3 pl-4">$1,200</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">Air Scrubber / Negative Air Machine</td><td className="text-right py-3 pl-4">$2,250</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">Moisture Meter (Penetrating)</td><td className="text-right py-3 pl-4">$450</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">Thermal Imaging Camera</td><td className="text-right py-3 pl-4">$3,000</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 pr-4">Water Extraction Unit (Portable)</td><td className="text-right py-3 pl-4">$2,250</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                We reserve the right to update the Equipment Replacement Schedule. The
                values in effect at the time of rental apply. A current schedule is
                available upon request.
              </p>
              <p>
                <strong className="text-black font-medium">Abandoned Equipment.</strong> Equipment
                left on your property for more than 7 days after the scheduled return date
                without our written extension may be deemed abandoned. We may remove
                equipment and charge you the full replacement value plus removal and
                storage costs. Equipment damaged by your failure to maintain proper
                conditions (e.g., exposure to elements, power outage damage) is your
                responsibility.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 8 */}
          <div id="cancellation" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              8. Deposits & Cancellation Policy
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                When a deposit is required to secure your service appointment, deposits
                will be forfeited and cannot be refunded for cancellations made less than
                3 days (72 hours) prior to the scheduled service date. Cancellations made
                with at least 72 hours notice will receive a full deposit refund.
              </p>
              <p>
                <strong className="text-black font-medium">Approved Quote Cancellation.</strong> If
                you have approved a quote, estimate, or work order and subsequently cancel,
                the charges depend on timing. Cancellations made more than 36 hours before
                the scheduled service start will result in deposit forfeiture only.
                Cancellations made within 36 hours of the scheduled service start
                (last-minute cancellations) will result in the full approved quote amount
                being due. An approved quote creates a binding obligation; last-minute
                cancellation prevents us from reallocating resources and therefore the
                full quote is charged.
              </p>
              <p>
                <strong className="text-black font-medium">Within 4 Days of Start.</strong> If a
                customer cancels within 4 days prior to the scheduled start date of their
                work, their deposit will be forfeited. If the cancellation is within 36
                hours of the scheduled service, the full approved quote amount is due as
                set out above.
              </p>
              <p>
                <strong className="text-black font-medium">Emergency Cancellations.</strong> For
                emergency service calls, cancellation after we have dispatched a crew may
                result in a minimum charge of $500 for mobilization costs. If a quote has
                been approved and you cancel within 36 hours of the scheduled service or
                after dispatch, you are obligated to pay the full approved quote amount
                upon cancellation, not merely the mobilization minimum.
              </p>
              <p>
                <strong className="text-black font-medium">No-Show.</strong> If you are not
                present and we cannot access the property at the scheduled time, you may
                be charged a no-show fee of $250 and may be required to pay a new deposit
                to reschedule.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 9 */}
          <div id="warranties" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              9. Warranties
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                Mitigation and drying outcomes depend on timely access, utilities, source
                control, building materials, pre-existing conditions, contamination, weather,
                humidity, client cooperation, and hidden moisture conditions. We do not
                guarantee that extraction or drying will prevent all future damage, mold,
                odor, deterioration, insurance disputes, or later repair needs.
              </p>
              <p>
                <strong className="text-black font-medium">Disclaimer of Other Warranties.</strong> EXCEPT
                AS EXPRESSLY STATED ABOVE, WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED,
                INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A
                PARTICULAR PURPOSE. OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND ARE
                LIMITED TO THE SCOPE EXPRESSLY AUTHORIZED IN WRITING.
              </p>
              <p>
                <strong className="text-black font-medium">Drying Concerns.</strong> Concerns
                about extraction, drying equipment placement, or moisture monitoring must
                be reported promptly while equipment is still on site or within 24 hours of
                pickup.
              </p>
              <p>
                <strong className="text-black font-medium">Acceptance of Work.</strong> By
                occupying, using, or making payment for completed work, you are deemed to
                have accepted the work as satisfactory. Any claims for defective work must
                be raised in writing within 14 days of completion. Failure to object
                within 14 days constitutes waiver of any such claims.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 10 */}
          <div id="liability" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              10. Liability & Indemnification
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                <strong className="text-black font-medium">Limitation of Liability.</strong> To the
                maximum extent permitted by law, our total liability for any claims
                arising from or related to our services, whether in contract, tort
                (including negligence), strict liability, or otherwise, shall not exceed
                the amount actually paid by you for the specific services giving rise to
                the claim. In no event shall we be liable for indirect, incidental,
                consequential, special, or punitive damages, including but not limited to
                loss of profits, loss of use, loss of data, business interruption,
                personal injury, property damage to items not directly worked on, mold
                remediation costs, relocation expenses, or loss of enjoyment. The
                limitations in this section apply regardless of the theory of liability
                and even if we have been advised of the possibility of such damages.
              </p>
              <p>
                The limitations and disclaimers in these Terms do not purport to limit
                liability or alter your rights as a consumer that cannot be excluded or
                limited under applicable Illinois law.
              </p>
              <p>
                <strong className="text-black font-medium">Indemnification.</strong> You agree to
                indemnify, defend, and hold harmless Felicita Group LLC and its trade names
                and branding identities (including Shield Water Damage Restoration and Repairs), its officers, directors, employees, agents, and
                subcontractors from and against any and
                all claims, damages, losses, costs, and expenses (including reasonable
                legal fees and costs of enforcement) arising from: (a) your breach of
                these Terms; (b) your negligence or willful misconduct; (c) your failure to
                disclose material information about your property; (d) any act or omission
                by you or your agents on the property; (e) any claims by third parties
                (including tenants, neighbors, insurers) related to the property or our
                work; (f) any violation of law by you; (g) hazardous materials on or in
                your property; and (h) any claim that our work caused or contributed to
                damage where such damage resulted from pre-existing conditions, your
                actions, or third-party actions. Your indemnification obligations survive
                termination of services.
              </p>
              <p>
                <strong className="text-black font-medium">Pre-Existing Conditions.</strong> We are
                not liable for pre-existing conditions, unavoidable damage that may occur
                during necessary restoration procedures, or issues arising from undetected
                conditions that reasonable inspection would not discover. We are not
                responsible for damage to items that were already compromised before our
                arrival.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 11 */}
          <div id="property" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              11. Property & Client Responsibilities
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                You are responsible for securing and protecting your property, valuables,
                and contents. We recommend removing or securing valuable items before we
                begin work. While we exercise care, we are not responsible for loss or
                damage to items not related to our work or items left in work areas.
              </p>
              <p>
                You must obtain and maintain any necessary permits, approvals, or
                approvals from landlords, condominium boards, co-op boards, or other
                parties. We are not responsible for delays or costs arising from your
                failure to obtain required approvals.
              </p>
              <p>
                You represent that you have authority to authorize work on the property
                and that you have disclosed all material information about the
                property&apos;s condition.
              </p>
              <p>
                <strong className="text-black font-medium">Mold & Secondary Damage.</strong> We
                are not responsible for mold growth, microbial contamination, or
                secondary damage that occurs before we begin work, during periods when we
                do not have access to the property, or that results from your failure to
                follow our recommendations. Mold remediation may require separate
                contracting and is not included unless explicitly agreed in writing.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 12 */}
          <div id="termination" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              12. Termination of Services
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                We reserve the right to refuse or terminate service at our sole discretion,
                including but not limited to cases where: safety concerns exist for our
                personnel or the property; access is inadequate or denied; payment terms
                are not met; you breach these Terms or the Service Agreement; you provide
                false or misleading information; hazardous conditions are discovered that
                were not disclosed; or we are unable to perform work safely or
                effectively.
              </p>
              <p>
                Upon termination, you remain liable for all work performed and costs
                incurred to date, plus any cancellation fees. You may terminate services as
                specified in your Service Agreement, though cancellation fees may apply
                for scheduled appointments.
              </p>
              <p>
                <strong className="text-black font-medium">Materials & Work in Place.</strong> Upon
                termination for non-payment or breach, we may remove materials and
                equipment not yet incorporated into the property. Materials already
                installed become your property upon payment. Until full payment is
                received, we retain a security interest in all materials and equipment we
                supply.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 13 */}
          <div id="intellectual" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              13. Intellectual Property & Corporate Ownership
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                All trademarks, trade names, logos, domain names, website content, and
                intellectual property associated with Shield Water Damage Restoration and Repairs and
                related Felicita Group LLC offerings are
                owned by Felicita Group LLC and its affiliated entities. This includes but is
                not limited to: the Shield Water Damage Restoration and Repairs name and branding,
                the flood-911.com domain and website, all text, graphics, images,
                photographs, software, and any other content on our digital properties. You
                may not reproduce, distribute, modify, or create derivative works from this
                content without express written consent.
              </p>
              <p>
                Photographs and documentation we create during our work remain our
                property. We may use such materials for our records, insurance
                documentation, and quality assurance. We will not use such materials for
                marketing without your consent.
              </p>
              <p>
                Our website and services are operated in the United States. Your use of
                our website and services is subject to applicable United States and New
                York law. For privacy practices, please refer to our Privacy Policy.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 14 */}
          <div id="website" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              14. Website Use
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                Our website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do
                not warrant that the website will be uninterrupted, error-free, or free of
                viruses. We reserve the right to modify or discontinue any aspect of our
                website at any time without notice.
              </p>
              <p>
                You may not use our website for any unlawful purpose or to transmit any
                harmful content. We reserve the right to restrict access to our website
                for any user who violates these Terms.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 15 */}
          <div id="reviews" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              15. Reviews and Testimonials
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                By submitting reviews, comments, or testimonials about our services, you
                grant us a perpetual, royalty-free, irrevocable right to use, reproduce,
                modify, and display such content for marketing and promotional purposes.
                We reserve the right to remove any content that we deem inappropriate or
                not aligned with our values.
              </p>
              <p>
                You represent that you have the right to grant this license and that your
                content does not violate any third-party rights or applicable laws.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 16 */}
          <div id="force-majeure" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              16. Force Majeure
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                We shall not be liable for any failure or delay in performing our
                obligations due to circumstances beyond our reasonable control, including
                but not limited to: acts of God, natural disasters, severe weather,
                pandemic, epidemic, war, terrorism, civil unrest, government actions,
                strikes, labor disputes, shortages of materials or supplies, utility
                failures, or other events that could not have been reasonably foreseen or
                prevented.
              </p>
              <p>
                In such events, we may suspend or extend performance timelines without
                liability. If a force majeure event continues for more than 30 days, either
                party may terminate the affected services with payment due for work
                completed to date.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 17 */}
          <div id="dispute" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              17. Dispute Resolution
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                <strong className="text-black font-medium">Informal Resolution.</strong> Any
                disputes arising from these Terms or our services shall first be addressed
                through good-faith negotiation. You agree to send a written notice to
                dispatch@flood-911.com describing the dispute and requested relief. We
                will attempt to resolve the dispute within 30 days.
              </p>
              <p>
                <strong className="text-black font-medium">Binding Arbitration.</strong> If a
                resolution cannot be reached, disputes will be resolved through binding,
                individual arbitration administered by the American Arbitration
                Association (AAA) under its Consumer Arbitration Rules, in accordance with
                the Federal Arbitration Act (9 U.S.C. § 1 et seq.). The arbitration shall
                be conducted in Cook County, Illinois. The arbitrator&apos;s
                decision shall be final and binding. Each party shall bear its own costs
                of arbitration unless the arbitrator determines otherwise. The prevailing
                party may recover reasonable legal fees and costs as determined by the
                arbitrator.
              </p>
              <p>
                <strong className="text-black font-medium">Class Action Waiver.</strong> You
                agree that any dispute resolution proceedings will be conducted only on an
                individual basis and not in a class, consolidated, or representative
                action. You waive any right to participate in a class action or
                class-wide arbitration. If a court or arbitrator determines that this
                class action waiver is unenforceable, the arbitration agreement shall be
                void as to you, but the remainder of these Terms shall remain in effect.
              </p>
              <p>
                <strong className="text-black font-medium">Jury Trial Waiver.</strong> You
                knowingly and voluntarily waive any right to a jury trial in any
                proceeding arising from or related to these Terms or our services. Any
                dispute shall be resolved by a judge or arbitrator, not a jury.
              </p>
              <p>
                <strong className="text-black font-medium">Statute of Limitations.</strong> Any
                claim or cause of action arising from these Terms or our services must be
                brought within one (1) year of the date the claim accrued or the date you
                first discovered or should have discovered the facts giving rise to the
                claim, whichever is earlier. Failure to bring a claim within this period
                permanently bars the claim.
              </p>
              <p>
                <strong className="text-black font-medium">Exceptions.</strong> Either party
                may seek injunctive relief in court for intellectual property
                infringement or misappropriation. Either party may bring an individual
                action in small claims court if the claim qualifies.
              </p>
              <p>
                <strong className="text-black font-medium">Opt-Out.</strong> You may opt out
                of this arbitration agreement by sending a written opt-out notice to
                dispatch@flood-911.com within thirty (30) days of first agreeing to
                these Terms. The notice must include your name, address, and a clear
                statement that you opt out of the arbitration agreement. If you opt out,
                the dispute resolution provisions of this section will not apply to you,
                but all other Terms will.
              </p>
              <p>
                These Terms shall be governed by the laws of the State of Illinois and the
                United States.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 18 */}
          <div id="general" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              18. General Provisions
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                <strong className="text-black font-medium">Severability.</strong> If any
                provision of these Terms is found to be unenforceable, the remaining
                provisions shall continue in full force and effect.
              </p>
              <p>
                <strong className="text-black font-medium">Waiver.</strong> Our failure to
                enforce any right or provision of these Terms shall not constitute a
                waiver of such right or provision. You waive any claim that you did not
                know of or suspect the existence of claims at the time of agreeing to
                these Terms.
              </p>
              <p>
                <strong className="text-black font-medium">Entire Agreement.</strong> These
                Terms, together with any Service Agreement, constitute the entire
                agreement between the parties and supersede any prior agreements or
                understandings.
              </p>
              <p>
                <strong className="text-black font-medium">Assignment.</strong> You may not
                assign your rights or obligations under these Terms without our written
                consent. We may assign our rights and obligations without restriction.
              </p>
              <p>
                <strong className="text-black font-medium">No Third-Party Beneficiaries.</strong> These
                Terms do not create any rights for third parties. No insurer, tenant,
                landlord, or other party may assert rights under these Terms.
              </p>
              <p>
                <strong className="text-black font-medium">Independent Contractor.</strong> We
                perform services as an independent contractor, not as your employee,
                agent, or partner. No employment, agency, or partnership relationship is
                created. We are solely responsible for our personnel, taxes, and
                insurance.
              </p>
              <p>
                <strong className="text-black font-medium">Changes to Terms.</strong> We
                reserve the right to modify these Terms at any time. Changes will be
                effective immediately upon posting to our website. Your continued use of
                our services following the posting of revised Terms means you accept and
                agree to the changes. For services already under contract, the Terms in
                effect at the time of signing apply unless otherwise agreed.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Section 19 */}
          <div id="contact" className="mb-24 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              19. Contact Information
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="border-l-2 border-[var(--ink)] pl-6 py-2">
                <div className="text-xs text-[var(--ink-soft)] uppercase tracking-wider mb-1">
                  Shield Water Damage Restoration and Repairs · Felicita Group LLC
                </div>
                <div className="font-medium text-black">dispatch@flood-911.com</div>
                <div className="text-gray-600 font-light text-sm mt-1">
                  (464) 768-0164 · Chicago, IL
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          {/* Footer */}
          <div className="text-center">
            <Link
              href="/"
              className="text-xs text-[var(--ink-soft)] hover:text-black font-light transition-colors no-print"
            >
              ← Back to flood-911.com
            </Link>
            <div className="mt-8 text-xs text-[var(--ink-soft)] font-light">
              Shield Water Damage Restoration and Repairs · Felicita Group LLC
            </div>
          </div>
        </div>
      </section>
    </ServicePageFrame>
  );
}
