import { action } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';

import classNames = require('classnames');
import { state } from '..';
import { NodeAncestry, SNode } from '../../nodes';
import { NodeDragAnchor } from './node-drag-anchor';
import { NodeMenuAnchor } from './node-menu-anchor';

interface NodeViewAnchorProps {
  node: SNode;
  ancestry: NodeAncestry;
  isOutlined?: boolean;
}

export const NodeViewAnchor = observer(({ node, ancestry, isOutlined }: NodeViewAnchorProps) => {
  const bgColor = isOutlined || node.collapsed  ? 'bg-blue-light' : '';
  return (
    <NodeMenuAnchor node={node} ancestry={ancestry}>
      <NodeDragAnchor node={node} ancestry={ancestry}>
        <div
          className={classNames('w-16 h-2 highlightable flex cursor-pointer', bgColor)}
          onClick={node.toggleCollapsed}
        />
      </NodeDragAnchor>
    </NodeMenuAnchor>
  );
});
