"use server";

import { addFlat, updateFlat, deleteFlat } from "@/api/flat";
import { Tags } from "@/types";
import { revalidateTag } from "next/cache";

export const addFlatAction = async <T>(values: T) => {
  try {
    const { data } = await addFlat(values);
    revalidateTag(Tags.Flats);
    return { success: "Flat has been added successfully", data };
  } catch (error) {
    return { error: "An error occurred while adding the flat" };
  }
};

export const updateFlatAction = async <T>(id: string, values: T) => {
  try {
    const { data } = await updateFlat(id, values);

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
