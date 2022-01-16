interface IDBManager<C = any> {
  connect(): Promise<C>;
}

export { IDBManager };
