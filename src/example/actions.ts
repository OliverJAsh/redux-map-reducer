import { Action as ReduxAction } from 'redux';
import { DropDownMenuId } from './data-types';

export const ToggleActionType = 'Toggle'
export class ToggleAction implements ReduxAction {
    readonly type = ToggleActionType
    constructor(
        public componentId: DropDownMenuId
    ) {}
}

export type Action = ToggleAction
