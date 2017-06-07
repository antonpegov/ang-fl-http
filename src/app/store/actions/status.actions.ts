import { Injectable } from "@angular/core";
import { Action } from "app/app.state";

@Injectable()
export class StatusActions {

    /*
    *   События взаимодействия с бэкендом
    */

    static DATA_LOADING = 'DATA_LOADING';
    public dataLoading(message): Action {
        return {
            type: StatusActions.DATA_LOADING,
            payload: 'loading ' + message + ' ...'
        }
    }
    static DATA_LOADED = 'DATA_LOADED';
    public dataLoaded(message): Action {
        return {
            type: StatusActions.DATA_LOADED,
            payload: message + ' loaded'
        }
    }    
    static DATA_NOT_LOADED = 'DATA_NOT_LOADED';
    public dataLoadingError(message): Action {
        return {
            type: StatusActions.DATA_NOT_LOADED,
            payload: 'Error loading ' + message + '!'
        }
    }
    static DATA_SAVING = 'DATA_SAVING';
    public dataSaving(message): Action {
        return {
            type: StatusActions.DATA_SAVING,
            payload: 'saving' + message + ' ...' 
        }
    }
    static DATA_SAVED = 'DATA_SAVED';
    public dataSaved(message): Action {
        return {
            type: StatusActions.DATA_SAVED,
            payload: message + ' saved'
        }
    }
    static DATA_NOT_SAVED = 'DATA_NOT_SAVED';
    public dataSavingError(message): Action {
        return {
            type: StatusActions.DATA_NOT_SAVED,
            payload: 'Error saving ' + message + '!'
        }
    }

    /*
    *   События для отслеживания начальной инициализации данных
    */

    static INITIALIZING = 'INITIALIZING';
    public initialize(): Action {
        return {
            type: StatusActions.INITIALIZING,
            payload: undefined
        }
    }
    static INITIALIZED = 'INITIALIZED';
    public initialized(): Action {
        return {
            type: StatusActions.INITIALIZED,
            payload: undefined
        }
    }

}