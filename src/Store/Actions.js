import uuid from 'node-uuid'
import _ from 'lodash'
import * as m from './Mutations'

export const setDisplayNode = makeAction(m.SET_DISPLAY_NODE)
export const setRootNode = makeAction(m.SET_ROOT_NODE)
export const updateNode = makeAction(m.SET_NODE)
export const addBookmark = makeAction(m.ADD_BOOKMARK)
export const setConfigValue = makeAction(m.SET_CONFIG_VALUE)

export function toggleActiveSidebar (store, component) {
  store.dispatch(m.SET_ACTIVE_SIDEBAR, store.state.activeSidebarComponent === component ? null : component)
}

export function createNode (store, params) {
  if (params.id) {
    throw new Error("createNode params include an 'id', but that's forbidden")
  }

  let defaults = {
    type: 'Text',
    content: '',
    children: [],
    params: {},
    collapsed: false
  }

  let node = {
    id: uuid.v4(),
    type: params.type || defaults.type,
    content: params.content || defaults.content,
    params: params.params || defaults.params,
    collapsed: params.collapsed || defaults.collapsed,
    children: _.map(params.children || defaults.children,
                   (child) => createNode(store, child).id)
  }

  updateNode(store, node)
  return node
}

export function createChildNode (store, parentNode, childParams) {
  let childNode = createNode(store, childParams)
  parentNode.children.push(childNode.id)
  store.dispatch(m.SET_NODE, parentNode)

  return childNode
}

export function deleteNode (store, node) {
  // Delete all children before we delete ourselves
  _.each(node.children, (child) => deleteNode(store, child))
  store.dispatch(m.DELETE_NODE, node.id)
}

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}