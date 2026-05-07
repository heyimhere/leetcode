const info = {
  name: "John",
  address: {
    city: "Austin",
    zip: {
      code: "78701",
      plus4: "1234",
    },
  },
  hobbies: ["coding", "gaming"],
};

const flattenObject = (obj, value = "", result = {}) => {
  // code here
  for (let key in obj) {
    const newKey = value ? `${value}.${key}` : key;
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
};

console.log("flat object", flattenObject(info));

const obj2 = {
  name: "John",
  "address.city": "Austin",
  "address.zip.code": "78701",
  "address.zip.plus4": "1234",
  hobbies: ["coding", "gaming"],
};

const unflattenObject = (obj) => {
  // code here
  const result = {};

  for (let key in obj) {
    const keys = key.split(".");
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        current[keys[i]] = obj[key];
      } else {
        current[keys[i]] = current[keys[i]] || {};
        current = current[keys[i]];
      }
    }
  }

  return result;
};

console.log("un falt obj", unflattenObject(obj2));
