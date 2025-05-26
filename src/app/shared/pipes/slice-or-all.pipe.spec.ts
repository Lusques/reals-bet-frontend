import { SliceOrAllPipe } from './slice-or-all.pipe';

describe('SliceOrAllPipe', () => {
  let pipe: SliceOrAllPipe;
  const inputExpectingEmptyArray = [
    { value: null, description: 'null' },
    { value: undefined, description: 'undefined' },
    { value: [], description: 'an empty array' },
  ];
  const baseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const baseTinyArray = baseArray.slice(0, 3);
  beforeEach(() => {
    pipe = new SliceOrAllPipe();
  });
  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });
  describe('when input value is null, undefined, or empty', () => {
    inputExpectingEmptyArray.forEach((testCase) => {
      it(`should return an empty array if value is ${testCase.description}`, () => {
        expect(pipe.transform(testCase.value as any)).toEqual([]);
      });
    });
  });

  describe('when showAll parameter is true', () => {
    it('should return the full array when showAll is true, regardless of limit', () => {
      const data = baseArray;
      const limit = 3;
      const showAll = true;
      expect(pipe.transform(data, limit, showAll)).toEqual(data);
    });

    it("should return the full array even if it's smaller than the limit and showAll is true", () => {
      const data = baseTinyArray;
      const limit = 5;
      const showAll = true;
      expect(pipe.transform(data, limit, showAll)).toEqual(data);
    });
  });

  describe('when showAll parameter is false', () => {
    it('should return a sliced array when showAll is false and value length is greater than limit', () => {
      const data = baseArray.slice(0, 7);
      const limit = 5;
      const dataSlice = data.slice(0, limit);
      const showAll = false;
      expect(pipe.transform(data, limit, showAll)).toEqual(dataSlice);
    });

    it('should return the full array when showAll is false but value length is less than or equal to limit', () => {
      const data = baseTinyArray;
      const limit = 5;
      const showAll = false;
      expect(pipe.transform(data, limit, showAll)).toEqual(data);
    });

    it('should use the default limit (7) when showAll is false and no limit is provided', () => {
      const data = baseArray;
      const showAll = false;
      expect(pipe.transform(data, undefined, showAll)).toEqual(
        data.slice(0, 7)
      );
    });
  });
});
