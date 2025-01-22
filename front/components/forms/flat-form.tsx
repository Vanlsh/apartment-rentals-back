import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  flatFields,
  flatSchema,
  FlatSchema,
  getDefaultFlatValues,
} from "./utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import DropzoneInput, { DropzoneUploadedImage } from "../common/dropzone-input";
import { Button } from "../ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Divide } from "lucide-react";

interface IFlatFormProps {
  defaultValues?: Partial<FlatSchema>;
  onSubmit: (values: FlatSchema) => void;
}

const FlatForm = ({ defaultValues, onSubmit }: IFlatFormProps) => {
  const form = useForm<FlatSchema>({
    resolver: zodResolver(flatSchema),
    defaultValues: getDefaultFlatValues(defaultValues),
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <ScrollArea className="h-96 -m-3">
          <div className="p-3">
            {flatFields.map((flatField) => (
              <FormField
                key={flatField.name}
                name={flatField.name}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {flatField.label}
                      {flatField.required ? "*" : ""}
                    </FormLabel>
                    {flatField.type === "input" && (
                      <FormControl>
                        <Input
                          onChange={field.onChange}
                          value={field.value?.toString()}
                        />
                      </FormControl>
                    )}
                    {flatField.type === "select" && (
                      <FormControl>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                          defaultValue={String(field.value)}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select amount of rooms" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {flatField.options.map((option) => (
                              <SelectItem key={option} value={String(option)}>
                                {option === 1 ? "1 room" : `${option} rooms`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    )}
                    {flatField.type === "textarea" && (
                      <Textarea
                        value={String(field.value)}
                        onChange={field.onChange}
                      />
                    )}
                    {flatField.type === "photo" && (
                      <>
                        {field.value ? (
                          <DropzoneUploadedImage
                            width={448}
                            height={200}
                            alt="Flat image"
                            wrapperClassName="h-64"
                            src={
                              typeof field.value === "string" ||
                              field.value instanceof String
                                ? (field.value as string)
                                : URL.createObjectURL(field.value as File)
                            }
                            onChange={field.onChange}
                          />
                        ) : (
                          <DropzoneInput
                            className="h-64"
                            onChange={field.onChange}
                            accept={{
                              "image/*": [...flatField.acceptedFormats],
                            }}
                          />
                        )}
                      </>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </ScrollArea>
        <Button className="flex ml-auto mt-4">
          {defaultValues ? "Edit apartment" : "Create apartment"}
        </Button>
      </form>
    </Form>
  );
};

export default FlatForm;
