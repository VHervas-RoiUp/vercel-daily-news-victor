import type { Category } from 'types';

export type CategorySelectOption = { value: string; label: string };

const ALL: CategorySelectOption = { value: '', label: 'All categories' };

export function buildCategoryOptions(
  list: Category[] | null | undefined
): CategorySelectOption[] {
  const fromApi = (list ?? []).flatMap((category) => {
    const { slug, name } = category;
    if (!slug || !name) return [];
    return [{ value: slug, label: name }];
  });

  return [ALL, ...fromApi];
}
