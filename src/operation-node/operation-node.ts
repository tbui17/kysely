export type OperationNodeKind =
  | 'IdentifierNode'
  | 'RawNode'
  | 'SelectQueryNode'
  | 'SelectionNode'
  | 'ReferenceNode'
  | 'ColumnNode'
  | 'TableNode'
  | 'AliasNode'
  | 'FromNode'
  | 'SelectAllNode'
  | 'FilterNode'
  | 'AndNode'
  | 'OrNode'
  | 'ParensNode'
  | 'ValueNode'
  | 'ValueListNode'
  | 'PrimitiveValueListNode'
  | 'JoinNode'
  | 'OperatorNode'
  | 'WhereNode'
  | 'InsertQueryNode'
  | 'DeleteQueryNode'
  | 'ReturningNode'
  | 'CreateTableNode'
  | 'ColumnDefinitionNode'
  | 'AddColumnNode'
  | 'DropTableNode'
  | 'DataTypeNode'
  | 'OrderByNode'
  | 'OrderByItemNode'
  | 'GroupByNode'
  | 'GroupByItemNode'
  | 'UpdateQueryNode'
  | 'ColumnUpdateNode'
  | 'LimitNode'
  | 'OffsetNode'
  | 'OnConflictNode'
  | 'OnDuplicateKeyNode'
  | 'CreateIndexNode'
  | 'DropIndexNode'
  | 'ListNode'
  | 'ReferencesNode'
  | 'PrimaryKeyConstraintNode'
  | 'UniqueConstraintNode'
  | 'CheckConstraintNode'
  | 'ForeignKeyConstraintNode'
  | 'WithNode'
  | 'CommonTableExpressionNode'
  | 'HavingNode'
  | 'CreateSchemaNode'
  | 'DropSchemaNode'
  | 'AlterTableNode'
  | 'ModifyColumnNode'
  | 'DropColumnNode'
  | 'RenameColumnNode'
  | 'AlterColumnNode'
  | 'AddConstraintNode'
  | 'DropConstraintNode'
  | 'UnionNode'
  | 'CreateViewNode'
  | 'DropViewNode'
  | 'GeneratedAlwaysAsNode'
  | 'DefaultValueNode'
  | 'OnNode'

export interface OperationNode {
  readonly kind: OperationNodeKind
}
