import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test('collapsed should be false', () => {
    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_CONSTANT});

    expect(newState.collapsed).toBe(false);
})

test('REDUCER SHOULD THROW ERROR BECAUSE ACTION TYPE IS INCORRECT', () => {
    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: "FAKE"});
    }).toThrowError();
})
