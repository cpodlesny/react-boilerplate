import expect from 'expect';
import userPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('userPageReducer', () => {
  it('returns the initial state', () => {
    expect(userPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
