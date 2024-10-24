export type SearchInput = {
  page?: number
  per_page?: number
  sort?: string | null
  sort_dir?: 'asc' | 'desc'
  filter: string | null
}

export type SearchOutput<Model> = {
  items: Model[]
  per_page: number
  total: number
  current_page: number
  sort: string | null
  sort_dir: string | null
  filter: string | null
}

export interface RepositoryInterface<Model, CreateProps> {
  create(props: CreateProps): Model
  insert(model: Model): Promise<Model>
  findById(id: string): Promise<Model>
  update(model: Model): Promise<Model>
  delete(props: SearchInput): Promise<SearchOutput<Model>>
}
