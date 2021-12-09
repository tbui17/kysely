import { freeze } from '../util/object-utils.js'
import { AndNode } from './and-node.js'
import { FilterExpressionNode } from './operation-node-utils.js'
import { OperationNode } from './operation-node.js'
import { OrNode } from './or-node.js'

export interface WhereNode extends OperationNode {
  readonly kind: 'WhereNode'
  readonly where: FilterExpressionNode
}

/**
 * @internal
 */
export const WhereNode = freeze({
  is(node: OperationNode): node is WhereNode {
    return node.kind === 'WhereNode'
  },

  create(filter: FilterExpressionNode): WhereNode {
    return freeze({
      kind: 'WhereNode',
      where: filter,
    })
  },

  cloneWithFilter(
    whereNode: WhereNode,
    op: 'And' | 'Or',
    filter: FilterExpressionNode
  ): WhereNode {
    return freeze({
      ...whereNode,
      where:
        op === 'And'
          ? AndNode.create(whereNode.where, filter)
          : OrNode.create(whereNode.where, filter),
    })
  },
})
