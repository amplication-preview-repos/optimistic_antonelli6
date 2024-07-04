import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedArticleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="authorName" source="authorName" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="processedAt" source="processedAt" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
