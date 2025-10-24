import { ReactNode } from "react";
import {
  FieldError,
  UseFormRegisterReturn,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";

export type TLayoutProps = {
  children: ReactNode;
};

export type TInputTypes = {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};
