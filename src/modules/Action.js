// @flow

import { type CoreContextAction } from './Core/Context/action.js'
import { type SendLogsAction } from './Logs/action.js'
import { type DeleteWalletModalAction } from './UI/scenes/WalletList/components/DeleteModal/actions.js'
import { type GetSeedModalAction } from './UI/scenes/WalletList/components/GetSeedModal/actions.js'
import { type RenameWalletModalAction } from './UI/scenes/WalletList/components/RenameModal/actions.js'
import { type ResyncWalletModalAction } from './UI/scenes/WalletList/components/ResyncModal/actions.js'
import { type SplitWalletModalAction } from './UI/scenes/WalletList/components/SplitModal/actions.js'
import { type XPubModalAction } from './UI/scenes/WalletList/components/XPubModal/actions.js'

type ActionType =
  // | 'CLOSE_DELETE_WALLET_MODAL'
  // | 'CLOSE_GETSEED_WALLET_MODAL'
  // | 'CLOSE_RENAME_WALLET_MODAL'
  // | 'CLOSE_RESYNC_WALLET_MODAL'
  // | 'CLOSE_SPLIT_WALLET_MODAL'
  // | 'LOCK_WALLET_SEED'
  // | 'OPEN_DELETE_WALLET_MODAL'
  // | 'OPEN_GETSEED_WALLET_MODAL'
  // | 'OPEN_RENAME_WALLET_MODAL'
  // | 'OPEN_RESYNC_WALLET_MODAL'
  // | 'OPEN_SPLIT_WALLET_MODAL'
  // | 'OPEN_VIEWXPUB_WALLET_MODAL'
  // | 'CLOSE_VIEWXPUB_WALLET_MODAL'
  // | 'UNLOCK_WALLET_SEED'
  | 'SWAP_FROM_TO_CRYPTO_WALLETS'
  | 'OPEN_WALLET_SELECTOR_MODAL'
  | 'UPDATE_SHIFT_TRANSACTION_FEE'
  | 'INVALIDATE_SHIFT_TRANSACTION'
  | 'SHIFT_CRYPTO_CURRENCY'
  | 'SHIFT_COMPLETE'
  | 'SHIFT_ERROR'
  | 'CLOSE_CRYPTO_EXEC_CONF_MODAL'
  | 'SET_FROM_WALLET_MAX'
  | 'RECEIVED_T_RANSACTION_ERROR'
  | 'RECEIVED_INSUFFICENT_FUNDS_ERROR'
  | 'GENERIC_SHAPE_SHIFT_ERROR'
  | 'ON_AVAILABLE_SHAPE_SHIFT_TOKENS'
  | 'START_SHIFT_TRANSACTION'
  | 'DONE_SHIFT_TRANSACTION'
  | 'OPEN_AB_ALERT'
  | 'CLOSE_AB_ALERT'
  | 'USE_LEGACY_REQUEST_ADDRESS'
  | 'USE_REGULAR_REQUEST_ADDRESS'
  | 'UPDATE_RECEIVE_ADDRESS_SUCCESS'
  | 'NEW_RECEIVE_ADDRESS'
  | 'PROCESS_EDGE_LOGIN'
  | 'SAVE_EDGE_LOBBY'
  | 'INVALIDATE_EDGE_LOBBY'
  | 'SET_LOBBY_ERROR'
  | 'ERASE_DEEP_LINK'
  | 'ACCOUNT_INIT_COMPLETE'
  | 'DISABLE_OTP_RESET'
  | 'SET_CONFIRM_PASSWORD_ERROR'
  | 'ACCOUNT/LOGGED_IN'
  | 'LOGOUT'
  // | 'CORE/CONTEXT/ADD_CONTEXT'
  // | 'CORE/CONTEXT/ADD_USERNAMES'
  // | 'CORE/CONTEXT/DELETE_LOCAL_ACCOUNT_REQUEST'
  // | 'CORE/CONTEXT/DELETE_LOCAL_ACCOUNT_SUCCESS'
  // | 'CORE/CONTEXT/DELETE_LOCAL_ACCOUNT_ERROR'
  | 'CORE/WALLETS/UPDATE_WALLETS'
  | 'EXCHANGE_RATES/UPDATE_EXCHANGE_RATES'
  // | 'LOGS/SEND_LOGS_PENDING'
  // | 'LOGS/SEND_LOGS_REQUEST'
  // | 'LOGS/SEND_LOGS_SUCCESS'
  // | 'LOGS/SEND_LOGS_FAILURE'
  | 'OPEN_SELECT_USER'
  | 'CLOSE_SELECT_USER'
  | 'LIST_USER_USER_SIDE_MENU'
  | 'SELECT_USERS_SIDE_MENU'
  | 'REMOVE_USERS_SIDE_MENU'
  | 'UI/COMPONENTS/DROPDOWN_ALERT/DISPLAY_DROPDOWN_ALERT'
  | 'UI/COMPONENTS/DROPDOWN_ALERT/DISMISS_DROPDOWN_ALERT'
  | 'UI/COMPONENTS/ERROR_ALERT/DISPLAY_ERROR_ALERT'
  | 'UI/COMPONENTS/ERROR_ALERT/DISMISS_ERROR_ALERT'
  | 'UPDATE_EXCHANGE_RATES'
  | 'OPEN_HELP_MODAL'
  | 'CLOSE_HELP_MODAL'
  | 'SHOW_PASSWORD_RECOVERY_MODAL'
  | 'HIDE_PASSWORD_RECOVERY_MODAL'
  | 'PASSWORD_REMINDER_MODAL/CHECK_PASSWORD_START'
  | 'PASSWORD_REMINDER_MODAL/CHECK_PASSWORD_SUCCESS'
  | 'PASSWORD_REMINDER_MODAL/CHECK_PASSWORD_FAIL'
  | 'PASSWORD_REMINDER_MODAL/REQUEST_CHANGE_PASSWORD'
  | 'PASSWORD_REMINDER_MODAL/PASSWORD_REMINDER_POSTPONED'
  | 'PASSWORD_REMINDER_MODAL/SET_PASSWORD_REMINDER_START'
  | 'PASSWORD_REMINDER_MODAL/SET_PASSWORD_REMINDER_SUCCESS'
  | 'PASSWORD_REMINDER_MODAL/SET_PASSWORD_REMINDER_FAIL'
  | 'UI/COMPONENTS/TRANSACTION_ALERT/DISPLAY_TRANSACTION_ALERT'
  | 'UI/COMPONENTS/TRANSACTION_ALERT/DISMISS_TRANSACTION_ALERT'
  | 'TOGGLE_SELECTED_WALLET_LIST_MODAL'
  | 'ENABLE_SELECTED_WALLET_LIST_MODAL'
  | 'DISABLE_SELECTED_WALLET_LIST_MODAL'
  | 'TOGGLE_SCAN_TO_WALLET_LIST_MODAL'
  | 'ENABLE_SCAN_TO_WALLET_LIST_MODAL'
  | 'DISABLE_SCAN_TO_WALLET_LIST_MODAL'
  | 'TOGGLE_WALLET_LIST_MODAL_VISIBILITY'
  | 'ENABLE_WALLET_LIST_MODAL_VISIBILITY'
  | 'DISABLE_WALLET_LIST_MODAL_VISIBILITY'
  | 'TOGGLE_TRANSACTIONS_WALLET_LIST_MODAL'
  | 'ENABLE_TRANSACTIONS_WALLET_LIST_MODAL'
  | 'DISABLE_TRANSACTIONS_WALLET_LIST_MODAL'
  | 'SET_KEYBOARD_HEIGHT'
  | 'ADD_TOKEN_START'
  | 'ADD_TOKEN_SUCCESS'
  | 'ADD_NEW_CUSTOM_TOKEN_SUCCESS'
  | 'ADD_NEW_CUSTOM_TOKEN_FAILURE'
  | 'UPDATE_WALLET_NAME'
  | 'SELECT_WALLET_TYPE'
  | 'SELECT_FIAT'
  | 'UI/WALLETS/UPSERT_WALLETS'
  | 'UI/WALLETS/ACTIVATE_WALLET_ID'
  | 'UI/WALLETS/ARCHIVE_WALLET_ID'
  | 'UI/WALLETS/SELECT_WALLET'
  | 'MANAGE_TOKENS'
  | 'MANAGE_TOKENS_START'
  | 'MANAGE_TOKENS_SUCCESS'
  | 'DELETE_CUSTOM_TOKEN_START'
  | 'DELETE_CUSTOM_TOKEN_SUCCESS'
  | 'DELETE_CUSTOM_TOKEN_FAILURE'
  | 'UPDATE_WALLET_ENABLED_TOKENS'
  | 'EDIT_CUSTOM_TOKEN_START'
  | 'EDIT_CUSTOM_TOKEN_SUCCESS'
  | 'EDIT_CUSTOM_TOKEN_FAILURE'
  | 'UPDATE_EXISTING_TOKEN_SUCCESS'
  | 'OVERWRITE_THEN_DELETE_TOKEN_SUCCESS'
  | 'ADD_NEW_TOKEN_THEN_DELETE_OLD_SUCCESS'
  | 'UPDATE_WALLET_LOADING_PROGRESS'
  | 'INSERT_WALLET_IDS_FOR_PROGRESS'
  | 'CLOSE_ALL_WALLET_LIST_MODALS'
  // | 'UI/WALLETS/CREATE_WALLET_START'
  // | 'UI/WALLETS/CREATE_WALLET_SUCCESS'
  // | 'UI/WALLETS/CREATE_WALLET_FAILURE'
  | 'UI/WALLETS/REFRESH_RECEIVE_ADDRESS'
  | 'UPDATE_CURRENT_SCENE_KEY'
  | 'UI/SETTINGS/SET_LOGIN_STATUS'
  | 'UI/SETTINGS/ADD_EXCHANGE_TIMER'
  | 'UI/SETTINGS/UPDATE_SETTINGS'
  | 'UI/SETTINGS/LOAD_SETTINGS'
  | 'UI/SETTINGS/TOUCH_ID_SETTINGS'
  | 'UI/SETTINGS/OTP_SETTINGS'
  | 'UI/SETTINGS/CHANGE_TOUCH_ID_SETTINGS'
  | 'UI/SETTINGS/SET_PIN_MODE'
  | 'UI/SETTINGS/SET_PIN'
  | 'UI/SETTINGS/SET_OTP_MODE'
  | 'UI/SETTINGS/SET_OTP'
  | 'UI/SETTINGS/TOGGLE_PIN_LOGIN_ENABLED'
  | 'UI/SETTINGS/SET_AUTO_LOGOUT_TIME'
  | 'UI/SETTINGS/SET_DEFAULT_FIAT'
  | 'UI/SETTINGS/SET_MERCHANT_MODE'
  | 'UI/SETTINGS/SET_SETTINGS_LOCK'
  | 'UI/SETTINGS/SET_BLUETOOTH_MODE'
  | 'UI/SETTINGS/SET_ACCOUNT_BALANCE_VISIBILITY'
  | 'UPDATE_WALLET_FIAT_BALANCE_VISIBILITY'
  | 'UI/SETTINGS/SET_BITCOIN_OVERRIDE_SERVER'
  | 'UI/SETTINGS/SET_DENOMINATION_KEY'
  | 'UI/SETTINGS/ADD_CURRENCY_PLUGIN'
  | 'UI/SETTINGS/SET_CUSTOM_TOKENS'
  | 'PASSWORD_REMINDER/PASSWORD_REMINDER_POSTPONED'
  | 'SHOW_DELETE_TOKEN_MODAL'
  | 'HIDE_DELETE_TOKEN_MODAL'
  | 'UPDATE_RECEIVE_ADDRESS_ERROR'
  | 'UPDATE_AMOUNT_REQUESTED_IN_CRYPTO'
  | 'UPDATE_AMOUNT_RECEIVED_IN_CRYPTO'
  | 'UPDATE_AMOUNT_REQUESTED_IN_FIAT'
  | 'UPDATE_INPUT_CURRENCY_SELECTED'
  | 'LEGACY_ADDRESS_MODAL/ACTIVATED'
  | 'LEGACY_ADDRESS_MODAL/DEACTIVATED'
  | 'LEGACY_ADDRESS_MODAL/TOGGLED'
  | 'PRIVATE_KEY_MODAL/PRIMARY_MODAL/ACTIVATED'
  | 'PRIVATE_KEY_MODAL/PRIMARY_MODAL/DEACTIVATED'
  | 'PRIVATE_KEY_MODAL/SECONDARY_MODAL/ACTIVATED'
  | 'PRIVATE_KEY_MODAL/SECONDARY_MODAL/DEACTIVATED'
  | 'PRIVATE_KEY_MODAL/SWEEP_PRIVATE_KEY_START'
  | 'PRIVATE_KEY_MODAL/SWEEP_PRIVATE_KEY_SUCCESS'
  | 'PRIVATE_KEY_MODAL/SWEEP_PRIVATE_KEY_FAIL'
  | 'PRIVATE_KEY_MODAL/SWEEP_PRIVATE_KEY_RESET'
  | 'TOGGLE_ENABLE_TORCH'
  | 'TOGGLE_ADDRESS_MODAL_VISIBILITY'
  | 'ENABLE_SCAN'
  | 'DISABLE_SCAN'
  | 'PARSE_URI_SUCCEEDED'
  | 'PARSE_URI_FAILED'
  | 'PARSE_URI_RESET'
  | 'UNIQUE_IDENTIFIER_MODAL/ACTIVATED'
  | 'UNIQUE_IDENTIFIER_MODAL/DEACTIVATED'
  | 'UNIQUE_IDENTIFIER_MODAL/RESET'
  | 'UNIQUE_IDENTIFIER_MODAL/UNIQUE_IDENTIFIER_CHANGED'
  | 'UI/SEND_CONFIMATION/MAKE_SPEND_FAILED'
  | 'UI/SEND_CONFIMATION/NEW_SPEND_INFO'
  | 'UI/SEND_CONFIMATION/RESET'
  | 'UI/SEND_CONFIMATION/UPDATE_PAYMENT_PROTOCOL_TRANSACTION'
  | 'UI/SEND_CONFIMATION/UPDATE_TRANSACTION'
  | 'UI/SEND_CONFIMATION/UPDATE_SPEND_PENDING'
  | 'UI/SEND_CONFIMATION/NEW_PIN'
  | 'UI/SCENES/SETTINGS/SET_PIN_MODE_START'
  | 'UI/SCENES/SETTINGS/SET_PIN_START'
  | 'UI/SCENES/SETTINGS/SET_DEFAULT_FIAT_START'
  | 'UI/SCENES/SETTINGS/SET_MERCHANT_MODE_START'
  | 'UI/SCENES/SETTINGS/SET_BLUETOOTH_MODE_START'
  | 'UI/SCENES/SETTINGS/SET_BITCOIN_OVERRIDE_SERVER_START'
  | 'UI/SCENES/SETTINGS/SELECT_DEFAULT_FIAT'
  | 'SET_TRANSACTION_SUBCATEGORIES'
  | 'UI/SCENES/TRANSACTION_LIST/UPDATE_TRANSACTIONS'
  | 'NOOP'
  | 'UI/SCENES/TRANSACTION_LIST/DELETE_TRANSACTIONS_LIST'
  | 'UI/SCENES/TRANSACTION_LIST/TRANSACTIONS_SEARCH_VISIBLE'
  | 'UI/SCENES/TRANSACTION_LIST/TRANSACTIONS_SEARCH_HIDDEN'
  | 'UI/SCENES/TRANSACTION_LIST/UPDATE_CONTACTS_LIST'
  | 'UI/SCENES/TRANSACTION_LIST/UPDATE_SEARCH_RESULTS'
  | 'CLOSE_DELETE_WALLET_MODAL'
  | 'DELETE_WALLET_START'
  | 'CLOSE_DELETE_WALLET_SUCCESS'
  | 'CLOSE_GETSEED_WALLET_MODAL'
  | 'RESYNC_WALLET_START'
  | 'CLOSE_RESYNC_WALLET_MODAL'
  | 'CLOSE_RESYNC_WALLET_SUCCESS'
  | 'SPLIT_WALLET_START'
  | 'CLOSE_SPLIT_WALLET_SUCCESS'
  | 'CLOSE_SPLIT_WALLET_MODAL'
  | 'CLOSE_RENAME_WALLET_SUCCESS'
  | 'CLOSE_RENAME_WALLET_MODAL'
  | 'UPDATE_RENAME_WALLET_INPUT'
  | 'ARCHIVE_WALLET_START'
  | 'ARCHIVE_WALLET_SUCCESS'
  | 'ACTIVATE_WALLET_START'
  | 'ACTIVATE_WALLET_SUCCESS'
  | 'TOGGLE_ARCHIVE_VISIBILITY'
  | 'UPDATE_ACTIVE_WALLETS_ORDER_START'
  | 'UPDATE_ACTIVE_WALLETS_ORDER_SUCCESS'
  | 'UPDATE_ARCHIVED_WALLETS_ORDER_START'
  | 'UPDATE_ARCHIVED_WALLETS_ORDER_SUCCESS'
  | 'ADD_TOKEN'
  | 'CLOSE_CUSTOM_FEES_MODAL'
  | 'OPEN_CUSTOM_FEES_MODAL'
  | 'UPDATE_WALLET_TRANSFER_LIST'
  | 'TOGGLE_WALLET_LIST_MODAL_VISIBILITY'
  | 'CONTACTS/LOAD_CONTACTS_START'
  | 'CONTACTS/LOAD_CONTACTS_SUCCESS'
  | 'PERMISSIONS/UPDATE'
  | 'RENAME_WALLET_START'
  | 'SPENDING_LIMITS/NEW_SPENDING_LIMITS'
  | 'UPDATE_SHOW_PASSWORD_RECOVERY_REMINDER_MODAL'
  | 'LOGGED_OUT'
  | 'DEEP_LINK_RECEIVED'
  | 'UPDATE_METADATA'
  | 'DUMMY_ACTION_PLEASE_IGNORE'
  | 'UI/SCENES/TRANSACTION_LIST/ENABLE_UPDATING_BALANCE'
  | 'UI/SCENES/TRANSACTION_LIST/DISABLE_UPDATING_BALANCE'
  | 'UI/SCENES/TRANSACTION_LIST/TOGGLE_UPDATING_BALANCE'
  | 'SET_TOKEN_SETTINGS'
  | 'ON_KYC_TOKEN_SET'
// | 'SELECT_TO_WALLET_CRYPTO_EXCHANGE'

type LegacyAction = {
  type: ActionType,
  data?: any
}

export type Action =
  | LegacyAction
  | DeleteWalletModalAction
  | GetSeedModalAction
  | RenameWalletModalAction
  | ResyncWalletModalAction
  | SplitWalletModalAction
  | XPubModalAction
  | CoreContextAction
  | SendLogsAction
  | {
      type: 'SELECT_TO_WALLET_CRYPTO_EXCHANGE',
      data?: any
    }
  | {
      type: 'SELECT_FROM_WALLET_CRYPTO_EXCHANGE',
      data?: any
    }
  | { type: 'UI/WALLETS/CREATE_WALLET_START' }
  | { type: 'UI/WALLETS/CREATE_WALLET_SUCCESS' }
  | { type: 'UI/WALLETS/CREATE_WALLET_FAILURE' }
