import { Map } from 'immutable';

export class DropDownMenuState {
    constructor (
        public isOpen: boolean
    ) {}
}

export type DropDownMenuId = number

export type DropDownMenuStateMap = Map<DropDownMenuId, DropDownMenuState>
