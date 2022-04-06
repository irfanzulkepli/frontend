import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { StoreCredentials } from "./account-action";

export interface AccountStateModel {
    accessToken: string,
    refreshToken: string,
    tokenType: string
};

@State<AccountStateModel>({
    name: 'AccountState',
    defaults: {
        accessToken: null,
        refreshToken: null,
        tokenType: null
    }
})
@Injectable()
export class AccountState {
    constructor() {
    }

    @Action(StoreCredentials)
    public storeCredentials(
        { patchState, getState }: StateContext<AccountStateModel>,
        { payload }: StoreCredentials
    ) {
        return patchState({
            accessToken: payload.accessToken,
            refreshToken: payload.refreshToken,
            tokenType: payload.tokenType
        });
    }
}