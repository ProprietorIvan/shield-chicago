"use client";

import {
  CheckCircle,
  ClipboardCheck,
  Droplets,
  Hammer,
  Phone,
  Ruler,
  Search,
  Wrench,
} from "lucide-react";
import { useState } from "react";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const metrics = [
  { value: "500+", label: "PROPERTIES RESTORED" },
  { value: "60min", label: "RESPONSE TIME" },
  { value: "24/7", label: "EMERGENCY SERVICE" },
  { value: "100%", label: "SATISFACTION RATE" },
];

const processSteps = [
  {
    id: 1,
    icon: Phone,
    title: "Initial Response",
    description: "24/7 emergency response and water extraction services",
    timing: "Within hours of contact",
    details: [
      "Rapid emergency team deployment",
      "Water source identification",
      "Initial safety assessment",
      "Complete property access coordination",
      "Water classification (clean/gray/black)",
      "Preliminary damage documentation",
      "Emergency extraction equipment setup",
    ],
  },
  {
    id: 2,
    icon: Droplets,
    title: "Professional Drying",
    description: "Industrial-grade drying process with advanced monitoring",
    timing: "Minimum 7-14 days",
    details: [
      "Custom drying plan development",
      "Moisture mapping creation",
      "Daily moisture readings at marked points",
      "Temperature and humidity monitoring",
      "Equipment adjustment as needed",
      "Daily progress documentation",
    ],
  },
  {
    id: 3,
    icon: Search,
    title: "Damage Analysis",
    description: "Comprehensive evaluation of all affected areas and materials",
    timing: "Throughout drying (1-2 weeks)",
    details: [
      "Floor system evaluation (all layers)",
      "Wall cavity inspection",
      "Cabinet and millwork assessment",
      "Ceiling and support evaluation",
      "Electrical and plumbing checks",
      "Insulation condition check",
    ],
  },
  {
    id: 4,
    icon: ClipboardCheck,
    title: "Insurance Coordination",
    description: "Detailed claims management and scope development",
    timing: "2-3 weeks for initial process",
    details: [
      "Detailed photo documentation",
      "Moisture reading logs",
      "Line-item damage scope",
      "Material replacement specifications",
      "Adjuster coordination",
      "Supplemental claim preparation",
    ],
  },
  {
    id: 5,
    icon: Ruler,
    title: "Material Selection",
    description: "Shield-led selection of replacement materials and finishes for your rebuild",
    timing: "2-4 weeks for selections",
    details: [
      "Sample procurement and review",
      "Material availability verification",
      "Lead time assessment",
      "Color and style matching",
      "Installation requirement review",
      "Material ordering coordination",
    ],
  },
  {
    id: 6,
    icon: Wrench,
    title: "Removal & Preparation",
    description: "Systematic demolition and site preparation for Shield rebuild work",
    timing: "1-3 weeks based on scope",
    details: [
      "Work area isolation",
      "Furniture and content protection",
      "Floor covering removal",
      "Cabinet and fixture removal",
      "Drywall and insulation removal",
      "Anti-microbial treatment",
    ],
  },
  {
    id: 7,
    icon: Hammer,
    title: "Rebuild & Home Improvement",
    description:
      "Full restoration and finish work — flooring, drywall, paint, kitchen & bath, plus waterproofing so it does not happen again",
    timing: "Scheduled after the structure is dry",
    details: [
      "Framing repairs as needed after mitigation",
      "New drywall, texture, and paint",
      "Flooring installation — hardwood, carpet, tile, and more",
      "Cabinet, countertop, and fixture installation",
      "Kitchen and bath restoration",
      "Finish carpentry and trim",
    ],
  },
  {
    id: 8,
    icon: CheckCircle,
    title: "Final Inspection",
    description: "Quality assurance, waterproofing check, and full restoration project completion",
    timing: "1-2 weeks for final process",
    details: [
      "Client walkthrough of completed restoration",
      "Confirm waterproofing and moisture barriers are in place",
      "Punch list for remaining items",
      "Final cleaning of work areas",
      "Moisture verification and drying logs for insurance",
      "Project closeout documents",
    ],
  },
];

export function StepsSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="home-metrics">
        <div className="home-metrics-inner">
          <div className="home-center-heading" data-reveal>
            <p className="eyebrow" style={{ color: "#fff" }}>
              By the numbers
            </p>
            <h2>Fast response. Reliable results.</h2>
            <p className="home-lede home-lede-on-accent">Across Chicago</p>
          </div>
          <div className="home-metrics-grid" data-reveal-stagger>
            {metrics.map((metric) => (
              <div key={metric.label} className="home-metric">
                <div className="home-metric-value">{metric.value}</div>
                <div className="home-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section home-process">
        <div className="section-heading home-center-heading" data-reveal>
          <p className="eyebrow">After you call</p>
          <h2>What happens next.</h2>
          <p className="home-lede">
            We respond fast, then work the job in clear stages — from first extraction through
            drying, rebuild, waterproofing, and final walkthrough so the loss does not come back.
          </p>
        </div>

        <div className="home-process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            return (
              <div
                key={step.id}
                className={cn("home-process-card", isActive && "is-active")}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setExpandedDetails(expandedDetails === index ? null : index)}
              >
                <div className="home-process-card-top">
                  <div className={cn("home-process-icon", isActive && "is-active")}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="home-process-step">Step {step.id}</span>
                    <h3>{step.title}</h3>
                  </div>
                </div>
                <p>{step.description}</p>
                <div
                  className={cn(
                    "home-process-details",
                    (isActive || expandedDetails === index) && "is-open",
                  )}
                >
                  <div className="home-process-timing">{step.timing}</div>
                  <ul>
                    {step.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
