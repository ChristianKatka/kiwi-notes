import {
  Attribute,
  AutoGenerateAttribute,
  AUTO_GENERATE_ATTRIBUTE_STRATEGY,
  Entity,
  INDEX_TYPE,
  Table,
} from '@typedorm/common';

export const dynamoDBSampleAppTable = new Table({
  name: 'dynamodb-sample-table',
  partitionKey: 'PK',
  sortKey: 'SK',
  indexes: {
    GSI1: {
      partitionKey: 'GSI1PK',
      sortKey: 'GSI1SK',
      type: INDEX_TYPE.GSI,
    },
  },
});

export enum PRODUCT_STATUS {
  ACTIVE = 'ACTIVE',
  DISCONTINUED = 'DISCONTINUED',
}

@Entity({
  name: 'product',
  primaryKey: {
    // {{}} is the special syntax that TypeDORM understands and will automatecally replace the placeholder within it with actual value at run time
    partitionKey: 'PRODUCT#{{id}}',
    sortKey: 'PRODUCT',
  },
  indexes: {
    GSI1: {
      type: INDEX_TYPE.GSI,
      partitionKey: 'PRODUCT',
      sortKey: 'STATUS#{{status}}',
    },
  },
})
export class Product {
  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.UUID4,
  })
  id: string;

  @Attribute({
    isEnum: true, // ATM, when using enum as type, this needs to be defined explicitly
  })
  status: PRODUCT_STATUS;

  //... additional attributes
}


// EMPLOYYEE
