export type Level = "EMT" | "Paramedic";

export type Question = {
  id: number;
  level: Level;
  category: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const questions: Question[] = [
  // ================= EMT CATEGORIES =================
  
  // 1. Patient Treatment
  {
    id: 101, level: "EMT", category: "Patient Treatment",
    text: "A 45-year-old male is complaining of chest pain. He has a prescription for nitroglycerin. His BP is 98/60. You should:",
    options: ["Administer the nitroglycerin", "Contact medical control", "Withhold the medication", "Administer aspirin only"],
    correctIndex: 2,
    explanation: "Nitroglycerin is generally contraindicated if the systolic BP is below 100 mmHg due to the risk of severe hypotension."
  },
  
  // 2. Primary Assessment
  {
    id: 102, level: "EMT", category: "Primary Assessment",
    text: "You arrive to find a patient unresponsive. Your partner stabilizes the c-spine. Your next action is to:",
    options: ["Check for a pulse", "Open the airway", "Look for major bleeding", "Assess breathing"],
    correctIndex: 1,
    explanation: "According to the CAB (Compressions, Airway, Breathing) sequence for cardiac arrest, you check a pulse. However, for a general primary assessment of a patient with a pulse, Airway is the first priority after safety/spine."
  },

  // 3. Secondary Assessment
  {
    id: 103, level: "EMT", category: "Secondary Assessment",
    text: "During your physical exam, you note a 'crunching' sound when palpating the patient's neck. This is known as:",
    options: ["Subcutaneous Emphysema", "Tracheal Deviation", "Jugular Vein Distention", "Stridor"],
    correctIndex: 0,
    explanation: "Subcutaneous emphysema feels like 'Rice Krispies' under the skin and indicates air escaping from the airway or lungs into the soft tissue."
  },

  // 4. Scene Size-Up
  {
    id: 104, level: "EMT", category: "Scene Size-Up",
    text: "You are approaching a vehicle accident. You see a diamond-shaped placard with the number '3' on the tanker. You should:",
    options: ["Approach from upwind and uphill", "Approach to read the specific ID number", "Begin triage immediately", "Park the ambulance 50 feet away"],
    correctIndex: 0,
    explanation: "A placard indicates hazardous materials. You must always stay upwind and uphill until the scene is declared safe by HazMat."
  },

  // 5. EMS Operations
  {
    id: 105, level: "EMT", category: "EMS Operations",
    text: "Which of the following creates the highest risk of legal liability for an EMS provider?",
    options: ["Patient Refusal of Care", "Vehicle accidents", "Medication errors", "HIPAA violations"],
    correctIndex: 0,
    explanation: "Patient refusals constitute the highest liability risk because you are leaving a potentially sick or injured person on scene without care."
  },

  // ================= PARAMEDIC CATEGORIES =================

  // 1. Clinical Judgment
  {
    id: 201, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient with a history of CHF presents with rales and hypertension (210/110). They are hypoxic. First-line respiratory intervention is:",
    options: ["CPAP", "Intubation", "Nebulized Albuterol", "Bag-Valve Mask"],
    correctIndex: 0,
    explanation: "CPAP is the gold standard for acute pulmonary edema in conscious patients. It pushes fluid out of the alveoli and reduces preload."
  },

  // 2. Airway
  {
    id: 202, level: "Paramedic", category: "Airway",
    text: "You are preparing to intubate a head-injury patient. Which induction agent helps blunt the ICP spike?",
    options: ["Lidocaine", "Etomidate", "Succinylcholine", "Ketamine"],
    correctIndex: 0,
    explanation: "Lidocaine is often used in RSI premedication for head injuries to blunt the rise in Intracranial Pressure (ICP) during laryngoscopy."
  },

  // 3. Cardiology
  {
    id: 203, level: "Paramedic", category: "Cardiology",
    text: "A patient is in SVT at 190 bpm and is unstable (altered mental status). You should immediately:",
    options: ["Perform Synchronized Cardioversion", "Administer Adenosine 6mg", "Administer Diltiazem", "Perform Vagal Maneuvers"],
    correctIndex: 0,
    explanation: "Unstable patients with tachyarrhythmias require immediate electrical therapy (Synchronized Cardioversion). Drugs are for stable patients."
  },

  // 4. Trauma
  {
    id: 204, level: "Paramedic", category: "Trauma",
    text: "A patient has a tension pneumothorax. You perform a needle decompression. The rush of air ceases, but the patient remains hypotensive. You should:",
    options: ["Perform a second decompression or finger thoracostomy", "Switch to the other side", "Administer fluids", "Intubate immediately"],
    correctIndex: 0,
    explanation: "If the first needle fails or clogs, or if the patient does not improve, you must re-attempt decompression or move to a more definitive airway/procedure depending on protocol."
  },

  // 5. Medical & OBGYN
  {
    id: 205, level: "Paramedic", category: "Medical & OBGYN",
    text: "A pregnant female (34 weeks) is seizing. You have already administered Versed but she continues to seize. The drug of choice is:",
    options: ["Magnesium Sulfate", "Calcium Chloride", "More Versed", "Phenobarbital"],
    correctIndex: 0,
    explanation: "Eclamptic seizures are best treated with Magnesium Sulfate (usually 4g IV), not just benzodiazepines."
  },
  
  // 6. EMS Operations (Paramedic)
  {
    id: 206, level: "Paramedic", category: "EMS Operations",
    text: "In the Incident Command System (ICS), who is the only person the Safety Officer reports to?",
    options: ["The Incident Commander", "The Operations Section Chief", "The Liaison Officer", "The Medical Director"],
    correctIndex: 0,
    explanation: "The Safety Officer is part of the Command Staff and reports directly to the Incident Commander."
  }
];
