const patients = [
  { id: "P1", name: "John", age: 25 },
  { id: "P2", name: "Mary", age: 8 },
  { id: "P3", name: "Bob", age: 67 },
  { id: "P4", name: "Alice", age: 45 },
];

const claims = [
  {
    claimId: "C001",
    patientId: "P1",
    procedureCode: "99213",
    placeOfService: "office",
  },
  {
    claimId: "C002",
    patientId: "P2",
    procedureCode: "99213",
    placeOfService: "office",
  },
  {
    claimId: "C003",
    patientId: "P3",
    procedureCode: "99284",
    placeOfService: "emergency",
  },
  {
    claimId: "C004",
    patientId: "P1",
    procedureCode: "99284",
    placeOfService: "office",
  }, // wrong place
  {
    claimId: "C005",
    patientId: "P2",
    procedureCode: "99385",
    placeOfService: "office",
  }, // wrong age
  {
    claimId: "C006",
    patientId: "P4",
    procedureCode: "99385",
    placeOfService: "office",
  },
];

const rules = [
  {
    procedureCode: "99213",
    minAge: 0,
    maxAge: 120,
    allowedPlaces: ["office", "telehealth"],
  },
  {
    procedureCode: "99284",
    minAge: 0,
    maxAge: 120,
    allowedPlaces: ["emergency"],
  },
  { procedureCode: "99385", minAge: 18, maxAge: 39, allowedPlaces: ["office"] },
];

const validator = (claimsObj, patientsArr, rulesObj) => {
  const patientHash = new Map();
  for (let patient of patientsArr) {
    patientHash.set(patient.id, patient);
  }

  const rulesHash = new Map();
  for (let rules of rulesObj) {
    rulesHash.set(rules.procedureCode, rules);
  }

  const results = [];
  for (let claims of claimsObj) {
    const patient = patientHash.get(claims.patientId);
    const rules = rulesHash.get(claims.procedureCode);

    if (!patient && !rules) continue;

    const validAge = patient.age >= rules.minAge && patient.age <= rules.maxAge;
    const validPlace = rules.allowedPlaces.includes(claims.placeOfService);

    if (validAge && validPlace) {
      results.push(claims.claimId);
    }
  }

  return results.sort();
};

console.log("claim ids", validator(claims, patients, rules));
