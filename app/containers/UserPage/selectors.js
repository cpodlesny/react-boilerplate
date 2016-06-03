import { createSelector } from 'reselect';

/**
 * Direct selector to the userPage state domain
 */
const selectUserPageDomain = () => state => state.get('userPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserPage
 */

const selectUserPage = () => createSelector(
  selectUserPageDomain(),
  (substate) => substate.toJS()
);

export default selectUserPage;
export {
  selectUserPageDomain,
};
