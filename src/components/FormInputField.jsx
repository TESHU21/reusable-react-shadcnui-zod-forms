import React from "react";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const FormInputField = ({ label, type, name, value, onChange, options }) => {
  return (
    <div>
      <div>
        <Label>{label}</Label>
        {type === "select" ? (
          <Select value={value} onChange={onChange}>
            <SelectTrigger id={name} name={name} className="w-[180px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.name} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : type === "textarea" ? (
          <Textarea
            placeholder="Type your message here"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className=""
          />
        ) : (
          <Input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="  py-2 border-2 border-stone-200 focus:outline-none   focus:ring-indigo-100 focus:border-indigo-500 rounded-md "
          />
        )}
      </div>
    </div>
  );
};

export default FormInputField;
