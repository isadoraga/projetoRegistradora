cube(`VisitasConecta`, {
    sql: `SELECT * FROM public.fat_visita`,
  
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    },

    joins: {
        operacao: {
          sql: `${operacao}.sk_dim_operacao = ${VisitasConecta}.sk_dim_operacao`,
          relationship: `hasMany`
        },

        promotor: {
            sql: `${promotor}.sk_dim_promotor = ${VisitasConecta}.sk_dim_promotor`,
            relationship: `hasMany`
        
        },
        regiao: {
            sql: `${regiao}.cadastroid = ${VisitasConecta}.cadastroid`,
            relationship: `hasMany`
        
        },


    measures: {
        proc_inst_id_:{
                type: `count`,
            }
        },

    dimensions: {
            idvisita: {
                sql: `idvisita`,
                type: `number`,
                primaryKey: true
        },
            skOperacao: {
                sql: `sk_dim_operacao`,
                type: `number`,
        },

            skPromotor: {
                sql: `sk_dim_promotor`,
                type: `number`,
        },
        
            Regiao: {
                sql: `cadastroid`,
                type: `number`,
        },
    },
},

dataSource: `default`
});
