"use server";

import { addFlat, updateFlat, deleteFlat } from "@/api/flat";
import { Tags } from "@/types";
import { revalidatePath, revalidateTag } from "next/cache";

export const addFlatAction = async <T>(values: T) => {
  try {
    console.log("addFlatAction");

    const data = await addFlat(values);
    // revalidateTag(Tags.Flats);
    revalidatePath("/", "page");
    return { success: "Flat has been added successfully", data };
  } catch (error) {
    console.log(error.response.data.data.errors);
    return { error: "An error occurred while adding the flat" };
  }
};

export const updateFlatAction = async <T>(values: T) => {
  try {
    const data = await updateFlat(values);

    return { success: "Flat has been updated successfully", data };
  } catch (error) {
    return { error: "An error occurred while updating the flat" };
  } finally {
    revalidateTag(Tags.Flats);
  }
};

export const deleteFlatAction = async (id: string) => {
  try {
    await deleteFlat(id);
    return { success: "Flat has been deleted successfully" };
  } catch (error) {
    return { error: "An error occurred while deleting the flat" };
  } finally {
    revalidateTag(Tags.Flats);
  }
};
