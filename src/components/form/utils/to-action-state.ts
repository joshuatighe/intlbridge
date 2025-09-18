import z from "zod";

export type ActionState = { message: string; payload?: FormData };

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData,
): ActionState => {
  if (error instanceof z.ZodError) {
    // zod form validation error
    return {
      message: error.issues[0].message,
      payload: formData,
    };
  } else if (error instanceof Error) {
    // if a different instance of error return error message
    return {
      message: error.message,
      payload: formData,
    };
  } else {
    // return generic error message for unknown error
    return {
      message: "An unknown error occured",
      payload: formData,
    };
  }
};
