cube(`Arranjo`, {
  sql: `SELECT * FROM dimensao.arranjo`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dateFrom, dateTo]
    }
  },
  
  dimensions: {
    skArranjo: {
      sql: `sk_arranjo`,
      type: `number`,
      primaryKey: true
    },
    
    nomeArranjo: {
      sql: `descricao`,
      type: `string`
    },
    
    tipoPagamento: {
      sql: `tipo`,
      type: `string`
    },
    
    codigoAranjo: {
      sql: `codigo`,
      type: `string`
    },
    
    dateFrom: {
      sql: `date_from`,
      type: `time`
    },
    
    dateTo: {
      sql: `date_to`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
