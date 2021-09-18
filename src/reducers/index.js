import { combineReducers } from "redux";
import { ScreenSize, ShowHeader } from './settingsReducer';
import { AdminLoggedIn } from './adminReducer';
import { Citizens } from './citizensReducer';
import { Web3Provider } from './web3ProviderReducer';
export default combineReducers({
    ScreenSize,
    ShowHeader,
    AdminLoggedIn,
    Citizens,
    Web3Provider
});