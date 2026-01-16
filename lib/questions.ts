export type Question = {
  id: number;
  level: "EMT" | "Paramedic" | "AEMT";
  category: "Airway" | "Cardiology" | "Trauma" | "Medical" | "Ops";
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const questions: Question[] = [
  {
    id: 1,
    level: "EMT",
    category: "Airway",
    text: "You arrive at a restaurant where a 56-year-old male is grasping his throat. He is conscious but unable to speak or cough. What is your immediate action?",
    options: [
      "Perform abdominal thrusts",
      "Begin chest compressions",
      "Encourage him to cough",
      "Inspect the airway with a laryngoscope"
    ],
    correctIndex: 0,
    explanation: "The patient is demonstrating the universal sign of choking and has a complete airway obstruction (unable to speak/cough). Immediate abdominal thrusts (Heimlich) are indicated until the object is expelled or the patient becomes unconscious."
  },
  {
    id: 2,
    level: "EMT",
    category: "Cardiology",
    text: "A 64-year-old female complains of chest pressure and nausea. Her BP is 90/60, Pulse 110. She has a prescription for Nitroglycerin. You should:",
    options: [
      "Administer the Nitroglycerin immediately",
      "Contact medical control before administering",
      "Withhold Nitroglycerin due to hypotension",
      "Administer Aspirin only"
    ],
    correctIndex: 2,
    explanation: "Nitroglycerin is a vasodilator and is contraindicated in patients with a systolic blood pressure below 100 mmHg. Administering it to a patient with a BP of 90/60 could cause fatal hypotension."
  },
  {
    id: 3,
    level: "Paramedic",
    category: "Trauma",
    text: "You are treating a multi-system trauma patient with a GCS of 7. You note trismus (clenched jaw). The most appropriate airway adjunct is:",
    options: [
      "Oropharyngeal Airway (OPA)",
      "Nasopharyngeal Airway (NPA)",
      "King Airway",
      "Needle Cricothyrotomy"
    ],
    correctIndex: 1,
    explanation: "An OPA is contraindicated in patients with a gag reflex or trismus. An NPA is the best initial adjunct to bypass the tongue in a patient with a clenched jaw, provided there are no signs of basilar skull fracture."
  },
  {
    id: 4,
    level: "EMT",
    category: "Ops",
    text: "Which of the following creates the highest risk of legal liability for an EMS provider?",
    options: [
      "Patient Refusal of Care",
      "Vehicle accidents",
      "Medication errors",
      "HIPAA violations"
    ],
    correctIndex: 0,
    explanation: "Patient refusals constitute the highest liability risk because you are leaving a potentially sick or injured person on scene. Documentation must be impeccable to prove the patient had capacity and was informed of risks."
  },
  {
    id: 5,
    level: "EMT",
    category: "Medical",
    text: "The 'Glitch' Question: A patient's outcome is uncertain. The simulation is detecting irregular patterns.",
    options: [
      "Continue Assessment",
      "Load and Go",
      "Stay and Play",
      "Call for Backup"
    ],
    correctIndex: 0,
    explanation: "This question triggers the simulation stop."
  }
];
