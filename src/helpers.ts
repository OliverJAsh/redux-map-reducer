import { Action as ReduxAction } from 'redux';

// Until Redux type definitions are fixed for reducer, use our own
// https://github.com/reactjs/redux/pull/2291
// type Reducer<State> = <A extends ReduxAction>(state: State | undefined, action: A) => State
export type Reducer<State, Action extends ReduxAction> = (state: State | undefined, action: Action) => State
