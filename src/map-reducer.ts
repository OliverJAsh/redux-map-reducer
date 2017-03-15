import { Map } from 'immutable'
import { Action as ReduxAction } from 'redux';
import { Reducer } from './helpers';

export const mapReducer = <Key, State, Action extends ReduxAction>(
    getKey: (action: Action) => Key,
    reducer: Reducer<State, Action>
) => (
    map: Map<Key, State> = Map<Key, State>(),
    action: Action,
): Map<Key, State> => {
    const key = getKey(action)
    const value = map.get(key);
    const newValue = reducer(value, action)
    const newMap = map.set(key, newValue)
    return newMap
}
