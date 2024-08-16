import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ReusableFormComp = ({
  schema,
  initialValues,
  fields,
  onSubmit,
  submitBtnText,
}) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });
  const { setValue } = form;

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center "
        >
          {fields.map(({ type, name, value, label, options }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full  space-y-2 mb-6">
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    {type === "select" ? (
                      <Select
                        onValueChange={(value) => setValue("role", value)}
                        value={value}
                      >
                        <SelectTrigger id={name}>
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                        <SelectContent>
                          {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : type === "textarea" ? (
                      <Textarea
                        {...field}
                        placeholder="Type your message here"
                        id={name}
                      />
                    ) : (
                      <Input
                        {...field}
                        type={type}
                        id={name}
                        className="  border-2 border-stone-200 focus:outline-none focus:ring-indigo-100 focus:border-indigo-500 rounded-md"
                      />
                    )}
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
          ))}
          <div className=" mt-8 ">
            <Button type="submit" className=" w-[6rem] ">
              {submitBtnText}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ReusableFormComp;
