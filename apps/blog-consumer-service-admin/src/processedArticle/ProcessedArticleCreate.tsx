import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedArticleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="authorName" source="authorName" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="processedAt" source="processedAt" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
