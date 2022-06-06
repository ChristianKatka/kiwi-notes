import { NOTES_TABLE } from '../../../constants';
import { docClient } from '../../../instances/aws';

export const dynamodbGetAllNotes = async () => {
  return await docClient
    .scan({
      TableName: NOTES_TABLE,
    })
    .promise()
    .then((res) => (res.Items ? res.Items : []));
};
