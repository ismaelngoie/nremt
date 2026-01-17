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
    id: 1, level: "EMT", category: "Patient Treatment",
    text: "A 58-year-old with crushing chest pain is alert, not allergic, and has no signs of bleeding. The best initial medication is:",
    options: ["Aspirin (chewed), if allowed by protocol", "Oral glucose gel", "Epinephrine auto-injector", "Nitroglycerin regardless of BP"],
    correctIndex: 0,
    explanation: "Aspirin reduces platelet aggregation in suspected ACS; give if no contraindication and per protocol."
  },
  {
    id: 2, level: "EMT", category: "Patient Treatment",
    text: "A 46-year-old took sildenafil 2 hours ago and now has chest pain. He has nitroglycerin prescribed. You should:",
    options: ["Give nitroglycerin only if pain is 10/10", "Withhold nitroglycerin and contact medical control", "Assist with nitroglycerin immediately", "Give nitroglycerin if HR is above 60"],
    correctIndex: 1,
    explanation: "PDE-5 inhibitors plus nitro can cause dangerous hypotension; follow protocol/medical control."
  },
  {
    id: 3, level: "EMT", category: "Patient Treatment",
    text: "A patient is wheezing with a history of asthma and has a prescribed MDI. After oxygen, you should:",
    options: ["Apply a traction splint", "Give activated charcoal", "Assist with the patient's prescribed inhaler", "Place the patient in Trendelenburg"],
    correctIndex: 2,
    explanation: "An MDI bronchodilator can relieve bronchospasm when prescribed and the patient can use it."
  },
  {
    id: 4, level: "EMT", category: "Patient Treatment",
    text: "A 6-year-old has hives, wheezing, and lip swelling after peanut exposure. The priority treatment is:",
    options: ["Delay care until rash resolves", "Give aspirin", "Assist with an epinephrine auto-injector, if available/prescribed", "Give oral glucose"],
    correctIndex: 2,
    explanation: "Anaphylaxis threatens airway and breathing; epinephrine is first-line per protocol."
  },
  {
    id: 5, level: "EMT", category: "Patient Treatment",
    text: "A diabetic patient is awake but confused with cool, clammy skin. BGL is 48 mg/dL. You should:",
    options: ["Give water only", "Administer oral glucose if they can swallow", "Force food despite inability to swallow", "Delay treatment until at the hospital"],
    correctIndex: 1,
    explanation: "Symptomatic hypoglycemia needs rapid glucose; only give orally if the gag reflex and swallowing are intact."
  },
  {
    id: 6, level: "EMT", category: "Patient Treatment",
    text: "A suspected opioid overdose patient has slow, shallow respirations (6/min) and pinpoint pupils. First priority is:",
    options: ["Ventilate with a BVM and oxygen", "Give aspirin", "Induce vomiting", "Give oral glucose"],
    correctIndex: 0,
    explanation: "Airway and ventilation come first; naloxone is adjunct after you support breathing."
  },
  {
    id: 7, level: "EMT", category: "Patient Treatment",
    text: "After BVM ventilation, you administer naloxone for a suspected opioid overdose. The patient becomes agitated. Next, you should:",
    options: ["Reassess airway/breathing and be prepared for vomiting", "Let the patient walk around", "Remove oxygen to calm them", "Give another full dose immediately"],
    correctIndex: 0,
    explanation: "Naloxone can cause sudden withdrawal and vomiting; protect airway and reassess ventilation."
  },
  {
    id: 8, level: "EMT", category: "Patient Treatment",
    text: "A patient has heavy external bleeding from the forearm. Direct pressure fails. Next step is:",
    options: ["Massage the bleeding site", "Apply a tourniquet proximal to the bleeding", "Apply heat to the wound", "Elevate only and wait"],
    correctIndex: 1,
    explanation: "For life-threatening extremity bleeding not controlled by pressure, use a tourniquet."
  },
  {
    id: 9, level: "EMT", category: "Patient Treatment",
    text: "A closed femur fracture is suspected with deformity and severe pain. You should:",
    options: ["Delay splinting until hospital", "Encourage the patient to walk", "Immobilize the limb and consider a traction splint per protocol", "Push the bone back in"],
    correctIndex: 2,
    explanation: "Immobilization limits bleeding/pain; traction splints can reduce femur fracture complications when indicated."
  },
  {
    id: 10, level: "EMT", category: "Patient Treatment",
    text: "A patient with burns has clothing stuck to the skin. You should:",
    options: ["Apply butter/ointment", "Peel the clothing off", "Cut around the stuck clothing and cover burns with dry sterile dressing", "Break large blisters"],
    correctIndex: 2,
    explanation: "Remove loose clothing/jewelry, but don't pull adhered material; cover with dry sterile dressings."
  },
  {
    id: 11, level: "EMT", category: "Patient Treatment",
    text: "A patient is in shock (cool, pale, tachycardic) after trauma. Best EMT treatment is:",
    options: ["Control bleeding, keep warm, and transport rapidly", "Give large amounts of water", "Apply ice packs to the torso", "Delay transport for a full history"],
    correctIndex: 0,
    explanation: "EMTs treat shock by stopping bleeding, preventing heat loss, and minimizing scene time."
  },
  {
    id: 12, level: "EMT", category: "Patient Treatment",
    text: "A patient is having an active generalized seizure. Your best action is to:",
    options: ["Insert a tongue depressor", "Protect from injury and maintain airway after seizure stops", "Restrain the patient's arms", "Give oral fluids"],
    correctIndex: 1,
    explanation: "Do not put anything in the mouth or restrain; focus on safety and airway/oxygenation."
  },
  {
    id: 13, level: "EMT", category: "Patient Treatment",
    text: "A heat stroke patient is hot, altered, and has dry skin. Most appropriate action is:",
    options: ["Delay cooling until ED", "Give a warm blanket and wait", "Encourage jogging to sweat", "Begin rapid cooling and transport"],
    correctIndex: 3,
    explanation: "Heat stroke is life-threatening; aggressive cooling and rapid transport are critical."
  },
  {
    id: 14, level: "EMT", category: "Patient Treatment",
    text: "A hypothermic patient is bradycardic and shivering. You should:",
    options: ["Allow walking to generate heat", "Rub the extremities vigorously", "Handle gently and prevent further heat loss", "Give alcohol to warm them"],
    correctIndex: 2,
    explanation: "Rough handling can trigger dysrhythmias; focus on insulation and gentle care."
  },
  {
    id: 15, level: "EMT", category: "Patient Treatment",
    text: "A patient is vomiting and has trouble handling secretions. The best airway tool is:",
    options: ["Nebulized albuterol", "Suction", "Traction splint", "Oropharyngeal airway only"],
    correctIndex: 1,
    explanation: "Suction clears fluids to maintain airway patency; use before adjuncts when needed."
  },
  {
    id: 16, level: "EMT", category: "Patient Treatment",
    text: "An adult choking victim cannot speak or cough. Appropriate treatment is:",
    options: ["Give water to wash it down", "Abdominal thrusts until obstruction clears or they become unresponsive", "Place in recovery position and wait", "Back blows only"],
    correctIndex: 1,
    explanation: "For conscious adults with severe airway obstruction, use abdominal thrusts."
  },
  {
    id: 17, level: "EMT", category: "Patient Treatment",
    text: "An infant is choking and cannot cry. You should:",
    options: ["Use abdominal thrusts", "Give rescue breaths only", "Give back slaps and chest thrusts", "Do a blind finger sweep"],
    correctIndex: 2,
    explanation: "Infants are treated with back slaps and chest thrusts; avoid abdominal thrusts and blind sweeps."
  },
  {
    id: 18, level: "EMT", category: "Patient Treatment",
    text: "A patient with suspected stroke has symptom onset 45 minutes ago. Your priority is to:",
    options: ["Rapidly transport and note last known well time", "Give nitroglycerin", "Treat with oral glucose without checking BGL", "Delay transport for a long interview"],
    correctIndex: 0,
    explanation: "Stroke care is time-dependent; document last known well and transport to an appropriate facility."
  },
  {
    id: 19, level: "EMT", category: "Patient Treatment",
    text: "A patient has epistaxis (nosebleed) without trauma. Best care is:",
    options: ["Pinch the nostrils and lean the patient forward", "Apply a tourniquet", "Pack the nose deeply with gauze", "Lean the patient back"],
    correctIndex: 0,
    explanation: "Leaning forward prevents blood from entering the airway and stomach; apply direct pressure to the nostrils."
  },
  {
    id: 20, level: "EMT", category: "Patient Treatment",
    text: "A patient with suspected spinal injury is vomiting. Best position is:",
    options: ["Remove the cervical collar", "Sit them upright without support", "Leave them supine and wait", "Log roll as a unit to clear the airway while maintaining spinal alignment"],
    correctIndex: 3,
    explanation: "Airway is priority; log roll maintains spinal precautions while clearing vomit."
  },
  {
    id: 21, level: "EMT", category: "Patient Treatment",
    text: "A COPD patient is in moderate distress with SpO2 86%. Best oxygen approach is:",
    options: ["Withhold oxygen to avoid hypoventilation", "Titrate oxygen to improve oxygenation (aim per protocol)", "Give only room air", "Give 100% oxygen and do not reassess"],
    correctIndex: 1,
    explanation: "COPD patients need oxygen; titrate and reassess while monitoring mental status and ventilation."
  },
  {
    id: 22, level: "EMT", category: "Patient Treatment",
    text: "A child with croup has a barking cough and stridor. Best EMT care is:",
    options: ["Keep the child calm and provide humidified oxygen if available", "Give aspirin", "Inspect the throat with a tongue blade", "Force the child to lie flat"],
    correctIndex: 0,
    explanation: "Agitation can worsen upper-airway obstruction; avoid upsetting the child."
  },
  {
    id: 23, level: "EMT", category: "Patient Treatment",
    text: "A suspected poisoning patient is awake and alert. The first step is to:",
    options: ["Give alcohol to dilute it", "Delay care until symptoms appear", "Identify the substance and contact poison control/medical direction", "Give ipecac to induce vomiting"],
    correctIndex: 2,
    explanation: "Management depends on the toxin; get information and follow medical direction."
  },
  {
    id: 24, level: "EMT", category: "Patient Treatment",
    text: "A patient with a penetrating object in the abdomen should have it:",
    options: ["Removed immediately", "Stabilized in place with bulky dressings", "Pushed deeper to stop bleeding", "Ignored during transport"],
    correctIndex: 1,
    explanation: "Do not remove impaled objects; stabilize to prevent movement and bleeding."
  },
  {
    id: 25, level: "EMT", category: "Patient Treatment",
    text: "A patient has an open chest wound with sucking sound. You should:",
    options: ["Pack with gauze tightly", "Leave it open to 'let air out'", "Apply an occlusive dressing secured on three sides if taught by protocol", "Apply a tourniquet around the chest"],
    correctIndex: 2,
    explanation: "An occlusive dressing limits air entry; a flutter valve concept helps reduce tension physiology."
  },
  {
    id: 26, level: "EMT", category: "Patient Treatment",
    text: "A suspected spinal injury patient is found seated in a vehicle and stable. You should:",
    options: ["Maintain manual stabilization and follow local extrication/spinal motion restriction protocol", "Let them self-extricate without assessment", "Pull them out quickly by the arms", "Remove helmet and ignore c-spine"],
    correctIndex: 0,
    explanation: "Limit spinal movement during extrication; use appropriate technique and resources."
  },
  {
    id: 27, level: "EMT", category: "Patient Treatment",
    text: "A patient complains of allergic reaction but only has localized itching and no breathing issues. You should:",
    options: ["Monitor, provide supportive care, and be ready to treat worsening symptoms", "Withhold oxygen regardless of status", "Give epinephrine immediately in all cases", "Force oral fluids"],
    correctIndex: 0,
    explanation: "Not all allergic reactions are anaphylaxis; watch for airway/breathing compromise."
  },
  {
    id: 28, level: "EMT", category: "Patient Treatment",
    text: "A patient with abdominal pain is found in the fetal position, guarding. Best EMT treatment is:",
    options: ["Give food to settle the stomach", "Position of comfort and transport with ongoing reassessment", "Delay transport until pain stops", "Apply heat directly to abdomen"],
    correctIndex: 1,
    explanation: "Supportive care and rapid evaluation are key; avoid oral intake and repeated reassessments."
  },
  {
    id: 29, level: "EMT", category: "Patient Treatment",
    text: "A patient with severe shortness of breath and pink frothy sputum is conscious. Best immediate EMT intervention is:",
    options: ["Place supine with legs elevated", "Apply CPAP if available and not contraindicated", "Encourage rapid deep breaths without support", "Give oral glucose"],
    correctIndex: 1,
    explanation: "CPAP improves oxygenation in pulmonary edema when the patient can tolerate it and protocols allow."
  },
  {
    id: 30, level: "EMT", category: "Patient Treatment",
    text: "A patient has a partial-thickness burn to the forearm. After cooling briefly, you should:",
    options: ["Cover with a dry sterile dressing and prevent hypothermia", "Apply petroleum jelly", "Apply ice directly for 30 minutes", "Pop blisters to relieve pressure"],
    correctIndex: 0,
    explanation: "Cover burns to reduce contamination and pain; avoid ice and breaking blisters."
  },

  // 2. Primary Assessment
  {
    id: 31, level: "EMT", category: "Primary Assessment",
    text: "You arrive to a patient lying on the ground. The first step of the primary assessment is to:",
    options: ["Ask bystanders what happened", "Take a full set of vitals", "Assess scene safety and apply PPE", "Start a head-to-toe exam"],
    correctIndex: 2,
    explanation: "Scene safety/BSI come first before patient contact."
  },
  {
    id: 32, level: "EMT", category: "Primary Assessment",
    text: "An unresponsive adult has no normal breathing. Next action is to:",
    options: ["Give oral glucose", "Place in recovery position immediately", "Take a blood pressure", "Check pulse and begin CPR if pulseless (and use AED)"],
    correctIndex: 3,
    explanation: "For suspected cardiac arrest, assess breathing/pulse quickly and start CPR/AED."
  },
  {
    id: 33, level: "EMT", category: "Primary Assessment",
    text: "A trauma patient has massive leg bleeding. In the primary assessment you should first:",
    options: ["Get a full medical history", "Control the hemorrhage", "Assess pupils", "Palpate the abdomen first"],
    correctIndex: 1,
    explanation: "Life-threatening bleeding is treated immediately, even before other steps."
  },
  {
    id: 34, level: "EMT", category: "Primary Assessment",
    text: "A patient responds only to painful stimuli. This is documented as:",
    options: ["Unresponsive", "P on AVPU", "V on AVPU", "Alert"],
    correctIndex: 1,
    explanation: "AVPU: Alert, responds to Verbal, responds to Pain, Unresponsive."
  },
  {
    id: 35, level: "EMT", category: "Primary Assessment",
    text: "A patient with snoring respirations likely needs:",
    options: ["Airway repositioning and an airway adjunct if appropriate", "Oral glucose", "A tourniquet to the neck", "A traction splint"],
    correctIndex: 0,
    explanation: "Snoring suggests partial obstruction by the tongue; open the airway."
  },
  {
    id: 36, level: "EMT", category: "Primary Assessment",
    text: "You suspect a cervical spine injury. The preferred manual airway maneuver is:",
    options: ["Jaw-thrust (without head tilt)", "Hyperextend the neck", "Head-tilt chin-lift", "Sit the patient forward"],
    correctIndex: 0,
    explanation: "Jaw-thrust opens the airway while minimizing neck movement."
  },
  {
    id: 37, level: "EMT", category: "Primary Assessment",
    text: "A patient is breathing 8/min with shallow chest rise. Best immediate intervention is:",
    options: ["Give a bronchodilator inhaler", "Offer water", "Assist ventilations with a BVM and oxygen", "Apply a hot pack"],
    correctIndex: 2,
    explanation: "Inadequate ventilation requires assisted breaths, not just oxygen."
  },
  {
    id: 38, level: "EMT", category: "Primary Assessment",
    text: "A patient has absent radial pulses and cool, clammy skin. This most strongly suggests:",
    options: ["Hyperventilation syndrome", "Shock/poor perfusion", "Hypertension", "Normal perfusion"],
    correctIndex: 1,
    explanation: "Weak/absent peripheral pulses with cool skin indicates inadequate perfusion."
  },
  {
    id: 39, level: "EMT", category: "Primary Assessment",
    text: "During primary assessment, the 'C' in ABCs refers to:",
    options: ["Consciousness only", "Capnography", "Circulation (pulse, perfusion, major bleeding)", "Cervical collar"],
    correctIndex: 2,
    explanation: "Circulation includes pulse quality, skin signs, and bleeding control."
  },
  {
    id: 40, level: "EMT", category: "Primary Assessment",
    text: "A responsive adult refuses assessment. Before leaving, you must first:",
    options: ["Leave immediately without documentation", "Assess decision-making capacity and explain risks/benefits", "Call law enforcement to force care", "Take the refusal as valid without questions"],
    correctIndex: 1,
    explanation: "A valid refusal requires capacity, informed decision, and documentation."
  },
  {
    id: 41, level: "EMT", category: "Primary Assessment",
    text: "A patient is talking in full sentences but has labored breathing and retractions. This indicates:",
    options: ["Only anxiety", "Normal breathing", "Immediate cardiac arrest", "Increased work of breathing (potential respiratory distress)"],
    correctIndex: 3,
    explanation: "Full sentences suggest good air exchange, but retractions/labored breathing are concerning."
  },
  {
    id: 42, level: "EMT", category: "Primary Assessment",
    text: "In a patient with suspected stroke, the primary assessment priority is:",
    options: ["Give nitroglycerin", "Airway, breathing, and rapid transport (time sensitive)", "Delay transport to complete detailed neuro exam", "Administer antibiotics"],
    correctIndex: 1,
    explanation: "Stroke is time-dependent; stabilize ABCs and transport quickly."
  },
  {
    id: 43, level: "EMT", category: "Primary Assessment",
    text: "A child is lethargic with poor muscle tone. This is considered:",
    options: ["Only a sleep issue", "An abnormal mental status requiring urgent evaluation", "Normal for toddlers", "A sign to delay transport"],
    correctIndex: 1,
    explanation: "Lethargy in pediatrics is concerning and can indicate hypoxia or shock."
  },
  {
    id: 44, level: "EMT", category: "Primary Assessment",
    text: "A patient has noisy high-pitched inspiratory sounds. This is most consistent with:",
    options: ["Stridor (upper airway obstruction)", "Rales (fluid)", "Wheezing (lower airway)", "Rhales"],
    correctIndex: 0,
    explanation: "Stridor is an upper-airway sound and is an emergency."
  },
  {
    id: 45, level: "EMT", category: "Primary Assessment",
    text: "A patient's skin is hot and dry with tachycardia and altered mental status. You should suspect:",
    options: ["Mild hypothermia", "Stable dehydration only", "Heat stroke and treat as a life threat", "Normal thermoregulation"],
    correctIndex: 2,
    explanation: "Hot/dry with AMS suggests failure to cool; rapid cooling and transport."
  },
  {
    id: 46, level: "EMT", category: "Primary Assessment",
    text: "A patient has an open airway but is cyanotic with SpO2 78%. The immediate action is to:",
    options: ["Apply ice packs", "Provide high-concentration oxygen and support ventilation as needed", "Delay oxygen until blood pressure is taken", "Give oral glucose"],
    correctIndex: 1,
    explanation: "Severe hypoxia needs oxygen/ventilation support immediately."
  },
  {
    id: 47, level: "EMT", category: "Primary Assessment",
    text: "A trauma patient is alert but has rapid breathing and anxiety. You should first check:",
    options: ["Their food allergies first", "Breathing adequacy and chest rise (not just rate)", "The patient's credit card", "Full abdominal history"],
    correctIndex: 1,
    explanation: "Rate alone can be misleading; assess depth, effort, and symmetry."
  },
  {
    id: 48, level: "EMT", category: "Primary Assessment",
    text: "An adult has a pulse but is unresponsive with vomit in the mouth. First action is to:",
    options: ["Give aspirin", "Ask OPQRST questions", "Suction and position to protect the airway", "Start a traction splint"],
    correctIndex: 2,
    explanation: "Airway clearing is priority to prevent aspiration."
  },
  {
    id: 49, level: "EMT", category: "Primary Assessment",
    text: "During a primary assessment, a patient with absent breath sounds on one side after trauma suggests:",
    options: ["A sprained ankle", "A normal finding", "Only a mild cough", "A serious chest injury requiring rapid transport and ALS"],
    correctIndex: 3,
    explanation: "Unilateral absent sounds after trauma can indicate pneumothorax/hemothorax."
  },
  {
    id: 50, level: "EMT", category: "Primary Assessment",
    text: "In the primary assessment, you find a patient with severe respiratory distress and altered mental status. This patient is:",
    options: ["Not transportable", "High priority for rapid transport", "Stable because they are talking", "Low priority because they are awake"],
    correctIndex: 1,
    explanation: "Respiratory failure signs require rapid transport/ALS."
  },
  {
    id: 51, level: "EMT", category: "Primary Assessment",
    text: "A patient’s respirations are fast and deep after exertion, and they can speak normally. This is most consistent with:",
    options: ["Apnea", "Hyperventilation from exertion/anxiety (still assess for other causes)", "Cardiac arrest", "Complete airway obstruction"],
    correctIndex: 1,
    explanation: "Speaking normally suggests airway is open; still evaluate for medical causes."
  },
  {
    id: 52, level: "EMT", category: "Primary Assessment",
    text: "In a trauma patient, the purpose of spinal motion restriction is to:",
    options: ["Treat pain directly", "Minimize movement in patients at risk of spine injury", "Stop internal bleeding", "Replace oxygen therapy"],
    correctIndex: 1,
    explanation: "Spinal motion restriction reduces movement, not a treatment for bleeding/pain."
  },
  {
    id: 53, level: "EMT", category: "Primary Assessment",
    text: "A patient with suspected opioid overdose is breathing 4/min and has a pulse. Priority is:",
    options: ["Wait for police", "Give aspirin", "Ventilations with BVM and oxygen", "Give naloxone first without ventilating"],
    correctIndex: 2,
    explanation: "Oxygenation/ventilation is the immediate lifesaving intervention."
  },
  {
    id: 54, level: "EMT", category: "Primary Assessment",
    text: "A patient's airway is clear, breathing is adequate, but they have uncontrolled arterial bleeding. You should:",
    options: ["Take a temperature", "Control the bleeding immediately", "Apply oxygen and ignore bleeding", "Start a full head-to-toe exam"],
    correctIndex: 1,
    explanation: "Hemorrhage can rapidly cause shock; control it immediately."
  },
  {
    id: 55, level: "EMT", category: "Primary Assessment",
    text: "A patient is found hanging and has weak pulse and agonal respirations. Next step is to:",
    options: ["Begin ventilations and follow resuscitation protocol (and request ALS)", "Assume death and do nothing", "Delay care for police report", "Give oral glucose"],
    correctIndex: 0,
    explanation: "Agonal respirations are ineffective; support airway/ventilations promptly."
  },
  {
    id: 56, level: "EMT", category: "Primary Assessment",
    text: "A patient is pale and diaphoretic with chest pain. In primary assessment, the most concerning finding is:",
    options: ["A mild headache", "Normal skin color", "Altered mental status or hypotension", "Pain only"],
    correctIndex: 2,
    explanation: "Signs of poor perfusion (AMS, hypotension) indicate instability."
  },
  {
    id: 57, level: "EMT", category: "Primary Assessment",
    text: "When assessing breathing, the best method is to:",
    options: ["Assess bowel sounds", "Count pulse only", "Look, listen, and feel for airflow and chest rise", "Check pupils"],
    correctIndex: 2,
    explanation: "Breathing assessment includes rate, depth, effort, and chest rise."
  },
  {
    id: 58, level: "EMT", category: "Primary Assessment",
    text: "A patient has a weak radial pulse at 130 and is cool and clammy. This indicates:",
    options: ["Possible shock requiring rapid transport", "Normal athletic response", "Only dehydration without concern", "Hypertension crisis"],
    correctIndex: 0,
    explanation: "Tachycardia with poor skin signs suggests inadequate perfusion."
  },
  {
    id: 59, level: "EMT", category: "Primary Assessment",
    text: "A patient is alert but has severe facial burns and singed nasal hair. You should anticipate:",
    options: ["Only a minor injury", "Immediate need for aspirin", "Airway swelling and early airway compromise (request ALS)", "No airway risk"],
    correctIndex: 2,
    explanation: "Inhalation injury can cause rapid edema; anticipate airway problems and transport."
  },
  {
    id: 60, level: "EMT", category: "Primary Assessment",
    text: "A patient has chest trauma and paradoxical chest movement. This suggests:",
    options: ["Normal breathing pattern", "Flail chest and need for oxygen/ventilatory support", "Isolated ankle injury", "Simple rib bruise only"],
    correctIndex: 1,
    explanation: "Paradoxical motion indicates flail segment; support breathing and rapid transport."
  },

  // 3. Secondary Assessment
  {
    id: 61, level: "EMT", category: "Secondary Assessment",
    text: "In OPQRST, the letter 'P' asks about:",
    options: ["Pulse quality", "Provocation/Palliation (what makes it better or worse)", "Past medical history", "Perforation risk"],
    correctIndex: 1,
    explanation: "OPQRST helps characterize pain; P is provocation/palliation."
  },
  {
    id: 62, level: "EMT", category: "Secondary Assessment",
    text: "In SAMPLE history, 'L' stands for:",
    options: ["Last oral intake", "Lung sounds", "Location of pain", "Level of consciousness"],
    correctIndex: 0,
    explanation: "SAMPLE: Signs/Symptoms, Allergies, Meds, Past history, Last oral intake, Events."
  },
  {
    id: 63, level: "EMT", category: "Secondary Assessment",
    text: "Crackles (rales) heard in both lungs are most associated with:",
    options: ["Upper airway obstruction", "Fluid in the alveoli (e.g., CHF/pulmonary edema)", "Dehydration", "Bronchospasm only"],
    correctIndex: 1,
    explanation: "Crackles suggest fluid; wheezes suggest bronchospasm; stridor is upper airway."
  },
  {
    id: 64, level: "EMT", category: "Secondary Assessment",
    text: "Wheezing is most commonly caused by:",
    options: ["Collapsed lung always", "Bronchospasm in the lower airways", "Nasal congestion", "Fluid overload only"],
    correctIndex: 1,
    explanation: "Wheezes are musical sounds from narrowed lower airways."
  },
  {
    id: 65, level: "EMT", category: "Secondary Assessment",
    text: "A high-pitched sound heard on inhalation over the neck is called:",
    options: ["Rhonchi", "Stridor", "Gurgling", "Crackles"],
    correctIndex: 1,
    explanation: "Stridor indicates upper-airway narrowing and can be life-threatening."
  },
  {
    id: 66, level: "EMT", category: "Secondary Assessment",
    text: "'Rice Krispies' feeling under the skin after chest trauma is called:",
    options: ["Subcutaneous emphysema", "JVD", "Crepitus from arthritis", "Ecchymosis"],
    correctIndex: 0,
    explanation: "Air in subcutaneous tissue feels crackly and suggests air leak."
  },
  {
    id: 67, level: "EMT", category: "Secondary Assessment",
    text: "Unequal pupils after head trauma may indicate:",
    options: ["Normal aging", "Brain injury/increased intracranial pressure", "Simple dehydration", "Only hypoglycemia"],
    correctIndex: 1,
    explanation: "Pupil changes can be a sign of serious head injury or herniation."
  },
  {
    id: 68, level: "EMT", category: "Secondary Assessment",
    text: "Battle's sign and raccoon eyes suggest:",
    options: ["Pulmonary edema", "Basilar skull fracture", "Simple nasal fracture only", "Abdominal bleeding"],
    correctIndex: 1,
    explanation: "These signs indicate skull base fracture and require careful handling."
  },
  {
    id: 69, level: "EMT", category: "Secondary Assessment",
    text: "Jugular vein distention with hypotension after trauma is most consistent with:",
    options: ["Simple dehydration", "Obstructive shock (e.g., tension pneumothorax/cardiac tamponade)", "Neurogenic shock", "Heat exhaustion"],
    correctIndex: 1,
    explanation: "JVD + hypotension post-trauma suggests obstructive causes."
  },
  {
    id: 70, level: "EMT", category: "Secondary Assessment",
    text: "Tracheal deviation away from injured side may indicate:",
    options: ["Stroke", "Asthma attack", "Tension pneumothorax", "Gastritis"],
    correctIndex: 2,
    explanation: "Tension pneumothorax can push the trachea away; treat as life threat."
  },
  {
    id: 71, level: "EMT", category: "Secondary Assessment",
    text: "Pain in the right lower quadrant with rebound tenderness suggests possible:",
    options: ["Appendicitis", "Asthma", "Sprained wrist", "Stroke"],
    correctIndex: 0,
    explanation: "RLQ pain with rebound can indicate peritoneal irritation/appendicitis."
  },
  {
    id: 72, level: "EMT", category: "Secondary Assessment",
    text: "A patient's pulse is rapid and weak, and skin is cool and clammy. This most likely indicates:",
    options: ["Compensated shock", "Normal perfusion", "Hyperthermia only", "Hypertension"],
    correctIndex: 0,
    explanation: "Tachycardia + poor skin signs suggests shock."
  },
  {
    id: 73, level: "EMT", category: "Secondary Assessment",
    text: "Capillary refill greater than 2 seconds in a child may indicate:",
    options: ["Poor perfusion/shock", "High blood sugar", "Normal hydration", "A broken bone only"],
    correctIndex: 0,
    explanation: "Delayed cap refill can be a sign of poor circulation in pediatrics."
  },
  {
    id: 74, level: "EMT", category: "Secondary Assessment",
    text: "A patient with a history of diabetes is altered. During secondary assessment, the best quick test is:",
    options: ["Check hearing", "Check urine color", "Check blood glucose", "Check dental alignment"],
    correctIndex: 2,
    explanation: "Hypoglycemia is reversible and must be ruled out in AMS."
  },
  {
    id: 75, level: "EMT", category: "Secondary Assessment",
    text: "The term 'DCAP-BTLS' stands for injuries found during:",
    options: ["Radio report only", "A detailed physical exam", "Medication administration", "Ambulance driving"],
    correctIndex: 1,
    explanation: "DCAP-BTLS is a head-to-toe exam tool for trauma assessment."
  },
  {
    id: 76, level: "EMT", category: "Secondary Assessment",
    text: "If you find deformity and crepitus in a limb, you should suspect:",
    options: ["A stroke", "A fracture", "A mild sprain only", "Normal finding"],
    correctIndex: 1,
    explanation: "Deformity/crepitus after trauma is consistent with fracture."
  },
  {
    id: 77, level: "EMT", category: "Secondary Assessment",
    text: "A patient's abdomen is rigid and board-like after trauma. This suggests:",
    options: ["Simple constipation", "Only anxiety", "Possible internal bleeding/peritonitis", "Normal muscle tone"],
    correctIndex: 2,
    explanation: "Rigidity indicates irritation/bleeding and is concerning."
  },
  {
    id: 78, level: "EMT", category: "Secondary Assessment",
    text: "Kussmaul respirations (deep, rapid) are most associated with:",
    options: ["Pulmonary edema only", "Metabolic acidosis (e.g., DKA)", "Opioid overdose", "Stroke only"],
    correctIndex: 1,
    explanation: "Kussmaul is compensatory breathing for acidosis."
  },
  {
    id: 79, level: "EMT", category: "Secondary Assessment",
    text: "A sweet/fruit odor on the breath with polyuria/polydipsia suggests:",
    options: ["Heart attack", "Opioid overdose", "Diabetic ketoacidosis", "Allergic reaction"],
    correctIndex: 2,
    explanation: "Fruity breath and dehydration signs point to DKA."
  },
  {
    id: 80, level: "EMT", category: "Secondary Assessment",
    text: "A patient's skin is warm and flushed early in sepsis. This is described as:",
    options: ["Cardiogenic shock pattern", "Distributive (septic) shock pattern", "Obstructive shock only", "Normal finding"],
    correctIndex: 1,
    explanation: "Early sepsis can present with warm skin and tachycardia before becoming cool."
  },
  {
    id: 81, level: "EMT", category: "Secondary Assessment",
    text: "In a trauma patient, blood pressure is 90/60 and pulse is 128. This indicates:",
    options: ["Hypertension emergency", "Possible decompensated shock", "Only pain response", "Normal vital signs"],
    correctIndex: 1,
    explanation: "Hypotension with tachycardia in trauma suggests significant shock."
  },
  {
    id: 82, level: "EMT", category: "Secondary Assessment",
    text: "A patient has pelvic pain after MVC and unstable pelvis. Best action is to:",
    options: ["Have the patient walk", "Ignore pelvic pain", "Stabilize the pelvis and minimize movement", "Rock the pelvis repeatedly"],
    correctIndex: 2,
    explanation: "Pelvic fractures can bleed massively; stabilize and avoid repeated manipulation."
  },
  {
    id: 83, level: "EMT", category: "Secondary Assessment",
    text: "A patient has wheezing that improves after inhaler use. Your reassessment should include:",
    options: ["Only pupil size", "Work of breathing and lung sounds", "Only temperature", "Only ankle exam"],
    correctIndex: 1,
    explanation: "Always reassess respiratory effort, sounds, and oxygenation after treatment."
  },
  {
    id: 84, level: "EMT", category: "Secondary Assessment",
    text: "A patient has chest pain that is worse with inspiration and palpation. This is more suggestive of:",
    options: ["Musculoskeletal pain (still rule out serious causes)", "Stroke", "Anaphylaxis", "STEMI for sure"],
    correctIndex: 0,
    explanation: "Pleuritic/reproducible pain is often musculoskeletal, but evaluate for PE/ACS."
  },
  {
    id: 85, level: "EMT", category: "Secondary Assessment",
    text: "The best way to quantify pain is to use:",
    options: ["Blood glucose only", "A 0-10 pain scale", "Pupil size only", "Skin color only"],
    correctIndex: 1,
    explanation: "Pain scale helps track severity and response to treatment."
  },
  {
    id: 86, level: "EMT", category: "Secondary Assessment",
    text: "A patient is dizzy on standing and has dry mucous membranes. This suggests:",
    options: ["Dehydration/hypovolemia", "Basilar skull fracture", "Hypertensive crisis", "Fluid overload"],
    correctIndex: 0,
    explanation: "Orthostatic symptoms and dryness point to low volume."
  },
  {
    id: 87, level: "EMT", category: "Secondary Assessment",
    text: "A patient has sudden severe headache 'worst of life' with vomiting. This could indicate:",
    options: ["Sprained ankle", "Intracranial hemorrhage", "Simple tension headache only", "Appendicitis"],
    correctIndex: 1,
    explanation: "Thunderclap headache can indicate bleeding; treat as a neurologic emergency."
  },
  {
    id: 88, level: "EMT", category: "Secondary Assessment",
    text: "A patient with COPD has pink, frothy sputum. This is more consistent with:",
    options: ["Dehydration", "Heat exhaustion", "Pulmonary edema/CHF", "Simple asthma"],
    correctIndex: 2,
    explanation: "Pink frothy sputum and crackles suggest pulmonary edema."
  },
  {
    id: 89, level: "EMT", category: "Secondary Assessment",
    text: "A patient's skin is cyanotic with normal breathing rate. Best interpretation is:",
    options: ["No problem because rate is normal", "Only anxiety", "Oxygenation problem (assess SpO2 and airway/breathing effort)", "Only high blood pressure"],
    correctIndex: 2,
    explanation: "Normal rate does not guarantee adequate oxygenation; assess SpO2 and effort."
  },
  {
    id: 90, level: "EMT", category: "Secondary Assessment",
    text: "During reassessment, the most important action is to:",
    options: ["Only document at the end", "Ignore changes if patient is talking", "Only ask new questions", "Repeat vital signs and evaluate response to interventions"],
    correctIndex: 3,
    explanation: "Trending vitals and symptoms tells you if your treatment is working."
  },

  // 4. Scene Size-Up
  {
    id: 91, level: "EMT", category: "Scene Size-Up",
    text: "You arrive at a crash and see downed power lines on the vehicle. You should:",
    options: ["Stage at a safe distance and wait for the utility company/fire", "Approach to assess the patient immediately", "Touch the line with a tool to move it", "Park under the lines to block traffic"],
    correctIndex: 0,
    explanation: "Downed lines can energize the car/ground; keep clear until scene is secured."
  },
  {
    id: 92, level: "EMT", category: "Scene Size-Up",
    text: "At a scene, you smell gasoline and see a leak. Best action is to:",
    options: ["Move to a safe area and request fire/rescue", "Ignore it if no flames", "Use a flare near the leak", "Start the engine to move the car"],
    correctIndex: 0,
    explanation: "Fuel vapors are explosive; control hazards and request appropriate resources."
  },
  {
    id: 93, level: "EMT", category: "Scene Size-Up",
    text: "You see a HazMat placard with a flame symbol and number 3. You should:",
    options: ["Park 50 feet away on the downhill side", "Approach from upwind/uphill and wait for HazMat", "Enter to rescue immediately without PPE", "Walk closer to read the UN number"],
    correctIndex: 1,
    explanation: "HazMat scenes require distance and safe approach; stay upwind and uphill."
  },
  {
    id: 94, level: "EMT", category: "Scene Size-Up",
    text: "A patient is lying in a pool of unknown chemicals. You should first:",
    options: ["Drag the patient out bare-handed", "Ventilate with BVM while kneeling in the liquid", "Avoid contact and request HazMat/decon", "Taste the substance"],
    correctIndex: 2,
    explanation: "Prevent responder contamination; scene safety first."
  },
  {
    id: 95, level: "EMT", category: "Scene Size-Up",
    text: "You arrive at a shooting scene and the suspect location is unknown. You should:",
    options: ["Stage and wait for law enforcement to secure the scene", "Enter quickly to start care", "Turn on sirens and approach the victim", "Pick up shell casings to clear the area"],
    correctIndex: 0,
    explanation: "An unsecured violent scene is unsafe; wait for law enforcement."
  },
  {
    id: 96, level: "EMT", category: "Scene Size-Up",
    text: "You respond to a house with possible carbon monoxide exposure. Best initial step is to:",
    options: ["Use an open flame to 'test' air", "Ensure your crew safety and ventilate/evacuate if indicated", "Ignore CO if patient is awake", "Enter and stay inside to gather history"],
    correctIndex: 1,
    explanation: "CO is odorless and deadly; protect yourself and move patients to fresh air."
  },
  {
    id: 97, level: "EMT", category: "Scene Size-Up",
    text: "You arrive at a multi-vehicle collision with 8 patients. Your first action is to:",
    options: ["Request additional resources and begin triage", "Transport the least injured first", "Start a full head-to-toe on the first patient you see", "Wait for families to arrive"],
    correctIndex: 0,
    explanation: "Multiple patients require early resource request and triage."
  },
  {
    id: 98, level: "EMT", category: "Scene Size-Up",
    text: "A bystander states a patient fell 20 feet. This is most important for determining:",
    options: ["Mechanism of injury and potential severity", "Preferred hospital", "Patient's insurance", "Medication allergies"],
    correctIndex: 0,
    explanation: "MOI guides suspicion for internal injury and need for rapid transport."
  },
  {
    id: 99, level: "EMT", category: "Scene Size-Up",
    text: "At an MVC, airbags deployed and the steering wheel is bent. This suggests:",
    options: ["Only ankle injury risk", "Significant force and possible chest injury", "Low-speed minor injury only", "No injury risk"],
    correctIndex: 1,
    explanation: "Vehicle deformity indicates significant energy transfer and higher injury risk."
  },
  {
    id: 100, level: "EMT", category: "Scene Size-Up",
    text: "When arriving to a scene, the best way to prevent infection is:",
    options: ["Use BSI/PPE based on exposure risk", "Reuse dirty gloves to save time", "Only wash hands after the call", "Skip gloves if patient looks clean"],
    correctIndex: 0,
    explanation: "BSI precautions reduce exposure to blood/body fluids."
  },
  {
    id: 101, level: "EMT", category: "Scene Size-Up",
    text: "You arrive at a scene with an aggressive dog. Best action is to:",
    options: ["Throw equipment at the dog", "Ensure scene safety and request animal control/law enforcement if needed", "Approach and try to pet the dog", "Ignore the dog and enter anyway"],
    correctIndex: 1,
    explanation: "Aggressive animals are a scene hazard; manage before patient contact."
  },
  {
    id: 102, level: "EMT", category: "Scene Size-Up",
    text: "On arrival, you see two vehicles and one patient walking around. Your first step is to:",
    options: ["Move vehicles before counting patients", "Begin detailed assessment immediately", "Assume only one patient", "Determine number of patients and request needed resources"],
    correctIndex: 3,
    explanation: "Scene size-up includes number of patients and additional help."
  },
  {
    id: 103, level: "EMT", category: "Scene Size-Up",
    text: "You arrive at a fall scene in a cluttered bathroom with water on the floor. You should:",
    options: ["Ignore the slippery floor", "Identify hazards and make the area safe before patient movement", "Run into the room quickly", "Turn off lights to calm patient"],
    correctIndex: 1,
    explanation: "Prevent rescuer injury; address environmental hazards first."
  },
  {
    id: 104, level: "EMT", category: "Scene Size-Up",
    text: "A patient is trapped in a vehicle with smoke in the cabin. Best action is to:",
    options: ["Request fire/rescue for extrication and manage airway once safe", "Use a lighter for visibility", "Enter through smoke without protection", "Wait in the ambulance without calling for help"],
    correctIndex: 0,
    explanation: "Fire/extrication resources are needed; safety first."
  },
  {
    id: 105, level: "EMT", category: "Scene Size-Up",
    text: "You arrive to find a patient on a ladder that is unstable. You should:",
    options: ["Tell the patient to jump", "Stabilize the scene and request rescue resources before access", "Shake the ladder to test it", "Climb quickly with equipment"],
    correctIndex: 1,
    explanation: "Prevent secondary injury; ensure safe access."
  },
  {
    id: 106, level: "EMT", category: "Scene Size-Up",
    text: "At a construction site, a patient is near moving machinery. You should:",
    options: ["Stop the machinery and secure the scene if possible", "Stand in the blind spot of equipment", "Ignore workers' warnings", "Treat the patient while machinery runs"],
    correctIndex: 0,
    explanation: "Moving machinery is a major hazard; secure the area."
  },
  {
    id: 107, level: "EMT", category: "Scene Size-Up",
    text: "You arrive and see a patient with severe bleeding while traffic is flowing nearby. First step is to:",
    options: ["Walk into traffic to reach patient", "Protect the scene (traffic control) and request additional help", "Ignore traffic and treat", "Park in the travel lane without cones"],
    correctIndex: 1,
    explanation: "Traffic is a common EMS hazard; scene safety and visibility are critical."
  },
  {
    id: 108, level: "EMT", category: "Scene Size-Up",
    text: "A call comes in for an unconscious person in an apartment with drug paraphernalia visible. Your scene size-up should include:",
    options: ["Letting bystanders dispose of evidence", "Refusing to enter ever", "Awareness of possible needles and law enforcement needs", "Ignoring needle risk"],
    correctIndex: 2,
    explanation: "Sharps risk and scene security are considerations; use PPE and request help if needed."
  },
  {
    id: 109, level: "EMT", category: "Scene Size-Up",
    text: "At an MCI, the first operational goal is to:",
    options: ["Transport without triage", "Establish incident command and organize triage/treatment/transport", "Treat the first patient you touch only", "Wait for hospital direction"],
    correctIndex: 1,
    explanation: "ICS organizes resources and improves outcomes in MCIs."
  },
  {
    id: 110, level: "EMT", category: "Scene Size-Up",
    text: "You arrive to a patient collapsed in a warehouse with strong chemical odor. Best initial action is to:",
    options: ["Hold your breath and go in", "Stage and request HazMat; do not enter the hot zone", "Enter quickly with a surgical mask", "Send a bystander to rescue"],
    correctIndex: 1,
    explanation: "Do not enter unknown hazardous atmospheres; use HazMat protocols."
  },
  {
    id: 111, level: "EMT", category: "Scene Size-Up",
    text: "At a scene, bystanders are crowding and filming, interfering with care. Best action is to:",
    options: ["Request law enforcement assistance and establish a safe work area", "Confiscate phones", "Ignore and continue without control", "Argue with the crowd while delaying care"],
    correctIndex: 0,
    explanation: "Scene control improves safety and patient care; involve law enforcement as needed."
  },
  {
    id: 112, level: "EMT", category: "Scene Size-Up",
    text: "You arrive to a pediatric call and a parent is hysterical. Scene size-up priority is to:",
    options: ["Tell the parent to leave or you won't treat", "Maintain calm communication and ensure a safe, controlled environment", "Ignore the parent completely", "Delay care until parent calms down alone"],
    correctIndex: 1,
    explanation: "Effective scene control includes communication to reduce chaos."
  },
  {
    id: 113, level: "EMT", category: "Scene Size-Up",
    text: "At a vehicle crash, you notice an undeployed airbag and the patient is still in the seat. You should:",
    options: ["Cut the airbag open", "Disable the car by pulling random wires", "Avoid the airbag deployment zone during care/extrication", "Lean directly over the airbag"],
    correctIndex: 2,
    explanation: "Undeployed airbags can deploy and injure responders/patients."
  },
  {
    id: 114, level: "EMT", category: "Scene Size-Up",
    text: "A patient fell and may have neck pain. During scene size-up, you should consider:",
    options: ["Only assessing the ankle", "Spinal precautions based on MOI and findings", "Ignoring c-spine because they're awake", "Transporting without assessment"],
    correctIndex: 1,
    explanation: "MOI and symptoms guide need for spinal motion restriction."
  },
  {
    id: 115, level: "EMT", category: "Scene Size-Up",
    text: "At a motor vehicle crash, there is broken glass and sharp metal. Best PPE addition is:",
    options: ["Eye protection and heavy gloves as needed", "Only a cloth mask", "No PPE needed", "Open-toed shoes"],
    correctIndex: 0,
    explanation: "Protect against sharps and body fluids with appropriate PPE."
  },
  {
    id: 116, level: "EMT", category: "Scene Size-Up",
    text: "You arrive to a home with hoarding conditions and narrow pathways. Best action is to:",
    options: ["Plan safe egress/extrication and request additional help early", "Force a path quickly without planning", "Ignore the environment", "Carry the patient alone"],
    correctIndex: 0,
    explanation: "Difficult access requires planning and more resources for safe movement."
  },
  {
    id: 117, level: "EMT", category: "Scene Size-Up",
    text: "A patient is found at a party with multiple intoxicated people and escalating conflict. You should:",
    options: ["Request law enforcement and stage until scene is safe", "Ignore the risk because it's medical", "Enter alone to take control", "Argue with intoxicated people"],
    correctIndex: 0,
    explanation: "Potential violence is a safety threat; wait for scene security."
  },
  {
    id: 118, level: "EMT", category: "Scene Size-Up",
    text: "At a scene with suspected child abuse, EMS should:",
    options: ["Provide care and document objective findings; report per law/protocol", "Ignore findings to avoid conflict", "Confront the caregiver aggressively", "Only tell friends"],
    correctIndex: 0,
    explanation: "Mandatory reporting and objective documentation are required."
  },
  {
    id: 119, level: "EMT", category: "Scene Size-Up",
    text: "A patient collapses at a pool. During scene size-up, the most important immediate environmental concern is:",
    options: ["Taking photos of the scene", "Water safety and safe access (avoid becoming a victim)", "Asking about insurance first", "Waiting for the lifeguard if patient is pulseless"],
    correctIndex: 1,
    explanation: "Rescuer safety and safe access are first; then rapid rescue and care."
  },
  {
    id: 120, level: "EMT", category: "Scene Size-Up",
    text: "You arrive at a farm and a patient is near a running grain auger. Your first action is to:",
    options: ["Ignore the machinery because it's outdoors", "Shut down equipment and secure the scene before approach", "Reach in to pull the patient out", "Climb on equipment while it runs"],
    correctIndex: 1,
    explanation: "Farm machinery can entrap and amputate; stop hazards before contact."
  },

  // 5. EMS Operations
  {
    id: 121, level: "EMT", category: "EMS Operations",
    text: "A competent adult refuses transport after you explain risks. To reduce liability, you should:",
    options: ["Leave without documentation", "Document the refusal, have a witness sign, and offer to call back if symptoms worsen", "Threaten arrest to force transport", "Take the patient's belongings as collateral"],
    correctIndex: 1,
    explanation: "Proper refusal includes capacity, informed decision, documentation, and witnesses."
  },
  {
    id: 122, level: "EMT", category: "EMS Operations",
    text: "Leaving a patient after starting care without equal or higher-level care taking over is called:",
    options: ["Negligence", "Abandonment", "Assault", "Slander"],
    correctIndex: 1,
    explanation: "Abandonment is terminating care without ensuring continued care."
  },
  {
    id: 123, level: "EMT", category: "EMS Operations",
    text: "Providing care without consent to a competent adult can be considered:",
    options: ["Negligence only", "Battery", "Defamation", "Duty to act"],
    correctIndex: 1,
    explanation: "Battery is unlawful physical contact; consent is required unless implied/unconscious."
  },
  {
    id: 124, level: "EMT", category: "EMS Operations",
    text: "Threatening a patient with harm to gain compliance is:",
    options: ["Battery", "Assault", "Scope of practice", "Abandonment"],
    correctIndex: 1,
    explanation: "Assault is threat of harm; battery is actual contact."
  },
  {
    id: 125, level: "EMT", category: "EMS Operations",
    text: "Failing to act as a reasonable EMT would under similar circumstances is:",
    options: ["Libel", "Negligence", "Good Samaritan", "Emancipation"],
    correctIndex: 1,
    explanation: "Negligence is breach of duty that results in harm."
  },
  {
    id: 126, level: "EMT", category: "EMS Operations",
    text: "The most important reason for thorough documentation is:",
    options: ["It makes the call shorter", "It replaces patient assessment", "It is the legal record of your assessment and care", "It guarantees no lawsuits"],
    correctIndex: 2,
    explanation: "PCRs are legal documents; accurate objective charting matters."
  },
  {
    id: 127, level: "EMT", category: "EMS Operations",
    text: "You should use radio communications primarily to:",
    options: ["Request resources and give concise patient reports", "Discuss gossip about the patient", "Debate protocols on air", "Share patient's social security number"],
    correctIndex: 0,
    explanation: "Radio should be professional, concise, and protect privacy."
  },
  {
    id: 128, level: "EMT", category: "EMS Operations",
    text: "A patient's protected health information should be shared only:",
    options: ["With family without permission always", "With those directly involved in care or as required by law", "On social media if no name is used", "With any bystander who asks"],
    correctIndex: 1,
    explanation: "HIPAA requires limiting disclosure to necessary parties."
  },
  {
    id: 129, level: "EMT", category: "EMS Operations",
    text: "Standard Precautions means you treat all blood/body fluids as:",
    options: ["Not infectious if the patient is family", "Safe if it looks clean", "Potentially infectious", "Only infectious if the patient has HIV"],
    correctIndex: 2,
    explanation: "Assume infectious risk and use PPE appropriately."
  },
  {
    id: 130, level: "EMT", category: "EMS Operations",
    text: "The most effective way to prevent infection spread is:",
    options: ["Skipping cleaning if you're busy", "Hand hygiene", "Only using perfume", "Wearing two pairs of boots"],
    correctIndex: 1,
    explanation: "Handwashing/hand sanitizer is the cornerstone of infection control."
  },
  {
    id: 131, level: "EMT", category: "EMS Operations",
    text: "When moving a patient, the best technique is to:",
    options: ["Lift with your legs and keep the load close", "Lift with a rounded back", "Twist at the waist while lifting", "Lift and rotate quickly"],
    correctIndex: 0,
    explanation: "Proper body mechanics reduce back injury risk."
  },
  {
    id: 132, level: "EMT", category: "EMS Operations",
    text: "The safest method to back an ambulance is to:",
    options: ["Use a spotter when available", "Back quickly to save time", "Rely only on mirrors", "Turn off backup alarm"],
    correctIndex: 0,
    explanation: "Spotters reduce backing collisions and injuries."
  },
  {
    id: 133, level: "EMT", category: "EMS Operations",
    text: "At intersections, an ambulance operating with lights/siren should:",
    options: ["Proceed without slowing", "Assume other drivers will stop", "Come to a complete stop and proceed when clear", "Turn off headlights"],
    correctIndex: 2,
    explanation: "Due regard is required; intersections are high-risk."
  },
  {
    id: 134, level: "EMT", category: "EMS Operations",
    text: "A DNR order means EMS should:",
    options: ["Only provide CPR without defibrillation", "Withhold all care", "Follow local protocol and verify the document before withholding resuscitation", "Ignore it always"],
    correctIndex: 2,
    explanation: "DNR affects resuscitation, not comfort care; verify validity and follow protocol."
  },
  {
    id: 135, level: "EMT", category: "EMS Operations",
    text: "A patient is a minor but is married and living independently. This is an example of:",
    options: ["Implied consent only", "Emancipated minor (can consent)", "Involuntary commitment", "Abandonment"],
    correctIndex: 1,
    explanation: "Emancipated minors can usually consent to care."
  },
  {
    id: 136, level: "EMT", category: "EMS Operations",
    text: "Implied consent applies when a patient is:",
    options: ["Only mildly anxious", "Unconscious or unable to make decisions in an emergency", "Asking questions", "Refusing care clearly"],
    correctIndex: 1,
    explanation: "In emergencies, consent is presumed to save life/limb."
  },
  {
    id: 137, level: "EMT", category: "EMS Operations",
    text: "You find evidence of elder abuse. You should:",
    options: ["Post about it online", "Report per law/protocol and document objective findings", "Confront the suspected abuser aggressively", "Ignore it to avoid conflict"],
    correctIndex: 1,
    explanation: "Mandatory reporting and objective documentation are required."
  },
  {
    id: 138, level: "EMT", category: "EMS Operations",
    text: "The best example of objective documentation is:",
    options: ["'Skin pale and diaphoretic; radial pulse 124, weak'", "'Looks fine to me'", "'Patient is faking'", "'Patient is a jerk'"],
    correctIndex: 0,
    explanation: "Chart measurable findings, not opinions."
  },
  {
    id: 139, level: "EMT", category: "EMS Operations",
    text: "A patient's refusal is valid only if they have:",
    options: ["No family present", "Decision-making capacity (alert, understands risks/benefits)", "A signed insurance card", "A low pain score"],
    correctIndex: 1,
    explanation: "Capacity and informed understanding are essential for refusal."
  },
  {
    id: 140, level: "EMT", category: "EMS Operations",
    text: "If you make an error in a PCR, you should:",
    options: ["Follow agency policy (single line, initial/date, no erasing)", "White-out the mistake", "Rewrite without noting change", "Delete the entire report"],
    correctIndex: 0,
    explanation: "Maintain integrity of the legal record; never obscure entries."
  },
  {
    id: 141, level: "EMT", category: "EMS Operations",
    text: "The primary purpose of triage in an MCI is to:",
    options: ["Do the greatest good for the greatest number", "Guarantee everyone survives", "Treat the first patient you see", "Transport the most injured last"],
    correctIndex: 0,
    explanation: "Triage prioritizes resources to maximize overall survival."
  },
  {
    id: 142, level: "EMT", category: "EMS Operations",
    text: "The START triage method uses which key assessment?",
    options: ["Temperature only", "Respirations, perfusion, and mental status", "ECG rhythm only", "Blood glucose, pupils, pain score"],
    correctIndex: 1,
    explanation: "START quickly categorizes based on RPM."
  },
  {
    id: 143, level: "EMT", category: "EMS Operations",
    text: "If a patient is infectious and coughing, the best mask choice for the patient is:",
    options: ["A surgical mask on the patient (source control)", "A cloth scarf only", "No mask needed", "N95 on the patient only"],
    correctIndex: 0,
    explanation: "Source control reduces droplet spread; responders use appropriate PPE."
  },
  {
    id: 144, level: "EMT", category: "EMS Operations",
    text: "To reduce risk of needlestick injury, you should:",
    options: ["Never recap needles and dispose in sharps container immediately", "Carry needles in pockets", "Break needles before disposal", "Recap needles carefully"],
    correctIndex: 0,
    explanation: "Use sharps safety practices to prevent exposure."
  },
  {
    id: 145, level: "EMT", category: "EMS Operations",
    text: "When lifting a stretcher with a partner, you should:",
    options: ["Coordinate commands and lift together", "Twist while lifting", "Rush without communication", "Lift independently at different times"],
    correctIndex: 0,
    explanation: "Team communication prevents drops and injuries."
  },
  {
    id: 146, level: "EMT", category: "EMS Operations",
    text: "A quality patient handoff should include:",
    options: ["A long unrelated story", "Chief complaint, pertinent findings, treatment, and response", "Only the patient's name", "No vital signs"],
    correctIndex: 1,
    explanation: "Concise handoff improves continuity of care."
  },
  {
    id: 147, level: "EMT", category: "EMS Operations",
    text: "If you witness a coworker diverting controlled substances, you should:",
    options: ["Report through appropriate chain of command per policy", "Tell the patient", "Ignore it to avoid conflict", "Confront them on social media"],
    correctIndex: 0,
    explanation: "Diversion is serious and must be reported through proper channels."
  },
  {
    id: 148, level: "EMT", category: "EMS Operations",
    text: "When transporting a patient, the single most important safety device is:",
    options: ["Seat belts/restraints for everyone", "Siren volume", "Extra oxygen tanks", "A larger radio"],
    correctIndex: 0,
    explanation: "Restraints prevent injury in crashes; use them consistently."
  },
  {
    id: 149, level: "EMT", category: "EMS Operations",
    text: "A patient's care report should be completed:",
    options: ["As soon as possible after the call with accurate times and findings", "Only if the patient complains", "Weeks later from memory", "Only if you gave medication"],
    correctIndex: 0,
    explanation: "Timely documentation improves accuracy and legal defensibility."
  },
  {
    id: 150, level: "EMT", category: "EMS Operations",
    text: "Medical direction given in advance through protocols is called:",
    options: ["Standing orders", "On-line orders only", "Abandonment", "Triage tags"],
    correctIndex: 0,
    explanation: "Standing orders allow treatment per written protocol when criteria are met."
  },

  // ================= PARAMEDIC CATEGORIES =================
  // 1. Clinical Judgment
  {
    id: 151, level: "Paramedic", category: "Clinical Judgment",
    text: "A febrile patient is hypotensive (82/48), tachycardic, and has warm flushed skin early on. Most likely shock type is:",
    options: ["Septic (distributive) shock", "Obstructive shock from tamponade", "Cardiogenic shock", "Hypovolemic shock from hemorrhage"],
    correctIndex: 0,
    explanation: "Early sepsis can present warm with hypotension/tachycardia; treat per sepsis protocol."
  },
  {
    id: 152, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient with suspected sepsis has hypotension after fluids. Next best vasoactive support is typically:",
    options: ["Nitroglycerin drip", "Norepinephrine infusion (per protocol)", "Furosemide bolus", "Adenosine push"],
    correctIndex: 1,
    explanation: "If fluid-refractory septic shock, vasopressors like norepinephrine are commonly first-line."
  },
  {
    id: 153, level: "Paramedic", category: "Clinical Judgment",
    text: "An altered patient is diaphoretic, tachycardic, and has BGL 34 mg/dL. Best immediate treatment is:",
    options: ["Naloxone first", "IV dextrose (or IM glucagon if no IV) per protocol", "Sodium bicarbonate", "Aspirin"],
    correctIndex: 1,
    explanation: "Correct hypoglycemia immediately; it's rapidly reversible and life-threatening."
  },
  {
    id: 154, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient has pinpoint pupils, bradycardia, bronchorrhea, and muscle fasciculations after pesticide exposure. Most likely toxidrome is:",
    options: ["Organophosphate poisoning", "Anticholinergic toxicity", "Sympathomimetic overdose", "Opioid overdose only"],
    correctIndex: 0,
    explanation: "Cholinergic signs (SLUDGE/DUMBELS) suggest organophosphate exposure."
  },
  {
    id: 155, level: "Paramedic", category: "Clinical Judgment",
    text: "For organophosphate poisoning with severe bronchorrhea, first-line antidotal therapy is:",
    options: ["Atropine (and pralidoxime if available) per protocol", "Naloxone", "Calcium chloride", "Flumazenil"],
    correctIndex: 0,
    explanation: "Atropine dries secretions and improves bradycardia; pralidoxime helps reverse enzyme binding."
  },
  {
    id: 156, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient with TCA overdose has wide QRS and hypotension. Best targeted therapy is:",
    options: ["Furosemide", "Sodium bicarbonate", "Magnesium sulfate", "Diltiazem"],
    correctIndex: 1,
    explanation: "Bicarb narrows QRS and treats sodium-channel blockade in TCA toxicity."
  },
  {
    id: 157, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient with hyperkalemia shows peaked T waves and widening QRS. First action to stabilize the heart is:",
    options: ["IV calcium (chloride or gluconate) per protocol", "Furosemide only", "Adenosine", "Insulin only without glucose"],
    correctIndex: 0,
    explanation: "Calcium stabilizes myocardial membrane before shifting potassium."
  },
  {
    id: 158, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient with DKA is tachypneic with Kussmaul respirations and abdominal pain. The key prehospital priorities are:",
    options: ["Immediate insulin bolus", "Fluids, airway/ventilation support, and transport", "Diuretics", "Nitroglycerin drip"],
    correctIndex: 1,
    explanation: "Prehospital care is supportive; insulin is hospital-based in most systems."
  },
  {
    id: 159, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient with COPD is somnolent with high ETCO2. The best respiratory support is:",
    options: ["Give furosemide", "Withhold oxygen completely", "Assist ventilation (BVM/vent) and titrate oxygen", "Hyperventilate aggressively"],
    correctIndex: 2,
    explanation: "Hypercapnic failure needs ventilatory support; avoid over-oxygenation but do not withhold O2."
  },
  {
    id: 160, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient has severe dyspnea, wheezes, silent chest, and fatigue. This suggests:",
    options: ["Mild asthma", "Simple anxiety only", "Impending respiratory failure in severe asthma", "Bronchitis without concern"],
    correctIndex: 2,
    explanation: "Silent chest with exhaustion is ominous; prepare for ventilation/intubation."
  },
  {
    id: 161, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient has sudden tearing chest pain radiating to the back and unequal BP in arms. Suspect:",
    options: ["Pericarditis only", "Gastritis", "Aortic dissection", "Stable angina"],
    correctIndex: 2,
    explanation: "Tearing pain + pulse/BP differential suggests dissection; avoid thrombolytics."
  },
  {
    id: 162, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient has pleuritic chest pain, tachycardia, and hypoxia after long flight. Suspect:",
    options: ["Migraine", "Pulmonary embolism", "Appendicitis", "GERD"],
    correctIndex: 1,
    explanation: "Risk factors + hypoxia + pleuritic pain suggest PE."
  },
  {
    id: 163, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient is post-ictal after a witnessed seizure, now protecting airway and breathing adequately. Best next step is to:",
    options: ["Force oral fluids", "Immediately intubate", "Check glucose and look for causes/injury", "Give naloxone to everyone"],
    correctIndex: 2,
    explanation: "After stabilization, evaluate reversible causes (e.g., hypoglycemia) and trauma."
  },
  {
    id: 164, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient with suspected stroke has BP 220/120 but no signs of hemorrhage. Prehospital BP goal is generally:",
    options: ["Avoid aggressive lowering unless per protocol (support ABCs)", "Lower BP to normal immediately", "Give nitroglycerin routinely", "Give furosemide"],
    correctIndex: 0,
    explanation: "Over-lowering can reduce cerebral perfusion; follow stroke protocol."
  },
  {
    id: 165, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient is agitated, hyperthermic, tachycardic, and diaphoretic after stimulant use. Best initial management is:",
    options: ["Active cooling", "Atropine", "Benzodiazepines and active cooling", "Naloxone"],
    correctIndex: 2,
    explanation: "Sympathomimetic toxicity responds to benzos, cooling, and supportive care."
  },
  {
    id: 166, level: "Paramedic", category: "Clinical Judgment",
    text: "A diabetic patient is very dehydrated with BGL 820 and minimal ketones (HHS). Key prehospital priority is:",
    options: ["Aggressive fluid resuscitation and transport", "Diuretic", "Insulin bolus", "Hyperventilation"],
    correctIndex: 0,
    explanation: "HHS is profound dehydration; supportive fluids and rapid transport are key."
  },
  {
    id: 167, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient has sudden severe headache with neck stiffness and photophobia. Concern is for:",
    options: ["Simple sinus headache", "Asthma", "Subarachnoid hemorrhage/meningitis (treat as emergent)", "Sprained ankle"],
    correctIndex: 2,
    explanation: "Life-threatening neuro/infectious causes require urgent transport and monitoring."
  },
  {
    id: 168, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient has crushing chest pain with ST elevation in two contiguous leads. Best destination decision is:",
    options: ["Transport to PCI-capable facility (STEMI alert) per system", "Treat on scene for 30 minutes", "Nearest clinic always", "Delay transport for repeat vitals only"],
    correctIndex: 0,
    explanation: "STEMI systems prioritize rapid reperfusion; early notification improves time-to-balloon."
  },
  {
    id: 169, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient is hypotensive with JVD and muffled heart sounds after stab wound. Suspect:",
    options: ["Cardiac tamponade", "Septic shock", "Tension pneumothorax only", "Neurogenic shock"],
    correctIndex: 0,
    explanation: "Beck's triad suggests tamponade; rapid transport and supportive care."
  },
  {
    id: 170, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient is bradycardic, hypotensive, and has dry skin after diphenhydramine overdose. Toxidrome is:",
    options: ["Cholinergic toxicity", "Opioid overdose", "Anticholinergic toxicity", "Serotonin syndrome"],
    correctIndex: 2,
    explanation: "Anticholinergic: dry, hot, tachy (often), delirium; presentations vary but dryness is key."
  },
  {
    id: 171, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient is on beta-blockers and is bradycardic with hypotension after overdose. Best targeted therapy is often:",
    options: ["Naloxone", "Glucagon (per protocol)", "Adenosine", "Aspirin"],
    correctIndex: 1,
    explanation: "Glucagon can improve heart rate/contractility in beta-blocker toxicity."
  },
  {
    id: 172, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient with suspected MI has chest pain and crackles with low BP. You should avoid:",
    options: ["Nitroglycerin if hypotensive or RV infarct suspected", "Cardiac monitoring", "Oxygen if hypoxic", "Aspirin if no contraindication"],
    correctIndex: 0,
    explanation: "Nitrates can worsen hypotension, especially in RV infarct/low preload states."
  },
  {
    id: 173, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient has sudden onset weakness, facial droop, and speech difficulty. The best prehospital scale to use is:",
    options: ["FAST/Cincinnati stroke scale", "GCS only", "START triage", "Burn rule of nines"],
    correctIndex: 0,
    explanation: "Stroke scales quickly identify candidates for stroke pathways."
  },
  {
    id: 174, level: "Paramedic", category: "Clinical Judgment",
    text: "A patient has nausea, vomiting, diarrhea, and abdominal cramping after contaminated food, with signs of dehydration. Best management is:",
    options: ["Supportive care and fluid resuscitation per protocol", "Immediate antibiotics in all cases", "Diuretics", "Nitroglycerin"],
    correctIndex: 0,
    explanation: "Most GI illnesses are supportive prehospital; treat dehydration and monitor."
  },
  {
    id: 175, level: "Paramedic", category: "Clinical Judgment",
    text: "A trauma patient is hypotensive with warm dry skin and bradycardia after spinal injury. Shock type is:",
    options: ["Neurogenic shock", "Cardiogenic shock", "Hypovolemic shock", "Septic shock"],
    correctIndex: 0,
    explanation: "Neurogenic shock can cause hypotension with bradycardia and warm skin."
  },

  // 2. Airway
  {
    id: 176, level: "Paramedic", category: "Airway",
    text: "The most reliable confirmation of endotracheal tube placement in the field is:",
    options: ["Continuous waveform capnography (ETCO2)", "Fogging in the tube", "Chest rise alone", "Auscultation alone"],
    correctIndex: 0,
    explanation: "Waveform capnography is the most dependable confirmation and ongoing monitor."
  },
  {
    id: 177, level: "Paramedic", category: "Airway",
    text: "During RSI, the single most important step to prevent hypoxia is:",
    options: ["Aggressive preoxygenation and apneic oxygenation", "Skipping BVM even if needed", "Cricoid pressure always", "Giving paralytic before oxygen"],
    correctIndex: 0,
    explanation: "Preoxygenation increases oxygen reserve; apneic oxygenation can prolong safe apnea time."
  },
  {
    id: 178, level: "Paramedic", category: "Airway",
    text: "A head-injury patient is intubated. Ventilation should aim to:",
    options: ["Maintain normocapnia (avoid hyperventilation) unless herniation signs", "Hypoventilate to raise ETCO2", "Ignore ETCO2 monitoring", "Hyperventilate to ETCO2 20 routinely"],
    correctIndex: 0,
    explanation: "Hyperventilation decreases cerebral perfusion; target normal ETCO2 unless impending herniation."
  },
  {
    id: 179, level: "Paramedic", category: "Airway",
    text: "Which finding suggests impending airway obstruction in an inhalation burn?",
    options: ["Hoarseness, stridor, and facial burns", "Isolated ankle pain", "Mild headache only", "Normal voice and no soot"],
    correctIndex: 0,
    explanation: "Airway edema can progress rapidly; early airway management may be needed."
  },
  {
    id: 180, level: "Paramedic", category: "Airway",
    text: "In a patient with severe asthma, ventilator strategy should prioritize:",
    options: ["High respiratory rates", "Allowing longer exhalation time to prevent air trapping", "Zero PEEP always", "Very large tidal volumes"],
    correctIndex: 1,
    explanation: "Asthma causes expiratory flow limitation; avoid breath stacking."
  },
  {
    id: 181, level: "Paramedic", category: "Airway",
    text: "A patient has a difficult airway and cannot be intubated or ventilated. Definitive rescue is:",
    options: ["Cricothyrotomy (per protocol)", "Chest compressions", "Oropharyngeal airway only", "Nasal cannula"],
    correctIndex: 0,
    explanation: "Can't intubate/can't ventilate requires a surgical airway per protocol."
  },
  {
    id: 182, level: "Paramedic", category: "Airway",
    text: "For rapid sequence intubation, a common induction agent with hemodynamic stability is:",
    options: ["Etomidate (per protocol)", "Atropine for induction", "Furosemide", "Adenosine"],
    correctIndex: 0,
    explanation: "Etomidate is often used for RSI due to rapid onset and relative stability."
  },
  {
    id: 183, level: "Paramedic", category: "Airway",
    text: "A paralytic contraindicated in hyperkalemia, crush injury, or burns >24 hours is:",
    options: ["Rocuronium", "Succinylcholine", "Midazolam", "Vecuronium"],
    correctIndex: 1,
    explanation: "Succinylcholine can worsen hyperkalemia in these states."
  },
  {
    id: 184, level: "Paramedic", category: "Airway",
    text: "After intubation, the best device to prevent gastric distention during ventilation is:",
    options: ["Forcing air quickly", "Skipping oxygen", "Appropriate BVM technique with proper rate/volume", "Higher tidal volumes always"],
    correctIndex: 2,
    explanation: "Gentle ventilation at correct rate/volume reduces gastric inflation."
  },
  {
    id: 185, level: "Paramedic", category: "Airway",
    text: "An OPA is indicated when the patient:",
    options: ["Is unresponsive and has no gag reflex", "Is awake and vomiting", "Has facial pain but is responsive", "Has intact gag and is alert"],
    correctIndex: 0,
    explanation: "OPAs can provoke vomiting/laryngospasm in patients with gag reflex."
  },
  {
    id: 186, level: "Paramedic", category: "Airway",
    text: "An NPA is relatively contraindicated in:",
    options: ["Asthma", "Diabetes", "Hypertension", "Suspected basilar skull fracture"],
    correctIndex: 3,
    explanation: "Midface trauma/basilar skull fracture increases risk of intracranial placement."
  },
  {
    id: 187, level: "Paramedic", category: "Airway",
    text: "A patient with an advanced airway has ETCO2 suddenly drop to near zero during CPR. The first concern is:",
    options: ["Dislodged tube or circuit problem (then consider ROSC/PE)", "Need more sedation", "Give adenosine", "Normal finding"],
    correctIndex: 0,
    explanation: "Sudden ETCO2 loss suggests disconnection/dislodgement; troubleshoot immediately."
  },
  {
    id: 188, level: "Paramedic", category: "Airway",
    text: "Capnography is most useful during CPR because it can:",
    options: ["Measure blood glucose", "Reflect perfusion/CPR quality and suggest ROSC", "Replace ECG rhythm check", "Diagnose fracture"],
    correctIndex: 1,
    explanation: "ETCO2 correlates with cardiac output during CPR; rising ETCO2 may indicate ROSC."
  },
  {
    id: 189, level: "Paramedic", category: "Airway",
    text: "After intubation, the most appropriate way to secure the tube is:",
    options: ["Commercial tube holder or tape with documented depth", "Tie with elastic around the neck loosely", "Leave it unsecured", "Hold it by hand only"],
    correctIndex: 0,
    explanation: "Securement prevents dislodgement; document depth at teeth/lips."
  },
  {
    id: 190, level: "Paramedic", category: "Airway",
    text: "A post-intubation patient becomes hypotensive. Best initial action is to:",
    options: ["Assess for causes and consider fluid/pressor support per protocol", "Remove the tube immediately", "Give diuretics", "Hyperventilate"],
    correctIndex: 0,
    explanation: "Intubation/positive pressure can drop preload; treat hypotension and reassess ventilation."
  },
  {
    id: 191, level: "Paramedic", category: "Airway",
    text: "A patient with suspected opioid overdose is apneic. The best airway sequence is:",
    options: ["BVM ventilations first, then naloxone per protocol", "Intubate without oxygenation", "CPAP immediately", "Naloxone first without ventilation"],
    correctIndex: 0,
    explanation: "Ventilation is immediate lifesaving action; naloxone supports recovery."
  },
  {
    id: 192, level: "Paramedic", category: "Airway",
    text: "During BVM ventilation with two rescuers, the best technique is:",
    options: ["Two-hand seal with one provider and ventilations by the other", "Ventilate as fast as possible", "No airway positioning needed", "One-hand seal always"],
    correctIndex: 0,
    explanation: "Two-person BVM improves seal and tidal volumes."
  },
  {
    id: 193, level: "Paramedic", category: "Airway",
    text: "When using a supraglottic airway, ongoing confirmation should include:",
    options: ["Blood pressure only", "Pulse oximetry only", "Waveform capnography and chest rise", "Tube fogging only"],
    correctIndex: 2,
    explanation: "Capnography confirms ventilation; reassess frequently."
  },
  {
    id: 194, level: "Paramedic", category: "Airway",
    text: "In pediatric patients, the most common cause of airway obstruction is:",
    options: ["The tongue and soft tissue", "Broken ribs", "Hypertension", "A foreign body always"],
    correctIndex: 0,
    explanation: "Pediatric anatomy predisposes to obstruction; positioning/adjuncts matter."
  },
  {
    id: 195, level: "Paramedic", category: "Airway",
    text: "A child is unresponsive with a pulse and inadequate respirations. The correct ventilation rate is approximately:",
    options: ["One breath every 10 seconds", "One breath every 1 second", "No breaths needed if pulse present", "One breath every 3-5 seconds (12-20/min) per guidelines"],
    correctIndex: 3,
    explanation: "Provide assisted ventilations at pediatric guideline rates."
  },
  {
    id: 196, level: "Paramedic", category: "Airway",
    text: "If you suspect gastric insufflation during ventilation, you should:",
    options: ["Remove oxygen", "Slow the rate and use just enough volume for chest rise", "Stop ventilation completely", "Increase rate and volume"],
    correctIndex: 1,
    explanation: "Over-ventilation forces air into the stomach; ventilate gently."
  },
  {
    id: 197, level: "Paramedic", category: "Airway",
    text: "A patient has stridor and cannot speak after an allergic reaction. Best airway priority is to:",
    options: ["Treat anaphylaxis and prepare for a difficult airway", "Insert an OPA while awake", "Force oral fluids", "Give aspirin and wait"],
    correctIndex: 0,
    explanation: "Upper-airway edema can progress quickly; treat and anticipate advanced airway needs."
  },
  {
    id: 198, level: "Paramedic", category: "Airway",
    text: "For preoxygenation in RSI, the best method is often:",
    options: ["High-flow oxygen with BVM/NRB and PEEP if tolerated", "No oxygen until drugs given", "Room air only", "Low-flow nasal cannula only"],
    correctIndex: 0,
    explanation: "Maximizing oxygen reserve reduces desaturation during apnea."
  },
  {
    id: 199, level: "Paramedic", category: "Airway",
    text: "A ventilated patient's ETCO2 is 55 with normal waveform and patient is hypotensive. Best adjustment is to:",
    options: ["Decrease ventilation to raise ETCO2", "Increase minute ventilation cautiously (rate) while treating underlying cause", "Give adenosine", "Stop ventilation"],
    correctIndex: 1,
    explanation: "ETCO2 reflects ventilation and perfusion; adjust ventilation and treat shock causes."
  },
  {
    id: 200, level: "Paramedic", category: "Airway",
    text: "A patient with suspected increased ICP shows Cushing response. If ventilation is required, ETCO2 should generally be kept:",
    options: ["Unmonitored", "Around normal (35-45) unless directed by protocol for herniation", "Above 60 routinely", "Below 25 routinely"],
    correctIndex: 1,
    explanation: "Aim for normocapnia; only brief hyperventilation for impending herniation per protocol."
  },

  // 3. Cardiology
  {
    id: 201, level: "Paramedic", category: "Cardiology",
    text: "A narrow-complex regular tachycardia at 190 with hypotension and altered mental status requires:",
    options: ["Synchronized cardioversion", "Vagal maneuvers only", "Adenosine first", "Diltiazem infusion"],
    correctIndex: 0,
    explanation: "Unstable tachyarrhythmias need immediate electrical therapy."
  },
  {
    id: 202, level: "Paramedic", category: "Cardiology",
    text: "A stable SVT patient remains in SVT after vagal maneuvers. Next medication is typically:",
    options: ["Magnesium sulfate first", "Amiodarone infusion", "Adenosine (per protocol)", "Epinephrine push"],
    correctIndex: 2,
    explanation: "Adenosine is first-line for stable regular narrow-complex SVT."
  },
  {
    id: 203, level: "Paramedic", category: "Cardiology",
    text: "A patient is in atrial fibrillation with RVR (irregularly irregular) and is unstable. Best action is:",
    options: ["Adenosine", "Vagal maneuvers only", "Synchronized cardioversion", "Defibrillation unsynchronized"],
    correctIndex: 2,
    explanation: "Unstable AF with RVR is treated with synchronized cardioversion."
  },
  {
    id: 204, level: "Paramedic", category: "Cardiology",
    text: "A wide-complex regular tachycardia with a pulse, unstable, should be treated with:",
    options: ["Defibrillation (unsynchronized) immediately", "Adenosine always", "Atropine", "Synchronized cardioversion (consider sedation if time)"],
    correctIndex: 3,
    explanation: "Unstable monomorphic VT with pulse needs synchronized cardioversion."
  },
  {
    id: 205, level: "Paramedic", category: "Cardiology",
    text: "Pulseless VT should be treated with:",
    options: ["Synchronized cardioversion", "Atropine", "Defibrillation and high-quality CPR", "Adenosine"],
    correctIndex: 2,
    explanation: "Pulseless VT is a shockable rhythm: defibrillate and resume CPR."
  },
  {
    id: 206, level: "Paramedic", category: "Cardiology",
    text: "Ventricular fibrillation management starts with:",
    options: ["Adenosine first", "Atropine first", "Immediate defibrillation and CPR", "Synchronized cardioversion"],
    correctIndex: 2,
    explanation: "VF is shockable; defibrillate and perform CPR with minimal pauses."
  },
  {
    id: 207, level: "Paramedic", category: "Cardiology",
    text: "Asystole management includes:",
    options: ["High-quality CPR and epinephrine; search for reversible causes", "Adenosine", "Defibrillation", "Synchronized cardioversion"],
    correctIndex: 0,
    explanation: "Asystole is not shockable; focus on CPR, epi, and H's/T's."
  },
  {
    id: 208, level: "Paramedic", category: "Cardiology",
    text: "PEA treatment priority is:",
    options: ["High-quality CPR and treat reversible causes", "Defibrillation", "Immediate cardioversion", "Adenosine"],
    correctIndex: 0,
    explanation: "PEA is non-shockable; fix underlying cause while doing CPR."
  },
  {
    id: 209, level: "Paramedic", category: "Cardiology",
    text: "A symptomatic bradycardia patient is hypotensive with signs of shock. First-line medication is typically:",
    options: ["Atropine (per protocol)", "Furosemide", "Adenosine", "Diltiazem"],
    correctIndex: 0,
    explanation: "Atropine is first-line for symptomatic bradycardia in many protocols."
  },
  {
    id: 210, level: "Paramedic", category: "Cardiology",
    text: "If atropine fails in unstable bradycardia, the next step is commonly:",
    options: ["Nitroglycerin", "Adenosine", "Vagal maneuvers", "Transcutaneous pacing"],
    correctIndex: 3,
    explanation: "TCP is next for refractory symptomatic bradycardia per ACLS."
  },
  {
    id: 211, level: "Paramedic", category: "Cardiology",
    text: "A patient has chest pain and ST elevation in II, III, aVF. Before giving nitroglycerin, you should suspect:",
    options: ["Hyperventilation syndrome", "Right ventricular infarct and obtain right-sided leads if possible", "Pulmonary embolism only", "Asthma attack"],
    correctIndex: 1,
    explanation: "Inferior MI may involve RV; nitrates can drop preload and worsen hypotension."
  },
  {
    id: 212, level: "Paramedic", category: "Cardiology",
    text: "The single most important early medication for suspected ACS (no contraindications) is:",
    options: ["Diphenhydramine", "Aspirin", "Adenosine", "Furosemide"],
    correctIndex: 1,
    explanation: "Aspirin reduces clot propagation and improves outcomes in ACS."
  },
  {
    id: 213, level: "Paramedic", category: "Cardiology",
    text: "A patient has crushing chest pain and clear lungs with hypertension. After aspirin and oxygen if needed, the next typical therapy is:",
    options: ["Nitroglycerin if not contraindicated", "Naloxone", "Activated charcoal", "Epinephrine"],
    correctIndex: 0,
    explanation: "Nitrates reduce preload/afterload and relieve ischemic pain when BP allows."
  },
  {
    id: 214, level: "Paramedic", category: "Cardiology",
    text: "A patient has bradycardia with peaked T waves and wide QRS. The targeted immediate treatment is:",
    options: ["Adenosine", "IV calcium", "Furosemide", "Diltiazem"],
    correctIndex: 1,
    explanation: "This is hyperkalemia with ECG changes; stabilize myocardium with calcium."
  },
  {
    id: 215, level: "Paramedic", category: "Cardiology",
    text: "A patient in AF with WPW (irregular wide-complex) should NOT receive:",
    options: ["Supportive care", "AV nodal blockers (e.g., diltiazem/verapamil) per protocol", "Procainamide (if allowed)", "Cardioversion if unstable"],
    correctIndex: 1,
    explanation: "AV nodal blockers can increase conduction through accessory pathway and cause VF."
  },
  {
    id: 216, level: "Paramedic", category: "Cardiology",
    text: "A patient has narrow-complex tachycardia and is stable but has a history of asthma. Vagal maneuvers are:",
    options: ["Only for VF", "Only for bradycardia", "Appropriate first attempt", "Contraindicated always"],
    correctIndex: 2,
    explanation: "Vagal maneuvers are noninvasive first-line for stable SVT."
  },
  {
    id: 217, level: "Paramedic", category: "Cardiology",
    text: "In cardiogenic shock (cool, clammy, hypotensive) the best general prehospital approach is:",
    options: ["Support airway, cautious fluids, and consider pressors per protocol", "Large fluid boluses without reassessment", "Diuretics immediately", "Nitroglycerin drip regardless of BP"],
    correctIndex: 0,
    explanation: "Cardiogenic shock needs support; too much fluid can worsen pulmonary edema."
  },
  {
    id: 218, level: "Paramedic", category: "Cardiology",
    text: "A patient has 3rd-degree AV block with hypotension. Best immediate therapy is:",
    options: ["Vagal maneuvers", "Transcutaneous pacing", "Nitroglycerin", "Adenosine"],
    correctIndex: 1,
    explanation: "Complete heart block with instability needs pacing."
  },
  {
    id: 219, level: "Paramedic", category: "Cardiology",
    text: "A post-ROSC patient has ETCO2 45 and is hypotensive. First priorities include:",
    options: ["Stop monitoring", "Give adenosine", "Optimize oxygenation/ventilation and support perfusion (fluids/pressors) per protocol", "Hyperventilate to ETCO2 20"],
    correctIndex: 2,
    explanation: "Post-ROSC care focuses on oxygenation, perfusion, and targeted temperature management where available."
  },
  {
    id: 220, level: "Paramedic", category: "Cardiology",
    text: "A patient with torsades de pointes (polymorphic VT with long QT) should receive:",
    options: ["Naloxone", "Adenosine", "Magnesium sulfate", "Diltiazem"],
    correctIndex: 2,
    explanation: "Magnesium is first-line for torsades; consider defib if unstable/pulseless."
  },
  {
    id: 221, level: "Paramedic", category: "Cardiology",
    text: "In an acute pulmonary edema patient with severe hypertension, best respiratory support is:",
    options: ["CPAP with appropriate meds per protocol", "Large fluid bolus", "Trendelenburg", "Naloxone"],
    correctIndex: 0,
    explanation: "CPAP improves oxygenation and reduces preload/afterload in CHF exacerbation."
  },
  {
    id: 222, level: "Paramedic", category: "Cardiology",
    text: "A patient has pericarditis-like pain that improves leaning forward. ECG may show:",
    options: ["Diffuse ST elevation (often)", "ST elevation in only one territory", "Peaked T waves", "No ECG changes ever"],
    correctIndex: 0,
    explanation: "Pericarditis often presents with diffuse ST elevation and positional pain."
  },
  {
    id: 223, level: "Paramedic", category: "Cardiology",
    text: "A patient's pacemaker spikes are present but no QRS follows. This is:",
    options: ["Failure to capture", "Ventricular fibrillation", "Failure to sense", "Normal pacing"],
    correctIndex: 0,
    explanation: "Spike without capture indicates the myocardium isn't depolarizing."
  },
  {
    id: 224, level: "Paramedic", category: "Cardiology",
    text: "A patient's pulse is 40 with dizziness after MI. If atropine fails, infusion options include:",
    options: ["Furosemide drip", "Nitroglycerin infusion to raise HR", "Epinephrine or dopamine infusion per protocol", "Adenosine infusion"],
    correctIndex: 2,
    explanation: "Pressor infusions support HR and BP when pacing/atropine insufficient."
  },
  {
    id: 225, level: "Paramedic", category: "Cardiology",
    text: "A patient with suspected STEMI is stable. The key prehospital action besides meds is:",
    options: ["Acquire 12-lead ECG and notify receiving facility early", "Give antibiotics", "Delay transport until pain is gone", "Do a full neurological exam first"],
    correctIndex: 0,
    explanation: "Early ECG/notification speeds reperfusion therapy."
  },

  // 4. Trauma
  {
    id: 226, level: "Paramedic", category: "Trauma",
    text: "A trauma patient has absent breath sounds on the right, hypotension, and JVD. Most likely cause is:",
    options: ["Asthma attack", "Pulmonary embolism", "Tension pneumothorax", "Simple rib fracture"],
    correctIndex: 2,
    explanation: "Trauma + JVD + hypotension + unilateral sounds suggests tension pneumothorax."
  },
  {
    id: 227, level: "Paramedic", category: "Trauma",
    text: "The best immediate treatment for tension pneumothorax in the field is:",
    options: ["Adenosine", "Needle decompression (per protocol) and rapid transport", "Oral glucose", "Diuretics"],
    correctIndex: 1,
    explanation: "Decompression relieves pressure to restore venous return and ventilation."
  },
  {
    id: 228, level: "Paramedic", category: "Trauma",
    text: "After needle decompression, the patient worsens again. Next step is:",
    options: ["Stop monitoring", "Reassess and consider repeat decompression/alternate site per protocol", "Apply a cervical collar only", "Give aspirin"],
    correctIndex: 1,
    explanation: "Needles can kink/clog; reassess and re-intervene as indicated."
  },
  {
    id: 229, level: "Paramedic", category: "Trauma",
    text: "A pelvic fracture with hypotension is suspected. Best immediate action is:",
    options: ["Have the patient stand", "Give nitroglycerin", "Rock the pelvis repeatedly", "Apply a pelvic binder/sheet and treat for shock"],
    correctIndex: 3,
    explanation: "Pelvic binding reduces hemorrhage by stabilizing pelvic volume."
  },
  {
    id: 230, level: "Paramedic", category: "Trauma",
    text: "A trauma patient has signs of hemorrhagic shock. The most effective intervention is:",
    options: ["Control bleeding (tourniquet/hemostatic) and rapid transport", "Delay transport for pain score", "Give aspirin", "Give furosemide"],
    correctIndex: 0,
    explanation: "Stopping hemorrhage and minimizing scene time saves lives."
  },
  {
    id: 231, level: "Paramedic", category: "Trauma",
    text: "A patient with penetrating chest trauma develops muffled heart sounds and hypotension. Suspect:",
    options: ["Heat exhaustion", "Spinal shock", "Cardiac tamponade", "Appendicitis"],
    correctIndex: 2,
    explanation: "Penetrating trauma can cause tamponade; rapid transport is critical."
  },
  {
    id: 232, level: "Paramedic", category: "Trauma",
    text: "In suspected traumatic brain injury, the most important early goal is to avoid:",
    options: ["Pain control", "Hypoxia and hypotension", "Immobilization", "Normal oxygen levels"],
    correctIndex: 1,
    explanation: "Even one episode of hypoxia/hypotension worsens TBI outcomes."
  },
  {
    id: 233, level: "Paramedic", category: "Trauma",
    text: "A TBI patient is intubated. Ventilation target is generally:",
    options: ["Hypoventilation to ETCO2 60", "Normocapnia (ETCO2 ~35-45) unless herniation signs", "No ETCO2 monitoring", "Routine hyperventilation to ETCO2 20"],
    correctIndex: 1,
    explanation: "Avoid hyperventilation except brief use for impending herniation per protocol."
  },
  {
    id: 234, level: "Paramedic", category: "Trauma",
    text: "A patient has an open femur fracture with severe bleeding. Best first action is:",
    options: ["Remove protruding bone", "Direct pressure/hemostatic dressings and tourniquet if needed", "Traction splint before bleeding control", "Give oral fluids"],
    correctIndex: 1,
    explanation: "Hemorrhage control takes priority; stabilize after bleeding is controlled."
  },
  {
    id: 235, level: "Paramedic", category: "Trauma",
    text: "A trauma patient has paradoxical chest movement and hypoxia. Best management is:",
    options: ["Provide ventilatory support and consider stabilization per protocol", "Give diuretics", "Force the patient to walk", "Give adenosine"],
    correctIndex: 0,
    explanation: "Flail chest can cause respiratory failure; support ventilation and rapid transport."
  },
  {
    id: 236, level: "Paramedic", category: "Trauma",
    text: "A patient has abdominal evisceration. You should:",
    options: ["Cover with moist sterile dressings and occlusive layer", "Apply ice directly", "Leave organs exposed to air", "Push organs back in"],
    correctIndex: 0,
    explanation: "Keep tissues moist/warm and protect with sterile dressings."
  },
  {
    id: 237, level: "Paramedic", category: "Trauma",
    text: "A patient has a partial amputation with heavy bleeding. Best care is:",
    options: ["Control bleeding, wrap the part in sterile moist gauze, cool it (not directly on ice), and transport", "Put the part directly on ice water", "Delay transport to clean the part", "Discard the part"],
    correctIndex: 0,
    explanation: "Proper preservation may allow reattachment; control hemorrhage first."
  },
  {
    id: 238, level: "Paramedic", category: "Trauma",
    text: "A patient has suspected crush injury after prolonged entrapment. The major life threat after release is:",
    options: ["Hyperkalemia and acidosis", "Dehydration only", "Hypoglycemia", "Hypertension only"],
    correctIndex: 0,
    explanation: "Crush syndrome releases potassium/myoglobin; treat and monitor per protocol."
  },
  {
    id: 239, level: "Paramedic", category: "Trauma",
    text: "For crush syndrome, early prehospital management often includes:",
    options: ["Aggressive fluids and ECG monitoring per protocol", "Diuretics immediately", "Adenosine", "Nitroglycerin"],
    correctIndex: 0,
    explanation: "Fluids help protect kidneys and support perfusion; monitor for hyperkalemia."
  },
  {
    id: 240, level: "Paramedic", category: "Trauma",
    text: "A patient has burns to face and neck with soot in mouth. Highest concern is:",
    options: ["Only mild pain", "Airway edema and inhalation injury", "Dehydration only", "A broken ankle"],
    correctIndex: 1,
    explanation: "Inhalation injury can rapidly obstruct airway; early airway planning is key."
  },
  {
    id: 241, level: "Paramedic", category: "Trauma",
    text: "A 25% TBSA burn patient is in shock. Prehospital fluid therapy should be:",
    options: ["No fluids ever", "Guided by protocol and perfusion signs; avoid over-resuscitation", "Large boluses without monitoring", "Diuretics"],
    correctIndex: 1,
    explanation: "Burn resuscitation requires careful balance; follow protocol and reassess."
  },
  {
    id: 242, level: "Paramedic", category: "Trauma",
    text: "A patient has a flaccid, warm limb with severe pain after fracture. Concern is for:",
    options: ["Simple muscle soreness", "Bronchitis", "Compartment syndrome", "Migraine"],
    correctIndex: 2,
    explanation: "Pain out of proportion with neurovascular compromise suggests compartment syndrome."
  },
  {
    id: 243, level: "Paramedic", category: "Trauma",
    text: "A patient has a penetrating object impaled in the thigh. You should:",
    options: ["Stabilize it in place and control bleeding", "Remove it immediately", "Ignore it and only splint", "Push it deeper"],
    correctIndex: 0,
    explanation: "Impaled objects can tamponade bleeding; stabilize and transport."
  },
  {
    id: 244, level: "Paramedic", category: "Trauma",
    text: "A patient has a suspected spinal injury and is hypotensive with bradycardia. This indicates:",
    options: ["Neurogenic shock", "Anxiety", "Hemorrhagic shock", "Septic shock"],
    correctIndex: 0,
    explanation: "Loss of sympathetic tone causes hypotension with bradycardia."
  },
  {
    id: 245, level: "Paramedic", category: "Trauma",
    text: "In hemorrhagic shock, the best indicator of adequate perfusion is:",
    options: ["Room temperature", "Mental status and pulse/skin trends (and BP/ETCO2 if available)", "Hair color", "Pain score only"],
    correctIndex: 1,
    explanation: "Perfusion is reflected in mentation and vital sign trends."
  },
  {
    id: 246, level: "Paramedic", category: "Trauma",
    text: "A trauma patient has unequal chest rise and severe respiratory distress. First action is to:",
    options: ["Delay oxygen until hospital", "Seal airway/ventilation issues and treat life threats per trauma sequence", "Do a detailed history first", "Give oral glucose"],
    correctIndex: 1,
    explanation: "Treat immediate life threats (airway/breathing/circulation) before detailed exam."
  },
  {
    id: 247, level: "Paramedic", category: "Trauma",
    text: "A patient has severe facial trauma and cannot be ventilated with BVM. Next best airway is:",
    options: ["Supraglottic airway or surgical airway per protocol", "Tourniquet", "Oral glucose", "Nasal cannula only"],
    correctIndex: 0,
    explanation: "If BVM fails, move up airway ladder per protocol."
  },
  {
    id: 248, level: "Paramedic", category: "Trauma",
    text: "A patient has traumatic amputated finger. The correct handling of the amputated part is to:",
    options: ["Wrap in moist sterile gauze, place in a bag, then place bag on ice (not directly on ice)", "Soak in water", "Put directly on ice", "Leave at room temperature"],
    correctIndex: 0,
    explanation: "Indirect cooling preserves tissue without freezing damage."
  },
  {
    id: 249, level: "Paramedic", category: "Trauma",
    text: "A patient with suspected internal bleeding has worsening hypotension. Best transport decision is:",
    options: ["Rapid transport to trauma center with early notification", "Transport to nearest urgent care", "Delay transport for pain meds first", "Stay on scene for full documentation"],
    correctIndex: 0,
    explanation: "Definitive care is surgical; minimize scene time and notify trauma center."
  },
  {
    id: 250, level: "Paramedic", category: "Trauma",
    text: "A tourniquet has been applied for life-threatening bleeding. You should:",
    options: ["Document the time applied and do not remove it in the field unless protocol directs", "Loosen it every 10 minutes", "Cover it so no one can see it", "Remove it once bleeding slows"],
    correctIndex: 0,
    explanation: "Tourniquets stay in place; document time and reassess for bleeding control."
  },

  // 5. Medical & OBGYN
  {
    id: 251, level: "Paramedic", category: "Medical & OBGYN",
    text: "A pregnant patient at 34 weeks is seizing and hypertensive. Most likely condition is:",
    options: ["Eclampsia", "Asthma attack", "Appendicitis", "Hypoglycemia only"],
    correctIndex: 0,
    explanation: "Seizure + pregnancy + hypertension suggests eclampsia."
  },
  {
    id: 252, level: "Paramedic", category: "Medical & OBGYN",
    text: "First-line medication to stop eclamptic seizures (after airway support) is:",
    options: ["Naloxone", "Magnesium sulfate (per protocol)", "Furosemide", "Adenosine"],
    correctIndex: 1,
    explanation: "Magnesium is first-line for eclampsia; benzos may be adjunct."
  },
  {
    id: 253, level: "Paramedic", category: "Medical & OBGYN",
    text: "A postpartum patient has heavy vaginal bleeding and a boggy uterus. Best initial action is:",
    options: ["Delay care until hospital", "Have the patient walk", "Fundal massage and treat for shock (per protocol)", "Give nitroglycerin"],
    correctIndex: 2,
    explanation: "Uterine atony causes hemorrhage; fundal massage helps contract the uterus."
  },
  {
    id: 254, level: "Paramedic", category: "Medical & OBGYN",
    text: "During delivery, the baby's head delivers but shoulders do not (turtle sign). This is:",
    options: ["Placenta previa", "Shoulder dystocia", "Breech presentation", "Prolapsed cord"],
    correctIndex: 1,
    explanation: "Shoulder dystocia requires specific maneuvers and rapid assistance."
  },
  {
    id: 255, level: "Paramedic", category: "Medical & OBGYN",
    text: "If the umbilical cord is prolapsed and you see it at the vaginal opening, you should:",
    options: ["Clamp and cut the cord immediately", "Relieve pressure off the cord and position mother (knee-chest) while rapid transport", "Push the cord back in", "Delay transport"],
    correctIndex: 1,
    explanation: "Prolapsed cord compromises fetal oxygenation; relieve compression and transport."
  },
  {
    id: 256, level: "Paramedic", category: "Medical & OBGYN",
    text: "A newborn is term, limp, and not breathing after drying/stimulation. Next step is:",
    options: ["Begin positive-pressure ventilation", "Give naloxone", "Give oral glucose", "Start chest compressions immediately"],
    correctIndex: 0,
    explanation: "Ventilation is the priority in neonatal resuscitation."
  },
  {
    id: 257, level: "Paramedic", category: "Medical & OBGYN",
    text: "A newborn has HR 50 despite effective ventilation. Next step is:",
    options: ["Start chest compressions with ventilation per NRP", "Give aspirin", "Stop ventilations", "Give adenosine"],
    correctIndex: 0,
    explanation: "If HR <60 after ventilation, start compressions and continue ventilation."
  },
  {
    id: 258, level: "Paramedic", category: "Medical & OBGYN",
    text: "A child has drooling, high fever, and tripod positioning. You should suspect:",
    options: ["Epiglottitis and avoid agitating the airway", "Anaphylaxis", "CHF", "Croup only"],
    correctIndex: 0,
    explanation: "Epiglottitis threatens airway; keep child calm and prepare for advanced airway."
  },
  {
    id: 259, level: "Paramedic", category: "Medical & OBGYN",
    text: "A child has barking cough and stridor that improves with cool night air. This is most consistent with:",
    options: ["Croup", "Epiglottitis", "CHF", "Anaphylaxis"],
    correctIndex: 0,
    explanation: "Croup causes upper-airway swelling with barking cough; keep calm and support."
  },
  {
    id: 260, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient has severe allergic reaction with hypotension and wheezing. Best medication is:",
    options: ["Diphenhydramine only", "Epinephrine IM (per protocol)", "Aspirin", "Furosemide"],
    correctIndex: 1,
    explanation: "Epinephrine treats airway edema/bronchospasm and raises BP; antihistamines are adjunct."
  },
  {
    id: 261, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient has status epilepticus (continuous seizures). First-line medication is typically:",
    options: ["Benzodiazepines (e.g., midazolam/lorazepam) per protocol", "Furosemide", "Nitroglycerin", "Adenosine"],
    correctIndex: 0,
    explanation: "Benzos stop active seizures; then treat cause and protect airway."
  },
  {
    id: 262, level: "Paramedic", category: "Medical & OBGYN",
    text: "A suspected opioid overdose patient is apneic. After ventilations, the medication is:",
    options: ["Aspirin", "Diltiazem", "Naloxone (per protocol)", "Magnesium sulfate"],
    correctIndex: 2,
    explanation: "Naloxone reverses opioid effects but does not replace ventilation."
  },
  {
    id: 263, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient has hypoglycemia and no IV access, but is unresponsive with a pulse. Best option is:",
    options: ["IM glucagon (per protocol) and ventilatory support if needed", "Oral glucose", "Furosemide", "Aspirin"],
    correctIndex: 0,
    explanation: "Oral glucose is unsafe without gag; glucagon can raise glucose when IV not available."
  },
  {
    id: 264, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient with suspected GI bleed is pale with coffee-ground emesis and hypotension. Prehospital priority is:",
    options: ["Induce vomiting", "Give aspirin", "Treat for shock and rapid transport", "Give nitroglycerin"],
    correctIndex: 2,
    explanation: "GI bleeding can be life-threatening; support perfusion and transport."
  },
  {
    id: 265, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient with severe COPD exacerbation has wheezing and fatigue. The best medication set is often:",
    options: ["Activated charcoal", "Bronchodilators, steroids, and oxygen/ventilation support per protocol", "Diuretics only", "Adenosine"],
    correctIndex: 1,
    explanation: "COPD exacerbations need bronchodilation and support; follow local protocol."
  },
  {
    id: 266, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient has acute pulmonary edema with severe respiratory distress. First-line respiratory intervention is:",
    options: ["Oral fluids", "CPAP if conscious and not contraindicated", "Trendelenburg", "High-dose opioids"],
    correctIndex: 1,
    explanation: "CPAP improves oxygenation and reduces work of breathing in CHF exacerbation."
  },
  {
    id: 267, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient is hypoventilating after benzodiazepine overdose. Prehospital priority is:",
    options: ["Airway and ventilatory support", "Flumazenil routinely", "Aspirin", "Nitroglycerin"],
    correctIndex: 0,
    explanation: "Support ventilation; flumazenil is not routine due to seizure risk in mixed overdoses."
  },
  {
    id: 268, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient has diabetic ketoacidosis signs and vomiting. Best transport position is:",
    options: ["Trendelenburg", "Position of comfort with airway protection and monitoring", "Prone without support", "Supine flat regardless of vomiting"],
    correctIndex: 1,
    explanation: "Protect airway, prevent aspiration, and monitor closely."
  },
  {
    id: 269, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient has suspected meningitis with fever, rash, and altered mental status. Best action is to:",
    options: ["Delay care to get full history", "Use PPE, support ABCs, and transport rapidly", "Induce vomiting", "Give aspirin"],
    correctIndex: 1,
    explanation: "Severe infection requires rapid evaluation; protect crew with appropriate precautions."
  },
  {
    id: 270, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient has severe abdominal pain and a pulsatile mass. Suspect:",
    options: ["Abdominal aortic aneurysm", "Asthma", "Kidney stone only", "Appendicitis"],
    correctIndex: 0,
    explanation: "Pulsatile abdominal mass with pain suggests AAA; rapid transport."
  },
  {
    id: 271, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient with renal failure missed dialysis and has weakness. ECG shows peaked T waves. Best first medication is:",
    options: ["IV calcium (per protocol)", "Adenosine", "Furosemide", "Diltiazem"],
    correctIndex: 0,
    explanation: "Treat life-threatening hyperkalemia effects on the heart first."
  },
  {
    id: 272, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient is vomiting, has pinpoint pupils, and bradycardia after opioid use. If naloxone is given, the goal is:",
    options: ["Restore adequate breathing, not full arousal", "Treat pain completely", "Make the patient fully awake immediately", "Lower blood pressure"],
    correctIndex: 0,
    explanation: "Titrate to adequate ventilation to avoid violent withdrawal and vomiting."
  },
  {
    id: 273, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient with asthma receives albuterol but is still tight with poor air movement. Next step may include:",
    options: ["Add ipratropium and consider epinephrine/advanced airway per protocol", "Stop oxygen", "Give aspirin", "Give furosemide"],
    correctIndex: 0,
    explanation: "Severe bronchospasm may require escalation; follow protocol."
  },
  {
    id: 274, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient has severe vomiting/diarrhea and signs of dehydration. Best fluid choice is often:",
    options: ["Nitroglycerin drip", "Isotonic crystalloid bolus (per protocol)", "Hypertonic saline routinely", "Dextrose only"],
    correctIndex: 1,
    explanation: "Volume depletion responds to isotonic fluids; reassess frequently."
  },
  {
    id: 275, level: "Paramedic", category: "Medical & OBGYN",
    text: "A patient with sickle cell crisis has severe pain and hypoxia. Best management includes:",
    options: ["Adenosine", "Oxygen if hypoxic, analgesia per protocol, and transport", "Tourniquet application", "Diuretics"],
    correctIndex: 1,
    explanation: "Treat hypoxia and pain; definitive care is hospital-based."
  },

  // 6. EMS Operations
  {
    id: 276, level: "Paramedic", category: "EMS Operations",
    text: "In Incident Command System (ICS), the Safety Officer reports directly to the:",
    options: ["Public Information Officer", "Incident Commander", "Planning Section Chief", "Operations Section Chief"],
    correctIndex: 1,
    explanation: "Safety is Command Staff and reports to the IC."
  },
  {
    id: 277, level: "Paramedic", category: "EMS Operations",
    text: "The primary purpose of medical direction is to:",
    options: ["Eliminate documentation", "Provide clinical oversight through protocols and on-line consultation", "Allow treatment outside scope without approval", "Replace local laws"],
    correctIndex: 1,
    explanation: "Medical direction guides care within scope and protocol."
  },
  {
    id: 278, level: "Paramedic", category: "EMS Operations",
    text: "A paramedic makes a medication error. The best immediate action is to:",
    options: ["Assess the patient, treat adverse effects, and notify medical control/supervisor per policy", "Wait until end of shift to mention it", "Hide the error", "Blame the patient"],
    correctIndex: 0,
    explanation: "Patient safety first; report per policy and document objectively."
  },
  {
    id: 279, level: "Paramedic", category: "EMS Operations",
    text: "Quality improvement (QI) in EMS is designed to:",
    options: ["Improve patient care through review and feedback", "Avoid training", "Punish providers only", "Reduce documentation"],
    correctIndex: 0,
    explanation: "QI identifies system issues and supports improvement."
  },
  {
    id: 280, level: "Paramedic", category: "EMS Operations",
    text: "Standing orders are:",
    options: ["Preapproved protocols allowing treatment without contacting a physician each time", "Only verbal orders", "Illegal without a doctor on scene", "Only for BLS providers"],
    correctIndex: 0,
    explanation: "Standing orders are written medical direction."
  },
  {
    id: 281, level: "Paramedic", category: "EMS Operations",
    text: "The best practice for controlled substances accountability is:",
    options: ["Strict count, secure storage, and documented chain of custody", "Leaving narcotics unlocked", "Sharing vials between crews", "Documenting only if asked"],
    correctIndex: 0,
    explanation: "Controlled substances require secure handling and accurate logs."
  },
  {
    id: 282, level: "Paramedic", category: "EMS Operations",
    text: "When giving a patient report to the ED, the most useful format is:",
    options: ["A long story with opinions", "A concise structured handoff (e.g., SBAR/MIST) with key times", "Only demographics", "Only the ECG strip"],
    correctIndex: 1,
    explanation: "Structured handoffs reduce omissions and errors."
  },
  {
    id: 283, level: "Paramedic", category: "EMS Operations",
    text: "In an MCI, the Treatment Unit Leader is typically within the:",
    options: ["Planning Section only", "Command Staff", "Operations Section", "Finance Section"],
    correctIndex: 2,
    explanation: "Triage/treatment/transport are Operations functions."
  },
  {
    id: 284, level: "Paramedic", category: "EMS Operations",
    text: "JumpSTART triage is designed for:",
    options: ["HazMat identification", "Stroke assessment", "Pediatric mass-casualty triage", "Burn assessment"],
    correctIndex: 2,
    explanation: "JumpSTART adapts triage to pediatric physiology."
  },
  {
    id: 285, level: "Paramedic", category: "EMS Operations",
    text: "In START triage, a patient who is not breathing after airway opening is tagged:",
    options: ["Minor (green)", "Immediate (red)", "Deceased/expectant (black) per START", "Delayed (yellow)"],
    correctIndex: 2,
    explanation: "If not breathing after airway repositioning, START tags as deceased."
  },
  {
    id: 286, level: "Paramedic", category: "EMS Operations",
    text: "A key element of crew resource management (CRM) is:",
    options: ["Closed-loop communication and task delegation", "Silence to avoid conflict", "One-person decision making always", "Ignoring checklists"],
    correctIndex: 0,
    explanation: "CRM reduces errors through communication and teamwork."
  },
  {
    id: 287, level: "Paramedic", category: "EMS Operations",
    text: "If you suspect your partner is impaired on duty, you should:",
    options: ["Ignore it", "Follow agency policy and remove them from patient care", "Let them 'sleep it off' during calls", "Post about it online"],
    correctIndex: 1,
    explanation: "Impairment risks patient safety; follow reporting procedures."
  },
  {
    id: 288, level: "Paramedic", category: "EMS Operations",
    text: "The most defensible documentation is:",
    options: ["Accurate, objective, timely, and complete", "Short and vague", "Based on memory days later", "Filled with opinions"],
    correctIndex: 0,
    explanation: "Objective facts and times improve legal defensibility."
  },
  {
    id: 289, level: "Paramedic", category: "EMS Operations",
    text: "A patient is incompetent and needs lifesaving care. Consent is:",
    options: ["Required in writing", "Implied by emergency doctrine", "Never allowed", "Only allowed if family is present"],
    correctIndex: 1,
    explanation: "Emergent care is allowed when patient can't consent."
  },
  {
    id: 290, level: "Paramedic", category: "EMS Operations",
    text: "A paramedic should practice within:",
    options: ["Any procedure seen online", "Only what the patient requests", "Scope of practice and local protocols", "Only what is easiest"],
    correctIndex: 2,
    explanation: "Scope and protocols define legal practice boundaries."
  },
  {
    id: 291, level: "Paramedic", category: "EMS Operations",
    text: "Medical oversight provided retrospectively through chart review is called:",
    options: ["ICS", "Off-line medical direction", "On-line medical direction", "Abandonment"],
    correctIndex: 1,
    explanation: "Off-line includes protocols, training, QA/QI, and case review."
  },
  {
    id: 292, level: "Paramedic", category: "EMS Operations",
    text: "If a patient refuses care, the most important assessment is:",
    options: ["Decision-making capacity", "Body temperature only", "Insurance status", "Pain score"],
    correctIndex: 0,
    explanation: "Capacity determines validity of refusal and informs next steps."
  },
  {
    id: 293, level: "Paramedic", category: "EMS Operations",
    text: "A patient is combative and poses danger. The safest approach is to:",
    options: ["Use de-escalation and request law enforcement assistance; restrain per protocol if needed", "Ignore crew safety", "Fight the patient alone", "Immediately sedate without assessment"],
    correctIndex: 0,
    explanation: "Safety first; use de-escalation, assistance, and protocol-based restraint."
  },
  {
    id: 294, level: "Paramedic", category: "EMS Operations",
    text: "When documenting use of restraints, you must include:",
    options: ["Reason, type, monitoring, and patient response", "Only that you used them", "Nothing if it was quick", "No vitals required"],
    correctIndex: 0,
    explanation: "Restraint documentation must show medical necessity and monitoring."
  },
  {
    id: 295, level: "Paramedic", category: "EMS Operations",
    text: "Termination of resuscitation decisions should be:",
    options: ["Based on provider fatigue", "Based on local protocol and medical control when required", "Based on family preference only", "Never allowed prehospital"],
    correctIndex: 1,
    explanation: "Follow TOR protocols and consult medical control as required."
  },
  {
    id: 296, level: "Paramedic", category: "EMS Operations",
    text: "When transporting a STEMI patient, your best system action is to:",
    options: ["Transmit/notify early to activate cath lab", "Wait until arrival to tell the ED", "Stop for nonessential procedures", "Delay transport for more vitals"],
    correctIndex: 0,
    explanation: "Early activation reduces time to reperfusion."
  },
  {
    id: 297, level: "Paramedic", category: "EMS Operations",
    text: "A medication order is unclear. The safest action is to:",
    options: ["Ask the patient to decide", "Clarify with medical control before administration", "Guess based on experience", "Skip documentation"],
    correctIndex: 1,
    explanation: "Never administer unclear orders; clarify first."
  },
  {
    id: 298, level: "Paramedic", category: "EMS Operations",
    text: "The best way to reduce ambulance crash risk is to:",
    options: ["Drive with due regard, slow at intersections, and use seat belts", "Turn off lights at night", "Use sirens at maximum always", "Drive faster to reduce time"],
    correctIndex: 0,
    explanation: "Most serious crashes occur at intersections; due regard saves lives."
  },
  {
    id: 299, level: "Paramedic", category: "EMS Operations",
    text: "A paramedic witnesses a colleague falsifying a PCR. Best action is to:",
    options: ["Edit their chart for them", "Report through appropriate chain and preserve integrity of records", "Ignore it", "Post about it"],
    correctIndex: 1,
    explanation: "Falsification is serious and must be reported per policy."
  },
  {
    id: 300, level: "Paramedic", category: "EMS Operations",
    text: "The purpose of protocols for high-risk/low-frequency procedures is to:",
    options: ["Standardize care and reduce errors under stress", "Allow improvisation", "Replace training", "Slow down all calls unnecessarily"],
    correctIndex: 0,
    explanation: "Standardization improves safety and outcomes."
  },
    // ===== NEXT 300 QUESTIONS (IDs 301–600) =====

  // ================= EMT CATEGORIES =================

  // 1) Patient Treatment (EMT) — 301–330
  { id: 301, level: "EMT", category: "Patient Treatment", text: "A conscious adult is choking and cannot speak or cough effectively. You should:", options: ["Give sips of water", "Do a blind finger sweep", "Begin chest compressions", "Give back blows", "Perform abdominal thrusts"], correctIndex: 4, explanation: "Severe airway obstruction in a conscious adult is treated with abdominal thrusts until relieved or the patient becomes unresponsive." },
  { id: 302, level: "EMT", category: "Patient Treatment", text: "A 6-year-old has hives, wheezing, and lip swelling after peanut exposure. Best initial EMT treatment is:", options: ["Diphenhydramine only", "Oral glucose", "Nebulized albuterol only", "Assist with prescribed epinephrine auto-injector", "Cold pack to the lips"], correctIndex: 3, explanation: "Anaphylaxis with airway/breathing involvement requires epinephrine (assist with auto-injector per protocol) and rapid transport." },
  { id: 303, level: "EMT", category: "Patient Treatment", text: "A diabetic patient is alert but confused, diaphoretic, and can swallow. Your best immediate intervention is:", options: ["Insulin injection", "Water only", "Oral glucose", "Oxygen via NRB regardless of SpO2", "Ventilate with BVM"], correctIndex: 2, explanation: "If hypoglycemia is suspected and the patient can swallow, give oral glucose per protocol." },
  { id: 304, level: "EMT", category: "Patient Treatment", text: "A patient with suspected opioid overdose is breathing 6/min with shallow respirations. First priority is:", options: ["Naloxone first", "IV fluids", "Pain control", "Ventilate with BVM and high-flow oxygen", "Place in recovery position only"], correctIndex: 3, explanation: "Airway and ventilation come first; provide BVM ventilations, then administer naloxone per protocol." },
  { id: 305, level: "EMT", category: "Patient Treatment", text: "For severe external bleeding from an extremity, the most effective immediate control is:", options: ["Elevation only", "Ice pack", "Tourniquet 6 inches distal to wound", "Pressure points only", "Direct pressure; apply tourniquet if not controlled"], correctIndex: 4, explanation: "Start with direct pressure; if life-threatening bleeding persists, apply a tourniquet 2–3 inches above the wound (not over a joint) per protocol." },
  { id: 306, level: "EMT", category: "Patient Treatment", text: "A patient has a partial-thickness burn covering the forearm. Best field care is:", options: ["Apply butter/ointment", "Break blisters", "Cover with dry sterile dressing after cooling", "Apply ice directly for 20 minutes", "Scrub the burn clean"], correctIndex: 2, explanation: "Cool with clean water briefly, then cover with a dry sterile dressing; do not apply ointments or break blisters." },
  { id: 307, level: "EMT", category: "Patient Treatment", text: "A patient with suspected spinal injury vomits while supine. Best action is:", options: ["Remove c-collar", "Sit the patient upright", "Log roll as a unit to clear the airway", "Give antiemetic", "Ignore vomiting if breathing"], correctIndex: 2, explanation: "Protect the airway: log roll the patient as a unit (spinal motion restriction) to allow drainage/suction." },
  { id: 308, level: "EMT", category: "Patient Treatment", text: "A patient with chest pain has no aspirin allergy and no GI bleeding history. EMT should:", options: ["Withhold aspirin if pain is severe", "Give ibuprofen instead", "Assist with nitro first regardless of BP", "Administer/assist chewable aspirin per protocol", "Delay aspirin until hospital ECG"], correctIndex: 3, explanation: "Early aspirin (typically 160–324 mg chewable) reduces platelet aggregation in suspected ACS when not contraindicated." },
  { id: 309, level: "EMT", category: "Patient Treatment", text: "A patient has a femur fracture with signs of shock. Most appropriate priority is:", options: ["Splint later; transport first without stabilization", "Give oral fluids", "Apply heat pack to the thigh", "Control bleeding, splint/immobilize, treat shock, rapid transport", "Massage the leg to reduce spasm"], correctIndex: 3, explanation: "Manage life threats (bleeding/shock), immobilize to reduce pain/bleeding, keep warm, and transport rapidly." },
  { id: 310, level: "EMT", category: "Patient Treatment", text: "A child has croup with stridor at rest but is awake and maintaining airway. Best oxygen approach is:", options: ["Force NRB tightly", "BVM ventilations immediately", "Cool mist/keep child calm and give blow-by oxygen", "Place supine", "Give oral glucose"], correctIndex: 2, explanation: "Croup improves with calm, minimal agitation, and gentle blow-by oxygen; avoid distressing the child." },
  { id: 311, level: "EMT", category: "Patient Treatment", text: "A patient with a suspected stroke has SpO2 97% and normal work of breathing. Oxygen should be:", options: ["High-flow NRB always", "Withheld only if cyanotic", "Titrated; no routine oxygen if adequately oxygenated", "Given via nasal cannula at 6 L/min regardless", "Given only after aspirin"], correctIndex: 2, explanation: "Routine high-flow oxygen is not indicated when oxygenation is adequate; maintain normal SpO2 per protocol." },
  { id: 312, level: "EMT", category: "Patient Treatment", text: "A patient is actively seizing. The best EMT action is:", options: ["Restrain limbs", "Put an object in the mouth", "Give oral glucose during seizure", "Protect from injury, maintain airway, suction as needed, time the seizure", "Immediately start CPR"], correctIndex: 3, explanation: "Do not restrain or place objects in the mouth; protect from injury, manage airway, and monitor." },
  { id: 313, level: "EMT", category: "Patient Treatment", text: "A patient with asthma has wheezing and increased work of breathing. They have a prescribed inhaler. EMT should:", options: ["Tell them to stop using it", "Assist with prescribed bronchodilator per protocol", "Give antibiotics", "Give nitroglycerin", "Perform abdominal thrusts"], correctIndex: 1, explanation: "Assisting with a prescribed bronchodilator is appropriate for bronchospasm if not contraindicated and per local protocol." },
  { id: 314, level: "EMT", category: "Patient Treatment", text: "You suspect heat stroke: hot skin and altered mental status. Best immediate actions include:", options: ["Warm blankets and hot packs", "Rapid active cooling and rapid transport", "Give aspirin for fever", "Delay transport until temperature normalizes", "Offer oral fluids only"], correctIndex: 1, explanation: "Heat stroke is life-threatening; begin active cooling (as feasible) and transport rapidly." },
  { id: 315, level: "EMT", category: "Patient Treatment", text: "A patient with hypothermia is found cold and confused. Best handling is:", options: ["Rough handling to stimulate", "Encourage brisk walking", "Gentle handling, remove wet clothing, warm gradually, transport", "Give alcohol to warm up", "Rapid rubbing of extremities"], correctIndex: 2, explanation: "Handle gently (risk of dysrhythmias), prevent further heat loss, warm gradually, and transport." },
  { id: 316, level: "EMT", category: "Patient Treatment", text: "A patient with suspected poisoning has an empty pill bottle and is becoming drowsy. Best EMT action is:", options: ["Induce vomiting", "Give activated charcoal without direction", "Contact poison control/medical direction and support ABCs", "Give water and wait", "Delay transport to search the home"], correctIndex: 2, explanation: "Support airway/breathing/circulation and consult poison control/medical direction; do not induce vomiting." },
  { id: 317, level: "EMT", category: "Patient Treatment", text: "A patient with suspected tension pneumothorax is deteriorating. As an EMT, your priority is:", options: ["Needle decompression", "Hyperventilate aggressively to 30/min", "Rapid transport and supportive ventilation/oxygen per protocol", "Give oral fluids", "Withhold oxygen to prevent suppression"], correctIndex: 2, explanation: "EMTs typically provide supportive care (oxygen/ventilation) and rapid transport; advanced decompression is provider-dependent." },
  { id: 318, level: "EMT", category: "Patient Treatment", text: "A patient has a nosebleed without trauma and normal vitals. Best care is:", options: ["Tilt head back", "Pack tightly into throat", "Pinch nostrils and lean forward", "Lay supine", "Give aspirin"], correctIndex: 2, explanation: "Lean forward and pinch the nostrils to reduce bleeding and prevent aspiration." },
  { id: 319, level: "EMT", category: "Patient Treatment", text: "A patient has an amputated finger. Best care for the amputated part is:", options: ["Place directly on ice", "Rinse and throw away", "Wrap in moist sterile gauze, place in bag, keep bag cool", "Scrub with antiseptic and leave uncovered", "Reattach with tape"], correctIndex: 2, explanation: "Protect the part (moist sterile wrap), seal in a bag, and cool indirectly; do not freeze." },
  { id: 320, level: "EMT", category: "Patient Treatment", text: "A patient with suspected CHF has severe dyspnea and crackles. Most appropriate initial oxygen delivery is:", options: ["Room air only", "Nasal cannula regardless of distress", "NRB or CPAP if available/indicated per protocol", "Paper bag breathing", "Oral glucose"], correctIndex: 2, explanation: "Provide high-concentration oxygen; CPAP (if trained/allowed) helps in pulmonary edema when the patient is conscious and cooperative." },
  { id: 321, level: "EMT", category: "Patient Treatment", text: "When applying a tourniquet for uncontrolled extremity bleeding, you should:", options: ["Loosen it every 10 minutes", "Place it over the wound", "Place it 2–3 inches above wound and tighten until bleeding stops", "Apply below the joint", "Use it only after 30 minutes of pressure"], correctIndex: 2, explanation: "Apply proximal to the wound (not over a joint) and tighten until bleeding stops; do not periodically loosen." },
  { id: 322, level: "EMT", category: "Patient Treatment", text: "A patient has a chemical splash to the eye. Best immediate care is:", options: ["Cover both eyes and transport", "Neutralize with vinegar", "Irrigate continuously with water/saline while transporting", "Apply ointment", "Patch only the affected eye"], correctIndex: 2, explanation: "Immediate continuous irrigation is the priority for chemical eye exposure." },
  { id: 323, level: "EMT", category: "Patient Treatment", text: "A patient with chest pain took sildenafil (Viagra) earlier today. They request nitroglycerin. You should:", options: ["Assist with nitro if pain is severe", "Give double-dose nitro", "Withhold nitro and contact medical direction", "Have them walk it off", "Give oral glucose"], correctIndex: 2, explanation: "PDE-5 inhibitors plus nitroglycerin can cause profound hypotension; nitro is contraindicated within the recommended timeframe." },
  { id: 324, level: "EMT", category: "Patient Treatment", text: "A patient with a dislocated shoulder has intact distal pulse and sensation. Best EMT action is:", options: ["Attempt reduction immediately", "Force the arm into place", "Immobilize in position found and transport", "Apply traction splint", "Massage and rotate the joint"], correctIndex: 2, explanation: "EMTs generally immobilize and transport; reduction is not typically performed in the field at EMT level." },
  { id: 325, level: "EMT", category: "Patient Treatment", text: "A patient is in shock with cool clammy skin and tachycardia after trauma. Best positioning is:", options: ["Sitting upright", "Prone", "Supine (if tolerated) and keep warm", "Trendelenburg always", "Walk the patient to ambulance"], correctIndex: 2, explanation: "Treat shock with supine positioning (as tolerated), temperature control, oxygen as needed, and rapid transport." },
  { id: 326, level: "EMT", category: "Patient Treatment", text: "A child is coughing strongly after choking on food. You should:", options: ["Begin abdominal thrusts immediately", "Give back blows", "Encourage continued coughing and monitor", "Do a blind finger sweep", "Start CPR"], correctIndex: 2, explanation: "If the patient can cough effectively, do not interfere; monitor and be ready if it becomes ineffective." },
  { id: 327, level: "EMT", category: "Patient Treatment", text: "A patient with suspected MI is pale and nauseated. Which intervention is most appropriate if no contraindications?", options: ["Chewable aspirin", "Oral glucose", "Ibuprofen", "Albuterol", "Activated charcoal"], correctIndex: 0, explanation: "Aspirin is a key early intervention for suspected ACS when not contraindicated." },
  { id: 328, level: "EMT", category: "Patient Treatment", text: "A patient with suspected stroke has sudden facial droop and arm drift. The most important prehospital action is:", options: ["Give aspirin immediately", "Delay transport to reassess hourly", "Rapid transport to a stroke-capable center with pre-notification", "Give nitroglycerin", "Administer oral glucose regardless"], correctIndex: 2, explanation: "Stroke care is time-dependent; rapid transport and pre-notification improve access to definitive therapy." },
  { id: 329, level: "EMT", category: "Patient Treatment", text: "A patient is apneic with a pulse. Best ventilation rate for an adult with BVM is approximately:", options: ["20–30/min", "1 breath every 1 second", "1 breath every 6 seconds", "1 breath every 2 seconds", "No ventilations if pulse present"], correctIndex: 2, explanation: "For adult respiratory arrest with a pulse, ventilate about 1 breath every 6 seconds (10/min), avoiding hyperventilation." },
  { id: 330, level: "EMT", category: "Patient Treatment", text: "A patient has suspected overdose and is unresponsive but breathing adequately. Naloxone use should be:", options: ["Avoided always", "Given only after intubation", "Considered per protocol while monitoring airway", "Given by mouth", "Given as a continuous IV infusion by EMT"], correctIndex: 2, explanation: "If permitted, naloxone may be used, but airway monitoring and support remain the priority." },

  // 2) Primary Assessment (EMT) — 331–360
  { id: 331, level: "EMT", category: "Primary Assessment", text: "In the primary assessment, the first step after ensuring scene safety is to:", options: ["Obtain SAMPLE history", "Check pupils", "Form a general impression and assess responsiveness", "Auscultate lung sounds", "Take a full set of vitals"], correctIndex: 2, explanation: "Primary assessment begins with general impression/level of responsiveness to identify immediate life threats." },
  { id: 332, level: "EMT", category: "Primary Assessment", text: "A patient has noisy gurgling respirations. Your next action is:", options: ["Give oral glucose", "Insert NPA immediately", "Suction the airway", "Check blood pressure", "Apply a splint"], correctIndex: 2, explanation: "Gurgling suggests fluid in the airway; suction to clear the airway before adjuncts/ventilation." },
  { id: 333, level: "EMT", category: "Primary Assessment", text: "A patient is unresponsive with no normal breathing. You check the carotid pulse for no more than:", options: ["2 seconds", "30 seconds", "5 seconds", "10 seconds", "20 seconds"], correctIndex: 3, explanation: "Assess pulse (and breathing) quickly; if no pulse within 10 seconds, begin CPR." },
  { id: 334, level: "EMT", category: "Primary Assessment", text: "A patient is responsive to painful stimuli only. This indicates which AVPU level?", options: ["Alert", "Verbal", "Pain", "Unresponsive", "Oriented"], correctIndex: 2, explanation: "AVPU: Alert, responds to Verbal, responds to Pain, Unresponsive." },
  { id: 335, level: "EMT", category: "Primary Assessment", text: "The best sign that ventilations are effective is:", options: ["Pink nail beds", "High pulse rate", "Chest rise and fall with each ventilation", "Loud breath sounds over the stomach", "Coughing during ventilations"], correctIndex: 2, explanation: "Visible chest rise indicates air is entering the lungs; avoid gastric insufflation." },
  { id: 336, level: "EMT", category: "Primary Assessment", text: "In an adult with suspected airway obstruction, which finding suggests complete obstruction?", options: ["Strong cough", "Able to speak", "High-pitched wheeze", "Silent inability to speak/cough", "Normal skin color"], correctIndex: 3, explanation: "Inability to speak/cough with no air movement indicates severe/complete obstruction." },
  { id: 337, level: "EMT", category: "Primary Assessment", text: "A patient has snoring respirations. The most appropriate initial action is:", options: ["Place NPA first", "Suction immediately", "Open airway with head-tilt chin-lift or jaw-thrust if trauma", "Administer aspirin", "Apply CPAP"], correctIndex: 2, explanation: "Snoring suggests tongue obstruction; open the airway (jaw-thrust if trauma suspected)." },
  { id: 338, level: "EMT", category: "Primary Assessment", text: "A patient with suspected trauma is unresponsive. Best airway opening maneuver is:", options: ["Head-tilt chin-lift", "Modified jaw thrust", "Abdominal thrusts", "Tongue pull", "Valsalva maneuver"], correctIndex: 1, explanation: "Use a jaw-thrust (with spinal precautions) in suspected trauma to reduce cervical movement." },
  { id: 339, level: "EMT", category: "Primary Assessment", text: "Which patient should be categorized as high priority for rapid transport?", options: ["Minor ankle sprain", "Isolated small laceration", "Stable patient with mild headache", "Altered mental status with hypotension", "Chronic back pain for 3 months"], correctIndex: 3, explanation: "Altered mental status and hypotension suggest shock/critical illness requiring rapid transport." },
  { id: 340, level: "EMT", category: "Primary Assessment", text: "You find severe bleeding from the thigh. In the primary assessment, bleeding control should occur:", options: ["After full head-to-toe", "After SAMPLE", "After lung sounds", "Immediately (before detailed assessment)", "Only after ALS arrives"], correctIndex: 3, explanation: "Life-threatening external hemorrhage is controlled immediately during primary assessment." },
  { id: 341, level: "EMT", category: "Primary Assessment", text: "For an adult with respiratory distress and adequate breathing, the best initial oxygen device is typically:", options: ["No oxygen ever", "NRB (or titrated oxygen) based on SpO2 and distress", "BVM regardless of breathing", "Tracheostomy tube", "Oral airway"], correctIndex: 1, explanation: "Choose oxygen delivery based on work of breathing and oxygenation; use NRB for significant distress/hypoxia, titrate per protocol." },
  { id: 342, level: "EMT", category: "Primary Assessment", text: "A patient has absent radial pulses and cool pale skin. This most strongly suggests:", options: ["Normal perfusion", "Hypertension", "Poor perfusion/shock", "Hyperglycemia", "Stable condition"], correctIndex: 2, explanation: "Weak/absent peripheral pulses with pale cool skin indicates poor perfusion (possible shock)." },
  { id: 343, level: "EMT", category: "Primary Assessment", text: "In the primary assessment, you determine breathing is inadequate. Your next action is:", options: ["Take temperature", "Assist ventilations with BVM", "Perform detailed neuro exam", "Get full medical history first", "Start splinting"], correctIndex: 1, explanation: "Inadequate breathing is an immediate life threat; provide ventilatory support with BVM." },
  { id: 344, level: "EMT", category: "Primary Assessment", text: "A patient is responsive but confused and cannot answer questions appropriately. This is best described as:", options: ["A&O x4", "Oriented to person only", "Altered mental status", "Normal mentation", "Unresponsive"], correctIndex: 2, explanation: "Inability to think clearly/answer appropriately indicates altered mental status." },
  { id: 345, level: "EMT", category: "Primary Assessment", text: "In an unresponsive patient without gag reflex, the best airway adjunct is:", options: ["NPA only", "OPA", "No adjuncts allowed", "Mouth-to-mouth only", "Oral glucose"], correctIndex: 1, explanation: "An OPA is used in unresponsive patients without a gag reflex to help maintain airway patency." },
  { id: 346, level: "EMT", category: "Primary Assessment", text: "A semi-conscious patient with a suspected basilar skull fracture needs an airway adjunct. Best choice is:", options: ["OPA", "NPA avoided; consider positioning/suction and basic airway management per protocol", "Blind finger sweep", "Nasogastric tube", "No airway management"], correctIndex: 1, explanation: "Suspected basilar skull fracture is a contraindication to NPA; manage airway with positioning/suction and BVM as needed." },
  { id: 347, level: "EMT", category: "Primary Assessment", text: "The quickest way to assess circulatory status in an adult is:", options: ["Capillary refill only", "Blood sugar", "Radial pulse and skin signs", "Temperature and pupils", "Lung sounds"], correctIndex: 2, explanation: "Pulse presence/quality and skin color/temperature/moisture rapidly indicate perfusion." },
  { id: 348, level: "EMT", category: "Primary Assessment", text: "Which is the best immediate action for a patient in respiratory failure with cyanosis and minimal chest rise?", options: ["Encourage slow breathing", "Apply nasal cannula", "BVM ventilations with high-flow oxygen", "Give aspirin", "Put in a paper bag"], correctIndex: 2, explanation: "Respiratory failure requires assisted ventilations; a nasal cannula is insufficient." },
  { id: 349, level: "EMT", category: "Primary Assessment", text: "A patient is alert, speaking full sentences, RR 18, SpO2 99%, skin warm/dry. Priority is:", options: ["Immediate CPR", "Rapid transport with lights/sirens", "Routine assessment and transport as needed", "Needle decompression", "Defibrillate"], correctIndex: 2, explanation: "No immediate life threats; proceed with focused assessment and appropriate transport." },
  { id: 350, level: "EMT", category: "Primary Assessment", text: "A child has respiratory distress with suprasternal retractions and nasal flaring. This indicates:", options: ["Normal breathing", "Severe increased work of breathing", "Only anxiety", "Low blood sugar", "Stable airway"], correctIndex: 1, explanation: "Retractions and nasal flaring are signs of significant respiratory effort in children." },
  { id: 351, level: "EMT", category: "Primary Assessment", text: "You suspect shock. Which skin finding supports this most?", options: ["Warm, dry, pink", "Cool, pale, clammy", "Flushed and sweaty after exercise", "Sunburn only", "Localized rash"], correctIndex: 1, explanation: "Cool, pale, clammy skin is a classic sign of poor perfusion/shock." },
  { id: 352, level: "EMT", category: "Primary Assessment", text: "In a trauma patient, the single most important time-saving concept is:", options: ["Prolonged on-scene splinting", "Rapid extrication and transport when indicated", "Waiting for family consent", "Detailed history on scene", "Full head-to-toe before moving"], correctIndex: 1, explanation: "When critical trauma is suspected, minimize scene time and transport rapidly." },
  { id: 353, level: "EMT", category: "Primary Assessment", text: "You see severe facial trauma with bleeding into the mouth and ineffective breathing. Best initial action is:", options: ["Insert OPA first", "Suction and open airway, then ventilate as needed", "Give aspirin", "Administer oral glucose", "Apply CPAP"], correctIndex: 1, explanation: "Clear the airway (suction), open it, then provide ventilations if needed." },
  { id: 354, level: "EMT", category: "Primary Assessment", text: "A patient answers questions but is confused about time and place. They are best described as:", options: ["A&O x4", "A&O x3", "A&O x1–2 (not fully oriented)", "Unresponsive", "Normal mentation"], correctIndex: 2, explanation: "Orientation requires person, place, time, and event; missing elements indicates altered mentation." },
  { id: 355, level: "EMT", category: "Primary Assessment", text: "In an adult, which pulse is most appropriate to check first for perfusion status?", options: ["Pedal", "Brachial", "Radial", "Femoral only", "Carotid only in all patients"], correctIndex: 2, explanation: "Radial pulse presence suggests systolic BP is likely adequate; use carotid in unresponsive patients." },
  { id: 356, level: "EMT", category: "Primary Assessment", text: "A patient has a patent airway, RR 10 with shallow breaths, SpO2 91%. Best action is:", options: ["Nasal cannula at 2 L/min only", "Encourage deep breaths", "Assist ventilations with BVM", "No intervention", "Give water"], correctIndex: 2, explanation: "Shallow/inadequate breathing requires assisted ventilation, not just low-flow oxygen." },
  { id: 357, level: "EMT", category: "Primary Assessment", text: "Which finding indicates the need for immediate airway intervention?", options: ["Speaking clearly", "Mild wheeze with normal speech", "Inability to maintain airway with gurgling/secretions", "Normal SpO2", "Pain 10/10"], correctIndex: 2, explanation: "Airway compromise (gurgling/secretions, inability to protect airway) requires immediate management." },
  { id: 358, level: "EMT", category: "Primary Assessment", text: "A patient is found unresponsive, breathing normally, pulse present. After opening/maintaining the airway, you should:", options: ["Start chest compressions", "Place in recovery position if no trauma and monitor", "Give aspirin", "Perform abdominal thrusts", "Stop assessment until ALS arrives"], correctIndex: 1, explanation: "With normal breathing and a pulse, protect airway and monitor; recovery position helps prevent aspiration if no trauma." },
  { id: 359, level: "EMT", category: "Primary Assessment", text: "The most concerning sign in a patient with allergic reaction is:", options: ["Itchy eyes", "Hives only", "Swelling of lips/tongue with wheezing", "Mild nausea", "Localized redness"], correctIndex: 2, explanation: "Airway swelling and wheezing indicate anaphylaxis—an immediate life threat." },
  { id: 360, level: "EMT", category: "Primary Assessment", text: "During primary assessment, after airway and breathing, you should assess circulation by:", options: ["Taking a full neuro exam", "Looking for major bleeding and checking pulse/skin", "Obtaining full medication list", "Palpating the abdomen", "Asking OPQRST first"], correctIndex: 1, explanation: "Circulation assessment focuses on hemorrhage control and perfusion (pulse/skin) early." },

  // 3) Secondary Assessment (EMT) — 361–390
  { id: 361, level: "EMT", category: "Secondary Assessment", text: "OPQRST is most useful for evaluating:", options: ["All vital signs", "Mental status only", "Pain or symptom complaints", "Blood glucose", "Scene hazards"], correctIndex: 2, explanation: "OPQRST structures symptom assessment: Onset, Provocation/Palliation, Quality, Radiation, Severity, Time." },
  { id: 362, level: "EMT", category: "Secondary Assessment", text: "SAMPLE history includes all EXCEPT:", options: ["Signs/Symptoms", "Allergies", "Medications", "Past medical history", "Pulse oximetry"], correctIndex: 4, explanation: "Pulse oximetry is a vital sign, not part of SAMPLE history." },
  { id: 363, level: "EMT", category: "Secondary Assessment", text: "DCAP-BTLS is used to assess:", options: ["Medication allergies", "Mechanism of injury only", "Skin temperature", "Trauma findings on physical exam", "Pulse strength"], correctIndex: 3, explanation: "DCAP-BTLS helps identify injuries: Deformities, Contusions, Abrasions, Punctures, Burns, Tenderness, Lacerations, Swelling." },
  { id: 364, level: "EMT", category: "Secondary Assessment", text: "In a medical patient with no trauma, a focused exam should be based on:", options: ["Head-to-toe only", "Chief complaint", "Random body system", "What partner prefers", "Mechanism of injury"], correctIndex: 1, explanation: "A focused assessment targets systems related to the chief complaint." },
  { id: 365, level: "EMT", category: "Secondary Assessment", text: "The best place to auscultate breath sounds is:", options: ["Over the stomach", "Over clothing only", "At the trachea only", "At multiple lung fields bilaterally", "Only at the bases"], correctIndex: 3, explanation: "Compare bilateral lung fields in multiple locations for equality and abnormal sounds." },
  { id: 366, level: "EMT", category: "Secondary Assessment", text: "A ‘sample’ medication list should include:", options: ["Only current prescriptions", "Only OTC medications", "Dose and last time taken when possible", "Only vitamins", "Only medications taken today"], correctIndex: 2, explanation: "Knowing dose and last taken time can change treatment decisions and identifies contraindications." },
  { id: 367, level: "EMT", category: "Secondary Assessment", text: "Capillary refill time is LEAST reliable in:", options: ["Adults in warm environments", "Infants and children", "Patients with cold exposure", "Patients at rest", "Patients who are hydrated"], correctIndex: 2, explanation: "Cold causes peripheral vasoconstriction and can falsely prolong cap refill." },
  { id: 368, level: "EMT", category: "Secondary Assessment", text: "A patient’s GCS is 12. This indicates:", options: ["Normal mentation", "Mild to moderate impaired consciousness", "Brain death", "Only intoxication", "No need for reassessment"], correctIndex: 1, explanation: "GCS below 15 indicates impaired consciousness; 12 suggests moderate impairment requiring close monitoring." },
  { id: 369, level: "EMT", category: "Secondary Assessment", text: "In trauma, the order of a rapid head-to-toe exam should prioritize:", options: ["Feet to head", "Area of greatest bleeding and life threats", "Hair and nails", "Only the painful area", "Skipping the back"], correctIndex: 1, explanation: "Quickly find and treat life threats and major bleeding; then proceed systematically (including the back when feasible)." },
  { id: 370, level: "EMT", category: "Secondary Assessment", text: "For a patient with shortness of breath, the most useful additional focused assessment is:", options: ["Abdominal palpation only", "Lung sounds and work of breathing evaluation", "Full musculoskeletal exam", "Skin assessment only", "Eye exam only"], correctIndex: 1, explanation: "Respiratory complaints require lung auscultation and evaluation of effort, rate, and accessory muscle use." },
  { id: 371, level: "EMT", category: "Secondary Assessment", text: "A patient describes chest pain as “pressure” radiating to the left arm. This pattern is most consistent with:", options: ["Appendicitis", "Pulmonary embolism always", "Cardiac ischemia", "Kidney stone", "Heat exhaustion"], correctIndex: 2, explanation: "Pressure-like chest pain radiating to the arm is classic for cardiac ischemia/ACS." },
  { id: 372, level: "EMT", category: "Secondary Assessment", text: "When assessing pupils, you should note:", options: ["Only color", "Only size", "PERRL (size, equality, and reactivity)", "Only dilation", "Only redness"], correctIndex: 2, explanation: "Pupil assessment includes size, equality, and reaction to light." },
  { id: 373, level: "EMT", category: "Secondary Assessment", text: "In a suspected stroke, the most useful field screening includes:", options: ["Blood pressure only", "FAST/BE-FAST findings", "Urine ketones", "Peak flow", "Tourniquet test"], correctIndex: 1, explanation: "Stroke screens (FAST/BE-FAST) rapidly identify facial droop, arm drift, speech deficits, and time/vision/balance issues." },
  { id: 374, level: "EMT", category: "Secondary Assessment", text: "A patient has a history of seizures. After a seizure, they are sleepy but breathing adequately. This is most consistent with:", options: ["Malingering", "Postictal state", "Heat stroke", "Psychosis", "Anaphylaxis"], correctIndex: 1, explanation: "Postictal state is common after seizures: confusion, fatigue, and gradual return of normal mentation." },
  { id: 375, level: "EMT", category: "Secondary Assessment", text: "A patient reports “worst headache of my life” with sudden onset. This is concerning for:", options: ["Migraine only", "Subarachnoid hemorrhage", "Food poisoning", "Asthma", "Urticaria"], correctIndex: 1, explanation: "Sudden severe “thunderclap” headache is a red flag for subarachnoid hemorrhage." },
  { id: 376, level: "EMT", category: "Secondary Assessment", text: "When palpating the abdomen, the best technique is:", options: ["Deep palpation first", "Start painful area first", "Palpate gently, start away from pain", "No palpation in any patient", "Strike quickly to elicit guarding"], correctIndex: 2, explanation: "Begin gently away from the painful area to avoid increasing pain and guarding." },
  { id: 377, level: "EMT", category: "Secondary Assessment", text: "The MOST important time-related question for stroke assessment is:", options: ["Last meal", "Last normal (symptom onset/last known well)", "Last bowel movement", "Last exercise", "Last aspirin dose"], correctIndex: 1, explanation: "Eligibility for stroke interventions depends on the last known well time." },
  { id: 378, level: "EMT", category: "Secondary Assessment", text: "A patient has suspected GI bleed. Which finding supports this?", options: ["Clear urine", "Black, tarry stools", "Dry skin", "Dilated pupils", "Hives"], correctIndex: 1, explanation: "Melena (black, tarry stool) suggests upper GI bleeding." },
  { id: 379, level: "EMT", category: "Secondary Assessment", text: "When documenting vitals, the best practice is to:", options: ["Estimate BP if busy", "Record one set only", "Trend and reassess at appropriate intervals", "Avoid documenting mental status", "Only document abnormal values"], correctIndex: 2, explanation: "Trending vitals over time helps identify deterioration and response to treatment." },
  { id: 380, level: "EMT", category: "Secondary Assessment", text: "A trauma patient has JVD and absent breath sounds on one side with severe distress. This suggests:", options: ["Simple pneumothorax", "Tension pneumothorax", "Asthma attack", "CHF only", "Pneumonia"], correctIndex: 1, explanation: "JVD + unilateral absent sounds + distress strongly indicates tension pneumothorax (life threat)." },
  { id: 381, level: "EMT", category: "Secondary Assessment", text: "A patient has rapid breathing and a fruity odor on breath. This is most consistent with:", options: ["Opioid overdose", "Diabetic ketoacidosis", "CHF", "Stroke", "Anaphylaxis"], correctIndex: 1, explanation: "Fruity breath and Kussmaul respirations suggest DKA." },
  { id: 382, level: "EMT", category: "Secondary Assessment", text: "The best way to assess skin signs is to check:", options: ["Only the hands", "Only the face", "Exposed areas for color, temperature, moisture", "Only under clothing", "Only the feet"], correctIndex: 2, explanation: "Assess exposed skin for overall perfusion: color, temp, and moisture." },
  { id: 383, level: "EMT", category: "Secondary Assessment", text: "A patient with asthma is using accessory muscles and speaking in 1–2 word sentences. This indicates:", options: ["Mild attack", "Severe distress", "No respiratory issue", "Only anxiety", "Normal work of breathing"], correctIndex: 1, explanation: "One- to two-word speech and accessory muscle use indicate severe respiratory distress." },
  { id: 384, level: "EMT", category: "Secondary Assessment", text: "A patient has pinpoint pupils and depressed mental status. This combination suggests:", options: ["Cocaine toxicity", "Opioid intoxication", "Hyperglycemia", "Sepsis", "CHF"], correctIndex: 1, explanation: "Pinpoint pupils with CNS depression is classic for opioid intoxication (though not exclusive)." },
  { id: 385, level: "EMT", category: "Secondary Assessment", text: "In trauma, crepitus felt under the skin of the chest/neck is called:", options: ["Flail chest", "Subcutaneous emphysema", "Tracheal deviation", "Rales", "Stridor"], correctIndex: 1, explanation: "Subcutaneous emphysema feels like crackling and indicates air in soft tissues." },
  { id: 386, level: "EMT", category: "Secondary Assessment", text: "A patient has inspiratory stridor. This most likely indicates:", options: ["Lower airway wheeze", "Upper airway obstruction", "Normal breathing", "GI bleed", "Hypoglycemia"], correctIndex: 1, explanation: "Stridor is a high-pitched sound from upper airway narrowing/obstruction." },
  { id: 387, level: "EMT", category: "Secondary Assessment", text: "The most reliable sign of adequate breathing is:", options: ["RR alone", "SpO2 alone", "Adequate tidal volume with normal effort and mentation", "Coughing", "Skin temperature"], correctIndex: 2, explanation: "Adequate breathing requires sufficient rate AND depth with normal work of breathing and oxygenation." },
  { id: 388, level: "EMT", category: "Secondary Assessment", text: "When assessing a child, the most sensitive early indicator of shock is often:", options: ["Hypotension", "Bradycardia", "Tachycardia", "Cyanosis", "Fixed pupils"], correctIndex: 2, explanation: "Children compensate until late; tachycardia can be an early sign of shock." },
  { id: 389, level: "EMT", category: "Secondary Assessment", text: "A patient has sudden unilateral weakness and slurred speech. The most important additional test is:", options: ["Peak flow", "Blood glucose check", "Urinalysis", "Pregnancy test", "Stool guaiac"], correctIndex: 1, explanation: "Hypoglycemia can mimic stroke; checking glucose is a key prehospital step." },
  { id: 390, level: "EMT", category: "Secondary Assessment", text: "For a patient with abdominal pain, the most helpful OPQRST element for emergent causes is:", options: ["Favorite foods", "Severity (0–10) and onset", "Hair color", "Exercise routine", "Sleep schedule"], correctIndex: 1, explanation: "Sudden onset and severe pain can indicate time-sensitive abdominal emergencies." },

  // 4) Scene Size-Up (EMT) — 391–420
  { id: 391, level: "EMT", category: "Scene Size-Up", text: "At any scene, your FIRST priority is:", options: ["Start patient assessment immediately", "Determine patient’s insurance", "Scene safety and PPE", "Obtain family history", "Call the hospital"], correctIndex: 2, explanation: "Scene safety (including PPE) comes first to prevent rescuer injury." },
  { id: 392, level: "EMT", category: "Scene Size-Up", text: "At a motor vehicle collision, the best indicator of injury potential is:", options: ["Patient age only", "Mechanism of injury", "Time of day", "Color of the car", "Weather forecast"], correctIndex: 1, explanation: "MOI helps predict hidden injuries and guides transport/assessment urgency." },
  { id: 393, level: "EMT", category: "Scene Size-Up", text: "You arrive at a scene with multiple patients. Your first action should include:", options: ["Treat the loudest patient first", "Call for additional resources early", "Load one patient and leave", "Ask for signatures", "Ignore bystanders"], correctIndex: 1, explanation: "Early resource requests improve outcomes in MCI and prevent delays." },
  { id: 394, level: "EMT", category: "Scene Size-Up", text: "A diamond-shaped placard with the number 2 indicates:", options: ["Flammable liquid", "Non-flammable gas", "Corrosive", "Explosive", "Radioactive"], correctIndex: 1, explanation: "HazMat placard class 2 indicates gases; treat as hazardous and stage appropriately." },
  { id: 395, level: "EMT", category: "Scene Size-Up", text: "For HazMat incidents, the best approach is to:", options: ["Approach from downwind to avoid smoke", "Approach from upwind, uphill, and upstream", "Enter quickly to rescue", "Park next to the scene for access", "Ignore placards if no smell"], correctIndex: 1, explanation: "Stage upwind/uphill/upstream to reduce exposure until HazMat declares it safe." },
  { id: 396, level: "EMT", category: "Scene Size-Up", text: "When is spinal motion restriction MOST indicated based on scene size-up?", options: ["Any minor fall", "Low-speed rear-end crash only", "High-energy mechanism with altered mental status", "Stable medical complaint", "Chronic back pain"], correctIndex: 2, explanation: "High-energy mechanism plus concerning findings (like AMS) increases risk of spine injury." },
  { id: 397, level: "EMT", category: "Scene Size-Up", text: "The purpose of scene size-up includes all EXCEPT:", options: ["Identify hazards", "Determine number of patients", "Determine need for additional resources", "Form a general impression", "Provide definitive diagnosis"], correctIndex: 4, explanation: "Scene size-up identifies risks and resources; it does not provide definitive diagnosis." },
  { id: 398, level: "EMT", category: "Scene Size-Up", text: "In an unsafe scene with active violence, you should:", options: ["Enter quickly to provide care", "Stage at a safe distance and wait for law enforcement", "Attempt to disarm the person", "Argue with the assailant", "Park closer to be faster"], correctIndex: 1, explanation: "Do not enter unsafe scenes; stage and wait for law enforcement to secure the area." },
  { id: 399, level: "EMT", category: "Scene Size-Up", text: "A scene has a strong smell of natural gas. Your best action is:", options: ["Turn on lights to see better", "Proceed inside to locate patient", "Stage away and request fire department/utility response", "Light a match to confirm", "Ventilate the room with fans"], correctIndex: 2, explanation: "Potential explosion hazard—stage away, request fire/utility, and do not create ignition sources." },
  { id: 400, level: "EMT", category: "Scene Size-Up", text: "If you suspect a carbon monoxide exposure, you should:", options: ["Open windows and stay inside to treat", "Move patient to fresh air and request additional resources", "Give oral glucose first", "Use naloxone", "Ignore if patient is awake"], correctIndex: 1, explanation: "Remove from exposure to fresh air, provide oxygen, and involve fire department for scene safety." },
  { id: 401, level: "EMT", category: "Scene Size-Up", text: "When calling for ALS on scene size-up, the strongest indication is:", options: ["Minor abrasion", "Stable ankle fracture", "Chest pain with diaphoresis and hypotension", "Mild nausea", "Chronic headache"], correctIndex: 2, explanation: "Potentially unstable cardiac patients benefit from ALS interventions and rapid transport." },
  { id: 402, level: "EMT", category: "Scene Size-Up", text: "A patient is found lying next to a ladder. This is an example of:", options: ["Nature of illness", "Mechanism of injury", "Past medical history", "Secondary assessment", "Transport decision"], correctIndex: 1, explanation: "A ladder suggests a fall mechanism and guides injury suspicion." },
  { id: 403, level: "EMT", category: "Scene Size-Up", text: "The BEST place to park the ambulance at a highway MVC is:", options: ["In the left lane near traffic", "Downstream to protect the scene with lights and barrier positioning", "In front of the crashed vehicles", "On a blind curve", "Anywhere that blocks responders"], correctIndex: 1, explanation: "Position the ambulance to protect the scene and responders (blocking), per local policy." },
  { id: 404, level: "EMT", category: "Scene Size-Up", text: "For a patient trapped in a vehicle, scene size-up should include early request for:", options: ["Poison control", "Towing company only", "Extrication/fire resources", "Animal control", "A chaplain only"], correctIndex: 2, explanation: "Extrication requires specialized tools/personnel; request early to reduce delays." },
  { id: 405, level: "EMT", category: "Scene Size-Up", text: "A patient has burns after a house fire. Most important scene concern is:", options: ["Sun exposure", "Potential inhalation injury and toxic smoke", "Food allergy", "Hypoglycemia", "Sprain risk"], correctIndex: 1, explanation: "Fire victims may have inhalation injury/CO exposure even with minor skin burns." },
  { id: 406, level: "EMT", category: "Scene Size-Up", text: "In an MCI, triage should:", options: ["Be delayed until everyone is assessed fully", "Be quick and prioritize greatest survivability with limited resources", "Treat minor injuries first", "Focus on paperwork", "Ignore walking wounded"], correctIndex: 1, explanation: "Triage rapidly sorts patients to allocate limited resources and maximize survival." },
  { id: 407, level: "EMT", category: "Scene Size-Up", text: "The MOST appropriate initial action at a suspected crime scene is:", options: ["Touch/collect evidence", "Move items to reach patient", "Provide care while preserving evidence and limit disturbance", "Question suspects aggressively", "Take photos for social media"], correctIndex: 2, explanation: "Provide patient care but preserve evidence and minimize scene disruption when possible." },
  { id: 408, level: "EMT", category: "Scene Size-Up", text: "You arrive to a patient who collapsed in a restaurant. Bystanders report “he just choked.” Your first step is:", options: ["Ask for a full SAMPLE history", "Check responsiveness and breathing immediately", "Give water", "Perform abdominal thrusts without assessment", "Wait for ALS"], correctIndex: 1, explanation: "Start with responsiveness and breathing/pulse assessment to determine immediate interventions." },
  { id: 409, level: "EMT", category: "Scene Size-Up", text: "The term “nature of illness” refers to:", options: ["How fast you should drive", "The medical problem suspected from initial info", "Only trauma mechanism", "Patient’s insurance", "Hospital destination"], correctIndex: 1, explanation: "NOI is the suspected medical problem based on dispatch and initial scene observations." },
  { id: 410, level: "EMT", category: "Scene Size-Up", text: "If you suspect downed power lines at a crash, you should:", options: ["Approach and move them with gloves", "Stay away and request the utility company/fire department", "Park under the lines", "Use water to cool them", "Touch the vehicle to check"], correctIndex: 1, explanation: "Downed lines are lethal; maintain distance and request appropriate agencies." },
  { id: 411, level: "EMT", category: "Scene Size-Up", text: "For suspected hazardous materials, the ‘hot zone’ is:", options: ["The safe staging area", "Where contamination is present", "The rehab area", "The command post", "The ambulance bay"], correctIndex: 1, explanation: "The hot zone is the contaminated area; EMS typically stages in cold/warm zones as directed." },
  { id: 412, level: "EMT", category: "Scene Size-Up", text: "A patient is found after a high-speed rollover with ejection. This MOI suggests:", options: ["Low risk of injury", "High risk of multisystem trauma", "Only minor abrasions", "No need for spinal precautions ever", "Only psychological distress"], correctIndex: 1, explanation: "Ejection/high-speed rollover is high-energy trauma with high likelihood of internal injuries." },
  { id: 413, level: "EMT", category: "Scene Size-Up", text: "A key reason to determine number of patients early is to:", options: ["Choose music in ambulance", "Decide who pays", "Request sufficient resources and ambulances", "Avoid documentation", "Skip triage"], correctIndex: 2, explanation: "Knowing patient count helps allocate resources and prevents overwhelm." },
  { id: 414, level: "EMT", category: "Scene Size-Up", text: "If a scene has aggressive dogs preventing access, you should:", options: ["Enter anyway", "Use your siren to scare them and proceed", "Request animal control/law enforcement and stage safely", "Try to pet them", "Throw objects at them"], correctIndex: 2, explanation: "Scene safety first; request help and avoid injury." },
  { id: 415, level: "EMT", category: "Scene Size-Up", text: "The BEST method to reduce risk of infection at any scene is:", options: ["Wearing gloves and appropriate PPE", "Only washing hands at end of shift", "Avoiding all patients with cough", "Using antibiotics routinely", "Never cleaning equipment"], correctIndex: 0, explanation: "Appropriate PPE and hand hygiene are primary infection-control measures." },
  { id: 416, level: "EMT", category: "Scene Size-Up", text: "At a bus crash with many victims, your first operational priority is:", options: ["Load the first patient you see", "Establish incident command and request resources", "Perform detailed histories", "Transport only the walking wounded", "Wait for media"], correctIndex: 1, explanation: "ICS and resource coordination are critical early in MCIs." },
  { id: 417, level: "EMT", category: "Scene Size-Up", text: "If you see a hazmat placard but are unsure of meaning, you should:", options: ["Approach closely to read it", "Ignore it if no symptoms", "Stage and use guides/resources while awaiting trained responders", "Touch the container to check temperature", "Open the container"], correctIndex: 2, explanation: "Do not approach unknown HazMat; stage and use reference resources and specialized teams." },
  { id: 418, level: "EMT", category: "Scene Size-Up", text: "The most appropriate early action if you suspect child abuse is to:", options: ["Confront caregivers loudly", "Accuse the child of lying", "Document objectively and follow reporting policy", "Refuse to transport", "Post details online"], correctIndex: 2, explanation: "Document findings objectively and follow mandated reporting procedures per law/policy." },
  { id: 419, level: "EMT", category: "Scene Size-Up", text: "A patient is on the floor with empty alcohol bottles. This is best categorized as:", options: ["Mechanism of injury", "Nature of illness clues", "Secondary assessment", "Transfer of care", "Medication administration"], correctIndex: 1, explanation: "Scene clues (bottles) inform suspected NOI such as intoxication/withdrawal." },
  { id: 420, level: "EMT", category: "Scene Size-Up", text: "At a scene with a suspected structural collapse, you should:", options: ["Enter immediately to rescue", "Stage in the collapse zone", "Wait for USAR/engineers and operate only in safe zones", "Climb debris to assess", "Turn off your radio"], correctIndex: 2, explanation: "Structural collapse is highly hazardous; wait for specialized rescue and operate only when safe." },

  // 5) EMS Operations (EMT) — 421–450
  { id: 421, level: "EMT", category: "EMS Operations", text: "Consent for treatment of an unconscious adult is typically:", options: ["Not required ever", "Implied consent", "Only verbal consent", "Only written consent", "Refused automatically"], correctIndex: 1, explanation: "Unconscious patients are treated under implied consent when life threats are present." },
  { id: 422, level: "EMT", category: "EMS Operations", text: "A competent adult refuses transport. The EMT should:", options: ["Force transport", "Leave without documentation", "Ensure decision-making capacity, explain risks, and document refusal", "Call police to arrest patient", "Take the patient’s ID as proof"], correctIndex: 2, explanation: "Assess capacity, inform risks/benefits, offer alternatives, obtain signatures/witness per protocol, and document thoroughly." },
  { id: 423, level: "EMT", category: "EMS Operations", text: "The best way to reduce legal risk in documentation is to:", options: ["Write opinions and insults", "Use vague terms like “fine”", "Document objective findings and times clearly", "Alter PCR after shift without addendum", "Use slang only"], correctIndex: 2, explanation: "Objective, complete, timely documentation with accurate times supports patient care and legal defensibility." },
  { id: 424, level: "EMT", category: "EMS Operations", text: "HIPAA allows sharing patient information:", options: ["With anyone who asks", "Only with the media", "For treatment/operations or as permitted by law", "On social media if no name used", "With friends if you’re off duty"], correctIndex: 2, explanation: "Share only for legitimate care/operational/legal reasons and follow privacy rules." },
  { id: 425, level: "EMT", category: "EMS Operations", text: "The most important reason to clean and disinfect equipment is:", options: ["Make it look new", "Prevent disease transmission", "Avoid paperwork", "Improve fuel economy", "Make it quieter"], correctIndex: 1, explanation: "Decontamination prevents spread of infectious disease between patients and providers." },
  { id: 426, level: "EMT", category: "EMS Operations", text: "Which is an example of abandonment?", options: ["Transfer care to equal/higher provider", "Leaving a patient after care is started without ensuring equal/higher care", "Patient refusal after capacity check", "Documentation completion", "Calling ALS"], correctIndex: 1, explanation: "Abandonment occurs when care is terminated without appropriate handoff or patient refusal with capacity." },
  { id: 427, level: "EMT", category: "EMS Operations", text: "When driving with lights and sirens, you should:", options: ["Ignore red lights", "Drive faster than you can control", "Still operate with due regard and obey policies/laws", "Assume all drivers see you", "Use siren only at intersections"], correctIndex: 2, explanation: "Emergency driving requires due regard; you are still responsible for safe operation." },
  { id: 428, level: "EMT", category: "EMS Operations", text: "A DNR order generally means:", options: ["Do not provide any care", "Do not treat pain", "Do not perform resuscitation efforts like CPR/defib", "Do not transport", "Do not give oxygen"], correctIndex: 2, explanation: "DNR limits resuscitation; comfort care and other treatments may still be appropriate per policy." },
  { id: 429, level: "EMT", category: "EMS Operations", text: "The BEST example of scope of practice is:", options: ["Anything you feel confident doing", "Skills allowed by your level and local regulations/protocols", "Only what a doctor can do", "Only what you learned once", "Anything the patient asks"], correctIndex: 1, explanation: "Scope is defined by certification level and state/local medical direction and protocol." },
  { id: 430, level: "EMT", category: "EMS Operations", text: "If you are exposed to a patient’s blood, your FIRST action should be:", options: ["Finish the call first, then wash", "Immediately wash/flush the area and report per policy", "Ignore it if you wore gloves", "Post online for advice", "Self-prescribe antibiotics"], correctIndex: 1, explanation: "Immediate decontamination and prompt reporting are required for exposure management." },
  { id: 431, level: "EMT", category: "EMS Operations", text: "A minor can consent to treatment without a parent MOST commonly when:", options: ["They are under 10", "They are emancipated or for specific conditions per law", "They refuse always", "They are with friends", "They speak English"], correctIndex: 1, explanation: "Emancipation and certain legally defined circumstances allow minor consent depending on jurisdiction." },
  { id: 432, level: "EMT", category: "EMS Operations", text: "Medical direction can be:", options: ["Only online", "Only offline", "Online (direct) and offline (protocols/training)", "Never needed", "Only hospital-based"], correctIndex: 2, explanation: "EMS functions under both online medical control and offline protocols/training/QA." },
  { id: 433, level: "EMT", category: "EMS Operations", text: "If you suspect elder abuse, you should:", options: ["Ignore it to avoid conflict", "Confront family aggressively", "Report per mandated reporting laws and document objectively", "Wait for the hospital to decide", "Ask the media to investigate"], correctIndex: 2, explanation: "Follow reporting laws/policy and document objective findings and statements." },
  { id: 434, level: "EMT", category: "EMS Operations", text: "The MAIN purpose of a run report (PCR) is:", options: ["Entertainment", "Billing only", "Medical and legal record of assessment, care, and response", "To blame other providers", "To avoid QA"], correctIndex: 2, explanation: "PCR documents patient condition, treatments, and timeline; it’s both clinical and legal." },
  { id: 435, level: "EMT", category: "EMS Operations", text: "If a patient is incompetent (lacks capacity), refusal of care is:", options: ["Always valid", "Valid only if written", "Not valid; seek appropriate surrogate/implied consent and involve medical control/law enforcement as needed", "Never transport", "Automatically call media"], correctIndex: 2, explanation: "Refusal requires decision-making capacity; without it, treatment/transport may proceed under implied consent or surrogate consent." },
  { id: 436, level: "EMT", category: "EMS Operations", text: "The best way to communicate with the receiving facility is to give:", options: ["Only patient name", "A long story with no vitals", "A concise report: age/sex, chief complaint, key findings, vitals, treatments, ETA", "Only your opinion", "No ETA"], correctIndex: 2, explanation: "A structured concise report supports continuity of care and preparedness." },
  { id: 437, level: "EMT", category: "EMS Operations", text: "If a patient requests confidentiality from family on scene, you should:", options: ["Tell family everything anyway", "Share only what patient permits (unless legally required)", "Refuse to treat", "Ask family to sign", "Post updates online"], correctIndex: 1, explanation: "Protect patient privacy; disclose only necessary information for care or as legally required." },
  { id: 438, level: "EMT", category: "EMS Operations", text: "The term ‘negligence’ in EMS generally means:", options: ["Providing perfect care", "Deviation from accepted standard of care causing harm", "Any bad outcome", "Refusing transport always", "Writing too much in PCR"], correctIndex: 1, explanation: "Negligence is failure to act as a reasonable EMS provider would, resulting in harm." },
  { id: 439, level: "EMT", category: "EMS Operations", text: "When lifting/powering a stretcher, best injury prevention is:", options: ["Lift with the back", "Twist while lifting", "Use legs, keep load close, and coordinate commands", "Lift alone to be faster", "Lock knees to stabilize"], correctIndex: 2, explanation: "Proper body mechanics and team coordination reduce musculoskeletal injuries." },
  { id: 440, level: "EMT", category: "EMS Operations", text: "A patient’s personal belongings should be:", options: ["Left on scene always", "Taken by EMS without documentation", "Secured and documented per policy, transferred with patient", "Given to a random bystander", "Thrown away"], correctIndex: 2, explanation: "Secure and document valuables and transfer appropriately to maintain chain of custody and avoid claims." },
  { id: 441, level: "EMT", category: "EMS Operations", text: "When using the radio, the best practice is to:", options: ["Talk over others", "Use clear text and be concise", "Use patient name and diagnosis loudly", "Transmit unnecessary details", "Avoid acknowledging orders"], correctIndex: 1, explanation: "Clear, concise communication supports safety and limits privacy exposure." },
  { id: 442, level: "EMT", category: "EMS Operations", text: "A ‘mandatory report’ most commonly applies to:", options: ["Minor rashes", "Suspected child/elder abuse and certain injuries per law", "All headaches", "All refusals", "All intoxication"], correctIndex: 1, explanation: "Many jurisdictions require reporting suspected abuse and some injuries (e.g., certain assaults) per law." },
  { id: 443, level: "EMT", category: "EMS Operations", text: "If an EMT provides care outside protocols without justification and harm occurs, this is most consistent with:", options: ["Good Samaritan immunity always", "Negligence", "Quality assurance", "Protocol compliance", "Informed consent"], correctIndex: 1, explanation: "Departing from standard/protocol without medical direction can be negligent and increase liability." },
  { id: 444, level: "EMT", category: "EMS Operations", text: "The best definition of ‘standard of care’ is:", options: ["The fanciest care possible", "What a reasonable provider with similar training would do in similar circumstances", "Whatever the patient wants", "Only what textbooks say", "Only what the hospital does"], correctIndex: 1, explanation: "Standard of care is what a similarly trained provider would reasonably do given the situation." },
  { id: 445, level: "EMT", category: "EMS Operations", text: "If you must correct an error on a PCR, you should:", options: ["Erase it completely", "Use white-out", "Follow policy: single line through error, initial/date (or electronic addendum)", "Delete the whole report", "Change times to match memory"], correctIndex: 2, explanation: "Corrections must preserve integrity; use approved correction/addendum methods per policy." },
  { id: 446, level: "EMT", category: "EMS Operations", text: "A patient threatens self-harm and has a plan. Best action is:", options: ["Leave them alone to calm down", "Transport for evaluation and involve law enforcement/medical control per policy", "Give aspirin", "Ignore statements if they are calm", "Let them sign refusal without assessment"], correctIndex: 1, explanation: "Suicidal ideation with plan is high risk; ensure safety and transport with appropriate support per policy." },
  { id: 447, level: "EMT", category: "EMS Operations", text: "During transfer of care, the MOST important step is:", options: ["Leave before report to save time", "Give a clear verbal report and ensure the receiving provider accepts care", "Hand over only the PCR later", "Avoid mentioning treatments", "Only talk to family"], correctIndex: 1, explanation: "Abandonment is avoided by giving report and ensuring care is accepted by the receiving provider." },
  { id: 448, level: "EMT", category: "EMS Operations", text: "Which is the best example of ‘expressed consent’?", options: ["Unconscious trauma patient", "Confused dementia patient", "Competent adult verbally agrees to treatment", "Child without guardian", "Cardiac arrest patient"], correctIndex: 2, explanation: "Expressed consent is a competent patient’s informed agreement (verbal or written) to care." },
  { id: 449, level: "EMT", category: "EMS Operations", text: "If a bystander records you providing care, you should:", options: ["Take their phone", "Stop treating", "Continue providing professional care and follow agency policy", "Argue and threaten them", "Share patient details to explain"], correctIndex: 2, explanation: "Focus on patient care and professionalism; follow policy and protect privacy." },
  { id: 450, level: "EMT", category: "EMS Operations", text: "If you are first on scene and need more ambulances, the best time to request them is:", options: ["After transport begins", "After you finish paperwork", "Early during scene size-up", "After family arrives", "Never; wait for dispatch"], correctIndex: 2, explanation: "Early requests prevent delays and improve patient care in multi-patient incidents." },

  // ================= PARAMEDIC CATEGORIES =================

  // 1) Clinical Judgment (Paramedic) — 451–475
  { id: 451, level: "Paramedic", category: "Clinical Judgment", text: "A dyspneic patient has wheezing, prolonged expiration, and history of COPD. Best initial ventilatory strategy is:", options: ["Fast ventilations at 30/min", "Low tidal volume with prolonged exhalation time", "No oxygen ever", "Hyperventilate to lower CO2 quickly", "Immediate sodium bicarbonate"], correctIndex: 1, explanation: "COPD requires allowing adequate exhalation (avoid air trapping) with controlled rate and longer expiratory phase." },
  { id: 452, level: "Paramedic", category: "Clinical Judgment", text: "A hypotensive trauma patient remains tachycardic after controlling external bleeding. Next priority is to suspect and treat:", options: ["Appendicitis", "Occult internal hemorrhage/shock", "Migraine", "Allergic rhinitis", "Simple dehydration only"], correctIndex: 1, explanation: "Persistent shock after external control suggests internal bleeding—rapid transport and shock management are critical." },
  { id: 453, level: "Paramedic", category: "Clinical Judgment", text: "A patient with fever, hypotension, altered mental status, and warm flushed skin early on suggests:", options: ["Cardiogenic shock", "Septic shock", "Neurogenic shock always", "Hypovolemic shock only", "Anxiety attack"], correctIndex: 1, explanation: "Sepsis can present with hypotension and altered mental status; warm flushed skin may occur early (distributive shock)." },
  { id: 454, level: "Paramedic", category: "Clinical Judgment", text: "A patient has sudden dyspnea, pleuritic chest pain, and unilateral leg swelling. Most concerning diagnosis is:", options: ["CHF", "Pulmonary embolism", "GERD", "Asthma only", "Appendicitis"], correctIndex: 1, explanation: "Classic PE features include sudden dyspnea, pleuritic pain, and signs of DVT." },
  { id: 455, level: "Paramedic", category: "Clinical Judgment", text: "A patient is agitated, diaphoretic, tachycardic, hypertensive, and has dilated pupils after unknown drug use. Most consistent toxidrome is:", options: ["Opioid", "Sympathomimetic", "Cholinergic", "Sedative-hypnotic", "Anticholinergic with dry skin only"], correctIndex: 1, explanation: "Sympathomimetic toxidrome often causes agitation, diaphoresis, tachycardia, hypertension, and mydriasis." },
  { id: 456, level: "Paramedic", category: "Clinical Judgment", text: "A patient with AMS has glucose 38 mg/dL. Most appropriate immediate treatment is:", options: ["Naloxone", "Dextrose/Glucagon per route and protocol", "Aspirin", "Nitroglycerin", "Furosemide"], correctIndex: 1, explanation: "Correct hypoglycemia immediately with glucose replacement per protocol and patient condition." },
  { id: 457, level: "Paramedic", category: "Clinical Judgment", text: "A patient with end-stage renal disease has peaked T waves and widening QRS. Most concerning electrolyte issue is:", options: ["Hyponatremia", "Hyperkalemia", "Hypercalcemia", "Hypomagnesemia", "Hypochloremia"], correctIndex: 1, explanation: "Peaked T waves and QRS widening in ESRD suggest hyperkalemia." },
  { id: 458, level: "Paramedic", category: "Clinical Judgment", text: "A patient has crushing chest pain, diaphoresis, and inferior STEMI pattern. They become hypotensive after nitro. Most likely cause is:", options: ["Aortic dissection", "Right ventricular infarct with preload dependence", "Pneumonia", "Panic attack", "Hyperventilation syndrome"], correctIndex: 1, explanation: "Inferior MI may involve RV; nitrates can drop preload and cause hypotension." },
  { id: 459, level: "Paramedic", category: "Clinical Judgment", text: "A patient with trauma has hypotension and bradycardia with warm dry skin. Most likely shock type is:", options: ["Hypovolemic", "Neurogenic", "Cardiogenic", "Septic", "Anaphylactic"], correctIndex: 1, explanation: "Neurogenic shock can cause hypotension with bradycardia and warm skin due to loss of sympathetic tone." },
  { id: 460, level: "Paramedic", category: "Clinical Judgment", text: "In respiratory acidosis from hypoventilation, the primary problem is:", options: ["Low CO2", "High CO2", "Low lactate", "High bicarbonate causing alkalosis", "Low potassium always"], correctIndex: 1, explanation: "Hypoventilation retains CO2, causing respiratory acidosis." },
  { id: 461, level: "Paramedic", category: "Clinical Judgment", text: "A patient presents with severe headache, hypertension, bradycardia, and irregular respirations. This triad suggests:", options: ["Cushing response (increased ICP)", "Septic shock", "Opioid overdose only", "COPD exacerbation", "PEA arrest"], correctIndex: 0, explanation: "Hypertension + bradycardia + irregular respirations is consistent with increased intracranial pressure (Cushing response)." },
  { id: 462, level: "Paramedic", category: "Clinical Judgment", text: "A patient with wheezing and hives after a bee sting is hypotensive. The most important medication is:", options: ["Diphenhydramine", "Albuterol", "Epinephrine", "Steroids only", "Furosemide"], correctIndex: 2, explanation: "Epinephrine is first-line for anaphylaxis with hypotension/airway involvement." },
  { id: 463, level: "Paramedic", category: "Clinical Judgment", text: "A patient with severe asthma now has silent chest and decreasing mental status. This indicates:", options: ["Improvement", "Impending respiratory failure", "Simple hyperventilation", "Mild attack", "Only anxiety"], correctIndex: 1, explanation: "Silent chest with fatigue/AMS is a late, critical sign—prepare for aggressive airway/ventilatory support." },
  { id: 464, level: "Paramedic", category: "Clinical Judgment", text: "A septic patient is hypotensive after fluids and remains poorly perfused. Next pharmacologic step is commonly:", options: ["Diuretics", "Vasopressor support per protocol", "Beta-blocker", "Nitroglycerin", "Adenosine"], correctIndex: 1, explanation: "Distributive shock may require vasopressors after adequate fluid resuscitation." },
  { id: 465, level: "Paramedic", category: "Clinical Judgment", text: "A patient is suddenly confused with slurred speech; glucose is normal. Highest priority system goal is:", options: ["Delay to observe", "Rapid stroke center transport with pre-notification", "Give aspirin immediately in all cases", "Give nitro", "Give morphine"], correctIndex: 1, explanation: "Time-dependent stroke care requires rapid transport and pre-notification." },
  { id: 466, level: "Paramedic", category: "Clinical Judgment", text: "A patient has metabolic acidosis from DKA. The body’s typical compensatory response is:", options: ["Bradypnea", "Kussmaul respirations (deep, rapid breathing)", "Apnea", "Shallow breathing", "No change"], correctIndex: 1, explanation: "Metabolic acidosis triggers hyperventilation to blow off CO2 (Kussmaul breathing)." },
  { id: 467, level: "Paramedic", category: "Clinical Judgment", text: "A trauma patient is hypotensive with muffled heart tones and JVD. Most likely diagnosis is:", options: ["Tension pneumothorax", "Cardiac tamponade", "COPD", "Pulmonary edema", "Asthma"], correctIndex: 1, explanation: "Beck’s triad (hypotension, JVD, muffled sounds) suggests cardiac tamponade." },
  { id: 468, level: "Paramedic", category: "Clinical Judgment", text: "A patient with severe GI bleed is tachycardic with narrow pulse pressure. This pattern suggests:", options: ["Distributive shock", "Hypovolemic shock", "Neurogenic shock", "Cardiogenic shock", "Obstructive shock"], correctIndex: 1, explanation: "Blood loss reduces preload causing tachycardia and narrowing pulse pressure (hypovolemia)." },
  { id: 469, level: "Paramedic", category: "Clinical Judgment", text: "A patient has respiratory alkalosis from anxiety hyperventilation. Best initial management is:", options: ["Immediate intubation", "Reassurance/coaching, rule out medical causes, monitor", "Sodium bicarbonate", "Furosemide", "Epinephrine infusion"], correctIndex: 1, explanation: "Coach breathing and evaluate for serious causes; avoid harmful interventions." },
  { id: 470, level: "Paramedic", category: "Clinical Judgment", text: "A patient with chest pain is hypotensive with clear lungs and ECG shows bradycardia. Most likely perfusion issue is:", options: ["Fluid overload", "Rate-dependent low cardiac output", "Asthma", "Sepsis", "Anaphylaxis"], correctIndex: 1, explanation: "Bradycardia can reduce cardiac output causing hypotension even with clear lungs." },
  { id: 471, level: "Paramedic", category: "Clinical Judgment", text: "In suspected intracranial hemorrhage, the most important airway/ventilation goal is:", options: ["Hyperventilate all head injuries to ETCO2 20", "Maintain oxygenation and normocapnia unless herniation signs", "Avoid oxygen completely", "Induce apnea", "Give large doses of narcotics only"], correctIndex: 1, explanation: "Maintain adequate oxygenation and normal ventilation; aggressive hyperventilation is reserved for impending herniation per protocol." },
  { id: 472, level: "Paramedic", category: "Clinical Judgment", text: "A patient has sudden severe tearing chest pain radiating to the back with unequal arm BPs. Most concerning diagnosis is:", options: ["Aortic dissection", "Stable angina", "Pneumonia", "GERD", "Asthma"], correctIndex: 0, explanation: "Tearing pain to the back with BP differential suggests aortic dissection—avoid routine anticoagulation and transport emergently." },
  { id: 473, level: "Paramedic", category: "Clinical Judgment", text: "A patient on dialysis is weak and has wide QRS with sine-wave appearance. Immediate stabilization often includes:", options: ["Magnesium", "Calcium administration per protocol", "Aspirin", "Nitro", "Adenosine"], correctIndex: 1, explanation: "In severe hyperkalemia, IV calcium stabilizes the cardiac membrane (per protocol)." },
  { id: 474, level: "Paramedic", category: "Clinical Judgment", text: "A patient with CHF is hypertensive and in severe respiratory distress. The best initial noninvasive support is:", options: ["High-dose opioids first", "CPAP and nitrates per protocol if not hypotensive", "Trendelenburg position", "Large fluid bolus", "Adenosine"], correctIndex: 1, explanation: "CPAP improves oxygenation and reduces preload/afterload; nitrates help if BP supports and not contraindicated." },
  { id: 475, level: "Paramedic", category: "Clinical Judgment", text: "A patient is pale, cool, and diaphoretic with low ETCO2 and weak pulses. This most likely indicates:", options: ["Improving perfusion", "Poor perfusion/shock", "Hyperventilation syndrome", "Normal physiology", "Heat exhaustion only"], correctIndex: 1, explanation: "Low ETCO2 with shock signs often indicates poor perfusion and low CO2 delivery to lungs." },

  // 2) Airway (Paramedic) — 476–500
  { id: 476, level: "Paramedic", category: "Airway", text: "The best confirmation of endotracheal tube placement in the field is:", options: ["Fogging in tube", "Equal chest rise alone", "Continuous waveform capnography", "Breath sounds only on left", "Pulse oximetry only"], correctIndex: 2, explanation: "Continuous waveform capnography is the most reliable confirmation of ET tube placement." },
  { id: 477, level: "Paramedic", category: "Airway", text: "When ventilating an intubated adult in cardiac arrest, correct rate is approximately:", options: ["20–30/min", "1 breath every 2 seconds", "1 breath every 6 seconds", "1 breath every 10 seconds", "No ventilations"], correctIndex: 2, explanation: "Ventilate about 10/min (1 breath every 6 seconds) without pausing compressions." },
  { id: 478, level: "Paramedic", category: "Airway", text: "A major complication of excessive ventilation during CPR is:", options: ["Improved venous return", "Decreased intrathoracic pressure", "Decreased coronary perfusion due to increased intrathoracic pressure", "More ROSC always", "Lower airway resistance"], correctIndex: 2, explanation: "Hyperventilation increases intrathoracic pressure, reducing venous return and perfusion." },
  { id: 479, level: "Paramedic", category: "Airway", text: "In RSI, the best method to prevent desaturation during apnea is:", options: ["Skip preoxygenation", "Aggressive suction only", "Adequate preoxygenation and apneic oxygenation per protocol", "Give diuretics", "Lower oxygen concentration"], correctIndex: 2, explanation: "Preoxygenation (and apneic oxygenation when used) maximizes oxygen reserves during intubation." },
  { id: 480, level: "Paramedic", category: "Airway", text: "A patient with facial trauma and inability to ventilate with BVM needs a rescue airway. Best next step is often:", options: ["Repeat BVM without adjuncts", "Supraglottic airway placement", "Oral glucose", "Aspirin", "Vagal maneuvers"], correctIndex: 1, explanation: "When BVM ventilation is inadequate, a supraglottic airway can rapidly improve ventilation." },
  { id: 481, level: "Paramedic", category: "Airway", text: "For suspected upper airway obstruction from anaphylaxis, the key medication is:", options: ["Furosemide", "Epinephrine", "Adenosine", "Atropine", "Calcium"], correctIndex: 1, explanation: "Epinephrine is first-line for anaphylaxis and can relieve airway edema/bronchospasm." },
  { id: 482, level: "Paramedic", category: "Airway", text: "The ‘BURP’ maneuver during laryngoscopy improves view by:", options: ["Increasing gastric pressure", "Moving larynx backward/upward/rightward", "Relaxing vocal cords", "Causing apnea", "Reducing secretions"], correctIndex: 1, explanation: "BURP helps align the laryngeal structures to improve glottic visualization." },
  { id: 483, level: "Paramedic", category: "Airway", text: "A patient has a stoma (tracheostomy) and is in respiratory distress. Oxygenation/ventilation should be delivered:", options: ["Only by nasal cannula", "Over the stoma with appropriate device", "By mouth only", "By NRB over mouth while occluding stoma", "Not possible"], correctIndex: 1, explanation: "For tracheostomy patients, oxygen/ventilation must be applied over the stoma/airway." },
  { id: 484, level: "Paramedic", category: "Airway", text: "If ETCO2 suddenly drops after successful intubation and bagging, the most concerning cause is:", options: ["Improved perfusion", "Tube displacement or loss of perfusion/ROSC changes", "Perfect tube placement", "Hyperglycemia", "Aspirin effect"], correctIndex: 1, explanation: "A sudden ETCO2 drop can indicate tube dislodgement or worsening perfusion; reassess immediately." },
  { id: 485, level: "Paramedic", category: "Airway", text: "A ‘difficult airway’ prediction tool (e.g., LEMON) helps you:", options: ["Choose antibiotics", "Plan airway strategy and backups", "Decide hospital destination only", "Treat hypotension", "Interpret ECG"], correctIndex: 1, explanation: "Airway prediction tools guide preparation, positioning, and backup planning before attempts." },
  { id: 486, level: "Paramedic", category: "Airway", text: "Cricoid pressure (Sellick) is best described as:", options: ["Always recommended", "A technique with mixed evidence that may worsen laryngoscopic view; use per protocol", "The same as jaw thrust", "Required for all intubations", "A suction technique"], correctIndex: 1, explanation: "Cricoid pressure can impede view/ventilation; apply only if indicated and per protocol." },
  { id: 487, level: "Paramedic", category: "Airway", text: "A patient has severe bronchospasm with high airway pressures on ventilation. Best immediate adjustment is:", options: ["Increase rate to 30/min", "Allow longer exhalation (reduce rate, adjust I:E) and treat bronchospasm", "Stop ventilation", "Increase tidal volume significantly", "Give furosemide"], correctIndex: 1, explanation: "Bronchospasm requires bronchodilation and ventilation strategy that avoids air trapping." },
  { id: 488, level: "Paramedic", category: "Airway", text: "The best sign of effective BVM ventilation is:", options: ["Gastric distention", "Chest rise with each ventilation and improving oxygenation", "Loud gurgling", "Patient fighting mask", "High ETCO2 in all cases"], correctIndex: 1, explanation: "Visible chest rise and improving oxygenation indicate adequate ventilation." },
  { id: 489, level: "Paramedic", category: "Airway", text: "In pediatric airway management, the MOST common cause of deterioration is:", options: ["Cardiac arrhythmia first", "Respiratory failure/hypoxia", "GI bleeding", "Kidney failure", "Stroke"], correctIndex: 1, explanation: "Children commonly arrest from respiratory failure; early oxygenation/ventilation is critical." },
  { id: 490, level: "Paramedic", category: "Airway", text: "When using a supraglottic airway, the most important monitoring tool is:", options: ["Blood pressure only", "Waveform capnography", "Pupil size", "Skin rash", "Urine output"], correctIndex: 1, explanation: "Waveform capnography confirms ventilation and detects displacement or perfusion changes." },
  { id: 491, level: "Paramedic", category: "Airway", text: "A patient has suspected increased ICP. The ventilation goal after securing airway is:", options: ["ETCO2 20 always", "Normocapnia (avoid hypo/hyperventilation) unless herniation signs", "No ventilation", "Very high CO2 to dilate vessels", "Only oxygen with no ventilation"], correctIndex: 1, explanation: "Maintain normal ventilation; aggressive hyperventilation is reserved for impending herniation per protocol." },
  { id: 492, level: "Paramedic", category: "Airway", text: "Post-intubation, a right mainstem intubation most commonly presents as:", options: ["Equal breath sounds", "Absent left breath sounds", "Wheezing bilaterally", "High SpO2 always", "Bradycardia only"], correctIndex: 1, explanation: "Right mainstem placement causes diminished/absent breath sounds on the left." },
  { id: 493, level: "Paramedic", category: "Airway", text: "A patient aspirates and develops sudden hypoxia with coarse crackles. Immediate airway action is:", options: ["Give oral glucose", "Suction and optimize oxygenation/ventilation", "Give aspirin", "Give nitro", "Stop ventilations"], correctIndex: 1, explanation: "Clear the airway (suction) and support oxygenation/ventilation." },
  { id: 494, level: "Paramedic", category: "Airway", text: "A difficult BVM seal is best improved by:", options: ["One-person technique only", "Two-person BVM with airway adjunct and proper positioning", "No airway adjuncts ever", "Lower oxygen flow", "Tilting patient prone"], correctIndex: 1, explanation: "Two-person BVM and airway adjuncts improve seal and ventilation effectiveness." },
  { id: 495, level: "Paramedic", category: "Airway", text: "The best initial airway positioning for most adults is:", options: ["Chin-to-chest", "Sniffing position (when no c-spine concern)", "Head down", "Sitting slumped", "Left lateral always"], correctIndex: 1, explanation: "The sniffing position aligns airway axes and improves laryngoscopy/ventilation when trauma isn’t suspected." },
  { id: 496, level: "Paramedic", category: "Airway", text: "A patient’s ETCO2 is persistently 10 mmHg during CPR with good compressions. This most likely indicates:", options: ["Excellent perfusion", "Poor perfusion/low cardiac output during CPR", "Hyperglycemia", "Proper tube placement guarantee", "CO poisoning"], correctIndex: 1, explanation: "Very low ETCO2 during CPR often reflects poor perfusion; reassess compression quality and reversible causes." },
  { id: 497, level: "Paramedic", category: "Airway", text: "A ‘can’t intubate, can’t oxygenate’ situation requires:", options: ["More laryngoscopy attempts only", "Immediate surgical airway per protocol", "Oral glucose", "Aspirin", "Defibrillation"], correctIndex: 1, explanation: "When oxygenation cannot be maintained, proceed to emergency surgical airway per protocol." },
  { id: 498, level: "Paramedic", category: "Airway", text: "After successful intubation, the MOST important next step is:", options: ["Remove the tube to re-check", "Secure tube and confirm with waveform capnography", "Give aspirin", "Stop monitoring", "Hyperventilate immediately"], correctIndex: 1, explanation: "Secure the tube and confirm placement continuously; prevent dislodgement." },
  { id: 499, level: "Paramedic", category: "Airway", text: "A patient with COPD exacerbation is tiring and CO2 is rising. Best airway decision is:", options: ["Delay ventilation to avoid CO2 retention", "Assist ventilation (BVM/advanced airway as needed) and treat cause", "Only give fluids", "Only give aspirin", "Only give nitro"], correctIndex: 1, explanation: "Impending respiratory failure requires ventilatory support while treating bronchospasm." },
  { id: 500, level: "Paramedic", category: "Airway", text: "In intubated patients, the best reason to avoid over-ventilation is:", options: ["It improves blood pressure", "It can decrease venous return and worsen perfusion", "It always lowers ICP safely", "It improves oxygenation without downside", "It reduces aspiration risk"], correctIndex: 1, explanation: "Excessive ventilation increases intrathoracic pressure, reducing preload and perfusion." },

  // 3) Cardiology (Paramedic) — 501–525
  { id: 501, level: "Paramedic", category: "Cardiology", text: "A patient is pulseless with VF on the monitor. The next action is:", options: ["Synchronized cardioversion", "Immediate defibrillation and CPR", "Adenosine", "Atropine", "Vagal maneuvers"], correctIndex: 1, explanation: "VF/pulseless VT require immediate defibrillation and high-quality CPR." },
  { id: 502, level: "Paramedic", category: "Cardiology", text: "A stable narrow-complex tachycardia at 180 bpm with regular rhythm is most appropriately treated first with:", options: ["Defibrillation", "Vagal maneuvers and adenosine per protocol", "Amiodarone infusion immediately", "Magnesium", "Unsynchronized shock"], correctIndex: 1, explanation: "Stable regular narrow SVT is treated with vagal maneuvers then adenosine per ACLS/protocol." },
  { id: 503, level: "Paramedic", category: "Cardiology", text: "An unstable patient with SVT (altered, hypotensive) requires:", options: ["Adenosine first", "Synchronized cardioversion", "Diltiazem only", "Observation", "Oral fluids"], correctIndex: 1, explanation: "Unstable tachyarrhythmias require immediate synchronized cardioversion." },
  { id: 504, level: "Paramedic", category: "Cardiology", text: "A patient has symptomatic bradycardia with hypotension and poor perfusion. First-line ACLS medication is:", options: ["Adenosine", "Atropine", "Amiodarone", "Diltiazem", "Magnesium"], correctIndex: 1, explanation: "Atropine is first-line for symptomatic bradycardia (then pacing/pressors if ineffective)." },
  { id: 505, level: "Paramedic", category: "Cardiology", text: "A patient is in torsades de pointes. The medication of choice is:", options: ["Calcium chloride", "Magnesium sulfate", "Adenosine", "Atropine", "Nitroglycerin"], correctIndex: 1, explanation: "Torsades is treated with magnesium sulfate and correction of underlying causes." },
  { id: 506, level: "Paramedic", category: "Cardiology", text: "A patient has wide-complex tachycardia with a pulse and is unstable. Best action is:", options: ["Adenosine", "Synchronized cardioversion", "Vagal maneuvers", "No treatment", "Oral aspirin"], correctIndex: 1, explanation: "Unstable tachycardia (including wide-complex) requires synchronized cardioversion." },
  { id: 507, level: "Paramedic", category: "Cardiology", text: "PEA is best described as:", options: ["A shockable rhythm", "Electrical activity without a palpable pulse", "Always VF", "A normal rhythm", "A type of SVT"], correctIndex: 1, explanation: "PEA is non-shockable; treat with CPR, epinephrine, and reversible causes." },
  { id: 508, level: "Paramedic", category: "Cardiology", text: "In asystole, the best next steps include:", options: ["Defibrillate immediately", "CPR, epinephrine, and treat reversible causes", "Adenosine", "Synchronized cardioversion", "Vagal maneuvers"], correctIndex: 1, explanation: "Asystole is non-shockable; prioritize CPR, epinephrine, and H’s & T’s." },
  { id: 509, level: "Paramedic", category: "Cardiology", text: "A patient has chest pain with ST elevation in contiguous leads. Prehospital priority is:", options: ["Delay transport for repeat ECGs for 30 minutes", "Rapid transport to PCI-capable facility with STEMI activation/pre-notification", "Give antibiotics", "Give adenosine", "Give furosemide always"], correctIndex: 1, explanation: "STEMI is time-critical; rapid PCI activation and transport improve outcomes." },
  { id: 510, level: "Paramedic", category: "Cardiology", text: "A patient is in AF with RVR (irregularly irregular, 160 bpm) and is stable. Management focuses on:", options: ["Immediate defibrillation", "Rate control per protocol and evaluation for anticoag/underlying causes", "Adenosine always", "Atropine", "Vagal maneuvers only"], correctIndex: 1, explanation: "Stable AF with RVR is managed with rate control per protocol and supportive care." },
  { id: 511, level: "Paramedic", category: "Cardiology", text: "For VF/pVT arrest, which medication is commonly given after shocks and CPR per ACLS?", options: ["Adenosine", "Amiodarone (or lidocaine) per protocol", "Diltiazem", "Atropine", "Nitroglycerin"], correctIndex: 1, explanation: "After defibrillation and CPR, antiarrhythmics like amiodarone are used for refractory VF/pVT per protocol." },
  { id: 512, level: "Paramedic", category: "Cardiology", text: "A paced rhythm with no capture means:", options: ["Pacer spikes followed by QRS consistently", "Pacer spikes without corresponding QRS complexes", "Normal sinus rhythm", "VF", "Asystole"], correctIndex: 1, explanation: "Failure to capture occurs when pacing spikes do not produce myocardial depolarization (no QRS)." },
  { id: 513, level: "Paramedic", category: "Cardiology", text: "A patient with symptomatic bradycardia does not respond to atropine. Next best intervention is:", options: ["Adenosine", "Transcutaneous pacing and/or vasopressors per protocol", "Defibrillation", "Cardioversion", "Magnesium"], correctIndex: 1, explanation: "If atropine fails, TCP and pressor support are indicated per ACLS/protocol." },
  { id: 514, level: "Paramedic", category: "Cardiology", text: "A patient has narrow QRS, regular rhythm at 50 bpm but is hypotensive and altered. The best treatment is:", options: ["No treatment because rate is slow", "Treat as symptomatic bradycardia (atropine/TCP/pressors)", "Adenosine", "Diltiazem", "Amiodarone bolus"], correctIndex: 1, explanation: "Symptoms (hypotension/AMS) define instability; treat the bradycardia." },
  { id: 515, level: "Paramedic", category: "Cardiology", text: "A patient has unstable polymorphic VT. The best electrical therapy is typically:", options: ["Synchronized cardioversion always", "Defibrillation (unsynchronized) if synchronization not possible", "No shocks", "Vagal maneuvers", "Aspirin only"], correctIndex: 1, explanation: "Polymorphic VT may not synchronize; treat as shockable with defibrillation if unstable." },
  { id: 516, level: "Paramedic", category: "Cardiology", text: "In a narrow-complex tachycardia, adenosine should be given:", options: ["Slow IV push without flush", "Rapid IV push followed by immediate flush", "IM injection", "Oral tablet", "Through a filter over 10 minutes"], correctIndex: 1, explanation: "Adenosine has a very short half-life; it must be given rapid IV push with flush." },
  { id: 517, level: "Paramedic", category: "Cardiology", text: "A patient is hypotensive with signs of shock and ECG shows ventricular tachycardia with a pulse. Best action is:", options: ["Adenosine", "Synchronized cardioversion", "Wait and reassess", "Oral fluids", "Atropine"], correctIndex: 1, explanation: "Unstable VT with a pulse requires synchronized cardioversion." },
  { id: 518, level: "Paramedic", category: "Cardiology", text: "The MOST common reversible causes to consider in PEA are summarized as:", options: ["FAST/BE-FAST", "H’s and T’s", "ABCDE", "SAMPLE", "OPQRST"], correctIndex: 1, explanation: "PEA management includes finding and treating H’s and T’s (reversible causes)." },
  { id: 519, level: "Paramedic", category: "Cardiology", text: "A patient with suspected ACS should receive aspirin unless contraindicated because it:", options: ["Raises BP", "Inhibits platelet aggregation", "Dilates bronchi", "Treats arrhythmias", "Lowers glucose"], correctIndex: 1, explanation: "Aspirin reduces clot progression by inhibiting platelet aggregation." },
  { id: 520, level: "Paramedic", category: "Cardiology", text: "A patient with inferior MI is hypotensive with clear lungs. The best initial management is often:", options: ["Diuretics", "Careful fluid bolus and avoid nitrates if RV infarct suspected", "High-dose nitro", "Beta-blocker immediately", "Adenosine"], correctIndex: 1, explanation: "RV infarct patients can be preload dependent; cautious fluids may improve BP, nitrates can worsen hypotension." },
  { id: 521, level: "Paramedic", category: "Cardiology", text: "A patient has sinus tachycardia at 130 due to fever/dehydration. Best treatment is:", options: ["Adenosine", "Treat underlying cause (fluids, cooling, etc.)", "Synchronized cardioversion", "Defibrillation", "Atropine"], correctIndex: 1, explanation: "Sinus tachycardia is usually compensatory—treat the cause, not the rhythm." },
  { id: 522, level: "Paramedic", category: "Cardiology", text: "Which rhythm is shockable?", options: ["Asystole", "PEA", "VF", "Sinus bradycardia", "1st-degree AV block"], correctIndex: 2, explanation: "VF (and pulseless VT) are shockable; asystole and PEA are not." },
  { id: 523, level: "Paramedic", category: "Cardiology", text: "A patient has a regular wide-complex tachycardia and you suspect SVT with aberrancy. A safe initial drug consideration in stable patients (per protocol) may be:", options: ["Atropine", "Adenosine in certain regular monomorphic wide tachycardias", "Furosemide", "Nitroglycerin", "Magnesium only"], correctIndex: 1, explanation: "Adenosine may be used for regular monomorphic wide tachycardia if stable and per protocol; avoid if irregular/polymorphic." }
];
