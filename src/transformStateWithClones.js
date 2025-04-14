'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here

  const results = [];
  let currentState = { ...state };

  for (const action of actions) {
    let newState = { ...currentState };

    if (action.type === 'clear') {
      newState = {};
    }

    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        newState[key] = action.extraData[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete newState[key];
      }
    }

    currentState = newState;
    results.push(currentState);    
  }

  return results;

}

module.exports = transformStateWithClones;
