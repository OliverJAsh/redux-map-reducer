import { DropDownMenuState, DropDownMenuStateMap } from './data-types';
import { ToggleActionType, ToggleAction, Action } from './actions';
import { Reducer } from '../helpers';
import { mapReducer } from '../map-reducer';

const componentReducer: Reducer<DropDownMenuState, Action> = (
    state: DropDownMenuState = new DropDownMenuState(false),
    action: Action
) => {
    switch (action.type) {
        case ToggleActionType: {
            return { ...state, isOpen: !state.isOpen }
        }
    }
}

const componentMapReducer = mapReducer(action => action.id, componentReducer)

// Test

const initialComponentMap: DropDownMenuStateMap | undefined = undefined
const componentMap = componentMapReducer(initialComponentMap, new ToggleAction(1))
console.log(JSON.stringify({ componentMap }))
