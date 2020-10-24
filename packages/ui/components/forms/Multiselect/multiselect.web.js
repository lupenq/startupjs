import React from 'react'
import { observer, u } from 'startupjs'
import { Div, Popover } from '@startupjs/ui'
import PropTypes from 'prop-types'
import MultiselectInput from './input'
import './index.styl'

const Multiselect = ({
  options,
  value,
  placeholder,
  label,
  showOptsMenu,
  hideOptsMenu,
  showOpts,
  disabled,
  readonly,
  popoverWidth,
  error,
  TagComponent,
  renderListItem,
  onSelect,
  onRemove
}) => {
  return pug`
    Popover.root(
      visible=showOpts
      onDismiss=hideOptsMenu
      width=popoverWidth
      maxHeight=u(20)
    )
      Popover.Caption
        MultiselectInput(
          label=label
          showOptsMenu=showOptsMenu
          showOpts=showOpts
          value=value
          placeholder=placeholder
          options=options
          disabled=disabled
          error=error
          readonly=readonly
          TagComponent=TagComponent
        )
      Div.suggestions-web
        each opt in options
          = renderListItem({ item: opt })
  `
}

Multiselect.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  showOptsMenu: PropTypes.func.isRequired,
  hideOptsMenu: PropTypes.func.isRequired,
  showOpts: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  popoverWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  TagComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  renderListItem: PropTypes.func
}

export default observer(Multiselect)
