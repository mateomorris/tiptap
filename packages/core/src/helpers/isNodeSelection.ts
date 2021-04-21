import { NodeSelection } from 'prosemirror-state'
import isObject from '../utilities/isObject'

export default function isNodeSelection(value: unknown): value is NodeSelection {
  return isObject(value) && value instanceof NodeSelection
}
