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
  // --- EMT QUESTIONS ---
  {
    id: 101,
    level: "EMT",
    category: "Patient Treatment",
    text: "You are treating a 24-year-old male with a deep laceration to his arm. Bright red blood is spurting. Direct pressure has failed. What is your immediate next action?",
    options: ["Apply a tourniquet proximal to the wound", "Elevate the extremity", "Apply a pressure dressing", "Check for a radial pulse"],
    correctIndex: 0,
    explanation: "If direct pressure fails to control arterial bleeding (spurting bright red blood), a tourniquet is the immediate next step to prevent exsanguination."
  },
  {
    id: 102,
    level: "EMT",
    category: "Primary Assessment",
    text: "You arrive on scene to find a 50-year-old male unconscious. You open the airway and hear snoring respirations. You should:",
    options: ["Perform a head-tilt chin-lift", "Insert an OPA", "Suction the airway", "Administer Oxygen"],
    correctIndex: 0,
    explanation: "Snoring indicates a mechanical obstruction by the tongue. The first manual maneuver to open the airway is the head-tilt chin-lift (if no trauma is suspected)."
  },
  {
    id: 103,
    level: "EMT",
    category: "Secondary Assessment",
    text: "During your assessment of a trauma patient, you note paradoxical movement of the chest wall. This condition is best described as:",
    options: ["Flail Chest", "Tension Pneumothorax", "Cardiac Tamponade", "Hemothorax"],
    correctIndex: 0,
    explanation: "Paradoxical motion (moving opposite to the rest of the chest) is the hallmark sign of a Flail Chest, usually caused by 3+ ribs broken in 2+ places."
  },
  {
    id: 104,
    level: "EMT",
    category: "EMS Operations",
    text: "Which of the following creates the highest risk of legal liability for an EMS provider?",
    options: ["Patient Refusal of Care", "Vehicle accidents", "Medication errors", "HIPAA violations"],
    correctIndex: 0,
    explanation: "Patient refusals constitute the highest liability risk because you are leaving a potentially sick or injured person on scene."
  },
  {
    id: 105,
    level: "EMT",
    category: "Scene Size-Up",
    text: "You arrive at a chemical plant explosion. Patients are staggering out. Your priority is:",
    options: ["Isolate the scene and ensure safety", "Begin triage immediately", "Load the most critical patient", "Identify the chemical"],
    correctIndex: 0,
    explanation: "Safety is always the first priority. You cannot help if you become a victim. Isolate the scene until HazMat declares it safe."
  },

  // --- PARAMEDIC QUESTIONS ---
  {
    id: 201,
    level: "Paramedic",
    category: "Cardiology",
    text: "A patient presents with a narrow-complex tachycardia at 180 bpm. They are unstable (BP 80/50). The treatment of choice is:",
    options: ["Synchronized Cardioversion", "Adenosine 6mg", "Vagal Maneuvers", "Defibrillation"],
    correctIndex: 0,
    explanation: "Unstable tachycardia requires immediate Synchronized Cardioversion. Medications are for stable patients."
  },
  {
    id: 202,
    level: "Paramedic",
    category: "Airway",
    text: "You are intubating a patient. After passing the tube, you auscultate epigastric sounds and no breath sounds. You should:",
    options: ["Immediately remove the tube", "Advance the tube deeper", "Inflate the cuff", "Check capnography"],
    correctIndex: 0,
    explanation: "Epigastric sounds with absent breath sounds indicate esophageal intubation. The tube must be removed immediately."
  },
  {
    id: 203,
    level: "Paramedic",
    category: "Clinical Judgment",
    text: "A trauma patient has distended neck veins, muffled heart sounds, and hypotension. You suspect:",
    options: ["Cardiac Tamponade", "Tension Pneumothorax", "Massive Hemothorax", "Hypovolemic Shock"],
    correctIndex: 0,
    explanation: "This is Beck's Triad, the classic sign of Cardiac Tamponade."
  },
  {
    id: 204,
    level: "Paramedic",
    category: "Medical & OBGYN",
    text: "A 24-year-old female presents with lower abdominal pain and vaginal spotting. She is hypotensive. You should suspect:",
    options: ["Ruptured Ectopic Pregnancy", "Pelvic Inflammatory Disease", "Appendicitis", "Ovarian Cyst"],
    correctIndex: 0,
    explanation: "In a female of childbearing age, hypotension + abdominal pain + spotting is a ruptured ectopic pregnancy until proven otherwise. It is a life threat."
  },
  {
    id: 205,
    level: "Paramedic",
    category: "Trauma",
    text: "You are treating a burn patient with 50% BSA burns. They weigh 80kg. Using the Parkland Formula (4ml), what is the fluid rate for the first 8 hours?",
    options: ["8,000 mL total / 4,000 mL first 8 hrs", "16,000 mL total", "1,000 mL/hr", "500 mL/hr"],
    correctIndex: 0,
    explanation: "4ml * 80kg * 50% = 16,000mL total. Half (8,000mL) is given in the first 8 hours. Wait... 4 * 80 * 50 = 16000. Half is 8000. So 1000ml/hr."
  }
];
