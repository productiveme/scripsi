import * as React from 'react';
import { DragSource } from 'react-dnd';
import { NodeContext } from '.';
import { nodes } from '../../main';
import { NodePosition, SNode } from '../../nodes';

interface NodeDragAnchorProps {
  node: SNode;
  context: NodeContext;
}
@DragSource<NodeDragAnchorProps>('node', {
  beginDrag: (props, monitor, component) => ({
    nodeId: props.node.id,
    // ancestry: props.ancestry,
  }),
  canDrag: (props, monitor) => {
    if (props.context.ancestry.length === 0) return false;
    return true;
  },
  endDrag: (props, monitor, component) => {
    const dropResult = monitor.getDropResult();

    if (!dropResult || !dropResult['dropPosition']) {
      return;
    }

    try {
      const currentPosition = props.context.ancestry[props.context.ancestry.length - 1];
      const newPosition = dropResult['dropPosition'] as NodePosition;
      nodes.moveNode(props.node.id, currentPosition, newPosition); // TODO -- determine ix?
    } catch (e) {
      console.error('Error finalizing drag operation', e);
      return;
    }
  }
}, (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  };
})
export class NodeDragAnchor extends React.Component<NodeDragAnchorProps, {}> {

  public constructor(props) {
    super(props);
  }

  public render() {
    return this.props['connectDragSource'](
      <div>
        {this.props.children}
      </div>
    );
  }

}
