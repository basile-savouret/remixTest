import type { MetaFunction } from "@remix-run/node";
import autoForm from "./autoForm.json";
import { AutoForm, BackAutoFormData, Button, autoFormFormatter } from "@komune-io/g2";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return autoForm
};

export default function Index() {

  const formData = useLoaderData<BackAutoFormData>();

  return (
    <AutoForm
      formData={autoFormFormatter(formData)}
      onSubmit={(command, values) => console.log(command, values)}
      getFormActions={(formState) => (
        <Button onClick={formState.submitForm}>Submit</Button>
      )}
    />
  );
}
