"use server";

export const handleContactForm = async (data: Record<string, FormDataEntryValue>) => {
  console.log(data);
  return { success: true, message: "Message sent successfully" };
};
