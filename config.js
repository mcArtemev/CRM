module.exports = {
  server: {
    port: 8000,
    salt: '$2y$12$T1siW2tXqGd1VNRBo7rUL.uM41G/3N5S8UbopBBTAZgS/6qoyfOIG',
    db: {
      baseUrl: 'mongodb://localhost',
      port: 27017,
      name: 'crm',
      username: '',
      password: '',
      fullUrl() { return `${this.baseUrl}:${this.port}/${this.name}`; }
    },
    session: {
      secret: 'WDFBHJ12UI4HIWJF90WUIfi23hnjkrh',
      cookieMaxAge: 45600000000
    }
  }
};
