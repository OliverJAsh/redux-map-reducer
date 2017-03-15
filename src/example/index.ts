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

const componentMapReducer = mapReducer(action => action.componentId, componentReducer)

// Test

const initialComponentMap: DropDownMenuStateMap | undefined = undefined
const componentId = 1
const componentMap = componentMapReducer(initialComponentMap, new ToggleAction(componentId))
console.log(JSON.stringify({ componentMap }))
