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
// user
export type TUserTypes = {
  _id?: string;
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  referralCode?: string;
  referredBy?: string;
  referralPoints?: number;
  credits?: number;
  firstPurchaseDone?: boolean;
};
// form input
export type TInputTypes = {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
};
// card
export type TCardTypes = {
  _id?: string;
  img: string;
  title: string;
  price: number;
  discount: number;
};
