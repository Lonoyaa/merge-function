import merge from './merge';
import { expect } from 'chai';
import { describe, it } from 'mocha';


describe('merge', () => {
  it('should merge two sorted arrays', () => {
    const collection_1 = [1, 3, 5, 7];
    const collection_2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6, 7];

    const result = merge(collection_1, collection_2);

    expect(result).to.deep.equal(expected);
  });

  it('should handle empty arrays', () => {
    const collection_1: Array<number> = [];
    const collection_2: Array<number> = [];
    const expected: Array<number> = [];

    const result = merge(collection_1, collection_2);

    expect(result).to.deep.equal(expected);
  });

  it('should handle one empty array', () => {
    const collection_1 = [1, 2, 3];
    const collection_2: Array<number> = [];
    const expected = [1, 2, 3];

    const result = merge(collection_1, collection_2);

    expect(result).to.deep.equal(expected);
  });

  it('should handle arrays with different lengths', () => {
    const collection_1 = [1, 3, 5, 7, 9];
    const collection_2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6, 7, 9];

    const result = merge(collection_1, collection_2);

    expect(result).to.deep.equal(expected);
  });
});
