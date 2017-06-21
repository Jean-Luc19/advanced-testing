import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments_reducer';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    //expect(commentReducer()).to.eql([]); also works
    expect(commentReducer(undefined, {})).to.be.instanceof(Array);
  });

  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment'};
    console.log(commentReducer([], action))
    expect(commentReducer([], action)).to.eql(['new comment'])
  });
})
