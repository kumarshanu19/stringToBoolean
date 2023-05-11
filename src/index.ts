function stringToBoolean(stringValue: string | null | undefined): boolean {
  if (stringValue) {
    const lowerCaseValue = stringValue.toLowerCase().trim();

    if (
      lowerCaseValue === 'true' ||
      lowerCaseValue === 'yes' ||
      lowerCaseValue === '1'
    ) {
      return true;
    } else if (
      lowerCaseValue === 'false' ||
      lowerCaseValue === 'no' ||
      lowerCaseValue === '0'
    ) {
      return false;
    } else {
      try {
        return JSON.parse(stringValue);
      } catch (error) {
        throw new Error('Invalid boolean string');
      }
    }
  } else {
    return false;
  }
}

export default stringToBoolean;
