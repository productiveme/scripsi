import { map } from 'lodash';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';

import { INodeType, NodeTypeProps } from '..';
import { NodeTextEditor } from '../../ui/node-view/node-text-editor';
import { ChildNodeList } from '../util/child-node-list';

const definition: INodeType = {
  component: observer(({ node }: NodeTypeProps) => {
    return (
      <div>
        {node.isVisible && <NodeTextEditor node={node} />}
        <ChildNodeList node={node} />
      </div>
    );
  })
};

export default definition;
