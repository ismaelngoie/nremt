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
  {
    "id": 301,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 52-year-old male has chest pain and a prescribed nitroglycerin. They took sildenafil within 12 hours. You should:",
    "options": [
      "Withhold nitroglycerin and contact medical control per protocol",
      "Assist with prescribed inhaler",
      "Place the patient supine and elevate legs",
      "Provide high-flow oxygen and reassess"
    ],
    "correctIndex": 0,
    "explanation": "PDE-5 inhibitors + nitroglycerin can cause profound hypotension."
  },
  {
    "id": 302,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 60-year-old male has chest pain and a prescribed nitroglycerin. They took sildenafil within 8 hours. You should:",
    "options": [
      "Encourage the patient to walk to the ambulance",
      "Withhold nitroglycerin and contact medical control per protocol",
      "Delay treatment until hospital",
      "Apply a tourniquet proximal to the wound"
    ],
    "correctIndex": 1,
    "explanation": "PDE-5 inhibitors + nitroglycerin can cause profound hypotension."
  },
  {
    "id": 303,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 45-year-old male has chest pain and a prescribed nitroglycerin. They took sildenafil within 18 hours. You should:",
    "options": [
      "Delay treatment until hospital",
      "Apply a tourniquet proximal to the wound",
      "Withhold nitroglycerin and contact medical control per protocol",
      "Encourage the patient to walk to the ambulance"
    ],
    "correctIndex": 2,
    "explanation": "PDE-5 inhibitors + nitroglycerin can cause profound hypotension."
  },
  {
    "id": 304,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 67-year-old male has chest pain and a prescribed nitroglycerin. They took sildenafil within 6 hours. You should:",
    "options": [
      "Apply a tourniquet proximal to the wound",
      "Rub extremities vigorously",
      "Cool the burn briefly and cover with a dry sterile dressing",
      "Withhold nitroglycerin and contact medical control per protocol"
    ],
    "correctIndex": 3,
    "explanation": "PDE-5 inhibitors + nitroglycerin can cause profound hypotension."
  },
  {
    "id": 305,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 58-year-old male has chest pain and a prescribed nitroglycerin. They took sildenafil within 20 hours. You should:",
    "options": [
      "Provide BVM ventilations",
      "Assist with prescribed inhaler",
      "Provide high-flow oxygen and reassess",
      "Withhold nitroglycerin and contact medical control per protocol"
    ],
    "correctIndex": 3,
    "explanation": "PDE-5 inhibitors + nitroglycerin can cause profound hypotension."
  },
  {
    "id": 306,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 55-year-old male has suspected ACS, no aspirin allergy, and no active bleeding. The best first medication is:",
    "options": [
      "Give aspirin 160–325 mg",
      "Provide BVM ventilations",
      "Chewable aspirin (160–325 mg)",
      "Apply direct pressure only and wait"
    ],
    "correctIndex": 2,
    "explanation": "Aspirin is indicated early for suspected ACS unless contraindicated."
  },
  {
    "id": 307,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 42-year-old female has suspected ACS, no aspirin allergy, and no active bleeding. The best first medication is:",
    "options": [
      "Place the patient supine and elevate legs",
      "Chewable aspirin (160–325 mg)",
      "Assist with prescribed inhaler",
      "Apply direct pressure only and wait"
    ],
    "correctIndex": 1,
    "explanation": "Aspirin is indicated early for suspected ACS unless contraindicated."
  },
  {
    "id": 308,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 71-year-old male has suspected ACS, no aspirin allergy, and no active bleeding. The best first medication is:",
    "options": [
      "Insert an oropharyngeal airway",
      "Place the patient supine and elevate legs",
      "Give aspirin 160–325 mg",
      "Chewable aspirin (160–325 mg)"
    ],
    "correctIndex": 3,
    "explanation": "Aspirin is indicated early for suspected ACS unless contraindicated."
  },
  {
    "id": 309,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 63-year-old female has suspected ACS, no aspirin allergy, and no active bleeding. The best first medication is:",
    "options": [
      "Chewable aspirin (160–325 mg)",
      "Cool the burn briefly and cover with a dry sterile dressing",
      "Place the patient supine and elevate legs",
      "Give aspirin 160–325 mg"
    ],
    "correctIndex": 0,
    "explanation": "Aspirin is indicated early for suspected ACS unless contraindicated."
  },
  {
    "id": 310,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 49-year-old male has suspected ACS, no aspirin allergy, and no active bleeding. The best first medication is:",
    "options": [
      "Provide BVM ventilations",
      "Apply direct pressure only and wait",
      "Chewable aspirin (160–325 mg)",
      "Administer nitroglycerin as prescribed"
    ],
    "correctIndex": 2,
    "explanation": "Aspirin is indicated early for suspected ACS unless contraindicated."
  },
  {
    "id": 311,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 9-year-old male has wheezing and a prescribed albuterol inhaler. After confirming indications, you should:",
    "options": [
      "Delay treatment until hospital",
      "Give epinephrine auto-injector immediately",
      "Apply a tourniquet proximal to the wound",
      "Assist with the inhaler and reassess breathing"
    ],
    "correctIndex": 3,
    "explanation": "EMTs may assist with a patient’s prescribed inhaler when appropriate."
  },
  {
    "id": 312,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 16-year-old female has wheezing and a prescribed albuterol inhaler. After confirming indications, you should:",
    "options": [
      "Apply direct pressure only and wait",
      "Give aspirin 160–325 mg",
      "Assist with the inhaler and reassess breathing",
      "Encourage the patient to walk to the ambulance"
    ],
    "correctIndex": 2,
    "explanation": "EMTs may assist with a patient’s prescribed inhaler when appropriate."
  },
  {
    "id": 313,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 28-year-old male has wheezing and a prescribed albuterol inhaler. After confirming indications, you should:",
    "options": [
      "Insert an oropharyngeal airway",
      "Provide BVM ventilations",
      "Give aspirin 160–325 mg",
      "Assist with the inhaler and reassess breathing"
    ],
    "correctIndex": 3,
    "explanation": "EMTs may assist with a patient’s prescribed inhaler when appropriate."
  },
  {
    "id": 314,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 36-year-old female has wheezing and a prescribed albuterol inhaler. After confirming indications, you should:",
    "options": [
      "Cool the burn briefly and cover with a dry sterile dressing",
      "Assist with the inhaler and reassess breathing",
      "Apply a tourniquet proximal to the wound",
      "Give epinephrine auto-injector immediately"
    ],
    "correctIndex": 1,
    "explanation": "EMTs may assist with a patient’s prescribed inhaler when appropriate."
  },
  {
    "id": 315,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 66-year-old male has wheezing and a prescribed albuterol inhaler. After confirming indications, you should:",
    "options": [
      "Apply direct pressure only and wait",
      "Delay treatment until hospital",
      "Assist with prescribed inhaler",
      "Assist with the inhaler and reassess breathing"
    ],
    "correctIndex": 3,
    "explanation": "EMTs may assist with a patient’s prescribed inhaler when appropriate."
  },
  {
    "id": 316,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 24-year-old male is unresponsive with slow respirations and pinpoint pupils. Your priority is to:",
    "options": [
      "Place the patient supine and elevate legs",
      "Encourage the patient to walk to the ambulance",
      "Administer nitroglycerin as prescribed",
      "Ventilate with a BVM and give naloxone per protocol"
    ],
    "correctIndex": 3,
    "explanation": "Airway/ventilation comes first; naloxone supports reversal but does not replace ventilations."
  },
  {
    "id": 317,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 33-year-old female is unresponsive with slow respirations and pinpoint pupils. Your priority is to:",
    "options": [
      "Cool the burn briefly and cover with a dry sterile dressing",
      "Rub extremities vigorously",
      "Give aspirin 160–325 mg",
      "Ventilate with a BVM and give naloxone per protocol"
    ],
    "correctIndex": 3,
    "explanation": "Airway/ventilation comes first; naloxone supports reversal but does not replace ventilations."
  },
  {
    "id": 318,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 41-year-old male is unresponsive with slow respirations and pinpoint pupils. Your priority is to:",
    "options": [
      "Encourage the patient to walk to the ambulance",
      "Provide BVM ventilations",
      "Administer nitroglycerin as prescribed",
      "Ventilate with a BVM and give naloxone per protocol"
    ],
    "correctIndex": 3,
    "explanation": "Airway/ventilation comes first; naloxone supports reversal but does not replace ventilations."
  },
  {
    "id": 319,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 57-year-old female is unresponsive with slow respirations and pinpoint pupils. Your priority is to:",
    "options": [
      "Ventilate with a BVM and give naloxone per protocol",
      "Apply direct pressure only and wait",
      "Encourage the patient to walk to the ambulance",
      "Administer nitroglycerin as prescribed"
    ],
    "correctIndex": 0,
    "explanation": "Airway/ventilation comes first; naloxone supports reversal but does not replace ventilations."
  },
  {
    "id": 320,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 68-year-old male is unresponsive with slow respirations and pinpoint pupils. Your priority is to:",
    "options": [
      "Provide BVM ventilations",
      "Place the patient supine and elevate legs",
      "Ventilate with a BVM and give naloxone per protocol",
      "Give oral glucose"
    ],
    "correctIndex": 2,
    "explanation": "Airway/ventilation comes first; naloxone supports reversal but does not replace ventilations."
  },
  {
    "id": 321,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 19-year-old female is awake, diaphoretic, and confused. BGL is 54 mg/dL and they can swallow. You should:",
    "options": [
      "Give oral glucose (or other oral carbohydrate)",
      "Give aspirin 160–325 mg",
      "Assist with prescribed inhaler",
      "Give oral glucose"
    ],
    "correctIndex": 0,
    "explanation": "Conscious hypoglycemic patients who can swallow should receive oral carbohydrates."
  },
  {
    "id": 322,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 61-year-old male is awake, diaphoretic, and confused. BGL is 46 mg/dL and they can swallow. You should:",
    "options": [
      "Give oral glucose",
      "Provide high-flow oxygen and reassess",
      "Give oral glucose (or other oral carbohydrate)",
      "Assist with prescribed inhaler"
    ],
    "correctIndex": 2,
    "explanation": "Conscious hypoglycemic patients who can swallow should receive oral carbohydrates."
  },
  {
    "id": 323,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 37-year-old female is awake, diaphoretic, and confused. BGL is 58 mg/dL and they can swallow. You should:",
    "options": [
      "Place the patient supine and elevate legs",
      "Give aspirin 160–325 mg",
      "Insert an oropharyngeal airway",
      "Give oral glucose (or other oral carbohydrate)"
    ],
    "correctIndex": 3,
    "explanation": "Conscious hypoglycemic patients who can swallow should receive oral carbohydrates."
  },
  {
    "id": 324,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 70-year-old female is awake, diaphoretic, and confused. BGL is 40 mg/dL and they can swallow. You should:",
    "options": [
      "Rub extremities vigorously",
      "Apply a tourniquet proximal to the wound",
      "Give aspirin 160–325 mg",
      "Give oral glucose (or other oral carbohydrate)"
    ],
    "correctIndex": 3,
    "explanation": "Conscious hypoglycemic patients who can swallow should receive oral carbohydrates."
  },
  {
    "id": 325,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 29-year-old male is awake, diaphoretic, and confused. BGL is 52 mg/dL and they can swallow. You should:",
    "options": [
      "Give oral glucose (or other oral carbohydrate)",
      "Administer nitroglycerin as prescribed",
      "Give aspirin 160–325 mg",
      "Give oral glucose"
    ],
    "correctIndex": 0,
    "explanation": "Conscious hypoglycemic patients who can swallow should receive oral carbohydrates."
  },
  {
    "id": 326,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 27-year-old male has life-threatening bleeding from an extremity. Direct pressure fails. You should:",
    "options": [
      "Provide BVM ventilations",
      "Insert an oropharyngeal airway",
      "Apply a tourniquet proximal to the wound",
      "Give oral glucose"
    ],
    "correctIndex": 2,
    "explanation": "Tourniquets are indicated when severe extremity bleeding is not controlled with direct pressure."
  },
  {
    "id": 327,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 44-year-old female has life-threatening bleeding from an extremity. Direct pressure fails. You should:",
    "options": [
      "Provide BVM ventilations",
      "Insert an oropharyngeal airway",
      "Apply a tourniquet proximal to the wound",
      "Assist with prescribed inhaler"
    ],
    "correctIndex": 2,
    "explanation": "Tourniquets are indicated when severe extremity bleeding is not controlled with direct pressure."
  },
  {
    "id": 328,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 59-year-old male has life-threatening bleeding from an extremity. Direct pressure fails. You should:",
    "options": [
      "Provide BVM ventilations",
      "Apply direct pressure only and wait",
      "Encourage the patient to walk to the ambulance",
      "Apply a tourniquet proximal to the wound"
    ],
    "correctIndex": 3,
    "explanation": "Tourniquets are indicated when severe extremity bleeding is not controlled with direct pressure."
  },
  {
    "id": 329,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 33-year-old female has life-threatening bleeding from an extremity. Direct pressure fails. You should:",
    "options": [
      "Give oral glucose",
      "Apply a tourniquet proximal to the wound",
      "Cool the burn briefly and cover with a dry sterile dressing",
      "Provide BVM ventilations"
    ],
    "correctIndex": 1,
    "explanation": "Tourniquets are indicated when severe extremity bleeding is not controlled with direct pressure."
  },
  {
    "id": 330,
    "level": "EMT",
    "category": "Patient Treatment",
    "text": "A 72-year-old male has life-threatening bleeding from an extremity. Direct pressure fails. You should:",
    "options": [
      "Administer nitroglycerin as prescribed",
      "Delay treatment until hospital",
      "Apply a tourniquet proximal to the wound",
      "Give oral glucose"
    ],
    "correctIndex": 2,
    "explanation": "Tourniquets are indicated when severe extremity bleeding is not controlled with direct pressure."
  },
  {
    "id": 331,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "You find a 62-year-old male unresponsive, apneic, and pulseless. Your next action is to:",
    "options": [
      "Place the patient supine immediately",
      "Assist ventilations with a BVM and oxygen",
      "Perform a detailed head-to-toe exam",
      "Begin CPR and apply the AED as soon as possible"
    ],
    "correctIndex": 3,
    "explanation": "In cardiac arrest, start CPR immediately and use an AED early."
  },
  {
    "id": 332,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "You find a 45-year-old female unresponsive, apneic, and pulseless. Your next action is to:",
    "options": [
      "Assist ventilations with a BVM and oxygen",
      "Obtain a full SAMPLE history",
      "Check blood pressure first",
      "Begin CPR and apply the AED as soon as possible"
    ],
    "correctIndex": 3,
    "explanation": "In cardiac arrest, start CPR immediately and use an AED early."
  },
  {
    "id": 333,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "You find a 73-year-old male unresponsive, apneic, and pulseless. Your next action is to:",
    "options": [
      "Place the patient supine immediately",
      "Assist ventilations with a BVM and oxygen",
      "Begin CPR and apply the AED as soon as possible",
      "Obtain a full SAMPLE history"
    ],
    "correctIndex": 2,
    "explanation": "In cardiac arrest, start CPR immediately and use an AED early."
  },
  {
    "id": 334,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "You find a 58-year-old female unresponsive, apneic, and pulseless. Your next action is to:",
    "options": [
      "Maintain position of comfort and provide oxygen with minimal agitation",
      "Assist ventilations with a BVM and oxygen",
      "Begin CPR and apply the AED as soon as possible",
      "Administer oral glucose immediately"
    ],
    "correctIndex": 2,
    "explanation": "In cardiac arrest, start CPR immediately and use an AED early."
  },
  {
    "id": 335,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "You find a 39-year-old male unresponsive, apneic, and pulseless. Your next action is to:",
    "options": [
      "Suction the airway and reposition",
      "Control the major bleeding immediately",
      "Maintain position of comfort and provide oxygen with minimal agitation",
      "Begin CPR and apply the AED as soon as possible"
    ],
    "correctIndex": 3,
    "explanation": "In cardiac arrest, start CPR immediately and use an AED early."
  },
  {
    "id": 336,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 26-year-old male is unresponsive but has a pulse. They have snoring respirations. You should first:",
    "options": [
      "Control the major bleeding immediately",
      "Open the airway (jaw-thrust if trauma suspected)",
      "Perform a detailed head-to-toe exam",
      "Apply a cervical collar before airway assessment"
    ],
    "correctIndex": 1,
    "explanation": "Airway is the priority when a patient with a pulse is not protecting their airway."
  },
  {
    "id": 337,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 55-year-old female is unresponsive but has a pulse. They have snoring respirations. You should first:",
    "options": [
      "Administer oral glucose immediately",
      "Apply a cervical collar before airway assessment",
      "Assist ventilations with a BVM and oxygen",
      "Open the airway (jaw-thrust if trauma suspected)"
    ],
    "correctIndex": 3,
    "explanation": "Airway is the priority when a patient with a pulse is not protecting their airway."
  },
  {
    "id": 338,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 7-year-old male is unresponsive but has a pulse. They have snoring respirations. You should first:",
    "options": [
      "Open the airway (jaw-thrust if trauma suspected)",
      "Control the major bleeding immediately",
      "Administer oral glucose immediately",
      "Obtain a full SAMPLE history"
    ],
    "correctIndex": 0,
    "explanation": "Airway is the priority when a patient with a pulse is not protecting their airway."
  },
  {
    "id": 339,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 81-year-old female is unresponsive but has a pulse. They have snoring respirations. You should first:",
    "options": [
      "Administer oral glucose immediately",
      "Begin CPR and apply the AED as soon as possible",
      "Perform a detailed head-to-toe exam",
      "Open the airway (jaw-thrust if trauma suspected)"
    ],
    "correctIndex": 3,
    "explanation": "Airway is the priority when a patient with a pulse is not protecting their airway."
  },
  {
    "id": 340,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 33-year-old male is unresponsive but has a pulse. They have snoring respirations. You should first:",
    "options": [
      "Check blood pressure first",
      "Place the patient supine immediately",
      "Control the major bleeding immediately",
      "Open the airway (jaw-thrust if trauma suspected)"
    ],
    "correctIndex": 3,
    "explanation": "Airway is the priority when a patient with a pulse is not protecting their airway."
  },
  {
    "id": 341,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 31-year-old male has massive external bleeding from the thigh and is pale and confused. You should FIRST:",
    "options": [
      "Administer oral glucose immediately",
      "Transport without reassessment",
      "Open the airway (jaw-thrust if trauma suspected)",
      "Control the major bleeding immediately"
    ],
    "correctIndex": 3,
    "explanation": "Massive hemorrhage is an immediate life threat and is managed early."
  },
  {
    "id": 342,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 66-year-old female has massive external bleeding from the thigh and is pale and confused. You should FIRST:",
    "options": [
      "Check blood pressure first",
      "Control the major bleeding immediately",
      "Suction the airway and reposition",
      "Begin CPR and apply the AED as soon as possible"
    ],
    "correctIndex": 1,
    "explanation": "Massive hemorrhage is an immediate life threat and is managed early."
  },
  {
    "id": 343,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 19-year-old male has massive external bleeding from the thigh and is pale and confused. You should FIRST:",
    "options": [
      "Maintain position of comfort and provide oxygen with minimal agitation",
      "Suction the airway and reposition",
      "Control the major bleeding immediately",
      "Transport without reassessment"
    ],
    "correctIndex": 2,
    "explanation": "Massive hemorrhage is an immediate life threat and is managed early."
  },
  {
    "id": 344,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 52-year-old female has massive external bleeding from the thigh and is pale and confused. You should FIRST:",
    "options": [
      "Perform a detailed head-to-toe exam",
      "Open the airway (jaw-thrust if trauma suspected)",
      "Suction the airway and reposition",
      "Control the major bleeding immediately"
    ],
    "correctIndex": 3,
    "explanation": "Massive hemorrhage is an immediate life threat and is managed early."
  },
  {
    "id": 345,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 27-year-old male has massive external bleeding from the thigh and is pale and confused. You should FIRST:",
    "options": [
      "Begin CPR and apply the AED as soon as possible",
      "Transport without reassessment",
      "Administer oral glucose immediately",
      "Control the major bleeding immediately"
    ],
    "correctIndex": 3,
    "explanation": "Massive hemorrhage is an immediate life threat and is managed early."
  },
  {
    "id": 346,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 48-year-old male is breathing 6/min with shallow chest rise and poor air movement. You should:",
    "options": [
      "Begin CPR and apply the AED as soon as possible",
      "Place the patient supine immediately",
      "Perform a detailed head-to-toe exam",
      "Assist ventilations with a BVM and high-flow oxygen"
    ],
    "correctIndex": 3,
    "explanation": "Inadequate ventilation requires assisted ventilations, not just oxygen."
  },
  {
    "id": 347,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 83-year-old female is breathing 8/min with shallow chest rise and poor air movement. You should:",
    "options": [
      "Transport without reassessment",
      "Obtain a full SAMPLE history",
      "Assist ventilations with a BVM and high-flow oxygen",
      "Maintain position of comfort and provide oxygen with minimal agitation"
    ],
    "correctIndex": 2,
    "explanation": "Inadequate ventilation requires assisted ventilations, not just oxygen."
  },
  {
    "id": 348,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 12-year-old female is breathing 7/min with shallow chest rise and poor air movement. You should:",
    "options": [
      "Administer oral glucose immediately",
      "Control the major bleeding immediately",
      "Assist ventilations with a BVM and high-flow oxygen",
      "Apply a cervical collar before airway assessment"
    ],
    "correctIndex": 2,
    "explanation": "Inadequate ventilation requires assisted ventilations, not just oxygen."
  },
  {
    "id": 349,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 60-year-old male is breathing 5/min with shallow chest rise and poor air movement. You should:",
    "options": [
      "Open the airway (jaw-thrust if trauma suspected)",
      "Assist ventilations with a BVM and high-flow oxygen",
      "Check blood pressure first",
      "Maintain position of comfort and provide oxygen with minimal agitation"
    ],
    "correctIndex": 1,
    "explanation": "Inadequate ventilation requires assisted ventilations, not just oxygen."
  },
  {
    "id": 350,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 22-year-old female is breathing 6/min with shallow chest rise and poor air movement. You should:",
    "options": [
      "Assist ventilations with a BVM and high-flow oxygen",
      "Suction the airway and reposition",
      "Administer oral glucose immediately",
      "Apply a cervical collar before airway assessment"
    ],
    "correctIndex": 0,
    "explanation": "Inadequate ventilation requires assisted ventilations, not just oxygen."
  },
  {
    "id": 351,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A child is sitting in tripod, drooling, and has inspiratory stridor. The priority is to: (Variant 1)",
    "options": [
      "Obtain a full SAMPLE history",
      "Apply a cervical collar before airway assessment",
      "Maintain position of comfort and provide oxygen with minimal agitation",
      "Transport without reassessment"
    ],
    "correctIndex": 2,
    "explanation": "Possible upper-airway obstruction; avoid agitation and do not manipulate the airway."
  },
  {
    "id": 352,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A child is sitting in tripod, drooling, and has inspiratory stridor. The priority is to: (Variant 2)",
    "options": [
      "Begin CPR and apply the AED as soon as possible",
      "Administer oral glucose immediately",
      "Transport without reassessment",
      "Maintain position of comfort and provide oxygen with minimal agitation"
    ],
    "correctIndex": 3,
    "explanation": "Possible upper-airway obstruction; avoid agitation and do not manipulate the airway."
  },
  {
    "id": 353,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A child is sitting in tripod, drooling, and has inspiratory stridor. The priority is to: (Variant 3)",
    "options": [
      "Transport without reassessment",
      "Maintain position of comfort and provide oxygen with minimal agitation",
      "Control the major bleeding immediately",
      "Administer oral glucose immediately"
    ],
    "correctIndex": 1,
    "explanation": "Possible upper-airway obstruction; avoid agitation and do not manipulate the airway."
  },
  {
    "id": 354,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A child is sitting in tripod, drooling, and has inspiratory stridor. The priority is to: (Variant 4)",
    "options": [
      "Control the major bleeding immediately",
      "Place the patient supine immediately",
      "Administer oral glucose immediately",
      "Maintain position of comfort and provide oxygen with minimal agitation"
    ],
    "correctIndex": 3,
    "explanation": "Possible upper-airway obstruction; avoid agitation and do not manipulate the airway."
  },
  {
    "id": 355,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A child is sitting in tripod, drooling, and has inspiratory stridor. The priority is to: (Variant 5)",
    "options": [
      "Open the airway (jaw-thrust if trauma suspected)",
      "Transport without reassessment",
      "Maintain position of comfort and provide oxygen with minimal agitation",
      "Suction the airway and reposition"
    ],
    "correctIndex": 2,
    "explanation": "Possible upper-airway obstruction; avoid agitation and do not manipulate the airway."
  },
  {
    "id": 356,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 33-year-old female has signs of shock (cool skin, weak radial pulse) after ABCs are addressed. Next you should:",
    "options": [
      "Check blood pressure first",
      "Suction the airway and reposition",
      "Treat for shock and transport",
      "Open the airway (jaw-thrust if trauma suspected)"
    ],
    "correctIndex": 2,
    "explanation": "After ABCs, support circulation, prevent heat loss, and transport promptly."
  },
  {
    "id": 357,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 76-year-old male has signs of shock (cool skin, weak radial pulse) after ABCs are addressed. Next you should:",
    "options": [
      "Begin CPR and apply the AED as soon as possible",
      "Treat for shock and transport",
      "Place the patient supine immediately",
      "Obtain a full SAMPLE history"
    ],
    "correctIndex": 1,
    "explanation": "After ABCs, support circulation, prevent heat loss, and transport promptly."
  },
  {
    "id": 358,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 15-year-old female has signs of shock (cool skin, weak radial pulse) after ABCs are addressed. Next you should:",
    "options": [
      "Transport without reassessment",
      "Control the major bleeding immediately",
      "Treat for shock and transport",
      "Maintain position of comfort and provide oxygen with minimal agitation"
    ],
    "correctIndex": 2,
    "explanation": "After ABCs, support circulation, prevent heat loss, and transport promptly."
  },
  {
    "id": 359,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 58-year-old male has signs of shock (cool skin, weak radial pulse) after ABCs are addressed. Next you should:",
    "options": [
      "Apply a cervical collar before airway assessment",
      "Control the major bleeding immediately",
      "Treat for shock and transport",
      "Place the patient supine immediately"
    ],
    "correctIndex": 2,
    "explanation": "After ABCs, support circulation, prevent heat loss, and transport promptly."
  },
  {
    "id": 360,
    "level": "EMT",
    "category": "Primary Assessment",
    "text": "A 42-year-old female has signs of shock (cool skin, weak radial pulse) after ABCs are addressed. Next you should:",
    "options": [
      "Treat for shock and transport",
      "Control the major bleeding immediately",
      "Check blood pressure first",
      "Perform a detailed head-to-toe exam"
    ],
    "correctIndex": 0,
    "explanation": "After ABCs, support circulation, prevent heat loss, and transport promptly."
  },
  {
    "id": 361,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Absent breath sounds on one side with hypotension and tracheal deviation MOST strongly suggests: (Variant 1)",
    "options": [
      "Septic shock",
      "Tension pneumothorax",
      "Internal hemorrhage",
      "Opioid overdose"
    ],
    "correctIndex": 1,
    "explanation": "Hypotension with unilateral absent sounds and tracheal deviation indicates tension physiology."
  },
  {
    "id": 362,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Absent breath sounds on one side with hypotension and tracheal deviation MOST strongly suggests: (Variant 2)",
    "options": [
      "Basilar skull fracture",
      "Flail chest",
      "Pulmonary embolism",
      "Tension pneumothorax"
    ],
    "correctIndex": 3,
    "explanation": "Hypotension with unilateral absent sounds and tracheal deviation indicates tension physiology."
  },
  {
    "id": 363,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Absent breath sounds on one side with hypotension and tracheal deviation MOST strongly suggests: (Variant 3)",
    "options": [
      "Diabetic ketoacidosis (DKA)",
      "COPD exacerbation",
      "Cardiac tamponade",
      "Tension pneumothorax"
    ],
    "correctIndex": 3,
    "explanation": "Hypotension with unilateral absent sounds and tracheal deviation indicates tension physiology."
  },
  {
    "id": 364,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Absent breath sounds on one side with hypotension and tracheal deviation MOST strongly suggests: (Variant 4)",
    "options": [
      "Tension pneumothorax",
      "Internal hemorrhage",
      "Asthma exacerbation",
      "Myocardial ischemia"
    ],
    "correctIndex": 0,
    "explanation": "Hypotension with unilateral absent sounds and tracheal deviation indicates tension physiology."
  },
  {
    "id": 365,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Absent breath sounds on one side with hypotension and tracheal deviation MOST strongly suggests: (Variant 5)",
    "options": [
      "Tension pneumothorax",
      "Opioid overdose",
      "Flail chest",
      "Pulmonary embolism"
    ],
    "correctIndex": 0,
    "explanation": "Hypotension with unilateral absent sounds and tracheal deviation indicates tension physiology."
  },
  {
    "id": 366,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "JVD, hypotension, and muffled heart tones after chest trauma suggests: (Variant 1)",
    "options": [
      "Flail chest",
      "Septic shock",
      "Cardiac tamponade",
      "Myocardial ischemia"
    ],
    "correctIndex": 2,
    "explanation": "Beck’s triad (JVD, hypotension, muffled tones) suggests tamponade."
  },
  {
    "id": 367,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "JVD, hypotension, and muffled heart tones after chest trauma suggests: (Variant 2)",
    "options": [
      "Pulmonary embolism",
      "Myocardial ischemia",
      "Septic shock",
      "Cardiac tamponade"
    ],
    "correctIndex": 3,
    "explanation": "Beck’s triad (JVD, hypotension, muffled tones) suggests tamponade."
  },
  {
    "id": 368,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "JVD, hypotension, and muffled heart tones after chest trauma suggests: (Variant 3)",
    "options": [
      "Diabetic ketoacidosis (DKA)",
      "Tension pneumothorax",
      "Cardiac tamponade",
      "Internal hemorrhage"
    ],
    "correctIndex": 2,
    "explanation": "Beck’s triad (JVD, hypotension, muffled tones) suggests tamponade."
  },
  {
    "id": 369,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "JVD, hypotension, and muffled heart tones after chest trauma suggests: (Variant 4)",
    "options": [
      "Asthma exacerbation",
      "Diabetic ketoacidosis (DKA)",
      "Cardiac tamponade",
      "COPD exacerbation"
    ],
    "correctIndex": 2,
    "explanation": "Beck’s triad (JVD, hypotension, muffled tones) suggests tamponade."
  },
  {
    "id": 370,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "JVD, hypotension, and muffled heart tones after chest trauma suggests: (Variant 5)",
    "options": [
      "COPD exacerbation",
      "Myocardial ischemia",
      "Cardiac tamponade",
      "Acute stroke"
    ],
    "correctIndex": 2,
    "explanation": "Beck’s triad (JVD, hypotension, muffled tones) suggests tamponade."
  },
  {
    "id": 371,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Bruising behind the ear (Battle sign) after head injury suggests: (Variant 1)",
    "options": [
      "Tension pneumothorax",
      "Internal hemorrhage",
      "Diabetic ketoacidosis (DKA)",
      "Basilar skull fracture"
    ],
    "correctIndex": 3,
    "explanation": "Battle sign/raccoon eyes can indicate a basilar skull fracture."
  },
  {
    "id": 372,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Bruising behind the ear (Battle sign) after head injury suggests: (Variant 2)",
    "options": [
      "Internal hemorrhage",
      "Opioid overdose",
      "Tension pneumothorax",
      "Basilar skull fracture"
    ],
    "correctIndex": 3,
    "explanation": "Battle sign/raccoon eyes can indicate a basilar skull fracture."
  },
  {
    "id": 373,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Bruising behind the ear (Battle sign) after head injury suggests: (Variant 3)",
    "options": [
      "Basilar skull fracture",
      "Asthma exacerbation",
      "COPD exacerbation",
      "Cardiac tamponade"
    ],
    "correctIndex": 0,
    "explanation": "Battle sign/raccoon eyes can indicate a basilar skull fracture."
  },
  {
    "id": 374,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Bruising behind the ear (Battle sign) after head injury suggests: (Variant 4)",
    "options": [
      "Pulmonary embolism",
      "Septic shock",
      "Basilar skull fracture",
      "Tension pneumothorax"
    ],
    "correctIndex": 2,
    "explanation": "Battle sign/raccoon eyes can indicate a basilar skull fracture."
  },
  {
    "id": 375,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Bruising behind the ear (Battle sign) after head injury suggests: (Variant 5)",
    "options": [
      "Cardiac tamponade",
      "Asthma exacerbation",
      "Internal hemorrhage",
      "Basilar skull fracture"
    ],
    "correctIndex": 3,
    "explanation": "Battle sign/raccoon eyes can indicate a basilar skull fracture."
  },
  {
    "id": 376,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Deep, rapid respirations with fruity breath odor most suggests: (Variant 1)",
    "options": [
      "Myocardial ischemia",
      "Pulmonary embolism",
      "Diabetic ketoacidosis (DKA)",
      "Tension pneumothorax"
    ],
    "correctIndex": 2,
    "explanation": "Kussmaul respirations and fruity breath suggest metabolic acidosis from DKA."
  },
  {
    "id": 377,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Deep, rapid respirations with fruity breath odor most suggests: (Variant 2)",
    "options": [
      "COPD exacerbation",
      "Diabetic ketoacidosis (DKA)",
      "Pulmonary embolism",
      "Internal hemorrhage"
    ],
    "correctIndex": 1,
    "explanation": "Kussmaul respirations and fruity breath suggest metabolic acidosis from DKA."
  },
  {
    "id": 378,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Deep, rapid respirations with fruity breath odor most suggests: (Variant 3)",
    "options": [
      "Cardiac tamponade",
      "COPD exacerbation",
      "Diabetic ketoacidosis (DKA)",
      "Tension pneumothorax"
    ],
    "correctIndex": 2,
    "explanation": "Kussmaul respirations and fruity breath suggest metabolic acidosis from DKA."
  },
  {
    "id": 379,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Deep, rapid respirations with fruity breath odor most suggests: (Variant 4)",
    "options": [
      "Internal hemorrhage",
      "Simple pneumothorax",
      "Basilar skull fracture",
      "Diabetic ketoacidosis (DKA)"
    ],
    "correctIndex": 3,
    "explanation": "Kussmaul respirations and fruity breath suggest metabolic acidosis from DKA."
  },
  {
    "id": 380,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Deep, rapid respirations with fruity breath odor most suggests: (Variant 5)",
    "options": [
      "Myocardial ischemia",
      "Internal hemorrhage",
      "Simple pneumothorax",
      "Diabetic ketoacidosis (DKA)"
    ],
    "correctIndex": 3,
    "explanation": "Kussmaul respirations and fruity breath suggest metabolic acidosis from DKA."
  },
  {
    "id": 381,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Paradoxical chest wall movement after blunt trauma suggests: (Variant 1)",
    "options": [
      "Acute stroke",
      "Flail chest",
      "Septic shock",
      "COPD exacerbation"
    ],
    "correctIndex": 1,
    "explanation": "A flail segment moves opposite the rest of the chest due to multiple rib fractures."
  },
  {
    "id": 382,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Paradoxical chest wall movement after blunt trauma suggests: (Variant 2)",
    "options": [
      "Flail chest",
      "Opioid overdose",
      "Acute stroke",
      "Asthma exacerbation"
    ],
    "correctIndex": 0,
    "explanation": "A flail segment moves opposite the rest of the chest due to multiple rib fractures."
  },
  {
    "id": 383,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Paradoxical chest wall movement after blunt trauma suggests: (Variant 3)",
    "options": [
      "COPD exacerbation",
      "Flail chest",
      "Internal hemorrhage",
      "Acute stroke"
    ],
    "correctIndex": 1,
    "explanation": "A flail segment moves opposite the rest of the chest due to multiple rib fractures."
  },
  {
    "id": 384,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Paradoxical chest wall movement after blunt trauma suggests: (Variant 4)",
    "options": [
      "Flail chest",
      "Diabetic ketoacidosis (DKA)",
      "Asthma exacerbation",
      "Acute stroke"
    ],
    "correctIndex": 0,
    "explanation": "A flail segment moves opposite the rest of the chest due to multiple rib fractures."
  },
  {
    "id": 385,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Paradoxical chest wall movement after blunt trauma suggests: (Variant 5)",
    "options": [
      "Diabetic ketoacidosis (DKA)",
      "Opioid overdose",
      "Internal hemorrhage",
      "Flail chest"
    ],
    "correctIndex": 3,
    "explanation": "A flail segment moves opposite the rest of the chest due to multiple rib fractures."
  },
  {
    "id": 386,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Facial droop with arm drift and abnormal speech is MOST concerning for: (Variant 1)",
    "options": [
      "Septic shock",
      "COPD exacerbation",
      "Acute stroke",
      "Pulmonary embolism"
    ],
    "correctIndex": 2,
    "explanation": "FAST findings indicate possible acute stroke and require rapid transport to a stroke center."
  },
  {
    "id": 387,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Facial droop with arm drift and abnormal speech is MOST concerning for: (Variant 2)",
    "options": [
      "Tension pneumothorax",
      "Cardiac tamponade",
      "Acute stroke",
      "Flail chest"
    ],
    "correctIndex": 2,
    "explanation": "FAST findings indicate possible acute stroke and require rapid transport to a stroke center."
  },
  {
    "id": 388,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Facial droop with arm drift and abnormal speech is MOST concerning for: (Variant 3)",
    "options": [
      "COPD exacerbation",
      "Pulmonary embolism",
      "Acute stroke",
      "Opioid overdose"
    ],
    "correctIndex": 2,
    "explanation": "FAST findings indicate possible acute stroke and require rapid transport to a stroke center."
  },
  {
    "id": 389,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Facial droop with arm drift and abnormal speech is MOST concerning for: (Variant 4)",
    "options": [
      "Asthma exacerbation",
      "Septic shock",
      "Opioid overdose",
      "Acute stroke"
    ],
    "correctIndex": 3,
    "explanation": "FAST findings indicate possible acute stroke and require rapid transport to a stroke center."
  },
  {
    "id": 390,
    "level": "EMT",
    "category": "Secondary Assessment",
    "text": "Facial droop with arm drift and abnormal speech is MOST concerning for: (Variant 5)",
    "options": [
      "Diabetic ketoacidosis (DKA)",
      "COPD exacerbation",
      "Tension pneumothorax",
      "Acute stroke"
    ],
    "correctIndex": 3,
    "explanation": "FAST findings indicate possible acute stroke and require rapid transport to a stroke center."
  },
  {
    "id": 391,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "At a chemical spill with victims down and a strong odor, you should: (Variant 1)",
    "options": [
      "Determine number of patients and request resources",
      "Approach from downwind to read placards",
      "Stage at a safe distance upwind and request HazMat",
      "Enter quickly to begin triage"
    ],
    "correctIndex": 2,
    "explanation": "Do not enter a HazMat scene; stage upwind/uphill until safe."
  },
  {
    "id": 392,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "At a chemical spill with victims down and a strong odor, you should: (Variant 2)",
    "options": [
      "Stage at a safe distance upwind and request HazMat",
      "Enter quickly to begin triage",
      "Ignore hazards and begin assessment",
      "Approach from downwind to read placards"
    ],
    "correctIndex": 0,
    "explanation": "Do not enter a HazMat scene; stage upwind/uphill until safe."
  },
  {
    "id": 393,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "At a chemical spill with victims down and a strong odor, you should: (Variant 3)",
    "options": [
      "Determine number of patients and request resources",
      "Park the ambulance close for rapid access",
      "Stage at a safe distance upwind and request HazMat",
      "Ensure scene safety before patient contact"
    ],
    "correctIndex": 2,
    "explanation": "Do not enter a HazMat scene; stage upwind/uphill until safe."
  },
  {
    "id": 394,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "At a chemical spill with victims down and a strong odor, you should: (Variant 4)",
    "options": [
      "Use appropriate PPE/BSI",
      "Ensure scene safety before patient contact",
      "Determine number of patients and request resources",
      "Stage at a safe distance upwind and request HazMat"
    ],
    "correctIndex": 3,
    "explanation": "Do not enter a HazMat scene; stage upwind/uphill until safe."
  },
  {
    "id": 395,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "At a chemical spill with victims down and a strong odor, you should: (Variant 5)",
    "options": [
      "Approach from downwind to read placards",
      "Park the ambulance close for rapid access",
      "Stage at a safe distance upwind and request HazMat",
      "Use appropriate PPE/BSI"
    ],
    "correctIndex": 2,
    "explanation": "Do not enter a HazMat scene; stage upwind/uphill until safe."
  },
  {
    "id": 396,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "A bystander reports the patient has a weapon and is threatening others. You should: (Variant 1)",
    "options": [
      "Stage at a safe distance upwind and request HazMat",
      "Stage and wait for law enforcement to secure the scene",
      "Request additional units early",
      "Ensure scene safety before patient contact"
    ],
    "correctIndex": 1,
    "explanation": "Do not enter an unsafe scene; wait until it is secured."
  },
  {
    "id": 397,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "A bystander reports the patient has a weapon and is threatening others. You should: (Variant 2)",
    "options": [
      "Approach from downwind to read placards",
      "Use appropriate PPE/BSI",
      "Stage and wait for law enforcement to secure the scene",
      "Stage at a safe distance upwind and request HazMat"
    ],
    "correctIndex": 2,
    "explanation": "Do not enter an unsafe scene; wait until it is secured."
  },
  {
    "id": 398,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "A bystander reports the patient has a weapon and is threatening others. You should: (Variant 3)",
    "options": [
      "Stage and wait for law enforcement to secure the scene",
      "Assume the scene is safe if quiet",
      "Keep everyone away and wait for the utility company",
      "Use appropriate PPE/BSI"
    ],
    "correctIndex": 0,
    "explanation": "Do not enter an unsafe scene; wait until it is secured."
  },
  {
    "id": 399,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "A bystander reports the patient has a weapon and is threatening others. You should: (Variant 4)",
    "options": [
      "Stage and wait for law enforcement to secure the scene",
      "Determine number of patients and request resources",
      "Park the ambulance close for rapid access",
      "Request additional units early"
    ],
    "correctIndex": 0,
    "explanation": "Do not enter an unsafe scene; wait until it is secured."
  },
  {
    "id": 400,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "A bystander reports the patient has a weapon and is threatening others. You should: (Variant 5)",
    "options": [
      "Ensure scene safety before patient contact",
      "Request additional units early",
      "Park the ambulance close for rapid access",
      "Stage and wait for law enforcement to secure the scene"
    ],
    "correctIndex": 3,
    "explanation": "Do not enter an unsafe scene; wait until it is secured."
  },
  {
    "id": 401,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "A downed power line is across a vehicle with a patient inside. The safest action is to: (Variant 1)",
    "options": [
      "Assume the scene is safe if quiet",
      "Keep everyone away and wait for the utility company",
      "Stage at a safe distance upwind and request HazMat",
      "Use appropriate PPE/BSI"
    ],
    "correctIndex": 1,
    "explanation": "Downed lines can energize the car/ground; wait for confirmation power is off."
  },
  {
    "id": 402,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "A downed power line is across a vehicle with a patient inside. The safest action is to: (Variant 2)",
    "options": [
      "Keep everyone away and wait for the utility company",
      "Assume the scene is safe if quiet",
      "Park the ambulance close for rapid access",
      "Enter quickly to begin triage"
    ],
    "correctIndex": 0,
    "explanation": "Downed lines can energize the car/ground; wait for confirmation power is off."
  },
  {
    "id": 403,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "A downed power line is across a vehicle with a patient inside. The safest action is to: (Variant 3)",
    "options": [
      "Request additional units early",
      "Park the ambulance close for rapid access",
      "Stage at a safe distance upwind and request HazMat",
      "Keep everyone away and wait for the utility company"
    ],
    "correctIndex": 3,
    "explanation": "Downed lines can energize the car/ground; wait for confirmation power is off."
  },
  {
    "id": 404,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "A downed power line is across a vehicle with a patient inside. The safest action is to: (Variant 4)",
    "options": [
      "Stage and wait for law enforcement to secure the scene",
      "Approach from downwind to read placards",
      "Enter quickly to begin triage",
      "Keep everyone away and wait for the utility company"
    ],
    "correctIndex": 3,
    "explanation": "Downed lines can energize the car/ground; wait for confirmation power is off."
  },
  {
    "id": 405,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "A downed power line is across a vehicle with a patient inside. The safest action is to: (Variant 5)",
    "options": [
      "Determine number of patients and request resources",
      "Park the ambulance close for rapid access",
      "Stage at a safe distance upwind and request HazMat",
      "Keep everyone away and wait for the utility company"
    ],
    "correctIndex": 3,
    "explanation": "Downed lines can energize the car/ground; wait for confirmation power is off."
  },
  {
    "id": 406,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "In a multi-patient incident, after BSI/scene safety your next step is to: (Variant 1)",
    "options": [
      "Approach from downwind to read placards",
      "Determine the number of patients and request appropriate resources",
      "Ensure scene safety before patient contact",
      "Park the ambulance close for rapid access"
    ],
    "correctIndex": 1,
    "explanation": "Early resource requests and patient count are essential for scene control."
  },
  {
    "id": 407,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "In a multi-patient incident, after BSI/scene safety your next step is to: (Variant 2)",
    "options": [
      "Ignore hazards and begin assessment",
      "Use appropriate PPE/BSI",
      "Determine the number of patients and request appropriate resources",
      "Stage at a safe distance upwind and request HazMat"
    ],
    "correctIndex": 2,
    "explanation": "Early resource requests and patient count are essential for scene control."
  },
  {
    "id": 408,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "In a multi-patient incident, after BSI/scene safety your next step is to: (Variant 3)",
    "options": [
      "Enter quickly to begin triage",
      "Stage and wait for law enforcement to secure the scene",
      "Ensure scene safety before patient contact",
      "Determine the number of patients and request appropriate resources"
    ],
    "correctIndex": 3,
    "explanation": "Early resource requests and patient count are essential for scene control."
  },
  {
    "id": 409,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "In a multi-patient incident, after BSI/scene safety your next step is to: (Variant 4)",
    "options": [
      "Stage and wait for law enforcement to secure the scene",
      "Determine the number of patients and request appropriate resources",
      "Assume the scene is safe if quiet",
      "Request additional units early"
    ],
    "correctIndex": 1,
    "explanation": "Early resource requests and patient count are essential for scene control."
  },
  {
    "id": 410,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "In a multi-patient incident, after BSI/scene safety your next step is to: (Variant 5)",
    "options": [
      "Ignore hazards and begin assessment",
      "Stage at a safe distance upwind and request HazMat",
      "Ensure scene safety before patient contact",
      "Determine the number of patients and request appropriate resources"
    ],
    "correctIndex": 3,
    "explanation": "Early resource requests and patient count are essential for scene control."
  },
  {
    "id": 411,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "Shattered windshield and a deformed steering wheel suggest high risk of: (Variant 1)",
    "options": [
      "Assume the scene is safe if quiet",
      "Ensure scene safety before patient contact",
      "Request additional units early",
      "Head and chest injuries"
    ],
    "correctIndex": 3,
    "explanation": "These findings indicate significant energy transfer and possible serious trauma."
  },
  {
    "id": 412,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "Shattered windshield and a deformed steering wheel suggest high risk of: (Variant 2)",
    "options": [
      "Head and chest injuries",
      "Park the ambulance close for rapid access",
      "Keep everyone away and wait for the utility company",
      "Stage at a safe distance upwind and request HazMat"
    ],
    "correctIndex": 0,
    "explanation": "These findings indicate significant energy transfer and possible serious trauma."
  },
  {
    "id": 413,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "Shattered windshield and a deformed steering wheel suggest high risk of: (Variant 3)",
    "options": [
      "Park the ambulance close for rapid access",
      "Determine number of patients and request resources",
      "Use appropriate PPE/BSI",
      "Head and chest injuries"
    ],
    "correctIndex": 3,
    "explanation": "These findings indicate significant energy transfer and possible serious trauma."
  },
  {
    "id": 414,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "Shattered windshield and a deformed steering wheel suggest high risk of: (Variant 4)",
    "options": [
      "Use appropriate PPE/BSI",
      "Park the ambulance close for rapid access",
      "Stage and wait for law enforcement to secure the scene",
      "Head and chest injuries"
    ],
    "correctIndex": 3,
    "explanation": "These findings indicate significant energy transfer and possible serious trauma."
  },
  {
    "id": 415,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "Shattered windshield and a deformed steering wheel suggest high risk of: (Variant 5)",
    "options": [
      "Ensure scene safety before patient contact",
      "Enter quickly to begin triage",
      "Head and chest injuries",
      "Keep everyone away and wait for the utility company"
    ],
    "correctIndex": 2,
    "explanation": "These findings indicate significant energy transfer and possible serious trauma."
  },
  {
    "id": 416,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "An NFPA 704 placard shows a red 4. This indicates: (Variant 1)",
    "options": [
      "Use appropriate PPE/BSI",
      "Stage and wait for law enforcement to secure the scene",
      "Extreme flammability hazard",
      "Ignore hazards and begin assessment"
    ],
    "correctIndex": 2,
    "explanation": "NFPA red = flammability; 4 is the highest hazard."
  },
  {
    "id": 417,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "An NFPA 704 placard shows a red 4. This indicates: (Variant 2)",
    "options": [
      "Stage and wait for law enforcement to secure the scene",
      "Determine number of patients and request resources",
      "Assume the scene is safe if quiet",
      "Extreme flammability hazard"
    ],
    "correctIndex": 3,
    "explanation": "NFPA red = flammability; 4 is the highest hazard."
  },
  {
    "id": 418,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "An NFPA 704 placard shows a red 4. This indicates: (Variant 3)",
    "options": [
      "Keep everyone away and wait for the utility company",
      "Enter quickly to begin triage",
      "Extreme flammability hazard",
      "Assume the scene is safe if quiet"
    ],
    "correctIndex": 2,
    "explanation": "NFPA red = flammability; 4 is the highest hazard."
  },
  {
    "id": 419,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "An NFPA 704 placard shows a red 4. This indicates: (Variant 4)",
    "options": [
      "Enter quickly to begin triage",
      "Extreme flammability hazard",
      "Ensure scene safety before patient contact",
      "Approach from downwind to read placards"
    ],
    "correctIndex": 1,
    "explanation": "NFPA red = flammability; 4 is the highest hazard."
  },
  {
    "id": 420,
    "level": "EMT",
    "category": "Scene Size-Up",
    "text": "An NFPA 704 placard shows a red 4. This indicates: (Variant 5)",
    "options": [
      "Assume the scene is safe if quiet",
      "Use appropriate PPE/BSI",
      "Extreme flammability hazard",
      "Request additional units early"
    ],
    "correctIndex": 2,
    "explanation": "NFPA red = flammability; 4 is the highest hazard."
  },
  {
    "id": 421,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "An alert, oriented adult refuses transport after risks are explained. The MOST important next step is to: (Variant 1)",
    "options": [
      "HIPAA/patient confidentiality",
      "Give a structured radio report (age/sex, complaint, vitals, treatment)",
      "Incident Commander",
      "Document refusal thoroughly and have the patient sign"
    ],
    "correctIndex": 3,
    "explanation": "Refusals carry high liability; document capacity, risks, and understanding."
  },
  {
    "id": 422,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "An alert, oriented adult refuses transport after risks are explained. The MOST important next step is to: (Variant 2)",
    "options": [
      "Abandonment",
      "Leave without documenting",
      "Document refusal thoroughly and have the patient sign",
      "Incident Commander"
    ],
    "correctIndex": 2,
    "explanation": "Refusals carry high liability; document capacity, risks, and understanding."
  },
  {
    "id": 423,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "An alert, oriented adult refuses transport after risks are explained. The MOST important next step is to: (Variant 3)",
    "options": [
      "Give a structured radio report (age/sex, complaint, vitals, treatment)",
      "Act outside scope to help faster",
      "Drive with due regard and control intersections",
      "Document refusal thoroughly and have the patient sign"
    ],
    "correctIndex": 3,
    "explanation": "Refusals carry high liability; document capacity, risks, and understanding."
  },
  {
    "id": 424,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "An alert, oriented adult refuses transport after risks are explained. The MOST important next step is to: (Variant 4)",
    "options": [
      "Abandonment",
      "HIPAA/patient confidentiality",
      "Withhold CPR per valid DNR but provide comfort care",
      "Document refusal thoroughly and have the patient sign"
    ],
    "correctIndex": 3,
    "explanation": "Refusals carry high liability; document capacity, risks, and understanding."
  },
  {
    "id": 425,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "An alert, oriented adult refuses transport after risks are explained. The MOST important next step is to: (Variant 5)",
    "options": [
      "Implied consent",
      "Incident Commander",
      "Leave without documenting",
      "Document refusal thoroughly and have the patient sign"
    ],
    "correctIndex": 3,
    "explanation": "Refusals carry high liability; document capacity, risks, and understanding."
  },
  {
    "id": 426,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "An unconscious crash patient needs emergency care. Consent is best described as:",
    "options": [
      "Give a structured radio report (age/sex, complaint, vitals, treatment)",
      "Incident Commander",
      "Implied consent",
      "Delay reporting an exposure"
    ],
    "correctIndex": 2,
    "explanation": "Unconscious patients needing emergency care are treated under implied consent."
  },
  {
    "id": 427,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "An unconscious crash patient needs emergency care. Consent is best described as: [Q427]",
    "options": [
      "Act outside scope to help faster",
      "Document refusal thoroughly and have the patient sign",
      "HIPAA/patient confidentiality",
      "Implied consent"
    ],
    "correctIndex": 3,
    "explanation": "Unconscious patients needing emergency care are treated under implied consent."
  },
  {
    "id": 428,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "An unconscious crash patient needs emergency care. Consent is best described as: [Q428]",
    "options": [
      "Implied consent",
      "Document refusal thoroughly and have the patient sign",
      "Incident Commander",
      "Give a structured radio report (age/sex, complaint, vitals, treatment)"
    ],
    "correctIndex": 0,
    "explanation": "Unconscious patients needing emergency care are treated under implied consent."
  },
  {
    "id": 429,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "An unconscious crash patient needs emergency care. Consent is best described as: [Q429]",
    "options": [
      "HIPAA/patient confidentiality",
      "Implied consent",
      "Abandonment",
      "Give a structured radio report (age/sex, complaint, vitals, treatment)"
    ],
    "correctIndex": 1,
    "explanation": "Unconscious patients needing emergency care are treated under implied consent."
  },
  {
    "id": 430,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "An unconscious crash patient needs emergency care. Consent is best described as: [Q430]",
    "options": [
      "HIPAA/patient confidentiality",
      "Implied consent",
      "Give a structured radio report (age/sex, complaint, vitals, treatment)",
      "Abandonment"
    ],
    "correctIndex": 1,
    "explanation": "Unconscious patients needing emergency care are treated under implied consent."
  },
  {
    "id": 431,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "Leaving a patient after initiating care without appropriate transfer to equal/higher care is called: (Variant 1)",
    "options": [
      "Share patient info with family without permission",
      "Incident Commander",
      "Abandonment",
      "Drive with due regard and control intersections"
    ],
    "correctIndex": 2,
    "explanation": "Abandonment is terminating care without proper transfer."
  },
  {
    "id": 432,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "Leaving a patient after initiating care without appropriate transfer to equal/higher care is called: (Variant 2)",
    "options": [
      "HIPAA/patient confidentiality",
      "Implied consent",
      "Share patient info with family without permission",
      "Abandonment"
    ],
    "correctIndex": 3,
    "explanation": "Abandonment is terminating care without proper transfer."
  },
  {
    "id": 433,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "Leaving a patient after initiating care without appropriate transfer to equal/higher care is called: (Variant 3)",
    "options": [
      "Drive with due regard and control intersections",
      "Abandonment",
      "HIPAA/patient confidentiality",
      "Share patient info with family without permission"
    ],
    "correctIndex": 1,
    "explanation": "Abandonment is terminating care without proper transfer."
  },
  {
    "id": 434,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "Leaving a patient after initiating care without appropriate transfer to equal/higher care is called: (Variant 4)",
    "options": [
      "HIPAA/patient confidentiality",
      "Implied consent",
      "Leave without documenting",
      "Abandonment"
    ],
    "correctIndex": 3,
    "explanation": "Abandonment is terminating care without proper transfer."
  },
  {
    "id": 435,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "Leaving a patient after initiating care without appropriate transfer to equal/higher care is called: (Variant 5)",
    "options": [
      "Implied consent",
      "Drive with due regard and control intersections",
      "Abandonment",
      "Share patient info with family without permission"
    ],
    "correctIndex": 2,
    "explanation": "Abandonment is terminating care without proper transfer."
  },
  {
    "id": 436,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "Sharing patient information with someone not involved in care violates: (Variant 1)",
    "options": [
      "HIPAA/patient confidentiality",
      "Delay reporting an exposure",
      "Withhold CPR per valid DNR but provide comfort care",
      "Share patient info with family without permission"
    ],
    "correctIndex": 0,
    "explanation": "Protected health information must be kept confidential except for care needs."
  },
  {
    "id": 437,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "Sharing patient information with someone not involved in care violates: (Variant 2)",
    "options": [
      "Delay reporting an exposure",
      "HIPAA/patient confidentiality",
      "Abandonment",
      "Document refusal thoroughly and have the patient sign"
    ],
    "correctIndex": 1,
    "explanation": "Protected health information must be kept confidential except for care needs."
  },
  {
    "id": 438,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "Sharing patient information with someone not involved in care violates: (Variant 3)",
    "options": [
      "HIPAA/patient confidentiality",
      "Document refusal thoroughly and have the patient sign",
      "Act outside scope to help faster",
      "Incident Commander"
    ],
    "correctIndex": 0,
    "explanation": "Protected health information must be kept confidential except for care needs."
  },
  {
    "id": 439,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "Sharing patient information with someone not involved in care violates: (Variant 4)",
    "options": [
      "Share patient info with family without permission",
      "Delay reporting an exposure",
      "Abandonment",
      "HIPAA/patient confidentiality"
    ],
    "correctIndex": 3,
    "explanation": "Protected health information must be kept confidential except for care needs."
  },
  {
    "id": 440,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "Sharing patient information with someone not involved in care violates: (Variant 5)",
    "options": [
      "Implied consent",
      "Leave without documenting",
      "HIPAA/patient confidentiality",
      "Act outside scope to help faster"
    ],
    "correctIndex": 2,
    "explanation": "Protected health information must be kept confidential except for care needs."
  },
  {
    "id": 441,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "The MOST effective way to reduce ambulance crash risk at intersections during emergency response is to: (Variant 1)",
    "options": [
      "Share patient info with family without permission",
      "Implied consent",
      "Drive with due regard and control intersections (stop as required)",
      "HIPAA/patient confidentiality"
    ],
    "correctIndex": 2,
    "explanation": "Most serious EMS crashes occur at intersections; due regard reduces risk."
  },
  {
    "id": 442,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "The MOST effective way to reduce ambulance crash risk at intersections during emergency response is to: (Variant 2)",
    "options": [
      "Implied consent",
      "Give a structured radio report (age/sex, complaint, vitals, treatment)",
      "Abandonment",
      "Drive with due regard and control intersections (stop as required)"
    ],
    "correctIndex": 3,
    "explanation": "Most serious EMS crashes occur at intersections; due regard reduces risk."
  },
  {
    "id": 443,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "The MOST effective way to reduce ambulance crash risk at intersections during emergency response is to: (Variant 3)",
    "options": [
      "Document refusal thoroughly and have the patient sign",
      "Drive with due regard and control intersections (stop as required)",
      "Incident Commander",
      "Leave without documenting"
    ],
    "correctIndex": 1,
    "explanation": "Most serious EMS crashes occur at intersections; due regard reduces risk."
  },
  {
    "id": 444,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "The MOST effective way to reduce ambulance crash risk at intersections during emergency response is to: (Variant 4)",
    "options": [
      "Incident Commander",
      "Drive with due regard and control intersections (stop as required)",
      "Drive with due regard and control intersections",
      "HIPAA/patient confidentiality"
    ],
    "correctIndex": 1,
    "explanation": "Most serious EMS crashes occur at intersections; due regard reduces risk."
  },
  {
    "id": 445,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "The MOST effective way to reduce ambulance crash risk at intersections during emergency response is to: (Variant 5)",
    "options": [
      "Delay reporting an exposure",
      "Act outside scope to help faster",
      "Drive with due regard and control intersections (stop as required)",
      "Drive with due regard and control intersections"
    ],
    "correctIndex": 2,
    "explanation": "Most serious EMS crashes occur at intersections; due regard reduces risk."
  },
  {
    "id": 446,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "In the Incident Command System, the person responsible for overall incident management is the: (Variant 1)",
    "options": [
      "Drive with due regard and control intersections",
      "Delay reporting an exposure",
      "Incident Commander",
      "Abandonment"
    ],
    "correctIndex": 2,
    "explanation": "The Incident Commander has overall responsibility and authority at the incident."
  },
  {
    "id": 447,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "In the Incident Command System, the person responsible for overall incident management is the: (Variant 2)",
    "options": [
      "Drive with due regard and control intersections",
      "Document refusal thoroughly and have the patient sign",
      "Share patient info with family without permission",
      "Incident Commander"
    ],
    "correctIndex": 3,
    "explanation": "The Incident Commander has overall responsibility and authority at the incident."
  },
  {
    "id": 448,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "In the Incident Command System, the person responsible for overall incident management is the: (Variant 3)",
    "options": [
      "Implied consent",
      "Withhold CPR per valid DNR but provide comfort care",
      "Incident Commander",
      "Give a structured radio report (age/sex, complaint, vitals, treatment)"
    ],
    "correctIndex": 2,
    "explanation": "The Incident Commander has overall responsibility and authority at the incident."
  },
  {
    "id": 449,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "In the Incident Command System, the person responsible for overall incident management is the: (Variant 4)",
    "options": [
      "Abandonment",
      "Document refusal thoroughly and have the patient sign",
      "Incident Commander",
      "Leave without documenting"
    ],
    "correctIndex": 2,
    "explanation": "The Incident Commander has overall responsibility and authority at the incident."
  },
  {
    "id": 450,
    "level": "EMT",
    "category": "EMS Operations",
    "text": "In the Incident Command System, the person responsible for overall incident management is the: (Variant 5)",
    "options": [
      "Act outside scope to help faster",
      "Incident Commander",
      "Document refusal thoroughly and have the patient sign",
      "Leave without documenting"
    ],
    "correctIndex": 1,
    "explanation": "The Incident Commander has overall responsibility and authority at the incident."
  },
  {
    "id": 451,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A 66-year-old male has fever, suspected infection, and hypotension 84/50. After oxygen, the priority is:",
    "options": [
      "Give magnesium sulfate",
      "Give sodium bicarbonate",
      "IV fluid resuscitation with reassessment",
      "Delay treatment until hospital"
    ],
    "correctIndex": 2,
    "explanation": "Septic shock requires early fluids to restore perfusion."
  },
  {
    "id": 452,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A 43-year-old female has fever, suspected infection, and hypotension 88/56. After oxygen, the priority is:",
    "options": [
      "Assist ventilations and monitor EtCO2",
      "Calcium (chloride/gluconate) for membrane stabilization",
      "IV fluid resuscitation with reassessment",
      "Start a beta-blocker"
    ],
    "correctIndex": 2,
    "explanation": "Septic shock requires early fluids to restore perfusion."
  },
  {
    "id": 453,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A 71-year-old female has fever, suspected infection, and hypotension 90/52. After oxygen, the priority is:",
    "options": [
      "IV fluid resuscitation with reassessment",
      "Calcium (chloride/gluconate) for membrane stabilization",
      "Give magnesium sulfate",
      "Give sodium bicarbonate"
    ],
    "correctIndex": 0,
    "explanation": "Septic shock requires early fluids to restore perfusion."
  },
  {
    "id": 454,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A 58-year-old male has fever, suspected infection, and hypotension 82/48. After oxygen, the priority is:",
    "options": [
      "Start a beta-blocker",
      "Give furosemide immediately",
      "IV fluid resuscitation with reassessment",
      "Assist ventilations and monitor EtCO2"
    ],
    "correctIndex": 2,
    "explanation": "Septic shock requires early fluids to restore perfusion."
  },
  {
    "id": 455,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A 35-year-old female has fever, suspected infection, and hypotension 86/54. After oxygen, the priority is:",
    "options": [
      "Give sodium bicarbonate",
      "Assist ventilations and monitor EtCO2",
      "IV fluid resuscitation with reassessment",
      "Give magnesium sulfate"
    ],
    "correctIndex": 2,
    "explanation": "Septic shock requires early fluids to restore perfusion."
  },
  {
    "id": 456,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A dialysis patient has peaked T waves and a widening QRS. Immediate stabilizing medication is: (Variant 1)",
    "options": [
      "Delay treatment until hospital",
      "Give furosemide immediately",
      "Calcium (chloride/gluconate) for membrane stabilization",
      "Give sodium bicarbonate"
    ],
    "correctIndex": 2,
    "explanation": "Calcium stabilizes the myocardium in life-threatening hyperkalemia."
  },
  {
    "id": 457,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A dialysis patient has peaked T waves and a widening QRS. Immediate stabilizing medication is: (Variant 2)",
    "options": [
      "Give magnesium sulfate",
      "Assist ventilations and monitor EtCO2",
      "Give adenosine",
      "Calcium (chloride/gluconate) for membrane stabilization"
    ],
    "correctIndex": 3,
    "explanation": "Calcium stabilizes the myocardium in life-threatening hyperkalemia."
  },
  {
    "id": 458,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A dialysis patient has peaked T waves and a widening QRS. Immediate stabilizing medication is: (Variant 3)",
    "options": [
      "Administer nitroglycerin for hypotension",
      "Calcium (chloride/gluconate) for membrane stabilization",
      "Delay treatment until hospital",
      "IV fluid resuscitation with reassessment"
    ],
    "correctIndex": 1,
    "explanation": "Calcium stabilizes the myocardium in life-threatening hyperkalemia."
  },
  {
    "id": 459,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A dialysis patient has peaked T waves and a widening QRS. Immediate stabilizing medication is: (Variant 4)",
    "options": [
      "Administer nitroglycerin for hypotension",
      "Assist ventilations and monitor EtCO2",
      "Calcium (chloride/gluconate) for membrane stabilization",
      "Start epinephrine infusion / repeat IM epi and give IV fluids"
    ],
    "correctIndex": 2,
    "explanation": "Calcium stabilizes the myocardium in life-threatening hyperkalemia."
  },
  {
    "id": 460,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A dialysis patient has peaked T waves and a widening QRS. Immediate stabilizing medication is: (Variant 5)",
    "options": [
      "Start epinephrine infusion / repeat IM epi and give IV fluids",
      "Give adenosine",
      "Treat hypoglycemia and reassess neuro status",
      "Calcium (chloride/gluconate) for membrane stabilization"
    ],
    "correctIndex": 3,
    "explanation": "Calcium stabilizes the myocardium in life-threatening hyperkalemia."
  },
  {
    "id": 461,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A suspected stroke patient has last known well <1 hour but BGL 54 mg/dL. Next step is to:",
    "options": [
      "Start epinephrine infusion / repeat IM epi and give IV fluids",
      "Give sodium bicarbonate",
      "Give magnesium sulfate",
      "Treat hypoglycemia and reassess neuro status"
    ],
    "correctIndex": 3,
    "explanation": "Hypoglycemia can mimic stroke; correct glucose promptly while expediting care."
  },
  {
    "id": 462,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A suspected stroke patient has last known well <1 hour but BGL 48 mg/dL. Next step is to:",
    "options": [
      "Give furosemide immediately",
      "Give sodium bicarbonate",
      "Start epinephrine infusion / repeat IM epi and give IV fluids",
      "Treat hypoglycemia and reassess neuro status"
    ],
    "correctIndex": 3,
    "explanation": "Hypoglycemia can mimic stroke; correct glucose promptly while expediting care."
  },
  {
    "id": 463,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A suspected stroke patient has last known well <1 hour but BGL 58 mg/dL. Next step is to:",
    "options": [
      "Give sodium bicarbonate",
      "Treat hypoglycemia and reassess neuro status",
      "Administer nitroglycerin for hypotension",
      "Give magnesium sulfate"
    ],
    "correctIndex": 1,
    "explanation": "Hypoglycemia can mimic stroke; correct glucose promptly while expediting care."
  },
  {
    "id": 464,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A suspected stroke patient has last known well <1 hour but BGL 44 mg/dL. Next step is to:",
    "options": [
      "Calcium (chloride/gluconate) for membrane stabilization",
      "Start epinephrine infusion / repeat IM epi and give IV fluids",
      "Start a beta-blocker",
      "Treat hypoglycemia and reassess neuro status"
    ],
    "correctIndex": 3,
    "explanation": "Hypoglycemia can mimic stroke; correct glucose promptly while expediting care."
  },
  {
    "id": 465,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A suspected stroke patient has last known well <1 hour but BGL 52 mg/dL. Next step is to:",
    "options": [
      "Give furosemide immediately",
      "Give magnesium sulfate",
      "Treat hypoglycemia and reassess neuro status",
      "Administer nitroglycerin for hypotension"
    ],
    "correctIndex": 2,
    "explanation": "Hypoglycemia can mimic stroke; correct glucose promptly while expediting care."
  },
  {
    "id": 466,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A COPD patient is somnolent with EtCO2 62 mmHg. Best initial intervention is:",
    "options": [
      "Give furosemide immediately",
      "Start a beta-blocker",
      "Assist ventilations and monitor EtCO2",
      "Start epinephrine infusion / repeat IM epi and give IV fluids"
    ],
    "correctIndex": 2,
    "explanation": "Hypercapnic ventilatory failure needs ventilatory support; avoid hyperventilation."
  },
  {
    "id": 467,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A COPD patient is somnolent with EtCO2 68 mmHg. Best initial intervention is:",
    "options": [
      "Treat hypoglycemia and reassess neuro status",
      "Give adenosine",
      "IV fluid resuscitation with reassessment",
      "Assist ventilations and monitor EtCO2"
    ],
    "correctIndex": 3,
    "explanation": "Hypercapnic ventilatory failure needs ventilatory support; avoid hyperventilation."
  },
  {
    "id": 468,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A COPD patient is somnolent with EtCO2 70 mmHg. Best initial intervention is:",
    "options": [
      "Start a beta-blocker",
      "Start epinephrine infusion / repeat IM epi and give IV fluids",
      "Assist ventilations and monitor EtCO2",
      "Calcium (chloride/gluconate) for membrane stabilization"
    ],
    "correctIndex": 2,
    "explanation": "Hypercapnic ventilatory failure needs ventilatory support; avoid hyperventilation."
  },
  {
    "id": 469,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A COPD patient is somnolent with EtCO2 60 mmHg. Best initial intervention is:",
    "options": [
      "Delay treatment until hospital",
      "Calcium (chloride/gluconate) for membrane stabilization",
      "Assist ventilations and monitor EtCO2",
      "Give adenosine"
    ],
    "correctIndex": 2,
    "explanation": "Hypercapnic ventilatory failure needs ventilatory support; avoid hyperventilation."
  },
  {
    "id": 470,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "A COPD patient is somnolent with EtCO2 66 mmHg. Best initial intervention is:",
    "options": [
      "Give magnesium sulfate",
      "Give adenosine",
      "Give sodium bicarbonate",
      "Assist ventilations and monitor EtCO2"
    ],
    "correctIndex": 3,
    "explanation": "Hypercapnic ventilatory failure needs ventilatory support; avoid hyperventilation."
  },
  {
    "id": 471,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "Anaphylaxis persists with hypotension after IM epinephrine. Next best treatment is: (Variant 1)",
    "options": [
      "Administer nitroglycerin for hypotension",
      "Give furosemide immediately",
      "Delay treatment until hospital",
      "Start epinephrine infusion / repeat IM epi and give IV fluids"
    ],
    "correctIndex": 3,
    "explanation": "Refractory anaphylactic shock requires more epinephrine and volume resuscitation."
  },
  {
    "id": 472,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "Anaphylaxis persists with hypotension after IM epinephrine. Next best treatment is: (Variant 2)",
    "options": [
      "Give adenosine",
      "Treat hypoglycemia and reassess neuro status",
      "Start epinephrine infusion / repeat IM epi and give IV fluids",
      "Give sodium bicarbonate"
    ],
    "correctIndex": 2,
    "explanation": "Refractory anaphylactic shock requires more epinephrine and volume resuscitation."
  },
  {
    "id": 473,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "Anaphylaxis persists with hypotension after IM epinephrine. Next best treatment is: (Variant 3)",
    "options": [
      "Start epinephrine infusion / repeat IM epi and give IV fluids",
      "Administer nitroglycerin for hypotension",
      "Give sodium bicarbonate",
      "Assist ventilations and monitor EtCO2"
    ],
    "correctIndex": 0,
    "explanation": "Refractory anaphylactic shock requires more epinephrine and volume resuscitation."
  },
  {
    "id": 474,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "Anaphylaxis persists with hypotension after IM epinephrine. Next best treatment is: (Variant 4)",
    "options": [
      "Assist ventilations and monitor EtCO2",
      "Start a beta-blocker",
      "Start epinephrine infusion / repeat IM epi and give IV fluids",
      "Delay treatment until hospital"
    ],
    "correctIndex": 2,
    "explanation": "Refractory anaphylactic shock requires more epinephrine and volume resuscitation."
  },
  {
    "id": 475,
    "level": "Paramedic",
    "category": "Clinical Judgment",
    "text": "Anaphylaxis persists with hypotension after IM epinephrine. Next best treatment is: (Variant 5)",
    "options": [
      "Administer nitroglycerin for hypotension",
      "Start epinephrine infusion / repeat IM epi and give IV fluids",
      "Start a beta-blocker",
      "Give sodium bicarbonate"
    ],
    "correctIndex": 1,
    "explanation": "Refractory anaphylactic shock requires more epinephrine and volume resuscitation."
  },
  {
    "id": 476,
    "level": "Paramedic",
    "category": "Airway",
    "text": "After intubation, the MOST reliable confirmation of tracheal placement is: (Variant 1)",
    "options": [
      "Pulse oximetry improvement",
      "Place an OPA without suction",
      "Ventilate about 10/min with chest rise",
      "Continuous waveform capnography"
    ],
    "correctIndex": 3,
    "explanation": "Waveform ETCO2 is the most reliable confirmation and ongoing monitor of ventilation."
  },
  {
    "id": 477,
    "level": "Paramedic",
    "category": "Airway",
    "text": "After intubation, the MOST reliable confirmation of tracheal placement is: (Variant 2)",
    "options": [
      "Auscultation only",
      "EtCO2 10–20 mmHg is normal",
      "Suction the airway and reposition",
      "Continuous waveform capnography"
    ],
    "correctIndex": 3,
    "explanation": "Waveform ETCO2 is the most reliable confirmation and ongoing monitor of ventilation."
  },
  {
    "id": 478,
    "level": "Paramedic",
    "category": "Airway",
    "text": "After intubation, the MOST reliable confirmation of tracheal placement is: (Variant 3)",
    "options": [
      "Auscultation only",
      "Normal EtCO2 35–45 mmHg",
      "EtCO2 10–20 mmHg is normal",
      "Continuous waveform capnography"
    ],
    "correctIndex": 3,
    "explanation": "Waveform ETCO2 is the most reliable confirmation and ongoing monitor of ventilation."
  },
  {
    "id": 479,
    "level": "Paramedic",
    "category": "Airway",
    "text": "After intubation, the MOST reliable confirmation of tracheal placement is: (Variant 4)",
    "options": [
      "Pulse oximetry improvement",
      "Fogging in the tube",
      "Place an OPA without suction",
      "Continuous waveform capnography"
    ],
    "correctIndex": 3,
    "explanation": "Waveform ETCO2 is the most reliable confirmation and ongoing monitor of ventilation."
  },
  {
    "id": 480,
    "level": "Paramedic",
    "category": "Airway",
    "text": "After intubation, the MOST reliable confirmation of tracheal placement is: (Variant 5)",
    "options": [
      "Prepare cricothyrotomy per protocol",
      "Ventilate 30/min regardless of chest rise",
      "Nasotracheal intubation in facial trauma",
      "Continuous waveform capnography"
    ],
    "correctIndex": 3,
    "explanation": "Waveform ETCO2 is the most reliable confirmation and ongoing monitor of ventilation."
  },
  {
    "id": 481,
    "level": "Paramedic",
    "category": "Airway",
    "text": "For an adult with a pulse being ventilated, a recommended ventilation rate is: (Variant 1)",
    "options": [
      "Normal EtCO2 35–45 mmHg",
      "Ventilate about 10/min with chest rise",
      "Ventilate 30/min regardless of chest rise",
      "Continuous waveform capnography"
    ],
    "correctIndex": 1,
    "explanation": "Avoid hyperventilation; target ~10 breaths/min in adults with a pulse."
  },
  {
    "id": 482,
    "level": "Paramedic",
    "category": "Airway",
    "text": "For an adult with a pulse being ventilated, a recommended ventilation rate is: (Variant 2)",
    "options": [
      "Place an OPA without suction",
      "Ventilate about 10/min with chest rise",
      "EtCO2 10–20 mmHg is normal",
      "Continuous waveform capnography"
    ],
    "correctIndex": 1,
    "explanation": "Avoid hyperventilation; target ~10 breaths/min in adults with a pulse."
  },
  {
    "id": 483,
    "level": "Paramedic",
    "category": "Airway",
    "text": "For an adult with a pulse being ventilated, a recommended ventilation rate is: (Variant 3)",
    "options": [
      "EtCO2 10–20 mmHg is normal",
      "Nasotracheal intubation in facial trauma",
      "Ventilate about 10/min with chest rise",
      "Auscultation only"
    ],
    "correctIndex": 2,
    "explanation": "Avoid hyperventilation; target ~10 breaths/min in adults with a pulse."
  },
  {
    "id": 484,
    "level": "Paramedic",
    "category": "Airway",
    "text": "For an adult with a pulse being ventilated, a recommended ventilation rate is: (Variant 4)",
    "options": [
      "Continuous waveform capnography",
      "Ventilate about 10/min with chest rise",
      "Suction the airway and reposition",
      "Auscultation only"
    ],
    "correctIndex": 1,
    "explanation": "Avoid hyperventilation; target ~10 breaths/min in adults with a pulse."
  },
  {
    "id": 485,
    "level": "Paramedic",
    "category": "Airway",
    "text": "For an adult with a pulse being ventilated, a recommended ventilation rate is: (Variant 5)",
    "options": [
      "Ventilate about 10/min with chest rise",
      "Continuous waveform capnography",
      "Ventilate 30/min regardless of chest rise",
      "Pulse oximetry improvement"
    ],
    "correctIndex": 0,
    "explanation": "Avoid hyperventilation; target ~10 breaths/min in adults with a pulse."
  },
  {
    "id": 486,
    "level": "Paramedic",
    "category": "Airway",
    "text": "A patient has massive facial trauma and you cannot ventilate or intubate. Definitive airway option is: (Variant 1)",
    "options": [
      "Prepare cricothyrotomy per protocol",
      "Pulse oximetry improvement",
      "EtCO2 10–20 mmHg is normal",
      "Continuous waveform capnography"
    ],
    "correctIndex": 0,
    "explanation": "Cannot intubate/cannot ventilate requires a surgical airway when indicated and trained."
  },
  {
    "id": 487,
    "level": "Paramedic",
    "category": "Airway",
    "text": "A patient has massive facial trauma and you cannot ventilate or intubate. Definitive airway option is: (Variant 2)",
    "options": [
      "Ventilate 30/min regardless of chest rise",
      "Auscultation only",
      "Fogging in the tube",
      "Prepare cricothyrotomy per protocol"
    ],
    "correctIndex": 3,
    "explanation": "Cannot intubate/cannot ventilate requires a surgical airway when indicated and trained."
  },
  {
    "id": 488,
    "level": "Paramedic",
    "category": "Airway",
    "text": "A patient has massive facial trauma and you cannot ventilate or intubate. Definitive airway option is: (Variant 3)",
    "options": [
      "Nasotracheal intubation in facial trauma",
      "Prepare cricothyrotomy per protocol",
      "Pulse oximetry improvement",
      "EtCO2 10–20 mmHg is normal"
    ],
    "correctIndex": 1,
    "explanation": "Cannot intubate/cannot ventilate requires a surgical airway when indicated and trained."
  },
  {
    "id": 489,
    "level": "Paramedic",
    "category": "Airway",
    "text": "A patient has massive facial trauma and you cannot ventilate or intubate. Definitive airway option is: (Variant 4)",
    "options": [
      "Ventilate about 10/min with chest rise",
      "Normal EtCO2 35–45 mmHg",
      "Nasotracheal intubation in facial trauma",
      "Prepare cricothyrotomy per protocol"
    ],
    "correctIndex": 3,
    "explanation": "Cannot intubate/cannot ventilate requires a surgical airway when indicated and trained."
  },
  {
    "id": 490,
    "level": "Paramedic",
    "category": "Airway",
    "text": "A patient has massive facial trauma and you cannot ventilate or intubate. Definitive airway option is: (Variant 5)",
    "options": [
      "EtCO2 10–20 mmHg is normal",
      "Auscultation only",
      "Place an OPA without suction",
      "Prepare cricothyrotomy per protocol"
    ],
    "correctIndex": 3,
    "explanation": "Cannot intubate/cannot ventilate requires a surgical airway when indicated and trained."
  },
  {
    "id": 491,
    "level": "Paramedic",
    "category": "Airway",
    "text": "The target EtCO2 range for a well-perfused ventilated adult is generally: (Variant 1)",
    "options": [
      "Auscultation only",
      "Prepare cricothyrotomy per protocol",
      "Normal EtCO2 35–45 mmHg",
      "Pulse oximetry improvement"
    ],
    "correctIndex": 2,
    "explanation": "Normal ETCO2 is typically ~35–45 mmHg; interpret with clinical context."
  },
  {
    "id": 492,
    "level": "Paramedic",
    "category": "Airway",
    "text": "The target EtCO2 range for a well-perfused ventilated adult is generally: (Variant 2)",
    "options": [
      "Continuous waveform capnography",
      "Normal EtCO2 35–45 mmHg",
      "Pulse oximetry improvement",
      "Nasotracheal intubation in facial trauma"
    ],
    "correctIndex": 1,
    "explanation": "Normal ETCO2 is typically ~35–45 mmHg; interpret with clinical context."
  },
  {
    "id": 493,
    "level": "Paramedic",
    "category": "Airway",
    "text": "The target EtCO2 range for a well-perfused ventilated adult is generally: (Variant 3)",
    "options": [
      "Fogging in the tube",
      "Pulse oximetry improvement",
      "Normal EtCO2 35–45 mmHg",
      "Ventilate 30/min regardless of chest rise"
    ],
    "correctIndex": 2,
    "explanation": "Normal ETCO2 is typically ~35–45 mmHg; interpret with clinical context."
  },
  {
    "id": 494,
    "level": "Paramedic",
    "category": "Airway",
    "text": "The target EtCO2 range for a well-perfused ventilated adult is generally: (Variant 4)",
    "options": [
      "Continuous waveform capnography",
      "Ventilate about 10/min with chest rise",
      "Normal EtCO2 35–45 mmHg",
      "Auscultation only"
    ],
    "correctIndex": 2,
    "explanation": "Normal ETCO2 is typically ~35–45 mmHg; interpret with clinical context."
  },
  {
    "id": 495,
    "level": "Paramedic",
    "category": "Airway",
    "text": "The target EtCO2 range for a well-perfused ventilated adult is generally: (Variant 5)",
    "options": [
      "Continuous waveform capnography",
      "Pulse oximetry improvement",
      "Nasotracheal intubation in facial trauma",
      "Normal EtCO2 35–45 mmHg"
    ],
    "correctIndex": 3,
    "explanation": "Normal ETCO2 is typically ~35–45 mmHg; interpret with clinical context."
  },
  {
    "id": 496,
    "level": "Paramedic",
    "category": "Airway",
    "text": "Copious secretions prevent ventilation. Your immediate action is to: (Variant 1)",
    "options": [
      "Normal EtCO2 35–45 mmHg",
      "Prepare cricothyrotomy per protocol",
      "Fogging in the tube",
      "Suction the airway and reposition"
    ],
    "correctIndex": 3,
    "explanation": "Clear the airway first to allow effective ventilation or advanced airway placement."
  },
  {
    "id": 497,
    "level": "Paramedic",
    "category": "Airway",
    "text": "Copious secretions prevent ventilation. Your immediate action is to: (Variant 2)",
    "options": [
      "Suction the airway and reposition",
      "Ventilate 30/min regardless of chest rise",
      "Fogging in the tube",
      "EtCO2 10–20 mmHg is normal"
    ],
    "correctIndex": 0,
    "explanation": "Clear the airway first to allow effective ventilation or advanced airway placement."
  },
  {
    "id": 498,
    "level": "Paramedic",
    "category": "Airway",
    "text": "Copious secretions prevent ventilation. Your immediate action is to: (Variant 3)",
    "options": [
      "EtCO2 10–20 mmHg is normal",
      "Ventilate 30/min regardless of chest rise",
      "Auscultation only",
      "Suction the airway and reposition"
    ],
    "correctIndex": 3,
    "explanation": "Clear the airway first to allow effective ventilation or advanced airway placement."
  },
  {
    "id": 499,
    "level": "Paramedic",
    "category": "Airway",
    "text": "Copious secretions prevent ventilation. Your immediate action is to: (Variant 4)",
    "options": [
      "Nasotracheal intubation in facial trauma",
      "Ventilate about 10/min with chest rise",
      "Auscultation only",
      "Suction the airway and reposition"
    ],
    "correctIndex": 3,
    "explanation": "Clear the airway first to allow effective ventilation or advanced airway placement."
  },
  {
    "id": 500,
    "level": "Paramedic",
    "category": "Airway",
    "text": "Copious secretions prevent ventilation. Your immediate action is to: (Variant 5)",
    "options": [
      "Prepare cricothyrotomy per protocol",
      "Normal EtCO2 35–45 mmHg",
      "Auscultation only",
      "Suction the airway and reposition"
    ],
    "correctIndex": 3,
    "explanation": "Clear the airway first to allow effective ventilation or advanced airway placement."
  },
  {
    "id": 501,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "ST elevation in leads II, III, and aVF indicates an: (Variant 1)",
    "options": [
      "Atropine then pacing if ineffective",
      "Atropine for SVT",
      "Inferior wall STEMI",
      "Amiodarone for shockable arrest after epi/shocks"
    ],
    "correctIndex": 2,
    "explanation": "Inferior STEMI is classically ST elevation in II, III, aVF."
  },
  {
    "id": 502,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "ST elevation in leads II, III, and aVF indicates an: (Variant 2)",
    "options": [
      "Epinephrine 1 mg IV/IO q3–5 min in arrest",
      "Amiodarone for shockable arrest after epi/shocks",
      "Inferior wall STEMI",
      "Diltiazem bolus for unstable rhythm"
    ],
    "correctIndex": 2,
    "explanation": "Inferior STEMI is classically ST elevation in II, III, aVF."
  },
  {
    "id": 503,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "ST elevation in leads II, III, and aVF indicates an: (Variant 3)",
    "options": [
      "Amiodarone for shockable arrest after epi/shocks",
      "Defibrillate for pulseless VF/VT",
      "Inferior wall STEMI",
      "Atropine then pacing if ineffective"
    ],
    "correctIndex": 2,
    "explanation": "Inferior STEMI is classically ST elevation in II, III, aVF."
  },
  {
    "id": 504,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "ST elevation in leads II, III, and aVF indicates an: (Variant 4)",
    "options": [
      "Nitroglycerin SL for VF",
      "Atropine for SVT",
      "Defibrillate for pulseless VF/VT",
      "Inferior wall STEMI"
    ],
    "correctIndex": 3,
    "explanation": "Inferior STEMI is classically ST elevation in II, III, aVF."
  },
  {
    "id": 505,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "ST elevation in leads II, III, and aVF indicates an: (Variant 5)",
    "options": [
      "Epinephrine 1 mg IV/IO q3–5 min in arrest",
      "Inferior wall STEMI",
      "Nitroglycerin SL for VF",
      "Defibrillate for pulseless VF/VT"
    ],
    "correctIndex": 1,
    "explanation": "Inferior STEMI is classically ST elevation in II, III, aVF."
  },
  {
    "id": 506,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Stable regular narrow-complex SVT at 190 bpm: first-line medication is: (Variant 1)",
    "options": [
      "Synchronized cardioversion for unstable tachycardia",
      "Nitroglycerin SL for VF",
      "Adenosine after vagal maneuvers",
      "Atropine then pacing if ineffective"
    ],
    "correctIndex": 2,
    "explanation": "Stable regular SVT is treated with vagal maneuvers then adenosine per ACLS/protocol."
  },
  {
    "id": 507,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Stable regular narrow-complex SVT at 190 bpm: first-line medication is: (Variant 2)",
    "options": [
      "Defibrillate for pulseless VF/VT",
      "Inferior wall STEMI",
      "Adenosine after vagal maneuvers",
      "Diltiazem bolus for unstable rhythm"
    ],
    "correctIndex": 2,
    "explanation": "Stable regular SVT is treated with vagal maneuvers then adenosine per ACLS/protocol."
  },
  {
    "id": 508,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Stable regular narrow-complex SVT at 190 bpm: first-line medication is: (Variant 3)",
    "options": [
      "Atropine then pacing if ineffective",
      "Defibrillate for pulseless VF/VT",
      "Adenosine after vagal maneuvers",
      "Nitroglycerin SL for VF"
    ],
    "correctIndex": 2,
    "explanation": "Stable regular SVT is treated with vagal maneuvers then adenosine per ACLS/protocol."
  },
  {
    "id": 509,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Stable regular narrow-complex SVT at 190 bpm: first-line medication is: (Variant 4)",
    "options": [
      "Atropine then pacing if ineffective",
      "Nitroglycerin SL for VF",
      "Adenosine after vagal maneuvers",
      "Atropine for SVT"
    ],
    "correctIndex": 2,
    "explanation": "Stable regular SVT is treated with vagal maneuvers then adenosine per ACLS/protocol."
  },
  {
    "id": 510,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Stable regular narrow-complex SVT at 190 bpm: first-line medication is: (Variant 5)",
    "options": [
      "Amiodarone for shockable arrest after epi/shocks",
      "Adenosine after vagal maneuvers",
      "Atropine then pacing if ineffective",
      "Epinephrine 1 mg IV/IO q3–5 min in arrest"
    ],
    "correctIndex": 1,
    "explanation": "Stable regular SVT is treated with vagal maneuvers then adenosine per ACLS/protocol."
  },
  {
    "id": 511,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Symptomatic bradycardia (HR 38) with hypotension and altered mental status: first-line is: (Variant 1)",
    "options": [
      "Atropine then pacing if ineffective",
      "Amiodarone for shockable arrest after epi/shocks",
      "Epinephrine 1 mg IV/IO q3–5 min in arrest",
      "Defibrillate for pulseless VF/VT"
    ],
    "correctIndex": 0,
    "explanation": "Unstable bradycardia: atropine first when appropriate, then pacing/pressors per ACLS."
  },
  {
    "id": 512,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Symptomatic bradycardia (HR 38) with hypotension and altered mental status: first-line is: (Variant 2)",
    "options": [
      "Nitroglycerin SL for VF",
      "Defibrillate for pulseless VF/VT",
      "Diltiazem bolus for unstable rhythm",
      "Atropine then pacing if ineffective"
    ],
    "correctIndex": 3,
    "explanation": "Unstable bradycardia: atropine first when appropriate, then pacing/pressors per ACLS."
  },
  {
    "id": 513,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Symptomatic bradycardia (HR 38) with hypotension and altered mental status: first-line is: (Variant 3)",
    "options": [
      "Atropine for SVT",
      "Defibrillate for pulseless VF/VT",
      "Nitroglycerin SL for VF",
      "Atropine then pacing if ineffective"
    ],
    "correctIndex": 3,
    "explanation": "Unstable bradycardia: atropine first when appropriate, then pacing/pressors per ACLS."
  },
  {
    "id": 514,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Symptomatic bradycardia (HR 38) with hypotension and altered mental status: first-line is: (Variant 4)",
    "options": [
      "Nitroglycerin SL for VF",
      "Defibrillate for pulseless VF/VT",
      "Atropine then pacing if ineffective",
      "Amiodarone for shockable arrest after epi/shocks"
    ],
    "correctIndex": 2,
    "explanation": "Unstable bradycardia: atropine first when appropriate, then pacing/pressors per ACLS."
  },
  {
    "id": 515,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Symptomatic bradycardia (HR 38) with hypotension and altered mental status: first-line is: (Variant 5)",
    "options": [
      "Atropine then pacing if ineffective",
      "Nitroglycerin SL for VF",
      "Amiodarone for shockable arrest after epi/shocks",
      "Magnesium sulfate"
    ],
    "correctIndex": 0,
    "explanation": "Unstable bradycardia: atropine first when appropriate, then pacing/pressors per ACLS."
  },
  {
    "id": 516,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Polymorphic VT with prolonged QT (torsades): drug of choice is: (Variant 1)",
    "options": [
      "Inferior wall STEMI",
      "Magnesium sulfate",
      "Epinephrine 1 mg IV/IO q3–5 min in arrest",
      "Amiodarone for shockable arrest after epi/shocks"
    ],
    "correctIndex": 1,
    "explanation": "Magnesium treats torsades; defibrillate if pulseless/unstable."
  },
  {
    "id": 517,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Polymorphic VT with prolonged QT (torsades): drug of choice is: (Variant 2)",
    "options": [
      "Epinephrine 1 mg IV/IO q3–5 min in arrest",
      "Amiodarone for shockable arrest after epi/shocks",
      "Magnesium sulfate",
      "Adenosine after vagal maneuvers"
    ],
    "correctIndex": 2,
    "explanation": "Magnesium treats torsades; defibrillate if pulseless/unstable."
  },
  {
    "id": 518,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Polymorphic VT with prolonged QT (torsades): drug of choice is: (Variant 3)",
    "options": [
      "Epinephrine 1 mg IV/IO q3–5 min in arrest",
      "Synchronized cardioversion for unstable tachycardia",
      "Magnesium sulfate",
      "Atropine then pacing if ineffective"
    ],
    "correctIndex": 2,
    "explanation": "Magnesium treats torsades; defibrillate if pulseless/unstable."
  },
  {
    "id": 519,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Polymorphic VT with prolonged QT (torsades): drug of choice is: (Variant 4)",
    "options": [
      "Adenosine after vagal maneuvers",
      "Magnesium sulfate",
      "Nitroglycerin SL for VF",
      "Inferior wall STEMI"
    ],
    "correctIndex": 1,
    "explanation": "Magnesium treats torsades; defibrillate if pulseless/unstable."
  },
  {
    "id": 520,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Polymorphic VT with prolonged QT (torsades): drug of choice is: (Variant 5)",
    "options": [
      "Defibrillate for pulseless VF/VT",
      "Inferior wall STEMI",
      "Magnesium sulfate",
      "Epinephrine 1 mg IV/IO q3–5 min in arrest"
    ],
    "correctIndex": 2,
    "explanation": "Magnesium treats torsades; defibrillate if pulseless/unstable."
  },
  {
    "id": 521,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Pulseless VF/VT after CPR and defibrillation: next medication priority is: (Variant 1)",
    "options": [
      "Epinephrine 1 mg IV/IO q3–5 min in arrest",
      "Diltiazem bolus for unstable rhythm",
      "Nitroglycerin SL for VF",
      "Atropine for SVT"
    ],
    "correctIndex": 0,
    "explanation": "In shockable arrest, epinephrine is given after initial shocks/CPR per ACLS sequence."
  },
  {
    "id": 522,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Pulseless VF/VT after CPR and defibrillation: next medication priority is: (Variant 2)",
    "options": [
      "Epinephrine 1 mg IV/IO q3–5 min in arrest",
      "Adenosine after vagal maneuvers",
      "Amiodarone for shockable arrest after epi/shocks",
      "Nitroglycerin SL for VF"
    ],
    "correctIndex": 0,
    "explanation": "In shockable arrest, epinephrine is given after initial shocks/CPR per ACLS sequence."
  },
  {
    "id": 523,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Pulseless VF/VT after CPR and defibrillation: next medication priority is: (Variant 3)",
    "options": [
      "Diltiazem bolus for unstable rhythm",
      "Inferior wall STEMI",
      "Epinephrine 1 mg IV/IO q3–5 min in arrest",
      "Nitroglycerin SL for VF"
    ],
    "correctIndex": 2,
    "explanation": "In shockable arrest, epinephrine is given after initial shocks/CPR per ACLS sequence."
  },
  {
    "id": 524,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Pulseless VF/VT after CPR and defibrillation: next medication priority is: (Variant 4)",
    "options": [
      "Defibrillate for pulseless VF/VT",
      "Adenosine after vagal maneuvers",
      "Inferior wall STEMI",
      "Epinephrine 1 mg IV/IO q3–5 min in arrest"
    ],
    "correctIndex": 3,
    "explanation": "In shockable arrest, epinephrine is given after initial shocks/CPR per ACLS sequence."
  },
  {
    "id": 525,
    "level": "Paramedic",
    "category": "Cardiology",
    "text": "Pulseless VF/VT after CPR and defibrillation: next medication priority is: (Variant 5)",
    "options": [
      "Magnesium sulfate",
      "Atropine then pacing if ineffective",
      "Epinephrine 1 mg IV/IO q3–5 min in arrest",
      "Atropine for SVT"
    ],
    "correctIndex": 2,
    "explanation": "In shockable arrest, epinephrine is given after initial shocks/CPR per ACLS sequence."
  },
  {
    "id": 526,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Trauma patient is tachycardic, hypotensive, and cool/clammy. Most likely shock type is: (Variant 1)",
    "options": [
      "Tourniquet for life-threatening extremity bleed",
      "Neurogenic shock",
      "Hemorrhagic shock",
      "Give oral fluids"
    ],
    "correctIndex": 2,
    "explanation": "Trauma + hypotension + cool clammy skin is hemorrhagic shock until proven otherwise."
  },
  {
    "id": 527,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Trauma patient is tachycardic, hypotensive, and cool/clammy. Most likely shock type is: (Variant 2)",
    "options": [
      "Pelvic binder and treat shock",
      "Tourniquet for life-threatening extremity bleed",
      "Apply nitroglycerin",
      "Hemorrhagic shock"
    ],
    "correctIndex": 3,
    "explanation": "Trauma + hypotension + cool clammy skin is hemorrhagic shock until proven otherwise."
  },
  {
    "id": 528,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Trauma patient is tachycardic, hypotensive, and cool/clammy. Most likely shock type is: (Variant 3)",
    "options": [
      "Tourniquet for life-threatening extremity bleed",
      "Control bleeding and rapid transport",
      "Hemorrhagic shock",
      "Neurogenic shock"
    ],
    "correctIndex": 2,
    "explanation": "Trauma + hypotension + cool clammy skin is hemorrhagic shock until proven otherwise."
  },
  {
    "id": 529,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Trauma patient is tachycardic, hypotensive, and cool/clammy. Most likely shock type is: (Variant 4)",
    "options": [
      "Have patient ambulate",
      "Neurogenic shock",
      "Hemorrhagic shock",
      "Apply nitroglycerin"
    ],
    "correctIndex": 2,
    "explanation": "Trauma + hypotension + cool clammy skin is hemorrhagic shock until proven otherwise."
  },
  {
    "id": 530,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Trauma patient is tachycardic, hypotensive, and cool/clammy. Most likely shock type is: (Variant 5)",
    "options": [
      "Give oral fluids",
      "Hemorrhagic shock",
      "Apply nitroglycerin",
      "Parkland formula (4 mL×kg×%TBSA)"
    ],
    "correctIndex": 1,
    "explanation": "Trauma + hypotension + cool clammy skin is hemorrhagic shock until proven otherwise."
  },
  {
    "id": 531,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Penetrating trauma with hypotension: prehospital priority is: (Variant 1)",
    "options": [
      "Have patient ambulate",
      "Parkland formula (4 mL×kg×%TBSA)",
      "Pelvic binder and treat shock",
      "Control bleeding and rapid transport"
    ],
    "correctIndex": 3,
    "explanation": "Definitive hemorrhage control is surgical; minimize scene time."
  },
  {
    "id": 532,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Penetrating trauma with hypotension: prehospital priority is: (Variant 2)",
    "options": [
      "Apply nitroglycerin",
      "Give oral fluids",
      "Control bleeding and rapid transport",
      "Parkland formula (4 mL×kg×%TBSA)"
    ],
    "correctIndex": 2,
    "explanation": "Definitive hemorrhage control is surgical; minimize scene time."
  },
  {
    "id": 533,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Penetrating trauma with hypotension: prehospital priority is: (Variant 3)",
    "options": [
      "Neurogenic shock",
      "Apply nitroglycerin",
      "Control bleeding and rapid transport",
      "Tourniquet for life-threatening extremity bleed"
    ],
    "correctIndex": 2,
    "explanation": "Definitive hemorrhage control is surgical; minimize scene time."
  },
  {
    "id": 534,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Penetrating trauma with hypotension: prehospital priority is: (Variant 4)",
    "options": [
      "Parkland formula (4 mL×kg×%TBSA)",
      "Give oral fluids",
      "Delay transport for prolonged IV therapy",
      "Control bleeding and rapid transport"
    ],
    "correctIndex": 3,
    "explanation": "Definitive hemorrhage control is surgical; minimize scene time."
  },
  {
    "id": 535,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Penetrating trauma with hypotension: prehospital priority is: (Variant 5)",
    "options": [
      "Parkland formula (4 mL×kg×%TBSA)",
      "Pelvic binder and treat shock",
      "Control bleeding and rapid transport",
      "Tourniquet for life-threatening extremity bleed"
    ],
    "correctIndex": 2,
    "explanation": "Definitive hemorrhage control is surgical; minimize scene time."
  },
  {
    "id": 536,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Needle decompression for tension pneumothorax is commonly performed at: (Variant 1)",
    "options": [
      "Have patient ambulate",
      "Apply nitroglycerin",
      "Delay transport for prolonged IV therapy",
      "Needle decompression (2nd ICS MCL or 4th/5th A/MAL per protocol)"
    ],
    "correctIndex": 3,
    "explanation": "Common decompression sites vary by protocol; use approved landmarks."
  },
  {
    "id": 537,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Needle decompression for tension pneumothorax is commonly performed at: (Variant 2)",
    "options": [
      "Hemorrhagic shock",
      "Needle decompression (2nd ICS MCL or 4th/5th A/MAL per protocol)",
      "Have patient ambulate",
      "Pelvic binder and treat shock"
    ],
    "correctIndex": 1,
    "explanation": "Common decompression sites vary by protocol; use approved landmarks."
  },
  {
    "id": 538,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Needle decompression for tension pneumothorax is commonly performed at: (Variant 3)",
    "options": [
      "Give oral fluids",
      "Pelvic binder and treat shock",
      "Parkland formula (4 mL×kg×%TBSA)",
      "Needle decompression (2nd ICS MCL or 4th/5th A/MAL per protocol)"
    ],
    "correctIndex": 3,
    "explanation": "Common decompression sites vary by protocol; use approved landmarks."
  },
  {
    "id": 539,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Needle decompression for tension pneumothorax is commonly performed at: (Variant 4)",
    "options": [
      "Pelvic binder and treat shock",
      "Give oral fluids",
      "Needle decompression (2nd ICS MCL or 4th/5th A/MAL per protocol)",
      "Hemorrhagic shock"
    ],
    "correctIndex": 2,
    "explanation": "Common decompression sites vary by protocol; use approved landmarks."
  },
  {
    "id": 540,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Needle decompression for tension pneumothorax is commonly performed at: (Variant 5)",
    "options": [
      "Hemorrhagic shock",
      "Neurogenic shock",
      "Tourniquet for life-threatening extremity bleed",
      "Needle decompression (2nd ICS MCL or 4th/5th A/MAL per protocol)"
    ],
    "correctIndex": 3,
    "explanation": "Common decompression sites vary by protocol; use approved landmarks."
  },
  {
    "id": 541,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Pelvic fracture with hypotension: best immediate stabilization is: (Variant 1)",
    "options": [
      "Pelvic binder and treat shock",
      "Apply nitroglycerin",
      "Neurogenic shock",
      "Delay transport for prolonged IV therapy"
    ],
    "correctIndex": 0,
    "explanation": "Binders reduce pelvic volume and bleeding; treat shock and transport."
  },
  {
    "id": 542,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Pelvic fracture with hypotension: best immediate stabilization is: (Variant 2)",
    "options": [
      "Delay transport for prolonged IV therapy",
      "Neurogenic shock",
      "Pelvic binder and treat shock",
      "Give oral fluids"
    ],
    "correctIndex": 2,
    "explanation": "Binders reduce pelvic volume and bleeding; treat shock and transport."
  },
  {
    "id": 543,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Pelvic fracture with hypotension: best immediate stabilization is: (Variant 3)",
    "options": [
      "Apply nitroglycerin",
      "Hemorrhagic shock",
      "Pelvic binder and treat shock",
      "Give oral fluids"
    ],
    "correctIndex": 2,
    "explanation": "Binders reduce pelvic volume and bleeding; treat shock and transport."
  },
  {
    "id": 544,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Pelvic fracture with hypotension: best immediate stabilization is: (Variant 4)",
    "options": [
      "Hemorrhagic shock",
      "Control bleeding and rapid transport",
      "Pelvic binder and treat shock",
      "Give oral fluids"
    ],
    "correctIndex": 2,
    "explanation": "Binders reduce pelvic volume and bleeding; treat shock and transport."
  },
  {
    "id": 545,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Pelvic fracture with hypotension: best immediate stabilization is: (Variant 5)",
    "options": [
      "Hemorrhagic shock",
      "Apply nitroglycerin",
      "Pelvic binder and treat shock",
      "Neurogenic shock"
    ],
    "correctIndex": 2,
    "explanation": "Binders reduce pelvic volume and bleeding; treat shock and transport."
  },
  {
    "id": 546,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Hypotension with bradycardia and warm dry skin after spinal injury suggests: (Variant 1)",
    "options": [
      "Tourniquet for life-threatening extremity bleed",
      "Pelvic binder and treat shock",
      "Neurogenic shock",
      "Needle decompression (2nd ICS MCL or 4th/5th A/MAL per protocol)"
    ],
    "correctIndex": 2,
    "explanation": "Loss of sympathetic tone causes hypotension with bradycardia in neurogenic shock."
  },
  {
    "id": 547,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Hypotension with bradycardia and warm dry skin after spinal injury suggests: (Variant 2)",
    "options": [
      "Control bleeding and rapid transport",
      "Delay transport for prolonged IV therapy",
      "Neurogenic shock",
      "Apply nitroglycerin"
    ],
    "correctIndex": 2,
    "explanation": "Loss of sympathetic tone causes hypotension with bradycardia in neurogenic shock."
  },
  {
    "id": 548,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Hypotension with bradycardia and warm dry skin after spinal injury suggests: (Variant 3)",
    "options": [
      "Pelvic binder and treat shock",
      "Have patient ambulate",
      "Neurogenic shock",
      "Hemorrhagic shock"
    ],
    "correctIndex": 2,
    "explanation": "Loss of sympathetic tone causes hypotension with bradycardia in neurogenic shock."
  },
  {
    "id": 549,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Hypotension with bradycardia and warm dry skin after spinal injury suggests: (Variant 4)",
    "options": [
      "Pelvic binder and treat shock",
      "Tourniquet for life-threatening extremity bleed",
      "Neurogenic shock",
      "Control bleeding and rapid transport"
    ],
    "correctIndex": 2,
    "explanation": "Loss of sympathetic tone causes hypotension with bradycardia in neurogenic shock."
  },
  {
    "id": 550,
    "level": "Paramedic",
    "category": "Trauma",
    "text": "Hypotension with bradycardia and warm dry skin after spinal injury suggests: (Variant 5)",
    "options": [
      "Hemorrhagic shock",
      "Give oral fluids",
      "Neurogenic shock",
      "Control bleeding and rapid transport"
    ],
    "correctIndex": 2,
    "explanation": "Loss of sympathetic tone causes hypotension with bradycardia in neurogenic shock."
  },
  {
    "id": 551,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Pregnant patient (third trimester) seizes with severe hypertension: drug of choice is: (Variant 1)",
    "options": [
      "Start compressions before ventilation for newborn HR 80",
      "Adenosine for eclampsia",
      "Magnesium sulfate for eclampsia",
      "Fundal massage for postpartum hemorrhage"
    ],
    "correctIndex": 2,
    "explanation": "Eclampsia is treated with magnesium sulfate to prevent recurrent seizures."
  },
  {
    "id": 552,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Pregnant patient (third trimester) seizes with severe hypertension: drug of choice is: (Variant 2)",
    "options": [
      "Fundal massage for postpartum hemorrhage",
      "Start compressions before ventilation for newborn HR 80",
      "Avoid airway manipulation (possible epiglottitis)",
      "Magnesium sulfate for eclampsia"
    ],
    "correctIndex": 3,
    "explanation": "Eclampsia is treated with magnesium sulfate to prevent recurrent seizures."
  },
  {
    "id": 553,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Pregnant patient (third trimester) seizes with severe hypertension: drug of choice is: (Variant 3)",
    "options": [
      "Inspect throat with tongue depressor",
      "Give oral glucose to seizing patient",
      "Start compressions before ventilation for newborn HR 80",
      "Magnesium sulfate for eclampsia"
    ],
    "correctIndex": 3,
    "explanation": "Eclampsia is treated with magnesium sulfate to prevent recurrent seizures."
  },
  {
    "id": 554,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Pregnant patient (third trimester) seizes with severe hypertension: drug of choice is: (Variant 4)",
    "options": [
      "Longer-acting anticonvulsant after benzos (per protocol)",
      "Start compressions before ventilation for newborn HR 80",
      "PPV for newborn HR <100",
      "Magnesium sulfate for eclampsia"
    ],
    "correctIndex": 3,
    "explanation": "Eclampsia is treated with magnesium sulfate to prevent recurrent seizures."
  },
  {
    "id": 555,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Pregnant patient (third trimester) seizes with severe hypertension: drug of choice is: (Variant 5)",
    "options": [
      "Magnesium sulfate for eclampsia",
      "Start compressions before ventilation for newborn HR 80",
      "Fundal massage for postpartum hemorrhage",
      "Adenosine for eclampsia"
    ],
    "correctIndex": 0,
    "explanation": "Eclampsia is treated with magnesium sulfate to prevent recurrent seizures."
  },
  {
    "id": 556,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "After delivery, heavy bleeding with a boggy uterus: first-line is: (Variant 1)",
    "options": [
      "PPV for newborn HR <100",
      "Give oral glucose to seizing patient",
      "Adenosine for eclampsia",
      "Fundal massage for postpartum hemorrhage"
    ],
    "correctIndex": 3,
    "explanation": "Uterine atony causes postpartum hemorrhage; massage helps the uterus contract."
  },
  {
    "id": 557,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "After delivery, heavy bleeding with a boggy uterus: first-line is: (Variant 2)",
    "options": [
      "Aspirin for seizure",
      "Adenosine for eclampsia",
      "Fundal massage for postpartum hemorrhage",
      "Magnesium sulfate for eclampsia"
    ],
    "correctIndex": 2,
    "explanation": "Uterine atony causes postpartum hemorrhage; massage helps the uterus contract."
  },
  {
    "id": 558,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "After delivery, heavy bleeding with a boggy uterus: first-line is: (Variant 3)",
    "options": [
      "Adenosine for eclampsia",
      "Aspirin for seizure",
      "Avoid airway manipulation (possible epiglottitis)",
      "Fundal massage for postpartum hemorrhage"
    ],
    "correctIndex": 3,
    "explanation": "Uterine atony causes postpartum hemorrhage; massage helps the uterus contract."
  },
  {
    "id": 559,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "After delivery, heavy bleeding with a boggy uterus: first-line is: (Variant 4)",
    "options": [
      "Avoid airway manipulation (possible epiglottitis)",
      "Adenosine for eclampsia",
      "Fundal massage for postpartum hemorrhage",
      "Longer-acting anticonvulsant after benzos (per protocol)"
    ],
    "correctIndex": 2,
    "explanation": "Uterine atony causes postpartum hemorrhage; massage helps the uterus contract."
  },
  {
    "id": 560,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "After delivery, heavy bleeding with a boggy uterus: first-line is: (Variant 5)",
    "options": [
      "PPV for newborn HR <100",
      "Adenosine for eclampsia",
      "Fundal massage for postpartum hemorrhage",
      "Inspect throat with tongue depressor"
    ],
    "correctIndex": 2,
    "explanation": "Uterine atony causes postpartum hemorrhage; massage helps the uterus contract."
  },
  {
    "id": 561,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Newborn is apneic with heart rate 80. Next step is to: (Variant 1)",
    "options": [
      "Give oral glucose to seizing patient",
      "Fundal massage for postpartum hemorrhage",
      "Adenosine for eclampsia",
      "PPV for newborn HR <100"
    ],
    "correctIndex": 3,
    "explanation": "Neonatal resuscitation: HR <100 requires effective ventilation first."
  },
  {
    "id": 562,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Newborn is apneic with heart rate 80. Next step is to: (Variant 2)",
    "options": [
      "Aspirin for seizure",
      "Adenosine for eclampsia",
      "Longer-acting anticonvulsant after benzos (per protocol)",
      "PPV for newborn HR <100"
    ],
    "correctIndex": 3,
    "explanation": "Neonatal resuscitation: HR <100 requires effective ventilation first."
  },
  {
    "id": 563,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Newborn is apneic with heart rate 80. Next step is to: (Variant 3)",
    "options": [
      "PPV for newborn HR <100",
      "Magnesium sulfate for eclampsia",
      "Fundal massage for postpartum hemorrhage",
      "Longer-acting anticonvulsant after benzos (per protocol)"
    ],
    "correctIndex": 0,
    "explanation": "Neonatal resuscitation: HR <100 requires effective ventilation first."
  },
  {
    "id": 564,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Newborn is apneic with heart rate 80. Next step is to: (Variant 4)",
    "options": [
      "Magnesium sulfate for eclampsia",
      "Longer-acting anticonvulsant after benzos (per protocol)",
      "Aspirin for seizure",
      "PPV for newborn HR <100"
    ],
    "correctIndex": 3,
    "explanation": "Neonatal resuscitation: HR <100 requires effective ventilation first."
  },
  {
    "id": 565,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Newborn is apneic with heart rate 80. Next step is to: (Variant 5)",
    "options": [
      "Aspirin for seizure",
      "Inspect throat with tongue depressor",
      "PPV for newborn HR <100",
      "Start compressions before ventilation for newborn HR 80"
    ],
    "correctIndex": 2,
    "explanation": "Neonatal resuscitation: HR <100 requires effective ventilation first."
  },
  {
    "id": 566,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Child with drooling, fever, tripod, and stridor: best approach is to: (Variant 1)",
    "options": [
      "Inspect throat with tongue depressor",
      "Avoid airway manipulation (possible epiglottitis)",
      "Adenosine for eclampsia",
      "PPV for newborn HR <100"
    ],
    "correctIndex": 1,
    "explanation": "Do not agitate or inspect the throat; maintain comfort and oxygenate."
  },
  {
    "id": 567,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Child with drooling, fever, tripod, and stridor: best approach is to: (Variant 2)",
    "options": [
      "Avoid airway manipulation (possible epiglottitis)",
      "Fundal massage for postpartum hemorrhage",
      "Longer-acting anticonvulsant after benzos (per protocol)",
      "PPV for newborn HR <100"
    ],
    "correctIndex": 0,
    "explanation": "Do not agitate or inspect the throat; maintain comfort and oxygenate."
  },
  {
    "id": 568,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Child with drooling, fever, tripod, and stridor: best approach is to: (Variant 3)",
    "options": [
      "Avoid airway manipulation (possible epiglottitis)",
      "Start compressions before ventilation for newborn HR 80",
      "PPV for newborn HR <100",
      "Magnesium sulfate for eclampsia"
    ],
    "correctIndex": 0,
    "explanation": "Do not agitate or inspect the throat; maintain comfort and oxygenate."
  },
  {
    "id": 569,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Child with drooling, fever, tripod, and stridor: best approach is to: (Variant 4)",
    "options": [
      "Fundal massage for postpartum hemorrhage",
      "Longer-acting anticonvulsant after benzos (per protocol)",
      "Avoid airway manipulation (possible epiglottitis)",
      "Inspect throat with tongue depressor"
    ],
    "correctIndex": 2,
    "explanation": "Do not agitate or inspect the throat; maintain comfort and oxygenate."
  },
  {
    "id": 570,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Child with drooling, fever, tripod, and stridor: best approach is to: (Variant 5)",
    "options": [
      "Avoid airway manipulation (possible epiglottitis)",
      "Longer-acting anticonvulsant after benzos (per protocol)",
      "Inspect throat with tongue depressor",
      "PPV for newborn HR <100"
    ],
    "correctIndex": 0,
    "explanation": "Do not agitate or inspect the throat; maintain comfort and oxygenate."
  },
  {
    "id": 571,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Status epilepticus continues after benzodiazepines: next medication class often considered is: (Variant 1)",
    "options": [
      "Aspirin for seizure",
      "PPV for newborn HR <100",
      "Adenosine for eclampsia",
      "Longer-acting anticonvulsant after benzos (per protocol)"
    ],
    "correctIndex": 3,
    "explanation": "Benzos stop seizures acutely; longer-acting agents help prevent recurrence per protocol."
  },
  {
    "id": 572,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Status epilepticus continues after benzodiazepines: next medication class often considered is: (Variant 2)",
    "options": [
      "Avoid airway manipulation (possible epiglottitis)",
      "Inspect throat with tongue depressor",
      "Longer-acting anticonvulsant after benzos (per protocol)",
      "Fundal massage for postpartum hemorrhage"
    ],
    "correctIndex": 2,
    "explanation": "Benzos stop seizures acutely; longer-acting agents help prevent recurrence per protocol."
  },
  {
    "id": 573,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Status epilepticus continues after benzodiazepines: next medication class often considered is: (Variant 3)",
    "options": [
      "Fundal massage for postpartum hemorrhage",
      "Aspirin for seizure",
      "Adenosine for eclampsia",
      "Longer-acting anticonvulsant after benzos (per protocol)"
    ],
    "correctIndex": 3,
    "explanation": "Benzos stop seizures acutely; longer-acting agents help prevent recurrence per protocol."
  },
  {
    "id": 574,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Status epilepticus continues after benzodiazepines: next medication class often considered is: (Variant 4)",
    "options": [
      "Magnesium sulfate for eclampsia",
      "Fundal massage for postpartum hemorrhage",
      "PPV for newborn HR <100",
      "Longer-acting anticonvulsant after benzos (per protocol)"
    ],
    "correctIndex": 3,
    "explanation": "Benzos stop seizures acutely; longer-acting agents help prevent recurrence per protocol."
  },
  {
    "id": 575,
    "level": "Paramedic",
    "category": "Medical & OBGYN",
    "text": "Status epilepticus continues after benzodiazepines: next medication class often considered is: (Variant 5)",
    "options": [
      "Start compressions before ventilation for newborn HR 80",
      "Magnesium sulfate for eclampsia",
      "Fundal massage for postpartum hemorrhage",
      "Longer-acting anticonvulsant after benzos (per protocol)"
    ],
    "correctIndex": 3,
    "explanation": "Benzos stop seizures acutely; longer-acting agents help prevent recurrence per protocol."
  },
  {
    "id": 576,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "Wrong medication dose was given. The BEST action is to: (Variant 1)",
    "options": [
      "Use non-structured handoff only",
      "Hide the error to avoid liability",
      "Delay 12-lead until hospital",
      "Treat patient, notify medical control, and document/report the error"
    ],
    "correctIndex": 3,
    "explanation": "Patient safety first; notify appropriate channels and document accurately."
  },
  {
    "id": 577,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "Wrong medication dose was given. The BEST action is to: (Variant 2)",
    "options": [
      "Hide the error to avoid liability",
      "Early 12-lead acquisition and STEMI notification",
      "Contact medical control for protocol deviation and document",
      "Treat patient, notify medical control, and document/report the error"
    ],
    "correctIndex": 3,
    "explanation": "Patient safety first; notify appropriate channels and document accurately."
  },
  {
    "id": 578,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "Wrong medication dose was given. The BEST action is to: (Variant 3)",
    "options": [
      "Use non-structured handoff only",
      "Early 12-lead acquisition and STEMI notification",
      "Treat patient, notify medical control, and document/report the error",
      "Share meds between crews without documentation"
    ],
    "correctIndex": 2,
    "explanation": "Patient safety first; notify appropriate channels and document accurately."
  },
  {
    "id": 579,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "Wrong medication dose was given. The BEST action is to: (Variant 4)",
    "options": [
      "Delay 12-lead until hospital",
      "Secure and document controlled substances per policy",
      "Treat patient, notify medical control, and document/report the error",
      "Use non-structured handoff only"
    ],
    "correctIndex": 2,
    "explanation": "Patient safety first; notify appropriate channels and document accurately."
  },
  {
    "id": 580,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "Wrong medication dose was given. The BEST action is to: (Variant 5)",
    "options": [
      "Secure and document controlled substances per policy",
      "JumpSTART pediatric MCI triage",
      "Provide care outside protocol without documentation",
      "Treat patient, notify medical control, and document/report the error"
    ],
    "correctIndex": 3,
    "explanation": "Patient safety first; notify appropriate channels and document accurately."
  },
  {
    "id": 581,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "Controlled substances on an ALS unit should be: (Variant 1)",
    "options": [
      "JumpSTART pediatric MCI triage",
      "Contact medical control for protocol deviation and document",
      "Use non-structured handoff only",
      "Secure and document controlled substances per policy"
    ],
    "correctIndex": 3,
    "explanation": "Controlled meds require secure storage and strict accountability."
  },
  {
    "id": 582,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "Controlled substances on an ALS unit should be: (Variant 2)",
    "options": [
      "Delay 12-lead until hospital",
      "Early 12-lead acquisition and STEMI notification",
      "Secure and document controlled substances per policy",
      "Hide the error to avoid liability"
    ],
    "correctIndex": 2,
    "explanation": "Controlled meds require secure storage and strict accountability."
  },
  {
    "id": 583,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "Controlled substances on an ALS unit should be: (Variant 3)",
    "options": [
      "Use non-structured handoff only",
      "Treat patient, notify medical control, and document/report the error",
      "Secure and document controlled substances per policy",
      "Delay 12-lead until hospital"
    ],
    "correctIndex": 2,
    "explanation": "Controlled meds require secure storage and strict accountability."
  },
  {
    "id": 584,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "Controlled substances on an ALS unit should be: (Variant 4)",
    "options": [
      "Provide care outside protocol without documentation",
      "Treat patient, notify medical control, and document/report the error",
      "Secure and document controlled substances per policy",
      "Hide the error to avoid liability"
    ],
    "correctIndex": 2,
    "explanation": "Controlled meds require secure storage and strict accountability."
  },
  {
    "id": 585,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "Controlled substances on an ALS unit should be: (Variant 5)",
    "options": [
      "JumpSTART pediatric MCI triage",
      "Share meds between crews without documentation",
      "Secure and document controlled substances per policy",
      "Provide care outside protocol without documentation"
    ],
    "correctIndex": 2,
    "explanation": "Controlled meds require secure storage and strict accountability."
  },
  {
    "id": 586,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "To improve STEMI outcomes, the most important EMS action is: (Variant 1)",
    "options": [
      "Secure and document controlled substances per policy",
      "Early 12-lead acquisition and STEMI notification",
      "Treat patient, notify medical control, and document/report the error",
      "Hide the error to avoid liability"
    ],
    "correctIndex": 1,
    "explanation": "Early ECG and pre-notification reduce time to reperfusion."
  },
  {
    "id": 587,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "To improve STEMI outcomes, the most important EMS action is: (Variant 2)",
    "options": [
      "Treat patient, notify medical control, and document/report the error",
      "Delay 12-lead until hospital",
      "Share meds between crews without documentation",
      "Early 12-lead acquisition and STEMI notification"
    ],
    "correctIndex": 3,
    "explanation": "Early ECG and pre-notification reduce time to reperfusion."
  },
  {
    "id": 588,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "To improve STEMI outcomes, the most important EMS action is: (Variant 3)",
    "options": [
      "Contact medical control for protocol deviation and document",
      "Use non-structured handoff only",
      "Early 12-lead acquisition and STEMI notification",
      "Delay 12-lead until hospital"
    ],
    "correctIndex": 2,
    "explanation": "Early ECG and pre-notification reduce time to reperfusion."
  },
  {
    "id": 589,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "To improve STEMI outcomes, the most important EMS action is: (Variant 4)",
    "options": [
      "JumpSTART pediatric MCI triage",
      "Hide the error to avoid liability",
      "Treat patient, notify medical control, and document/report the error",
      "Early 12-lead acquisition and STEMI notification"
    ],
    "correctIndex": 3,
    "explanation": "Early ECG and pre-notification reduce time to reperfusion."
  },
  {
    "id": 590,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "To improve STEMI outcomes, the most important EMS action is: (Variant 5)",
    "options": [
      "Hide the error to avoid liability",
      "Treat patient, notify medical control, and document/report the error",
      "Provide care outside protocol without documentation",
      "Early 12-lead acquisition and STEMI notification"
    ],
    "correctIndex": 3,
    "explanation": "Early ECG and pre-notification reduce time to reperfusion."
  },
  {
    "id": 591,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "In an MCI, pediatric triage method commonly used is: (Variant 1)",
    "options": [
      "Early 12-lead acquisition and STEMI notification",
      "JumpSTART pediatric MCI triage",
      "Provide care outside protocol without documentation",
      "Contact medical control for protocol deviation and document"
    ],
    "correctIndex": 1,
    "explanation": "JumpSTART adapts triage for pediatric physiology."
  },
  {
    "id": 592,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "In an MCI, pediatric triage method commonly used is: (Variant 2)",
    "options": [
      "Secure and document controlled substances per policy",
      "Hide the error to avoid liability",
      "JumpSTART pediatric MCI triage",
      "Share meds between crews without documentation"
    ],
    "correctIndex": 2,
    "explanation": "JumpSTART adapts triage for pediatric physiology."
  },
  {
    "id": 593,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "In an MCI, pediatric triage method commonly used is: (Variant 3)",
    "options": [
      "Contact medical control for protocol deviation and document",
      "Provide care outside protocol without documentation",
      "JumpSTART pediatric MCI triage",
      "Early 12-lead acquisition and STEMI notification"
    ],
    "correctIndex": 2,
    "explanation": "JumpSTART adapts triage for pediatric physiology."
  },
  {
    "id": 594,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "In an MCI, pediatric triage method commonly used is: (Variant 4)",
    "options": [
      "Use non-structured handoff only",
      "Secure and document controlled substances per policy",
      "Share meds between crews without documentation",
      "JumpSTART pediatric MCI triage"
    ],
    "correctIndex": 3,
    "explanation": "JumpSTART adapts triage for pediatric physiology."
  },
  {
    "id": 595,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "In an MCI, pediatric triage method commonly used is: (Variant 5)",
    "options": [
      "Early 12-lead acquisition and STEMI notification",
      "Share meds between crews without documentation",
      "JumpSTART pediatric MCI triage",
      "Contact medical control for protocol deviation and document"
    ],
    "correctIndex": 2,
    "explanation": "JumpSTART adapts triage for pediatric physiology."
  },
  {
    "id": 596,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "If you must deviate from protocol due to unusual circumstances, you should: (Variant 1)",
    "options": [
      "Provide care outside protocol without documentation",
      "JumpSTART pediatric MCI triage",
      "Hide the error to avoid liability",
      "Contact medical control for protocol deviation and document"
    ],
    "correctIndex": 3,
    "explanation": "Protocol deviations require medical direction when possible and clear documentation."
  },
  {
    "id": 597,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "If you must deviate from protocol due to unusual circumstances, you should: (Variant 2)",
    "options": [
      "Provide care outside protocol without documentation",
      "Hide the error to avoid liability",
      "Share meds between crews without documentation",
      "Contact medical control for protocol deviation and document"
    ],
    "correctIndex": 3,
    "explanation": "Protocol deviations require medical direction when possible and clear documentation."
  },
  {
    "id": 598,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "If you must deviate from protocol due to unusual circumstances, you should: (Variant 3)",
    "options": [
      "Treat patient, notify medical control, and document/report the error",
      "Early 12-lead acquisition and STEMI notification",
      "Contact medical control for protocol deviation and document",
      "Share meds between crews without documentation"
    ],
    "correctIndex": 2,
    "explanation": "Protocol deviations require medical direction when possible and clear documentation."
  },
  {
    "id": 599,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "If you must deviate from protocol due to unusual circumstances, you should: (Variant 4)",
    "options": [
      "Secure and document controlled substances per policy",
      "Treat patient, notify medical control, and document/report the error",
      "Contact medical control for protocol deviation and document",
      "Hide the error to avoid liability"
    ],
    "correctIndex": 2,
    "explanation": "Protocol deviations require medical direction when possible and clear documentation."
  },
  {
    "id": 600,
    "level": "Paramedic",
    "category": "EMS Operations",
    "text": "If you must deviate from protocol due to unusual circumstances, you should: (Variant 5)",
    "options": [
      "Secure and document controlled substances per policy",
      "Use non-structured handoff only",
      "Share meds between crews without documentation",
      "Contact medical control for protocol deviation and document"
    ],
    "correctIndex": 3,
    "explanation": "Protocol deviations require medical direction when possible and clear documentation."
  }
];
