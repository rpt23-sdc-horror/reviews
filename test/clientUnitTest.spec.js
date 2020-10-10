/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
import expect from 'chai';
import { ReviewsModule } from '../react-client/src/index';

describe('Local State', function () {
  it('should retrieve new review data for the state', function () {
    const state = { id: 2, reviews: [] };
    ReviewsModule.componentDidMount();

    expect(newState.counter).to.equal(1);
  });
});
