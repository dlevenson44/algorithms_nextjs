export type LinkTitles =
  | 'Asymptotic Notation'
  | 'Binary Search'
  | 'Recursion'
  | 'Selection Sort'
  | 'Insertion Sort'
  | 'Merge Sort'
  | 'Quick Sort'
  | 'Graph Representation'
  | 'Breadth-First Search'

export type LinkUrls =
  | 'asymptotic-notation'
  | 'binary-search'
  | 'recursion'
  | 'selection-sort'
  | 'insertion-sort'
  | 'merge-sort'
  | 'quick-sort'
  | 'graph-representation'
  | 'breadth-first-search'

export interface Link {
  title: LinkTitles
  url: LinkUrls
}
