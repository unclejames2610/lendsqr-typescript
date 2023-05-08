import React from "react";

export const isEmpty = (obj: any) => {
  return Object.keys(obj).length === 0;
};

export const isString = (value: any) => {
  return typeof value === "string";
};

export const isBoolean = (value: any) => {
  return typeof value === "boolean";
};

export const isNumber = (value: any) => {
  return typeof value === "number" && isFinite(value);
};

export const toLower = (value: string) => {
  return value.toLowerCase();
};
