/* eslint-disable */

describe('DataValidation', function() {
  beforeEach(() => {
    validation = new DataValidation
  });
  describe("#checkDate", function() {
    it("doesnt validate an incorrect date", function() {
      expect(function() {
        validation.checkDate("invalid")
      }).toThrowError("Date is not in a valid format");
    });
  });
  describe("#checkValue", function() {
    it("doesnt validate an incorrect date", function() {
      expect(function() {
        validation.checkValue("1")
      }).toThrowError("Value is not in a valid format");
    });
  });
});
