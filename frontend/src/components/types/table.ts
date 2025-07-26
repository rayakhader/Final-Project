export type Column<T> = {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
};

export type DataTableProps<T extends { id: number }> = {
  columns: Column<T>[];
  data: T[];
  onOpenEditDialog: (id: number) => void;
  onOpenConfirmDeleteDialog: (id: number) => void;
  isLoading?: boolean;
};

export type ShowMore = { [key: number]: boolean };
