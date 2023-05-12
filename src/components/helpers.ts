export const isEmpty = (obj: any) => {
  return Object.keys(obj).length === 0;
};

export const isString = (value: any) => {
  return typeof value === "string";
};

export const isBoolean = (value: any) => {
  return typeof value === "boolean";
};

export const isNumber = (value: any) => {
  return typeof value === "number" && isFinite(value);
};

export const toLower = (value: string) => {
  return value.toLowerCase();
};

export const isEqual = (value1: any, value2: any): boolean => {
  // Handle primitive types
  if (value1 === value2) {
    return true;
  }

  // Handle arrays
  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (value1.length !== value2.length) {
      return false;
    }

    for (let i = 0; i < value1.length; i++) {
      if (!isEqual(value1[i], value2[i])) {
        return false;
      }
    }

    return true;
  }

  // Handle objects
  if (typeof value1 === "object" && typeof value2 === "object") {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (!isEqual(value1[key], value2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
};
