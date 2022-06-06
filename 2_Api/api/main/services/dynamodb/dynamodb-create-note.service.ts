import { NOTES_TABLE } from '../../../constants';
import { docClient } from '../../../instances/aws';

export const dynamodbCreateNote = (note: any) =>
  docClient
    .put({
      TableName: NOTES_TABLE,
      Item: note
    })
    .promise();
