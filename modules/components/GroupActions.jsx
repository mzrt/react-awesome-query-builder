import React, { PureComponent } from 'react';
import { Button } from 'antd';
const ButtonGroup = Button.Group;

const groupActionsPositionList = {
  topLeft: 'group--actions--tl',
  topCenter: 'group--actions--tc',
  topRight: 'group--actions--tr',
  bottomLeft: 'group--actions--bl',
  bottomCenter: 'group--actions--bc',
  bottomRight: 'group--actions--br'
}
const defaultPosition = 'topRight';


export class GroupActions extends PureComponent {
  render() {
    const {config: {settings}, addRule, addGroup, canAddGroup, canAddRule, canDeleteGroup, removeSelf} = this.props;
    const {immutableGroupsMode, addRuleLabel, addGroupLabel, delGroupLabel, renderSize, groupActionsPosition} = settings;
    const position = groupActionsPositionList[groupActionsPosition || defaultPosition];

    const addRuleBtn = !immutableGroupsMode && canAddRule &&
      <Button
        key="group-add-rule"
        icon="plus"
        className="action action--ADD-RULE"
        onClick={addRule}
      >{addRuleLabel}</Button>;
    const addGroupBtn = !immutableGroupsMode && canAddGroup &&
      <Button
        key="group-add-group"
        className="action action--ADD-GROUP"
        icon="plus-circle-o"
        onClick={addGroup}
      >{addGroupLabel}</Button>;
    const delGroupBtn = !immutableGroupsMode && canDeleteGroup &&
      <Button
        key="group-del"
        type="danger"
        icon="delete"
        className="action action--DELETE"
        onClick={removeSelf}
      >{delGroupLabel}</Button>;

    return (
      <div className={`group--actions ${position}`}>
        <ButtonGroup
          size={renderSize}
        >
          {addRuleBtn}
          {addGroupBtn}
          {delGroupBtn}
        </ButtonGroup>
      </div>
    )
  }
}
