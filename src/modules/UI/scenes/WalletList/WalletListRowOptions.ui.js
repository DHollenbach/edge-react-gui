import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'
import FormattedText from '../../components/FormattedText'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MAIcon from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {executeWalletRowOption, updateCurrentWalletBeingRenamed, updateRenameWalletInput } from './action'
import {border as b} from '../../../utils'
import strings from '../../../../locales/default'
import {sprintf} from 'sprintf-js'

class WalletListRowOptions extends Component {
  optionAction (optionKey) {
    this.props.dispatch(executeWalletRowOption(this.props.walletKey, optionKey, this.props.wallets, this.props.archives))
    if (optionKey === 'Rename') {
      this.props.dispatch(updateRenameWalletInput(this.props.wallets[this.props.walletKey].id))
    }
  }

  render () {
    const options = [sprintf(strings.enUS['string_rename']), sprintf(strings.enUS['fragmet_wallets_addtoken_option']), this.props.archiveLabel, sprintf(strings.enUS['string_delete'])]

    // possibly refactor MenuOptions into component that gets looped. Properties could be put into array form
    return (
      <View style={styles.rowDotsWrap}>
        <Menu style={styles.menuButton} onSelect={(value) => this.optionAction(value)}>
          <MenuTrigger style={styles.menuTrigger}>
            <Text style={{fontSize: 20 }}>&#8942;</Text>
          </MenuTrigger>
          <MenuOptions>
            <MenuOption value={options[0]} style={styles.menuOption}>
              <View style={[styles.menuOptionItem, b('green')]}>
                <MAIcon name='edit' size={24} style={[styles.optionIcon, styles.editIcon, b('red')]} />
                <FormattedText style={[styles.optionText]}>{options[0]}</FormattedText>
              </View>
            </MenuOption>
            <MenuOption value={options[1]} style={styles.menuOption}>
              <View style={[styles.menuOptionItem, b('green')]}>
                <MAIcon name='edit' size={24} style={[styles.optionIcon, styles.editIcon, b('red')]} />
                <FormattedText style={[styles.optionText]}>{options[1]}</FormattedText>
              </View>
            </MenuOption>
            <MenuOption value={options[2]} style={styles.menuOption}>
              <View style={[styles.menuOptionItem, b('green')]}>
                {/* <EvilIcons name='archive' size={24} style={[styles.optionIcon, styles.archive, b('red')]} /> */}
                <FormattedText style={[styles.optionText]}>{options[2]}</FormattedText>
              </View>
            </MenuOption>
            <MenuOption value={options[3]} style={styles.menuOption}>
              <View style={[styles.menuOptionItem, b('green')]}>
                <FAIcon name='trash-o' size={24} style={[styles.optionIcon, styles.trashIcon, b('red')]} />
                <FormattedText style={[styles.optionText]}>{options[3]}</FormattedText>
              </View>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    )
  }
}

export default connect(state => ({
  wallets: state.ui.wallets.byId,
  archives: state.ui.wallets.archives
}))(WalletListRowOptions)